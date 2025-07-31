# AI工具Logo管理指南

## 📁 图片目录结构

```
public/images/logos/
├── chatgpt.png          # ChatGPT logo
├── midjourney.png       # Midjourney logo
├── github-copilot.png   # GitHub Copilot logo
├── notion-ai.png        # Notion AI logo
├── claude.png           # Claude logo
├── dall-e.png           # DALL-E logo
├── cursor.png           # Cursor AI logo
├── runway.png           # Runway logo
└── default.png          # 默认logo
```

## 🖼️ 添加Logo的步骤

### 步骤1：准备Logo图片
1. **下载AI工具的官方logo**
   - 访问工具的官方网站
   - 右键点击logo图片，选择"另存为"
   - 保存为PNG格式，建议尺寸：200x200px

### 步骤2：放置Logo文件
1. **将logo文件放入目录**：
   ```
   public/images/logos/工具名称.png
   ```

2. **命名规范**：
   - 使用小写字母
   - 用连字符分隔单词
   - 例如：`chatgpt.png`, `github-copilot.png`

### 步骤3：更新数据库
在Supabase中更新工具的logo信息：

```sql
-- 更新ChatGPT的logo信息
UPDATE ai_tools 
SET logo = '{"url": "/images/logos/chatgpt.png", "alt": "ChatGPT Logo"}'
WHERE id = 'chatgpt';

-- 更新Midjourney的logo信息
UPDATE ai_tools 
SET logo = '{"url": "/images/logos/midjourney.png", "alt": "Midjourney Logo"}'
WHERE id = 'midjourney';

-- 更新GitHub Copilot的logo信息
UPDATE ai_tools 
SET logo = '{"url": "/images/logos/github-copilot.png", "alt": "GitHub Copilot Logo"}'
WHERE id = 'github-copilot';
```

## 🎨 推荐的Logo来源

### 1. ChatGPT
- **来源**：https://openai.com
- **文件名**：`chatgpt.png`

### 2. Midjourney
- **来源**：https://www.midjourney.com
- **文件名**：`midjourney.png`

### 3. GitHub Copilot
- **来源**：https://github.com/features/copilot
- **文件名**：`github-copilot.png`

### 4. Notion AI
- **来源**：https://www.notion.so
- **文件名**：`notion-ai.png`

### 5. Claude
- **来源**：https://claude.ai
- **文件名**：`claude.png`

### 6. DALL-E
- **来源**：https://openai.com/dall-e-2
- **文件名**：`dall-e.png`

### 7. Cursor AI
- **来源**：https://cursor.sh
- **文件名**：`cursor.png`

### 8. Runway
- **来源**：https://runwayml.com
- **文件名**：`runway.png`

## 🔧 批量更新Logo的SQL脚本

```sql
-- 批量更新所有工具的logo信息
UPDATE ai_tools 
SET logo = CASE id
    WHEN 'chatgpt' THEN '{"url": "/images/logos/chatgpt.png", "alt": "ChatGPT Logo"}'
    WHEN 'midjourney' THEN '{"url": "/images/logos/midjourney.png", "alt": "Midjourney Logo"}'
    WHEN 'github-copilot' THEN '{"url": "/images/logos/github-copilot.png", "alt": "GitHub Copilot Logo"}'
    WHEN 'notion-ai' THEN '{"url": "/images/logos/notion-ai.png", "alt": "Notion AI Logo"}'
    WHEN 'claude' THEN '{"url": "/images/logos/claude.png", "alt": "Claude Logo"}'
    WHEN 'dall-e' THEN '{"url": "/images/logos/dall-e.png", "alt": "DALL-E Logo"}'
    WHEN 'cursor' THEN '{"url": "/images/logos/cursor.png", "alt": "Cursor AI Logo"}'
    WHEN 'runway' THEN '{"url": "/images/logos/runway.png", "alt": "Runway Logo"}'
    ELSE '{"url": "/images/logos/default.png", "alt": "Default Logo"}'
END
WHERE id IN ('chatgpt', 'midjourney', 'github-copilot', 'notion-ai', 'claude', 'dall-e', 'cursor', 'runway');
```

## 🎯 添加新工具的Logo

### 1. 添加新工具到数据库
```sql
INSERT INTO ai_tools (id, name, description, category, website, pricing, rating, review_count, tags, logo) VALUES
('new-tool', '新工具名称', '工具描述', 'text-generation', 'https://example.com', '免费', 4.5, 100, ARRAY['AI', '工具'], '{"url": "/images/logos/new-tool.png", "alt": "新工具 Logo"}');
```

### 2. 添加对应的Logo文件
- 将logo文件保存为 `public/images/logos/new-tool.png`

## 🚨 注意事项

1. **图片格式**：推荐使用PNG格式，支持透明背景
2. **图片尺寸**：建议200x200px，保持正方形比例
3. **文件大小**：建议小于100KB，确保加载速度
4. **命名规范**：使用小写字母和连字符
5. **版权问题**：确保有权使用这些logo

## 🔍 测试Logo显示

1. **刷新网页**：访问 http://localhost:3000
2. **检查工具卡片**：确认logo正确显示
3. **检查控制台**：查看是否有404错误（图片未找到）

## 📞 获取帮助

如果logo不显示：
1. 检查文件路径是否正确
2. 确认文件名与数据库中的路径匹配
3. 检查图片文件是否存在
4. 查看浏览器开发者工具的网络标签

---

**提示**：您也可以使用在线工具下载和优化logo图片，确保最佳显示效果。 