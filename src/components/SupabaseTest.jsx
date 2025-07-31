"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';

// Supabase连接测试组件
const SupabaseTest = () => {
  const [connectionStatus, setConnectionStatus] = useState('testing');
  const [testResults, setTestResults] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    testConnection();
  }, []);

  const testConnection = async () => {
    try {
      setConnectionStatus('testing');
      setError(null);
      
      const results = {};

      // 测试1: 基本连接
      try {
        const { data, error } = await supabase
          .from('ai_tools')
          .select('count')
          .limit(1);
        
        results.basicConnection = {
          success: !error,
          message: error ? `连接失败: ${error.message}` : '连接成功',
          data: data
        };
      } catch (err) {
        results.basicConnection = {
          success: false,
          message: `连接错误: ${err.message}`,
          data: null
        };
      }

      // 测试2: 获取工具数据
      try {
        const { data, error } = await supabase
          .from('ai_tools')
          .select('*')
          .eq('status', 'active')
          .limit(5);
        
        results.dataQuery = {
          success: !error,
          message: error ? `查询失败: ${error.message}` : `查询成功，找到 ${data?.length || 0} 个工具`,
          data: data
        };
      } catch (err) {
        results.dataQuery = {
          success: false,
          message: `查询错误: ${err.message}`,
          data: null
        };
      }

      // 测试3: 获取分类数据
      try {
        const { data, error } = await supabase
          .from('ai_categories')
          .select('*')
          .eq('is_active', true);
        
        results.categoriesQuery = {
          success: !error,
          message: error ? `分类查询失败: ${error.message}` : `分类查询成功，找到 ${data?.length || 0} 个分类`,
          data: data
        };
      } catch (err) {
        results.categoriesQuery = {
          success: false,
          message: `分类查询错误: ${err.message}`,
          data: null
        };
      }

      setTestResults(results);
      setConnectionStatus('completed');
      
    } catch (err) {
      setError(err.message);
      setConnectionStatus('error');
    }
  };

  const getStatusColor = (success) => {
    return success ? 'text-green-600' : 'text-red-600';
  };

  const getStatusIcon = (success) => {
    return success ? '✅' : '❌';
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Supabase 连接测试</h2>
      
      {/* 测试状态 */}
      <div className="mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-lg">
            {connectionStatus === 'testing' && '🔄 测试中...'}
            {connectionStatus === 'completed' && '✅ 测试完成'}
            {connectionStatus === 'error' && '❌ 测试失败'}
          </span>
          {connectionStatus === 'testing' && (
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
          )}
        </div>
      </div>

      {/* 错误信息 */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <h3 className="text-red-800 font-semibold mb-2">错误信息</h3>
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {/* 测试结果 */}
      {connectionStatus === 'completed' && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">测试结果</h3>
          
          {/* 基本连接测试 */}
          <div className="p-4 border rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-lg">{getStatusIcon(testResults.basicConnection?.success)}</span>
              <h4 className="font-medium">基本连接测试</h4>
            </div>
            <p className={`text-sm ${getStatusColor(testResults.basicConnection?.success)}`}>
              {testResults.basicConnection?.message}
            </p>
          </div>

          {/* 数据查询测试 */}
          <div className="p-4 border rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-lg">{getStatusIcon(testResults.dataQuery?.success)}</span>
              <h4 className="font-medium">数据查询测试</h4>
            </div>
            <p className={`text-sm ${getStatusColor(testResults.dataQuery?.success)}`}>
              {testResults.dataQuery?.message}
            </p>
            {testResults.dataQuery?.data && testResults.dataQuery.data.length > 0 && (
              <div className="mt-2 text-xs text-gray-600">
                <p>示例数据:</p>
                <ul className="list-disc list-inside">
                  {testResults.dataQuery.data.slice(0, 3).map((tool, index) => (
                    <li key={index}>{tool.name} - {tool.category}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 分类查询测试 */}
          <div className="p-4 border rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-lg">{getStatusIcon(testResults.categoriesQuery?.success)}</span>
              <h4 className="font-medium">分类查询测试</h4>
            </div>
            <p className={`text-sm ${getStatusColor(testResults.categoriesQuery?.success)}`}>
              {testResults.categoriesQuery?.message}
            </p>
            {testResults.categoriesQuery?.data && testResults.categoriesQuery.data.length > 0 && (
              <div className="mt-2 text-xs text-gray-600">
                <p>分类列表:</p>
                <ul className="list-disc list-inside">
                  {testResults.categoriesQuery.data.map((category, index) => (
                    <li key={index}>{category.name} ({category.id})</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 重新测试按钮 */}
      <div className="mt-6">
        <button
          onClick={testConnection}
          disabled={connectionStatus === 'testing'}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {connectionStatus === 'testing' ? '测试中...' : '重新测试'}
        </button>
      </div>

      {/* 配置说明 */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-blue-800 font-semibold mb-2">配置说明</h3>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• 确保已创建 Supabase 项目</li>
          <li>• 检查 .env.local 文件中的环境变量</li>
          <li>• 确认已执行 database/setup.sql 脚本</li>
          <li>• 检查网络连接和防火墙设置</li>
        </ul>
      </div>
    </div>
  );
};

export default SupabaseTest; 