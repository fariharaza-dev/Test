import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import paragraphs from "@/content/privacy-policy.json";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy Policy and Cookie Policy" paragraphs={paragraphs} />;
}
