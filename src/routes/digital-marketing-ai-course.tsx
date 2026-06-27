import { createFileRoute } from "@tanstack/react-router";
import { CourseTemplatePage, type CourseTemplateData } from "@/components/CourseTemplatePage";
import { Zap, Layers, Headphones, Award, Users, BarChart3, BookOpen, MessageSquare, Target, Sparkles, Database, GitBranch } from "lucide-react";

const data: CourseTemplateData = {
  name: "Digital Marketing with AI",
  tagline: "8-Week Live Programme · UK Cohorts",
  duration: "8 Weeks",
  hours: "35+ Hours",
  description: "Master AI-powered digital marketing — from SEO and paid advertising to email automation and content generation. Build data-driven campaigns using the latest AI tools and platforms.",

  overview: [
    "This programme combines core digital marketing skills with hands-on AI tool mastery, preparing you for modern marketing roles where AI literacy is increasingly required by UK employers across every sector.",
    "You'll build real campaigns across SEO, Google Ads, Meta advertising, email marketing, and social media — while integrating AI tools like ChatGPT, Jasper, Midjourney, and HubSpot AI to scale your output and optimise performance. Each module is delivered live with practical project work reviewed by experienced marketing practitioners.",
  ],
  overviewStats: [
    { label: "Duration",  value: "8 Weeks" },
    { label: "Format",    value: "Live + Campaigns" },
    { label: "Cohort",    value: "Limited Seats"    },
  ],

  audience: [
    "Marketing professionals wanting to integrate AI tools into their day-to-day workflows.",
    "Business owners and entrepreneurs seeking to drive growth through digital channels.",
    "Content creators, copywriters, and social media managers levelling up with AI.",
    "Career switchers entering digital marketing from other industries.",
    "Sales professionals broadening their skills into demand generation and marketing.",
    "Graduates targeting digital marketing and growth roles at UK startups and agencies.",
  ],

  prerequisites: [
    "No prior marketing or technical experience required — the programme starts from digital marketing fundamentals.",
    "Basic familiarity with social media platforms (LinkedIn, Instagram, Facebook) is helpful.",
    "Enthusiasm for AI tools and a willingness to experiment with emerging marketing technology.",
  ],

  curriculum: [
    { week: 1, focus: "Digital Marketing Foundations",                deliverables: "Channel overview, buyer journey mapping, and campaign goal setting",      tools: "Google Analytics 4, HubSpot", project: "Marketing Strategy Audit"         },
    { week: 2, focus: "SEO & AI-Powered Content Strategy",           deliverables: "Keyword research, on-page SEO, and AI content generation workflows",       tools: "Semrush, ChatGPT, SurferSEO", project: "SEO Content Plan Build"           },
    { week: 3, focus: "Paid Search — Google Ads & AI Bidding",       deliverables: "Campaign structure, ad copywriting, Smart Bidding, and PMAX campaigns",   tools: "Google Ads, Keyword Planner", project: "Google Ads Campaign Launch"       },
    { week: 4, focus: "Paid Social — Meta, LinkedIn & TikTok Ads",   deliverables: "Audience targeting, creative testing, retargeting, and ROAS optimisation", tools: "Meta Ads Manager, TikTok Ads",project: "Paid Social Campaign Setup"       },
    { week: 5, focus: "Email Marketing & AI Personalisation",        deliverables: "Segmentation, automated drip sequences, and AI-personalised content",     tools: "HubSpot, Mailchimp, Klaviyo", project: "Email Automation Flow Build"      },
    { week: 6, focus: "Social Media Marketing & Content AI",         deliverables: "Content calendar, AI image generation, and scheduling automation",         tools: "Jasper, Midjourney, Buffer",  project: "AI Content Calendar"              },
    { week: 7, focus: "Analytics, Attribution & Data-Driven Decisions",deliverables: "GA4 setup, conversion tracking, and attribution modelling",             tools: "GA4, Looker Studio",          project: "Marketing Analytics Dashboard"    },
    { week: 8, focus: "Campaign Portfolio & Career Readiness",        deliverables: "End-to-end campaign case study, CV, and interview preparation",           tools: "Portfolio tools",             project: "Full Campaign Portfolio Piece"    },
  ],

  certificationTitle: "Google & Meta Certification Preparation",
  certificationDesc: "This programme prepares you for the Google Ads certification (Search, Display, and Shopping) and Meta Certified Digital Marketing Associate exam. Upon completion you receive an Ismart Skills certificate recognised by 250+ UK hiring partners, alongside portfolio case studies demonstrating measurable campaign results.",
  certificationStats: [
    { label: "Google Ads Prep",  value: "Included"     },
    { label: "Meta Cert Prep",   value: "Included"     },
    { label: "Certificate",      value: "Digital + PDF" },
  ],

  features: [
    { icon: Sparkles,  title: "AI Tool Mastery",                  desc: "Learn to use ChatGPT, Jasper, Midjourney, and HubSpot AI to scale content production and campaign optimisation." },
    { icon: Target,    title: "Live Campaign Execution",           desc: "Build and launch real paid advertising campaigns on Google, Meta, LinkedIn, and TikTok during the programme." },
    { icon: Zap,       title: "Data-Driven Analytics",            desc: "Master Google Analytics 4, Looker Studio, and attribution modelling to optimise campaign performance with confidence." },
    { icon: Award,     title: "Google & Meta Certification Prep", desc: "Structured exam preparation for Google Ads certification and Meta Digital Marketing Associate — with mock tests included." },
    { icon: Headphones,title: "24/7 Mentor Support",              desc: "Get guidance any time on campaign troubleshooting, creative strategy, and platform-specific optimisation from practitioners." },
    { icon: Users,     title: "Agency & Brand Placement Support", desc: "Access our 250+ UK hiring partner network including digital agencies, in-house marketing teams, and DTC brands." },
  ],

  batches: [
    { title: "Weekday Morning",    start: "Monday",   days: "Mon–Fri", time: "9:00 AM – 10:30 AM GMT" },
    { title: "Weekend Intensive",  start: "Saturday", days: "Sat–Sun", time: "10:00 AM – 1:00 PM GMT"  },
    { title: "Evening Fast-Track", start: "Tuesday",  days: "Tue–Thu", time: "7:00 PM – 9:00 PM GMT"  },
  ],

  testimonials: [
    { stars: 5, quote: "The AI tools integration was transformational. I now produce 3x the content output in half the time — clients have noticed the difference.", author: "Laura F.", role: "Freelance Digital Marketer" },
    { stars: 5, quote: "The Google Ads and Meta modules were incredibly hands-on. I launched my first real campaign in week 3 and it converted immediately.", author: "Ahmed K.", role: "Growth Marketing Manager" },
    { stars: 5, quote: "Transitioning from PR into performance marketing felt daunting but the programme made it accessible. Now I manage £200k in monthly ad spend.", author: "Rebecca T.", role: "Performance Marketing Lead" },
    { stars: 5, quote: "The GA4 and Looker Studio dashboarding skills have made me the analytics go-to person in my team. Practical and immediately applicable.", author: "Sanjay P.", role: "Marketing Analyst" },
    { stars: 5, quote: "Passed Google Ads Search certification first attempt. The exam prep in week 8 was comprehensive and the mock questions were spot-on.", author: "Olivia W.", role: "Digital Marketing Executive" },
  ],

  articles: [
    { icon: BookOpen,      badge: "Guide",        badgeColor: "#e8f0fc",              badgeText: "#004890", title: "AI Tools for Digital Marketers in 2025",     desc: "The complete list of AI marketing tools, what they do, and how to integrate them into your workflow.",  readTime: "18 min" },
    { icon: MessageSquare, badge: "Interview",    badgeColor: "rgba(255,158,13,0.12)", badgeText: "#b86e00", title: "Top Digital Marketing Interview Questions",   desc: "Common scenario-based and technical marketing questions asked in UK agency and in-house interviews.", readTime: "22 min" },
    { icon: Award,         badge: "Certification",badgeColor: "rgba(52,211,153,0.12)", badgeText: "#065f46", title: "Google Ads Certification: Pass First Time",   desc: "Domain breakdown, study tips, and practice questions for the Google Ads Search certification exam.",   readTime: "15 min" },
  ],

  faqs: [
    { q: "Do I need marketing experience to join this course?",     a: "No. The programme starts from digital marketing fundamentals and is designed for both beginners and marketing professionals looking to add AI skills." },
    { q: "Which AI tools will I learn to use?",                     a: "You'll use ChatGPT, Jasper, Midjourney, HubSpot AI, Semrush AI, Google Performance Max, and Meta Advantage+ AI features throughout the programme." },
    { q: "Will I run real campaigns during the course?",            a: "Yes. You'll build and in many cases launch real Google Ads and Meta campaigns as part of your weekly project work, giving you measurable case studies." },
    { q: "Is this course available online?",                        a: "Yes. All sessions are delivered live online with full recordings. You can also attend in-person at our UK training locations." },
  ],

  relatedCourses: [
    { title: "Salesforce Marketing Cloud",   desc: "Master enterprise marketing automation on Salesforce Marketing Cloud — Email, Journey Builder, and Automation Studio.", icon: Target,   slug: "salesforce-marketing-cloud"   },
    { title: "Generative AI Masterclass",    desc: "Go deeper into LLMs, agent workflows, and AI engineering — the natural next step from AI marketing tools.",             icon: Sparkles, slug: "generative-ai"               },
    { title: "Digital Marketing Growth",     desc: "Advanced SEO, SEM, and performance marketing to scale digital products and drive high-intent conversion.",               icon: Zap,      slug: "digital-marketing-growth"    },
    { title: "Data Science & MLOps",         desc: "Add ML-powered personalisation and predictive analytics to your digital marketing skill set.",                          icon: BarChart3,slug: "data-science-mlops"          },
    { title: "Scrum Master Certification",   desc: "Manage agile marketing campaigns and sprint-based content delivery with Scrum methodology.",                            icon: Users,    slug: "scrum-master"               },
    { title: "UI/UX Product Design",         desc: "Design high-converting landing pages and digital experiences that complement your marketing campaigns.",                 icon: GitBranch,slug: "ui-ux-product-design"        },
  ],
};

export const Route = createFileRoute("/digital-marketing-ai-course")({
  head: () => ({
    meta: [
      { title: "Digital Marketing with AI — Live Training UK | Ismart Skills" },
      { name: "description", content: "8-week live Digital Marketing with AI training for UK professionals. SEO, Google Ads, Meta, email automation, ChatGPT, Jasper — Google & Meta certification prep included." },
    ],
  }),
  component: () => <CourseTemplatePage data={data} />,
});
