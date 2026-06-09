import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog — Kiến Thức AI Automation",
  description:
    "Bài viết về AI automation, tự động hoá doanh nghiệp, SEO, social media marketing cho doanh nghiệp nhỏ Việt Nam.",
};

const posts = [
  {
    slug: "ai-tu-dong-hoa-cho-doanh-nghiep-nho",
    title: "AI Tự Động Hoá Cho Doanh Nghiệp Nhỏ Việt Nam — Hướng Dẫn Từ A-Z 2026",
    excerpt:
      "Hướng dẫn đầy đủ về cách áp dụng AI tự động hoá cho doanh nghiệp nhỏ tại Việt Nam. Từ khái niệm cơ bản đến triển khai thực tế, với ví dụ cụ thể và chi phí tham khảo.",
    date: "2026-06-01",
    readTime: "12 phút đọc",
    category: "Hướng Dẫn",
  },
  {
    slug: "chatbot-ai-cho-shop-online",
    title: "Chatbot AI Cho Shop Online — Tại Sao Khách Hàng Đi Mất Khi Bạn Không Trả Lời?",
    excerpt:
      "85% khách hàng không quay lại nếu tin nhắn không được trả lời trong 5 phút. Tìm hiểu cách chatbot AI giúp shop online giữ chân khách, tăng doanh thu 20%.",
    date: "2026-06-08",
    readTime: "8 phút đọc",
    category: "Chatbot AI",
  },
  {
    slug: "ai-tu-dong-hoa-cho-doanh-nghiep-nho",
    title: "5 Quy Trình Đầu Tiên Nên Tự Động Hoá Trong Doanh Nghiệp Nhỏ",
    excerpt:
      "Không cần tự động hoá tất cả cùng một lúc. Bắt đầu từ 5 quy trình này để thấy kết quả nhanh nhất với chi phí thấp nhất.",
    date: "2026-05-20",
    readTime: "8 phút đọc",
    category: "Chiến Lược",
  },
  {
    slug: "ai-tu-dong-hoa-cho-doanh-nghiep-nho",
    title: "So Sánh n8n vs Zapier vs Make: Công Cụ Automation Nào Phù Hợp?",
    excerpt:
      "Phân tích chi tiết 3 nền tảng automation phổ biến nhất. Ưu nhược điểm, chi phí và trường hợp sử dụng tốt nhất cho doanh nghiệp Việt.",
    date: "2026-05-10",
    readTime: "10 phút đọc",
    category: "Công Cụ",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Blog"
            title="Kiến Thức AI Automation"
            description="Chia sẻ kiến thức, kinh nghiệm và hướng dẫn thực tế về AI automation cho doanh nghiệp nhỏ Việt Nam."
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
