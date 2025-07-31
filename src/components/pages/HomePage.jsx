"use client";

import React, { useState, useEffect } from 'react';
import ToolCard from '../ui/ToolCard';
import SearchBar from '../ui/SearchBar';
import CategoryFilter from '../ui/CategoryFilter';
import { getAllTools, getToolsByCategory, searchTools, categories } from '../../data/toolsData';

// 首页组件 - 展示AI工具列表
const HomePage = () => {
  const [tools, setTools] = useState([]);
  const [allTools, setAllTools] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // 初始化数据
  useEffect(() => {
    const loadTools = () => {
      try {
        const toolsData = getAllTools();
        setAllTools(toolsData);
        setTools(toolsData);
        setIsLoading(false);
        console.log('工具数据加载成功：', toolsData.length, '个工具');
      } catch (error) {
        console.error('加载工具数据失败：', error);
        setIsLoading(false);
      }
    };

    loadTools();
  }, []);

  // 处理搜索
  const handleSearch = (query) => {
    setSearchQuery(query);
    filterTools(query, selectedCategory);
  };

  // 处理分类筛选
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    filterTools(searchQuery, category);
  };

  // 筛选工具
  const filterTools = (query, category) => {
    let filteredTools = allTools;

    if (category) {
      filteredTools = getToolsByCategory(category);
    }

    if (query.trim()) {
      filteredTools = searchTools(query);
      if (category) {
        filteredTools = filteredTools.filter(tool => tool.category === category);
      }
    }

    setTools(filteredTools);
    console.log('筛选结果：', filteredTools.length, '个工具');
  };

  // 处理工具点击
  const handleToolClick = (tool) => {
    console.log('用户点击工具：', tool.name);
    window.open(tool.website, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 英雄区域 */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            发现最佳
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              AI工具
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            探索最新、最实用的AI工具，提升您的工作效率和创造力。
          </p>

          <div className="mb-8">
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-300">{allTools.length}+</div>
              <div className="text-blue-100 text-sm">精选工具</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-300">{categories.length}</div>
              <div className="text-blue-100 text-sm">工具分类</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-300">24/7</div>
              <div className="text-blue-100 text-sm">持续更新</div>
            </div>
          </div>
        </div>
      </section>

      {/* 主要内容区域 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* 搜索结果提示 */}
        {(searchQuery || selectedCategory) && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-blue-800 font-medium">
                找到 {tools.length} 个工具
                {searchQuery && ` (搜索: "${searchQuery}")`}
                {selectedCategory && ` (分类: "${categories.find(c => c.id === selectedCategory)?.name}")`}
              </span>
            </div>
          </div>
        )}

        {/* 加载状态 */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* 工具网格 */}
        {!isLoading && (
          <>
            {tools.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {tools.map((tool) => (
                  <div key={tool.id} onClick={() => handleToolClick(tool)}>
                    <ToolCard tool={tool} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">没有找到相关工具</h3>
                <p className="text-gray-500 mb-4">尝试调整搜索关键词或选择其他分类</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('');
                    setTools(allTools);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  查看全部工具
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default HomePage; 