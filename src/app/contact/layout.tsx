import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên Hệ — Đăng Ký Demo Miễn Phí",
  description:
    "Liên hệ SyncFlow để đăng ký tư vấn và demo miễn phí. Phản hồi trong 24 giờ làm việc.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
