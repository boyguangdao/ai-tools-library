# 🚀 Vercel 部署指南

## 📋 部署步骤

### 1. 创建GitHub仓库

1. **访问 GitHub**: https://github.com
2. **点击 "New repository"**
3. **填写仓库信息**:
   - Repository name: `ai-tools-library`
   - Description: `AI Tools Library - A showcase of popular AI tools`
   - 选择 Public
4. **点击 "Create repository"**

### 2. 推送代码到GitHub

```bash
# 添加远程仓库（替换YOUR_USERNAME为您的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/ai-tools-library.git

# 推送代码
git branch -M main
git push -u origin main
```

### 3. 部署到Vercel

1. **访问 Vercel**: https://vercel.com
2. **使用GitHub登录**
3. **点击 "New Project"**
4. **选择您的GitHub仓库**: `ai-tools-library`
5. **配置项目**:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. **点击 "Deploy"**

### 4. 配置环境变量

在Vercel项目设置中添加环境变量：

1. **进入项目设置** → **Environment Variables**
2. **添加以下变量**:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
   NEXT_PUBLIC_APP_URL=https://your-vercel-domain.vercel.app
   ```

### 5. 重新部署

添加环境变量后，重新部署项目：
1. **进入 Vercel 仪表板**
2. **点击 "Redeploy"**

## 🔧 故障排除

### 问题1：构建失败
**解决方案**:
- 检查 `package.json` 中的依赖
- 确保所有文件都已提交到GitHub
- 查看Vercel构建日志

### 问题2：环境变量未生效
**解决方案**:
- 确认环境变量名称正确
- 重新部署项目
- 检查Vercel项目设置

### 问题3：图片不显示
**解决方案**:
- 确认图片文件已提交到GitHub
- 检查图片路径是否正确
- 查看浏览器开发者工具

## 📊 部署后检查

1. **访问您的Vercel域名**
2. **检查所有功能**:
   - ✅ 主页面正常显示
   - ✅ AI工具卡片显示
   - ✅ Logo图片加载
   - ✅ 搜索功能正常
   - ✅ 分类筛选正常

3. **测试Supabase连接**:
   - 访问 `/test-supabase` 页面
   - 确认数据库连接正常

## 🎯 自定义域名（可选）

1. **在Vercel项目设置中** → **Domains**
2. **添加自定义域名**
3. **配置DNS记录**

## 📞 获取帮助

如果遇到问题：
1. 查看Vercel构建日志
2. 检查GitHub仓库设置
3. 确认环境变量配置
4. 联系技术支持

---

**注意**: 确保您的Supabase项目允许来自Vercel域名的请求。 