import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Dịch Vụ Tự Động Hoá",
  description:
    "4 giải pháp tự động hoá bằng AI: E-commerce, Social Media, Operations, AI Assistant. Phù hợp cho doanh nghiệp nhỏ Việt Nam.",
};

const services = [
  {
    href: "/services/ecommerce",
    title: "E-Commerce Automation",
    subtitle: "Tự động hoá thương mại điện tử",
    description:
      "Quản lý đơn hàng, báo cáo doanh thu, SEO blog, theo dõi từ khoá — tất cả chạy tự động. Shop của bạn bán hàng 24/7 mà không cần ngồi cạnh máy tính.",
    features: [
      "Tự động xử lý và theo dõi đơn hàng",
      "Báo cáo doanh thu hàng ngày/tuần/tháng",
      "Viết và đăng SEO blog tự động",
      "Theo dõi 500+ từ khoá Google",
      "Đồng bộ tồn kho đa kênh",
      "Alert khi hết hàng hot",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    href: "/services/social-media",
    title: "Social Media Automation",
    subtitle: "Tự động đăng bài đa kênh",
    description:
      "Một bài viết, tự động đăng lên Facebook, Instagram, X và Telegram. AI tạo caption, chọn hashtag, lên lịch đăng vào khung giờ vàng.",
    features: [
      "Auto-post Facebook, Instagram, X, Telegram",
      "AI tạo caption và hashtag",
      "Lên lịch đăng bài thông minh",
      "Báo cáo hiệu quả từng kênh",
      "A/B test tiêu đề tự động",
      "Repurpose nội dung đa định dạng",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    href: "/services/operations",
    title: "Operations Automation",
    subtitle: "Tự động hoá vận hành nội bộ",
    description:
      "Meeting notes tự động, Jira task management, báo cáo tiến độ hàng ngày. Team của bạn làm việc hiệu quả hơn mà không cần micromanage.",
    features: [
      "Tự động ghi chú và tóm tắt meeting",
      "Tạo và cập nhật Jira task tự động",
      "Báo cáo tiến độ daily standup",
      "Theo dõi deadline và nhắc việc",
      "Tổng hợp KPI từ nhiều nguồn",
      "Workflow approval tự động",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    href: "/services/ai-assistant",
    title: "AI Assistant 24/7",
    subtitle: "Trợ lý AI qua Telegram và chat",
    description:
      "Chatbot thông minh trả lời khách hàng 24/7 qua Telegram, Facebook Messenger, website. Hiểu ngữ cảnh, nhớ lịch sử, xử lý yêu cầu phức tạp.",
    features: [
      "Chatbot Telegram và Messenger 24/7",
      "Trả lời câu hỏi khách hàng tự động",
      "Tư vấn sản phẩm thông minh",
      "Chuyển tiếp nhân viên khi cần",
      "Học từ lịch sử hội thoại",
      "Đa ngôn ngữ (Việt, Anh, Trung)",
    ],
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Dịch vụ"
            title="Giải Pháp Tự Động Hoá Toàn Diện"
            description="4 nhóm giải pháp phù hợp cho mọi doanh nghiệp nhỏ tại Việt Nam. Từ bán hàng online đến vận hành nội bộ — SyncFlow tự động hoá tất cả."
            light
          />
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => (
            <div
              key={service.href}
              className={`flex flex-col lg:flex-row gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                  {service.subtitle}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>
                <CTAButton href={service.href}>
                  Tìm hiểu chi tiết
                </CTAButton>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Tính năng chính:
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-gray-600">
                        <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-dark-bg overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Chưa biết bắt đầu từ đâu?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Đăng ký tư vấn miễn phí. Chúng tôi sẽ phân tích quy trình của bạn và gợi ý giải pháp phù hợp nhất.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact" variant="primary" size="lg">
              Đăng Ký Tư Vấn Miễn Phí
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
