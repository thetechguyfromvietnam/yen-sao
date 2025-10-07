import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ShoppingCart, Calendar, Mail, MapPin, CheckCircle2, ChevronRight, Leaf, ShieldCheck, Clock, Sparkles, Star } from "lucide-react";
import "../index.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// ---------- THEME ----------
const theme = {
  brand: {
    bg: "bg-stone-50",
    surface: "bg-white",
    primary: "#0f3e2c", // deep green
    accent: "#c2a46b",  // muted gold
  },
  radius: "rounded-2xl",
  shadow: "shadow-[0_8px_30px_rgba(0,0,0,0.06)]",
};
// ---------- ASSETS PLACEHOLDERS ----------
const gallery = [
  { src: "/pictures/yen-tho.jpg", alt: "Yến Thô" },
  { src: "/pictures/yen-tho-2.png", alt: "Yến Thô 2" },
  { src: "/pictures/yen-tinh.png", alt: "Yến Tinh" },
  { src: "/pictures/yen-tinh-2.png", alt: "Yến Tinh 2" },
  { src: "/pictures/yen-vien-baby.png", alt: "Yến Viên Baby" },
  { src: "/pictures/yen-vien-baby-2.png", alt: "Yến Viên Baby 2" },
  { src: "/pictures/yen-baby-mix-gia-vi.png", alt: "Yến Baby Mix Gia Vị" },
  { src: "/pictures/yen-baby-mix-gia-vi-2.png", alt: "Yến Baby Mix Gia Vị 2" },
  { src: "/pictures/yen-hu-chung-san.png", alt: "Yến Hủ Chưng Sẵn" },
  { src: "/pictures/yen-hu-chung-san-2.png", alt: "Yến Hủ Chưng Sẵn 2" },
];
const gallery2 = [
  { src: "/pictures/Zalo/1.jpg", alt: "Gallary 1" },
  { src: "/pictures/Zalo/2.jpg", alt: "Gallary 2" },
  { src: "/pictures/Zalo/3.jpg", alt: "Gallary 3" },
  { src: "/pictures/Zalo/4.jpg", alt: "Gallary 4" },
  { src: "/pictures/Zalo/5.jpg", alt: "Gallary 5" },
  { src: "/pictures/Zalo/6.jpg", alt: "Gallary 6" },
];
const gallery3 =[
  { src: "/pictures/Zalo/hinh-anh-thuc-te/1.jpg", alt: "Tổ yến chất lượng" },
  { src: "/pictures/Zalo/hinh-anh-thuc-te/2.jpg", alt: "Sản phẩm yến" },
  { src: "/pictures/Zalo/hinh-anh-thuc-te/3.jpg", alt: "Yến sào Bùi Tuyển" },
  { src: "/pictures/Zalo/hinh-anh-thuc-te/4.jpg", alt: "Set quà biếu" },
  { src: "/pictures/Zalo/hinh-anh-thuc-te/5.jpg", alt: "Chưng yến tại nhà" },
  { src: "/pictures/Zalo/hinh-anh-thuc-te/6.jpg", alt: "Yến tươi" },
];

const products = [
  { name: "Yến Thô", unit: "100g", price: 2500000, image: gallery[0]?.src },
  { name: "Yến Tinh", unit: "100g", price: 3500000, image: gallery[3]?.src },
  { name: "Yến Viên Baby", unit: "100g", price: 2700000, image: gallery[5]?.src },
  { name: "Yến Baby Mix Gia Vị", unit: "1 túi", price: 50000, image: gallery[7]?.src },
  { name: "Yến Hủ Chưng Sẵn", unit: "60g / 1 hủ", price: 60000, image: gallery[9]?.src },
];

function currency(v){
  if(!v) return "Liên hệ";
  return v.toLocaleString("vi-VN") + "₫";
}

