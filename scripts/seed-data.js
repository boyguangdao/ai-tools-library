// 数据导入脚本 - 用于向Supabase导入示例AI工具数据
import { createClient } from '@supabase/supabase-js';
import AITool from '../src/types/AITool.js';

// Supabase配置
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // 使用service role key

// 创建Supabase客户端（使用service role key以绕过RLS）
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// 示例AI工具数据
const sampleTools = [
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
    features: ["自然语言对话", "多语言支持", "代码生成", "创意写作", "学习辅导"],
    useCases: ["客户服务", "内容创作", "编程辅助", "学习辅导", "创意写作"],
    pros: ["响应速度快", "语言理解能力强", "支持多种任务", "免费版本可用"],
    cons: ["有时会产生错误信息", "需要网络连接", "高级功能需付费"],
    logo: {
      url: "https://your-supabase-storage-url/chatgpt-logo.png",
      alt: "ChatGPT Logo",
      width: 200,
      height: 200
    },
    screenshots: [
      {
        url: "https://your-supabase-storage-url/chatgpt-1.png",
        alt: "ChatGPT界面截图1",
        width: 1200,
        height: 800
      },
      {
        url: "https://your-supabase-storage-url/chatgpt-2.png",
        alt: "ChatGPT功能展示",
        width: 1200,
        height: 800
      }
    ],
    viewCount: 15000,
    clickCount: 8500,
    favoriteCount: 3200
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
    features: ["文字转图像", "多种艺术风格", "高分辨率输出", "批量生成", "社区分享"],
    useCases: ["概念艺术", "插画创作", "设计原型", "营销素材", "个人创作"],
    pros: ["图像质量极高", "艺术风格丰富", "社区活跃", "持续更新"],
    cons: ["需要付费订阅", "生成速度较慢", "需要Discord账号"],
    logo: {
      url: "https://your-supabase-storage-url/midjourney-logo.png",
      alt: "Midjourney Logo",
      width: 200,
      height: 200
    },
    screenshots: [
      {
        url: "https://your-supabase-storage-url/midjourney-1.png",
        alt: "Midjourney生成的艺术作品",
        width: 1200,
        height: 800
      }
    ],
    viewCount: 12000,
    clickCount: 7200,
    favoriteCount: 2800
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
    features: ["智能代码补全", "多语言支持", "IDE集成", "代码解释", "测试生成"],
    useCases: ["软件开发", "代码审查", "学习编程", "快速原型", "重构代码"],
    pros: ["大幅提升编程效率", "支持多种编程语言", "与主流IDE集成", "学习成本低"],
    cons: ["需要付费订阅", "有时建议不准确", "依赖网络连接"],
    logo: {
      url: "https://your-supabase-storage-url/github-copilot-logo.png",
      alt: "GitHub Copilot Logo",
      width: 200,
      height: 200
    },
    screenshots: [
      {
        url: "https://your-supabase-storage-url/github-copilot-1.png",
        alt: "GitHub Copilot代码建议",
        width: 1200,
        height: 800
      }
    ],
    viewCount: 9800,
    clickCount: 6100,
    favoriteCount: 2400
  }
];

// 导入数据函数
async function seedData() {
  try {
    console.log('开始导入AI工具数据...');

    // 导入每个工具
    for (const toolData of sampleTools) {
      const tool = new AITool(toolData);
      
      // 验证数据
      const validation = tool.validate();
      if (!validation.isValid) {
        console.error(`工具 ${tool.name} 验证失败:`, validation.errors);
        continue;
      }

      // 插入数据
      const { data, error } = await supabase
        .from('ai_tools')
        .upsert([tool.toObject()], { onConflict: 'id' })
        .select()
        .single();

      if (error) {
        console.error(`导入工具 ${tool.name} 失败:`, error);
      } else {
        console.log(`✅ 成功导入工具: ${tool.name}`);
      }
    }

    console.log('数据导入完成！');
  } catch (error) {
    console.error('数据导入失败:', error);
  }
}

// 清空数据函数
async function clearData() {
  try {
    console.log('清空AI工具数据...');
    
    const { error } = await supabase
      .from('ai_tools')
      .delete()
      .neq('id', ''); // 删除所有记录

    if (error) {
      console.error('清空数据失败:', error);
    } else {
      console.log('✅ 数据清空完成！');
    }
  } catch (error) {
    console.error('清空数据失败:', error);
  }
}

// 主函数
async function main() {
  const command = process.argv[2];
  
  switch (command) {
    case 'seed':
      await seedData();
      break;
    case 'clear':
      await clearData();
      break;
    default:
      console.log('使用方法:');
      console.log('  node scripts/seed-data.js seed  - 导入示例数据');
      console.log('  node scripts/seed-data.js clear - 清空所有数据');
  }
}

// 运行脚本
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { seedData, clearData }; 