import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NewsLetter from './NewsLetter';

function AppLayout() {
  return (
    <div className="bg-gray-100 font-mono">
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <div>
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
