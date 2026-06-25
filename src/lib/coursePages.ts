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
  page("aws-solutions-architect", "AWS Solutions Architect (Professional)", "12 Weeks", "Advanced", "Cloud Systems", "Design high-availability, fault-tolerant, and scalable systems on AWS. Master VPC, Multi-Account strategy, and Serverless architectures.", "☁️"),
  page("microsoft-azure-administration", "Microsoft Azure Hub Administration", "12 Weeks", "Advanced", "Cloud Systems", "Implement, manage, and monitor identity, governance, storage, compute, and virtual networks in a Microsoft Azure environment.", "🌐"),
  page("devops-sre-engineering", "DevOps & SRE Engineering", "10 Weeks", "Advanced", "DevOps", "Automate delivery pipelines with Jenkins, GitHub Actions, Docker, and Kubernetes. Master Terraform for Infrastructure as Code.", "🔧"),
  page("nextjs-react-fullstack", "Next.js 15 & React Full-Stack Lead", "16 Weeks", "Intermediate", "Modern Web", "Master the T3 stack with Next.js, TypeScript, and Prisma. Build enterprise-grade applications with advanced Server Components.", "💻"),
  page("java-fullstack-microservices", "Java Full-Stack (Spring Boot / Microservices)", "16 Weeks", "Advanced", "Modern Web", "Master the backend with Java Spring Boot. Design Distributed Systems, Event-Driven Architectures, and RESTful APIs.", "☕"),
  page("python-automation-data", "Python for Automation & Data", "8 Weeks", "Beginner", "Data Science", "From core syntax to advanced scripting. Automate boring tasks and build a solid foundation for Data Engineering.", "🐍"),
  page("data-science-mlops", "Data Science & MLOps Specialization", "14 Weeks", "Intermediate", "Data Science", "Master Python for Data Science. Build, deploy, and scale machine learning models with MLFlow and Airflow.", "📊"),
  page("power-bi-tableau", "Power BI & Tableau Data Viz", "6 Weeks", "Beginner", "Data Science", "Transform raw data into high-impact business insights using professional visualization tools and DAX querying.", "📈"),
  page("cybersecurity-ethical-hacking", "Cybersecurity & Ethical Hacking", "12 Weeks", "Advanced", "Cyber Security", "Identify vulnerabilities, master penetration testing, and secure enterprise networks against modern threat vectors.", "🛡️"),
  page("cissp-certification", "CISSP Professional Certification", "10 Weeks", "Advanced", "Cyber Security", "Comprehensive preparation for the gold standard in information security certifications. Master the 8 CISSP domains.", "⚔️"),
  page("salesforce-admin-dev", "Salesforce Admin & Dev Mastery", "10 Weeks", "Intermediate", "Salesforce", "Customize Salesforce environments, master Apex coding, and build powerful business workflows for global enterprises.", "☁️"),
  page("ui-ux-product-design", "UI/UX Product Design (Figma)", "8 Weeks", "Intermediate", "Modern Web", "Master digital product design. Learn user research, high-fidelity prototyping, and design system construction in Figma.", "🎨"),
  page("qa-automation", "QA Automation (Selenium / Cypress)", "10 Weeks", "Intermediate", "DevOps", "Engineered quality assurance. Automate browser testing and mobile validation with modern frameworks and CI integration.", "🧪"),
  page("digital-marketing-growth", "Digital Marketing Growth Hacking", "8 Weeks", "Beginner", "Marketing", "Master SEO, SEM, and performance marketing to scale digital products and drive high-intent conversion.", "🚀"),
  page("generative-ai", "Generative AI & LLM Masterclass", "12 Weeks", "Advanced", "Artificial Intelligence", "Architect next-gen AI solutions with LLMs, RAG, and AI Agents. Master prompt engineering and autonomous agent workflows.", "🧠"),
  page("oracle-eloqua", "Oracle Eloqua Marketing", "10 Weeks", "Intermediate", "Marketing", "Oracle Eloqua Marketing Automation training with projects and certification support.", "🌐"),
  page("salesforce-admin", "Salesforce Admin", "10 Weeks", "Intermediate", "Salesforce", "Salesforce Admin training with projects and certification support.", "☁️"),
  page("salesforce-data-cloud", "Salesforce Data Cloud", "10 Weeks", "Advanced", "Salesforce", "Salesforce Data Cloud training with projects and certification support.", "☁️"),
  page("salesforce-marketing", "Salesforce Marketing Cloud", "10 Weeks", "Intermediate", "Salesforce", "Salesforce Marketing Cloud training with projects and certification support.", "🎯"),
  page("digital-marketing-ai", "Digital Marketing with AI", "8 Weeks", "Intermediate", "Marketing", "Digital Marketing with AI training with projects and certification support.", "🚀"),
  page("salesforce-pardot", "Salesforce Pardot", "10 Weeks", "Intermediate", "Salesforce", "Salesforce Pardot training with projects and certification support.", "☁️"),
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
