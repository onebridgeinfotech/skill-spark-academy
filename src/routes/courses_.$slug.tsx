import { createFileRoute, redirect } from "@tanstack/react-router";
import { CourseDetailPage } from "@/components/CourseDetailPage";
import { coursePagesBySlug } from "@/lib/coursePages";

export const Route = createFileRoute("/courses_/$slug")({
  beforeLoad: ({ params }) => {
    if (params.slug === "generative-ai") {
      throw redirect({ to: "/generative-ai-course" });
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
            { title: `${course.name} — EslandIT Trainings` },
            { name: "description", content: course.description },
          ]
        : [{ title: "Course — EslandIT Trainings" }],
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
