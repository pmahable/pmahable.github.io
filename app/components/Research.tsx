'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ResearchProject {
  title: string;
  description: string;
  lab: string;
  date: string;
  publication?: {
    title: string;
    url: string;
  };
  publications?: {
    title: string;
    url: string;
  }[];
  technologies: string[];
  imageUrl: string;
}

const projects: ResearchProject[] = [
  {
    title: 'Multi-Modal Contrastive Learning',
    description: 'Developing a novel multi-modal contrastive learning framework for integrating diverse biological data types. This approach combines sequence, structure, and interaction data to improve protein function prediction and understanding of cellular mechanisms.',
    lab: 'Singh Lab at Brown University',
    date: '2025',
    technologies: ['PyTorch', 'Transformers', 'Python', 'Deep Learning'],
    imageUrl: '/research/multimodal.png'
  },
  {
    title: 'MMC AlphaFold Adaptation',
    description: 'Adapting the MMC framework to enhance AlphaFold predictions by incorporating multi-modal biological data. This project aims to improve protein structure prediction accuracy by leveraging diverse data sources and advanced deep learning techniques.',
    lab: 'Singh Lab at Brown University',
    date: '2025',
    technologies: ['PyTorch', 'AlphaFold', 'Python', 'Structural Biology'],
    imageUrl: '/research/alphafold.png'
  },
  {
    title: 'BindCompare',
    description: 'BindCompare is a novel integrated protein–nucleic acid binding analysis platform. It is a user-friendly tool that can be run locally to predict new combinatorial relationships between TFs and RBPs.',
    lab: 'Singh Lab at Brown University',
    date: '2024',
    publication: {
      title: 'Read the Paper!',
      url: 'https://academic.oup.com/bioinformatics/article/40/11/btae668/7888885'
    },
    technologies: ['Python', 'R', 'Bash/Shell', 'tkinter'],
    imageUrl: '/research/BindCompareSticker.png'
  },
  {
    title: 'DNABERT-Enhancer',
    description: 'Developed a transformer-based model for enhancer prediction by fine-tuning DNABERT on enhancer sequences. Implemented novel attention visualization techniques to improve model interpretability and biological insight.',
    lab: 'Singh Lab at Brown University',
    date: '2023',
    technologies: ['DNABERT', 'PyTorch', 'Python', 'Genomics'],
    imageUrl: '/research/dnabert.png'
  },
  {
    title: 'Wet Lab Research',
    description: 'Led multiple projects investigating genome-wide sex-specific splicing during early Drosophila embryogenesis and the role of dual DNA/RNA-binding factors in regulating hnRNP splicing condensates. Combined wet lab experiments with computational analysis to reveal novel insights into developmental biology and splicing regulation.',
    lab: 'Larschan Lab at Brown University',
    date: '2022 - 2023',
    publications: [
      {
        title: 'Sex-specific Splicing Paper',
        url: 'https://elifesciences.org/articles/87865'
      },
      {
        title: 'DNA/RNA-binding Factor Paper',
        url: 'https://pubmed.ncbi.nlm.nih.gov/38260450/'
      }
    ],
    technologies: ['R', 'Bioinformatics', 'Wet Lab Techniques'],
    imageUrl: '/research/drosophila.png'
  }
];

const ResearchCard = ({ project, index }: { project: ResearchProject; index: number }) => {
  const bgColor = index % 2 === 0 ? 'bg-indigo-600/10' : 'bg-purple-600/10';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex flex-col ${bgColor} backdrop-blur-sm rounded-lg overflow-hidden border border-foreground/10 shadow-lg`}
    >
      <div className="relative h-40 w-full">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-contain p-2"
          priority={index === 0}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
          <p className="text-foreground/70 text-sm mb-4">{project.lab}</p>
          <p className="text-foreground/80 mb-4">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="bg-foreground/10 text-foreground/70 px-2 py-1 rounded-md text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.publication && (
          <div className="mt-auto">
            <Link
              href={project.publication.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-500 font-semibold text-sm transition-colors duration-300"
            >
              {project.publication.title}
            </Link>
          </div>
        )}
        {project.publications && (
          <div className="mt-auto flex flex-col space-y-2">
            {project.publications.map((pub, pubIndex) => (
              <Link
                key={pubIndex}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-500 font-semibold text-sm transition-colors duration-300"
              >
                {pub.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function Research() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12 text-center text-foreground"
        >
          Research
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ResearchCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
