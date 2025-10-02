import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "./layout.jsx";

const brand = { primary: "#0f3e2c", accent: "#c2a46b" };

export default function AboutPage() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="bg-stone-50 text-stone-800 min-h-screen">
      <Layout>
        {/* HERO */}
        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-stone-50" />
          <div className="max-w-6xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl md:text-5xl font-bold" style={{ color: brand.primary }}>
              Giới thiệu về Yến Sào Bùi Tuyển
            </h1>
            <p className="text-lg text-stone-600 mt-3">
              Cung cấp tổ yến sạch, chưng tươi mỗi ngày, giao nhanh trong 2 giờ.
            </p>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { k: "100% Thủ công", v: "Không hóa chất" },
                { k: "Sấy lạnh", v: "Giữ dưỡng chất" },
                { k: "2h", v: "Giao nội thành" },
                { k: "Đổi trả", v: "Theo chính sách" },
              ].map((it, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white shadow px-4 py-5 text-center"
                >
                  <div className="text-base font-semibold" style={{ color: brand.primary }}>
                    {it.k}
                  </div>
                  <div className="text-sm text-stone-600">{it.v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SLIDER */}
        <section className="max-w-4xl mx-auto px-4">
          <div
            className="bg-white rounded-2xl shadow p-6"
            style={{ "--swiper-theme-color": brand.primary }}
          >
            <h2
              className="text-2xl font-semibold mb-4 text-center"
              style={{ color: brand.primary }}
            >
              Hình ảnh thực tế
            </h2>

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              loop
              autoplay={{ delay: 2600, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
              className="rounded-xl"
            >
              {["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"].map((img, i) => (
                <SwiperSlide key={i} className="flex items-center justify-center">
                  {/* KHUNG CỐ ĐỊNH → mọi ảnh cùng kích thước hiển thị */}
                  <div className="w-full max-w-3xl h-[320px] md:h-[420px] flex items-center justify-center">
                    <img
                      src={`/pictures/Zalo/khach-hang/${img}`}
                      alt={`Slide ${i + 1}`}
                      className="h-full w-auto max-w-full object-contain rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* CONTENT */}
        <main className="max-w-6xl mx-auto px-4 py-16 space-y-12">
          {/* Our Story */}
          <section className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 bg-white rounded-2xl shadow p-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: brand.primary }}>
                Câu chuyện thương hiệu
              </h2>
              <div className="text-stone-700 leading-relaxed space-y-4">
                <p>
                  Yến sào được xem là “vàng trắng” nhờ giàu axit amin và khoáng chất.{" "}
                  <span className="font-semibold">Yến Sào Bùi Tuyển</span> hướng tới
                  nguồn dinh dưỡng tinh khiết, minh bạch và an toàn.
                </p>
                <p>
                  Chúng tôi chọn nguồn yến uy tín, làm sạch hoàn toàn thủ công, không hóa chất.
                  Phương pháp sấy lạnh giúp bảo toàn hoạt chất sinh học và hương vị tự nhiên.
                </p>
                <p>
                  Yến chưng tươi mỗi ngày, đóng gói sạch, giao nhanh trong 2 giờ.
                  Phù hợp cho mẹ bầu, trẻ nhỏ, người lớn tuổi và người cần phục hồi.
                </p>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="bg-white rounded-2xl shadow p-6 h-full">
                <h3 className="font-semibold mb-3" style={{ color: brand.primary }}>
                  Vì sao chọn chúng tôi
                </h3>
                <ul className="space-y-3 text-stone-700">
                  <li>✅ Nguồn gốc minh bạch, kiểm soát chất lượng.</li>
                  <li>✅ Chế biến chuẩn vệ sinh, không chất tẩy.</li>
                  <li>✅ Giao nhanh, đóng gói làm quà tặng đẹp.</li>
                  <li>✅ Tư vấn liều dùng theo nhu cầu.</li>
                </ul>
                <a
                  href="/#san-pham"
                  className="mt-5 inline-flex items-center justify-center w-full px-5 py-3 rounded-full text-white font-medium"
                  style={{ background: brand.primary }}
                >
                  Xem sản phẩm
                </a>
              </div>
            </div>
          </section>

          {/* Commitment */}
          <section className="bg-white rounded-2xl shadow p-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: brand.primary }}>
              Cam kết của chúng tôi
            </h2>
            <p className="text-stone-600 leading-relaxed mb-5">
              Luôn đặt chất lượng và sự hài lòng của khách hàng lên hàng đầu. Sản phẩm phù hợp cho:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-stone-700">
              {["Mẹ bầu", "Trẻ nhỏ", "Người cần phục hồi", "Cả gia đình"].map((t, i) => (
                <div
                  key={i}
                  className="p-5 border rounded-xl hover:shadow transition"
                  style={{ borderColor: "#e7e5e4" }}
                >
                  {t}
                </div>
              ))}
            </div>
          </section>

          {/* Back button */}
          <div className="text-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-lg"
              style={{ background: brand.primary }}
            >
              ← Quay lại Trang chủ
            </a>
          </div>
        </main>
      </Layout>
    </div>
  );
}
