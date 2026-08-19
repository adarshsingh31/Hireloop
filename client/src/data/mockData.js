// Mock Data for HireLoop AI Campus Recruitment Platform

export const PLATFORM_STATS = [
  {
    id: 1,
    label: 'Campus Placement Rate',
    value: '98.4%',
    subtext: 'Across 120+ partner universities',
    icon: 'Award',
    trend: '+4.2% YoY'
  },
  {
    id: 2,
    label: 'Active Hiring Partners',
    value: '450+',
    subtext: 'Global tech & enterprise leaders',
    icon: 'Building2',
    trend: '85 new this season'
  },
  {
    id: 3,
    label: 'Highest CTC Offered',
    value: '₹54 LPA',
    subtext: 'Average campus package ₹14.8 LPA',
    icon: 'TrendingUp',
    trend: 'Top 10% get > ₹24 LPA'
  },
  {
    id: 4,
    label: 'AI Interviews Simulated',
    value: '85,000+',
    subtext: 'Instant feedback & score breakdown',
    icon: 'Bot',
    trend: '94% student confidence score'
  }
];

export const AI_FEATURES = [
  {
    id: 'interview-ai',
    title: 'Adaptive AI Mock Interviewer',
    description: 'Dynamic conversational AI that adjusts technical depth based on your speech and answers in real-time.',
    badge: 'Real-Time Voice & Text',
    icon: 'Mic',
    highlight: 'Instant metric reports on communication, syntax, and problem-solving accuracy.',
    stats: '15+ role specializations'
  },
  {
    id: 'resume-ai',
    title: 'ATS Resume Scorer & Enhancer',
    description: 'Deep neural analysis of student resumes against recruiter job specifications with keyword optimization.',
    badge: '99% ATS Match Accuracy',
    icon: 'FileCheck',
    highlight: 'Auto-generates impactful bullet points tailored to target job descriptions.',
    stats: 'Instant PDF export'
  },
  {
    id: 'matching-ai',
    title: 'Smart Candidate Matching',
    description: 'Recruiters filter thousands of applications instantly through AI-evaluated candidate ranking and skill graphs.',
    badge: '70% Faster Shortlisting',
    icon: 'Sparkles',
    highlight: 'Predicts candidate drive performance and cultural fit based on verified credentials.',
    stats: '0% Unconscious bias'
  },
  {
    id: 'analytics-ai',
    title: 'Predictive Placement Analytics',
    description: 'College T&P cells track batch performance, predict hiring bottlenecks, and identify students needing training.',
    badge: 'T&P Intelligence',
    icon: 'BarChart3',
    highlight: 'Automated 1-click batch eligibility verification and company approval workflows.',
    stats: 'Automated NAAC/NIRF reporting'
  }
];

