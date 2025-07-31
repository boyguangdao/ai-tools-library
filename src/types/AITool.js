// AI工具类 - 包含所有AI工具的属性和方法
export class AITool {
  constructor(data = {}) {
    // 基本信息
    this.id = data.id || '';
    this.name = data.name || '';
    this.description = data.description || '';
    this.longDescription = data.longDescription || '';
    this.category = data.category || '';
    this.website = data.website || '';
    this.pricing = data.pricing || '免费';
    
    // 评分和评论
    this.rating = data.rating || 0;
    this.reviewCount = data.reviewCount || 0;
    
    // 标签和分类
    this.tags = data.tags || [];
    this.features = data.features || [];
    this.useCases = data.useCases || [];
    this.pros = data.pros || [];
    this.cons = data.cons || [];
    
    // 图片资源
    this.logo = data.logo || null;
    this.screenshots = data.screenshots || [];
    this.categoryIcon = data.categoryIcon || null;
    
    // 元数据
    this.createdAt = data.createdAt || new Date().toISOString();
    this.updatedAt = data.updatedAt || new Date().toISOString();
    this.status = data.status || 'active';
    
    // 统计信息
    this.viewCount = data.viewCount || 0;
    this.clickCount = data.clickCount || 0;
    this.favoriteCount = data.favoriteCount || 0;
  }

  // 获取Logo URL
  getLogoUrl() {
    if (this.logo && typeof this.logo === 'string') {
      return this.logo;
    }
    if (this.logo && this.logo.url) {
      return this.logo.url;
    }
    return `/images/logos/${this.id}.png`;
  }

  // 获取截图URL列表
  getScreenshotUrls() {
    if (Array.isArray(this.screenshots)) {
      return this.screenshots.map(screenshot => {
        if (typeof screenshot === 'string') {
          return screenshot;
        }
        if (screenshot && screenshot.url) {
          return screenshot.url;
        }
        return null;
      }).filter(url => url);
    }
    return [];
  }

  // 获取分类图标URL
  getCategoryIconUrl() {
    if (this.categoryIcon && typeof this.categoryIcon === 'string') {
      return this.categoryIcon;
    }
    if (this.categoryIcon && this.categoryIcon.url) {
      return this.categoryIcon.url;
    }
    return `/images/categories/${this.category}.png`;
  }

  // 获取价格标签样式
  getPricingColor() {
    switch (this.pricing) {
      case '免费':
        return 'bg-green-100 text-green-800';
      case '免费增值':
        return 'bg-blue-100 text-blue-800';
      case '付费':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }

  // 获取评分星级
  getRatingStars() {
    const stars = [];
    const fullStars = Math.floor(this.rating);
    const hasHalfStar = this.rating % 1 !== 0;
    
    // 渲染满星
    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }
    
    // 渲染半星
    if (hasHalfStar) {
      stars.push('⭐');
    }
    
    // 渲染空星
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push('☆');
    }
    
    return stars.join('');
  }

  // 格式化评论数
  getFormattedReviewCount() {
    if (this.reviewCount >= 1000000) {
      return `${(this.reviewCount / 1000000).toFixed(1)}M`;
    }
    if (this.reviewCount >= 1000) {
      return `${(this.reviewCount / 1000).toFixed(1)}K`;
    }
    return this.reviewCount.toLocaleString();
  }

  // 检查是否为热门工具
  isPopular() {
    return this.rating >= 4.5 && this.reviewCount >= 1000;
  }

  // 检查是否为免费工具
  isFree() {
    return this.pricing === '免费';
  }

  // 检查是否为付费工具
  isPaid() {
    return this.pricing === '付费';
  }

  // 获取工具状态
  isActive() {
    return this.status === 'active';
  }

  // 增加浏览次数
  incrementViewCount() {
    this.viewCount++;
    this.updatedAt = new Date().toISOString();
  }

  // 增加点击次数
  incrementClickCount() {
    this.clickCount++;
    this.updatedAt = new Date().toISOString();
  }

  // 增加收藏次数
  incrementFavoriteCount() {
    this.favoriteCount++;
    this.updatedAt = new Date().toISOString();
  }

  // 转换为普通对象（用于API传输）
  toObject() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      longDescription: this.longDescription,
      category: this.category,
      website: this.website,
      pricing: this.pricing,
      rating: this.rating,
      reviewCount: this.reviewCount,
      tags: this.tags,
      features: this.features,
      useCases: this.useCases,
      pros: this.pros,
      cons: this.cons,
      logo: this.logo,
      screenshots: this.screenshots,
      categoryIcon: this.categoryIcon,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      status: this.status,
      viewCount: this.viewCount,
      clickCount: this.clickCount,
      favoriteCount: this.favoriteCount
    };
  }

  // 从对象创建AI工具实例
  static fromObject(data) {
    return new AITool(data);
  }

  // 验证工具数据
  validate() {
    const errors = [];
    
    if (!this.id) errors.push('ID不能为空');
    if (!this.name) errors.push('名称不能为空');
    if (!this.description) errors.push('描述不能为空');
    if (!this.category) errors.push('分类不能为空');
    if (!this.website) errors.push('网站不能为空');
    if (this.rating < 0 || this.rating > 5) errors.push('评分必须在0-5之间');
    if (this.reviewCount < 0) errors.push('评论数不能为负数');
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  // 获取工具摘要信息
  getSummary() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      category: this.category,
      rating: this.rating,
      pricing: this.pricing,
      logo: this.getLogoUrl()
    };
  }

  // 搜索匹配度
  searchMatch(query) {
    const searchTerm = query.toLowerCase();
    let score = 0;
    
    // 名称匹配
    if (this.name.toLowerCase().includes(searchTerm)) score += 10;
    
    // 描述匹配
    if (this.description.toLowerCase().includes(searchTerm)) score += 5;
    
    // 标签匹配
    this.tags.forEach(tag => {
      if (tag.toLowerCase().includes(searchTerm)) score += 3;
    });
    
    // 分类匹配
    if (this.category.toLowerCase().includes(searchTerm)) score += 2;
    
    return score;
  }
}

export default AITool; 