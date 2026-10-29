import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/agent-http";

export default function robots(): MetadataRoute.Robots {
  // Preserve the site's existing default (no robots restrictions). This adds no
  // licence or consent for training; that decision is outside this interface.
  return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: `${SITE_URL}/sitemap.xml` };
}
