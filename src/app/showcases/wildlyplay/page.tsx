import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "WildlyPlay — Social Media Automation Case Study",
  description:
    "Kenh media World Cup 2026 tu dong dang bai da kenh, da ngon ngu. Auto-post Telegram, Facebook, X bang n8n workflow.",
};

const stats = [
  { value: "3", label: "Kenh social tu dong" },
  { value: "3", label: "Ngon ngu ho tro" },
  { value: "50+", label: "Bai/ngay tu dong" },
  { value: "0", label: "Nhan su content" },
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
            title="WildlyPlay"
            description="Kenh media bong da tu dong dang noi dung da kenh, da ngon ngu cho World Cup 2026. Tu dong tu A-Z bang n8n workflow va AI translation."
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
            World Cup 2026 co 48 doi, 104 tran dau trong 1 thang. WildlyPlay can dang noi dung
            real-time tren nhieu kenh (Telegram, Facebook, X) bang nhieu ngon ngu (Viet, Anh, Indonesia).
            Voi khoi luong noi dung lon nhu vay, viec dang thu cong la bat kha thi.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Giai phap</h2>
          <div className="space-y-4 mb-8">
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">n8n Workflow Automation</h3>
              <p className="text-gray-600 text-sm">
                Xay dung workflow n8n xu ly toan bo quy trinh: lay du lieu tran dau tu API,
                tao noi dung bang AI, dich sang nhieu ngon ngu, dang len cac kenh tu dong.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">AI Translation Da Ngon Ngu</h3>
              <p className="text-gray-600 text-sm">
                Noi dung goc tieng Viet duoc AI tu dong dich sang tieng Anh va Indonesia.
                Giu nguyen giong van tu nhien, khong phai dich may cung nhac.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Auto-Post Da Kenh</h3>
              <p className="text-gray-600 text-sm">
                Mot bai viet, tu dong dinh dang va dang len Telegram channel, Facebook page va X.
                Moi nen tang co format rieng, toi uu cho tung kenh.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ket qua</h2>
          <ul className="space-y-3 mb-12">
            {[
              "Auto-post thanh cong len 3 kenh: Telegram, Facebook, X",
              "Tu dong dich noi dung sang 3 ngon ngu",
              "Xu ly 50+ bai/ngay trong mua World Cup",
              "0 nhan su content — 100% tu dong hoa",
              "Thoi gian tu event den dang bai: duoi 5 phut",
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
              Tu Dong Hoa Content Cua Ban
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
