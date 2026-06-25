import { createFileRoute } from "@tanstack/react-router";
import { CourseTemplatePage, type CourseTemplateData } from "@/components/CourseTemplatePage";
import { Database, Layers, Headphones, Award, Users, BarChart3, BookOpen, MessageSquare, Cloud, Zap, Shield, GitBranch } from "lucide-react";

const data: CourseTemplateData = {
  name: "Azure Data Engineer",
  tagline: "12-Week Live Programme · UK Cohorts",
  duration: "12 Weeks",
  hours: "50+ Hours",
  description: "Master the complete Azure data engineering stack — Data Factory, Synapse Analytics, Databricks, and Azure Data Lake. Build production-grade data pipelines and prepare for the DP-203 certification.",

  overview: [
    "This programme equips you with the end-to-end skills to design, build, and optimise enterprise data platforms on Microsoft Azure — one of the most in-demand specialisms in the UK data engineering market.",
    "You'll implement ETL/ELT pipelines with Azure Data Factory, build analytical workloads with Synapse Analytics, process large-scale data with Databricks and Delta Lake, and integrate real-time streaming with Event Hubs and Stream Analytics. All modules are delivered live with hands-on labs in real Azure environments.",
  ],
  overviewStats: [
    { label: "Duration",  value: "12 Weeks" },
    { label: "Format",    value: "Live + Labs" },
    { label: "Cohort",    value: "Limited Seats" },
  ],

  audience: [
    "Data analysts and BI professionals moving into data engineering roles.",
    "Software developers building data-intensive applications on Azure.",
    "Database administrators modernising to cloud-native data platforms.",
    "IT professionals targeting the Azure Data Engineer Associate (DP-203) certification.",
    "Career switchers entering the booming data engineering job market.",
    "Enterprise teams building scalable data lake and analytics platforms.",
  ],

  prerequisites: [
    "Basic understanding of SQL and relational databases.",
    "Familiarity with Python or any scripting language is helpful but not required.",
    "No prior Azure or data engineering experience needed — the programme starts from the foundations.",
  ],

  curriculum: [
    { week: 1,  focus: "Azure Data Ecosystem Overview",               deliverables: "Service landscape, storage accounts, and Azure Data Lake Gen2 setup", tools: "Azure Portal, ADLS Gen2", project: "Data Lake Foundation Setup"       },
    { week: 2,  focus: "Azure Data Factory — ETL Pipelines",          deliverables: "Pipeline design, linked services, data flows, and triggers",            tools: "Azure Data Factory",     project: "ETL Pipeline Build"               },
    { week: 3,  focus: "Data Ingestion & Integration Patterns",       deliverables: "Batch and incremental loading strategies, source connectivity",         tools: "ADF, REST APIs",         project: "Multi-Source Ingestion Pipeline"  },
    { week: 4,  focus: "Azure Synapse Analytics",                     deliverables: "Dedicated SQL pools, serverless SQL, and Synapse workspaces",          tools: "Azure Synapse",          project: "Analytical Warehouse Build"       },
    { week: 5,  focus: "Azure Databricks & PySpark",                  deliverables: "Cluster config, DataFrame transformations, and job orchestration",     tools: "Databricks, PySpark",    project: "Spark Data Processing Pipeline"  },
    { week: 6,  focus: "Delta Lake & Lakehouse Architecture",         deliverables: "ACID transactions, schema evolution, time travel queries",             tools: "Delta Lake, Unity Catalog",project: "Lakehouse Architecture Design"  },
    { week: 7,  focus: "Real-Time Data with Event Hubs & Stream Analytics",deliverables: "Event ingestion, windowing functions, and live dashboards",     tools: "Event Hubs, ASA",        project: "Real-Time Analytics Platform"    },
    { week: 8,  focus: "Azure SQL Database & Cosmos DB",              deliverables: "Database design, partitioning strategy, and global distribution",     tools: "Azure SQL, Cosmos DB",   project: "Multi-Model Database Design"     },
    { week: 9,  focus: "Data Governance with Microsoft Purview",      deliverables: "Data cataloguing, lineage tracking, and sensitivity labels",          tools: "Microsoft Purview",      project: "Data Governance Framework"       },
    { week: 10, focus: "Performance Tuning & Cost Optimisation",      deliverables: "Query optimisation, partitioning, and cost management strategies",    tools: "Synapse Studio, Monitor", project: "Performance Optimisation Lab"    },
    { week: 11, focus: "Industry Project Lab",                        deliverables: "End-to-end data platform build with governance and monitoring",       tools: "Full Azure Data Stack",  project: "Enterprise Data Platform Project" },
    { week: 12, focus: "Capstone Delivery & DP-203 Exam Prep",        deliverables: "Portfolio submission, mock exam, and career coaching session",        tools: "Exam Kit, Portfolio",    project: "Azure Data Engineer Capstone"    },
  ],

  certificationTitle: "DP-203 Azure Data Engineer Associate",
  certificationDesc: "This programme prepares you for the Microsoft Certified: Azure Data Engineer Associate (DP-203) exam. You receive an EslandIT institutional certificate recognised by 250+ UK hiring partners, with dedicated mock exam sessions covering all DP-203 domains and technical interview coaching.",
  certificationStats: [
    { label: "Mock Exams",     value: "Included"     },
    { label: "Interview Prep", value: "Included"     },
    { label: "Certificate",    value: "Digital + PDF" },
  ],

  features: [
    { icon: Database,   title: "Real Azure Lab Environment",     desc: "All labs run in live Azure subscriptions — build real data pipelines, Databricks clusters, and Synapse workspaces from day one." },
    { icon: Layers,     title: "Full Data Stack Coverage",       desc: "Cover the complete Azure data engineering stack from ingestion through transformation, storage, governance, and real-time analytics." },
    { icon: Zap,        title: "Databricks & PySpark Mastery",  desc: "Master Apache Spark with PySpark and Delta Lake on Azure Databricks — the most in-demand skill combination in UK data engineering." },
    { icon: Award,      title: "DP-203 Certification Prep",      desc: "Structured preparation for the Microsoft Azure Data Engineer Associate exam with mock tests and a dedicated exam strategy session." },
    { icon: Headphones, title: "24/7 Mentor Support",            desc: "Get help any time on pipeline debugging, Spark optimisation, and architecture decisions from senior data engineers." },
    { icon: Users,      title: "Career Placement Support",       desc: "Access our 250+ UK hiring partner network with dedicated CV review, LinkedIn optimisation, and interview preparation." },
  ],

  batches: [
    { title: "Weekday Morning",    start: "Monday",   days: "Mon–Fri", time: "9:00 AM – 10:30 AM GMT" },
    { title: "Weekend Intensive",  start: "Saturday", days: "Sat–Sun", time: "10:00 AM – 1:00 PM GMT"  },
    { title: "Evening Fast-Track", start: "Tuesday",  days: "Tue–Thu", time: "7:00 PM – 9:00 PM GMT"  },
  ],

  testimonials: [
    { stars: 5, quote: "The Databricks and Delta Lake modules were outstanding. I moved from a BI analyst role to a data engineering position with a 40% salary increase.", author: "Riya M.", role: "Senior Data Engineer" },
    { stars: 5, quote: "The ADF pipeline labs closely mirrored real-world enterprise scenarios. I was building production pipelines at my new job within weeks.", author: "George F.", role: "Azure Data Engineer" },
    { stars: 5, quote: "Passed DP-203 on my first attempt. The mock exams in week 12 covered every area that came up in the actual Microsoft exam.", author: "Yuki T.", role: "Data Platform Engineer" },
    { stars: 5, quote: "Best structured data engineering training available in the UK. The real-time streaming labs with Event Hubs were particularly impressive.", author: "Adaeze O.", role: "Data Solutions Architect" },
    { stars: 5, quote: "Evening cohort fitted perfectly around my existing role. Mentors were responsive and genuinely experienced data engineers.", author: "Luke P.", role: "BI Developer turned Data Engineer" },
  ],

  articles: [
    { icon: BookOpen,      badge: "Tutorial",     badgeColor: "#e8f0fc",              badgeText: "#004890", title: "Azure Data Factory: Beginner's Guide",       desc: "Build your first ETL pipeline in Azure Data Factory — step-by-step with real examples.",           readTime: "20 min" },
    { icon: MessageSquare, badge: "Interview",    badgeColor: "rgba(255,158,13,0.12)", badgeText: "#b86e00", title: "Top Azure Data Engineer Interview Questions",  desc: "The most common technical interview questions for data engineering roles in UK enterprises.",        readTime: "28 min" },
    { icon: Award,         badge: "Certification",badgeColor: "rgba(52,211,153,0.12)", badgeText: "#065f46", title: "DP-203 Exam Guide: Pass on Your First Attempt", desc: "Domain breakdown, key topics, study plan, and resources for the Microsoft DP-203 certification.", readTime: "18 min" },
  ],

  faqs: [
    { q: "Do I need SQL or Python experience before joining?",       a: "Basic SQL knowledge is helpful but not required. Python familiarity is a bonus. The programme covers all prerequisites in the first two weeks." },
    { q: "Is this course available online and in-person?",           a: "Yes. All sessions are delivered live online with full recordings. In-person attendance is available at UK training centres." },
    { q: "Will this course prepare me for the DP-203 exam?",         a: "Yes. The final two weeks include a full DP-203 mock exam session with answer walkthroughs and a personalised exam strategy." },
    { q: "How much time should I commit per week outside class?",    a: "We recommend 4–6 hours per week for lab exercises and project work. All lab environments are available 24/7 throughout the programme." },
  ],

  relatedCourses: [
    { title: "Azure DevOps with Gen AI",      desc: "Build CI/CD pipelines on Azure with AKS, Bicep, and Azure OpenAI integration for enterprise delivery.",  icon: Cloud,    slug: "azure-devops-gen-ai"        },
    { title: "Data Science & MLOps",          desc: "Build, deploy and scale ML models with MLFlow and Airflow — the natural next step from data engineering.", icon: BarChart3,slug: "data-science-mlops"          },
    { title: "Power BI & Tableau Data Viz",   desc: "Transform data from your pipelines into high-impact business insights using professional BI tools.",       icon: Zap,      slug: "power-bi-tableau"            },
    { title: "Python for Automation & Data",  desc: "Build a strong Python foundation — essential for PySpark, data manipulation, and pipeline scripting.",     icon: Database, slug: "python-automation-data"      },
    { title: "AWS DevOps with Gen AI",        desc: "Master AWS DevOps and Bedrock AI integration for enterprise-grade delivery and data pipelines.",           icon: Shield,   slug: "aws-devops-gen-ai"           },
    { title: "Generative AI Masterclass",     desc: "Architect next-gen AI solutions with LLMs, RAG, and AI Agents. A powerful pairing with data engineering.", icon: GitBranch,slug: "generative-ai"               },
  ],
};

export const Route = createFileRoute("/azure-data-engineer")({
  head: () => ({
    meta: [
      { title: "Azure Data Engineer Training — Live UK Programme | EslandIT Trainings" },
      { name: "description", content: "12-week live Azure Data Engineer training for UK professionals. Data Factory, Synapse, Databricks, Delta Lake, real-time streaming — with DP-203 certification prep." },
    ],
  }),
  component: () => <CourseTemplatePage data={data} />,
});
