import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navLinks = [
    { path: '/', label: '首页' },
    { path: '/resume', label: '简历' },
    { path: '/contact', label: '联系' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="hover:opacity-80 transition-opacity duration-200"
              onClick={closeDrawer}
            >
              <img src={import.meta.env.BASE_URL + '我是王娟，UI_UX设计师.png'} alt="Logo" className="h-6 w-auto" />
            </Link>
            
            {/* 桌面端导航 - md及以上屏幕显示 */}
            <div className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm tracking-wide transition-colors duration-200 ${
                    isActive(link.path) ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-200 ${
                      isActive(link.path) ? 'w-full' : 'w-0'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* 移动端汉堡菜单按钮 - 仅在移动端显示 */}
            <button
              onClick={toggleDrawer}
              className="md:hidden p-2 text-white hover:text-gray-300 transition-colors"
              aria-label="菜单"
            >
              {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* 抽屉导航 - 移动端 */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* 背景遮罩 */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeDrawer}
        />

        {/* 抽屉面板 */}
        <div
          className={`absolute top-0 right-0 h-full w-64 bg-black border-l border-white/10 transition-transform duration-300 ease-out ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-start pt-20 px-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeDrawer}
                className={`text-lg tracking-wide transition-colors duration-200 ${
                  isActive(link.path) ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
