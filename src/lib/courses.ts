import type { Course } from "@/components/CourseCard";

export const courses: Course[] = [
  /* Cloud & Infrastructure Vertical */
  { id: "1", name: "AWS Solutions Architect (Professional)", duration: "12 Weeks", level: "Advanced", category: "Cloud Systems", description: "Design high-availability, fault-tolerant, and scalable systems on AWS. Master VPC, Multi-Account strategy, and Serverless architectures.", icon: "☁️", slug: "aws-solutions-architect" },
  { id: "2", name: "Microsoft Azure Hub Administration", duration: "12 Weeks", level: "Advanced", category: "Cloud Systems", description: "Implement, manage, and monitor identity, governance, storage, compute, and virtual networks in a Microsoft Azure environment.", icon: "🌐", slug: "microsoft-azure-administration" },
  { id: "3", name: "DevOps & SRE Engineering", duration: "10 Weeks", level: "Advanced", category: "DevOps", description: "Automate delivery pipelines with Jenkins, GitHub Actions, Docker, and Kubernetes. Master Terraform for Infrastructure as Code.", icon: "🔧", slug: "devops-sre-engineering" },

  /* Development & Engineering Vertical */
  { id: "4", name: "Next.js 15 & React Full-Stack Lead", duration: "16 Weeks", level: "Intermediate", category: "Modern Web", description: "Master the T3 stack with Next.js, TypeScript, and Prisma. Build enterprise-grade applications with advanced Server Components.", icon: "💻", slug: "nextjs-react-fullstack" },
  { id: "5", name: "Java Full-Stack (Spring Boot / Microservices)", duration: "16 Weeks", level: "Advanced", category: "Modern Web", description: "Master the backend with Java Spring Boot. Design Distributed Systems, Event-Driven Architectures, and RESTful APIs.", icon: "☕", slug: "java-fullstack-microservices" },
  { id: "6", name: "Python for Automation & Data", duration: "8 Weeks", level: "Beginner", category: "Data Science", description: "From core syntax to advanced scripting. Automate boring tasks and build a solid foundation for Data Engineering.", icon: "🐍", slug: "python-automation-data" },

  /* Data & Intelligence Vertical */
  { id: "7", name: "Data Science & MLOps Specialization", duration: "14 Weeks", level: "Intermediate", category: "Data Science", description: "Master Python for Data Science. Build, deploy, and scale machine learning models with MLFlow and Airflow.", icon: "📊", slug: "data-science-mlops" },
  { id: "8", name: "Power BI & Tableau Data Viz", duration: "6 Weeks", level: "Beginner", category: "Data Science", description: "Transform raw data into high-impact business insights using professional visualization tools and DAX querying.", icon: "📈", slug: "power-bi-tableau" },

  /* Security & Systems Vertical */
  { id: "9", name: "Cybersecurity & Ethical Hacking", duration: "12 Weeks", level: "Advanced", category: "Cyber Security", description: "Identify vulnerabilities, master penetration testing, and secure enterprise networks against modern threat vectors.", icon: "🛡️", slug: "cybersecurity-ethical-hacking" },
  { id: "10", name: "CISSP Professional Certification", duration: "10 Weeks", level: "Advanced", category: "Cyber Security", description: "Comprehensive preparation for the gold standard in information security certifications. Master the 8 CISSP domains.", icon: "⚔️", slug: "cissp-certification" },

  /* Emerging & Specialty Vertical */
  { id: "11", name: "Salesforce Admin & Dev Mastery", duration: "10 Weeks", level: "Intermediate", category: "Salesforce", description: "Customize Salesforce environments, master Apex coding, and build powerful business workflows for global enterprises.", icon: "☁️", slug: "salesforce-admin-dev" },
  { id: "12", name: "UI/UX Product Design (Figma)", duration: "8 Weeks", level: "Intermediate", category: "Modern Web", description: "Master digital product design. Learn user research, high-fidelity prototyping, and design system construction in Figma.", icon: "🎨", slug: "ui-ux-product-design" },
  { id: "13", name: "QA Automation (Selenium / Cypress)", duration: "10 Weeks", level: "Intermediate", category: "DevOps", description: "Engineered quality assurance. Automate browser testing and mobile validation with modern frameworks and CI integration.", icon: "🧪", slug: "qa-automation" },
  { id: "14", name: "Digital Marketing Growth Hacking", duration: "8 Weeks", level: "Beginner", category: "Marketing", description: "Master SEO, SEM, and performance marketing to scale digital products and drive high-intent conversion.", icon: "🚀", slug: "digital-marketing-growth" },
  { id: "15", name: "Generative AI & LLM Masterclass", duration: "12 Weeks", level: "Advanced", category: "Artificial Intelligence", description: "Architect next-gen AI solutions with LLMs, RAG, and AI Agents. Master prompt engineering and autonomous agent workflows.", icon: "🧠", slug: "generative-ai" },
];

export function getCourseLink(slug: string) {
  if (slug === "generative-ai") {
    return { to: "/generative-ai-course" as const };
  }
  return { to: "/courses/$slug" as const, params: { slug } };
}
