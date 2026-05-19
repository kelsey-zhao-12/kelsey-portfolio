export type TimelineItem = {
  title: string;
  organization: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type ProjectItem = {
  name: string;
  period: string;
  description: string;
  outcomes: string[];
};

export type FocusArea = {
  label: string;
  title: string;
  description: string;
  points: string[];
};

export type SkillCategory = {
  label: string;
  title: string;
  description: string;
  items: string[];
};

export const profile = {
  name: "Kelsey Zhao",
  role: "Software Engineer",
  location: "San Francisco Bay Area",
  phone: "213-512-9940",
  email: "kelseyzh12@gmail.com",
  linkedin: "https://linkedin.com/in/shuwen-kelsey-zhao-9791641a5/",
  intro:
    "I build software for real production environments and I am especially drawn to backend systems that need to scale, coordinate across services, and stay reliable under operational pressure.",
  now:
    "I put myself most clearly around backend engineering, distributed systems, queue-driven workflows, Linux-heavy debugging, and infrastructure that supports global deployments.",
};

export const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    note: "Best for job opportunities, introductions, or technical conversations.",
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
    note: "Available for direct conversations when needed.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shuwen-kelsey-zhao-9791641a5",
    href: profile.linkedin,
    note: "A quick way to connect and see the high-level professional timeline.",
    external: true,
  },
];

export const focusAreas: FocusArea[] = [
  {
    label: "Primary focus",
    title: "Backend and scalable systems",
    description:
      "The clearest signal across my recent work is backend ownership for systems that coordinate many moving parts.",
    points: [
      "Concurrent backend services in Python and Node.js.",
      "Service decomposition, migration planning, and phased rollouts with zero downtime.",
      "Production-facing workflows that need strong reliability and clear operational behavior.",
    ],
  },
  {
    label: "Systems angle",
    title: "Linux debugging and service-level reasoning",
    description:
      "Several of my projects show how I approach startup paths, deployment issues, hardware edge cases, and environment-specific failures.",
    points: [
      "Linux-based debugging across service startup, port mappings, and environment behavior.",
      "Experience working close to hardware, BMC interfaces, and production-line systems.",
      "Comfort tracing issues that span application logic, infra, and machine-level behavior.",
    ],
  },
  {
    label: "Platform angle",
    title: "Infrastructure and distributed delivery",
    description:
      "I also have strong experience in infrastructure ownership, especially when it supports distributed backend systems.",
    points: [
      "Kubernetes deployments across regions with Docker, Ansible, Drone CI, and ArgoCD.",
      "Messaging and distributed coordination patterns using Kafka and Zookeeper.",
      "Production rollouts, rollback safety, and data consistency across global environments.",
    ],
  },
];

