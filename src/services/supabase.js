import { createClient } from '@supabase/supabase-js';
import AITool from '../types/AITool';

// Supabase配置
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// 创建Supabase客户端（仅在客户端）
let supabase = null;

if (typeof window !== 'undefined' && supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };

// AI工具数据库服务
export class AIToolService {
  constructor() {
    this.tableName = 'ai_tools';
  }

  // 检查Supabase是否可用
  checkSupabase() {
    if (!supabase) {
      throw new Error('Supabase客户端未初始化，请检查环境变量配置');
    }
  }

  // 获取所有AI工具
  async getAllTools() {
    try {
      this.checkSupabase();
      const { data, error } = await supabase
        .from(this.tableName)
        .select('*')
        .eq('status', 'active')
        .order('rating', { ascending: false });

      if (error) throw error;

      return data.map(tool => new AITool(tool));
    } catch (error) {
      console.error('获取AI工具失败:', error);
      return [];
    }
  }

  // 根据ID获取AI工具
  async getToolById(id) {
    try {
      const { data, error } = await supabase
        .from(this.tableName)
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      return new AITool(data);
    } catch (error) {
      console.error('获取AI工具失败:', error);
      return null;
    }
  }

  // 根据分类获取AI工具
  async getToolsByCategory(category) {
    try {
      const { data, error } = await supabase
        .from(this.tableName)
        .select('*')
        .eq('category', category)
        .eq('status', 'active')
        .order('rating', { ascending: false });

      if (error) throw error;

      return data.map(tool => new AITool(tool));
    } catch (error) {
      console.error('根据分类获取AI工具失败:', error);
      return [];
    }
  }

  // 搜索AI工具
  async searchTools(query) {
    try {
      const { data, error } = await supabase
        .from(this.tableName)
        .select('*')
        .eq('status', 'active')
        .or(`name.ilike.%${query}%,description.ilike.%${query}%,tags.cs.{${query}}`)
        .order('rating', { ascending: false });

      if (error) throw error;

      return data.map(tool => new AITool(tool));
    } catch (error) {
      console.error('搜索AI工具失败:', error);
      return [];
    }
  }

  // 获取热门AI工具
  async getPopularTools(limit = 6) {
    try {
      const { data, error } = await supabase
        .from(this.tableName)
        .select('*')
        .eq('status', 'active')
        .gte('rating', 4.5)
        .order('rating', { ascending: false })
        .limit(limit);

      if (error) throw error;

      return data.map(tool => new AITool(tool));
    } catch (error) {
      console.error('获取热门AI工具失败:', error);
      return [];
    }
  }

  // 获取最新AI工具
  async getLatestTools(limit = 6) {
    try {
      const { data, error } = await supabase
        .from(this.tableName)
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) throw error;

      return data.map(tool => new AITool(tool));
    } catch (error) {
      console.error('获取最新AI工具失败:', error);
      return [];
    }
  }

  // 创建AI工具
  async createTool(toolData) {
    try {
      const tool = new AITool(toolData);
      const validation = tool.validate();
      
      if (!validation.isValid) {
        throw new Error(`数据验证失败: ${validation.errors.join(', ')}`);
      }

      const { data, error } = await supabase
        .from(this.tableName)
        .insert([tool.toObject()])
        .select()
        .single();

      if (error) throw error;

      return new AITool(data);
    } catch (error) {
      console.error('创建AI工具失败:', error);
      throw error;
    }
  }

  // 更新AI工具
  async updateTool(id, updates) {
    try {
      const { data, error } = await supabase
        .from(this.tableName)
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      return new AITool(data);
    } catch (error) {
      console.error('更新AI工具失败:', error);
      throw error;
    }
  }

  // 删除AI工具（软删除）
  async deleteTool(id) {
    try {
      const { error } = await supabase
        .from(this.tableName)
        .update({ status: 'deleted', updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      return true;
    } catch (error) {
      console.error('删除AI工具失败:', error);
      throw error;
    }
  }

  // 增加浏览次数
  async incrementViewCount(id) {
    try {
      const { error } = await supabase
        .from(this.tableName)
        .update({ 
          view_count: supabase.sql`view_count + 1`,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);

      if (error) throw error;

      return true;
    } catch (error) {
      console.error('增加浏览次数失败:', error);
      return false;
    }
  }

  // 增加点击次数
  async incrementClickCount(id) {
    try {
      const { error } = await supabase
        .from(this.tableName)
        .update({ 
          click_count: supabase.sql`click_count + 1`,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);

      if (error) throw error;

      return true;
    } catch (error) {
      console.error('增加点击次数失败:', error);
      return false;
    }
  }

  // 获取统计信息
  async getStats() {
    try {
      const { data, error } = await supabase
        .from(this.tableName)
        .select('category, rating, review_count')
        .eq('status', 'active');

      if (error) throw error;

      const stats = {
        totalTools: data.length,
        averageRating: data.reduce((sum, tool) => sum + tool.rating, 0) / data.length,
        totalReviews: data.reduce((sum, tool) => sum + tool.review_count, 0),
        categories: {}
      };

      // 按分类统计
      data.forEach(tool => {
        if (!stats.categories[tool.category]) {
          stats.categories[tool.category] = {
            count: 0,
            totalRating: 0,
            totalReviews: 0
          };
        }
        stats.categories[tool.category].count++;
        stats.categories[tool.category].totalRating += tool.rating;
        stats.categories[tool.category].totalReviews += tool.review_count;
      });

      // 计算平均评分
      Object.keys(stats.categories).forEach(category => {
        const cat = stats.categories[category];
        cat.averageRating = cat.totalRating / cat.count;
      });

      return stats;
    } catch (error) {
      console.error('获取统计信息失败:', error);
      return {
        totalTools: 0,
        averageRating: 0,
        totalReviews: 0,
        categories: {}
      };
    }
  }

  // 上传图片到Supabase Storage
  async uploadImage(file, path) {
    try {
      const { data, error } = await supabase.storage
        .from('ai-tools-images')
        .upload(path, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) throw error;

      // 获取公共URL
      const { data: { publicUrl } } = supabase.storage
        .from('ai-tools-images')
        .getPublicUrl(path);

      return publicUrl;
    } catch (error) {
      console.error('上传图片失败:', error);
      throw error;
    }
  }

  // 删除图片
  async deleteImage(path) {
    try {
      const { error } = await supabase.storage
        .from('ai-tools-images')
        .remove([path]);

      if (error) throw error;

      return true;
    } catch (error) {
      console.error('删除图片失败:', error);
      throw error;
    }
  }
}

// 创建服务实例
export const aiToolService = new AIToolService();

export default aiToolService; 