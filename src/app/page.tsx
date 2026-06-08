import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Tiet Kiem 80% Thoi Gian",
    description:
      "Tu dong hoa nhung cong viec lap di lap lai: bao cao, dang bai, quan ly don hang. De ban tap trung vao viec phat trien kinh doanh.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Giam 50% Chi Phi Van Hanh",
    description:
      "Thay the nhan su thu cong bang he thong AI thong minh. Khong can tuyen them nguoi, khong can training, hoat dong 24/7 khong nghi.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: "Tang Truong Doanh Thu",
    description:
      "SEO tu dong, content marketing da kenh, chatbot cham soc khach 24/7. He thong hoat dong lien tuc de ban khong bo lo khach hang nao.",
  },
];

const services = [
  {
    href: "/services/ecommerce",
    title: "E-Commerce Automation",
    description:
      "Tu dong hoa quan ly don hang, bao cao doanh thu, viet SEO blog va theo doi tu khoa. Phu hop cho shop online tren Haravan, Shopify, Shopee.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    href: "/services/social-media",
    title: "Social Media Automation",
    description:
      "Auto-post da kenh Facebook, Instagram, X, Telegram. Len lich dang bai, tao caption bang AI, theo doi hieu qua tu dong.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    href: "/services/operations",
    title: "Operations Automation",
    description:
      "Ghi chu meeting tu dong, quan ly task Jira, bao cao tien do hang ngay. Giup team van hanh gon nhe, hieu qua.",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const showcases = [
  {
    href: "/showcases/snapshop",
    title: "Snapshop.vn",
    tag: "E-Commerce",
    result: "500+ keywords tracked, 19 SEO blogs, weekly auto-reports",
    description:
      "Shop wellness TPHCM tu dong hoa SEO va bao cao doanh thu. Tu quan ly thu cong chuyen sang he thong tracking 500 tu khoa va bao cao tu dong moi tuan.",
  },
  {
    href: "/showcases/wildlyplay",
    title: "WildlyPlay",
    tag: "Media",
    result: "Auto-post 3 ngon ngu, TG + FB + X",
    description:
      "Kenh media World Cup 2026 tu dong dang bai da kenh, da ngon ngu. Workflow n8n xu ly dich thuat va phan phoi noi dung real-time.",
  },
  {
    href: "/showcases/koban",
    title: "Koban Gaming",
    tag: "Gaming Ops",
    result: "Auto meeting notes, Jira monitoring, config management",
    description:
      "Cong ty gaming tu dong hoa van hanh: ghi chu meeting, theo doi Jira, quan ly cau hinh game. Tiet kiem 3 gio/ngay cho team operations.",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "5-10",
    unit: "tr/thang",
    description: "Cho shop nho moi bat dau",
    features: [
      "1-2 quy trinh tu dong",
      "Bao cao doanh thu hang tuan",
      "Auto-post 1 kenh social",
      "Chatbot FAQ co ban",
      "Email ho tro trong gio hanh chinh",
    ],
  },
  {
    name: "Growth",
    price: "15-25",
    unit: "tr/thang",
    description: "Cho doanh nghiep dang scale",
    popular: true,
    features: [
      "5-8 quy trinh tu dong",
      "Bao cao real-time dashboard",
      "Auto-post da kenh (FB, IG, X, TG)",
      "AI Assistant Telegram 24/7",
      "SEO blog tu dong hang tuan",
      "Meeting notes + Jira integration",
      "Ho tro uu tien qua Telegram",
    ],
  },
  {
    name: "Enterprise",
    price: "40-60",
    unit: "tr/thang",
    description: "Cho SME 10-50 nhan vien",
    features: [
      "Unlimited quy trinh tu dong",
      "Custom dashboard + KPI tracking",
      "AI Assistant da ngon ngu",
      "Tich hop ERP, CRM, ke toan",
      "Dedicated account manager",
      "SLA 99.9% uptime",
      "Training team su dung he thong",
      "Tu van chien luoc automation",
    ],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-dark-bg overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-block text-primary font-semibold text-sm tracking-wide uppercase mb-4 animate-fade-in-up">
              AI Automation cho doanh nghiep Viet Nam
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight animate-fade-in-up animate-delay-100">
              Tu Dong Hoa Doanh Nghiep{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Bang AI
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
              Tiet kiem 80% thoi gian van hanh. Giam 50% chi phi nhan su.
              Tang truong doanh thu voi he thong AI lam viec 24/7 — khong can tuyen them nguoi.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-300">
              <CTAButton href="/contact" variant="primary" size="lg">
                Dang Ky Demo Mien Phi
              </CTAButton>
              <CTAButton href="/services" variant="outline" size="lg">
                Xem Dich Vu
              </CTAButton>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-500 animate-fade-in-up animate-delay-400">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Setup trong 1-2 tuan
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Khong can ky thuat
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Hoan tien trong 30 ngay
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Tai sao chon SyncFlow"
            title="AI Lam Viec — Ban Phat Trien Kinh Doanh"
            description="Doanh nghiep nho Viet Nam dang mat qua nhieu thoi gian vao cong viec thu cong. SyncFlow giup ban tu dong hoa tat ca, de tap trung vao dieu quan trong nhat: tang truong."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="relative p-8 rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Dich vu"
            title="Giai Phap Tu Dong Hoa Toan Dien"
            description="Tu e-commerce, social media den van hanh noi bo — SyncFlow co giai phap phu hop cho moi doanh nghiep."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Tim hieu them
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CTAButton href="/services" variant="outline">
              Xem Tat Ca Dich Vu
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Showcases Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Showcases"
            title="Khach Hang Dang Su Dung SyncFlow"
            description="Nhung doanh nghiep thuc te da tiet kiem thoi gian va tang truong nho AI automation."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {showcases.map((showcase) => (
              <Link
                key={showcase.href}
                href={showcase.href}
                className="group relative p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                  {showcase.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {showcase.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {showcase.description}
                </p>
                <p className="text-sm font-semibold text-green-600">
                  {showcase.result}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Bang gia"
            title="Goi Dich Vu Phu Hop Moi Quy Mo"
            description="Tu shop nho den doanh nghiep 50 nguoi — SyncFlow co goi gia linh hoat cho ban."
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative p-8 rounded-2xl border ${
                  tier.popular
                    ? "border-primary bg-white shadow-xl shadow-primary/10 ring-2 ring-primary"
                    : "border-gray-200 bg-white"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                    Pho bien nhat
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{tier.description}</p>
                <div className="mt-5 mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {tier.price}
                  </span>
                  <span className="text-gray-500 ml-1">{tier.unit}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <CTAButton
                  href="/contact"
                  variant={tier.popular ? "primary" : "outline"}
                  size="md"
                >
                  Bat Dau Ngay
                </CTAButton>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CTAButton href="/pricing" variant="outline">
              Xem Chi Tiet Bang Gia
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-dark-bg overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            San Sang Tu Dong Hoa Doanh Nghiep?
          </h2>
          <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto">
            Dang ky demo mien phi. Chung toi se phan tich quy trinh cua ban va de xuat
            giai phap automation phu hop nhat — khong mat phi, khong rang buoc.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Dang Ky Demo Mien Phi
            </CTAButton>
            <CTAButton href="/pricing" variant="outline" size="lg">
              Xem Bang Gia
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
