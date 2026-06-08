import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "MediaHub — Social Media Automation Case Study",
  description:
    "Kênh media World Cup 2026 tự động đăng bài đa kênh, đa ngôn ngữ. Auto-post Telegram, Facebook, X bằng n8n workflow.",
};

const stats = [
  { value: "3", label: "Kênh social tự động" },
  { value: "3", label: "Ngôn ngữ hỗ trợ" },
  { value: "50+", label: "Bài/ngày tự động" },
  { value: "0", label: "Nhân sự content" },
];

export default function WildlyPlayShowcase() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              Media & Content
            </span>
            <span className="text-xs font-semibold text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
              World Cup 2026
            </span>
          </div>
          <SectionHeading
            title="MediaHub"
            description="Kênh media bóng đá tự động đăng nội dung đa kênh, đa ngôn ngữ cho World Cup 2026. Tự động từ A-Z bằng n8n workflow và AI translation."
            light
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Thách thức</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            World Cup 2026 có 48 đội, 104 trận đấu trong 1 tháng. MediaHub cần đăng nội dung
            real-time trên nhiều kênh (Telegram, Facebook, X) bằng nhiều ngôn ngữ (Việt, Anh, Indonesia).
            Với khối lượng nội dung lớn như vậy, việc đăng thủ công là bất khả thi.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Giải pháp</h2>
          <div className="space-y-4 mb-8">
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">n8n Workflow Automation</h3>
              <p className="text-gray-600 text-sm">
                Xây dựng workflow n8n xử lý toàn bộ quy trình: lấy dữ liệu trận đấu từ API,
                tạo nội dung bằng AI, dịch sang nhiều ngôn ngữ, đăng lên các kênh tự động.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">AI Translation Đa Ngôn Ngữ</h3>
              <p className="text-gray-600 text-sm">
                Nội dung gốc tiếng Việt được AI tự động dịch sang tiếng Anh và Indonesia.
                Giữ nguyên giọng văn tự nhiên, không phải dịch máy cứng nhắc.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Auto-Post Đa Kênh</h3>
              <p className="text-gray-600 text-sm">
                Một bài viết, tự động định dạng và đăng lên Telegram channel, Facebook page và X.
                Mỗi nền tảng có format riêng, tối ưu cho từng kênh.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kết quả</h2>
          <ul className="space-y-3 mb-12">
            {[
              "Auto-post thành công lên 3 kênh: Telegram, Facebook, X",
              "Tự động dịch nội dung sang 3 ngôn ngữ",
              "Xử lý 50+ bài/ngày trong mùa World Cup",
              "0 nhân sự content — 100% tự động hoá",
              "Thời gian từ event đến đăng bài: dưới 5 phút",
            ].map((result) => (
              <li key={result} className="flex items-start gap-3 text-gray-700">
                <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {result}
              </li>
            ))}
          </ul>

          <div className="text-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Tự Động Hoá Content Của Bạn
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
