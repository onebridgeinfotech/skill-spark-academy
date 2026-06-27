import { createFileRoute } from "@tanstack/react-router";
import { CourseTemplatePage, type CourseTemplateData } from "@/components/CourseTemplatePage";
import { Sparkles, Layers, Headphones, Award, Users, Database, BookOpen, MessageSquare, Cloud, Shield, GitBranch, BarChart3 } from "lucide-react";

const data: CourseTemplateData = {
  name: "AWS DevOps with Generative AI",
  tagline: "10-Week Live Programme · UK Cohorts",
  duration: "10 Weeks",
  hours: "40+ Hours",
  description: "Master AWS DevOps engineering and integrate Generative AI into your delivery pipelines. Build production-grade CI/CD systems, container orchestration, and AI-powered automation on AWS.",

  overview: [
    "This programme combines core AWS DevOps engineering with hands-on Generative AI integration, preparing you for senior DevOps and AI engineering roles in UK enterprises.",
    "You'll build real CI/CD pipelines using CodePipeline and GitHub Actions, master EKS container orchestration, implement Terraform IaC, and integrate AWS Bedrock into automated DevOps workflows. Every week combines live instruction with enterprise project labs reviewed by industry practitioners.",
  ],
  overviewStats: [
    { label: "Duration",  value: "10 Weeks" },
    { label: "Format",    value: "Live + Labs" },
    { label: "Cohort",    value: "Limited Seats" },
  ],

  audience: [
    "DevOps engineers looking to integrate AI into their pipelines.",
    "Cloud engineers seeking AWS DevOps Professional certification.",
    "Software developers moving into infrastructure and operations roles.",
    "IT professionals upskilling for senior cloud engineering positions.",
    "Career switchers targeting high-demand AWS DevOps roles.",
    "Enterprise teams building AI-enhanced delivery capabilities.",
  ],

  prerequisites: [
    "Basic understanding of Linux command line and scripting.",
    "Familiarity with cloud concepts (AWS or any provider) is helpful but not required.",
    "No prior DevOps or AI experience needed — we start from the ground up.",
  ],

  curriculum: [
    { week: 1,  focus: "AWS Foundations & DevOps Principles",        deliverables: "Account setup, IAM, core services overview",                    tools: "AWS Console, CLI",       project: "AWS Environment Setup"           },
    { week: 2,  focus: "CI/CD with CodePipeline & GitHub Actions",   deliverables: "Pipeline design and automated build workflows",                  tools: "CodePipeline, GitHub",   project: "Automated Build Pipeline"        },
    { week: 3,  focus: "Containerisation with Docker & ECR",          deliverables: "Docker image builds, ECR registry management",                  tools: "Docker, ECR",            project: "Containerised App Deployment"    },
    { week: 4,  focus: "Container Orchestration with ECS & EKS",      deliverables: "Cluster setup, service deployment, scaling",                    tools: "ECS, EKS, Helm",         project: "Kubernetes Cluster Build"        },
    { week: 5,  focus: "Infrastructure as Code with Terraform",       deliverables: "Modular Terraform configs and state management",                 tools: "Terraform, CDK",         project: "IaC Infrastructure Stack"        },
    { week: 6,  focus: "Monitoring & Observability",                  deliverables: "CloudWatch dashboards, alarms, and X-Ray tracing",               tools: "CloudWatch, X-Ray",      project: "Observability Platform Build"    },
    { week: 7,  focus: "AWS Bedrock & Generative AI Integration",     deliverables: "Bedrock model calls, prompt engineering, agent setup",           tools: "AWS Bedrock, LangChain", project: "AI-Powered Automation Prototype" },
    { week: 8,  focus: "Security, Compliance & IAM Hardening",        deliverables: "Security Hub findings, GuardDuty rules, IAM least-privilege",    tools: "GuardDuty, Security Hub",project: "Security Compliance Audit"       },
    { week: 9,  focus: "Industry Project Lab",                        deliverables: "End-to-end DevOps pipeline with AI integration",                 tools: "Full AWS Stack",         project: "Enterprise Pipeline Project"     },
    { week: 10, focus: "Capstone Delivery & Certification Prep",      deliverables: "Portfolio submission, mock exam, interview readiness",            tools: "Exam Kit, Portfolio",    project: "AWS DevOps Capstone"             },
  ],

  certificationTitle: "AWS DevOps Engineer Professional",
  certificationDesc: "This programme prepares you for the AWS Certified DevOps Engineer – Professional exam. Upon completion you receive an Ismart Skills institutional certificate recognised by 250+ UK hiring partners, alongside full mock exam preparation and interview coaching.",
  certificationStats: [
    { label: "Mock Exams",     value: "Included"     },
    { label: "Interview Prep", value: "Included"     },
    { label: "Certificate",    value: "Digital + PDF" },
  ],

  features: [
    { icon: Sparkles,  title: "Live AWS Lab Environment",      desc: "Hands-on labs run in real AWS accounts — not simulations. Build production-grade infrastructure from day one." },
    { icon: Layers,    title: "Generative AI Integration",     desc: "Learn to use AWS Bedrock and LangChain to automate DevOps workflows with enterprise AI capabilities." },
    { icon: GitBranch, title: "CI/CD Pipeline Mastery",        desc: "Build and deploy complete CI/CD pipelines using CodePipeline, GitHub Actions, and modern DevOps toolchains." },
    { icon: Award,     title: "Certification Preparation",     desc: "Structured preparation for the AWS DevOps Engineer Professional certification with mock exams included." },
    { icon: Headphones,title: "24/7 Mentor Support",           desc: "Get help any time on lab blockers, architecture decisions, and implementation challenges from senior engineers." },
    { icon: Users,     title: "Placement Assistance",          desc: "Access our network of 250+ UK hiring partners with dedicated job search support and portfolio review." },
  ],

  batches: [
    { title: "Weekday Morning",    start: "Monday",   days: "Mon–Fri", time: "9:00 AM – 10:30 AM GMT" },
    { title: "Weekend Intensive",  start: "Saturday", days: "Sat–Sun", time: "10:00 AM – 1:00 PM GMT"  },
    { title: "Evening Fast-Track", start: "Tuesday",  days: "Tue–Thu", time: "7:00 PM – 9:00 PM GMT"  },
  ],

  testimonials: [
    { stars: 5, quote: "The AWS Bedrock labs were transformational — I shipped an AI-powered deployment pipeline to production within weeks of completing the course.", author: "James R.", role: "Senior DevOps Engineer" },
    { stars: 5, quote: "Best investment I made. The EKS and Terraform modules alone were worth it. Got promoted 3 months after completing.", author: "Priya S.", role: "Cloud Infrastructure Lead" },
    { stars: 5, quote: "The combination of DevOps fundamentals and GenAI integration made me the go-to person on my team for AI-driven automation.", author: "Tom K.", role: "Platform Engineer" },
    { stars: 5, quote: "Mock exams were spot-on. Passed the AWS DevOps Professional on my first attempt with 85% score.", author: "Aisha M.", role: "AWS Solutions Architect" },
    { stars: 5, quote: "Mentors answered questions at midnight when I was stuck on a Kubernetes config issue. That level of support is rare.", author: "Daniel O.", role: "DevOps Specialist" },
  ],

  articles: [
    { icon: BookOpen,      badge: "Tutorial",     badgeColor: "#e8f0fc",              badgeText: "#004890", title: "AWS DevOps Pipeline Setup Guide",         desc: "Step-by-step guide to building your first enterprise CI/CD pipeline on AWS.",           readTime: "20 min" },
    { icon: MessageSquare, badge: "Interview",    badgeColor: "rgba(255,158,13,0.12)", badgeText: "#b86e00", title: "Top AWS DevOps Interview Questions",       desc: "The most common technical interview questions for AWS DevOps Engineer roles in the UK.", readTime: "25 min" },
    { icon: Award,         badge: "Certification",badgeColor: "rgba(52,211,153,0.12)", badgeText: "#065f46", title: "AWS DevOps Professional Exam Guide",       desc: "Exam domains, weightings, prep strategy, and resources for first-attempt success.",      readTime: "18 min" },
  ],

  faqs: [
    { q: "How long is the AWS DevOps with Gen AI course?",       a: "The programme runs for 10 weeks with live classes, enterprise labs, and project reviews every week." },
    { q: "Do I need prior AWS experience to join?",              a: "No. We start from AWS fundamentals and progressively build to advanced DevOps and AI integration topics." },
    { q: "Is this course available online?",                     a: "Yes. You can join live online from anywhere in the UK. All sessions are recorded for flexible replay." },
    { q: "Will this course help me pass the AWS certification?", a: "Yes. The programme includes dedicated exam prep, mock tests, and exam strategy sessions for the AWS DevOps Engineer Professional certification." },
  ],

  relatedCourses: [
    { title: "Azure DevOps with Gen AI",     desc: "Master Azure DevOps pipelines, AKS, and Azure OpenAI for enterprise delivery automation.",      icon: Cloud,    slug: "azure-devops-gen-ai"      },
    { title: "AWS Solutions Architect",      desc: "Design high-availability, fault-tolerant systems on AWS. Master VPC, serverless and multi-account strategy.", icon: Shield,   slug: "aws-solutions-architect"  },
    { title: "DevOps & SRE Engineering",     desc: "Automate delivery pipelines with Jenkins, Docker, and Kubernetes. Master Terraform for IaC.",     icon: GitBranch,slug: "devops-sre-engineering"    },
    { title: "Generative AI Masterclass",    desc: "Architect next-gen AI solutions with LLMs, RAG, and AI Agents. Master prompt engineering.",      icon: Sparkles, slug: "generative-ai"            },
    { title: "Azure Data Engineer",          desc: "Build enterprise data pipelines on Azure using Data Factory, Synapse, and Databricks.",           icon: Database, slug: "azure-data-engineer"      },
    { title: "Data Science & MLOps",         desc: "Build, deploy and scale ML models with MLFlow and Airflow. Python-first approach.",               icon: BarChart3,slug: "data-science-mlops"        },
  ],
};

export const Route = createFileRoute("/aws-devops-gen-ai")({
  head: () => ({
    meta: [
      { title: "AWS DevOps with Generative AI — Live Training UK | Ismart Skills" },
      { name: "description", content: "10-week live AWS DevOps with Generative AI training programme for UK professionals. CI/CD, EKS, Terraform, AWS Bedrock — hands-on enterprise labs and certification prep." },
    ],
  }),
  component: () => <CourseTemplatePage data={data} />,
});
