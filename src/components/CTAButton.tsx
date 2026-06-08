import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
}: CTAButtonProps) {
  const base = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary: "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/25 hover:shadow-primary/40",
    secondary: "bg-accent hover:bg-accent-dark text-white shadow-lg shadow-accent/25",
    outline: "border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary",
  };

  return (
    <Link href={href} className={`${base} ${sizes[size]} ${variants[variant]}`}>
      {children}
    </Link>
  );
}
