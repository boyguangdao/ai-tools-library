-- AI工具数据库表结构
-- 在Supabase中执行此SQL来创建表

-- 创建AI工具表
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
    logo JSONB, -- 存储图片信息 {url: string, alt: string, width: number, height: number}
    screenshots JSONB[], -- 存储截图信息数组
    category_icon JSONB, -- 存储分类图标信息
    view_count INTEGER DEFAULT 0 CHECK (view_count >= 0),
    click_count INTEGER DEFAULT 0 CHECK (click_count >= 0),
    favorite_count INTEGER DEFAULT 0 CHECK (favorite_count >= 0),
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'deleted')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_ai_tools_category ON ai_tools(category);
CREATE INDEX IF NOT EXISTS idx_ai_tools_status ON ai_tools(status);
CREATE INDEX IF NOT EXISTS idx_ai_tools_rating ON ai_tools(rating DESC);
CREATE INDEX IF NOT EXISTS idx_ai_tools_created_at ON ai_tools(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ai_tools_tags ON ai_tools USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_ai_tools_features ON ai_tools USING GIN(features);

-- 创建分类表
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

-- 插入默认分类数据
INSERT INTO ai_categories (id, name, description, icon, color, sort_order) VALUES
('text-generation', '文本生成', 'AI文本生成和写作工具', '✍️', 'bg-blue-500', 1),
('image-generation', '图像生成', 'AI图像创作和编辑工具', '🎨', 'bg-purple-500', 2),
('video-generation', '视频生成', 'AI视频制作和编辑工具', '🎬', 'bg-red-500', 3),
('code-generation', '代码生成', 'AI编程和代码生成工具', '💻', 'bg-green-500', 4),
('productivity', '效率工具', 'AI效率提升和自动化工具', '⚡', 'bg-indigo-500', 5),
('audio-generation', '音频生成', 'AI音频制作和语音合成工具', '🎵', 'bg-pink-500', 6),
('research', '研究分析', 'AI数据分析和研究工具', '🔬', 'bg-yellow-500', 7)
ON CONFLICT (id) DO NOTHING;

-- 创建用户收藏表
CREATE TABLE IF NOT EXISTS user_favorites (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    tool_id VARCHAR(50) REFERENCES ai_tools(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, tool_id)
);

-- 创建用户浏览历史表
CREATE TABLE IF NOT EXISTS user_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    tool_id VARCHAR(50) REFERENCES ai_tools(id) ON DELETE CASCADE,
    viewed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 创建RLS策略（行级安全）
ALTER TABLE ai_tools ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_favorites ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_history ENABLE ROW LEVEL SECURITY;

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

-- 用户收藏表策略
CREATE POLICY "Users can view their own favorites" ON user_favorites
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own favorites" ON user_favorites
    FOR ALL USING (auth.uid() = user_id);

-- 用户历史表策略
CREATE POLICY "Users can view their own history" ON user_history
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can manage their own history" ON user_history
    FOR ALL USING (auth.uid() = user_id);

-- 创建函数来更新updated_at字段
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 创建触发器
CREATE TRIGGER update_ai_tools_updated_at BEFORE UPDATE ON ai_tools
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_ai_categories_updated_at BEFORE UPDATE ON ai_categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 创建函数来增加浏览次数
CREATE OR REPLACE FUNCTION increment_view_count(tool_id VARCHAR)
RETURNS BOOLEAN AS $$
BEGIN
    UPDATE ai_tools 
    SET view_count = view_count + 1, updated_at = NOW()
    WHERE id = tool_id AND status = 'active';
    
    RETURN FOUND;
END;
$$ LANGUAGE plpgsql;

-- 创建函数来增加点击次数
CREATE OR REPLACE FUNCTION increment_click_count(tool_id VARCHAR)
RETURNS BOOLEAN AS $$
BEGIN
    UPDATE ai_tools 
    SET click_count = click_count + 1, updated_at = NOW()
    WHERE id = tool_id AND status = 'active';
    
    RETURN FOUND;
END;
$$ LANGUAGE plpgsql;

-- 创建函数来增加收藏次数
CREATE OR REPLACE FUNCTION increment_favorite_count(tool_id VARCHAR)
RETURNS BOOLEAN AS $$
BEGIN
    UPDATE ai_tools 
    SET favorite_count = favorite_count + 1, updated_at = NOW()
    WHERE id = tool_id AND status = 'active';
    
    RETURN FOUND;
END;
$$ LANGUAGE plpgsql; 