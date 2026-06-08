import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "E-Commerce Automation — Tu Dong Hoa Thuong Mai Dien Tu",
  description:
    "Tu dong hoa quan ly don hang, bao cao doanh thu, SEO blog va theo doi tu khoa cho shop online. Phu hop Haravan, Shopify, Shopee.",
};

const features = [
  {
    title: "Tu Dong Xu Ly Don Hang",
    description:
      "He thong tu dong nhan don, cap nhat trang thai, gui thong bao cho khach hang va dong bo voi van chuyen. Khong can ngoi refresh admin ca ngay.",
  },
  {
    title: "Bao Cao Doanh Thu Thong Minh",
    description:
      "Bao cao tu dong hang ngay, hang tuan, hang thang. So sanh doanh thu theo thoi gian, san pham ban chay, ty le chuyen doi — gui thang vao Telegram.",
  },
  {
    title: "SEO Blog Tu Dong",
    description:
      "AI viet bai SEO chuyen nghiep, toi uu H1-H6, meta tags, schema markup. Dang tu dong len blog cua shop, giup tang traffic organic mien phi.",
  },
  {
    title: "Theo Doi 500+ Tu Khoa",
    description:
      "He thong tracking thu hang Google cho 500+ tu khoa moi ngay. Bao cao xu huong, phat hien co hoi keyword moi, goi y noi dung can viet.",
  },
  {
    title: "Dong Bo Ton Kho Da Kenh",
    description:
      "Ton kho tu dong dong bo giua Haravan, Shopee, Lazada, TikTok Shop. Het hang o kenh nay tu dong an o kenh kia — khong bao gio ban vuot.",
  },
  {
    title: "Alert Het Hang Va Xu Huong",
    description:
      "Thong bao khi san pham sap het hang, khi co san pham ban chay bat thuong, khi doi thu thay doi gia. Ban luon nam bat thi truong.",
  },
];

const workflow = [
  { step: "1", title: "Ket noi shop", description: "Lien ket Haravan, Shopify hoac Shopee chi trong 10 phut" },
  { step: "2", title: "Cau hinh quy trinh", description: "Chon quy trinh can tu dong hoa va cai dat thong so" },
  { step: "3", title: "AI hoat dong", description: "He thong bat dau chay 24/7, ban nhan bao cao qua Telegram" },
  { step: "4", title: "Toi uu lien tuc", description: "AI hoc tu data cua ban de ngay cang chinh xac hon" },
];

export default function EcommercePage() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="E-Commerce Automation"
            title="Tu Dong Hoa Thuong Mai Dien Tu"
            description="Don hang, bao cao, SEO, ton kho — tat ca chay tu dong. Ban chi can tap trung vao chien luoc kinh doanh va cham soc khach hang."
            light
          />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Dang Ky Demo
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
            tag="Tinh nang"
            title="Moi Thu Ban Can Cho Shop Online"
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
            tag="Quy trinh"
            title="Bat Dau Trong 4 Buoc Don Gian"
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
            San sang tu dong hoa shop cua ban?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Bat dau voi buoi tu van mien phi 30 phut. Chung toi se phan tich shop cua ban va de xuat giai phap cu the.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            Dat Lich Tu Van Mien Phi
          </CTAButton>
        </div>
      </section>
    </>
  );
}
