# Supabase 密钥获取详细指南

## 🔑 获取 API 密钥的完整步骤

### 步骤1：登录Supabase
1. 访问 [https://supabase.com](https://supabase.com)
2. 登录您的账户
3. 选择您的项目（或创建新项目）

### 步骤2：找到API设置页面
1. 在左侧菜单中点击 **"Settings"** (齿轮图标)
2. 点击 **"API"** 子菜单
3. 您会看到两个部分：
   - **Project URL**
   - **Project API keys**

### 步骤3：获取Project URL
- 复制 **"Project URL"** 字段的值
- 格式：`https://your-project-id.supabase.co`

### 步骤4：获取API密钥

#### 4.1 获取 anon public key
- 在 **"Project API keys"** 部分
- 找到 **"anon public"** 行
- 点击 **"Show"** 或 **"Reveal"** 按钮
- 复制显示的密钥

#### 4.2 获取 service_role key
- 在同一个 **"Project API keys"** 部分
- 向下滚动，找到 **"service_role"** 行
- 点击 **"Show"** 或 **"Reveal"** 按钮
- 复制显示的密钥

### 步骤5：配置环境变量

创建 `.env.local` 文件：
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 🚨 常见问题解决

### 问题1：找不到service_role key
**解决方案**：
1. 确保您已登录正确的账户
2. 检查项目是否已创建
3. 尝试刷新页面
4. 如果仍然看不到，可以使用anon key作为临时替代

### 问题2：密钥显示为 "***"
**解决方案**：
1. 点击密钥旁边的 **"Show"** 按钮
2. 如果按钮不可点击，尝试刷新页面
3. 检查浏览器是否阻止了JavaScript

### 问题3：权限不足
**解决方案**：
1. 确认您是项目的所有者或管理员
2. 检查账户权限设置
3. 联系Supabase支持

## 📸 截图指导

### 正确的API设置页面应该显示：

```
Project URL:
https://your-project-id.supabase.co

Project API keys:
anon public:     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
service_role:    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 🔧 测试配置

配置完成后，运行测试：

```bash
npm run dev
```

然后访问：http://localhost:3000/test-supabase

## 📞 获取帮助

如果仍然无法找到密钥：

1. **检查项目状态**：
   - 进入 Settings → General
   - 确认项目状态为 "Active"

2. **联系支持**：
   - 在Supabase Discord中寻求帮助
   - 或发送邮件到 support@supabase.com

3. **临时解决方案**：
   - 使用anon key作为service_role key
   - 这适用于大多数基本操作

## ⚠️ 安全提醒

- **永远不要** 将API密钥提交到Git仓库
- **永远不要** 在客户端代码中暴露service_role key
- 定期轮换您的API密钥
- 使用环境变量存储敏感信息

---

**注意**：如果您仍然无法找到service_role key，请告诉我您的具体情况，我可以提供替代方案。 