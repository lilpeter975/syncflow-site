import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Bang Gia Dich Vu",
  description:
    "3 goi dich vu tu dong hoa: Starter tu 5tr/thang, Growth tu 15tr/thang, Enterprise tu 40tr/thang. Phu hop moi quy mo doanh nghiep.",
};

const tiers = [
  {
    name: "Starter",
    price: "5-10",
    unit: "tr/thang",
    description: "Cho shop nho, 1-3 nguoi van hanh. Bat dau tu dong hoa nhung viec co ban nhat.",
    features: [
      "1-2 quy trinh tu dong hoa",
      "Bao cao doanh thu hang tuan qua Telegram",
      "Auto-post 1 kenh social media",
      "Chatbot FAQ co ban (50 cau hoi)",
      "Email ho tro trong gio hanh chinh",
      "Bao tri va cap nhat hang thang",
      "Training su dung 1 buoi",
    ],
    notIncluded: [
      "Custom dashboard",
      "Tich hop ERP/CRM",
      "AI Assistant da ngon ngu",
      "Dedicated account manager",
    ],
  },
  {
    name: "Growth",
    price: "15-25",
    unit: "tr/thang",
    description: "Cho doanh nghiep dang scale, 3-10 nguoi. Tu dong hoa da kenh, da quy trinh.",
    popular: true,
    features: [
      "5-8 quy trinh tu dong hoa",
      "Bao cao real-time dashboard",
      "Auto-post da kenh (FB, IG, X, TG)",
      "AI Assistant Telegram 24/7",
      "SEO blog tu dong hang tuan",
      "Meeting notes + Jira integration",
      "Theo doi 500+ tu khoa SEO",
      "Ho tro uu tien qua Telegram",
      "Training team 3 buoi",
      "Review va toi uu hang thang",
    ],
    notIncluded: [
      "Tich hop ERP/CRM",
      "Dedicated account manager",
    ],
  },
  {
    name: "Enterprise",
    price: "40-60",
    unit: "tr/thang",
    description: "Cho SME 10-50 nhan vien. Giai phap toan dien, tuy chinh theo nhu cau.",
    features: [
      "Unlimited quy trinh tu dong hoa",
      "Custom dashboard + KPI tracking",
      "AI Assistant da ngon ngu (Viet, Anh, Trung)",
      "Tich hop ERP, CRM, phan mem ke toan",
      "Dedicated account manager",
      "SLA 99.9% uptime",
      "Training team unlimited",
      "Tu van chien luoc automation hang quy",
      "Custom workflow theo yeu cau",
      "Uu tien phat trien tinh nang moi",
      "Bao mat va backup du lieu nang cao",
      "Hotline ho tro 24/7",
    ],
  },
];

const faqs = [
  {
    q: "Co phai tra phi setup khong?",
    a: "Khong. Phi setup da bao gom trong goi dich vu thang dau tien. Ban chi tra phi hang thang, khong co phi an.",
  },
  {
    q: "Co the nang cap hoac ha cap goi khong?",
    a: "Co. Ban co the thay doi goi bat ky luc nao. Phi duoc tinh theo ty le thoi gian con lai trong thang.",
  },
  {
    q: "Thoi gian setup mat bao lau?",
    a: "Goi Starter: 1 tuan. Goi Growth: 1-2 tuan. Goi Enterprise: 2-4 tuan tuy do phuc tap.",
  },
  {
    q: "Co chinh sach hoan tien khong?",
    a: "Co. Hoan tien 100% trong 30 ngay dau neu ban khong hai long voi dich vu.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Bang gia"
            title="Goi Dich Vu Minh Bach, Khong Phi An"
            description="Chon goi phu hop voi quy mo va nhu cau cua ban. Moi goi deu bao gom setup, training va ho tro ky thuat."
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
                    Pho bien nhat
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                <p className="text-sm text-gray-500 mt-2">{tier.description}</p>
                <div className="mt-6 mb-8">
                  <span className="text-5xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-500 ml-2">{tier.unit}</span>
                </div>

                <CTAButton
                  href="/contact"
                  variant={tier.popular ? "primary" : "outline"}
                  size="md"
                >
                  Bat Dau Ngay
                </CTAButton>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Bao gom:</h4>
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
                      <h4 className="font-semibold text-gray-400 mb-4 mt-6">Khong bao gom:</h4>
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
            title="Cau Hoi Thuong Gap Ve Gia"
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
            Can tu van goi nao phu hop?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Goi cho chung toi. 30 phut tu van mien phi, chung toi se giup ban chon goi tot nhat.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            Lien He Tu Van
          </CTAButton>
        </div>
      </section>
    </>
  );
}
