import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Koban Gaming — Operations Automation Case Study",
  description:
    "Cong ty gaming tu dong hoa van hanh: meeting notes, Jira monitoring, game config management. Tiet kiem 3 gio/ngay.",
};

const stats = [
  { value: "3h", label: "Tiet kiem moi ngay" },
  { value: "40+", label: "Game duoc quan ly" },
  { value: "100%", label: "Meeting notes tu dong" },
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
              TP. Ho Chi Minh
            </span>
          </div>
          <SectionHeading
            title="Koban Gaming"
            description="Cong ty game tu dong hoa van hanh noi bo: meeting notes, Jira task tracking, quan ly cau hinh 40+ game. Team operations lam viec hieu qua gap boi."
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Thach thuc</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Koban quan ly 40+ game online, moi game co cau hinh rieng can theo doi.
            Team operations phai ghi chep meeting thu cong, cap nhat Jira task bang tay,
            va theo doi trang thai game 24/7. Cong viec lap di lap lai chiem mat 3+ gio moi ngay.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Giai phap</h2>
          <div className="space-y-4 mb-8">
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Auto Meeting Notes</h3>
              <p className="text-gray-600 text-sm">
                AI tu dong ghi chep va tom tat moi cuoc hop. Trich xuat action items,
                nguoi phu trach va deadline. Gui ket qua vao Telegram ngay sau khi hop xong.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Jira Monitoring</h3>
              <p className="text-gray-600 text-sm">
                He thong theo doi trang thai task Jira 24/7. Thong bao khi task qua han,
                khi co thay doi trang thai, va tong hop bao cao tien do hang ngay.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Game Config Management</h3>
              <p className="text-gray-600 text-sm">
                Quan ly cau hinh 40+ game tu dong: RTP, lich bao tri, trang thai hoat dong.
                Thay doi config qua Telegram command, khong can truy cap admin panel.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ket qua</h2>
          <ul className="space-y-3 mb-12">
            {[
              "Meeting notes tu dong 100%, khong sot thong tin",
              "Jira task tracking 24/7, thong bao qua han real-time",
              "Quan ly cau hinh 40+ game tu Telegram",
              "Daily standup report tu dong luc 9h sang",
              "Tiet kiem 3 gio/ngay cho team operations",
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
              Tu Dong Hoa Operations Cua Ban
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
