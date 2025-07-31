// 导入数据库
import { databaseManager, aiCategories, aiToolsDatabase } from './aiToolsDatabase';

// 导出分类数据
export const categories = aiCategories;

// 导出工具数据
export const toolsData = aiToolsDatabase;

// 获取所有工具
export const getAllTools = () => {
  return databaseManager.getAllTools();
};

// 根据分类获取工具
export const getToolsByCategory = (categoryId) => {
  return databaseManager.getToolsByCategory(categoryId);
};

// 搜索工具
export const searchTools = (query) => {
  return databaseManager.searchTools(query);
};

// 获取工具详情
export const getToolById = (toolId) => {
  return databaseManager.getToolById(toolId);
};

// 获取所有分类
export const getAllCategories = () => {
  return databaseManager.getAllCategories();
};

// 获取分类详情
export const getCategoryById = (categoryId) => {
  return databaseManager.getCategoryById(categoryId);
};

// 获取统计信息
export const getStats = () => {
  return databaseManager.getStats();
};

// 默认导出数据库管理器（仅管理员使用）
export default databaseManager; 