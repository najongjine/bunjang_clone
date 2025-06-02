import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-lg mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-green-600">
          번개마켓
        </Link>
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/">홈</Link>
          <Link to="/search">검색</Link>
          <Link to="/sell">판매하기</Link>
          <Link to="/mypage">마이페이지</Link>
        </nav>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="메뉴 열기"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          <Link to="/" className="block text-gray-700 font-medium">
            홈
          </Link>
          <Link to="/search" className="block text-gray-700 font-medium">
            검색
          </Link>
          <Link to="/sell" className="block text-gray-700 font-medium">
            판매하기
          </Link>
          <Link to="/mypage" className="block text-gray-700 font-medium">
            마이페이지
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
