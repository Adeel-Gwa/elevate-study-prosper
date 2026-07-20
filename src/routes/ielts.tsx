import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, fourSkills } from "@/components/site/CoursePage";

export const Route = createFileRoute("/ielts")({
  head: () => ({ meta: [{ title: "IELTS Preparation — ML Global" }, { name: "description", content: "IELTS Academic & General preparation with certified experts, mock tests and band-guarantee coaching." }] }),
  component: () => (
    <CoursePage
      tag="Course"
      title="IELTS Preparation"
      desc="Academic & General Training. Achieve band 7+ with examiner-approved strategies, weekly mock tests and personalized feedback."
      modules={fourSkills}
      features={[
        "8-week accelerated bootcamp",
        "Weekly full-length mock tests",
        "1-on-1 speaking sessions",
        "Detailed writing evaluation",
        "Band 7+ guarantee coaching",
        "Free study materials & app access",
        "Small batch sizes (max 12 students)",
        "Certified British Council trained faculty",
      ]}
    />
  ),
});
