import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://syncflow.vn";

  const pages = [
    "",
    "/services",
    "/services/ecommerce",
    "/services/social-media",
    "/services/operations",
    "/services/ai-assistant",
    "/pricing",
    "/showcases",
    "/showcases/snapshop",
    "/showcases/wildlyplay",
    "/showcases/koban",
    "/blog",
    "/blog/ai-tu-dong-hoa-cho-doanh-nghiep-nho",
    "/contact",
    "/faq",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" : "monthly",
    priority: page === "" ? 1 : page.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
