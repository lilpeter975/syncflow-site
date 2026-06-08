import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "ShopX — E-Commerce Automation Case Study",
  description:
    "Shop wellness TPHCM tự động hoá SEO và báo cáo doanh thu. 500+ keywords tracked, 19 SEO blogs, weekly auto-reports.",
};

const stats = [
  { value: "500+", label: "Từ khoá Google được theo dõi" },
  { value: "19", label: "Bài SEO blog tự động" },
  { value: "40%", label: "Tăng traffic organic" },
  { value: "15h", label: "Tiết kiệm mỗi tuần" },
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
              TP. Hồ Chí Minh
            </span>
          </div>
          <SectionHeading
            title="ShopX"
            description="Shop wellness tại TPHCM tự động hoá SEO, báo cáo doanh thu và theo dõi từ khoá. Từ vận hành thủ công chuyển sang hệ thống AI thông minh."
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Thách thức</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            ShopX là shop bán sản phẩm wellness tại TP.HCM với hơn 1.100 sản phẩm.
            Team marketing 2 người phải quản lý đồng thời: SEO blog, báo cáo doanh thu,
            theo dõi từ khoá, đăng bài social media. Mỗi tuần mất 15-20 giờ cho công việc thủ công,
            không còn thời gian cho chiến lược tăng trưởng.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Giải pháp</h2>
          <div className="space-y-4 mb-8">
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">SEO Blog Tự Động</h3>
              <p className="text-gray-600 text-sm">
                AI phân tích keyword gap, tự viết bài SEO 3.000+ từ với cấu trúc H1-H6 chuẩn,
                schema markup, meta tags tối ưu. Đã tạo 19 bài blog trong 2 tháng đầu.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Theo Dõi 500+ Từ Khoá</h3>
              <p className="text-gray-600 text-sm">
                Hệ thống tracking thứ hạng Google cho 500+ từ khoá mỗi ngày. Báo cáo xu hướng,
                phát hiện cơ hội mới, gợi ý nội dung cần ưu tiên.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Báo Cáo Doanh Thu Tự Động</h3>
              <p className="text-gray-600 text-sm">
                Mỗi thứ Hai, báo cáo doanh thu tuần trước tự động gửi vào Telegram group.
                Bao gồm: doanh thu, đơn hàng, sản phẩm bán chạy, so sánh với tuần trước.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kết quả</h2>
          <ul className="space-y-3 mb-12">
            {[
              "Traffic organic tăng 40% trong 2 tháng đầu",
              "19 bài SEO blog được tạo và đăng tự động",
              "500+ từ khoá được theo dõi và phân tích hàng ngày",
              "Báo cáo doanh thu tự động mỗi tuần, không cần làm thủ công",
              "Team marketing tiết kiệm 15 giờ/tuần, tập trung vào chiến lược",
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
              Bạn Muốn Kết Quả Tương Tự?
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
