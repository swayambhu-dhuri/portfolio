import { web, mobile, backend, creator, ufaber, bny } from "../assets";

export const navLinks = [
  { id: "home",       title: "Home"       },
  { id: "about",      title: "About"      },
  { id: "experience", title: "Experience" },
  { id: "projects",   title: "Projects"   },
  { id: "contact",    title: "Contact"    },
];

const services = [
  { title: "Full Stack Developer",       icon: web     },
  { title: "Backend Engineer",           icon: backend  },
  { title: "GenAI and LLM Integration",  icon: creator  },
  { title: "Cloud and DevOps",           icon: mobile   },
];

export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "Java",       icon: "https://cdn.simpleicons.org/openjdk/ED8B00"   },
      { name: "Python",     icon: "https://cdn.simpleicons.org/python/3776AB"    },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6"},
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E"},
      { name: "SQL",        icon: null },
      { name: "C",          icon: null },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot",  icon: "https://cdn.simpleicons.org/springboot/6DB33F"    },
      { name: "FastAPI",      icon: "https://cdn.simpleicons.org/fastapi/009688"       },
      { name: "Django",       icon: "https://cdn.simpleicons.org/django/44B78B"        },
      { name: "Node.js",      icon: "https://cdn.simpleicons.org/nodedotjs/339933"     },
      { name: "REST APIs",    icon: null },
      { name: "Microservices",icon: null },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js",    icon: "https://cdn.simpleicons.org/react/61DAFB"       },
      { name: "Next.js",     icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF"   },
      { name: "Tailwind CSS",icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "AG Grid",     icon: null },
      { name: "ShadCN",      icon: null },
    ],
  },
  {
    category: "GenAI and ML",
    skills: [
      { name: "LangChain",         icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
      { name: "PyTorch",           icon: "https://cdn.simpleicons.org/pytorch/EE4C2C"   },
      { name: "GPT-4",             icon: "https://cdn.simpleicons.org/openai/FFFFFF"    },
      { name: "LLM Integration",   icon: null },
      { name: "Prompt Engineering",icon: null },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1"        },
      { name: "MySQL",      icon: "https://cdn.simpleicons.org/mysql/4479A1"             },
      { name: "MongoDB",    icon: "https://cdn.simpleicons.org/mongodb/47A248"           },
      { name: "DynamoDB",   icon: "https://cdn.simpleicons.org/amazondynamodb/4053D6"   },
      { name: "Redis",      icon: "https://cdn.simpleicons.org/redis/FF4438"             },
      { name: "Firebase",   icon: "https://cdn.simpleicons.org/firebase/FFCA28"          },
      { name: "Neo4j",      icon: "https://cdn.simpleicons.org/neo4j/008CC1"             },
    ],
  },
  {
    category: "Cloud and DevOps",
    skills: [
      { name: "AWS",        icon: "https://cdn.simpleicons.org/amazonwebservices/FF9900" },
      { name: "GCP",        icon: "https://cdn.simpleicons.org/googlecloud/4285F4"       },
      { name: "Docker",     icon: "https://cdn.simpleicons.org/docker/2496ED"            },
      { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5"        },
      { name: "Terraform",  icon: "https://cdn.simpleicons.org/terraform/7B42BC"         },
      { name: "Jenkins",    icon: "https://cdn.simpleicons.org/jenkins/D24939"           },
    ],
  },
  {
    category: "Monitoring and Observability",
    skills: [
      { name: "Grafana",      icon: "https://cdn.simpleicons.org/grafana/F46800"  },
      { name: "Sentry",       icon: "https://cdn.simpleicons.org/sentry/362D59"   },
      { name: "Health Checks",icon: null },
    ],
  },
  {
    category: "Engineering Practices",
    skills: [
      { name: "System Design",      icon: null },
      { name: "Distributed Systems",icon: null },
      { name: "SOLID Principles",   icon: null },
      { name: "Agile / Scrum",      icon: null },
      { name: "Code Reviews",       icon: null },
    ],
  },
];

const experiences = [
  {
    title: "Software Development Engineer II",
    company_name: "CVS Health",
    icon: "/cvs-health.svg",
    iconInitial: "CVS",
    iconColor: "#CC0000",
    iconBg: "#ffffff",
    date: "Aug 2025 to Present",
    location: "Irving, TX",
    points: [
      "Designed and developed 10+ scalable RESTful services powering an AI-driven appeals platform serving 100+ pharmacists and processing 40,000+ monthly appeals.",
      "Optimized report generation pipeline by replacing synchronous REST calls with streamed data transfer and subprocess-based Excel generation, reducing export latency from 30s to 3s.",
      "Architected end-to-end authentication system integrating PingFederate SSO with a custom auth service, implementing JWKS-based token validation and per-request ABAC enforcement.",
      "Delivered a high-performance React frontend with AG Grid, reducing appeals coordinator decision time from 17 minutes to under 2 minutes.",
    ],
    techStack: ["FastAPI", "React", "AG Grid", "PingFederate", "JWT", "Python"],
  },
  {
    title: "Software Development Engineer",
    company_name: "KeeperAI",
    icon: null,
    iconInitial: "K",
    iconBg: "#7C3AED",
    iconColor: "#ffffff",
    date: "Jan 2025 to Jul 2025",
    location: "New York, NY",
    points: [
      "Led zero-downtime migration of legacy monolith to microservices on AWS EKS using Docker, Nginx, and Terraform, cutting deployment friction by 80%.",
      "Architected real-time RESTful APIs with FastAPI and Firebase backing sentiment dashboards adopted by 10+ internal teams.",
      "Built secure, fault-tolerant customer onboarding flows with React.js and AWS Lambda on a serverless stack.",
      "Established CI-ready container pipelines with Docker Compose and async routing patterns across Python services.",
    ],
    techStack: ["FastAPI", "Firebase", "React", "Docker", "AWS EKS", "Terraform", "Nginx"],
  },
  {
    title: "Software Development Engineer",
    company_name: "Bank of New York Mellon",
    icon: bny,
    iconBg: "#ffffff",
    date: "Oct 2023 to Jan 2025",
    location: "New York, NY",
    points: [
      "Engineered a large-scale distributed data governance platform using Java, Spring Boot, and React.js microservices, processing real-time metrics from 200+ data sources across 34 distributed systems.",
      "Developed an AI-powered test automation assistant integrating a fine-tuned GPT-3.5 Turbo model with a Spring Boot microservice, applying responsible AI practices to auto-generate test cases and cut manual QA cycles by 70%.",
      "Built a fault-tolerant asynchronous logging infrastructure with FastAPI and Neo4j handling 10,000+ daily events, enabling proactive anomaly detection through ML pipelines.",
      "Collaborated with quality engineering teams to design a Chrome extension capturing structured browser interaction logs for automated test coverage.",
    ],
    techStack: ["Java", "Spring Boot", "React", "FastAPI", "Neo4j", "GPT-3.5", "Chrome Extension"],
  },
  {
    title: "Software Engineer",
    company_name: "uFaber Edutech",
    icon: ufaber,
    iconBg: "#ffffff",
    date: "Aug 2021 to Sep 2022",
    location: "Mumbai, India",
    points: [
      "Owned end-to-end design and delivery of an automated student request platform using Django REST Framework, reducing ticket resolution time from 4 weeks to under 2 days.",
      "Developed a GCP Cloud Function integrated with Speech-to-Text APIs and custom scoring logic to generate fluency reports across 8+ evaluation categories.",
      "Implemented CI/CD pipelines, Sentry monitoring, and health-check endpoints across containerized Django microservices, maintaining 99.95% uptime.",
    ],
    techStack: ["Django", "Python", "GCP", "Docker", "GitLab CI/CD", "Sentry"],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Swayambhu for his exceptional skills in JavaScript, data science, app development, web development, and full stack engineering. He is dependable, quick, and consistently delivers tasks on time. His innovative thinking and go-getter attitude, combined with strong communication skills, make him an invaluable asset to our team.",
    name: "Naresh Kumar Korrapati",
    designation: "Senior Vice President",
    company: "BNY Mellon",
  },
  {
    testimonial:
      "Swayambhu is a great professional to work with. We worked together at uFaber on several projects where he handled the frontend designs and API integrations while I was focused on API creation. He is keen on learning new things and keeping himself updated with the latest frameworks. His ability to deal with challenges and come up with new ideas was always an inspiration.",
    name: "Ashutosh Dhondkar",
    designation: "Software Engineer",
    company: "Karza Technologies",
  },
  {
    testimonial:
      "Swayambhu is very good at analytical thinking and a quick learner. Knows when and how to apply knowledge. He has good acumen of software development as a whole, which makes working with him easy.",
    name: "Dishank Tak",
    designation: "Backend SDE II",
    company: "Neo Wealth and Asset Management",
  },
  {
    testimonial:
      "In the short time we worked together, I found Swayambhu to be a very hard working and passionate individual who deeply values his work and asks the right questions. Proficient in both frontend and backend development, he will surely bring great value to any team he is working with.",
    name: "Cyber Naskar",
    designation: "Consulting Backend Engineer",
    company: "Alleyway Capital",
  },
];

const projects = [
  {
    name: "LiveDocs",
    description:
      "Real-time collaborative document editor with sub-100ms latency, live cursor tracking, and RBAC-secured document management. Delivers Google Docs-level functionality with a scalable, fault-tolerant architecture.",
    tags: [
      { name: "React.js",   color: "blue-text-gradient"  },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Next.js",    color: "pink-text-gradient"  },
    ],
    image: "/livedocs-preview.svg",
    source_code_link: "https://github.com/swayambhu-dhuri/liveblocks",
    demo_link: "https://liveblocks-black.vercel.app",
  },
  {
    name: "Horizon",
    description:
      "Real-time transaction tracking and secure money transfer platform with server-side authentication, live financial insights, and Plaid integration for linking external bank accounts.",
    tags: [
      { name: "Next.js",    color: "blue-text-gradient"  },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Plaid",      color: "pink-text-gradient"  },
    ],
    image: "/horizon-preview.svg",
    source_code_link: "https://github.com/swayambhu-dhuri/horizon",
    demo_link: "https://horizon-gilt-chi.vercel.app",
  },
  {
    name: "Promptopia",
    description:
      "Open-source AI prompt sharing community where developers discover, create, and remix prompts for large language models. Features Google OAuth, full CRUD, and a responsive feed with tag-based search.",
    tags: [
      { name: "Next.js",      color: "blue-text-gradient"  },
      { name: "MongoDB",      color: "green-text-gradient" },
      { name: "Google OAuth", color: "pink-text-gradient"  },
    ],
    image: "/promptopia-preview.svg",
    source_code_link: "https://github.com/swayambhu-dhuri/promptopia",
    demo_link: "https://promptopia-seven-red.vercel.app",
  },
];

const socials = [
  { link: "https://github.com/swayambhu-dhuri",              icon: "bi bi-github"     },
  { link: "https://www.linkedin.com/in/swayambhu-dhuri/",    icon: "bi bi-linkedin"   },
  { link: "https://leetcode.com/u/swayambhu-dhuri/",         icon: "bi bi-code-slash" },
];

export { services, experiences, testimonials, projects, socials };
