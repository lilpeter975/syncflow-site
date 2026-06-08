import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lien He — Dang Ky Demo Mien Phi",
  description:
    "Lien he SyncFlow de dang ky tu van va demo mien phi. Phan hoi trong 24 gio lam viec.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
