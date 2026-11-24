export const profile = {
  name: 'Rahul S',
  role: 'Aspiring Full-Stack Developer',
  email: 'rahulsurendrababu45@gmail.com',
  phone: '+91 6363779118',
  phoneHref: 'tel:+916363779118',
  location: 'Doddaballapura, Karnataka, India',
  github: 'https://github.com/Rahul-4518',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? '',
  resume: '/rahul-s-resume.pdf',
}

export const roles = [
  'Full-Stack Developer',
  'Python Developer',
  'AI & Machine Learning Enthusiast',
  'Data Analytics Enthusiast',
]

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
] as const

export type SkillGroup = {
  title: string
  icon: 'code' | 'globe' | 'brain' | 'cpu'
  skills: { name: string; icon: string }[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    icon: 'code',
    skills: [
      { name: 'Python', icon: 'terminal' },
      { name: 'Java', icon: 'coffee' },
      { name: 'SQL', icon: 'database' },
    ],
  },
  {
    title: 'Web Development',
    icon: 'globe',
    skills: [
      { name: 'HTML', icon: 'file-code' },
      { name: 'CSS', icon: 'palette' },
      { name: 'JavaScript', icon: 'braces' },
      { name: 'Full-Stack Development', icon: 'layers' },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: 'brain',
    skills: [
      { name: 'Machine Learning', icon: 'sparkles' },
      { name: 'Deep Learning', icon: 'network' },
      { name: 'NLP', icon: 'message' },
      { name: 'OpenCV', icon: 'scan' },
    ],
  },
  {
    title: 'Other Technologies',
    icon: 'cpu',
    skills: [
      { name: 'IoT', icon: 'radio' },
      { name: 'Data Analytics', icon: 'chart' },
    ],
  },
]

export type Project = {
  slug: string
  title: string
  category: string
  summary: string
  overview: string
  image: string
  tags: string[]
  highlights: string[]
  metrics?: { value: string; label: string }[]
  github?: string
  context?: string
}

export const projects: Project[] = [
  {
    slug: 'omr-processing-system',
    title: 'OMR Processing System',
    category: 'Computer Vision · Internship',
    summary:
      'An Optical Mark Recognition system built with Python and OpenCV during my internship at Askey.',
    overview:
      'Developed an Optical Mark Recognition system using Python and OpenCV during my internship at Askey, Bengaluru. The system processes answer sheets, automatically aligns scanned layouts, and evaluates marked responses with improved accuracy and speed.',
    image: '/projects/omr.png',
    tags: ['Python', 'OpenCV', 'Computer Vision'],
    highlights: [
      'Implemented auto-alignment algorithms for scanned sheets.',
      'Added layout customization for different sheet formats.',
      'Improved evaluation accuracy by 25%.',
      'Reduced processing time by 40%.',
    ],
    metrics: [
      { value: '+25%', label: 'Evaluation accuracy' },
      { value: '−40%', label: 'Processing time' },
    ],
    github: 'https://github.com/Rahul-4518/OMR',
    context: 'Internship at Askey, Bengaluru — June 2024',
  },
  {
    slug: 'audio-to-business-intelligence',
    title: 'Audio-to-Business-Intelligence Pipeline',
    category: 'AI · NLP',
    summary:
      'An AI-powered pipeline that converts business audio into actionable insights using Speech-to-Text and NLP.',
    overview:
      'Developed an AI-powered pipeline to convert business audio into actionable insights using Speech-to-Text and Natural Language Processing for transcription, summarization, and analytics.',
    image: '/projects/audio-bi.png',
    tags: ['Python', 'Speech-to-Text', 'NLP', 'Analytics'],
    highlights: [
      'Transcribes business audio with Speech-to-Text.',
      'Summarizes conversations using Natural Language Processing.',
      'Turns transcripts into analytics and actionable insights.',
    ],
    github: 'https://github.com/Rahul-4518/Audio-to-business-intelligence-pipeline-',
  },
  {
    slug: 'plant-disease-risk-prediction',
    title: 'Plant Disease Risk Prediction',
    category: 'Machine Learning',
    summary:
      'A Random Forest model that predicts plant disease risk with 87% accuracy from agricultural environmental data.',
    overview:
      'Built a Random Forest machine learning model to predict plant disease risks with 87% accuracy using agricultural environmental data.',
    image: '/projects/plant-disease.png',
    tags: ['Python', 'Machine Learning', 'Random Forest'],
    highlights: [
      'Trained a Random Forest classifier on agricultural environmental data.',
      'Achieved 87% prediction accuracy.',
    ],
    metrics: [{ value: '87%', label: 'Model accuracy' }],
    github: 'https://github.com/Rahul-4518/Plant-Disease-Risk-Prediction',
  },
  {
    slug: 'construction-supply-hub',
    title: 'Construction Supply Hub',
    category: 'Full-Stack Web App',
    summary:
      'A full-stack web application for construction material management, inventory tracking, and procurement.',
    overview:
      'Developed a full-stack web application for construction material management, including inventory tracking and procurement management.',
    image: '/projects/construction-hub.png',
    tags: ['Full-Stack', 'Web Application', 'Inventory', 'Procurement'],
    highlights: [
      'Manages construction materials in one place.',
      'Tracks inventory levels.',
      'Supports procurement management workflows.',
    ],
    github: 'https://github.com/Rahul-4518/construction-supply-hub',
  },
  {
    slug: 'automatic-waste-classification',
    title: 'Automatic Waste Classification Using Deep Learning',
    category: 'Deep Learning · Research',
    summary:
      'A deep learning research project focused on automatic waste classification and intelligent waste management.',
    overview:
      'A deep learning research project focused on automatic waste classification and intelligent waste management. The work was presented as a university-level research paper.',
    image: '/projects/waste-classification.png',
    tags: ['Deep Learning', 'Computer Vision', 'Research'],
    highlights: [
      'Applies deep learning to classify waste automatically.',
      'Explores intelligent waste management.',
      'Presented as a university-level research paper.',
    ],
    github: 'https://github.com/Rahul-4518/waste-classification-system',
  },
]

export const experience = {
  company: 'Askey',
  location: 'Bengaluru',
  position: 'Intern',
  duration: 'June 2024 – June 2024',
  responsibilities: [
    'Developed an OMR processing system using Python and OpenCV.',
    'Implemented auto-alignment algorithms and layout customization.',
    'Improved evaluation accuracy by 25%.',
    'Reduced processing time by 40%.',
  ],
  tags: ['Python', 'OpenCV'],
}

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Amity University Bengaluru',
    date: 'November 2024',
    cgpa: '8.7',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    school: 'Nagarjuna College of Management Studies',
    date: 'August 2021 – July 2024',
    cgpa: '9.1',
  },
]

