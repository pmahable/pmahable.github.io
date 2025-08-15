'use client';
import React, { JSX } from 'react'; // useRef was deleted here.
import { motion } from 'framer-motion';
import { MdWork } from 'react-icons/md';
import { FaFlask, FaChalkboardTeacher } from 'react-icons/fa';
import Link from 'next/link';

interface Position {
  role: string;
  date: string;
  points: string[];
}

interface ExperienceItem {
  company: string | JSX.Element;
  location: string;
  positions: Position[];
  category: 'work' | 'research' | 'teaching';
}

const experiences: ExperienceItem[] = [
  {
    company: 'insitro',
    location: 'South San Francisco, CA',
    category: 'work',
    positions: [
      {
        role: 'Software Engineering Intern',
        date: 'May 2024 - Aug 2024',
        points: [
          'Developed an internal literature-review RAG chatbot, indexing 36 million papers on PubMed and insitro clinical/wet lab data.',
          // 'Utilized AWS and python software packages to support machine learning research at insitro.'
        ]
      }
    ]
  },
  {
    company: 'National Institutes of Health: NLM/NCBI',
    location: 'Bethesda, MD',
    category: 'work',
    positions: [
      {
        role: 'Deep Learning Research Intern (SIP)',
        date: 'May 2023 - Aug 2023',
        points: [
          'Developed computational models and deep learning methods for the analysis of gene regulatory elements',
          'Utilized attention mechanisms to correlate binding motifs and biological functions with enhancer classes'
        ]
      }
    ]
  },
  {
    company: 'Singh Lab at Brown University',
    location: 'Providence, RI',
    category: 'research',
    positions: [
      {
        role: 'ML and Computational Biology Researcher (Post-Bac)',
        date: 'May 2025 - Present',
        points: [
          'Working on physics-driven protein folding and interpretable 3D genomics models.',
          'Mentoring graduate and undergraduate students on deep learning applications to biology.'
        ]
      },
      {
        role: 'Undergraduate ML Researcher',
        date: 'Jan 2024 – May 2025',
        points: [
          'Developing a multi-modal contrastive learning model capable of handling complex healthcare datasets and investigating mechanistic interpretability methods for DL models',
          'Developing course materials for a new HealthML course at Brown'
        ]
      }
    ]
  },
  {
    company: 'Istrail Lab at Brown University',
    location: 'Providence, RI',
    category: 'research',
    positions: [
      {
        role: 'Computational Chemistry Researcher',
        date: 'August 2024 – Present',
        points: [
          'Explored interpretability (related to free energy, kinetics, etc.) methods in existing protein folding methods',
          'Investigating how statistical and physical methods can be integrated into DL-based protein folding methods.'
        ]
      }
    ]
  },
  {
    company: 'Larschan Lab at Brown University',
    location: 'Providence, RI',
    category: 'research',
    positions: [
      {
        role: 'Deep Learning and Computational Biology Researcher',
        date: 'Apr 2022 – Aug 2024',
        points: [
          'Computational and wet lab work contributed to and featured in 3 lab publications and conference presentations',
        ]
      }
    ]
  },
  {
    company: 'Brown University',
    location: 'Providence, RI',
    category: 'teaching',
    positions: [
      {
        role: 'Head Teaching Assistant for Deep Learning',
        date: 'Dec 2023 – May 2024',
        points: [
          'Led a team of 33 TAs to develop and run CS1470/2470 for 350+ undergraduate/graduate students',
          'Taught concepts including generative models, natural language processing, graph/image models, and more',
        ]
      },
      {
        role: 'Undergraduate Teaching Assistant',
        date: 'Jun 2022 – Present',
        points: [
          'Undergraduate Courses: Computational Biology (CS1810), Fundamentals of Computer Systems (CS0300), Genetics (BIOL 0470)',
          'Graduate Courses: Advanced Algorithms in Medical Informatics (CS2840)',        ]
      }
    ]
  },
  {
    company: (
      <Link 
        href="https://sites.google.com/brown.edu/bsp/home?authuser=0" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="hover:underline text-blue-500 hover:text-blue-700"
      >
        Brown Science Prep
      </Link>
    ),
    location: 'Providence, RI',
    category: 'teaching',
    positions: [
      {
        role: 'Coordinator',
        date: 'May 2023 – Present',
        points: [
          'Oversaw a team of 15 mentors, organizing outreach to Providence Public Schools and coordinated the launch of the BSP mentorship and high school visit/outreach programs'
        ]
      },
      {
        role: 'Mentor',
        date: 'Sep 2021 – May 2023',
        points: [
          'Wrote creative lessons for Providence high schoolers including topics like Microbial Fuel Cells, Baking Chemistry, and more!'
        ]
      }
    ]
  }
];

