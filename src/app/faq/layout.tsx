import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Câu Hỏi Thường Gặp",
  description:
    "Trả lời các câu hỏi thường gặp về dịch vụ AI automation của SyncFlow: giá cả, thời gian setup, bảo mật, tích hợp.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
