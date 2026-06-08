import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SyncFlow — Tự Động Hoá Doanh Nghiệp Bằng AI",
    template: "%s | SyncFlow",
  },
  description:
    "SyncFlow giúp doanh nghiệp nhỏ Việt Nam tự động hoá quy trình bằng AI. Tiết kiệm 80% thời gian vận hành, tăng doanh thu, giảm chi phí nhân sự.",
  metadataBase: new URL("https://syncflow.vn"),
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://syncflow.vn",
    siteName: "SyncFlow",
    title: "SyncFlow — Tự Động Hoá Doanh Nghiệp Bằng AI",
    description:
      "Giúp doanh nghiệp nhỏ Việt Nam tự động hoá quy trình bằng AI. Tiết kiệm 80% thời gian, tăng doanh thu.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
