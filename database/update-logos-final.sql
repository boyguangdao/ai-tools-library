-- 更新AI工具Logo信息
-- 在Supabase SQL编辑器中执行此脚本

-- 1. 更新现有工具的logo信息
UPDATE ai_tools 
SET logo = CASE id
    WHEN 'chatgpt' THEN '{"url": "/images/logos/chatgpt.png", "alt": "ChatGPT Logo"}'
    WHEN 'midjourney' THEN '{"url": "/images/logos/midjourney.png", "alt": "Midjourney Logo"}'
    WHEN 'github-copilot' THEN '{"url": "/images/logos/github-copilot.png", "alt": "GitHub Copilot Logo"}'
    ELSE '{"url": "/images/logos/default.png", "alt": "Default Logo"}'
END
WHERE id IN ('chatgpt', 'midjourney', 'github-copilot');

-- 2. 添加更多AI工具（如果还没有的话）
INSERT INTO ai_tools (id, name, description, category, website, pricing, rating, review_count, tags, features, use_cases, pros, cons, logo) VALUES
('notion-ai', 'Notion AI', 'Notion集成的AI助手，帮助写作、总结和组织内容', 'productivity', 'https://www.notion.so', '付费', 4.4, 45000, ARRAY['写作', '组织', '笔记', 'AI助手'], ARRAY['智能写作', '内容总结', '任务管理', '知识库构建'], ARRAY['文档写作', '会议记录', '项目管理', '知识整理'], ARRAY['与Notion完美集成', '界面简洁', '功能强大', '团队协作'], ARRAY['需要Notion账户', '高级功能需付费', '学习曲线较陡'], '{"url": "/images/logos/notion-ai.png", "alt": "Notion AI Logo"}')
ON CONFLICT (id) DO UPDATE SET
    logo = '{"url": "/images/logos/notion-ai.png", "alt": "Notion AI Logo"}';

INSERT INTO ai_tools (id, name, description, category, website, pricing, rating, review_count, tags, features, use_cases, pros, cons, logo) VALUES
('claude', 'Claude', 'Anthropic开发的AI助手，擅长写作、分析和编程', 'text-generation', 'https://claude.ai', '免费增值', 4.6, 78000, ARRAY['对话', '写作', '分析', '编程'], ARRAY['自然语言对话', '文档分析', '代码生成', '创意写作'], ARRAY['内容创作', '文档分析', '编程辅助', '学术研究'], ARRAY['理解能力强', '安全性高', '支持长文档', '免费版本可用'], ARRAY['有时响应较慢', '需要网络连接', '高级功能需付费'], '{"url": "/images/logos/claude.png", "alt": "Claude Logo"}')
ON CONFLICT (id) DO UPDATE SET
    logo = '{"url": "/images/logos/claude.png", "alt": "Claude Logo"}';

INSERT INTO ai_tools (id, name, description, category, website, pricing, rating, review_count, tags, features, use_cases, pros, cons, logo) VALUES
('dall-e', 'DALL-E', 'OpenAI的AI图像生成工具，通过文字描述创建独特图像', 'image-generation', 'https://openai.com/dall-e-2', '付费', 4.5, 65000, ARRAY['图像生成', '艺术', '创意', '设计'], ARRAY['文字转图像', '多种风格', '高分辨率', '创意生成'], ARRAY['概念设计', '营销素材', '艺术创作', '产品原型'], ARRAY['图像质量高', '创意丰富', '操作简单', '风格多样'], ARRAY['需要付费', '生成速度慢', '有时不准确'], '{"url": "/images/logos/dall-e.png", "alt": "DALL-E Logo"}')
ON CONFLICT (id) DO UPDATE SET
    logo = '{"url": "/images/logos/dall-e.png", "alt": "DALL-E Logo"}';

INSERT INTO ai_tools (id, name, description, category, website, pricing, rating, review_count, tags, features, use_cases, pros, cons, logo) VALUES
('cursor', 'Cursor AI', '基于AI的代码编辑器，提供智能代码补全和重构', 'code-generation', 'https://cursor.sh', '免费增值', 4.3, 32000, ARRAY['编程', '编辑器', 'AI', '开发'], ARRAY['智能代码补全', '代码重构', '错误检测', 'AI对话'], ARRAY['软件开发', '代码审查', '学习编程', '快速原型'], ARRAY['免费使用', '功能强大', '界面现代', 'AI集成'], ARRAY['需要学习', '有时不稳定', '依赖网络'], '{"url": "/images/logos/cursor.png", "alt": "Cursor AI Logo"}')
ON CONFLICT (id) DO UPDATE SET
    logo = '{"url": "/images/logos/cursor.png", "alt": "Cursor AI Logo"}';

INSERT INTO ai_tools (id, name, description, category, website, pricing, rating, review_count, tags, features, use_cases, pros, cons, logo) VALUES
('runway', 'Runway', 'AI视频编辑和生成平台，支持多种创意工具', 'video-generation', 'https://runwayml.com', '付费', 4.4, 28000, ARRAY['视频编辑', 'AI生成', '创意', '多媒体'], ARRAY['视频生成', '背景移除', '运动追踪', '特效添加'], ARRAY['视频制作', '广告创意', '内容创作', '特效制作'], ARRAY['功能强大', '界面友好', '云端处理', '专业级工具'], ARRAY['价格较高', '学习复杂', '需要网络'], '{"url": "/images/logos/runway.png", "alt": "Runway Logo"}')
ON CONFLICT (id) DO UPDATE SET
    logo = '{"url": "/images/logos/runway.png", "alt": "Runway Logo"}';

-- 3. 确保所有工具都有logo信息
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
END; 