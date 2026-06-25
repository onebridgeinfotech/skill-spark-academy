import { createFileRoute } from "@tanstack/react-router";
import { CourseTemplatePage, type CourseTemplateData } from "@/components/CourseTemplatePage";
import { Award, Users, Headphones, Target, BarChart3, Layers, BookOpen, MessageSquare, Zap, GitBranch, Shield, Database } from "lucide-react";

const data: CourseTemplateData = {
  name: "Scrum Master Certification",
  tagline: "6-Week Live Programme · UK Cohorts",
  duration: "6 Weeks",
  hours: "25+ Hours",
  description: "Master Agile Scrum facilitation and servant leadership. Gain the skills to lead high-performing teams, remove impediments, and drive continuous improvement — with full CSM certification preparation.",

  overview: [
    "The Scrum Master is one of the most sought-after roles in UK technology organisations. This programme develops your facilitation, coaching, and servant leadership skills across all Scrum events, artefacts, and roles — aligned to the Certified ScrumMaster (CSM) and PSM I standards.",
    "You'll practise Sprint Planning, Daily Scrum, Sprint Review, and Retrospective facilitation through live simulations, learn to coach development teams and Product Owners, handle impediment removal, and explore scaling frameworks including SAFe and LeSS for enterprise Agile environments.",
  ],
  overviewStats: [
    { label: "Duration",   value: "6 Weeks"      },
    { label: "Format",     value: "Live + Simulations" },
    { label: "Cohort",     value: "Limited Seats" },
  ],

  audience: [
    "Project managers and delivery leads transitioning to Agile Scrum roles.",
    "Team leads and technical leads stepping into Scrum Master responsibilities.",
    "Business analysts working in Scrum teams who want formal SM certification.",
    "IT professionals joining organisations that have adopted Agile at scale.",
    "Graduates and career changers targeting Agile delivery roles in tech.",
    "Product owners who want to deepen their understanding of the Scrum framework.",
  ],

  prerequisites: [
    "No prior Scrum or Agile experience is required — this programme starts from the fundamentals.",
    "Basic understanding of software development or IT project delivery is helpful.",
    "An open, collaborative mindset and willingness to participate in live team simulations.",
  ],

  curriculum: [
    { week: 1, focus: "Agile Principles & the Scrum Framework",   deliverables: "Agile Manifesto, Scrum Guide deep-dive, values and pillars",         tools: "Miro, Notion",       project: "Agile Principles Workshop"     },
    { week: 2, focus: "Scrum Roles, Events & Artefacts",          deliverables: "Product Backlog, Sprint Backlog, Increment, and DoD design",         tools: "Jira, Trello",       project: "Team Scrum Board Setup"        },
    { week: 3, focus: "Sprint Facilitation & Ceremonies",         deliverables: "Sprint Planning, Daily Scrum, Review, and Retrospective simulations", tools: "Miro, FunRetro",     project: "Sprint Ceremony Facilitation"  },
    { week: 4, focus: "Coaching, Impediment Removal & Leadership",deliverables: "Servant leadership techniques, coaching conversations, dysfunctions", tools: "Coaching canvas",    project: "Team Health Assessment"        },
    { week: 5, focus: "Scaling Agile — SAFe, LeSS & Nexus",      deliverables: "Scaled Scrum frameworks, PI Planning overview, Agile Release Trains", tools: "SAFe tools, Miro",   project: "Scaled Agile Design Scenario"  },
    { week: 6, focus: "CSM / PSM I Mock Exams & Readiness",       deliverables: "2 full practice exams, gap analysis, and certification strategy",    tools: "Exam Simulator",     project: "CSM Exam Readiness Report"     },
  ],

  certificationTitle: "Certified ScrumMaster® (CSM) & PSM I",
  certificationDesc: "This programme prepares you for both the Certified ScrumMaster (CSM) from Scrum Alliance and the Professional Scrum Master I (PSM I) from Scrum.org. You receive an EslandIT institutional certificate recognised by 250+ UK hiring partners, with full mock exam sessions and interview coaching.",
  certificationStats: [
    { label: "Mock Exams",     value: "2 Full Tests"  },
    { label: "Interview Prep", value: "Included"      },
    { label: "Certificate",    value: "Digital + PDF" },
  ],

  features: [
    { icon: Target,     title: "Live Sprint Simulations",        desc: "Practice real Scrum ceremonies — Sprint Planning, Daily Scrum, Reviews, and Retrospectives — in live team simulations." },
    { icon: Users,      title: "Servant Leadership Coaching",    desc: "Develop the coaching and facilitation skills that distinguish great Scrum Masters from average ones in enterprise environments." },
    { icon: Layers,     title: "Scaling Agile Frameworks",       desc: "Learn SAFe, LeSS, and Nexus — the most widely adopted enterprise scaling frameworks for organisations running Scrum at scale." },
    { icon: Award,      title: "CSM & PSM I Exam Prep",          desc: "Structured preparation for both Certified ScrumMaster and Professional Scrum Master I certifications with mock exams included." },
    { icon: Headphones, title: "24/7 Mentor Support",            desc: "Access experienced Agile coaches and certified Scrum Masters for guidance on real-world impediments and team dynamics." },
    { icon: BarChart3,  title: "Career Placement Support",       desc: "Access our 250+ UK hiring partner network including Agile-at-scale enterprises, consultancies, and technology teams." },
  ],

  batches: [
    { title: "Weekday Morning",    start: "Monday",   days: "Mon–Fri", time: "9:00 AM – 10:30 AM GMT" },
    { title: "Weekend Intensive",  start: "Saturday", days: "Sat–Sun", time: "10:00 AM – 1:00 PM GMT"  },
    { title: "Evening Fast-Track", start: "Tuesday",  days: "Tue–Thu", time: "7:00 PM – 9:00 PM GMT"  },
  ],

  testimonials: [
    { stars: 5, quote: "The live Sprint simulations were the highlight. I went from never having run a Retrospective to confidently facilitating our entire team's ceremonies.", author: "Gemma R.", role: "Scrum Master, FinTech" },
    { stars: 5, quote: "Passed PSM I with 95%. The conceptual depth of the facilitators and the mock exams made the difference.", author: "Arjun D.", role: "Agile Delivery Lead" },
    { stars: 5, quote: "The SAFe module in week 5 directly helped me handle our company's PI Planning event the week after. Immediately applicable content.", author: "Chloe N.", role: "Release Train Engineer" },
    { stars: 5, quote: "Six weeks is the perfect length. Intense enough to build real skill, short enough to fit around a full-time delivery role.", author: "Patrick M.", role: "IT Programme Manager" },
    { stars: 5, quote: "The coaching and servant leadership module changed how I think about my role. Much more than just a certification course.", author: "Yvonne K.", role: "Senior Scrum Master" },
  ],

  articles: [
    { icon: BookOpen,      badge: "Guide",        badgeColor: "#e8f0fc",              badgeText: "#004890", title: "Scrum Master vs Project Manager: Key Differences", desc: "Understand when each role is appropriate and how to transition between traditional PM and Scrum.",         readTime: "12 min" },
    { icon: MessageSquare, badge: "Interview",    badgeColor: "rgba(255,158,13,0.12)", badgeText: "#b86e00", title: "Top Scrum Master Interview Questions 2025",         desc: "The scenario-based and conceptual questions most commonly asked in UK Scrum Master interviews.",           readTime: "20 min" },
    { icon: Award,         badge: "Certification",badgeColor: "rgba(52,211,153,0.12)", badgeText: "#065f46", title: "CSM vs PSM I: Which Certification Should You Get?", desc: "A practical comparison of Scrum Alliance CSM and Scrum.org PSM I for UK professionals.",                   readTime: "10 min" },
  ],

  faqs: [
    { q: "Do I need Scrum experience to join this course?",         a: "No. The programme starts from the Agile Manifesto and Scrum Guide fundamentals, making it suitable for complete beginners." },
    { q: "Which certifications does this prepare me for?",          a: "The programme prepares you for both the Certified ScrumMaster (CSM) from Scrum Alliance and the PSM I from Scrum.org." },
    { q: "How long are the sessions each week?",                    a: "Each week includes 4–5 hours of live instruction plus Sprint simulation exercises. Sessions are available in morning, evening, and weekend cohorts." },
    { q: "Is this available as an online course?",                  a: "Yes. All sessions are delivered live online with full recordings. In-person training is available at UK centres on request." },
  ],

  relatedCourses: [
    { title: "PMP Certification",           desc: "Add predictive project management depth to your Agile skills with the globally recognised PMP certification.",   icon: Award,    slug: "pmp-certification"         },
    { title: "Azure DevOps with Gen AI",    desc: "Learn the DevOps toolchain used by Agile delivery teams running on the Microsoft Azure platform.",               icon: GitBranch,slug: "azure-devops-gen-ai"       },
    { title: "AWS DevOps with Gen AI",      desc: "Understand AWS DevOps pipelines to better collaborate with engineering teams as a Scrum Master.",                icon: Shield,   slug: "aws-devops-gen-ai"         },
    { title: "Digital Marketing with AI",   desc: "Apply Agile delivery skills to digital marketing campaigns and AI-powered growth projects.",                     icon: Zap,      slug: "digital-marketing-ai-course"},
    { title: "Generative AI Masterclass",   desc: "Understand AI engineering workflows — increasingly critical for Scrum Masters in AI-driven product teams.",     icon: Database, slug: "generative-ai"             },
    { title: "QA Automation",               desc: "Understand test automation and quality assurance practices to better support your development team.",            icon: BarChart3,slug: "qa-automation"             },
  ],
};

export const Route = createFileRoute("/scrum-master")({
  head: () => ({
    meta: [
      { title: "Scrum Master Certification Training — Live UK | EslandIT Trainings" },
      { name: "description", content: "6-week live Scrum Master certification training programme for UK professionals. CSM and PSM I exam prep, Sprint simulations, SAFe scaling, and servant leadership coaching." },
    ],
  }),
  component: () => <CourseTemplatePage data={data} />,
});
