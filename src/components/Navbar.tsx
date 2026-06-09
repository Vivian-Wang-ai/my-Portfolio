import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: '首页' },
    { path: '/resume', label: '简历' },
    { path: '/contact', label: '联系' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="hover:opacity-80 transition-opacity duration-200"
          >
           <img src={import.meta.env.BASE_URL + '我是王娟，UI_UX设计师.png'} alt="Logo" className="h-6 w-auto" />
          </Link>
          <div className="flex gap-8">
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
        </div>
      </div>
    </nav>
  );
}
