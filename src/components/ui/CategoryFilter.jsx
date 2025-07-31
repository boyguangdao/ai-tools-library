"use client";

import React from 'react';

// 分类筛选组件 - 用于按分类筛选AI工具
const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="flex space-x-3 min-w-max px-4">
        {/* 全部分类按钮 */}
        <button
          onClick={() => onCategoryChange('')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex items-center space-x-2 ${selectedCategory === '' 
            ? 'bg-blue-500 text-white shadow-lg' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span className="text-lg">🌟</span>
          <span>全部工具</span>
        </button>

        {/* 分类按钮 */}
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap flex items-center space-x-2 ${selectedCategory === category.id 
              ? `${category.color} text-white shadow-lg` 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="text-lg">{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter; 