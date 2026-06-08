import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Bảng Giá Dịch Vụ — Setup + Duy Trì Hàng Tháng",
  description:
    "3 gói dịch vụ tự động hoá: Starter, Growth, Enterprise. Phí setup 1 lần + phí duy trì hàng tháng. Phù hợp mọi quy mô doanh nghiệp.",
};

const tiers = [
  {
    name: "Starter",
    setupPrice: "5-10",
    setupUnit: "tr (1 lần)",
    monthlyPrice: "3-5",
    monthlyUnit: "tr/tháng",
    description: "Cho shop nhỏ, 1-3 người vận hành. Bắt đầu tự động hoá những việc cơ bản nhất.",
    features: [
      "1-2 quy trình tự động hoá",
      "Báo cáo doanh thu hàng tuần qua Telegram",
      "Auto-post 1 kênh social media",
      "Chatbot FAQ cơ bản (50 câu hỏi)",
      "Email hỗ trợ trong giờ hành chính",
      "Bảo trì và cập nhật hàng tháng",
      "Training sử dụng 1 buổi",
    ],
    notIncluded: [
      "Custom dashboard",
      "Tích hợp ERP/CRM",
      "AI Assistant đa ngôn ngữ",
      "Dedicated account manager",
    ],
    note: "Chưa bao gồm chi phí API bên thứ 3",
  },
  {
    name: "Growth",
    setupPrice: "15-25",
    setupUnit: "tr (1 lần)",
    monthlyPrice: "5-10",
    monthlyUnit: "tr/tháng",
    description: "Cho doanh nghiệp đang scale, 3-10 người. Tự động hoá đa kênh, đa quy trình.",
    popular: true,
    features: [
      "5-8 quy trình tự động hoá",
      "Báo cáo real-time dashboard",
      "Auto-post đa kênh (FB, IG, X, TG)",
      "AI Assistant Telegram 24/7",
      "SEO blog tự động hàng tuần",
      "Meeting notes + Jira integration",
      "Theo dõi 500+ từ khoá SEO",
      "Hỗ trợ ưu tiên qua Telegram",
      "Training team 3 buổi",
      "Review và tối ưu hàng tháng",
    ],
    notIncluded: [
      "Tích hợp ERP/CRM",
      "Dedicated account manager",
    ],
    note: "Chưa bao gồm chi phí API bên thứ 3",
  },
  {
    name: "Enterprise",
    setupPrice: null,
    monthlyPrice: null,
    description: "Cho SME 10-50 nhân viên. Giải pháp toàn diện, tuỳ chỉnh hoàn toàn theo nhu cầu.",
    features: [
      "Unlimited quy trình tự động hoá",
      "Custom dashboard + KPI tracking",
      "AI Assistant đa ngôn ngữ (Việt, Anh, Trung)",
      "Tích hợp ERP, CRM, phần mềm kế toán",
      "Dedicated account manager",
      "SLA 99.9% uptime",
      "Training team unlimited",
      "Tư vấn chiến lược automation hàng quý",
      "Custom workflow theo yêu cầu",
      "Ưu tiên phát triển tính năng mới",
      "Bảo mật và backup dữ liệu nâng cao",
      "Hotline hỗ trợ 24/7",
    ],
  },
];

const faqs = [
  {
    q: "Phí setup là gì?",
    a: "Phí setup là chi phí 1 lần để cài đặt, cấu hình và tích hợp hệ thống tự động hoá ban đầu cho doanh nghiệp của bạn. Bao gồm phân tích quy trình, thiết kế workflow, cài đặt và training.",
  },
  {
    q: "Phí duy trì hàng tháng bao gồm gì?",
    a: "Bao gồm: bảo trì hệ thống, cập nhật workflow, sửa lỗi, hỗ trợ kỹ thuật, và tối ưu hiệu suất. Chưa bao gồm chi phí API bên thứ 3 (nếu có).",
  },
  {
    q: "Chi phí API bên thứ 3 là gì?",
    a: "Một số tính năng sử dụng dịch vụ bên ngoài như AI (OpenAI, Anthropic), SMS, hoặc email marketing. Chi phí này phụ thuộc vào mức sử dụng thực tế của bạn, thường từ 0-2tr/tháng cho gói Starter.",
  },
  {
    q: "Có thể nâng cấp hoặc hạ cấp gói không?",
    a: "Có. Bạn có thể thay đổi gói bất kỳ lúc nào. Phí được tính theo tỷ lệ thời gian còn lại trong tháng.",
  },
  {
    q: "Thời gian setup mất bao lâu?",
    a: "Gói Starter: 1 tuần. Gói Growth: 1-2 tuần. Gói Enterprise: 2-4 tuần tuỳ độ phức tạp.",
  },
  {
    q: "Có chính sách hoàn tiền không?",
    a: "Có. Hoàn tiền 100% phí duy trì trong 30 ngày đầu nếu bạn không hài lòng với dịch vụ.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Bảng giá"
            title="Setup 1 Lần + Duy Trì Hàng Tháng"
            description="Phí setup để cài đặt ban đầu. Phí duy trì hàng tháng để bảo trì, hỗ trợ và cập nhật liên tục."
            light
          />
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative p-8 rounded-2xl border ${
                  tier.popular
                    ? "border-primary shadow-xl shadow-primary/10 ring-2 ring-primary"
                    : "border-gray-200"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    Phổ biến nhất
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                <p className="text-sm text-gray-500 mt-2">{tier.description}</p>

                {tier.setupPrice ? (
                  <div className="mt-6 mb-2">
                    <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Phí Setup (1 lần)</p>
                    <span className="text-4xl font-bold text-gray-900">{tier.setupPrice}</span>
                    <span className="text-gray-500 ml-1 text-sm">{tier.setupUnit}</span>
                  </div>
                ) : (
                  <div className="mt-6 mb-2">
                    <p className="text-xs text-gray-400 uppercase font-semibold mb-1">Phí Setup + Duy Trì</p>
                    <span className="text-3xl font-bold text-gray-900">Liên hệ</span>
                  </div>
                )}

                {tier.monthlyPrice && (
                  <div className="mb-6">
                    <p className="text-xs text-gray-400 uppercase font-semibold mb-1 mt-4">Duy trì hàng tháng</p>
                    <span className="text-2xl font-bold text-primary">{tier.monthlyPrice}</span>
                    <span className="text-gray-500 ml-1 text-sm">{tier.monthlyUnit}</span>
                  </div>
                )}

                {tier.note && (
                  <p className="text-xs text-gray-400 italic mb-4">* {tier.note}</p>
                )}

                <CTAButton
                  href="/contact"
                  variant={tier.popular ? "primary" : "outline"}
                  size="md"
                >
                  {tier.setupPrice ? "Bắt Đầu Ngay" : "Liên Hệ Tư Vấn"}
                </CTAButton>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Bao gồm:</h4>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {tier.notIncluded && (
                    <>
                      <h4 className="font-semibold text-gray-400 mb-4 mt-6">Không bao gồm:</h4>
                      <ul className="space-y-3">
                        {tier.notIncluded.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm text-gray-400">
                            <svg className="w-5 h-5 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="FAQ"
            title="Câu Hỏi Thường Gặp Về Giá"
          />
          <div className="mt-12 space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-xl bg-white border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Cần tư vấn gói nào phù hợp?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Gọi cho chúng tôi. 30 phút tư vấn miễn phí, chúng tôi sẽ giúp bạn chọn gói tốt nhất.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            Liên Hệ Tư Vấn
          </CTAButton>
        </div>
      </section>
    </>
  );
}
