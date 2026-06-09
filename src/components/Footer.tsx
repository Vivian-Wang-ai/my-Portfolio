import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-[1440px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">© 2024 Portfolio. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">
              首页
            </Link>
            <Link to="/resume" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">
              简历
            </Link>
            <Link to="/contact" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">
              联系
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
