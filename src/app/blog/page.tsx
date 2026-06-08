import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog — Kien Thuc AI Automation",
  description:
    "Bai viet ve AI automation, tu dong hoa doanh nghiep, SEO, social media marketing cho doanh nghiep nho Viet Nam.",
};

const posts = [
  {
    slug: "ai-tu-dong-hoa-cho-doanh-nghiep-nho",
    title: "AI Tu Dong Hoa Cho Doanh Nghiep Nho Viet Nam — Huong Dan Tu A-Z 2026",
    excerpt:
      "Huong dan day du ve cach ap dung AI tu dong hoa cho doanh nghiep nho tai Viet Nam. Tu khau niem co ban den trien khai thuc te, voi vi du cu the va chi phi tham khao.",
    date: "2026-06-01",
    readTime: "12 phut doc",
    category: "Huong Dan",
  },
  {
    slug: "ai-tu-dong-hoa-cho-doanh-nghiep-nho",
    title: "5 Quy Trinh Dau Tien Nen Tu Dong Hoa Trong Doanh Nghiep Nho",
    excerpt:
      "Khong can tu dong hoa tat ca cung mot luc. Bat dau tu 5 quy trinh nay de thay ket qua nhanh nhat voi chi phi thap nhat.",
    date: "2026-05-20",
    readTime: "8 phut doc",
    category: "Chien Luoc",
  },
  {
    slug: "ai-tu-dong-hoa-cho-doanh-nghiep-nho",
    title: "So Sanh n8n vs Zapier vs Make: Cong Cu Automation Nao Phu Hop?",
    excerpt:
      "Phan tich chi tiet 3 nen tang automation pho bien nhat. Uu nhuoc diem, chi phi va truong hop su dung tot nhat cho doanh nghiep Viet.",
    date: "2026-05-10",
    readTime: "10 phut doc",
    category: "Cong Cu",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Blog"
            title="Kien Thuc AI Automation"
            description="Chia se kien thuc, kinh nghiem va huong dan thuc te ve AI automation cho doanh nghiep nho Viet Nam."
            light
          />
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post, index) => (
              <Link
                key={index}
                href={`/blog/${post.slug}`}
                className="group block p-8 rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <span className="text-xs text-gray-400">{post.readTime}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
