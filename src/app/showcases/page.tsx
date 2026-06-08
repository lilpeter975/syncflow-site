import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Showcases — Khach Hang Thanh Cong",
  description:
    "Nhung doanh nghiep thuc te da su dung SyncFlow de tu dong hoa va tang truong. E-commerce, media, gaming operations.",
};

const showcases = [
  {
    href: "/showcases/snapshop",
    title: "Snapshop.vn",
    industry: "E-Commerce",
    location: "TP. Ho Chi Minh",
    description:
      "Shop wellness/sextoy tu dong hoa SEO va bao cao doanh thu. Tu tracking thu cong chuyen sang he thong AI theo doi 500 tu khoa va tao 19 bai blog SEO tu dong.",
    results: [
      "500+ tu khoa Google duoc theo doi hang ngay",
      "19 bai SEO blog tu dong, tang 40% traffic organic",
      "Bao cao doanh thu tu dong moi tuan qua Telegram",
      "Tiet kiem 15 gio/tuan cho team marketing",
    ],
    services: ["E-Commerce Automation", "SEO Blog", "Reporting"],
  },
  {
    href: "/showcases/wildlyplay",
    title: "WildlyPlay",
    industry: "Media & Content",
    location: "Online",
    description:
      "Kenh media World Cup 2026 tu dong dang bai da kenh, da ngon ngu. Workflow n8n phan phoi noi dung len Telegram, Facebook va X trong nhieu ngon ngu.",
    results: [
      "Auto-post len 3 kenh: Telegram, Facebook, X",
      "Tu dong dich sang 3 ngon ngu (Viet, Anh, Indo)",
      "Workflow n8n xu ly 50+ bai/ngay",
      "0 nhan su content — 100% tu dong",
    ],
    services: ["Social Media Automation", "AI Translation", "n8n Workflow"],
  },
  {
    href: "/showcases/koban",
    title: "Koban Gaming",
    industry: "Gaming Operations",
    location: "TP. Ho Chi Minh",
    description:
      "Cong ty game tu dong hoa van hanh noi bo: ghi chu meeting, theo doi Jira, quan ly cau hinh game. Team operations lam viec hieu qua hon 3 gio moi ngay.",
    results: [
      "Meeting notes tu dong sau moi cuoc hop",
      "Jira task tu dong tao va theo doi",
      "Quan ly cau hinh 40+ game tu dong",
      "Tiet kiem 3 gio/ngay cho team operations",
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
            title="Khach Hang Thanh Cong Voi SyncFlow"
            description="Nhung doanh nghiep thuc te tai Viet Nam da tiet kiem thoi gian, giam chi phi va tang truong nho AI automation."
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
