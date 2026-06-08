"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const faqs = [
  {
    q: "SyncFlow la gi?",
    a: "SyncFlow la dich vu tu dong hoa doanh nghiep bang AI, chuyen biet cho doanh nghiep nho Viet Nam. Chung toi giup ban tu dong hoa cac quy trinh: bao cao doanh thu, dang bai social media, SEO blog, cham soc khach hang va van hanh noi bo — de ban tap trung vao tang truong kinh doanh.",
  },
  {
    q: "SyncFlow phu hop voi loai doanh nghiep nao?",
    a: "SyncFlow phu hop voi: shop online (Haravan, Shopify, Shopee), doanh nghiep nho 2-50 nhan vien, startup dang scale, team marketing can tu dong hoa content. Bat ky doanh nghiep nao co cong viec lap di lap lai deu huong loi tu AI automation.",
  },
  {
    q: "Thoi gian setup mat bao lau?",
    a: "Tuy vao goi dich vu: Starter setup trong 1 tuan, Growth trong 1-2 tuan, Enterprise trong 2-4 tuan. Trong thoi gian setup, chung toi se training team cua ban su dung he thong.",
  },
  {
    q: "Toi co can biet ky thuat khong?",
    a: "Khong. SyncFlow duoc thiet ke cho nguoi khong biet ky thuat. Chung toi setup toan bo he thong, training team su dung, va ho tro ky thuat lien tuc. Ban chi can biet su dung Telegram va trinh duyet web.",
  },
  {
    q: "Du lieu cua toi co an toan khong?",
    a: "Tuyet doi an toan. Chung toi su dung ma hoa end-to-end, server dat tai Viet Nam va Singapore. Du lieu cua ban khong bao gio duoc chia se voi ben thu ba. Chung toi tuan thu quy dinh bao ve du lieu ca nhan Viet Nam.",
  },
  {
    q: "Co the tich hop voi phan mem hien tai khong?",
    a: "Co. SyncFlow tich hop voi nhieu nen tang pho bien: Haravan, Shopify, Shopee, Facebook, Instagram, Telegram, Jira, Google Sheets, Google Analytics, va nhieu hon. Goi Enterprise con ho tro tich hop ERP, CRM va phan mem ke toan.",
  },
  {
    q: "Gia dich vu bao nhieu?",
    a: "SyncFlow co 3 goi: Starter tu 5-10 trieu/thang cho shop nho, Growth tu 15-25 trieu/thang cho doanh nghiep dang scale, Enterprise tu 40-60 trieu/thang cho SME 10-50 nguoi. Tat ca deu bao gom setup, training va ho tro ky thuat. Xem chi tiet tai trang Bang Gia.",
  },
  {
    q: "Co chinh sach hoan tien khong?",
    a: "Co. Chung toi cam ket hoan tien 100% trong 30 ngay dau neu ban khong hai long voi dich vu. Khong dieu kien, khong rang buoc.",
  },
  {
    q: "He thong co hoat dong 24/7 khong?",
    a: "Co. Sau khi setup, he thong AI hoat dong 24/7 khong nghi. Chatbot tra loi khach hang luc 2h sang, bao cao gui dung gio, social media dang bai theo lich — tat ca deu tu dong.",
  },
  {
    q: "Toi muon thu truoc, co demo khong?",
    a: "Co. Dang ky tu van mien phi, chung toi se demo truc tiep tren quy trinh thuc te cua doanh nghiep ban. Buoi demo keo dai 30 phut, hoan toan mien phi va khong rang buoc.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="FAQ"
            title="Cau Hoi Thuong Gap"
            description="Nhung cau hoi ma khach hang hay hoi nhat. Khong tim thay cau tra loi? Lien he truc tiep voi chung toi."
            light
          />
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Con cau hoi khac?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Lien he truc tiep voi chung toi. Phan hoi trong vong 24 gio lam viec.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Lien He Ngay
            </CTAButton>
            <CTAButton href="mailto:hello@syncflow.vn" variant="outline" size="lg">
              Email: hello@syncflow.vn
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
