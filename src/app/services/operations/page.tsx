import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Operations Automation — Tu Dong Hoa Van Hanh",
  description:
    "Tu dong ghi chu meeting, quan ly Jira task, bao cao tien do hang ngay. Giup team van hanh hieu qua hon 3 gio moi ngay.",
};

const features = [
  {
    title: "Tu Dong Ghi Chu Meeting",
    description:
      "AI nghe va ghi chu meeting real-time. Tom tat noi dung chinh, action items, nguoi phu trach va deadline — gui ngay sau khi hop xong.",
  },
  {
    title: "Jira Task Management",
    description:
      "Tu dong tao task tu meeting notes, cap nhat trang thai, theo doi deadline. Nhac viec truoc khi tre han, bao cao task qua han.",
  },
  {
    title: "Daily Standup Report",
    description:
      "Tong hop tien do cong viec cua ca team hang ngay. Bao cao tu dong gui vao Telegram group moi sang — khong can hop standup dai dong.",
  },
  {
    title: "Theo Doi Deadline",
    description:
      "He thong tu dong nhac viec truoc deadline 1 ngay, 3 ngay. Phat hien task bi block va thong bao nguoi lien quan.",
  },
  {
    title: "KPI Dashboard",
    description:
      "Tong hop KPI tu nhieu nguon: Jira, Google Sheets, CRM. Dashboard truc quan cho manager nhin toan canh ma khong can mo nhieu tab.",
  },
  {
    title: "Workflow Approval",
    description:
      "Quy trinh duyet tu dong: nghi phep, mua sam, thay doi config. Manager duyet tren Telegram, he thong tu dong cap nhat.",
  },
];

export default function OperationsPage() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Operations Automation"
            title="Tu Dong Hoa Van Hanh Noi Bo"
            description="Meeting notes, Jira, bao cao tien do — tat ca chay tu dong. Team cua ban lam viec hieu qua hon 3 gio moi ngay."
            light
          />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Dang Ky Demo
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
            tag="Tinh nang"
            title="Toi Uu Hoa Moi Quy Trinh Van Hanh"
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
            tag="So sanh"
            title="Truoc Va Sau Khi Su Dung SyncFlow"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-red-50 border border-red-200">
              <h3 className="font-bold text-red-700 mb-4">Truoc SyncFlow</h3>
              <ul className="space-y-3 text-red-600 text-sm">
                <li>Meeting notes ghi bang tay, hay bi sot</li>
                <li>Jira task tao thu cong, quen cap nhat</li>
                <li>Standup hop 30 phut moi sang</li>
                <li>Manager phai hoi tung nguoi ve tien do</li>
                <li>KPI tong hop cuoi thang moi co</li>
              </ul>
            </div>
            <div className="p-8 rounded-2xl bg-green-50 border border-green-200">
              <h3 className="font-bold text-green-700 mb-4">Sau SyncFlow</h3>
              <ul className="space-y-3 text-green-600 text-sm">
                <li>Meeting notes tu dong, day du 100%</li>
                <li>Jira task tu tao tu meeting, tu cap nhat</li>
                <li>Standup report tu dong moi sang 9h</li>
                <li>Dashboard real-time, nhin la biet tien do</li>
                <li>KPI cap nhat lien tuc, bao cao bat ky luc nao</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Team cua ban xung dang lam viec hieu qua hon
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Bat dau tu dong hoa van hanh. 30 phut tu van mien phi, khong rang buoc.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            Dat Lich Tu Van
          </CTAButton>
        </div>
      </section>
    </>
  );
}