export const ROLE_BENEFITS = {
  students: {
    title: 'For Students & Job Seekers',
    subtitle: 'From campus to your dream corporate offer with end-to-end AI mentorship',
    badge: 'Student Portal',
    points: [
      {
        title: 'Unlimited AI Mock Interviews',
        desc: 'Practice technical DSA, System Design, and HR rounds 24/7 with realistic role prompts.'
      },
      {
        title: 'Automated Drive Eligibility Alerts',
        desc: 'Get matched with campus & off-campus drives that match your CGPA, batch, and branch criteria.'
      },
      {
        title: 'Built-in ATS Resume Builder',
        desc: 'Create industry-standard resumes that rank at the top of recruiter search queries.'
      },
      {
        title: 'One-Click Easy Applications',
        desc: 'Apply to verified campus drives with pre-vetted academic profiles in seconds.'
      }
    ],
    demoRoute: '/student/dashboard',
    ctaText: 'Explore Student Portal'
  },
  recruiters: {
    title: 'For Companies & Recruiters',
    subtitle: 'Cut time-to-hire by 70% with intelligent campus drive automation',
    badge: 'Recruiter Hub',
    points: [
      {
        title: 'Precision Shortlisting Pipeline',
        desc: 'Filter candidates by verified CGPA, backlogs, technical stack, and AI interview score.'
      },
      {
        title: 'Instant Campus Job Broadcasting',
        desc: 'Post job descriptions with customized eligibility thresholds in under 2 minutes.'
      },
      {
        title: 'Automated Applicant Tracking (ATS)',
        desc: 'Drag-and-drop status stages, bulk invite candidates, and download compiled candidate dossiers.'
      },
      {
        title: 'Multi-Campus Drive Coordination',
        desc: 'Reach top tier-1, tier-2, and tier-3 colleges simultaneously from a unified portal.'
      }
    ],
    demoRoute: '/recruiter/dashboard',
    ctaText: 'Explore Recruiter Hub'
  },
  admin: {
    title: 'For Placement Cells & Admins',
    subtitle: 'Complete institutional visibility, verified records, and NAAC/NIRF-ready analytics',
    badge: 'Placement Cell Suite',
    points: [
      {
        title: 'Real-time Placement Dashboards',
        desc: 'Interactive visual charts displaying branch-wise placement percentages and package distributions.'
      },
      {
        title: 'Company Registration Verification',
        desc: 'Verify and approve recruiting companies with policy checks before granting student access.'
      },
      {
        title: 'Student Eligibility & Backlog Checks',
        desc: 'Centralized master directory enforcing strict campus recruitment policy criteria automatically.'
      },
      {
        title: '1-Click Report Generation',
        desc: 'Export audit-compliant Excel and PDF reports for institutional accreditation in seconds.'
      }
    ],
    demoRoute: '/admin/dashboard',
    ctaText: 'Explore T&P Dashboard'
  }
};