const ExperienceCard = ({ experience, index }: { experience: ExperienceItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-8 bg-background/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-foreground/10"
    >
      <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-foreground">{typeof experience.company === 'string' ? experience.company : experience.company}</h3>
          <p className="text-foreground/60">{experience.location}</p>
        </div>
      </div>
      <div className="space-y-6">
        {experience.positions.map((position, posIndex) => (
          <div key={posIndex} className={posIndex !== 0 ? "pt-4 border-t border-foreground/10" : ""}>
            <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
              <p className="text-lg font-medium text-foreground/80">{position.role}</p>
              <p className="text-foreground/70">{position.date}</p>
            </div>
            <ul className="mt-2 space-y-2">
              {position.points.map((point, i) => (
                <li key={i} className="text-foreground/80 flex items-start">
                  <span className="mr-2 mt-1.5">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const ExperienceSection = ({ title, experiences, icon: Icon }: { title: string; experiences: ExperienceItem[]; icon: JSX.ElementType }) => {
  return (
    <div className="mb-16" id={title.toLowerCase().replace(/\s+/g, '-')}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 mb-6"
      >
        <Icon className="w-8 h-8 text-indigo-600" />
        <h3 className="text-2xl font-bold text-foreground">
          {title}
        </h3>
      </motion.div>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

const NavButton = ({ title, icon: Icon, onClick }: { title: string; icon: JSX.ElementType; onClick: () => void }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition-colors duration-300"
  >
    <Icon className="w-5 h-5" />
    <span>{title}</span>
  </motion.button>
);

export default function Experience() {
  // const workRef = useRef<HTMLDivElement>(null);
  // const researchRef = useRef<HTMLDivElement>(null);
  // const teachingRef = useRef<HTMLDivElement>(null);

  const workExperiences = experiences.filter(exp => exp.category === 'work');
  const researchExperiences = experiences.filter(exp => exp.category === 'research');
  const teachingExperiences = experiences.filter(exp => exp.category === 'teaching');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100; // Offset to account for fixed header if any
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 text-center text-foreground"
        >
          Experience
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <NavButton 
            title="Work Experience" 
            icon={MdWork}
            onClick={() => scrollToSection('work-experience')}
          />
          <NavButton 
            title="Research Experience" 
            icon={FaFlask}
            onClick={() => scrollToSection('research-experience')}
          />
          <NavButton 
            title="Teaching Experience" 
            icon={FaChalkboardTeacher}
            onClick={() => scrollToSection('teaching-&-volunteering-experience')}
          />
        </motion.div>

        <div className="space-y-8">
          {workExperiences.length > 0 && (
            <ExperienceSection 
              title="Work Experience" 
              experiences={workExperiences}
              icon={MdWork}
            />
          )}
          {researchExperiences.length > 0 && (
            <ExperienceSection 
              title="Research Experience" 
              experiences={researchExperiences}
              icon={FaFlask}
            />
          )}
          {teachingExperiences.length > 0 && (
            <ExperienceSection 
              title="Teaching & Volunteering Experience" 
              experiences={teachingExperiences}
              icon={FaChalkboardTeacher}
            />
          )}
        </div>
      </div>
    </section>
  );
}
