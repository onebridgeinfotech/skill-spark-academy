import { createFileRoute } from "@tanstack/react-router";
import { CourseTemplatePage, type CourseTemplateData } from "@/components/CourseTemplatePage";
import { Zap, Layers, Headphones, Award, Users, Database, BookOpen, MessageSquare, Target, Sparkles, BarChart3, Shield } from "lucide-react";

const data: CourseTemplateData = {
  name: "Salesforce Marketing Cloud",
  tagline: "10-Week Live Programme · UK Cohorts",
  duration: "10 Weeks",
  hours: "45+ Hours",
  description: "Master Salesforce Marketing Cloud — Email Studio, Journey Builder, Automation Studio, and Data Extensions. Build enterprise marketing automation workflows and prepare for the Salesforce Marketing Cloud Email Specialist certification.",

  overview: [
    "Salesforce Marketing Cloud (SFMC) is the world's leading enterprise marketing platform, used by FTSE 100 companies across financial services, retail, and healthcare. This programme equips you with the skills to build, manage, and optimise SFMC environments in real enterprise scenarios.",
    "You'll work hands-on with Email Studio, Journey Builder, Automation Studio, Mobile Studio, and Data Extensions. You'll also learn AMPscript for personalisation, Salesforce SQL for data queries, and the Marketing Cloud API for integrations — the skills that command premium salaries in the UK Salesforce ecosystem.",
  ],
  overviewStats: [
    { label: "Duration",  value: "10 Weeks" },
    { label: "Format",    value: "Live + Labs" },
    { label: "Cohort",    value: "Limited Seats" },
  ],

  audience: [
    "Email marketers and CRM managers wanting to move into the Salesforce ecosystem.",
    "Salesforce Admins expanding their scope into Marketing Cloud capabilities.",
    "Digital marketers at enterprise organisations running SFMC or planning to adopt it.",
    "IT professionals building marketing technology integrations and data pipelines.",
    "Career switchers targeting high-value Salesforce Marketing Cloud specialist roles.",
    "Consultants and contractors seeking SFMC certification to command higher day rates.",
  ],

  prerequisites: [
    "Basic understanding of email marketing or CRM concepts is helpful but not required.",
    "Familiarity with Salesforce CRM (Sales Cloud or Service Cloud) is a bonus.",
    "No prior Marketing Cloud experience needed — the programme starts from platform fundamentals.",
  ],

  curriculum: [
    { week: 1,  focus: "Marketing Cloud Overview & Setup",               deliverables: "Business unit structure, user management, and platform navigation",  tools: "SFMC Platform",          project: "Business Unit Configuration"     },
    { week: 2,  focus: "Email Studio & Content Builder",                 deliverables: "Template design, dynamic content, A/B testing, and send workflows", tools: "Email Studio, CB",       project: "Multi-Variant Email Campaign"    },
    { week: 3,  focus: "Contact Builder & Data Extensions",              deliverables: "Data model design, sendable DEs, and contact relationships",          tools: "Contact Builder",        project: "Data Architecture Design"        },
    { week: 4,  focus: "Journey Builder — Customer Journey Design",      deliverables: "Entry sources, multi-step journeys, decision splits, and goals",      tools: "Journey Builder",        project: "Onboarding Journey Build"        },
    { week: 5,  focus: "Automation Studio & Scheduled Workflows",        deliverables: "SQL activities, file transfers, data extracts, and triggers",         tools: "Automation Studio, SQL", project: "Automated Data Refresh Pipeline"  },
    { week: 6,  focus: "Mobile Studio — SMS & Push Notifications",       deliverables: "Mobile connect setup, SMS campaigns, and push message design",        tools: "Mobile Studio",          project: "SMS Nurture Campaign"            },
    { week: 7,  focus: "Analytics Builder & Reports",                    deliverables: "Email performance analytics, funnel reporting, and data views",       tools: "Analytics Builder",      project: "Marketing Performance Dashboard"  },
    { week: 8,  focus: "AMPscript & Advanced Personalisation",           deliverables: "Dynamic content logic, conditional rendering, and lookup functions",  tools: "AMPscript, Code View",   project: "Personalised Email Template"     },
    { week: 9,  focus: "Marketing Cloud API & Salesforce CRM Integration",deliverables: "REST API calls, CRM sync, and triggered sends from Sales Cloud",    tools: "SFMC API, Postman",      project: "CRM Integration Build"           },
    { week: 10, focus: "Certification Prep & Capstone Project",          deliverables: "Full campaign build, mock exam, and portfolio documentation",          tools: "Exam Kit, Portfolio",    project: "SFMC Capstone Campaign"          },
  ],

  certificationTitle: "Salesforce Marketing Cloud Email Specialist",
  certificationDesc: "This programme prepares you for the Salesforce Marketing Cloud Email Specialist and Marketing Cloud Administrator certifications. You receive an Ismart Skills institutional certificate recognised by 250+ UK hiring partners, with dedicated mock exam sessions, practice questions, and technical interview coaching.",
  certificationStats: [
    { label: "Mock Exams",     value: "Included"     },
    { label: "Interview Prep", value: "Included"     },
    { label: "Certificate",    value: "Digital + PDF" },
  ],

  features: [
    { icon: Zap,       title: "Real SFMC Platform Access",       desc: "Hands-on labs run in real Marketing Cloud environments — build live campaigns, journeys, and automations from day one." },
    { icon: Layers,    title: "Full Platform Coverage",          desc: "Cover every SFMC studio: Email, Journey Builder, Automation Studio, Mobile Studio, Analytics Builder, and Content Builder." },
    { icon: Database,  title: "AMPscript & Data Extensions",     desc: "Master AMPscript personalisation and data extension architecture — the skills that command premium salaries in the UK SFMC market." },
    { icon: Award,     title: "Email Specialist Certification",  desc: "Structured preparation for Salesforce Marketing Cloud Email Specialist and Administrator certifications with mock exams included." },
    { icon: Headphones,title: "24/7 Mentor Support",             desc: "Get help any time on journey logic, data architecture decisions, and AMPscript from experienced SFMC consultants." },
    { icon: Users,     title: "Salesforce Partner Network",      desc: "Access our network of UK Salesforce consulting partners and enterprise clients actively hiring SFMC specialists." },
  ],

  batches: [
    { title: "Weekday Morning",    start: "Monday",   days: "Mon–Fri", time: "9:00 AM – 10:30 AM GMT" },
    { title: "Weekend Intensive",  start: "Saturday", days: "Sat–Sun", time: "10:00 AM – 1:00 PM GMT"  },
    { title: "Evening Fast-Track", start: "Tuesday",  days: "Tue–Thu", time: "7:00 PM – 9:00 PM GMT"  },
  ],

  testimonials: [
    { stars: 5, quote: "The Journey Builder module alone justified the entire investment. I went from struggling with basic journeys to building complex multi-channel campaigns.", author: "Natasha F.", role: "Marketing Cloud Consultant" },
    { stars: 5, quote: "AMPscript was the game-changer. Being able to write dynamic personalisation logic set me apart from every other SFMC candidate in interviews.", author: "Ravi S.", role: "Salesforce Marketing Specialist" },
    { stars: 5, quote: "Passed the Email Specialist certification first attempt. The practice questions in week 10 were extremely close to the actual exam format.", author: "Ciara O.", role: "CRM Marketing Manager" },
    { stars: 5, quote: "The API integration module was incredibly valuable. Building triggered sends from Sales Cloud is now a core skill I use every day.", author: "Hugo B.", role: "Marketing Technology Lead" },
    { stars: 5, quote: "The mentors had real SFMC consulting experience, not just training knowledge. That practical depth made all the difference.", author: "Tanya L.", role: "Digital Marketing Manager" },
  ],

  articles: [
    { icon: BookOpen,      badge: "Tutorial",     badgeColor: "#e8f0fc",              badgeText: "#004890", title: "Marketing Cloud Journey Builder: Quick-Start",  desc: "Build your first customer journey in Salesforce Marketing Cloud — step by step with real examples.",       readTime: "20 min" },
    { icon: MessageSquare, badge: "Interview",    badgeColor: "rgba(255,158,13,0.12)", badgeText: "#b86e00", title: "Top SFMC Interview Questions 2025",              desc: "The most common technical and scenario-based questions asked for Marketing Cloud roles in the UK.",          readTime: "25 min" },
    { icon: Award,         badge: "Certification",badgeColor: "rgba(52,211,153,0.12)", badgeText: "#065f46", title: "SFMC Email Specialist: Exam Guide",              desc: "Domain breakdown, exam weighting, key topics, and practice resources for first-attempt success.",           readTime: "18 min" },
  ],

  faqs: [
    { q: "Do I need existing Salesforce experience to join?",        a: "No. The programme starts from Marketing Cloud fundamentals. Prior Salesforce CRM experience is helpful but not required." },
    { q: "Will I work in a real Marketing Cloud environment?",       a: "Yes. All labs are conducted in real SFMC developer org environments — you build actual campaigns, not simulations." },
    { q: "Which certifications does this programme prepare me for?", a: "The programme prepares you for the Salesforce Marketing Cloud Email Specialist and Marketing Cloud Administrator certifications, with mock exams for both." },
    { q: "Is this course available online?",                         a: "Yes. All sessions are delivered live online with full recordings available for replay. In-person attendance is available at UK training locations." },
  ],

  relatedCourses: [
    { title: "Salesforce Admin & Dev Mastery",  desc: "Master Salesforce CRM administration and Apex development — the ideal companion to Marketing Cloud skills.", icon: Shield,   slug: "salesforce-admin-dev"          },
    { title: "Digital Marketing with AI",       desc: "Add AI-powered campaign strategy and performance marketing skills to your Marketing Cloud expertise.",        icon: Target,   slug: "digital-marketing-ai-course"   },
    { title: "Salesforce Data Cloud",           desc: "Build unified customer profiles and real-time segments feeding Marketing Cloud journeys with Data Cloud.",    icon: Database, slug: "salesforce-data-cloud"         },
    { title: "Salesforce Admin",                desc: "Deep-dive into Salesforce Admin fundamentals including objects, flows, reports, and security configuration.", icon: Zap,      slug: "salesforce-admin"              },
    { title: "Salesforce Pardot",               desc: "Master B2B marketing automation with Salesforce Account Engagement (Pardot) for demand generation.",         icon: Sparkles, slug: "salesforce-pardot"             },
    { title: "Generative AI Masterclass",       desc: "Integrate AI agents and LLMs into Salesforce marketing workflows for next-generation personalisation.",       icon: BarChart3,slug: "generative-ai"                },
  ],
};

export const Route = createFileRoute("/salesforce-marketing-cloud")({
  head: () => ({
    meta: [
      { title: "Salesforce Marketing Cloud Training — Live UK | Ismart Skills" },
      { name: "description", content: "10-week live Salesforce Marketing Cloud training for UK professionals. Email Studio, Journey Builder, AMPscript, Automation Studio — with Email Specialist certification prep." },
    ],
  }),
  component: () => <CourseTemplatePage data={data} />,
});