export const experience: TimelineItem[] = [
  {
    title: "Software Engineer, Backend",
    organization: "Picarro, Inc.",
    location: "Santa Clara, CA",
    period: "Feb 2026 - Present",
    summary:
      "Building backend systems for monitoring products where dependable service communication, startup behavior, and production debugging matter.",
    highlights: [
      "Architect and develop Python backend services using gRPC and concurrent service patterns for reliable real-time communication.",
      "Design and maintain integrations across distributed monitoring systems, improving reliability through Linux-based debugging and startup-flow analysis.",
      "Use AI-assisted development tools and coding agents to accelerate debugging, code exploration, and system integration work.",
    ],
  },
  {
    title: "Software Engineer, Full Stack",
    organization: "Super Micro Computer, Inc.",
    location: "San Jose, CA",
    period: "Dec 2024 - Feb 2026",
    summary:
      "Built full-stack and backend-heavy systems for production operations, automation, infrastructure rollouts, and globally distributed environments.",
    highlights: [
      "Built internal web applications with TypeScript, React, Node.js, and Docker that supported global production-line workflows.",
      "Improved backend performance with GraphQL adoption, Apollo integration, and SQL optimization.",
      "Deployed globally distributed Kubernetes infrastructure with Rook-Ceph storage via Ansible and Drone CI, supporting 99.9% availability.",
      "Worked on zero-downtime migration patterns, DNS and load-balancer rollout coordination, and phased system decomposition.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Hardware Bring-Up Automation Pipeline",
    period: "Aug 2025 - Present",
    description:
      "An end-to-end provisioning pipeline for newly manufactured servers that replaced a manual bring-up process on the production line.",
    outcomes: [
      "Built backend workflows for product key validation, remote attestation, and certificate-signing flows.",
      "Implemented a multithreaded Node.js task engine with Kafka that could provision hundreds of servers concurrently.",
      "Added real-time logging and monitoring dashboards so operators could track per-server status and error conditions.",
    ],
  },
  {
    name: "Database Cluster Migration",
    period: "May 2025 - Present",
    description:
      "A zero-downtime migration strategy for ScyllaDB clusters across four global data centers with rollback safety during cutover.",
    outcomes: [
      "Implemented dual-write behavior to replicate writes to both v5 and v6 clusters in parallel with low latency under high TPS.",
      "Improved cluster query performance through data placement, streaming configuration, and compaction tuning.",
      "Reduced developer setup friction with region-specific Linux config linking and clearer environment isolation.",
    ],
  },
  {
    name: "ScanList Server Decomposition & GraphQL Transformation",
    period: "Mar 2025 - Jul 2025",
    description:
      "A backend decoupling effort that extracted ScanList logic from a legacy monolith into a dedicated service.",
    outcomes: [
      "Led service decomposition work that enabled modular development and independent scaling.",
      "Replaced REST endpoints with GraphQL resolvers and improved frontend data flow through Apollo cache strategies.",
      "Implemented phased request-forwarding logic for backward-compatible rollout with zero downtime.",
    ],
  },
];

export const skills: SkillCategory[] = [
  {
    label: "Backend focus",
    title: "Distributed services and scalable backend systems",
    description:
      "This is the area I want to emphasize most strongly throughout the site.",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express",
      "gRPC",
      "GraphQL",
      "REST APIs",
      "Apache Kafka",
      "Zookeeper",
      "ScyllaDB",
      "Cassandra",
      "MySQL",
      "PostgreSQL",
      "MS SQL",
      "SQLite",
    ],
  },
  {
    label: "Systems focus",
    title: "Linux debugging and system-level problem solving",
    description:
      "This bucket captures the lower-level operational work that often sits underneath my backend delivery work.",
    items: [
      "Linux",
      "Service startup debugging",
      "Port mapping analysis",
      "Hardware bring-up workflows",
      "BMC / Redfish integration",
      "Remote attestation flows",
      "Certificate provisioning",
      "Performance tuning",
      "Production issue resolution",
    ],
  },
  {
    label: "Infrastructure focus",
    title: "Platform, deployment, and distributed operations",
    description:
      "These tools support my backend and distributed-system work rather than replacing that emphasis.",
    items: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Ansible",
      "ArgoCD",
      "Drone CI",
      "AWS",
      "Rook-Ceph",
      "Grafana",
      "Prometheus",
      "DNS / Load Balancers",
      "Blue-green deployments",
      "Canary releases",
    ],
  },
  {
    label: "Full-stack support",
    title: "Frontend and product-facing delivery",
    description:
      "These are useful supporting skills for internal tooling, dashboards, and operator-facing workflows.",
    items: [
      "React",
      "Apollo Client",
      "MUI",
      "HTML",
      "CSS",
      "Jest",
      "Git",
      "Go",
      "Java",
      "C++",
      "C",
    ],
  },
];

export const education = {
  school: "Northeastern University",
  location: "San Jose, CA",
  degree: "Master of Science in Computer Science",
  period: "Jan 2023 - Dec 2024",
};

export const funFacts = [
  {
    label: "Engineering fun fact",
    title: "I like backend work that makes operations quieter",
    body: "A lot of my favorite projects reduce manual steps, improve observability, or make rollouts safer for the people who rely on the system every day.",
  },
  {
    label: "Problem type",
    title: "Migration projects are genuinely fun for me",
    body: "I enjoy phased cutovers, dual-write strategies, compatibility layers, and the design decisions required to move real systems without downtime.",
  },
  {
    label: "Work style",
    title: "I like debugging across boundaries",
    body: "The problems I find most interesting usually span backend logic, Linux environments, infrastructure behavior, and the realities of production hardware.",
  },
  {
    label: "Systems interest",
    title: "Queues, concurrency, and distributed coordination keep pulling me in",
    body: "Messaging-backed workflows, scalable task execution, and globally distributed deployments are the kinds of systems I want to keep building.",
  },
];

export const nextSections = [
  "Add a dedicated Projects page with one page per case study.",
  "Replace the current fun facts with more personal facts, hobbies, or non-work details.",
  "Add a short About page that mixes technical positioning with more personality.",
];
