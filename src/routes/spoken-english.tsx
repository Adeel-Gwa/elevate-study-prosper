import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, fourSkills } from "@/components/site/CoursePage";

export const Route = createFileRoute("/spoken-english")({
  head: () => ({ meta: [{ title: "Spoken English — ML Global" }, { name: "description", content: "Confident fluency, accent training and public speaking with certified trainers." }] }),
  component: () => (
    <CoursePage
      tag="Course"
      title="Spoken English"
      desc="From hesitant to fluent. Build real-world conversation, accent clarity and interview-ready confidence."
      modules={fourSkills}
      features={[
        "Beginner to advanced levels",
        "Daily conversation practice",
        "Accent neutralization drills",
        "Interview & presentation training",
        "Grammar & vocabulary labs",
        "Group discussions & debates",
        "Personality development",
        "Certificate on completion",
      ]}
    />
  ),
});
