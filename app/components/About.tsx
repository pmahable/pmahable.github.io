'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const SocialLink = ({ href, icon, label }: { 
  href: string; 
  icon: IconDefinition; 
  label: string 
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors duration-300"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <FontAwesomeIcon icon={icon} className="w-6 h-6" />
    <span className="sr-only">{label}</span>
  </motion.a>
);

export default function About() {
  return (
    <section className="py-16 px-6 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12 text-center text-foreground"
        >
          About Me
        </motion.h2>
        
        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-8 mb-12"
        >
          <SocialLink 
            href="https://github.com/pmahable" 
            icon={faGithub} 
            label="GitHub"
          />
          <SocialLink 
            href="https://linkedin.com/in/ps-mahableshwarkar" 
            icon={faLinkedin} 
            label="LinkedIn"
          />
        </motion.div>

        {/* About Me Blurb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <div className="prose prose-lg text-foreground/80">
            <p>
            I&apos;m a Compute Science and Applied Mathematics student at Brown University. I enjoy the intersection of computer science, biology, chemistry, and math. Particularly, my research interests lie in developing interpretable methods geared towards complex biological/healthcare datasets. Outside of research, I am very passionate in teaching and making computer science more accessible!
            </p>
          </div>
        </motion.div>

        {/* Baking Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h3 className="text-2xl font-bold text-foreground">Pranav&apos;s Pantry!</h3>
          
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/baking1.jpeg"
                alt="Baking Creation 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 20vw"
              />
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/baking2.jpeg"
                alt="Baking Creation 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 20vw"
              />
            </div>
            <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/baking3.jpeg"
                alt="Baking Creation 3"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 20vw"
              />
            </div>
          </div>

          <div className="prose prose-lg text-foreground/80">
            <div className="space-y-4">
              <p>
              When I&apos;m at home, I love to experiment with cooking and baking. Right now, my favorite dessert is a ginger/apple scone. You can find my baking account on Instagram @pranavs_pantry!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
