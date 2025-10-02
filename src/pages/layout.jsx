import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="bg-stone-50 text-stone-800 min-h-screen flex flex-col">
      {/* NAVBAR */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/pictures/logo.png"
              alt="Yến Sào Bùi Tuyển Logo"
              className="h-12 w-auto object-contain"
            />
            <span className="font-semibold tracking-wide text-[#0f3e2c]">
              Yến Sào Bùi Tuyển
            </span>
          </Link>

          <nav className="flex-1 min-w-0 flex gap-6 text-sm x-scroll whitespace-nowrap max-w-full">
            <Link to="/">Trang chủ</Link>
            <Link to="/about">Giới thiệu</Link>
            <Link to="/quy-trinh">Quy trình</Link>
            <a href="#san-pham">Sản phẩm</a>
            <a href="#lien-he">Liên hệ</a>
          </nav>
        </div>
      </header>   

      {/* CONTENT */}
      <main className="flex-1">{children}</main>

      {/* FOOTER (nếu muốn chung luôn ở Layout) */}
      <footer className="bg-stone-100 py-6 mt-12 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Yến Sào Bùi Tuyển. All rights reserved.
      </footer>
    </div>
  );
}
