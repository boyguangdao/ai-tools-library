// AI工具数据库 - 管理员专用
// 这个文件包含所有AI工具的数据，只有管理员可以修改

// AI工具分类数据
export const aiCategories = [
  {
    id: "text-generation",
    name: "文本生成",
    icon: "✍️",
    color: "bg-blue-500",
    description: "AI文本生成和写作工具",
    count: 0
  },
  {
    id: "image-generation", 
    name: "图像生成",
    icon: "🎨",
    color: "bg-purple-500",
    description: "AI图像创作和编辑工具",
    count: 0
  },
  {
    id: "video-generation",
    name: "视频生成", 
    icon: "🎬",
    color: "bg-red-500",
    description: "AI视频制作和编辑工具",
    count: 0
  },
  {
    id: "code-generation",
    name: "代码生成",
    icon: "💻", 
    color: "bg-green-500",
    description: "AI编程和代码生成工具",
    count: 0
  },
  {
    id: "productivity",
    name: "效率工具",
    icon: "⚡",
    color: "bg-indigo-500", 
    description: "AI效率提升和自动化工具",
    count: 0
  },
  {
    id: "audio-generation",
    name: "音频生成",
    icon: "🎵",
    color: "bg-pink-500",
    description: "AI音频制作和语音合成工具", 
    count: 0
  },
  {
    id: "research",
    name: "研究分析",
    icon: "🔬",
    color: "bg-yellow-500",
    description: "AI数据分析和研究工具",
    count: 0
  }
];

