import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Operations Automation — Tự Động Hoá Vận Hành",
  description:
    "Tự động ghi chú meeting, quản lý Jira task, báo cáo tiến độ hàng ngày. Giúp team vận hành hiệu quả hơn 3 giờ mỗi ngày.",
};

const features = [
  {
    title: "Tự Động Ghi Chú Meeting",
    description:
      "AI nghe và ghi chú meeting real-time. Tóm tắt nội dung chính, action items, người phụ trách và deadline — gửi ngay sau khi họp xong.",
  },
  {
    title: "Jira Task Management",
    description:
      "Tự động tạo task từ meeting notes, cập nhật trạng thái, theo dõi deadline. Nhắc việc trước khi trễ hạn, báo cáo task quá hạn.",
  },
  {
    title: "Daily Standup Report",
    description:
      "Tổng hợp tiến độ công việc của cả team hàng ngày. Báo cáo tự động gửi vào Telegram group mỗi sáng — không cần họp standup dài dòng.",
  },
  {
    title: "Theo Dõi Deadline",
    description:
      "Hệ thống tự động nhắc việc trước deadline 1 ngày, 3 ngày. Phát hiện task bị block và thông báo người liên quan.",
  },
  {
    title: "KPI Dashboard",
    description:
      "Tổng hợp KPI từ nhiều nguồn: Jira, Google Sheets, CRM. Dashboard trực quan cho manager nhìn toàn cảnh mà không cần mở nhiều tab.",
  },
  {
    title: "Workflow Approval",
    description:
      "Quy trình duyệt tự động: nghỉ phép, mua sắm, thay đổi config. Manager duyệt trên Telegram, hệ thống tự động cập nhật.",
  },
];

export default function OperationsPage() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Operations Automation"
            title="Tự Động Hoá Vận Hành Nội Bộ"
            description="Meeting notes, Jira, báo cáo tiến độ — tất cả chạy tự động. Team của bạn làm việc hiệu quả hơn 3 giờ mỗi ngày."
            light
          />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Đăng Ký Demo
            </CTAButton>
            <CTAButton href="/showcases/koban" variant="outline" size="lg">
              Xem Case Study
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Tính năng"
            title="Tối Ưu Hoá Mọi Quy Trình Vận Hành"
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="So sánh"
            title="Trước Và Sau Khi Sử Dụng SyncFlow"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-red-50 border border-red-200">
              <h3 className="font-bold text-red-700 mb-4">Trước SyncFlow</h3>
              <ul className="space-y-3 text-red-600 text-sm">
                <li>Meeting notes ghi bằng tay, hay bị sót</li>
                <li>Jira task tạo thủ công, quên cập nhật</li>
                <li>Standup họp 30 phút mỗi sáng</li>
                <li>Manager phải hỏi từng người về tiến độ</li>
                <li>KPI tổng hợp cuối tháng mới có</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-green-50 border border-green-200">
              <h3 className="font-bold text-green-700 mb-4">Sau SyncFlow</h3>
              <ul className="space-y-3 text-green-600 text-sm">
                <li>Meeting notes tự động, đầy đủ 100%</li>
                <li>Jira task tự tạo từ meeting, tự cập nhật</li>
                <li>Standup report tự động mỗi sáng 9h</li>
                <li>Dashboard real-time, nhìn là biết tiến độ</li>
                <li>KPI cập nhật liên tục, báo cáo bất kỳ lúc nào</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Team của bạn xứng đáng làm việc hiệu quả hơn
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Bắt đầu tự động hoá vận hành. 30 phút tư vấn miễn phí, không ràng buộc.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            Đặt Lịch Tư Vấn
          </CTAButton>
        </div>
      </section>
    </>
  );
}
