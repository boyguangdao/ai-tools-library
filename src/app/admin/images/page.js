"use client";

import React, { useState } from 'react';

// 图片管理页面 - 用于上传和管理AI工具的图片
const ImageManagementPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadType, setUploadType] = useState('logo');
  const [toolId, setToolId] = useState('');

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (!selectedFile || !toolId) {
      alert('请选择文件和输入工具ID');
      return;
    }

    // 这里应该实现实际的文件上传逻辑
    // 由于这是前端演示，我们只显示上传信息
    alert(`文件上传信息：
    文件名: ${selectedFile.name}
    文件大小: ${(selectedFile.size / 1024).toFixed(2)} KB
    文件类型: ${selectedFile.type}
    上传类型: ${uploadType}
    工具ID: ${toolId}
    
    注意：实际项目中需要实现服务器端文件上传功能`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 页面标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">图片管理</h1>
          <p className="text-gray-600 mt-2">上传和管理AI工具的Logo和截图</p>
        </div>

        {/* 上传区域 */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">上传图片</h2>
          
          <div className="space-y-6">
            {/* 上传类型选择 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                图片类型
              </label>
              <select
                value={uploadType}
                onChange={(e) => setUploadType(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="logo">Logo图片</option>
                <option value="screenshot">截图</option>
                <option value="category">分类图标</option>
              </select>
            </div>

            {/* 工具ID输入 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                工具ID
              </label>
              <input
                type="text"
                value={toolId}
                onChange={(e) => setToolId(e.target.value)}
                placeholder="例如: chatgpt, midjourney"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
              <p className="text-sm text-gray-500 mt-1">
                工具ID用于生成文件名，例如：chatgpt.png
              </p>
            </div>

            {/* 文件选择 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                选择图片文件
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
              {selectedFile && (
                <div className="mt-2 p-3 bg-gray-50 rounded-md">
                  <p className="text-sm text-gray-600">
                    已选择: {selectedFile.name} ({(selectedFile.size / 1024).toFixed(2)} KB)
                  </p>
                </div>
              )}
            </div>

            {/* 上传按钮 */}
            <button
              onClick={handleUpload}
              disabled={!selectedFile || !toolId}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              上传图片
            </button>
          </div>
        </div>

        {/* 图片管理说明 */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">图片管理说明</h2>
          
          <div className="space-y-6">
            {/* Logo图片说明 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Logo图片</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 文件路径: <code className="bg-gray-200 px-1 rounded">/images/logos/工具ID.png</code></li>
                  <li>• 建议尺寸: 200x200px 或 400x400px</li>
                  <li>• 文件格式: PNG（支持透明背景）或 SVG</li>
                  <li>• 示例: chatgpt.png, midjourney.png</li>
                </ul>
              </div>
            </div>

            {/* 截图说明 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">截图</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 文件路径: <code className="bg-gray-200 px-1 rounded">/images/screenshots/工具ID-序号.png</code></li>
                  <li>• 建议尺寸: 1200x800px 或 1600x900px</li>
                  <li>• 文件格式: PNG 或 JPG</li>
                  <li>• 示例: chatgpt-1.png, chatgpt-2.png</li>
                </ul>
              </div>
            </div>

            {/* 分类图标说明 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">分类图标</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 文件路径: <code className="bg-gray-200 px-1 rounded">/images/categories/分类ID.png</code></li>
                  <li>• 建议尺寸: 64x64px 或 128x128px</li>
                  <li>• 文件格式: PNG 或 SVG</li>
                  <li>• 示例: text-generation.png, image-generation.png</li>
                </ul>
              </div>
            </div>

            {/* 注意事项 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">注意事项</h3>
              <div className="bg-yellow-50 p-4 rounded-md">
                <ul className="text-sm text-yellow-800 space-y-2">
                  <li>• 图片文件大小建议控制在500KB以内</li>
                  <li>• 确保图片清晰，无模糊现象</li>
                  <li>• Logo图片建议使用透明背景</li>
                  <li>• 截图应避免包含个人信息</li>
                  <li>• 确保使用的图片有合法使用权限</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 现有图片列表 */}
        <div className="bg-white rounded-lg shadow p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">现有图片</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Logo图片 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Logo图片</h3>
              <div className="space-y-2">
                {['chatgpt', 'midjourney', 'github-copilot', 'notion-ai', 'dall-e', 'claude', 'runway', 'cursor'].map((toolId) => (
                  <div key={toolId} className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                    <img 
                      src={`/images/logos/${toolId}.png`}
                      alt={`${toolId} logo`}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="text-sm text-gray-600 hidden">📄</span>
                    <span className="text-sm font-medium text-gray-900">{toolId}.png</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 分类图标 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">分类图标</h3>
              <div className="space-y-2">
                {['text-generation', 'image-generation', 'video-generation', 'code-generation', 'productivity', 'audio-generation', 'research'].map((categoryId) => (
                  <div key={categoryId} className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                    <img 
                      src={`/images/categories/${categoryId}.png`}
                      alt={`${categoryId} icon`}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="text-sm text-gray-600 hidden">📁</span>
                    <span className="text-sm font-medium text-gray-900">{categoryId}.png</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 截图 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">截图</h3>
              <div className="space-y-2">
                {['chatgpt-1', 'chatgpt-2', 'midjourney-1', 'midjourney-2'].map((screenshotId) => (
                  <div key={screenshotId} className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                    <img 
                      src={`/images/screenshots/${screenshotId}.png`}
                      alt={`${screenshotId} screenshot`}
                      className="w-8 h-8 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <span className="text-sm text-gray-600 hidden">🖼️</span>
                    <span className="text-sm font-medium text-gray-900">{screenshotId}.png</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageManagementPage; 