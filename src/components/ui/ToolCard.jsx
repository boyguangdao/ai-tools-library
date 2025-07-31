"use client";

import React from 'react';
import AITool from '../../types/AITool';

// 工具卡片组件 - 展示AI工具的基本信息
const ToolCard = ({ tool }) => {
  // 确保tool是AITool实例
  const aiTool = tool instanceof AITool ? tool : new AITool(tool);

  // 处理工具点击
  const handleToolClick = () => {
    // 增加点击次数
    aiTool.incrementClickCount();
    
    // 打开工具网站
    window.open(aiTool.website, '_blank');
  };

  // 处理访问按钮点击
  const handleVisitClick = (e) => {
    e.stopPropagation();
    handleToolClick();
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100"
      onClick={handleToolClick}
    >
      {/* 工具图片区域 */}
      <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        {/* Logo图片 */}
        <img 
          src={aiTool.getLogoUrl()}
          alt={`${aiTool.name} logo`}
          className="w-24 h-24 object-contain rounded-lg shadow-sm"
          onError={(e) => {
            // 如果图片加载失败，显示默认图标
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        
        {/* 默认图标（当Logo加载失败时显示） */}
        <div className="text-6xl opacity-20 hidden">
          {aiTool.name.charAt(0)}
        </div>
        
        {/* 价格标签 */}
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${aiTool.getPricingColor()}`}>
          {aiTool.pricing}
        </div>

        {/* 热门标签 */}
        {aiTool.isPopular() && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
            🔥 热门
          </div>
        )}
      </div>

      {/* 工具信息区域 */}
      <div className="p-6 space-y-3">
        {/* 工具名称 */}
        <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
          {aiTool.name}
        </h3>

        {/* 工具描述 */}
        <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
          {aiTool.description}
        </p>

        {/* 标签区域 */}
        <div className="flex flex-wrap gap-2">
          {aiTool.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
              {tag}
            </span>
          ))}
        </div>

        {/* 评分和评论数 */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-1">
            <span className="text-sm text-yellow-500">
              {aiTool.getRatingStars()}
            </span>
            <span className="text-sm text-gray-600 ml-1">
              {aiTool.rating}
            </span>
          </div>
          
          <span className="text-sm text-gray-500">
            {aiTool.getFormattedReviewCount()} 评价
          </span>
        </div>

        {/* 统计信息 */}
        <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-100">
          <span>👁️ {aiTool.viewCount.toLocaleString()}</span>
          <span>👆 {aiTool.clickCount.toLocaleString()}</span>
          <span>❤️ {aiTool.favoriteCount.toLocaleString()}</span>
        </div>

        {/* 访问按钮 */}
        <button 
          onClick={handleVisitClick}
          className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
        >
          访问网站
        </button>
      </div>
    </div>
  );
};

export default ToolCard; 