export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Tailwind CSS 测试页面</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-2xl p-6 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">测试卡片 1</h2>
            <p className="text-gray-600">这是一个测试卡片，用于验证Tailwind CSS是否正常工作。</p>
            <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
              测试按钮
            </button>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-6 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">测试卡片 2</h2>
            <p className="text-gray-600">如果这个卡片有样式，说明Tailwind CSS工作正常。</p>
            <button className="mt-4 px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors">
              测试按钮
            </button>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-6 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">测试卡片 3</h2>
            <p className="text-gray-600">渐变背景、圆角、阴影都应该正常显示。</p>
            <button className="mt-4 px-6 py-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors">
              测试按钮
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 