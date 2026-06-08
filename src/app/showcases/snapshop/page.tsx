import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Snapshop.vn — E-Commerce Automation Case Study",
  description:
    "Shop wellness TPHCM tu dong hoa SEO va bao cao doanh thu. 500+ keywords tracked, 19 SEO blogs, weekly auto-reports.",
};

const stats = [
  { value: "500+", label: "Tu khoa Google duoc theo doi" },
  { value: "19", label: "Bai SEO blog tu dong" },
  { value: "40%", label: "Tang traffic organic" },
  { value: "15h", label: "Tiet kiem moi tuan" },
];

export default function SnapshopShowcase() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              E-Commerce
            </span>
            <span className="text-xs font-semibold text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
              TP. Ho Chi Minh
            </span>
          </div>
          <SectionHeading
            title="Snapshop.vn"
            description="Shop wellness/sextoy tai TPHCM tu dong hoa SEO, bao cao doanh thu va theo doi tu khoa. Tu van hanh thu cong chuyen sang he thong AI thong minh."
            light
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Thach thuc</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Snapshop.vn la shop ban san pham wellness va sextoy tai TP.HCM voi hon 1.100 san pham.
            Team marketing 2 nguoi phai quan ly dong thoi: SEO blog, bao cao doanh thu,
            theo doi tu khoa, dang bai social media. Moi tuan mat 15-20 gio cho cong viec thu cong,
            khong con thoi gian cho chien luoc tang truong.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Giai phap</h2>
          <div className="space-y-4 mb-8">
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">SEO Blog Tu Dong</h3>
              <p className="text-gray-600 text-sm">
                AI phan tich keyword gap, tu viet bai SEO 3.000+ tu voi cau truc H1-H6 chuan,
                schema markup, meta tags toi uu. Da tao 19 bai blog trong 2 thang dau.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Theo Doi 500+ Tu Khoa</h3>
              <p className="text-gray-600 text-sm">
                He thong tracking thu hang Google cho 500+ tu khoa moi ngay. Bao cao xu huong,
                phat hien co hoi moi, goi y noi dung can uu tien.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Bao Cao Doanh Thu Tu Dong</h3>
              <p className="text-gray-600 text-sm">
                Moi thu Hai, bao cao doanh thu tuan truoc tu dong gui vao Telegram group.
                Bao gom: doanh thu, don hang, san pham ban chay, so sanh voi tuan truoc.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ket qua</h2>
          <ul className="space-y-3 mb-12">
            {[
              "Traffic organic tang 40% trong 2 thang dau",
              "19 bai SEO blog duoc tao va dang tu dong",
              "500+ tu khoa duoc theo doi va phan tich hang ngay",
              "Bao cao doanh thu tu dong moi tuan, khong can lam thu cong",
              "Team marketing tiet kiem 15 gio/tuan, tap trung vao chien luoc",
            ].map((result) => (
              <li key={result} className="flex items-start gap-3 text-gray-700">
                <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {result}
              </li>
            ))}
          </ul>

          <div className="text-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Ban Muon Ket Qua Tuong Tu?
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
