-- AI工具数据库设置脚本
-- 在Supabase SQL编辑器中执行此脚本

-- 1. 创建AI工具表
CREATE TABLE IF NOT EXISTS ai_tools (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    long_description TEXT,
    category VARCHAR(100) NOT NULL,
    website VARCHAR(500) NOT NULL,
    pricing VARCHAR(50) DEFAULT '免费',
    rating DECIMAL(2,1) DEFAULT 0.0 CHECK (rating >= 0 AND rating <= 5),
    review_count INTEGER DEFAULT 0 CHECK (review_count >= 0),
    tags TEXT[] DEFAULT '{}',
    features TEXT[] DEFAULT '{}',
    use_cases TEXT[] DEFAULT '{}',
    pros TEXT[] DEFAULT '{}',
    cons TEXT[] DEFAULT '{}',
    logo JSONB,
    screenshots JSONB[],
    category_icon JSONB,
    view_count INTEGER DEFAULT 0 CHECK (view_count >= 0),
    click_count INTEGER DEFAULT 0 CHECK (click_count >= 0),
    favorite_count INTEGER DEFAULT 0 CHECK (favorite_count >= 0),
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'deleted')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. 创建分类表
CREATE TABLE IF NOT EXISTS ai_categories (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    icon VARCHAR(10),
    color VARCHAR(50),
    sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. 插入默认分类数据
INSERT INTO ai_categories (id, name, description, icon, color, sort_order) VALUES
('text-generation', '文本生成', 'AI文本生成和写作工具', '✍️', 'bg-blue-500', 1),
('image-generation', '图像生成', 'AI图像创作和编辑工具', '🎨', 'bg-purple-500', 2),
('video-generation', '视频生成', 'AI视频制作和编辑工具', '🎬', 'bg-red-500', 3),
('code-generation', '代码生成', 'AI编程和代码生成工具', '💻', 'bg-green-500', 4),
('productivity', '效率工具', 'AI效率提升和自动化工具', '⚡', 'bg-indigo-500', 5),
('audio-generation', '音频生成', 'AI音频制作和语音合成工具', '🎵', 'bg-pink-500', 6),
('research', '研究分析', 'AI数据分析和研究工具', '🔬', 'bg-yellow-500', 7)
ON CONFLICT (id) DO NOTHING;

-- 4. 创建索引
CREATE INDEX IF NOT EXISTS idx_ai_tools_category ON ai_tools(category);
CREATE INDEX IF NOT EXISTS idx_ai_tools_status ON ai_tools(status);
CREATE INDEX IF NOT EXISTS idx_ai_tools_rating ON ai_tools(rating DESC);
CREATE INDEX IF NOT EXISTS idx_ai_tools_created_at ON ai_tools(created_at DESC);

-- 5. 启用RLS（行级安全）
ALTER TABLE ai_tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_categories ENABLE ROW LEVEL SECURITY;

-- 6. 创建RLS策略
-- AI工具表策略
CREATE POLICY "AI tools are viewable by everyone" ON ai_tools
    FOR SELECT USING (status = 'active');

CREATE POLICY "AI tools are insertable by authenticated users" ON ai_tools
    FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "AI tools are updatable by authenticated users" ON ai_tools
    FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "AI tools are deletable by authenticated users" ON ai_tools
    FOR DELETE USING (auth.role() = 'authenticated');

-- 分类表策略
CREATE POLICY "Categories are viewable by everyone" ON ai_categories
    FOR SELECT USING (is_active = true);

CREATE POLICY "Categories are manageable by authenticated users" ON ai_categories
    FOR ALL USING (auth.role() = 'authenticated');

-- 7. 创建更新触发器
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_ai_tools_updated_at BEFORE UPDATE ON ai_tools
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ai_categories_updated_at BEFORE UPDATE ON ai_categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 8. 插入示例数据
INSERT INTO ai_tools (id, name, description, category, website, pricing, rating, review_count, tags, features, use_cases, pros, cons) VALUES
('chatgpt', 'ChatGPT', 'OpenAI开发的强大对话AI，能够进行自然语言对话和任务协助', 'text-generation', 'https://chat.openai.com', '免费增值', 4.8, 125000, ARRAY['对话', '写作', '学习', '问答', '创意'], ARRAY['自然语言对话', '多语言支持', '代码生成', '创意写作', '学习辅导'], ARRAY['客户服务', '内容创作', '编程辅助', '学习辅导', '创意写作'], ARRAY['响应速度快', '语言理解能力强', '支持多种任务', '免费版本可用'], ARRAY['有时会产生错误信息', '需要网络连接', '高级功能需付费']),
('midjourney', 'Midjourney', 'AI图像生成工具，通过文字描述创建高质量艺术作品', 'image-generation', 'https://www.midjourney.com', '付费', 4.7, 89000, ARRAY['艺术', '设计', '插画', '创意', '图像生成'], ARRAY['文字转图像', '多种艺术风格', '高分辨率输出', '批量生成', '社区分享'], ARRAY['概念艺术', '插画创作', '设计原型', '营销素材', '个人创作'], ARRAY['图像质量极高', '艺术风格丰富', '社区活跃', '持续更新'], ARRAY['需要付费订阅', '生成速度较慢', '需要Discord账号']),
('github-copilot', 'GitHub Copilot', 'AI编程助手，实时提供代码建议和自动补全', 'code-generation', 'https://github.com/features/copilot', '付费', 4.6, 67000, ARRAY['编程', '开发', 'IDE', '代码生成', '自动补全'], ARRAY['智能代码补全', '多语言支持', 'IDE集成', '代码解释', '测试生成'], ARRAY['软件开发', '代码审查', '学习编程', '快速原型', '重构代码'], ARRAY['大幅提升编程效率', '支持多种编程语言', '与主流IDE集成', '学习成本低'], ARRAY['需要付费订阅', '有时建议不准确', '依赖网络连接'])
ON CONFLICT (id) DO NOTHING; 