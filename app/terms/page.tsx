import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import paragraphs from "@/content/terms.json";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return <LegalPage title="End user license agreement" paragraphs={paragraphs} />;
}
