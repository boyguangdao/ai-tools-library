# Supabase 配置指南

## 🚀 快速开始

### 1. 创建 Supabase 项目

1. 访问 [https://supabase.com](https://supabase.com)
2. 注册/登录您的账户
3. 点击 "New Project"
4. 填写项目信息：
   - **Name**: `ai-tools-library`
   - **Database Password**: 设置一个强密码（请记住）
   - **Region**: 选择离您最近的地区
5. 点击 "Create new project"

### 2. 获取连接信息

项目创建后，进入项目仪表板：

1. **获取项目URL**:
   - 进入项目 → Settings → API
   - 复制 "Project URL" (格式: `https://your-project-id.supabase.co`)

2. **获取API密钥**:
   - 复制 "anon public" key
   - 复制 "service_role" key (在 "Project API keys" 部分)

### 3. 配置环境变量

1. 复制 `env.template` 为 `.env.local`:
   ```bash
   cp env.template .env.local
   ```

2. 编辑 `.env.local` 文件，填入您的Supabase信息：
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

### 4. 创建数据库表

1. 在Supabase仪表板中，进入 **SQL Editor**
2. 复制 `database/setup.sql` 的内容
3. 粘贴到SQL编辑器中
4. 点击 "Run" 执行脚本

### 5. 创建存储桶（可选）

如果您要使用Supabase Storage存储图片：

1. 进入 **Storage** 页面
2. 点击 "Create a new bucket"
3. 创建名为 `ai-tools-images` 的存储桶
4. 设置为公开访问

### 6. 测试连接

运行开发服务器：
```bash
npm run dev
```

访问 http://localhost:3000 查看是否正常工作。

## 📊 数据库结构

### ai_tools 表
- `id`: 工具唯一标识
- `name`: 工具名称
- `description`: 简短描述
- `long_description`: 详细描述
- `category`: 分类
- `website`: 官方网站
- `pricing`: 价格模式
- `rating`: 评分 (0-5)
- `review_count`: 评论数
- `tags`: 标签数组
- `features`: 功能数组
- `use_cases`: 使用场景数组
- `pros`: 优点数组
- `cons`: 缺点数组
- `logo`: Logo图片信息 (JSONB)
- `screenshots`: 截图数组 (JSONB[])
- `view_count`: 浏览次数
- `click_count`: 点击次数
- `favorite_count`: 收藏次数
- `status`: 状态 (active/inactive/deleted)
- `created_at`: 创建时间
- `updated_at`: 更新时间

### ai_categories 表
- `id`: 分类唯一标识
- `name`: 分类名称
- `description`: 分类描述
- `icon`: 分类图标
- `color`: 分类颜色
- `sort_order`: 排序
- `is_active`: 是否激活

## 🔧 常用操作

### 查看数据
在Supabase仪表板的 **Table Editor** 中查看数据。

### 添加新工具
```javascript
import { aiToolService } from '../services/supabase';

const newTool = {
  id: 'my-tool',
  name: '我的AI工具',
  description: '这是一个AI工具',
  category: 'text-generation',
  website: 'https://example.com',
  pricing: '免费',
  rating: 4.5,
  reviewCount: 100,
  tags: ['AI', '工具'],
  // ... 其他属性
};

await aiToolService.createTool(newTool);
```

### 查询工具
```javascript
// 获取所有工具
const tools = await aiToolService.getAllTools();

// 按分类获取
const textTools = await aiToolService.getToolsByCategory('text-generation');

// 搜索工具
const searchResults = await aiToolService.searchTools('AI');
```

## 🛠️ 故障排除

### 常见问题

1. **连接失败**
   - 检查环境变量是否正确
   - 确认项目URL和API密钥
   - 检查网络连接

2. **权限错误**
   - 确认RLS策略已正确设置
   - 检查用户认证状态

3. **数据不显示**
   - 检查表是否创建成功
   - 确认数据已插入
   - 检查status字段是否为'active'

### 调试技巧

1. **查看控制台错误**
   - 打开浏览器开发者工具
   - 查看Console和Network标签

2. **检查Supabase日志**
   - 在Supabase仪表板查看Logs
   - 检查API调用是否成功

3. **测试API连接**
   ```javascript
   import { supabase } from '../services/supabase';
   
   // 测试连接
   const { data, error } = await supabase
     .from('ai_tools')
     .select('*')
     .limit(1);
   
   console.log('连接测试:', { data, error });
   ```

## 📞 获取帮助

如果遇到问题：
1. 检查Supabase官方文档
2. 查看项目GitHub Issues
3. 联系技术支持

---

**注意**: 请妥善保管您的API密钥，不要将其提交到版本控制系统中。 