export default function YenSaoBuiTuyen(){
  const [menuOpen, setMenuOpen] = useState(false);
  const [qty, setQty] = useState({});
  const zaloId = "0976226944"; // e.g., 098xxxxxxx or OA ID. Replace.
  const phone = "0976226944";  // Replace.
  const email = "buivantuyenpvmn@gmail.com"; // Replace.

  const cart = useMemo(
  () =>
    Object.entries(qty)
      .filter(([, q]) => q > 0)
      .map(([idx, q]) => ({ ...products[Number(idx)], qty: q })),
  [qty, products]
);

  const cartTotal = cart.reduce(
    (sum, item) => sum + (item.price || 0) * item.qty,
    0
  );

  const cartText =
    cart.length > 0
      ? cart
          .map(
            (i) =>
              `${i.qty} x ${i.name} (${currency(i.price)} mỗi ${i.unit}) = ${currency(
                (i.price || 0) * i.qty
              )}`
          )
          .join("\n")
      : "Giỏ hàng trống.";


  const handleScrollToCart = () => {
    const cartSection = document.getElementById("dat-hang");
    if (cartSection) {
      cartSection.scrollIntoView({ behavior: "smooth" });
    }
  };



  const makeZaloMessage = () => {
    const lines = cart.map((i)=> `- ${i.name} (${i.unit}) x ${i.qty} = ${currency((i.price||0)*i.qty)}`).join("%0A");
    const footer = `%0ATổng: ${currency(cartTotal)}%0AHo tên: [Điền tên]%0AĐịa chỉ: [Điền địa chỉ]%0AGhi chú: [Tuỳ chọn]`;
    const text = `ĐẶT HÀNG YẾN SÀO BÙI TUYỂN%0A${lines}${footer}`;
    return `https://zalo.me/${zaloId}?text=${text}`;
  };

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Delay slightly to ensure content is rendered before scrolling
      setTimeout(() => {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // small delay helps if React needs to render first
    } else {
      // Scroll to top if no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
    
    <div className={`${theme.brand.bg} text-stone-800 min-h-screen`}> 
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-3">
          <a href="#top" className="flex items-center gap-3">
            <span className="h-10 w-10 grid place-items-center rounded-full" style={{background: theme.brand.primary}}>
              <Leaf className="h-5 w-5 text-white" />
            </span>
            <span className="font-semibold tracking-wide" style={{color: theme.brand.primary}}>Yến Sào Bùi Tuyển</span>
          </a>
          {/* Desktop nav centered */}
          <nav className="hidden md:flex flex-1 justify-center gap-6 text-sm">
            <Link to="/">Trang chủ</Link>
            <Link to="/about">Giới thiệu</Link>
            <Link to="/quy-trinh">Quy trình</Link>
            <a href="/#san-pham">Sản phẩm</a>
            <a href="/#lien-he">Liên hệ</a>
          </nav>

          {/* Mobile actions + hamburger */}
          <div className="ml-auto flex items-center gap-2 md:gap-3">
            <a href={`tel:${phone.replace(/\s/g,'')}`} className={`hidden md:inline-flex px-3 py-2 ${theme.radius}`} style={{background: theme.brand.primary, color: 'white'}}>
              <div className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4"/> Gọi</div>
            </a>
            <a href={`https://zalo.me/${"0976226944"}`} className={`hidden md:inline-flex px-3 py-2 ${theme.radius} border text-sm`} style={{borderColor: theme.brand.primary, color: theme.brand.primary}}>
              <div className="flex items-center gap-2"><MessageCircle className="h-4 w-4"/> Zalo</div>
            </a>
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-stone-300 bg-white shadow-sm hover:bg-stone-100 active:scale-95 transition-all duration-200"
              aria-label="Mở menu"
              onClick={() => setMenuOpen(v => !v)}
            >
              <div className="relative w-5 h-4">
                <span
                  className={`absolute left-0 top-0 block h-[2px] w-full bg-stone-700 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`}
                />
                <span
                  className={`absolute left-0 top-[6px] block h-[2px] w-full bg-stone-700 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
                />
                <span
                  className={`absolute left-0 bottom-0 block h-[2px] w-full bg-stone-700 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}
                />
              </div>
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t bg-white">
            <nav className="max-w-7xl mx-auto px-4 py-3 grid gap-3 text-sm">
              <Link to="/" onClick={() => setMenuOpen(false)}>Trang chủ</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>Giới thiệu</Link>
              <Link to="/quy-trinh" onClick={() => setMenuOpen(false)}>Quy trình</Link>
              <a href="/#san-pham" onClick={() => setMenuOpen(false)}>Sản phẩm</a>
              <a href="/#lien-he" onClick={() => setMenuOpen(false)}>Liên hệ</a>
              {/* Quick actions for mobile */}
              <a href={`tel:${phone.replace(/\s/g,'')}`} className={`px-3 py-2 ${theme.radius} text-center text-white`} style={{background: theme.brand.primary}}>Gọi</a>
              <a href={`https://zalo.me/${"0976226944"}`} className={`px-3 py-2 ${theme.radius} text-center border`} style={{borderColor: theme.brand.primary, color: theme.brand.primary}}>Zalo</a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full opacity-10" style={{background: theme.brand.primary}}/>
          <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full opacity-10" style={{background: theme.brand.accent}}/>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-24 flex flex-col md:flex-row items-center gap-10">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight" style={{color: theme.brand.primary}}>
              Tổ yến sạch. Chưng tươi mỗi ngày. Giao trong 2 giờ.
            </h1>
            <p className="mt-4 text-stone-600 max-w-xl">Thủ công chuẩn sạch. Nguồn yến đáng tin. Minh bạch trọng lượng và hàm lượng sợi yến. Phù hợp mẹ bầu, trẻ nhỏ, người cần phục hồi.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#dat-hang" className={`px-5 py-3 ${theme.radius} text-white`} style={{background: theme.brand.primary}}>
                <div className="flex items-center gap-2"><ShoppingCart className="h-5 w-5"/> Đặt ngay</div>
              </a>
              <a href={`https://zalo.me/${zaloId}`} className={`px-5 py-3 ${theme.radius} border`} style={{borderColor: theme.brand.primary, color: theme.brand.primary}}>
                <div className="flex items-center gap-2"><MessageCircle className="h-5 w-5"/> Chat Zalo</div>
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-stone-600">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Cam kết 1 đổi 1</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4"/> Giao nhanh trong ngày</div>
              <div className="flex items-center gap-2"><Sparkles className="h-4 w-4"/> Không chất bảo quản</div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,scale:1}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.6, delay:0.1}}  className="w-full md:w-1/2">
            <div className={`${theme.radius} ${theme.shadow} overflow-hidden ${theme.brand.surface}`}>
              <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-10 p-3 sm:p-6 md:p-8">
                {gallery2.slice(0,6).map((g,i)=> (
                  <img
                    key={i}
                    src={g.src}
                    alt={g.alt}
                    className="aspect-square object-cover rounded-xl"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="san-pham" className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-end justify-between mb-6 gap-3">
          <h2 className="text-2xl md:text-3xl font-semibold" style={{color: theme.brand.primary}}>Sản phẩm nổi bật</h2>
          <a href="#dat-hang" className="text-sm flex items-center gap-1" style={{color: theme.brand.primary}}>Xem giỏ hàng <ChevronRight className="h-4 w-4"/></a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((p, idx)=> (
            <div key={idx} className={`${theme.radius} ${theme.shadow} ${theme.brand.surface} p-4 flex flex-col`}>
              <img src={p.image} alt={p.name} className="aspect-[4/3] object-cover rounded-xl"/>
              <div className="mt-3">
                <h3 className="font-semibold leading-snug">{p.name}</h3>
                <p className="text-sm text-stone-500">Đóng gói: {p.unit}</p>
                <p className="mt-1 text-lg font-semibold" style={{color: theme.brand.primary}}>{currency(p.price)}</p>
                <p className="text-sm text-stone-500 line-through"> {currency(p.price * 1.2)} {/* ví dụ giá gốc cao hơn */}</p>
              </div>
              <div className="mt-3 flex items-center gap-2">
                    <button
                      onClick={() =>
                        setQty(q => ({ ...q, [idx]: (q[idx] || 0) - 1 > 0 ? q[idx] - 1 : 0 }))
                      }
                      className="px-3 py-2 border rounded-lg text-xl text-white bg-stone-700"
                    >
                      –
                    </button>
                    <span className="w-10 text-center">{qty[idx] || 0}</span>
                    <button
                      onClick={() =>
                        setQty(q => ({ ...q, [idx]: (q[idx] || 0) + 1 }))
                      }
                      className="px-3 py-2 border rounded-lg text-xl text-white bg-stone-700"
                    >
                      +
                    </button>
              </div>

            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-stone-500">Giá có thể thay đổi theo mùa vụ. Vui lòng xem bảng giá chi tiết hoặc liên hệ.</p>
      </section>

      {/* BENEFITS */}
      <section id="uu-diem" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{color: theme.brand.primary}}>Vì sao chọn Bùi Tuyển</h2>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {[{
            icon: <ShieldCheck className="h-6 w-6"/>, title: "Nguồn gốc minh bạch", desc: "Truy xuất tổ yến, sấy lạnh giữ dưỡng chất, kiểm soát ẩm và tạp chất."},
          { icon: <Leaf className="h-6 w-6"/>, title: "Sạch và tự nhiên", desc: "Không tẩy trắng. Không hương liệu. Không chất bảo quản."},
          { icon: <Clock className="h-6 w-6"/>, title: "Tươi mỗi ngày", desc: "Chưng hằng ngày theo đơn. Giao nhanh trong 2 giờ nội thành."}].map((b,i)=> (
            <div key={i} className={`${theme.radius} ${theme.shadow} ${theme.brand.surface} p-5`}>
              <div className="flex items-center gap-3" style={{color: theme.brand.primary}}>
                {b.icon}
                <h3 className="font-semibold">{b.title}</h3>
              </div>
              <p className="mt-2 text-stone-600 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="quy-trinh" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{color: theme.brand.primary}}>Quy trình chuẩn sạch</h2>
        <ol className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 list-decimal list-inside">
          {["Chọn tổ đạt chuẩn","Rút lông và lọc tạp","Cân chuẩn định lượng","Chưng cách thuỷ đúng nhiệt"].map((t, i)=> (
            <li key={i} className={`${theme.radius} ${theme.shadow} ${theme.brand.surface} p-5`}>
              <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5" style={{color: theme.brand.primary}}/><span className="font-medium">{t}</span></div>
              <p className="text-sm text-stone-600 mt-2">Ảnh minh hoạ quy trình {i+1}. Thay ảnh bằng hình thực tế trong thư viện.</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ORDER / BOOKING */}
      <section id="dat-hang" className="mx-auto max-w-7xl px-4 py-16">
        <div className={`${theme.radius} ${theme.shadow} ${theme.brand.surface} p-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8`}>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold" style={{color: theme.brand.primary}}>Đặt hàng / Booking</h2>
            <p className="mt-2 text-stone-600 text-sm">Chọn sản phẩm ở trên rồi gửi đơn qua Zalo hoặc Email. Hoặc đặt lịch giao yến chưng theo tuần.</p>
            <div className="mt-4 p-4 bg-stone-50 rounded-xl border">
              <h3 className="font-semibold mb-2">Tóm tắt giỏ hàng</h3>
              {cart.length===0 ? <p className="text-sm text-stone-500">Chưa có sản phẩm. Hãy chọn ở mục Sản phẩm.</p> : (
                <ul className="space-y-2 text-sm">
                  {cart.map((i, k)=> (
                    <li key={k} className="flex justify-between">
                      <span>{i.name} × {i.qty}</span>
                      <span>{currency((i.price||0)*i.qty)}</span>
                    </li>
                  ))}
                  <li className="flex justify-between font-semibold border-t pt-2 mt-2"><span>Tổng</span><span>{currency(cartTotal)}</span></li>
                </ul>
              )}
            </div>
          </div>

          {/* Third‑party form: replace Formspree endpoint below */}
          <form action="https://formspree.io/f/xwprplrj" method="POST" className="grid gap-3">
            <label className="text-sm">Họ và tên<input name="name" required className="mt-1 w-full border rounded-lg px-3 py-2"/></label>
            <label className="text-sm">Điện thoại<input name="phone" required className="mt-1 w-full border rounded-lg px-3 py-2"/></label>
            <label className="text-sm">Địa chỉ giao hàng<textarea name="address" required className="mt-1 w-full border rounded-lg px-3 py-2"/></label>
            <label className="text-sm">Ghi chú<textarea name="note" className="mt-1 w-full border rounded-lg px-3 py-2"/></label>
             <textarea
                name="cart"
                value={`${cartText}\n\nTổng: ${currency(cartTotal)}`}
                readOnly
                className="hidden"
              />
          {cart.length > 0 && (
            <button type="submit" className={`mt-2 px-5 py-3 ${theme.radius} text-white flex items-center gap-2 justify-center`} style={{background: theme.brand.primary}}>
              <Calendar className="h-5 w-5"/> Gửi đơn về Email
            </button> )}
          {cart.length > 0 && (
            <a
              href={`https://zalo.me/${zaloId}?text=${encodeURIComponent(
                  `${cartText}\n\nTổng: ${currency(cartTotal)}`
                )}`} target="_blank" rel="noopener noreferrer" className={`mt-2 px-5 py-3 ${theme.radius} text-white flex items-center gap-2 justify-center`} style={{background: theme.brand.primary}}><MessageCircle className="h-5 w-5" /> Đặt qua Zalo</a>
            )}
          </form>
        </div>  
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2
          className="text-2xl md:text-3xl font-semibold mb-6"
          style={{ color: theme.brand.primary }}
        >
          Hình ảnh thực tế
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {gallery3.map((g, i) => (
            <img
              key={i}
              src={g.src}
              alt={g.alt}
              className="w-full h-auto rounded-xl object-contain"
            />
          ))}
        </div>
      </section>


     {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className={`${theme.radius} ${theme.shadow} ${theme.brand.surface} p-6`}>
          <h2
            className="text-2xl md:text-3xl font-semibold"
            style={{ color: theme.brand.primary }}
          >
            Khách hàng nói gì
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-sm">
            {[
              {
                img: "/pictures/review/2.jpg",
                name: "Khách hàng"
              },
              {
                img: "/pictures/review/3.jpg",
                name: "Khách hàng"
              },
              {
                img: "/pictures/review/7.jpg",
                name: "Khách hàng"
              }
            ].map((t, i) => (
              <figure
                key={i}
                className="p-4 bg-stone-50 rounded-xl border flex flex-col"
              >
                <div className="flex items-center gap-1 mb-1">
                </div>
                <img
                  src={t.img}
                  alt={`Ảnh review ${i + 1}`}
                  className="w-full h-full object-contain rounded-lg bg-white"
                />
                <figcaption className="mt-2 text-stone-500">— {t.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>


      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6" style={{color: theme.brand.primary}}>Câu hỏi thường gặp</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-sm">
          {[{
            q:"Bảo quản yến chưng thế nào?",
            a:"Để ngăn mát 3–5°C, dùng trong 48 giờ. Không để nhiệt độ phòng quá 2 giờ."
          },{
            q:"Hàm lượng yến trong 1 hũ?",
            a:"Tuỳ set: 8–12g sợi yến khô/hũ 180ml. Có in trên tem nhãn."
          },{
            q:"Phí giao hàng?",
            a:"Nội thành HCM miễn phí cho đơn từ 300.000₫. Tỉnh thành gửi nhanh theo phí hãng."
          },{
            q:"Hoá đơn và chứng từ?",
            a:"Có hoá đơn điện tử theo yêu cầu. Hỗ trợ hợp đồng quà tặng doanh nghiệp."
          }].map((i,idx)=> (
            <details key={idx} className={`${theme.radius} border bg-white p-4`}>
              <summary className="font-medium cursor-pointer">{i.q}</summary>
              <p className="mt-2 text-stone-600">{i.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="lien-he" className="mx-auto max-w-7xl px-4 py-16">
        <div className={`${theme.radius} ${theme.shadow} ${theme.brand.surface} p-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6`}>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold" style={{color: theme.brand.primary}}>Liên hệ</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4"/> <a href={`tel:${phone.replace(/\s/g,'')}`} className="underline">{phone}</a></li>
              <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4"/> <a href={`https://zalo.me/${zaloId}`} className="underline">Chat Zalo</a></li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4"/> <a href={`mailto:${email}`} className="underline">{email}</a></li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Thôn 11, xã Long Hà, tỉnh Đồng Nai</li>
            </ul>
            <p className="mt-3 text-sm text-stone-600">Giờ mở cửa: 8:00–20:00 hằng ngày.</p>
          </div>
          <div className="h-64 w-full overflow-hidden rounded-xl">
            <iframe title="map" className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62505.97588721984!2d106.72324508355801!3d11.721057203033904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31735b696e6e8f8b%3A0xfa234999077275db!2zTG9uZyBIw6AsIFBow7ogUmnhu4FuZyBkaXN0cmljdCwgQmluaCBQaHVvYywgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1758746491764!5m2!1sen!2s" ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-stone-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Yến Sào Bùi Tuyển. All rights reserved.</p>
        </div>
      </footer>
      {/* 🛒 Floating "Xem Giỏ Hàng" Button */}
    <AnimatePresence>
      {cart.length > 0 && (
      <motion.button
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      onClick={() => {
        const cartSection = document.getElementById("dat-hang");
        if (cartSection) {
          cartSection.scrollIntoView({ behavior: "smooth" });
        }
      }}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-orange-500 px-3 py-2 text-sm md:px-4 md:py-3 md:text-base text-white shadow-lg hover:bg-orange-600 active:scale-95 transition"
      >
      <ShoppingCart className="w-5 h-5" />
      <span className="font-medium">Xem Giỏ Hàng</span>
      </motion.button>
      )}
    </AnimatePresence>

    </div>
  );
}
