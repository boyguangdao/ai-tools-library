# AI工具Logo目录

## 📁 目录说明

这个目录用于存放AI工具的logo图片。

## 🖼️ 文件命名规范

- 使用小写字母
- 用连字符分隔单词
- 使用PNG格式
- 建议尺寸：200x200px

## 📋 当前需要的Logo文件

### 已配置的工具
- `chatgpt.png` - ChatGPT
- `midjourney.png` - Midjourney  
- `github-copilot.png` - GitHub Copilot

### 建议添加的工具
- `notion-ai.png` - Notion AI
- `claude.png` - Claude
- `dall-e.png` - DALL-E
- `cursor.png` - Cursor AI
- `runway.png` - Runway

## 🎯 如何添加Logo

1. **下载官方logo**
   - 访问工具的官方网站
   - 右键保存logo图片

2. **重命名文件**
   - 按照命名规范重命名
   - 例如：`chatgpt.png`

3. **放入此目录**
   - 将文件放入 `public/images/logos/`

4. **更新数据库**
   - 在Supabase中更新工具的logo信息

## 🔧 数据库更新SQL

```sql
-- 更新单个工具的logo
UPDATE ai_tools 
SET logo = '{"url": "/images/logos/chatgpt.png", "alt": "ChatGPT Logo"}'
WHERE id = 'chatgpt';

-- 批量更新所有工具
UPDATE ai_tools 
SET logo = CASE id
    WHEN 'chatgpt' THEN '{"url": "/images/logos/chatgpt.png", "alt": "ChatGPT Logo"}'
    WHEN 'midjourney' THEN '{"url": "/images/logos/midjourney.png", "alt": "Midjourney Logo"}'
    WHEN 'github-copilot' THEN '{"url": "/images/logos/github-copilot.png", "alt": "GitHub Copilot Logo"}'
    ELSE '{"url": "/images/logos/default.png", "alt": "Default Logo"}'
END;
```

## 🚨 注意事项

- 确保图片格式为PNG
- 建议尺寸200x200px
- 文件大小小于100KB
- 注意版权问题 