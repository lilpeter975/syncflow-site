import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Cau Hoi Thuong Gap",
  description:
    "Tra loi cac cau hoi thuong gap ve dich vu AI automation cua SyncFlow: gia ca, thoi gian setup, bao mat, tich hop.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
