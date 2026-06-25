import type { Course } from "@/components/CourseCard";

export const courses: Course[] = [
  { id: "1",  name: "Generative AI & LLM Masterclass",   duration: "12 Weeks", level: "Advanced",     category: "Artificial Intelligence", description: "Architect next-gen AI solutions with LLMs, RAG, and AI Agents. Master prompt engineering and autonomous agent workflows.", icon: "🧠", slug: "generative-ai" },
  { id: "2",  name: "AWS DevOps with Generative AI",     duration: "10 Weeks", level: "Advanced",     category: "DevOps",                  description: "Master AWS DevOps pipelines and integrate Amazon Bedrock AI into enterprise delivery workflows. CI/CD, EKS, and Terraform.", icon: "⚙️", slug: "aws-devops-gen-ai" },
  { id: "3",  name: "Azure DevOps with Generative AI",   duration: "10 Weeks", level: "Advanced",     category: "DevOps",                  description: "Build enterprise CI/CD pipelines on Azure DevOps with AKS, Bicep/Terraform, and Azure OpenAI integration.", icon: "🔵", slug: "azure-devops-gen-ai" },
  { id: "4",  name: "Cyber Security",                    duration: "12 Weeks", level: "Advanced",     category: "Cyber Security",          description: "Master network security, ethical hacking, cloud security, SOC analysis, and CompTIA Security+ / CEH exam preparation.", icon: "🔐", slug: "cyber-security-course" },
  { id: "5",  name: "Azure Data Engineer",               duration: "12 Weeks", level: "Advanced",     category: "Data Science",            description: "Master Azure Data Factory, Synapse Analytics, Databricks, and Delta Lake. DP-203 certification preparation included.", icon: "🗄️", slug: "azure-data-engineer" },
  { id: "6",  name: "PMP Certification",                 duration: "8 Weeks",  level: "Intermediate", category: "Project Management",      description: "35 PMI contact hours. Master predictive and agile project management frameworks and pass the PMP exam first time.", icon: "📋", slug: "pmp-certification" },
  { id: "7",  name: "Scrum Master Certification",        duration: "6 Weeks",  level: "Beginner",     category: "Project Management",      description: "Live Sprint simulations, SAFe scaling frameworks, and full CSM / PSM I certification preparation.", icon: "🏃", slug: "scrum-master" },
  { id: "8",  name: "Digital Marketing with AI",         duration: "8 Weeks",  level: "Beginner",     category: "Marketing",               description: "Master SEO, Google Ads, Meta, email automation, and AI tools like ChatGPT and Jasper. Google & Meta cert prep included.", icon: "📣", slug: "digital-marketing-ai-course" },
  { id: "9",  name: "Salesforce Marketing Cloud",        duration: "10 Weeks", level: "Intermediate", category: "Salesforce",              description: "Email Studio, Journey Builder, AMPscript, Automation Studio — with Email Specialist certification preparation.", icon: "📧", slug: "salesforce-marketing-cloud" },
];

const templateSlugs = new Set([
  "generative-ai",
  "aws-devops-gen-ai",
  "azure-devops-gen-ai",
  "cyber-security-course",
  "azure-data-engineer",
  "pmp-certification",
  "scrum-master",
  "digital-marketing-ai-course",
  "salesforce-marketing-cloud",
]);

export function getCourseLink(slug: string) {
  if (templateSlugs.has(slug)) {
    const routes: Record<string, string> = {
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
    return { to: routes[slug] as "/" };
  }
  return { to: "/courses/$slug" as const, params: { slug } };
}
