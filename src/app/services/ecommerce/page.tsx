import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "E-Commerce Automation — Tự Động Hoá Thương Mại Điện Tử",
  description:
    "Tự động hoá quản lý đơn hàng, báo cáo doanh thu, SEO blog và theo dõi từ khoá cho shop online. Phù hợp Haravan, Shopify, Shopee.",
};

const features = [
  {
    title: "Tự Động Xử Lý Đơn Hàng",
    description:
      "Hệ thống tự động nhận đơn, cập nhật trạng thái, gửi thông báo cho khách hàng và đồng bộ với vận chuyển. Không cần ngồi refresh admin cả ngày.",
  },
  {
    title: "Báo Cáo Doanh Thu Thông Minh",
    description:
      "Báo cáo tự động hàng ngày, hàng tuần, hàng tháng. So sánh doanh thu theo thời gian, sản phẩm bán chạy, tỷ lệ chuyển đổi — gửi thẳng vào Telegram.",
  },
  {
    title: "SEO Blog Tự Động",
    description:
      "AI viết bài SEO chuyên nghiệp, tối ưu H1-H6, meta tags, schema markup. Đăng tự động lên blog của shop, giúp tăng traffic organic miễn phí.",
  },
  {
    title: "Theo Dõi 500+ Từ Khoá",
    description:
      "Hệ thống tracking thứ hạng Google cho 500+ từ khoá mỗi ngày. Báo cáo xu hướng, phát hiện cơ hội keyword mới, gợi ý nội dung cần viết.",
  },
  {
    title: "Đồng Bộ Tồn Kho Đa Kênh",
    description:
      "Tồn kho tự động đồng bộ giữa Haravan, Shopee, Lazada, TikTok Shop. Hết hàng ở kênh này tự động ẩn ở kênh kia — không bao giờ bán vượt.",
  },
  {
    title: "Alert Hết Hàng Và Xu Hướng",
    description:
      "Thông báo khi sản phẩm sắp hết hàng, khi có sản phẩm bán chạy bất thường, khi đối thủ thay đổi giá. Bạn luôn nắm bắt thị trường.",
  },
];

const workflow = [
  { step: "1", title: "Kết nối shop", description: "Liên kết Haravan, Shopify hoặc Shopee chỉ trong 10 phút" },
  { step: "2", title: "Cấu hình quy trình", description: "Chọn quy trình cần tự động hoá và cài đặt thông số" },
  { step: "3", title: "AI hoạt động", description: "Hệ thống bắt đầu chạy 24/7, bạn nhận báo cáo qua Telegram" },
  { step: "4", title: "Tối ưu liên tục", description: "AI học từ data của bạn để ngày càng chính xác hơn" },
];

export default function EcommercePage() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="E-Commerce Automation"
            title="Tự Động Hoá Thương Mại Điện Tử"
            description="Đơn hàng, báo cáo, SEO, tồn kho — tất cả chạy tự động. Bạn chỉ cần tập trung vào chiến lược kinh doanh và chăm sóc khách hàng."
            light
          />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Đăng Ký Demo
            </CTAButton>
            <CTAButton href="/showcases/snapshop" variant="outline" size="lg">
              Xem Case Study
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Tính năng"
            title="Mọi Thứ Bạn Cần Cho Shop Online"
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
            tag="Quy trình"
            title="Bắt Đầu Trong 4 Bước Đơn Giản"
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white text-lg font-bold flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Sẵn sàng tự động hoá shop của bạn?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Bắt đầu với buổi tư vấn miễn phí 30 phút. Chúng tôi sẽ phân tích shop của bạn và đề xuất giải pháp cụ thể.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            Đặt Lịch Tư Vấn Miễn Phí
          </CTAButton>
        </div>
      </section>
    </>
  );
}
