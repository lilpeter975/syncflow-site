import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "AI Assistant 24/7 — Tro Ly AI Qua Chat",
  description:
    "Chatbot AI thong minh qua Telegram, Messenger, website. Tra loi khach hang 24/7, tu van san pham, chuyen tiep nhan vien khi can.",
};

const features = [
  {
    title: "Chatbot 24/7 Khong Nghi",
    description:
      "Khach hang nhan tin luc 2h sang? AI tra loi ngay lap tuc. Khong bao gio bo lo tin nhan, khong bao gio de khach cho.",
  },
  {
    title: "Hieu Ngu Canh Thong Minh",
    description:
      "Khong phai chatbot tra loi may moc. AI hieu ngu canh cuoc hoi thoai, nho thong tin khach da cung cap, tra loi tu nhien nhu nguoi that.",
  },
  {
    title: "Tu Van San Pham",
    description:
      "Khach hoi 'Co san pham nao phu hop voi...?' — AI hieu nhu cau va goi y san pham chinh xac tu catalog cua ban.",
  },
  {
    title: "Chuyen Tiep Nhan Vien",
    description:
      "Khi cau hoi phuc tap qua, AI tu dong chuyen cho nhan vien phu hop. Kem theo toan bo lich su hoi thoai de nhan vien khong can hoi lai.",
  },
  {
    title: "Da Ngon Ngu",
    description:
      "Ho tro tieng Viet, tieng Anh va tieng Trung. Tu dong nhan dien ngon ngu cua khach va tra loi bang ngon ngu do.",
  },
  {
    title: "Hoc Lien Tuc",
    description:
      "AI hoc tu moi cuoc hoi thoai. Cau hoi nao hay gap, tra loi nao khach hai long — he thong tu toi uu de ngay cang chinh xac hon.",
  },
];

const channels = [
  { name: "Telegram Bot", description: "Tich hop truc tiep vao group hoac channel Telegram cua ban" },
  { name: "Facebook Messenger", description: "Tu dong tra loi tin nhan tren Facebook Page" },
  { name: "Website Widget", description: "Chat widget nhung vao website, khach hoi ngay tren trang" },
  { name: "Zalo OA", description: "Tich hop Zalo Official Account cho khach hang Viet Nam" },
];

export default function AIAssistantPage() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="AI Assistant"
            title="Tro Ly AI 24/7 Cho Doanh Nghiep"
            description="Chatbot thong minh tra loi khach hang bat ky luc nao. Hieu ngu canh, nho lich su, tu van san pham — nhu mot nhan vien gioi nhat cua ban, nhung khong bao gio nghi."
            light
          />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Dang Ky Demo
            </CTAButton>
            <CTAButton href="/pricing" variant="outline" size="lg">
              Xem Bang Gia
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Tinh nang"
            title="Chatbot AI Khong Chi Tra Loi — Ma Con Hieu"
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
            tag="Kenh ho tro"
            title="Tiep Can Khach Hang O Moi Nen Tang"
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
            Khach hang cua ban xung dang duoc tra loi ngay lap tuc
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Cai dat AI Assistant trong 1 tuan. Demo mien phi, khong rang buoc.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            Dang Ky Demo Mien Phi
          </CTAButton>
        </div>
      </section>
    </>
  );
}
