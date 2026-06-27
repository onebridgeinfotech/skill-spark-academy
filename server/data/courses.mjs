export const COURSES = [
  { slug: "generative-ai", name: "Generative AI & LLM Masterclass", category: "Artificial Intelligence", duration: "12 Weeks", level: "Advanced" },
  { slug: "aws-devops-gen-ai", name: "AWS DevOps with Generative AI", category: "DevOps", duration: "10 Weeks", level: "Advanced" },
  { slug: "azure-devops-gen-ai", name: "Azure DevOps with Generative AI", category: "DevOps", duration: "10 Weeks", level: "Advanced" },
  { slug: "cyber-security-course", name: "Cyber Security", category: "Cyber Security", duration: "12 Weeks", level: "Advanced" },
  { slug: "azure-data-engineer", name: "Azure Data Engineer", category: "Data Science", duration: "12 Weeks", level: "Advanced" },
  { slug: "pmp-certification", name: "PMP Certification", category: "Project Management", duration: "8 Weeks", level: "Intermediate" },
  { slug: "scrum-master", name: "Scrum Master Certification", category: "Project Management", duration: "6 Weeks", level: "Beginner" },
  { slug: "digital-marketing-ai-course", name: "Digital Marketing with AI", category: "Marketing", duration: "8 Weeks", level: "Beginner" },
  { slug: "salesforce-marketing-cloud", name: "Salesforce Marketing Cloud", category: "Salesforce", duration: "10 Weeks", level: "Intermediate" },
];

const bySlug = new Map(COURSES.map((course) => [course.slug, course]));

export function getCourseBySlug(slug) {
  if (!slug) return null;
  return bySlug.get(slug) || null;
}

export function getCourseList() {
  return COURSES;
}

export function resolveCourseFields(courseSlug, courseName, programme) {
  const matched = getCourseBySlug(courseSlug);
  if (matched) {
    return {
      course_slug: matched.slug,
      course_name: matched.name,
      course_category: matched.category,
      programme: programme || matched.name,
    };
  }

  return {
    course_slug: courseSlug || null,
    course_name: courseName || programme || null,
    course_category: null,
    programme: programme || courseName || null,
  };
}