// AI工具详细数据
export const aiToolsDatabase = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "OpenAI开发的强大对话AI，能够进行自然语言对话和任务协助",
    longDescription: "ChatGPT是由OpenAI开发的大型语言模型，能够进行自然语言对话、回答问题、协助写作、编程等多种任务。它基于GPT架构，具有强大的语言理解和生成能力。",
    category: "text-generation",
    website: "https://chat.openai.com",
    pricing: "免费增值",
    rating: 4.8,
    reviewCount: 125000,
    tags: ["对话", "写作", "学习", "问答", "创意"],
    features: [
      "自然语言对话",
      "多语言支持", 
      "代码生成",
      "创意写作",
      "学习辅导"
    ],
    useCases: [
      "客户服务",
      "内容创作",
      "编程辅助",
      "学习辅导",
      "创意写作"
    ],
    pros: [
      "响应速度快",
      "语言理解能力强",
      "支持多种任务",
      "免费版本可用"
    ],
    cons: [
      "有时会产生错误信息",
      "需要网络连接",
      "高级功能需付费"
    ],
    logo: "/images/logos/chatgpt.png",
    screenshots: [
      "/images/screenshots/chatgpt-1.png",
      "/images/screenshots/chatgpt-2.png"
    ],
    createdAt: "2022-11-30",
    updatedAt: "2024-01-15",
    status: "active"
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "AI图像生成工具，通过文字描述创建高质量艺术作品",
    longDescription: "Midjourney是一款基于AI的图像生成工具，用户可以通过文字描述来创建各种风格的艺术作品。它使用先进的扩散模型技术，能够生成高质量、具有艺术感的图像。",
    category: "image-generation",
    website: "https://www.midjourney.com",
    pricing: "付费",
    rating: 4.7,
    reviewCount: 89000,
    tags: ["艺术", "设计", "插画", "创意", "图像生成"],
    features: [
      "文字转图像",
      "多种艺术风格",
      "高分辨率输出",
      "批量生成",
      "社区分享"
    ],
    useCases: [
      "概念艺术",
      "插画创作",
      "设计原型",
      "营销素材",
      "个人创作"
    ],
    pros: [
      "图像质量极高",
      "艺术风格丰富",
      "社区活跃",
      "持续更新"
    ],
    cons: [
      "需要付费订阅",
      "生成速度较慢",
      "需要Discord账号"
    ],
    logo: "/images/logos/midjourney.png",
    screenshots: [
      "/images/screenshots/midjourney-1.png",
      "/images/screenshots/midjourney-2.png"
    ],
    createdAt: "2022-07-12",
    updatedAt: "2024-01-10",
    status: "active"
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "AI编程助手，实时提供代码建议和自动补全",
    longDescription: "GitHub Copilot是由GitHub和OpenAI合作开发的AI编程助手，能够实时分析代码上下文并提供智能建议、自动补全和代码生成功能。",
    category: "code-generation",
    website: "https://github.com/features/copilot",
    pricing: "付费",
    rating: 4.6,
    reviewCount: 67000,
    tags: ["编程", "开发", "IDE", "代码生成", "自动补全"],
    features: [
      "智能代码补全",
      "多语言支持",
      "IDE集成",
      "代码解释",
      "测试生成"
    ],
    useCases: [
      "软件开发",
      "代码审查",
      "学习编程",
      "快速原型",
      "重构代码"
    ],
    pros: [
      "大幅提升编程效率",
      "支持多种编程语言",
      "与主流IDE集成",
      "学习成本低"
    ],
    cons: [
      "需要付费订阅",
      "有时建议不准确",
      "依赖网络连接"
    ],
    logo: "/images/logos/github-copilot.png",
    screenshots: [
      "/images/screenshots/github-copilot-1.png",
      "/images/screenshots/github-copilot-2.png"
    ],
    createdAt: "2021-06-29",
    updatedAt: "2024-01-12",
    status: "active"
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "集成在Notion中的AI助手，帮助写作、总结和组织内容",
    longDescription: "Notion AI是集成在Notion笔记应用中的AI助手，能够帮助用户写作、总结文档、生成内容大纲、翻译文本等多种任务。",
    category: "productivity",
    website: "https://www.notion.so/product/ai",
    pricing: "付费",
    rating: 4.5,
    reviewCount: 45000,
    tags: ["笔记", "写作", "组织", "协作", "AI助手"],
    features: [
      "智能写作助手",
      "文档总结",
      "内容生成",
      "多语言翻译",
      "任务管理"
    ],
    useCases: [
      "文档写作",
      "会议记录",
      "项目管理",
      "知识管理",
      "团队协作"
    ],
    pros: [
      "与Notion完美集成",
      "界面简洁易用",
      "功能丰富",
      "支持协作"
    ],
    cons: [
      "需要Notion订阅",
      "AI功能单独收费",
      "依赖网络连接"
    ],
    logo: "/images/logos/notion-ai.png",
    screenshots: [
      "/images/screenshots/notion-ai-1.png",
      "/images/screenshots/notion-ai-2.png"
    ],
    createdAt: "2023-02-22",
    updatedAt: "2024-01-08",
    status: "active"
  },
  {
    id: "dall-e",
    name: "DALL-E",
    description: "OpenAI开发的AI图像生成工具，能够根据文字描述创建独特图像",
    longDescription: "DALL-E是OpenAI开发的AI图像生成系统，能够根据自然语言描述创建各种风格和内容的图像。它结合了GPT的语言理解能力和图像生成技术。",
    category: "image-generation",
    website: "https://openai.com/dall-e-2",
    pricing: "付费",
    rating: 4.4,
    reviewCount: 78000,
    tags: ["图像生成", "创意", "艺术", "设计", "AI绘画"],
    features: [
      "文字转图像",
      "图像编辑",
      "风格变化",
      "高分辨率输出",
      "API接口"
    ],
    useCases: [
      "创意设计",
      "营销素材",
      "概念艺术",
      "产品原型",
      "个人创作"
    ],
    pros: [
      "图像质量高",
      "创意性强",
      "API支持",
      "持续更新"
    ],
    cons: [
      "需要付费",
      "生成速度慢",
      "内容限制严格"
    ],
    logo: "/images/logos/dall-e.png",
    screenshots: [
      "/images/screenshots/dall-e-1.png",
      "/images/screenshots/dall-e-2.png"
    ],
    createdAt: "2021-01-05",
    updatedAt: "2024-01-05",
    status: "active"
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic开发的AI助手，擅长分析、写作和编程任务",
    longDescription: "Claude是由Anthropic开发的AI助手，基于Constitutional AI技术，具有强大的分析能力、写作技巧和编程辅助功能。它注重安全性和有用性。",
    category: "text-generation",
    website: "https://claude.ai",
    pricing: "免费增值",
    rating: 4.6,
    reviewCount: 56000,
    tags: ["对话", "分析", "写作", "编程", "研究"],
    features: [
      "深度分析能力",
      "安全对话",
      "文档处理",
      "代码生成",
      "多语言支持"
    ],
    useCases: [
      "文档分析",
      "研究写作",
      "代码审查",
      "内容创作",
      "学习辅导"
    ],
    pros: [
      "分析能力强",
      "安全性高",
      "免费版本可用",
      "支持文档上传"
    ],
    cons: [
      "有时过于谨慎",
      "功能相对有限",
      "需要网络连接"
    ],
    logo: "/images/logos/claude.png",
    screenshots: [
      "/images/screenshots/claude-1.png",
      "/images/screenshots/claude-2.png"
    ],
    createdAt: "2023-03-14",
    updatedAt: "2024-01-15",
    status: "active"
  },
  {
    id: "runway",
    name: "Runway",
    description: "AI视频创作平台，提供视频生成、编辑和特效制作工具",
    longDescription: "Runway是一个基于AI的视频创作平台，提供视频生成、编辑、特效制作等多种功能。它使用先进的AI技术，让用户能够轻松创建专业级视频内容。",
    category: "video-generation",
    website: "https://runwayml.com",
    pricing: "付费",
    rating: 4.3,
    reviewCount: 34000,
    tags: ["视频生成", "特效", "编辑", "创意", "AI视频"],
    features: [
      "AI视频生成",
      "视频编辑",
      "特效制作",
      "绿幕替换",
      "运动追踪"
    ],
    useCases: [
      "视频制作",
      "广告创意",
      "内容创作",
      "特效制作",
      "教育视频"
    ],
    pros: [
      "功能强大",
      "界面友好",
      "云端处理",
      "专业级效果"
    ],
    cons: [
      "价格较高",
      "需要学习",
      "依赖网络"
    ],
    logo: "/images/logos/runway.png",
    screenshots: [
      "/images/screenshots/runway-1.png",
      "/images/screenshots/runway-2.png"
    ],
    createdAt: "2018-02-01",
    updatedAt: "2024-01-10",
    status: "active"
  },
  {
    id: "cursor",
    name: "Cursor",
    description: "基于AI的代码编辑器，集成了强大的AI编程助手功能",
    longDescription: "Cursor是一款基于AI的代码编辑器，集成了强大的AI编程助手功能。它基于VS Code构建，提供了智能代码补全、重构建议、错误检测等功能。",
    category: "code-generation",
    website: "https://cursor.sh",
    pricing: "免费增值",
    rating: 4.4,
    reviewCount: 28000,
    tags: ["编程", "编辑器", "AI助手", "开发", "代码生成"],
    features: [
      "智能代码补全",
      "代码重构",
      "错误检测",
      "多语言支持",
      "Git集成"
    ],
    useCases: [
      "软件开发",
      "代码审查",
      "学习编程",
      "快速开发",
      "团队协作"
    ],
    pros: [
      "免费使用",
      "功能强大",
      "界面友好",
      "持续更新"
    ],
    cons: [
      "需要学习",
      "有时不稳定",
      "依赖网络"
    ],
    logo: "/images/logos/cursor.png",
    screenshots: [
      "/images/screenshots/cursor-1.png",
      "/images/screenshots/cursor-2.png"
    ],
    createdAt: "2023-03-20",
    updatedAt: "2024-01-12",
    status: "active"
  }
];

