import { createFileRoute } from "@tanstack/react-router";
import { CoursePage, fourSkills } from "@/components/site/CoursePage";

export const Route = createFileRoute("/pte")({
  head: () => ({ meta: [{ title: "PTE Academic — ML Global" }, { name: "description", content: "PTE Academic preparation with AI-powered mock tests and score-boosting strategies." }] }),
  component: () => (
    <CoursePage
      tag="Course"
      title="PTE Academic"
      desc="AI-graded mock tests, score prediction and computer-based drills to master every PTE task type."
      modules={fourSkills}
      features={[
        "Full AI-mock test platform",
        "Task-wise scoring analysis",
        "PR-points strategy sessions",
        "Score 79+ specialized coaching",
        "Free repeat till you score",
        "Recorded revision library",
        "Real Pearson-format practice",
        "Australia, NZ & UK visa guidance",
      ]}
    />
  ),
});
