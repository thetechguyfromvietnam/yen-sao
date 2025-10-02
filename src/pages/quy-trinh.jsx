import React, { useEffect, useState } from "react";
import { ShieldCheck, Leaf, Clock, AlertTriangle, Phone, MapPin, Info } from "lucide-react";
import Layout from "./layout.jsx";

const theme = {
  brand: {
    bg: "bg-stone-50",
    surface: "bg-white",
    primary: "#0f3e2c",
    accent: "#c2a46b",
  },
  radius: "rounded-2xl",
  shadow: "shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
};

export default function DocsPage() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NavPill = ({ href, label }) => (
    <a
      href={href}
      className="px-3 py-1.5 text-sm rounded-full border bg-white hover:bg-stone-50 transition"
      style={{ borderColor: "#e7e5e4" }}
    >
      {label}
    </a>
  );

  return (
    <div className={`${theme.brand.bg} text-stone-800 min-h-screen`}>
      <Layout>
        {/* PAGE HEADER */}
        <section className="mx-auto max-w-7xl px-4 pt-10 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: theme.brand.primary }}>
            Hướng dẫn sử dụng & bảo quản
          </h1>
          <p className="text-stone-600 mt-2 max-w-2xl">
            Tài liệu tóm tắt cách bảo quản, quy trình sản xuất và lưu ý sử dụng sản phẩm Yến Sào Bùi Tuyển.
          </p>
        </section>

        {/* STORAGE */}
        <section id="bao-quan" className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.brand.primary }}>
            Cách bảo quản
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className={`${theme.radius} ${theme.shadow} ${theme.brand.surface} p-6`}>
              <h3 className="font-semibold flex items-center gap-2 text-stone-800">
                <ShieldCheck className="h-5 w-5" /> Yến thô chưa qua sơ chế
              </h3>
              <ul className="mt-3 space-y-2 text-stone-700">
                <li>Đảm bảo yến khô hoàn toàn trước khi cất giữ.</li>
                <li>Dùng hộp kín, túi zip hoặc hút chân không.</li>
                <li>Cất nơi khô ráo, thoáng mát. Tránh ngăn mát tủ lạnh.</li>
              </ul>
              <div className="mt-4 text-xs text-stone-500 flex items-center gap-2">
                <Clock className="h-4 w-4" /> Bảo quản khô: 6–12 tháng tuỳ điều kiện.
              </div>
            </div>

            <div className={`${theme.radius} ${theme.shadow} ${theme.brand.surface} p-6`}>
              <h3 className="font-semibold flex items-center gap-2 text-stone-800">
                <Leaf className="h-5 w-5" /> Yến đã sơ chế
              </h3>
              <ul className="mt-3 space-y-2 text-stone-700">
                <li>Bảo quản trong ngăn mát 2–3 ngày.</li>
                <li>Sấy khô và hút chân không để giữ lâu hơn.</li>
              </ul>
              <div className="mt-4 text-xs text-stone-500 flex items-center gap-2">
                <Clock className="h-4 w-4" /> Đã chưng: dùng trong 5–7 ngày khi để ngăn mát.
              </div>
            </div>
          </div>

          {/* Common mistakes */}
          <div className="mt-6 p-4 border rounded-xl bg-red-50/70 border-red-200 text-red-800 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 mt-0.5" />
            <div>
              <h4 className="font-semibold">Lỗi thường gặp</h4>
              <ul className="list-disc pl-5 text-sm mt-1 space-y-1">
                <li>Để nơi ẩm ướt → dễ mốc.</li>
                <li>Cho vào ngăn mát tủ lạnh khi yến còn thô, chưa sơ chế.</li>
                <li>Phơi dưới nắng gắt làm yến giòn, mất chất.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="quy-trinh" className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: theme.brand.primary }}>
            Quy trình sản xuất
          </h2>

          <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              "Phân loại và kiểm tra chất lượng tổ yến.",
              "Chuẩn bị sơ chế: khử trùng dụng cụ, đảm bảo vệ sinh.",
              "Ngâm yến trong nước, loại bỏ lông tơ và tạp chất.",
              "Nhặt sạch lông nhỏ, tạp chất còn sót.",
              "Ép khuôn, sấy lạnh, lưu trữ và đóng gói hoàn chỉnh.",
            ].map((step, i) => (
              <li key={i} className={`${theme.radius} ${theme.shadow} ${theme.brand.surface} p-5 flex items-start gap-4`}>
                <div className="h-9 w-9 shrink-0 rounded-full flex items-center justify-center text-white font-semibold" style={{ background: theme.brand.primary }}>
                  {i + 1}
                </div>
                <p className="text-stone-700">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-6 text-xs text-stone-500 flex items-center gap-2">
            <Info className="h-4 w-4" /> Quy trình có thể điều chỉnh theo từng lô nguyên liệu thực tế.
          </div>
        </section>

        {/* USAGE NOTES */}
        <section id="luu-y" className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: theme.brand.primary }}>
            Lưu ý khi sử dụng
          </h2>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Guidance list */}
            <div className={`${theme.radius} ${theme.shadow} ${theme.brand.surface} p-6`}>
              <ul className="space-y-2 text-stone-700">
                <li>Trẻ em dưới 1 tuổi: không nên dùng.</li>
                <li>Người lớn khoẻ mạnh: 3–5g/ngày.</li>
                <li>Phụ nữ mang thai: bắt đầu dùng từ tháng thứ 4.</li>
                <li>Chưng cách thuỷ, tránh nấu quá lâu ở nhiệt độ cao.</li>
                <li>Yến đã chưng: bảo quản ngăn mát, dùng trong 5–7 ngày.</li>
              </ul>
            </div>

            {/* Dosage quick guide */}
            <div className={`${theme.radius} ${theme.shadow} ${theme.brand.surface} p-6`}>
              <h3 className="font-semibold mb-3">Gợi ý liều dùng nhanh</h3>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                {[
                  { title: "Mẹ bầu", dose: "3–5g/ngày", note: "từ tháng 4" },
                  { title: "Trẻ nhỏ", dose: "1–3g/ngày", note: "tuỳ độ tuổi" },
                  { title: "Người lớn tuổi", dose: "2–5g/ngày", note: "tuỳ sức khoẻ" },
                  { title: "Phục hồi", dose: "3–6g/ngày", note: "theo tư vấn" },
                ].map((item, idx) => (
                  <div key={idx} className="border rounded-xl p-3">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-stone-600">{item.dose}</div>
                    <div className="text-xs text-stone-500">{item.note}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-stone-500 mt-3">Lưu ý: Liều dùng mang tính tham khảo. Vui lòng trao đổi với bác sĩ nếu có bệnh nền.</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="lien-he" className="mx-auto max-w-7xl px-4 py-12">
          <h2 className="text-2xl font-semibold mb-4" style={{ color: theme.brand.primary }}>
            Thông tin liên hệ
          </h2>

          <div className={`${theme.radius} ${theme.shadow} ${theme.brand.surface} p-6 flex flex-col sm:flex-row gap-6 items-start` }>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              <a href="tel:0976226944" className="font-medium hover:underline">0976 226 944</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5" />
              <a
                href="https://maps.google.com/?q=Số 138, Thôn 11, Xã Long Hà, Tỉnh Đồng Nai"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Số 138, Thôn 11, Xã Long Hà, Tỉnh Đồng Nai
              </a>
            </div>
          </div>
        </section>

        {/* BACK TO TOP */}
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-5 right-5 px-3 py-2 rounded-full shadow border bg-white text-sm"
            title="Lên đầu trang"
          >
            ↑ Lên đầu trang
          </button>
        )}
      </Layout>
    </div>
  );
}