export const FEATURED_JOBS = [
  {
    id: 1,
    title: 'Software Development Engineer - I',
    company: 'Nexus Cloud Technologies',
    logo: 'NT',
    logoBg: 'bg-indigo-600',
    location: 'Bangalore / Hybrid',
    salary: '₹16 - ₹20 LPA',
    jobType: 'Full-Time',
    experience: 'Fresher / 2026 Batch',
    minCgpa: 7.5,
    eligibleBranches: ['CSE', 'IT', 'ECE'],
    skills: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    deadline: '2026-09-15',
    applicantsCount: 142,
    badge: 'Top Tier Drive',
    isNew: true
  },
  {
    id: 2,
    title: 'AI / Machine Learning Engineer',
    company: 'CognitiveScale Systems',
    logo: 'CS',
    logoBg: 'bg-purple-600',
    location: 'Hyderabad / Onsite',
    salary: '₹22 - ₹28 LPA',
    jobType: 'Full-Time',
    experience: '2026 Batch',
    minCgpa: 8.0,
    eligibleBranches: ['CSE', 'AI & DS', 'IT'],
    skills: ['Python', 'PyTorch', 'Transformers', 'FastAPI'],
    deadline: '2026-09-20',
    applicantsCount: 98,
    badge: 'AI Exclusive',
    isNew: true
  },
  {
    id: 3,
    title: 'Associate Cloud Solutions Architect',
    company: 'Apex Global Infrastructure',
    logo: 'AG',
    logoBg: 'bg-blue-600',
    location: 'Pune / Remote',
    salary: '₹14 - ₹18 LPA',
    jobType: 'Full-Time',
    experience: '2026 Batch',
    minCgpa: 7.0,
    eligibleBranches: ['CSE', 'IT', 'ECE', 'EE'],
    skills: ['AWS', 'Kubernetes', 'Linux', 'Go'],
    deadline: '2026-09-28',
    applicantsCount: 215,
    badge: 'High Intake',
    isNew: false
  },
  {
    id: 4,
    title: 'Frontend Product Engineer (Intern + PPO)',
    company: 'HyperScale Fintech',
    logo: 'HF',
    logoBg: 'bg-emerald-600',
    location: 'Gurugram / Hybrid',
    salary: '₹60k/mo (Stipend) → ₹18 LPA PPO',
    jobType: 'Internship + PPO',
    experience: 'Final Year Students',
    minCgpa: 7.2,
    eligibleBranches: ['All Engineering Branches'],
    skills: ['TypeScript', 'Next.js', 'TailwindCSS', 'GraphQL'],
    deadline: '2026-09-10',
    applicantsCount: 310,
    badge: 'PPO Included',
    isNew: true
  },
  {
    id: 5,
    title: 'Embedded Systems & IoT Engineer',
    company: 'AeroDynamics Automations',
    logo: 'AA',
    logoBg: 'bg-amber-600',
    location: 'Chennai / Onsite',
    salary: '₹12 - ₹15 LPA',
    jobType: 'Full-Time',
    experience: '2026 Batch',
    minCgpa: 7.0,
    eligibleBranches: ['ECE', 'EEE', 'Mechanical', 'Mechatronics'],
    skills: ['C++', 'Microcontrollers', 'RTOS', 'CAN Protocol'],
    deadline: '2026-10-05',
    applicantsCount: 64,
    badge: 'Core Engineering',
    isNew: false
  },
  {
    id: 6,
    title: 'Data Platform Analyst',
    company: 'Quantum Matrix Financial',
    logo: 'QM',
    logoBg: 'bg-rose-600',
    location: 'Mumbai / Hybrid',
    salary: '₹15 - ₹19 LPA',
    jobType: 'Full-Time',
    experience: '2026 Batch',
    minCgpa: 7.8,
    eligibleBranches: ['CSE', 'IT', 'Mathematics', 'Statistics'],
    skills: ['SQL', 'Snowflake', 'Python', 'PowerBI'],
    deadline: '2026-09-25',
    applicantsCount: 180,
    badge: 'Finance Tech',
    isNew: false
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Aakash Verma',
    role: 'Placed at Nexus Cloud Technologies (₹20 LPA)',
    college: 'Delhi Technological University',
    avatar: '👨‍🎓',
    quote: 'The AI Mock Interviewer on HireLoop pinpointed weaknesses in my React lifecycle concepts and suggested concise answers that matched what the actual technical panel asked!'
  },
  {
    id: 2,
    name: 'Sneha Kulkarni',
    role: 'Lead Campus Talent Partner',
    college: 'CognitiveScale Systems',
    avatar: '👩‍💼',
    quote: 'HireLoop changed our campus recruitment completely. Filtering 1,500 applications took 15 minutes instead of 3 days thanks to verified CGPA filters and AI skill scoring.'
  },
  {
    id: 3,
    name: 'Dr. Rajesh Sharma',
    role: 'Head of Training & Placement',
    college: 'National Institute of Technology',
    avatar: '👨‍🏫',
    quote: 'Generating NAAC accreditation placement reports used to take weeks of manual Excel consolidation. HireLoop gives us real-time, tamper-proof placement statistics with one click.'
  }
];

export const HIRING_PARTNERS = [
  'Google Cloud', 'Microsoft', 'Amazon AWS', 'Goldman Sachs', 
  'Adobe', 'Salesforce', 'Infosys Innovate', 'TCS Prime', 
  'Cognizant Digital', 'Qualcomm', 'Intel Labs', 'Oracle'
];

