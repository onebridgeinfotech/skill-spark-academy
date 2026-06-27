import { createFileRoute, redirect } from "@tanstack/react-router";
import { CourseDetailPage } from "@/components/CourseDetailPage";
import { coursePagesBySlug } from "@/lib/coursePages";

export const Route = createFileRoute("/courses_/$slug")({
  beforeLoad: ({ params }) => {
    const templateRoutes: Record<string, string> = {
      "generative-ai":               "/generative-ai-course",
      "aws-devops-gen-ai":           "/aws-devops-gen-ai",
      "azure-devops-gen-ai":         "/azure-devops-gen-ai",
      "cyber-security-course":       "/cyber-security-course",
      "azure-data-engineer":         "/azure-data-engineer",
      "pmp-certification":           "/pmp-certification",
      "scrum-master":                "/scrum-master",
      "digital-marketing-ai-course": "/digital-marketing-ai-course",
      "salesforce-marketing-cloud":  "/salesforce-marketing-cloud",
    };
    if (templateRoutes[params.slug]) {
      throw redirect({ to: templateRoutes[params.slug] as "/" });
    }
    if (!coursePagesBySlug[params.slug]) {
      throw redirect({ to: "/courses" });
    }
  },
  head: ({ params }) => {
    const course = coursePagesBySlug[params.slug];
    return {
      meta: course
        ? [
            { title: `${course.name} — Ismart Skills` },
            { name: "description", content: course.description },
          ]
        : [{ title: "Course — Ismart Skills" }],
    };
  },
  component: CourseSlugPage,
});

function CourseSlugPage() {
  const { slug } = Route.useParams();
  const course = coursePagesBySlug[slug];
  if (!course) return null;
  return <CourseDetailPage course={course} />;
}
