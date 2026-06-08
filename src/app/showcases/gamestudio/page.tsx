import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "GameStudio — Operations Automation Case Study",
  description:
    "Công ty gaming tự động hoá vận hành: meeting notes, Jira monitoring, game config management. Tiết kiệm 3 giờ/ngày.",
};

const stats = [
  { value: "3h", label: "Tiết kiệm mỗi ngày" },
  { value: "40+", label: "Game được quản lý" },
  { value: "100%", label: "Meeting notes tự động" },
  { value: "24/7", label: "Jira monitoring" },
];

export default function KobanShowcase() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              Gaming Operations
            </span>
            <span className="text-xs font-semibold text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
              TP. Hồ Chí Minh
            </span>
          </div>
          <SectionHeading
            title="GameStudio"
            description="Công ty game tự động hoá vận hành nội bộ: meeting notes, Jira task tracking, quản lý cấu hình 40+ game. Team operations làm việc hiệu quả gấp bội."
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
            GameStudio quản lý 40+ game online, mỗi game có cấu hình riêng cần theo dõi.
            Team operations phải ghi chép meeting thủ công, cập nhật Jira task bằng tay,
            và theo dõi trạng thái game 24/7. Công việc lặp đi lặp lại chiếm mất 3+ giờ mỗi ngày.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Giải pháp</h2>
          <div className="space-y-4 mb-8">
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Auto Meeting Notes</h3>
              <p className="text-gray-600 text-sm">
                AI tự động ghi chép và tóm tắt mỗi cuộc họp. Trích xuất action items,
                người phụ trách và deadline. Gửi kết quả vào Telegram ngay sau khi họp xong.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Jira Monitoring</h3>
              <p className="text-gray-600 text-sm">
                Hệ thống theo dõi trạng thái task Jira 24/7. Thông báo khi task quá hạn,
                khi có thay đổi trạng thái, và tổng hợp báo cáo tiến độ hàng ngày.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Game Config Management</h3>
              <p className="text-gray-600 text-sm">
                Quản lý cấu hình 40+ game tự động: RTP, lịch bảo trì, trạng thái hoạt động.
                Thay đổi config qua Telegram command, không cần truy cập admin panel.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Kết quả</h2>
          <ul className="space-y-3 mb-12">
            {[
              "Meeting notes tự động 100%, không sót thông tin",
              "Jira task tracking 24/7, thông báo quá hạn real-time",
              "Quản lý cấu hình 40+ game từ Telegram",
              "Daily standup report tự động lúc 9h sáng",
              "Tiết kiệm 3 giờ/ngày cho team operations",
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
              Tự Động Hoá Operations Của Bạn
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