// 数据库管理函数
export const databaseManager = {
  // 获取所有工具
  getAllTools: () => {
    return aiToolsDatabase.filter(tool => tool.status === "active");
  },

  // 根据分类获取工具
  getToolsByCategory: (categoryId) => {
    return aiToolsDatabase.filter(tool => 
      tool.category === categoryId && tool.status === "active"
    );
  },

  // 搜索工具
  searchTools: (query) => {
    const searchTerm = query.toLowerCase();
    return aiToolsDatabase.filter(tool => 
      tool.status === "active" && (
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.description.toLowerCase().includes(searchTerm) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      )
    );
  },

  // 获取工具详情
  getToolById: (toolId) => {
    return aiToolsDatabase.find(tool => tool.id === toolId);
  },

  // 获取所有分类
  getAllCategories: () => {
    return aiCategories;
  },

  // 获取分类详情
  getCategoryById: (categoryId) => {
    return aiCategories.find(category => category.id === categoryId);
  },

  // 更新工具数据（管理员功能）
  updateTool: (toolId, updates) => {
    const toolIndex = aiToolsDatabase.findIndex(tool => tool.id === toolId);
    if (toolIndex !== -1) {
      aiToolsDatabase[toolIndex] = {
        ...aiToolsDatabase[toolIndex],
        ...updates,
        updatedAt: new Date().toISOString().split('T')[0]
      };
      return true;
    }
    return false;
  },

  // 添加新工具（管理员功能）
  addTool: (newTool) => {
    const toolId = newTool.id || `tool-${Date.now()}`;
    const tool = {
      ...newTool,
      id: toolId,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      status: "active"
    };
    aiToolsDatabase.push(tool);
    return toolId;
  },

  // 删除工具（管理员功能）
  deleteTool: (toolId) => {
    const toolIndex = aiToolsDatabase.findIndex(tool => tool.id === toolId);
    if (toolIndex !== -1) {
      aiToolsDatabase[toolIndex].status = "deleted";
      return true;
    }
    return false;
  },

  // 获取统计信息
  getStats: () => {
    const activeTools = aiToolsDatabase.filter(tool => tool.status === "active");
    const categoryStats = aiCategories.map(category => ({
      ...category,
      count: activeTools.filter(tool => tool.category === category.id).length
    }));
    
    return {
      totalTools: activeTools.length,
      categories: categoryStats,
      averageRating: activeTools.reduce((sum, tool) => sum + tool.rating, 0) / activeTools.length
    };
  }
};

export default databaseManager; 