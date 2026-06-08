import CTAButton from "@/components/CTAButton";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">
        Trang bạn tìm không tồn tại hoặc đã bị di chuyển.
      </p>
      <CTAButton href="/" variant="primary">
        Quay Về Trang Chủ
      </CTAButton>
    </section>
  );
}
