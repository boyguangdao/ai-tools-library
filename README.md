# 🤖 AI工具库 - 发现最佳AI工具

一个现代化的AI工具展示网站，帮助用户发现和探索最优秀的AI工具，提升工作效率和创造力。

## ✨ 功能特性

### 🎯 核心功能
- **工具展示**: 网格布局展示AI工具卡片，支持响应式设计
- **智能搜索**: 实时搜索功能，支持工具名称、描述、标签搜索
- **分类筛选**: 按功能分类筛选工具（文本生成、图像生成、视频生成等）
- **评分系统**: 显示用户评分和评价数量
- **价格标签**: 清晰显示工具定价模式（免费、付费、免费增值）

### 🎨 用户体验
- **现代化设计**: 使用渐变、阴影、圆角等现代设计元素
- **响应式布局**: 完美适配桌面、平板、手机多端设备
- **流畅动画**: 悬停效果、过渡动画提升交互体验
- **直观导航**: 清晰的页面结构和导航菜单

### 📱 技术特性
- **Next.js 15**: 使用最新的App Router架构
- **Tailwind CSS 4**: 原子化CSS框架，快速构建UI
- **React Hooks**: 现代化的状态管理
- **组件化设计**: 可复用的UI组件

## 🚀 快速开始

### 环境要求
- Node.js 18+ 
- npm 或 yarn

### 安装依赖
```bash
npm install
# 或
yarn install
```

### 启动开发服务器
```bash
npm run dev
# 或
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本
```bash
npm run build
# 或
yarn build
```

### 启动生产服务器
```bash
npm start
# 或
yarn start
```

## 📁 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.js          # 根布局
│   └── page.js            # 首页
├── components/            # React组件
│   ├── layout/           # 布局组件
│   │   ├── Header.jsx    # 页面头部
│   │   └── Footer.jsx    # 页面底部
│   ├── pages/            # 页面组件
│   │   └── HomePage.jsx  # 首页组件
│   └── ui/               # UI组件
│       ├── ToolCard.jsx  # 工具卡片
│       ├── SearchBar.jsx # 搜索框
│       └── CategoryFilter.jsx # 分类筛选
└── data/                 # 数据文件
    └── toolsData.js      # AI工具数据
```

## 🎨 设计规范

### 色彩方案
- **主色调**: 蓝色 (#3B82F6) 和紫色 (#8B5CF6)
- **背景色**: 浅灰色 (#F9FAFB)
- **文本色**: 深灰色 (#111827)
- **状态色**: 成功绿 (#10B981)、警告黄 (#F59E0B)、错误红 (#EF4444)

### 组件设计
- **卡片组件**: 圆角12px，阴影效果，悬停动画
- **按钮**: 圆角8px，渐变背景，悬停效果
- **输入框**: 圆角8px，聚焦边框高亮
- **导航**: 固定在顶部，毛玻璃效果

## 📊 数据模型

### AI工具数据结构
```javascript
{
  id: "unique-id",           // 唯一标识
  name: "工具名称",          // 工具名称
  description: "简短描述",   // 工具描述
  category: "分类",          // 工具分类
  tags: ["标签1", "标签2"],  // 标签数组
  website: "官网链接",       // 官方网站
  pricing: "定价模式",       // 免费/付费/免费增值
  rating: 4.5,              // 评分
  reviewCount: 1234,        // 评价数量
  image: "图片路径"          // 工具图片
}
```

### 分类数据结构
```javascript
{
  id: "category-id",        // 分类ID
  name: "分类名称",         // 分类名称
  icon: "🎨",              // 分类图标
  color: "bg-purple-500"   // 分类颜色
}
```

## 🔧 自定义配置

### 添加新工具
在 `src/data/toolsData.js` 中的 `toolsData` 数组添加新工具：

```javascript
{
  id: "new-tool",
  name: "新工具名称",
  description: "工具描述",
  category: "text-generation",
  tags: ["标签1", "标签2"],
  website: "https://example.com",
  pricing: "免费",
  rating: 4.5,
  reviewCount: 100,
  image: "/images/new-tool.jpg"
}
```

### 添加新分类
在 `src/data/toolsData.js` 中的 `categories` 数组添加新分类：

```javascript
{
  id: "new-category",
  name: "新分类",
  icon: "🌟",
  color: "bg-yellow-500"
}
```

## 🚀 部署

### Vercel部署（推荐）
1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 自动部署完成

### 其他平台
支持部署到任何支持Next.js的平台：
- Netlify
- AWS Amplify
- Railway
- 自建服务器

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📝 更新日志

### v1.0.0 (2024-01-15)
- ✨ 初始版本发布
- 🎨 现代化UI设计
- 🔍 搜索和筛选功能
- 📱 响应式布局
- 🎯 工具展示卡片

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系我们

- 网站: [AI工具库](https://your-domain.com)
- 邮箱: contact@your-domain.com
- GitHub: [项目仓库](https://github.com/your-username/ai-tools-showcase)

---

⭐ 如果这个项目对您有帮助，请给我们一个星标！
