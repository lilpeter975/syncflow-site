import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CTAButton from "@/components/CTAButton";

export const metadata: Metadata = {
  title: "Social Media Automation — Auto-Post Da Kenh",
  description:
    "Tu dong dang bai Facebook, Instagram, X, Telegram. AI tao caption, len lich dang bai, theo doi hieu qua tu dong.",
};

const features = [
  {
    title: "Auto-Post Da Kenh",
    description:
      "Viet mot bai, tu dong dang len Facebook, Instagram, X va Telegram cung luc. Toi uu format cho tung nen tang — khong can copy-paste.",
  },
  {
    title: "AI Tao Caption Va Hashtag",
    description:
      "AI hieu san pham cua ban, tu tao caption hap dan va chon hashtag trending. Moi bai viet deu duoc toi uu de tang reach va engagement.",
  },
  {
    title: "Len Lich Dang Bai Thong Minh",
    description:
      "He thong phan tich data de xac dinh khung gio vang cua tung kenh. Tu dong dang bai vao luc nhieu nguoi online nhat.",
  },
  {
    title: "Bao Cao Hieu Qua",
    description:
      "Dashboard theo doi reach, engagement, click cho tung bai viet va tung kenh. Biet bai nao hieu qua, bai nao can cai thien.",
  },
  {
    title: "A/B Test Tieu De",
    description:
      "Tu dong thu nhieu phien ban tieu de va caption. Sau 24h, he thong chon ban thang cuoc va push cho nhieu nguoi hon.",
  },
  {
    title: "Repurpose Noi Dung",
    description:
      "Mot bai blog dai tu dong tro thanh 5 bai social, 3 story, 1 thread X. AI chia nho va dinh dang lai cho tung nen tang.",
  },
];

const platforms = [
  { name: "Facebook", description: "Page posts, Stories, Reels captions" },
  { name: "Instagram", description: "Feed posts, Stories, Reels" },
  { name: "X (Twitter)", description: "Tweets, Threads, Polls" },
  { name: "Telegram", description: "Channel posts, Group updates" },
];

export default function SocialMediaPage() {
  return (
    <>
      <section className="bg-dark-bg py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Social Media Automation"
            title="Auto-Post Da Kenh Bang AI"
            description="Mot noi dung, tu dong xuat ban tren tat ca kenh social media. AI tao caption, chon hashtag, len lich — ban chi can duyet va dang."
            light
          />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact" variant="primary" size="lg">
              Dang Ky Demo
            </CTAButton>
            <CTAButton href="/showcases/wildlyplay" variant="outline" size="lg">
              Xem Case Study
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Tinh nang"
            title="Tu Dong Hoa Content Marketing Toan Dien"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-2xl border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Nen tang ho tro"
            title="Ho Tro Tat Ca Kenh Social Pho Bien"
          />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="p-6 rounded-2xl bg-white border border-gray-200 text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{platform.name}</h3>
                <p className="text-gray-500 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ngung mat thoi gian copy-paste giua cac kenh
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            De AI lam phan nham chan. Ban tap trung vao y tuong va chien luoc noi dung.
          </p>
          <CTAButton href="/contact" variant="primary" size="lg">
            Bat Dau Ngay
          </CTAButton>
        </div>
      </section>
    </>
  );
}
