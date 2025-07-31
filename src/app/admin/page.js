"use client";

import React, { useState, useEffect } from 'react';
import databaseManager from '../../data/aiToolsDatabase';

// 管理员页面 - 用于管理AI工具数据库
const AdminPage = () => {
  const [tools, setTools] = useState([]);
  const [categories, setCategories] = useState([]);
  const [stats, setStats] = useState({});
  const [selectedTool, setSelectedTool] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const allTools = databaseManager.getAllTools();
    const allCategories = databaseManager.getAllCategories();
    const allStats = databaseManager.getStats();
    
    setTools(allTools);
    setCategories(allCategories);
    setStats(allStats);
  };

  const handleEditTool = (tool) => {
    setSelectedTool(tool);
    setIsEditing(true);
  };

  const handleDeleteTool = (toolId) => {
    if (confirm('确定要删除这个工具吗？')) {
      const success = databaseManager.deleteTool(toolId);
      if (success) {
        loadData();
        alert('工具删除成功！');
      } else {
        alert('删除失败，请重试。');
      }
    }
  };

  const handleUpdateTool = (updatedTool) => {
    const success = databaseManager.updateTool(updatedTool.id, updatedTool);
    if (success) {
      loadData();
      setIsEditing(false);
      setSelectedTool(null);
      alert('工具更新成功！');
    } else {
      alert('更新失败，请重试。');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">AI工具数据库管理</h1>
          <p className="text-gray-600 mt-2">管理AI工具的数据和分类信息</p>
        </div>

        {/* 统计信息 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900">总工具数</h3>
            <p className="text-3xl font-bold text-blue-600">{stats.totalTools || 0}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900">分类数量</h3>
            <p className="text-3xl font-bold text-green-600">{categories.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900">平均评分</h3>
            <p className="text-3xl font-bold text-yellow-600">
              {stats.averageRating ? stats.averageRating.toFixed(1) : '0.0'}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900">活跃工具</h3>
            <p className="text-3xl font-bold text-purple-600">{tools.length}</p>
          </div>
        </div>

        {/* 分类统计 */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">分类统计</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{category.icon}</span>
                    <div>
                      <h3 className="font-medium text-gray-900">{category.name}</h3>
                      <p className="text-sm text-gray-500">{category.description}</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-blue-600">{category.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 工具列表 */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">工具管理</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    工具名称
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    分类
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    评分
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    价格
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    状态
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tools.map((tool) => (
                  <tr key={tool.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img 
                            className="h-10 w-10 rounded-lg object-contain"
                            src={`/images/logos/${tool.id}.png`}
                            alt={tool.name}
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{tool.name}</div>
                          <div className="text-sm text-gray-500">{tool.description.substring(0, 50)}...</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {categories.find(c => c.id === tool.category)?.name || tool.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {tool.rating} ⭐
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        tool.pricing === '免费' ? 'bg-green-100 text-green-800' :
                        tool.pricing === '免费增值' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {tool.pricing}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {tool.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => handleEditTool(tool)}
                        className="text-blue-600 hover:text-blue-900 mr-4"
                      >
                        编辑
                      </button>
                      <button
                        onClick={() => handleDeleteTool(tool.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        删除
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 编辑模态框 */}
        {isEditing && selectedTool && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900 mb-4">编辑工具信息</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const updatedTool = {
                    ...selectedTool,
                    name: formData.get('name'),
                    description: formData.get('description'),
                    pricing: formData.get('pricing'),
                    rating: parseFloat(formData.get('rating')),
                    reviewCount: parseInt(formData.get('reviewCount'))
                  };
                  handleUpdateTool(updatedTool);
                }}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">工具名称</label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={selectedTool.name}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">描述</label>
                      <textarea
                        name="description"
                        defaultValue={selectedTool.description}
                        rows="3"
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">价格模式</label>
                      <select
                        name="pricing"
                        defaultValue={selectedTool.pricing}
                        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                      >
                        <option value="免费">免费</option>
                        <option value="免费增值">免费增值</option>
                        <option value="付费">付费</option>
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">评分</label>
                        <input
                          type="number"
                          name="rating"
                          step="0.1"
                          min="0"
                          max="5"
                          defaultValue={selectedTool.rating}
                          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">评价数</label>
                        <input
                          type="number"
                          name="reviewCount"
                          defaultValue={selectedTool.reviewCount}
                          className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                      >
                        取消
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                      >
                        保存
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage; 