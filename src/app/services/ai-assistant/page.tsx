import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "AI Assistant 24/7 — Trợ Lý AI Qua Chat",
  description:
    "Chatbot AI thông minh qua Telegram, Messenger, website. Trả lời khách hàng 24/7, tư vấn sản phẩm, chuyển tiếp nhân viên khi cần.",
};

const features = [
  {
    title: "Chatbot 24/7 Không Nghỉ",
    description:
      "Khách hàng nhắn tin lúc 2h sáng? AI trả lời ngay lập tức. Không bao giờ bỏ lỡ tin nhắn, không bao giờ để khách chờ.",
  },
  {
    title: "Hiểu Ngữ Cảnh Thông Minh",
    description:
      "Không phải chatbot trả lời máy móc. AI hiểu ngữ cảnh cuộc hội thoại, nhớ thông tin khách đã cung cấp, trả lời tự nhiên như người thật.",
  },
  {
    title: "Tư Vấn Sản Phẩm",
    description:
      "Khách hỏi 'Có sản phẩm nào phù hợp với...?' — AI hiểu nhu cầu và gợi ý sản phẩm chính xác từ catalog của bạn.",
  },
  {
    title: "Chuyển Tiếp Nhân Viên",
    description:
      "Khi câu hỏi phức tạp quá, AI tự động chuyển cho nhân viên phù hợp. Kèm theo toàn bộ lịch sử hội thoại để nhân viên không cần hỏi lại.",
  },
  {
    title: "Đa Ngôn Ngữ",
    description:
      "Hỗ trợ tiếng Việt, tiếng Anh và tiếng Trung. Tự động nhận diện ngôn ngữ của khách và trả lời bằng ngôn ngữ đó.",
  },
  {
    title: "Học Liên Tục",
    description:
      "AI học từ mọi cuộc hội thoại. Câu hỏi nào hay gặp, trả lời nào khách hài lòng — hệ thống tự tối ưu để ngày càng chính xác hơn.",
  },
];

const channels = [
  { name: "Telegram Bot", description: "Tích hợp trực tiếp vào group hoặc channel Telegram của bạn" },
  { name: "Facebook Messenger", description: "Tự động trả lời tin nhắn trên Facebook Page" },
  { name: "Website Widget", description: "Chat widget nhúng vào website, khách hỏi ngay trên trang" },
  { name: "Zalo OA", description: "Tích hợp Zalo Official Account cho khách hàng Việt Nam" },
];

export default function AIAssistantPage() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="AI Assistant"
            title="Trợ Lý AI 24/7 Cho Doanh Nghiệp"
            description="Chatbot thông minh trả lời khách hàng bất kỳ lúc nào. Hiểu ngữ cảnh, nhớ lịch sử, tư vấn sản phẩm — như một nhân viên giỏi nhất của bạn, nhưng không bao giờ nghỉ."
            light
          />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Đăng Ký Demo
            </CTAButton>
            <CTAButton href="/pricing" variant="outline" size="lg">
              Xem Bảng Giá
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Tính năng"
            title="Chatbot AI Không Chỉ Trả Lời — Mà Còn Hiểu"
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
            tag="Kênh hỗ trợ"
            title="Tiếp Cận Khách Hàng Ở Mọi Nền Tảng"
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel) => (
              <div key={channel.name} className="p-6 rounded-2xl bg-white border border-gray-200 text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{channel.name}</h3>
                <p className="text-gray-500 text-sm">{channel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Khách hàng của bạn xứng đáng được trả lời ngay lập tức
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Cài đặt AI Assistant trong 1 tuần. Demo miễn phí, không ràng buộc.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            Đăng Ký Demo Miễn Phí
          </CTAButton>
        </div>
      </section>
    </>
  );
}
