import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Dich Vu Tu Dong Hoa",
  description:
    "4 giai phap tu dong hoa bang AI: E-commerce, Social Media, Operations, AI Assistant. Phu hop cho doanh nghiep nho Viet Nam.",
};

const services = [
  {
    href: "/services/ecommerce",
    title: "E-Commerce Automation",
    subtitle: "Tu dong hoa thuong mai dien tu",
    description:
      "Quan ly don hang, bao cao doanh thu, SEO blog, theo doi tu khoa — tat ca chay tu dong. Shop cua ban ban hang 24/7 ma khong can ngoi canh may tinh.",
    features: [
      "Tu dong xu ly va theo doi don hang",
      "Bao cao doanh thu hang ngay/tuan/thang",
      "Viet va dang SEO blog tu dong",
      "Theo doi 500+ tu khoa Google",
      "Dong bo ton kho da kenh",
      "Alert khi het hang hot",
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
    subtitle: "Tu dong dang bai da kenh",
    description:
      "Mot bai viet, tu dong dang len Facebook, Instagram, X va Telegram. AI tao caption, chon hashtag, len lich dang vao khung gio vang.",
    features: [
      "Auto-post Facebook, Instagram, X, Telegram",
      "AI tao caption va hashtag",
      "Len lich dang bai thong minh",
      "Bao cao hieu qua tung kenh",
      "A/B test tieu de tu dong",
      "Repurpose noi dung da dinh dang",
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
    subtitle: "Tu dong hoa van hanh noi bo",
    description:
      "Meeting notes tu dong, Jira task management, bao cao tien do hang ngay. Team cua ban lam viec hieu qua hon ma khong can micromanage.",
    features: [
      "Tu dong ghi chu va tom tat meeting",
      "Tao va cap nhat Jira task tu dong",
      "Bao cao tien do daily standup",
      "Theo doi deadline va nhac viec",
      "Tong hop KPI tu nhieu nguon",
      "Workflow approval tu dong",
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
    subtitle: "Tro ly AI qua Telegram va chat",
    description:
      "Chatbot thong minh tra loi khach hang 24/7 qua Telegram, Facebook Messenger, website. Hieu ngu canh, nho lich su, xu ly yeu cau phuc tap.",
    features: [
      "Chatbot Telegram va Messenger 24/7",
      "Tra loi cau hoi khach hang tu dong",
      "Tu van san pham thong minh",
      "Chuyen tiep nhan vien khi can",
      "Hoc tu lich su hoi thoai",
      "Da ngon ngu (Viet, Anh, Trung)",
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
            tag="Dich vu"
            title="Giai Phap Tu Dong Hoa Toan Dien"
            description="4 nhom giai phap phu hop cho moi doanh nghiep nho tai Viet Nam. Tu ban hang online den van hanh noi bo — SyncFlow tu dong hoa tat ca."
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
                  Tim hieu chi tiet
                </CTAButton>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Tinh nang chinh:
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
            Chua biet bat dau tu dau?
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Dang ky tu van mien phi. Chung toi se phan tich quy trinh cua ban va goi y giai phap phu hop nhat.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact" variant="primary" size="lg">
              Dang Ky Tu Van Mien Phi
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
