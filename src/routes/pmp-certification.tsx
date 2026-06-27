import { createFileRoute } from "@tanstack/react-router";
import { CourseTemplatePage, type CourseTemplateData } from "@/components/CourseTemplatePage";
import { Award, Users, Headphones, Target, BarChart3, Layers, BookOpen, MessageSquare, Shield, Zap, GitBranch, Database } from "lucide-react";

const data: CourseTemplateData = {
  name: "PMP Certification",
  tagline: "8-Week Live Programme · UK Cohorts",
  duration: "8 Weeks",
  hours: "35+ Hours",
  description: "Prepare for the globally recognised Project Management Professional (PMP) certification. Master both predictive and agile project management frameworks aligned to the latest PMI Examination Content Outline.",

  overview: [
    "The PMP certification is the world's most recognised project management qualification, required by thousands of UK employers across IT, construction, finance, and public sector. This programme delivers the full 35 contact hours required by PMI, combined with mock exam preparation.",
    "You'll master all PMI domains — people, process, and business environment — across both predictive (Waterfall) and agile delivery approaches. Each module is taught live by PMP-certified practitioners with real-world UK project delivery experience.",
  ],
  overviewStats: [
    { label: "Duration",    value: "8 Weeks"       },
    { label: "PMI Hours",   value: "35 Contact Hrs" },
    { label: "Cohort",      value: "Limited Seats"  },
  ],

  audience: [
    "Project managers seeking formal PMP certification and global recognition.",
    "Programme managers and delivery leads in IT or business change projects.",
    "Aspiring project managers looking to transition into formal PM roles.",
    "Business analysts moving into end-to-end delivery and PM responsibilities.",
    "Consultants and contractors seeking PMP to improve client credibility.",
    "Senior professionals whose organisations require PMP for leadership roles.",
  ],

  prerequisites: [
    "A secondary degree (high school diploma, associate's degree, or equivalent) with at least 5 years of project management experience, OR a four-year degree with 3 years of experience.",
    "Completion of 35 contact hours of project management education (this programme provides those hours).",
    "No formal PM training required before joining — the programme is designed for working professionals.",
  ],

  curriculum: [
    { week: 1, focus: "PMP Framework & PMI Standards",           deliverables: "PMI Talent Triangle, ECO domains, and exam format overview",       tools: "PMI ECO, PMBOK 7",      project: "Study Plan & Baseline Assessment" },
    { week: 2, focus: "Project Integration Management",          deliverables: "Project charter, stakeholder register, change control process",     tools: "MS Project, Notion",    project: "Project Charter Development"     },
    { week: 3, focus: "Scope, Schedule & Cost Management",       deliverables: "WBS, Gantt charts, earned value analysis, and forecasting",        tools: "MS Project, EVM tools", project: "Project Plan & EVM Exercise"     },
    { week: 4, focus: "Quality & Resource Management",           deliverables: "Quality management plans, RACI charts, resource levelling",        tools: "Quality tools, RACI",   project: "Resource & Quality Plan"         },
    { week: 5, focus: "Risk, Communications & Stakeholder Mgmt",deliverables: "Risk register, communications plan, stakeholder engagement plan",   tools: "Risk Matrix, Comms tools",project: "Risk & Comms Framework"         },
    { week: 6, focus: "Procurement & Contract Management",       deliverables: "Procurement strategy, contract types, and vendor evaluation",      tools: "Procurement templates", project: "Procurement Plan Design"         },
    { week: 7, focus: "Agile & Hybrid Project Management",       deliverables: "Scrum events, Kanban flow, hybrid delivery framework design",      tools: "Jira, Miro",            project: "Hybrid Project Scenario"         },
    { week: 8, focus: "Mock Exams & Exam Readiness",             deliverables: "3 full practice exams, gap analysis, and exam-day strategy",       tools: "PMP Exam Simulator",    project: "PMP Exam Readiness Report"       },
  ],

  certificationTitle: "Project Management Professional (PMP®)",
  certificationDesc: "This programme delivers the 35 contact hours required by PMI and prepares you for the PMP® examination. Upon course completion you receive an Ismart Skills institutional certificate alongside full mock exam preparation, study materials, and application support for your PMI exam booking.",
  certificationStats: [
    { label: "Contact Hours",  value: "35 Hrs PMI"   },
    { label: "Mock Exams",     value: "3 Full Tests"  },
    { label: "Certificate",    value: "Digital + PDF" },
  ],

  features: [
    { icon: Award,      title: "35 PMI Contact Hours",         desc: "This programme fulfils the mandatory 35 contact hours required for your PMP exam application — fully PMI-aligned." },
    { icon: Target,     title: "Predictive & Agile Coverage",  desc: "Master both traditional Waterfall and Agile/Hybrid delivery frameworks — aligned to the latest PMI ECO requirements." },
    { icon: Layers,     title: "3 Full Practice Exams",        desc: "Complete three timed 180-question mock PMP exams with detailed performance analytics and exam strategy coaching." },
    { icon: Users,      title: "PMI-Certified Instructors",    desc: "Learn from PMP-certified instructors with real UK project delivery experience in IT, finance, and infrastructure." },
    { icon: Headphones, title: "24/7 Mentor Support",          desc: "Get help any time on exam preparation, study planning, and PMI application queries from our experienced team." },
    { icon: BarChart3,  title: "Application Support",          desc: "Receive step-by-step support completing your PMI application, documenting experience hours, and scheduling your exam." },
  ],

  batches: [
    { title: "Weekday Morning",    start: "Monday",   days: "Mon–Fri", time: "9:00 AM – 10:30 AM GMT" },
    { title: "Weekend Intensive",  start: "Saturday", days: "Sat–Sun", time: "10:00 AM – 1:00 PM GMT"  },
    { title: "Evening Fast-Track", start: "Tuesday",  days: "Tue–Thu", time: "7:00 PM – 9:00 PM GMT"  },
  ],

  testimonials: [
    { stars: 5, quote: "Passed the PMP on my first attempt. The structured approach to covering all three ECO domains and the agile content was exactly what I needed.", author: "Claire B.", role: "IT Programme Manager" },
    { stars: 5, quote: "The 8-week format fitted perfectly around my busy delivery schedule. Excellent balance of theory, practice exams, and real-world case studies.", author: "Nikos A.", role: "Senior Project Manager" },
    { stars: 5, quote: "The instructors' real project experience made the content come alive. Far better than self-study materials I'd tried previously.", author: "Hannah M.", role: "Change Delivery Lead" },
    { stars: 5, quote: "Mock exam feedback in week 8 was incredibly detailed. I knew exactly which domains to focus on before my actual exam day.", author: "Victor E.", role: "Technology Project Manager" },
    { stars: 5, quote: "The PMI application support was a bonus I didn't expect. They helped me document my experience hours correctly — saved me hours of stress.", author: "Sarah T.", role: "Business Transformation PM" },
  ],

  articles: [
    { icon: BookOpen,      badge: "Guide",        badgeColor: "#e8f0fc",              badgeText: "#004890", title: "How to Apply for the PMP Exam: 2025 Guide", desc: "Step-by-step walkthrough of the PMI application process, experience documentation, and exam booking.", readTime: "15 min" },
    { icon: MessageSquare, badge: "Interview",    badgeColor: "rgba(255,158,13,0.12)", badgeText: "#b86e00", title: "Top PMP Interview Questions",               desc: "Common project management interview questions asked for senior PM roles across UK industries.",        readTime: "20 min" },
    { icon: Award,         badge: "Certification",badgeColor: "rgba(52,211,153,0.12)", badgeText: "#065f46", title: "PMP vs PRINCE2: Which Is Right for You?",   desc: "A practical comparison of the world's two leading project management certifications.",                 readTime: "12 min" },
  ],

  faqs: [
    { q: "Does this course provide the 35 contact hours PMI requires?",  a: "Yes. This programme is specifically designed to deliver the 35 mandatory contact hours of project management education required for your PMP application." },
    { q: "How many questions are on the PMP exam?",                       a: "The PMP exam has 180 questions covering predictive, agile, and hybrid delivery scenarios. Our mock exams mirror this format exactly." },
    { q: "Can I complete this course online?",                            a: "Yes. All sessions are delivered live online with full recordings. In-person attendance is also available at UK training centres." },
    { q: "How long is the PMP certification valid?",                      a: "PMP certification is valid for 3 years. You maintain it by earning 60 PDUs (Professional Development Units) within each 3-year cycle." },
  ],

  relatedCourses: [
    { title: "Scrum Master Certification",   desc: "Master Agile Scrum facilitation and CSM certification — the ideal complement to your PMP qualification.",  icon: Target,   slug: "scrum-master"             },
    { title: "Digital Marketing with AI",    desc: "Expand your PM skills with AI-powered marketing project delivery for modern digital organisations.",        icon: Zap,      slug: "digital-marketing-ai-course"},
    { title: "AWS DevOps with Gen AI",       desc: "Pair your PM knowledge with technical DevOps skills increasingly required of senior IT project managers.",  icon: Shield,   slug: "aws-devops-gen-ai"        },
    { title: "Azure DevOps with Gen AI",     desc: "Understand Azure DevOps delivery pipelines to better manage technology projects on the Microsoft stack.",   icon: GitBranch,slug: "azure-devops-gen-ai"      },
    { title: "Generative AI Masterclass",    desc: "Add AI literacy to your PM toolkit — essential for managing AI-driven transformation projects.",            icon: Database, slug: "generative-ai"            },
    { title: "Salesforce Admin & Dev",       desc: "Manage Salesforce implementation projects with a deep understanding of the platform's capabilities.",      icon: BarChart3,slug: "salesforce-admin-dev"      },
  ],
};

export const Route = createFileRoute("/pmp-certification")({
  head: () => ({
    meta: [
      { title: "PMP Certification Training — Live UK Programme | Ismart Skills" },
      { name: "description", content: "8-week live PMP certification training programme for UK professionals. 35 PMI contact hours, 3 full mock exams, predictive and agile frameworks — pass first time." },
    ],
  }),
  component: () => <CourseTemplatePage data={data} />,
});
