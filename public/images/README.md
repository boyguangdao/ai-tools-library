# 图片管理文件夹

这个文件夹用于存储AI工具网站的所有图片资源。

## 文件夹结构

```
public/images/
├── logos/           # AI工具Logo
├── screenshots/     # 工具截图
└── categories/      # 分类图标
```

## 图片命名规范

### Logo图片
- 文件名：`工具ID.png` (例如：`chatgpt.png`, `midjourney.png`)
- 尺寸建议：200x200px 或 400x400px
- 格式：PNG（支持透明背景）或 SVG
- 示例：
  - `chatgpt.png`
  - `midjourney.png`
  - `github-copilot.png`
  - `notion-ai.png`
  - `dall-e.png`
  - `claude.png`
  - `runway.png`
  - `cursor.png`

### 截图图片
- 文件名：`工具ID-序号.png` (例如：`chatgpt-1.png`, `chatgpt-2.png`)
- 尺寸建议：1200x800px 或 1600x900px
- 格式：PNG 或 JPG
- 示例：
  - `chatgpt-1.png` (主界面截图)
  - `chatgpt-2.png` (功能展示截图)
  - `midjourney-1.png`
  - `midjourney-2.png`

### 分类图标
- 文件名：`分类ID.png` (例如：`text-generation.png`, `image-generation.png`)
- 尺寸建议：64x64px 或 128x128px
- 格式：PNG 或 SVG
- 示例：
  - `text-generation.png`
  - `image-generation.png`
  - `video-generation.png`
  - `code-generation.png`
  - `productivity.png`
  - `audio-generation.png`
  - `research.png`

## 图片要求

### Logo图片
- 清晰度高，无模糊
- 背景透明（PNG格式）
- 品牌色彩准确
- 尺寸统一

### 截图图片
- 展示工具的主要功能
- 界面清晰，文字可读
- 突出工具特色
- 避免个人信息泄露

### 分类图标
- 简洁明了
- 与分类名称相关
- 风格统一
- 易于识别

## 使用方式

在代码中引用图片：

```javascript
// Logo图片
const logoPath = "/images/logos/chatgpt.png";

// 截图图片
const screenshotPath = "/images/screenshots/chatgpt-1.png";

// 分类图标
const categoryIconPath = "/images/categories/text-generation.png";
```

## 注意事项

1. **文件大小**：图片文件大小建议控制在500KB以内
2. **版权问题**：确保使用的图片有合法使用权限
3. **备份**：重要图片建议保留备份
4. **更新**：定期更新图片以保持网站新鲜度

## 管理员操作

只有管理员可以：
- 上传新图片
- 删除旧图片
- 重命名图片文件
- 修改图片内容

用户无法直接访问或修改这些图片文件。 