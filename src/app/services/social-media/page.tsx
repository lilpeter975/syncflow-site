import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Social Media Automation — Auto-Post Đa Kênh",
  description:
    "Tự động đăng bài Facebook, Instagram, X, Telegram. AI tạo caption, lên lịch đăng bài, theo dõi hiệu quả tự động.",
};

const features = [
  {
    title: "Auto-Post Đa Kênh",
    description:
      "Viết một bài, tự động đăng lên Facebook, Instagram, X và Telegram cùng lúc. Tối ưu format cho từng nền tảng — không cần copy-paste.",
  },
  {
    title: "AI Tạo Caption Và Hashtag",
    description:
      "AI hiểu sản phẩm của bạn, tự tạo caption hấp dẫn và chọn hashtag trending. Mỗi bài viết đều được tối ưu để tăng reach và engagement.",
  },
  {
    title: "Lên Lịch Đăng Bài Thông Minh",
    description:
      "Hệ thống phân tích data để xác định khung giờ vàng của từng kênh. Tự động đăng bài vào lúc nhiều người online nhất.",
  },
  {
    title: "Báo Cáo Hiệu Quả",
    description:
      "Dashboard theo dõi reach, engagement, click cho từng bài viết và từng kênh. Biết bài nào hiệu quả, bài nào cần cải thiện.",
  },
  {
    title: "A/B Test Tiêu Đề",
    description:
      "Tự động thử nhiều phiên bản tiêu đề và caption. Sau 24h, hệ thống chọn bản thắng cuộc và push cho nhiều người hơn.",
  },
  {
    title: "Repurpose Nội Dung",
    description:
      "Một bài blog dài tự động trở thành 5 bài social, 3 story, 1 thread X. AI chia nhỏ và định dạng lại cho từng nền tảng.",
  },
];

const platforms = [
  { name: "Facebook", description: "Page posts, Stories, Reels captions" },
  { name: "Instagram", description: "Feed posts, Stories, Reels" },
  { name: "X (Twitter)", description: "Tweets, Threads, Polls" },
  { name: "Telegram", description: "Channel posts, Group updates" },
];

export default function SocialMediaPage() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Social Media Automation"
            title="Auto-Post Đa Kênh Bằng AI"
            description="Một nội dung, tự động xuất bản trên tất cả kênh social media. AI tạo caption, chọn hashtag, lên lịch — bạn chỉ cần duyệt và đăng."
            light
          />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Đăng Ký Demo
            </CTAButton>
            <CTAButton href="/showcases/mediahub" variant="outline" size="lg">
              Xem Case Study
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Tính năng"
            title="Tự Động Hoá Content Marketing Toàn Diện"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Nền tảng hỗ trợ"
            title="Hỗ Trợ Tất Cả Kênh Social Phổ Biến"
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="p-6 rounded-2xl bg-white border border-gray-200 text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{platform.name}</h3>
                <p className="text-gray-500 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ngừng mất thời gian copy-paste giữa các kênh
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Để AI làm phần nhàm chán. Bạn tập trung vào ý tưởng và chiến lược nội dung.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            Bắt Đầu Ngay
          </CTAButton>
        </div>
      </section>
    </>
  );
}
