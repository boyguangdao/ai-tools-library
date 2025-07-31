import HomePage from '../components/pages/HomePage';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// 主页面组件
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}
