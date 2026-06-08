"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

const faqs = [
  {
    q: "SyncFlow là gì?",
    a: "SyncFlow là dịch vụ tự động hoá doanh nghiệp bằng AI, chuyên biệt cho doanh nghiệp nhỏ Việt Nam. Chúng tôi giúp bạn tự động hoá các quy trình: báo cáo doanh thu, đăng bài social media, SEO blog, chăm sóc khách hàng và vận hành nội bộ — để bạn tập trung vào tăng trưởng kinh doanh.",
  },
  {
    q: "SyncFlow phù hợp với loại doanh nghiệp nào?",
    a: "SyncFlow phù hợp với: shop online (Haravan, Shopify, Shopee), doanh nghiệp nhỏ 2-50 nhân viên, startup đang scale, team marketing cần tự động hoá content. Bất kỳ doanh nghiệp nào có công việc lặp đi lặp lại đều hưởng lợi từ AI automation.",
  },
  {
    q: "Thời gian setup mất bao lâu?",
    a: "Tuỳ vào gói dịch vụ: Starter setup trong 1 tuần, Growth trong 1-2 tuần, Enterprise trong 2-4 tuần. Trong thời gian setup, chúng tôi sẽ training team của bạn sử dụng hệ thống.",
  },
  {
    q: "Tôi có cần biết kỹ thuật không?",
    a: "Không. SyncFlow được thiết kế cho người không biết kỹ thuật. Chúng tôi setup toàn bộ hệ thống, training team sử dụng, và hỗ trợ kỹ thuật liên tục. Bạn chỉ cần biết sử dụng Telegram và trình duyệt web.",
  },
  {
    q: "Dữ liệu của tôi có an toàn không?",
    a: "Tuyệt đối an toàn. Chúng tôi sử dụng mã hoá end-to-end, server đặt tại Việt Nam và Singapore. Dữ liệu của bạn không bao giờ được chia sẻ với bên thứ ba. Chúng tôi tuân thủ quy định bảo vệ dữ liệu cá nhân Việt Nam.",
  },
  {
    q: "Có thể tích hợp với phần mềm hiện tại không?",
    a: "Có. SyncFlow tích hợp với nhiều nền tảng phổ biến: Haravan, Shopify, Shopee, Facebook, Instagram, Telegram, Jira, Google Sheets, Google Analytics, và nhiều hơn. Gói Enterprise còn hỗ trợ tích hợp ERP, CRM và phần mềm kế toán.",
  },
  {
    q: "Giá dịch vụ bao nhiêu?",
    a: "SyncFlow có 3 gói: Starter từ 5-10 triệu/tháng cho shop nhỏ, Growth từ 15-25 triệu/tháng cho doanh nghiệp đang scale, Enterprise từ 40-60 triệu/tháng cho SME 10-50 người. Tất cả đều bao gồm setup, training và hỗ trợ kỹ thuật. Xem chi tiết tại trang Bảng Giá.",
  },
  {
    q: "Có chính sách hoàn tiền không?",
    a: "Có. Chúng tôi cam kết hoàn tiền 100% trong 30 ngày đầu nếu bạn không hài lòng với dịch vụ. Không điều kiện, không ràng buộc.",
  },
  {
    q: "Hệ thống có hoạt động 24/7 không?",
    a: "Có. Sau khi setup, hệ thống AI hoạt động 24/7 không nghỉ. Chatbot trả lời khách hàng lúc 2h sáng, báo cáo gửi đúng giờ, social media đăng bài theo lịch — tất cả đều tự động.",
  },
  {
    q: "Tôi muốn thử trước, có demo không?",
    a: "Có. Đăng ký tư vấn miễn phí, chúng tôi sẽ demo trực tiếp trên quy trình thực tế của doanh nghiệp bạn. Buổi demo kéo dài 30 phút, hoàn toàn miễn phí và không ràng buộc.",
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
            title="Câu Hỏi Thường Gặp"
            description="Những câu hỏi mà khách hàng hay hỏi nhất. Không tìm thấy câu trả lời? Liên hệ trực tiếp với chúng tôi."
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
            Còn câu hỏi khác?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Liên hệ trực tiếp với chúng tôi. Phản hồi trong vòng 24 giờ làm việc.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Liên Hệ Ngay
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