export const FAQS = [
  {
    question: 'How does the AI Mock Interview system work?',
    answer: 'The system uses state-of-the-art conversational AI tailored to specific engineering roles (Frontend, Backend, AI/ML, Embedded). It asks conceptual and coding questions, analyzes your responses for clarity and technical depth, and provides immediate feedback with model answers.'
  },
  {
    question: 'Can recruiters verify students’ academic credentials?',
    answer: 'Yes! HireLoop integrates directly with the College Placement Cell (Admin), ensuring that student CGPAs, branch records, and active backlog statuses are officially verified before applications are submitted.'
  },
  {
    question: 'How do students apply to campus drives?',
    answer: 'Once logged in as a student with your verified academic profile, you can browse active campus drives. If you meet the company criteria (CGPA, Branch, Batch), you can apply with one click.'
  },
  {
    question: 'Is HireLoop free for students?',
    answer: 'Yes, the core campus placement portal, drive applications, and standard resume builder are completely free for registered students of partner universities.'
  }
];

export const INTERVIEW_QUESTION_BANKS = {
  'Frontend Developer': [
    {
      id: 1,
      question: 'Can you explain how virtual DOM reconciliation works in React 19, and why unique keys are crucial in array rendering?',
      category: 'Core React & Performance',
      hint: 'Mention diffing algorithm, Fiber tree, and reconciliation performance.'
    },
    {
      id: 2,
      question: 'What is the difference between useEffect, useLayoutEffect, and the new React 19 useActionState hook?',
      category: 'React Hooks & State',
      hint: 'Explain synchronous paint blocking vs asynchronous execution.'
    },
    {
      id: 3,
      question: 'How does CSS grid differ from flexbox, and when would you use container queries over media queries?',
      category: 'Modern CSS & Layout',
      hint: 'Mention 2D layout vs 1D layout and component-level responsiveness.'
    },
    {
      id: 4,
      question: 'How do you optimize Core Web Vitals (LCP, INP, CLS) in a large single-page web application?',
      category: 'Web Performance & CWV',
      hint: 'Discuss code-splitting, lazy loading, font preloading, and reducing main-thread blocking.'
    },
    {
      id: 5,
      question: 'Explain JavaScript closures and how they can lead to memory leaks if not handled carefully.',
      category: 'JavaScript Fundamentals',
      hint: 'Discuss lexical scoping, retainers in event listeners, and timers.'
    }
  ],
  'Backend Developer': [
    {
      id: 1,
      question: 'Explain the difference between SQL and NoSQL databases. When would you choose PostgreSQL over MongoDB for a financial ledger?',
      category: 'Database Architecture',
      hint: 'Focus on ACID properties, relations, transactions, and eventual consistency.'
    },
    {
      id: 2,
      question: 'How does Node.js handle concurrent requests despite being single-threaded? Explain the Event Loop phases.',
      category: 'Node.js Runtime',
      hint: 'Explain timers, I/O polling, check phase, microtasks, and libuv thread pool.'
    },
    {
      id: 3,
      question: 'How would you design a rate-limiter for a public REST API handling 50,000 requests per minute?',
      category: 'System Design',
      hint: 'Discuss Token Bucket, Leaky Bucket, and Redis sliding-window algorithms.'
    },
    {
      id: 4,
      question: 'What is the difference between JWT and session cookies? How do you securely invalidate a JWT on logout?',
      category: 'Authentication & Security',
      hint: 'Discuss stateless nature, token blacklisting via Redis, and refresh token rotation.'
    },
    {
      id: 5,
      question: 'How does database indexing (B-Trees) speed up queries, and what is the trade-off with write operations?',
      category: 'Data Structures & Storage',
      hint: 'Discuss index seeks vs scans and insertion overhead on index trees.'
    }
  ],
  'AI / ML Engineer': [
    {
      id: 1,
      question: 'Explain the Self-Attention mechanism in Transformer architectures and why it outperforms traditional RNNs/LSTMs.',
      category: 'Deep Learning',
      hint: 'Discuss Query, Key, Value matrices, parallel computation, and long-range dependencies.'
    },
    {
      id: 2,
      question: 'How do you prevent overfitting in deep neural networks during training on small datasets?',
      category: 'Model Optimization',
      hint: 'Mention dropout, data augmentation, L1/L2 regularization, and early stopping.'
    },
    {
      id: 3,
      question: 'What is Retrieval-Augmented Generation (RAG) and how does vector database similarity search work?',
      category: 'Generative AI & LLMs',
      hint: 'Discuss embeddings, cosine similarity, chunking, and hallucination reduction.'
    }
  ]
};

