import { createFileRoute } from "@tanstack/react-router";
import { CourseTemplatePage, type CourseTemplateData } from "@/components/CourseTemplatePage";
import { Sparkles, Layers, Headphones, Award, Users, Database, BookOpen, MessageSquare, Cloud, Shield, GitBranch, BarChart3 } from "lucide-react";

const data: CourseTemplateData = {
  name: "Azure DevOps with Generative AI",
  tagline: "10-Week Live Programme · UK Cohorts",
  duration: "10 Weeks",
  hours: "40+ Hours",
  description: "Master Microsoft Azure DevOps and integrate Azure OpenAI into your delivery pipelines. Build enterprise-grade CI/CD systems, AKS orchestration, and AI-powered automation on the Azure platform.",

  overview: [
    "This programme combines core Azure DevOps engineering with practical Azure OpenAI integration, preparing you for senior cloud engineering and AI-enabled DevOps roles across UK enterprise environments.",
    "You'll build real Azure Pipelines, manage Azure Repos, deploy containerised apps to AKS, implement Bicep and Terraform IaC, and integrate Azure OpenAI into automated workflows. Every week combines live instructor delivery with hands-on enterprise project labs.",
  ],
  overviewStats: [
    { label: "Duration",  value: "10 Weeks" },
    { label: "Format",    value: "Live + Labs" },
    { label: "Cohort",    value: "Limited Seats" },
  ],

  audience: [
    "DevOps and platform engineers working in Microsoft Azure environments.",
    "Azure administrators seeking to move into DevOps and pipeline automation roles.",
    "Software developers building and deploying applications on Azure.",
    "IT professionals targeting the AZ-400 DevOps Engineer Expert certification.",
    "Career switchers moving into Azure cloud and DevOps engineering.",
    "Enterprise teams modernising their delivery workflows with Azure and AI.",
  ],

  prerequisites: [
    "Basic knowledge of cloud concepts or any cloud provider (Azure, AWS, GCP).",
    "Familiarity with scripting (PowerShell or Bash) is helpful but not required.",
    "No prior Azure DevOps or AI experience needed — the programme begins at the fundamentals.",
  ],

  curriculum: [
    { week: 1,  focus: "Azure DevOps Overview & Boards",             deliverables: "Organisation setup, projects, backlogs, and sprint planning",    tools: "Azure DevOps Boards",     project: "DevOps Organisation Setup"       },
    { week: 2,  focus: "Azure Repos & Git Branching Strategies",     deliverables: "Branch policies, PRs, and code review workflows",                 tools: "Azure Repos, Git",        project: "Branching Strategy Design"       },
    { week: 3,  focus: "Azure Pipelines — CI Build Automation",      deliverables: "YAML pipeline authoring, triggers, and artefact management",      tools: "Azure Pipelines",         project: "CI Pipeline Automation"          },
    { week: 4,  focus: "Azure Pipelines — CD & Release Strategies",  deliverables: "Deployment stages, approvals, and blue/green deployments",        tools: "Azure Pipelines, ACR",    project: "CD Release Pipeline Build"       },
    { week: 5,  focus: "Containers with ACR & AKS",                  deliverables: "Docker builds, ACR push, AKS cluster management",                 tools: "Docker, AKS, Helm",       project: "AKS Application Deployment"      },
    { week: 6,  focus: "Infrastructure as Code with Bicep & Terraform",deliverables: "Modular Bicep templates and Terraform state management",         tools: "Bicep, Terraform",        project: "IaC Infrastructure Stack"        },
    { week: 7,  focus: "Azure OpenAI Service Integration",            deliverables: "API setup, prompt engineering, RAG pipeline basics",              tools: "Azure OpenAI, LangChain", project: "AI-Powered Workflow Prototype"    },
    { week: 8,  focus: "Monitoring with Azure Monitor & App Insights",deliverables: "Dashboards, alerts, log queries, and distributed tracing",       tools: "Azure Monitor, KQL",      project: "Observability Dashboard Build"   },
    { week: 9,  focus: "Industry Project Lab",                        deliverables: "Full Azure DevOps pipeline with AI integration",                  tools: "Full Azure Stack",        project: "Enterprise DevOps Project"       },
    { week: 10, focus: "Capstone Delivery & AZ-400 Exam Prep",        deliverables: "Portfolio submission, mock exam, and interview coaching",          tools: "Exam Kit, Portfolio",     project: "Azure DevOps Capstone"           },
  ],

  certificationTitle: "AZ-400 DevOps Engineer Expert",
  certificationDesc: "This programme prepares you for the Microsoft Certified: DevOps Engineer Expert (AZ-400) exam. Upon completion you receive an Ismart Skills institutional certificate recognised by 250+ UK hiring partners, alongside full mock exam preparation and technical interview coaching.",
  certificationStats: [
    { label: "Mock Exams",     value: "Included"     },
    { label: "Interview Prep", value: "Included"     },
    { label: "Certificate",    value: "Digital + PDF" },
  ],

  features: [
    { icon: Cloud,     title: "Live Azure Lab Environment",      desc: "Hands-on labs run in real Azure subscriptions — build enterprise-grade pipelines and AKS clusters from day one." },
    { icon: Sparkles,  title: "Azure OpenAI Integration",        desc: "Learn to use Azure OpenAI and LangChain to build AI-enhanced DevOps automation and intelligent delivery workflows." },
    { icon: GitBranch, title: "End-to-End Pipeline Mastery",     desc: "Build complete CI/CD pipelines using Azure Pipelines YAML, with container deployments to AKS and blue/green strategies." },
    { icon: Award,     title: "AZ-400 Certification Prep",       desc: "Structured preparation for the Microsoft DevOps Engineer Expert exam with mock tests and a dedicated exam strategy session." },
    { icon: Headphones,title: "24/7 Mentor Support",             desc: "Get help any time on lab blockers, Kubernetes configs, and pipeline design from senior Azure engineers." },
    { icon: Users,     title: "Career Placement Support",        desc: "Access our 250+ UK hiring partner network with tailored CV review, LinkedIn optimisation, and interview preparation." },
  ],

  batches: [
    { title: "Weekday Morning",    start: "Monday",   days: "Mon–Fri", time: "9:00 AM – 10:30 AM GMT" },
    { title: "Weekend Intensive",  start: "Saturday", days: "Sat–Sun", time: "10:00 AM – 1:00 PM GMT"  },
    { title: "Evening Fast-Track", start: "Tuesday",  days: "Tue–Thu", time: "7:00 PM – 9:00 PM GMT"  },
  ],

  testimonials: [
    { stars: 5, quote: "The AKS deployment labs were excellent. I went from zero Kubernetes experience to running production clusters for my employer within the 10 weeks.", author: "Sophie L.", role: "Azure Platform Engineer" },
    { stars: 5, quote: "The Azure OpenAI integration module was ahead of anything I'd seen elsewhere. That knowledge alone got me a promotion.", author: "Raj P.", role: "DevOps Team Lead" },
    { stars: 5, quote: "YAML pipeline authoring felt complex at first but the mentors broke it down brilliantly. I now own our entire CI/CD estate.", author: "Charlotte W.", role: "Release Engineer" },
    { stars: 5, quote: "Passed AZ-400 on the first attempt. The mock exams in week 10 covered every domain that appeared in the actual exam.", author: "Omar A.", role: "Cloud Solutions Architect" },
    { stars: 5, quote: "Evening cohort worked perfectly around my job. Full recordings meant I never missed content even when running late.", author: "Elena B.", role: "Senior Software Engineer" },
  ],

  articles: [
    { icon: BookOpen,      badge: "Tutorial",     badgeColor: "#e8f0fc",              badgeText: "#004890", title: "Azure Pipelines YAML Quick-Start",          desc: "Build your first multi-stage Azure Pipeline from scratch with real YAML examples.",       readTime: "20 min" },
    { icon: MessageSquare, badge: "Interview",    badgeColor: "rgba(255,158,13,0.12)", badgeText: "#b86e00", title: "Top Azure DevOps Interview Questions 2025",   desc: "The most common technical questions asked in Azure DevOps Engineer interviews in the UK.", readTime: "25 min" },
    { icon: Award,         badge: "Certification",badgeColor: "rgba(52,211,153,0.12)", badgeText: "#065f46", title: "AZ-400 Exam Guide: Pass First Time",          desc: "Domain breakdown, study plan, and key resources to pass the AZ-400 on your first attempt.", readTime: "18 min" },
  ],

  faqs: [
    { q: "Do I need existing Azure knowledge to start?",      a: "No. The programme starts from Azure fundamentals and progressively builds to advanced DevOps and AI integration topics." },
    { q: "Is the training available fully online?",           a: "Yes. All live sessions are online with full recordings provided. You can also attend in-person at UK locations." },
    { q: "Does this prepare me for the AZ-400 exam?",        a: "Yes. Week 10 includes a full AZ-400 mock exam session with answer walkthroughs and a personalised exam strategy." },
    { q: "How long does the programme run?",                  a: "10 weeks of live instructor-led training with weekly labs, project reviews, and mentor support throughout." },
  ],

  relatedCourses: [
    { title: "AWS DevOps with Gen AI",        desc: "Master AWS DevOps engineering and Bedrock AI integration for enterprise delivery pipelines.",   icon: Cloud,    slug: "aws-devops-gen-ai"        },
    { title: "Microsoft Azure Administration", desc: "Manage identity, governance, storage, and virtual networks in Azure enterprise environments.", icon: Shield,   slug: "microsoft-azure-administration" },
    { title: "DevOps & SRE Engineering",      desc: "Automate delivery pipelines with Jenkins, Docker, and Kubernetes. Master Terraform for IaC.",   icon: GitBranch,slug: "devops-sre-engineering"    },
    { title: "Generative AI Masterclass",     desc: "Architect next-gen AI solutions with LLMs, RAG, and AI Agents. Master prompt engineering.",    icon: Sparkles, slug: "generative-ai"            },
    { title: "Azure Data Engineer",           desc: "Build enterprise data pipelines on Azure using Data Factory, Synapse Analytics, and Databricks.", icon: Database,slug: "azure-data-engineer"      },
    { title: "Data Science & MLOps",          desc: "Build, deploy and scale machine learning models with MLFlow and Airflow.",                       icon: BarChart3,slug: "data-science-mlops"        },
  ],
};

export const Route = createFileRoute("/azure-devops-gen-ai")({
  head: () => ({
    meta: [
      { title: "Azure DevOps with Generative AI — Live Training UK | Ismart Skills" },
      { name: "description", content: "10-week live Azure DevOps with Generative AI training programme for UK professionals. Azure Pipelines, AKS, Bicep, Azure OpenAI — hands-on labs and AZ-400 exam prep." },
    ],
  }),
  component: () => <CourseTemplatePage data={data} />,
});