export const certifications = [
  {
    title: 'Programming in Java',
    issuer: 'NPTEL (SWAYAM)',
    href: 'https://drive.google.com/file/d/1xzHyqFUQAwsj2QmfgTKN6lcgndcWhYO0/view?usp=sharing',
  },
  {
    title: 'Introduction to SQL',
    issuer: 'Udemy',
    href: 'https://drive.google.com/file/d/1do8i7m9T-dRaknj0s5y22gcx170LArRk/view?usp=sharing',
  },
  {
    title: 'Cyber Security Workshop',
    issuer: 'Karnataka Science and Technology Academy',
    href: 'https://drive.google.com/file/d/1GuG6v6AVXcHIyqegitMxWXgOs5JCp6ia/view?usp=sharing',
  },
  {
    title: "AI-Powered Cybersecurity for RBI's Vision 2025",
    issuer: 'Amity University',
    href: 'https://drive.google.com/file/d/16G9LagMSdpmbdTWa5Qe5PbJ5KoWZLtx7/view?usp=sharing',
  },
]

export const achievements = [
  {
    title: 'Secretary, CodeZen',
    description:
      'Secretary of CodeZen, the official Coding Club of Amity University Bengaluru. Organized coding activities and technical events.',
    icon: 'code',
  },
  {
    title: 'Research Presentation',
    description:
      'Presented a university-level research paper on Automatic Waste Classification Using Deep Learning.',
    icon: 'presentation',
  },
  {
    title: 'Sports Coordinator',
    description: 'Sports Coordinator at Nagarjuna College of Management Studies.',
    icon: 'users',
  },
  {
    title: 'Sangathan Champion',
    description: 'Won Volleyball, Tug of War, and Discus Throw competitions at Sangathan.',
    icon: 'trophy',
  },
] as const