export const MOCK_STUDENT_APPLICATIONS = [
  {
    id: 'APP-101',
    jobId: 1,
    company: 'Nexus Cloud Technologies',
    title: 'Software Development Engineer - I',
    package: '₹16 - ₹20 LPA',
    appliedDate: '2026-08-16',
    status: 'Shortlisted',
    statusStep: 2,
    nextRound: 'Technical Interview (Coding) on 24th Aug',
    location: 'Bangalore'
  },
  {
    id: 'APP-102',
    jobId: 4,
    company: 'HyperScale Fintech',
    title: 'Frontend Product Engineer (Intern + PPO)',
    package: '₹60k/mo → ₹18 LPA PPO',
    appliedDate: '2026-08-17',
    status: 'Applied',
    statusStep: 1,
    nextRound: 'Resume Screening under review',
    location: 'Gurugram'
  },
  {
    id: 'APP-103',
    jobId: 3,
    company: 'Apex Global Infrastructure',
    title: 'Associate Cloud Solutions Architect',
    package: '₹14 - ₹18 LPA',
    appliedDate: '2026-08-12',
    status: 'Interview Scheduled',
    statusStep: 3,
    nextRound: 'Managerial Round on 22nd Aug, 3:00 PM',
    location: 'Pune'
  }
];

