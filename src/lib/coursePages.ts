export interface CoursePage {
  slug: string;
  name: string;
  duration: string;
  level: string;
  category: string;
  description: string;
  icon: string;
  highlights: string[];
  outcomes: string[];
  audience: string[];
}

const defaultHighlights = (category: string) => [
  "Live instructor-led sessions with industrial mentors",
  "Hands-on project labs using real workspace environments",
  "Certification preparation and mock assessments",
  "24/7 mentor support and peer community access",
  "Lifetime access to recordings and course materials",
  "Placement assistance with 250+ hiring partners",
];

const defaultOutcomes = (name: string) => [
  `Build production-ready skills for ${name}`,
  "Complete capstone projects for your professional portfolio",
  "Pass industry certification mock exams with confidence",
  "Interview-ready with role-specific technical drills",
];

const defaultAudience = [
  "Fresh graduates entering the tech workforce",
  "Working professionals upskilling for senior roles",
  "Career switchers targeting high-demand verticals",
  "Enterprise teams seeking structured capability building",
];

function page(
  slug: string,
  name: string,
  duration: string,
  level: string,
  category: string,
  description: string,
  icon: string,
  extras?: Partial<Pick<CoursePage, "highlights" | "outcomes" | "audience">>,
): CoursePage {
  return {
    slug,
    name,
    duration,
    level,
    category,
    description,
    icon,
    highlights: extras?.highlights ?? defaultHighlights(category),
    outcomes: extras?.outcomes ?? defaultOutcomes(name),
    audience: extras?.audience ?? defaultAudience,
  };
}

export const coursePages: CoursePage[] = [
  page("generative-ai", "Generative AI & LLM Masterclass", "12 Weeks", "Advanced", "Artificial Intelligence", "Architect next-gen AI solutions with LLMs, RAG, and AI Agents. Master prompt engineering and autonomous agent workflows.", "🧠"),
  page("aws-devops-gen-ai", "AWS DevOps with Generative AI", "10 Weeks", "Advanced", "DevOps", "Master AWS DevOps pipelines and integrate Amazon Bedrock AI into enterprise delivery workflows. CI/CD, EKS, and Terraform.", "⚙️"),
  page("azure-devops-gen-ai", "Azure DevOps with Generative AI", "10 Weeks", "Advanced", "DevOps", "Build enterprise CI/CD pipelines on Azure DevOps with AKS, Bicep/Terraform, and Azure OpenAI integration.", "🔵"),
  page("cyber-security-course", "Cyber Security", "12 Weeks", "Advanced", "Cyber Security", "Master network security, ethical hacking, cloud security, SOC analysis, and CompTIA Security+ / CEH exam preparation.", "🔐"),
  page("azure-data-engineer", "Azure Data Engineer", "12 Weeks", "Advanced", "Data Science", "Master Azure Data Factory, Synapse Analytics, Databricks, and Delta Lake. DP-203 certification preparation included.", "🗄️"),
  page("pmp-certification", "PMP Certification", "8 Weeks", "Intermediate", "Project Management", "35 PMI contact hours. Master predictive and agile project management frameworks and pass the PMP exam first time.", "📋"),
  page("scrum-master", "Scrum Master Certification", "6 Weeks", "Beginner", "Project Management", "Live Sprint simulations, SAFe scaling frameworks, and full CSM / PSM I certification preparation.", "🏃"),
  page("digital-marketing-ai-course", "Digital Marketing with AI", "8 Weeks", "Beginner", "Marketing", "Master SEO, Google Ads, Meta, email automation, and AI tools like ChatGPT and Jasper. Google & Meta cert prep included.", "📣"),
  page("salesforce-marketing-cloud", "Salesforce Marketing Cloud", "10 Weeks", "Intermediate", "Salesforce", "Email Studio, Journey Builder, AMPscript, Automation Studio — with Email Specialist certification preparation.", "📧"),
];

export const coursePagesBySlug = Object.fromEntries(
  coursePages.map((c) => [c.slug, c]),
) as Record<string, CoursePage>;

export function getRelatedCourses(slug: string, limit = 4): CoursePage[] {
  const current = coursePagesBySlug[slug];
  if (!current) return coursePages.slice(0, limit);
  return coursePages
    .filter((c) => c.slug !== slug && c.category === current.category)
    .slice(0, limit);
}
