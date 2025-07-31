import SupabaseTest from '../../components/SupabaseTest';

// 禁用预渲染，因为需要客户端环境变量
export const dynamic = 'force-dynamic';

export default function TestSupabasePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Supabase 配置测试</h1>
          <p className="text-gray-600">测试您的Supabase连接和数据库配置</p>
        </div>
        
        <SupabaseTest />
      </div>
    </div>
  );
} 