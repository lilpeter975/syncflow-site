import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Showcases — Khách Hàng Thành Công",
  description:
    "Những doanh nghiệp thực tế đã sử dụng SyncFlow để tự động hoá và tăng trưởng. E-commerce, media, gaming operations.",
};

const showcases = [
  {
    href: "/showcases/shopx",
    title: "ShopX",
    industry: "E-Commerce",
    location: "TP. Hồ Chí Minh",
    description:
      "Shop wellness tự động hoá SEO và báo cáo doanh thu. Từ tracking thủ công chuyển sang hệ thống AI theo dõi 500 từ khoá và tạo 19 bài blog SEO tự động.",
    results: [
      "500+ từ khoá Google được theo dõi hàng ngày",
      "19 bài SEO blog tự động, tăng 40% traffic organic",
      "Báo cáo doanh thu tự động mỗi tuần qua Telegram",
      "Tiết kiệm 15 giờ/tuần cho team marketing",
    ],
    services: ["E-Commerce Automation", "SEO Blog", "Reporting"],
  },
  {
    href: "/showcases/mediahub",
    title: "MediaHub",
    industry: "Media & Content",
    location: "Online",
    description:
      "Kênh media World Cup 2026 tự động đăng bài đa kênh, đa ngôn ngữ. Workflow n8n phân phối nội dung lên Telegram, Facebook và X trong nhiều ngôn ngữ.",
    results: [
      "Auto-post lên 3 kênh: Telegram, Facebook, X",
      "Tự động dịch sang 3 ngôn ngữ (Việt, Anh, Indo)",
      "Workflow n8n xử lý 50+ bài/ngày",
      "0 nhân sự content — 100% tự động",
    ],
    services: ["Social Media Automation", "AI Translation", "n8n Workflow"],
  },
  {
    href: "/showcases/gamestudio",
    title: "GameStudio",
    industry: "Gaming Operations",
    location: "TP. Hồ Chí Minh",
    description:
      "Công ty game tự động hoá vận hành nội bộ: ghi chú meeting, theo dõi Jira, quản lý cấu hình game. Team operations làm việc hiệu quả hơn 3 giờ mỗi ngày.",
    results: [
      "Meeting notes tự động sau mỗi cuộc họp",
      "Jira task tự động tạo và theo dõi",
      "Quản lý cấu hình 40+ game tự động",
      "Tiết kiệm 3 giờ/ngày cho team operations",
    ],
    services: ["Operations Automation", "Jira Integration", "Config Management"],
  },
];

export default function ShowcasesPage() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Showcases"
            title="Khách Hàng Thành Công Với SyncFlow"
            description="Những doanh nghiệp thực tế tại Việt Nam đã tiết kiệm thời gian, giảm chi phí và tăng trưởng nhờ AI automation."
            light
          />
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {showcases.map((showcase) => (
            <Link
              key={showcase.href}
              href={showcase.href}
              className="group block rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-8 sm:p-12">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {showcase.industry}
                  </span>
                  <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {showcase.location}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {showcase.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-3xl">
                  {showcase.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {showcase.results.map((result) => (
                    <div key={result} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {showcase.services.map((service) => (
                    <span key={service} className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
