// Portfolio data configuration. Edit this file to update any content on the website.
const PORTFOLIO_DATA = {
  profile: {
    name: "Justin Lee",
    title: "AI Engineer & Fullstack Developer",
    recruitingMode: true,
    recruitingStatus: "Recruiting: Seeking Opportunities",
    subtitle: "I'm looking for internship opportunities in Spring/Summer 2027.",
    bio: "I am a builder who loves bridging the gap between cutting-edge Artificial Intelligence and robust software engineering. Whether orchestrating multi-agent systems using LangChain, fine-tuning LLM prompts, or architecting modular fullstack backends with FastAPI and PostgreSQL, I focus on building products that solve real needs. Currently, I work as an AI Engineer at OpenStax, leading a team of developers to build interactive education platforms powered by AI. I thrive in collaborative environments, hackathons, and projects that challenge me to learn new technologies quickly.",
    email: "jl537@rice.edu",
    phone: "(919) 381-2262",
    linkedin: "https://linkedin.com/in/jkl565",
    github: "https://github.com/jbinlee"
  },
  education: {
    school: "Rice University",
    degree: "Bachelor of Science in Computer Science",
    minor: "Minor in Data Science",
    graduation: "Expected Graduation: May 2027",
    coursework: [
      "Data Structures",
      "Algorithms",
      "Object-Oriented Programming",
      "Computer Architecture",
      "Linear Algebra",
      "Multivariable Calculus"
    ]
  },
  stats: [
    {
      number: "5.5K+",
      label: "Platform Users"
    },
    {
      number: "$500K",
      label: "Scholarship Matches"
    },
    {
      number: "2",
      label: "HackRice Awards"
    }
  ],
  experience: [
    {
      role: "AI Engineer",
      company: "OpenStax",
      period: "May 2026 - Present",
      bullets: [
        "Led a 5-engineer team to architect an interactive branching-scenario application, scaling system design from schema definition to real-time production UI generating 50+ medical training modules.",
        "Engineered an automated book-ingestion pipeline (BeautifulSoup, markdownify) converting 5,000+ pages of unstructured textbooks into optimized Markdown, cutting data prep latency from 100+ hours to minutes.",
        "Designed a model-agnostic backend orchestrating interchangeable LLM endpoints (Claude/Gemini) and implemented rigorous prompt tuning to achieve an 80% reduction in out-of-spec content payloads.",
        "Architected a Next.js + FastAPI + PostgreSQL stack modeling narrative logic as a production directed graph, utilizing custom React components to render and mutate AI-generated JSON nodes dynamically."
      ]
    },
    {
      role: "Software Engineer",
      company: "Rice University Digital Health Initiative",
      period: "Nov 2025 - Mar 2026",
      bullets: [
        "Engineered a multi-tenant MVP marketplace matching multidisciplinary academic researchers with localized clinical laboratory opportunities using advanced multi-layered eligibility and skill-tagging queries.",
        "Designed high-throughput data intake channels and fast role-based search pipelines that accelerated cross-institutional lab staffing and dramatically minimized time-to-fill tracking for medical research listings.",
        "Collaborated directly with Rice faculty and Houston Methodist clinical stakeholders to construct product roadmaps, successfully initiating an early adoption pipeline to secure immediate, active user validation."
      ]
    },
    {
      role: "Founding Engineer",
      company: "Scholarhive",
      period: "Oct 2024 - Jan 2025",
      bullets: [
        "Scaled an edtech platform to 5.5K+ users and generated $500K in verified scholarship matches; advanced company to the YC W25 interview pool.",
        "Slashed API p95 response latencies by 85% (from 800ms down to 120ms) by designing targeted SQL indexes and deploying high-performance Redis caching infrastructure on AWS.",
        "Developed an internal ML-driven matching engine achieving 94% precision, automating complex multi-tenant data ingest across 10+ distinct sources via an optimized ETL data pipeline.",
        "Boosted user application conversion rates by 30% by engineering a highly responsive Next.js discovery UI backed by efficient server-side data filtering and custom match-ranking algorithms."
      ]
    }
  ],
  projects: [
    {
      title: "OwlConnect",
      award: "🏆 2nd Place Overall @ HackRice (100+ Teams)",
      categories: "ai fullstack",
      github: "https://github.com/jbinlee/owlconnect",
      description: "An AI-powered mentorship platform for Rice University students matching academic profiles to professional trajectories using All-MiniLM-L6-v2 vector embeddings and a LangChain multi-agent negotiation system to optimize match quality.",
      bullets: [
        "Built an agentic matchmaking platform pairing academic cohorts using an embedding model and a LangChain multi-agent negotiation system; implemented Next.js, FastAPI, and WebSocket-driven visualizations."
      ],
      technologies: ["LangChain", "FastAPI", "MongoDB", "Next.js", "WebSockets", "MCP"]
    },
    {
      title: "HootPlanner",
      award: "🏆 1st Place Overall @ HackRice (100+ Teams)",
      categories: "ai fullstack",
      github: "https://github.com/jbinlee/hootplanner",
      description: "An AI-powered academic course recommendation engine that pre-processes catalog data using Pandas, creates 384-dimensional embeddings via all-MiniLM-L12-v2, and utilizes LanceDB for high-speed semantic search over student preferences.",
      bullets: [
        "Developed an AI-driven course recommendation platform using Pandas ETL pipelines, Hugging Face sentence embeddings, and a LanceDB vector database backend to achieve low-latency semantic search matching."
      ],
      technologies: ["React", "TypeScript", "FastAPI", "Pandas", "LanceDB", "Vector Embeddings"]
    }
  ],
  skills: {
    languages: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL"],
    technologies: ["React", "Next.js", "FastAPI", "Node.js", "Pandas", "NumPy", "Redis", "LangChain", "Hugging Face"],
    databases: ["PostgreSQL", "MongoDB", "MySQL", "LanceDB"]
  }
};