export const MOCK_RECRUITER_APPLICANTS = [
  {
    id: 'CAN-1001',
    name: 'Rohan Sharma',
    email: 'rohan.sharma@campus.edu',
    phone: '+91 98765 43210',
    college: 'Apex Institute of Technology',
    branch: 'Computer Science & Engineering',
    cgpa: 8.85,
    batch: 2026,
    aiMatchScore: 96,
    aiReadiness: 94,
    skills: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'Docker'],
    jobTitle: 'Software Development Engineer - I',
    jobId: 1,
    status: 'Shortlisted',
    appliedDate: '2026-08-16',
    projects: 'HireLoop Campus Placement Portal, Real-time Collaborative Code Editor (WebSocket)',
    summary: 'Strong grasp of modern React, frontend architecture, and algorithms. Cleared AI mock interview with 94% score.',
    interviewDate: '2026-08-24 10:30 AM'
  },
  {
    id: 'CAN-1002',
    name: 'Priya Patel',
    email: 'priya.patel@campus.edu',
    phone: '+91 98123 45678',
    college: 'Apex Institute of Technology',
    branch: 'Information Technology',
    cgpa: 9.10,
    batch: 2026,
    aiMatchScore: 94,
    aiReadiness: 96,
    skills: ['Java', 'Spring Boot', 'React', 'Microservices', 'Kubernetes', 'MySQL'],
    jobTitle: 'Software Development Engineer - I',
    jobId: 1,
    status: 'Interview Scheduled',
    appliedDate: '2026-08-15',
    projects: 'E-commerce Microservices Backend, Distributed Task Scheduler',
    summary: 'Department rank 2. Deep experience in backend systems and concurrent multithreading in Java.',
    interviewDate: '2026-08-22 02:00 PM'
  },
  {
    id: 'CAN-1003',
    name: 'Ananya Verma',
    email: 'ananya.verma@campus.edu',
    phone: '+91 98234 56789',
    college: 'Apex Institute of Technology',
    branch: 'AI & Data Science',
    cgpa: 8.90,
    batch: 2026,
    aiMatchScore: 91,
    aiReadiness: 89,
    skills: ['Python', 'PyTorch', 'Transformers', 'FastAPI', 'LangChain', 'PostgreSQL'],
    jobTitle: 'AI / Machine Learning Engineer',
    jobId: 2,
    status: 'Applied',
    appliedDate: '2026-08-17',
    projects: 'Biomedical Named Entity Recognition with BioBERT, Autonomous Chatbot with RAG',
    summary: 'Specializes in LLM fine-tuning and retrieval-augmented generation pipelines.',
    interviewDate: null
  },
  {
    id: 'CAN-1004',
    name: 'Amit Kumar',
    email: 'amit.kumar@campus.edu',
    phone: '+91 98345 67890',
    college: 'Apex Institute of Technology',
    branch: 'Electronics & Communication',
    cgpa: 7.80,
    batch: 2026,
    aiMatchScore: 82,
    aiReadiness: 80,
    skills: ['C++', 'Linux', 'AWS', 'Python', 'Computer Networks'],
    jobTitle: 'Associate Cloud Solutions Architect',
    jobId: 3,
    status: 'Applied',
    appliedDate: '2026-08-18',
    projects: 'Cloud VPC Multi-Tier Infrastructure, IoT Sensor Network Monitoring',
    summary: 'Strong fundamentals in networking protocols, AWS infrastructure, and Linux systems.',
    interviewDate: null
  },
  {
    id: 'CAN-1005',
    name: 'Devendra Joshi',
    email: 'dev.joshi@campus.edu',
    phone: '+91 98456 78901',
    college: 'Apex Institute of Technology',
    branch: 'Computer Science & Engineering',
    cgpa: 9.35,
    batch: 2026,
    aiMatchScore: 98,
    aiReadiness: 97,
    skills: ['Go', 'Kubernetes', 'Docker', 'Distributed Systems', 'gRPC', 'PostgreSQL'],
    jobTitle: 'Software Development Engineer - I',
    jobId: 1,
    status: 'Offered',
    appliedDate: '2026-08-10',
    projects: 'Raft Consensus Protocol Implementation, High-Throughput Message Queue',
    summary: 'Exceptional competitive programmer (Codeforces Candidate Master) and systems engineer.',
    interviewDate: 'Completed'
  },
  {
    id: 'CAN-1006',
    name: 'Kavita Singh',
    email: 'kavita.s@campus.edu',
    phone: '+91 98567 89012',
    college: 'Apex Institute of Technology',
    branch: 'Mechanical Engineering',
    cgpa: 6.80,
    batch: 2026,
    aiMatchScore: 68,
    aiReadiness: 70,
    skills: ['Python Basics', 'AutoCAD', 'MATLAB'],
    jobTitle: 'Software Development Engineer - I',
    jobId: 1,
    status: 'Rejected',
    appliedDate: '2026-08-14',
    projects: 'Thermal Analysis of Heat Exchanger',
    summary: 'Did not meet minimum CGPA threshold (7.5) and required core fullstack skills.',
    interviewDate: null
  }
];

