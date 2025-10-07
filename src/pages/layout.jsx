import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
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

          {/* Desktop nav centered */}
          <nav className="hidden md:flex flex-1 justify-center gap-6 text-sm">
            <Link to="/">Trang chủ</Link>
            <Link to="/about">Giới thiệu</Link>
            <Link to="/quy-trinh">Quy trình</Link>
            <a href="/#san-pham">Sản phẩm</a>
            <a href="/#lien-he">Liên hệ</a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto inline-flex items-center justify-center h-10 w-10 rounded-lg border"
            aria-label="Mở menu"
            onClick={() => setMenuOpen(v => !v)}
          >
            <span className="block w-5 h-[2px] bg-stone-700"/>
            <span className="block w-5 h-[2px] bg-stone-700 mt-1.5"/>
            <span className="block w-5 h-[2px] bg-stone-700 mt-1.5"/>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="max-w-7xl mx-auto px-4 py-3 grid gap-3 text-sm">
              <Link to="/" onClick={() => setMenuOpen(false)}>Trang chủ</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>Giới thiệu</Link>
              <Link to="/quy-trinh" onClick={() => setMenuOpen(false)}>Quy trình</Link>
              <a href="/#san-pham" onClick={() => setMenuOpen(false)}>Sản phẩm</a>
              <a href="/#lien-he" onClick={() => setMenuOpen(false)}>Liên hệ</a>
            </nav>
          </div>
        )}
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
