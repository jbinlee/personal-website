// Portfolio data configuration. Edit this file to update any content on the website.
const PORTFOLIO_DATA = {
  profile: {
    name: "Justin Lee",
    title: "AI Engineer & Fullstack Developer",
    recruitingMode: true,
    recruitingStatus: "Recruiting: Seeking Internships",
    subtitle: "I'm looking for an internship in Summer 2027 or Spring 2027.",
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
    graduation: "Expected Graduation: May 2028",
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
      number: "2",
      label: "HackRice Awards"
    },
    {
      number: "1st/2nd",
      label: "Hackathon Placements"
    }
  ],
  experience: [
    {
      role: "AI Engineer",
      company: "OpenStax",
      period: "May 2026 - Present",
      bullets: [
        "Led 5 engineers in development of an interactive branching-scenario platform from schema design to deployed UI, generating 50+ nursing education scenarios.",
        "Built an automated ingestion pipeline (BeautifulSoup, markdownify) that parsed 5 OpenStax textbooks (1,000+ pages each) into structured Markdown, cutting content prep time from 100+ hours to minutes.",
        "Designed the system to run on either Claude or Gemini interchangeably and tuned prompts so generated content followed formatting standards, cutting out-of-spec outputs by 80%.",
        "Architected a Next.js + FastAPI + PostgreSQL stack modeling narrative logic as a directed graph, with React components rendering and editing AI-generated JSON nodes in real time."
      ]
    },
    {
      role: "Software Engineer",
      company: "Rice University Digital Health Initiative",
      period: "Nov 2025 - Mar 2026",
      bullets: [
        "Built an MVP marketplace matching undergraduate, graduate, and PhD students to medical research projects with layered eligibility, skill tags, and relevance ranking.",
        "Designed a structured intake that turns brief project inputs into conversion-optimized opportunity listings with clear scope, contact, and timelines, improving applicant quality.",
        "Implemented role-based access, candidate profiles, and fast search/filter pipelines to surface both short- and long-term projects and accelerate staffing across labs.",
        "Partnered with a Rice professor and Houston Methodist stakeholders to define the roadmap; MVP launched with a committed client pipeline providing real users and immediate adoption signals."
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
      technologies: ["LangChain", "FastAPI", "MongoDB", "Next.js", "WebSockets", "MCP"]
    },
    {
      title: "HootPlanner",
      award: "🏆 1st Place Overall @ HackRice (100+ Teams)",
      categories: "ai fullstack",
      github: "https://github.com/jbinlee/hootplanner",
      description: "An AI-powered academic course recommendation engine that pre-processes catalog data using Pandas, creates 384-dimensional embeddings via all-MiniLM-L12-v2, and utilizes LanceDB for high-speed semantic search over student preferences.",
      technologies: ["React", "TypeScript", "FastAPI", "Pandas", "LanceDB", "Vector Embeddings"]
    }
  ],
  skills: {
    languages: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL"],
    technologies: ["React", "Next.js", "FastAPI", "Node.js", "Pandas", "NumPy", "LangChain", "Hugging Face"],
    databases: ["PostgreSQL", "MongoDB", "MySQL", "LanceDB"]
  }
};
