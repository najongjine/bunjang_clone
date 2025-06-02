import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-12">
      <div className="max-w-screen-lg mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">번개마켓</h2>
          <p className="text-sm text-gray-600">
            중고 거래의 시작, 번개마켓에서 쉽고 빠르게 거래하세요.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">고객센터</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/help" className="hover:underline">
                자주 묻는 질문
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                문의하기
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                이용약관
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                개인정보처리방침
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">소셜 미디어</h3>
          <div className="flex space-x-4">
            <a href="https://youtube.com" aria-label="YouTube">
              <FaYoutube size={20} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; 2025 번개마켓. 모든 권리 보유.
      </div>
    </footer>
  );
};

export default Footer;
