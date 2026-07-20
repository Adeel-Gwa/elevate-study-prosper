import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, fourSkills } from "@/components/site/CoursePage";

export const Route = createFileRoute("/languagecert")({
  head: () => ({ meta: [{ title: "LanguageCert — ML Global" }, { name: "description", content: "UKVI approved LanguageCert SELT preparation for study, work and settlement." }] }),
  component: () => (
    <CoursePage
      tag="Course"
      title="LanguageCert SELT"
      desc="UKVI-approved Secure English Language Test coaching for study, work and settlement visas."
      modules={fourSkills}
      features={[
        "UKVI SELT B1 / B2 / C1 prep",
        "Written & spoken exam training",
        "Certified LanguageCert trainers",
        "Booking assistance & test-day tips",
        "Free trial assessment",
        "Fast-track 4-week program",
        "Small dedicated batches",
        "Full sample-paper library",
      ]}
    />
  ),
});
