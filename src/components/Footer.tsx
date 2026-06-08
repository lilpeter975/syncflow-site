import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  "Dịch Vụ": [
    { label: "E-Commerce", href: "/services/ecommerce" },
    { label: "Social Media", href: "/services/social-media" },
    { label: "Vận Hành", href: "/services/operations" },
    { label: "AI Assistant", href: "/services/ai-assistant" },
  ],
  "Công Ty": [
    { label: "Showcases", href: "/showcases" },
    { label: "Bảng Giá", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
  ],
  "Liên Hệ": [
    { label: "hello@syncflow.vn", href: "mailto:hello@syncflow.vn" },
    { label: "08 39 888 188", href: "tel:0839888188" },
    { label: "TP. Hồ Chí Minh, Việt Nam", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-gray-400 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Image
              src="/logos/logo-light.png"
              alt="SyncFlow"
              width={120}
              height={32}
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm leading-relaxed">
              Tự động hoá doanh nghiệp bằng AI. Giúp doanh nghiệp nhỏ Việt Nam tiết kiệm thời gian,
              giảm chi phí vận hành và tăng trưởng bền vững.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-dark-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">&copy; 2026 SyncFlow. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/faq" className="hover:text-white transition-colors">
              Chính Sách Bảo Mật
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              Điều Khoản Sử Dụng
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