export const MOCK_ADMIN_STUDENTS = [
  {
    rollNo: '22CS101',
    name: 'Rohan Sharma',
    email: 'rohan.sharma@campus.edu',
    branch: 'CSE',
    cgpa: 8.85,
    backlogs: 0,
    status: 'Shortlisted',
    placedCompany: null,
    package: null,
    offersCount: 0,
    isEligible: true
  },
  {
    rollNo: '22IT104',
    name: 'Priya Patel',
    email: 'priya.patel@campus.edu',
    branch: 'IT',
    cgpa: 9.10,
    backlogs: 0,
    status: 'Interview Scheduled',
    placedCompany: null,
    package: null,
    offersCount: 0,
    isEligible: true
  },
  {
    rollNo: '22CS108',
    name: 'Devendra Joshi',
    email: 'dev.joshi@campus.edu',
    branch: 'CSE',
    cgpa: 9.35,
    backlogs: 0,
    status: 'Placed',
    placedCompany: 'Nexus Cloud Technologies',
    package: '₹20 LPA',
    offersCount: 1,
    isEligible: true
  },
  {
    rollNo: '22AI102',
    name: 'Ananya Verma',
    email: 'ananya.verma@campus.edu',
    branch: 'AI & DS',
    cgpa: 8.90,
    backlogs: 0,
    status: 'Seeking',
    placedCompany: null,
    package: null,
    offersCount: 0,
    isEligible: true
  },
  {
    rollNo: '22EC115',
    name: 'Amit Kumar',
    email: 'amit.kumar@campus.edu',
    branch: 'ECE',
    cgpa: 7.80,
    backlogs: 0,
    status: 'Seeking',
    placedCompany: null,
    package: null,
    offersCount: 0,
    isEligible: true
  },
  {
    rollNo: '22ME130',
    name: 'Kavita Singh',
    email: 'kavita.s@campus.edu',
    branch: 'Mechanical',
    cgpa: 6.80,
    backlogs: 1,
    status: 'Seeking (Eligible for Mass Drives)',
    placedCompany: null,
    package: null,
    offersCount: 0,
    isEligible: false
  },
  {
    rollNo: '22CS142',
    name: 'Siddharth Rao',
    email: 'sid.rao@campus.edu',
    branch: 'CSE',
    cgpa: 9.60,
    backlogs: 0,
    status: 'Placed',
    placedCompany: 'CognitiveScale Systems',
    package: '₹28 LPA',
    offersCount: 2,
    isEligible: true
  },
  {
    rollNo: '22IT122',
    name: 'Neha Gupta',
    email: 'neha.g@campus.edu',
    branch: 'IT',
    cgpa: 8.40,
    backlogs: 0,
    status: 'Placed',
    placedCompany: 'HyperScale Fintech',
    package: '₹18 LPA',
    offersCount: 1,
    isEligible: true
  }
];

export const SALARY_DISTRIBUTION_DATA = [
  { range: '< ₹8 LPA', students: 45, fill: '#64748b' },
  { range: '₹8 - ₹12 LPA', students: 110, fill: '#3b82f6' },
  { range: '₹12 - ₹18 LPA', students: 145, fill: '#6366f1' },
  { range: '₹18 - ₹25 LPA', students: 85, fill: '#8b5cf6' },
  { range: '> ₹25 LPA (Dream)', students: 45, fill: '#10b981' }
];

export const TOP_RECRUITERS_DATA = [
  { company: 'Nexus Cloud Tech', offers: 32, avgPackage: '₹18.5 LPA' },
  { company: 'CognitiveScale AI', offers: 24, avgPackage: '₹24.0 LPA' },
  { company: 'HyperScale Fintech', offers: 28, avgPackage: '₹17.2 LPA' },
  { company: 'Apex Global Infra', offers: 40, avgPackage: '₹15.0 LPA' },
  { company: 'AeroDynamics IoT', offers: 18, avgPackage: '₹13.5 LPA' }
];



export const DEMO_USERS = {
  student: {
    id: 'demo-student-1',
    name: 'Rohan Sharma',
    email: 'rohan.sharma@campus.edu',
    role: 'student',
    branch: 'Computer Science & Engg',
    cgpa: 8.85,
    batch: 2026,
    college: 'Apex Institute of Technology',
    token: 'mock-jwt-token-student-123'
  },
  recruiter: {
    id: 'demo-recruiter-1',
    name: 'Pooja Nair',
    email: 'pooja.nair@nexuscloud.tech',
    company: 'Nexus Cloud Technologies',
    role: 'recruiter',
    designation: 'Senior Campus Recruiter',
    token: 'mock-jwt-token-recruiter-456'
  },
  admin: {
    id: 'demo-admin-1',
    name: 'Prof. Suresh Mathur',
    email: 'placement.cell@campus.edu',
    role: 'admin',
    department: 'Training & Placement Directorate',
    college: 'Apex Institute of Technology',
    token: 'mock-jwt-token-admin-789'
  }
};


