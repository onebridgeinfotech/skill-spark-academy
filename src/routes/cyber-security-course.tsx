import { createFileRoute } from "@tanstack/react-router";
import { CourseTemplatePage, type CourseTemplateData } from "@/components/CourseTemplatePage";
import { Shield, Layers, Headphones, Award, Users, Database, BookOpen, MessageSquare, Lock, Eye, AlertTriangle, BarChart3 } from "lucide-react";

const data: CourseTemplateData = {
  name: "Cyber Security",
  tagline: "12-Week Live Programme · UK Cohorts",
  duration: "12 Weeks",
  hours: "50+ Hours",
  description: "Master ethical hacking, penetration testing, and enterprise security engineering. Build the skills to protect organisations against modern cyber threats and prepare for CompTIA Security+ and CEH certifications.",

  overview: [
    "This comprehensive cyber security programme delivers the hands-on technical skills required to identify vulnerabilities, perform ethical hacking, and defend enterprise networks against real-world attack vectors.",
    "You'll master penetration testing methodologies, web application security (OWASP Top 10), cloud security on AWS and Azure, incident response, and security automation with Python. Every module is delivered live with practical lab environments mirroring real enterprise scenarios.",
  ],
  overviewStats: [
    { label: "Duration",  value: "12 Weeks" },
    { label: "Format",    value: "Live + Labs" },
    { label: "Cohort",    value: "Limited Seats" },
  ],

  audience: [
    "IT professionals and system administrators moving into security roles.",
    "Developers seeking to understand application security and secure coding practices.",
    "Network engineers targeting cyber security specialist positions.",
    "Career switchers entering the high-demand cyber security job market.",
    "Graduates seeking CompTIA Security+, CEH, or OSCP certification pathways.",
    "Enterprise teams building internal security operations capabilities.",
  ],

  prerequisites: [
    "Basic understanding of networking (TCP/IP, DNS, HTTP) is helpful.",
    "Familiarity with any operating system (Windows or Linux) — no deep expertise required.",
    "No prior security experience needed — the programme covers all fundamentals from the ground up.",
  ],

  curriculum: [
    { week: 1,  focus: "Cyber Security Fundamentals & Threat Landscape",  deliverables: "Security frameworks, threat models, and attack taxonomy",        tools: "Kali Linux, VirtualBox",  project: "Threat Landscape Report"        },
    { week: 2,  focus: "Networking & Protocol Security",                   deliverables: "Packet capture, protocol analysis, and firewall rules",           tools: "Wireshark, nmap",         project: "Network Security Audit"         },
    { week: 3,  focus: "Ethical Hacking & Reconnaissance",                 deliverables: "OSINT techniques, footprinting, and scanning methodology",        tools: "Maltego, Shodan",         project: "Reconnaissance Report"          },
    { week: 4,  focus: "Vulnerability Assessment & Exploitation",          deliverables: "CVE analysis, vulnerability scanning, and Metasploit basics",     tools: "Nessus, Metasploit",      project: "Vulnerability Assessment Lab"   },
    { week: 5,  focus: "Web Application Security (OWASP Top 10)",          deliverables: "SQLi, XSS, CSRF testing and mitigation",                         tools: "Burp Suite, OWASP ZAP",   project: "Web App Pentest Report"         },
    { week: 6,  focus: "Cloud Security — AWS & Azure",                     deliverables: "IAM misconfigurations, S3 bucket audits, security benchmarks",    tools: "ScoutSuite, Prowler",      project: "Cloud Security Assessment"      },
    { week: 7,  focus: "Identity & Access Management",                     deliverables: "Active Directory hardening, MFA implementation, PAM design",      tools: "BloodHound, CrackMapExec",project: "IAM Security Design"            },
    { week: 8,  focus: "Security Operations Centre (SOC) Fundamentals",   deliverables: "SIEM setup, alert triage, and threat hunting workflows",          tools: "Splunk, ELK Stack",       project: "SOC Alert Triage Exercise"      },
    { week: 9,  focus: "Incident Response & Digital Forensics",            deliverables: "IR playbook design, forensic imaging, and evidence handling",     tools: "Autopsy, Volatility",     project: "IR Simulation Exercise"         },
    { week: 10, focus: "Security Automation with Python",                  deliverables: "Scripted scanning, automated reporting, and remediation scripts", tools: "Python, Ansible",         project: "Security Automation Toolkit"   },
    { week: 11, focus: "Compliance, Risk & GRC Frameworks",               deliverables: "ISO 27001, GDPR, and NIST framework mapping",                    tools: "GRC Platform",            project: "Compliance Gap Analysis"        },
    { week: 12, focus: "Capstone & Certification Prep",                    deliverables: "Full pentest report, mock exams, and interview coaching",         tools: "Exam Kit, Portfolio",     project: "Cyber Security Capstone"        },
  ],

  certificationTitle: "CompTIA Security+ & CEH Preparation",
  certificationDesc: "This programme prepares you for the CompTIA Security+ and Certified Ethical Hacker (CEH) certifications. You receive an Ismart Skills institutional certificate recognised by 250+ UK hiring partners, with comprehensive mock exam sessions and technical interview coaching.",
  certificationStats: [
    { label: "Mock Exams",     value: "Included"     },
    { label: "Interview Prep", value: "Included"     },
    { label: "Certificate",    value: "Digital + PDF" },
  ],

  features: [
    { icon: Shield,    title: "Real Attack Lab Environments",   desc: "Practice ethical hacking in isolated lab environments mirroring real enterprise networks — not simulations." },
    { icon: Lock,      title: "Penetration Testing Mastery",    desc: "Learn the full pentest lifecycle from reconnaissance through exploitation to professional reporting." },
    { icon: Eye,       title: "SOC & Threat Hunting Skills",    desc: "Build Security Operations Centre skills including SIEM management, alert triage, and proactive threat hunting." },
    { icon: Award,     title: "Dual Certification Prep",        desc: "Structured preparation for CompTIA Security+ and CEH certifications with mock exams and exam strategy sessions." },
    { icon: Headphones,title: "24/7 Mentor Support",            desc: "Get guidance any time on lab challenges, tool configuration, and security architecture decisions from practitioners." },
    { icon: Users,     title: "Career Placement Support",       desc: "Access our 250+ UK hiring partner network including FTSE 100 security teams, MSSPs, and government contractors." },
  ],

  batches: [
    { title: "Weekday Morning",    start: "Monday",   days: "Mon–Fri", time: "9:00 AM – 10:30 AM GMT" },
    { title: "Weekend Intensive",  start: "Saturday", days: "Sat–Sun", time: "10:00 AM – 1:00 PM GMT"  },
    { title: "Evening Fast-Track", start: "Tuesday",  days: "Tue–Thu", time: "7:00 PM – 9:00 PM GMT"  },
  ],

  testimonials: [
    { stars: 5, quote: "The Burp Suite and web app hacking modules were exceptional. I now run penetration tests for financial services clients independently.", author: "Marcus T.", role: "Penetration Tester" },
    { stars: 5, quote: "Moving from IT support to cyber security felt impossible until this course. The mentor support made the transition seamless.", author: "Fatima A.", role: "SOC Analyst" },
    { stars: 5, quote: "The Metasploit labs and CTF-style challenges kept me hooked every week. Best technical training I've ever taken.", author: "Ben H.", role: "Security Engineer" },
    { stars: 5, quote: "CompTIA Security+ passed on first attempt. The 12-week structure gave me enough time to absorb every domain properly.", author: "Ingrid S.", role: "Information Security Analyst" },
    { stars: 5, quote: "The cloud security module on AWS misconfigurations directly helped me identify and fix a real vulnerability at my employer.", author: "Kevin N.", role: "Cloud Security Specialist" },
  ],

  articles: [
    { icon: BookOpen,      badge: "Tutorial",     badgeColor: "#e8f0fc",              badgeText: "#004890", title: "Ethical Hacking: Complete Beginner's Guide", desc: "Everything you need to start your ethical hacking journey — tools, techniques, and methodology.", readTime: "25 min" },
    { icon: MessageSquare, badge: "Interview",    badgeColor: "rgba(255,158,13,0.12)", badgeText: "#b86e00", title: "Top Cyber Security Interview Questions",      desc: "The most common technical and scenario-based questions asked in UK security analyst interviews.",  readTime: "30 min" },
    { icon: Award,         badge: "Certification",badgeColor: "rgba(52,211,153,0.12)", badgeText: "#065f46", title: "Security+ vs CEH: Which Should You Do First?", desc: "Compare the two most popular entry-level security certifications and choose the right path.",        readTime: "15 min" },
  ],

  faqs: [
    { q: "Do I need a technical background for this course?",       a: "Basic IT or networking knowledge is helpful but not required. The programme starts from cyber security fundamentals and builds progressively." },
    { q: "Is ethical hacking legal to practice?",                   a: "Yes — all labs are run in isolated, legal environments specifically built for training. You will never test systems you don't have permission to access." },
    { q: "Which certifications does this course prepare me for?",   a: "The programme prepares you for CompTIA Security+ and the Certified Ethical Hacker (CEH) certification, with dedicated mock exam sessions." },
    { q: "Is the training available online or in-person?",          a: "Both. You can attend live online from anywhere in the UK, or join in-person at our UK training centres. All sessions are recorded." },
  ],

  relatedCourses: [
    { title: "CISSP Professional Certification",  desc: "Comprehensive preparation for the gold standard in information security. Master all 8 CISSP domains.", icon: Shield,       slug: "cissp-certification"         },
    { title: "AWS Solutions Architect",           desc: "Design secure, high-availability systems on AWS with VPC, IAM, and multi-account strategy.",            icon: AlertTriangle, slug: "aws-solutions-architect"     },
    { title: "Azure DevOps with Gen AI",          desc: "Build enterprise Azure DevOps pipelines with AI-powered security and compliance automation.",           icon: Lock,          slug: "azure-devops-gen-ai"         },
    { title: "Python for Automation & Data",      desc: "Learn Python scripting for automation — essential for security tooling and exploit development.",       icon: Database,      slug: "python-automation-data"      },
    { title: "Data Science & MLOps",              desc: "Apply machine learning to security data analysis and anomaly detection pipelines.",                     icon: BarChart3,     slug: "data-science-mlops"          },
    { title: "AWS DevOps with Gen AI",            desc: "Master AWS DevOps and integrate AI into secure delivery pipelines for enterprise teams.",               icon: Eye,           slug: "aws-devops-gen-ai"           },
  ],
};

export const Route = createFileRoute("/cyber-security-course")({
  head: () => ({
    meta: [
      { title: "Cyber Security Course — Live Training UK | Ismart Skills" },
      { name: "description", content: "12-week live cyber security training programme for UK professionals. Ethical hacking, penetration testing, SOC skills, cloud security — with CompTIA Security+ and CEH certification prep." },
    ],
  }),
  component: () => <CourseTemplatePage data={data} />,
});
