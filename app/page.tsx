'use client';
import ParticleBackground from './components/ParticleBackground';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

const InfoTile = ({ 
  title, 
  description, 
  link, 
  bgColor,
  isClickable = true,
  children
}: { 
  title: string; 
  description: string; 
  link?: string; 
  bgColor?: string;
  isClickable?: boolean;
  children?: ReactNode 
}) => {
  const TileContent = () => (
    <div 
      className={`h-full bg-background p-8 rounded-lg border border-foreground/10 hover:border-foreground/20 transition-all duration-300 ${bgColor || 'bg-indigo-600/20'}`}
    >
      <h3 className="text-xl font-semibold mb-4 text-foreground">{title}</h3>
      <p className="text-foreground/70">{description}</p>
      {children}
    </div>
  );

  return isClickable && link ? (
    <Link href={link} className="block h-full">
      <TileContent />
    </Link>
  ) : (
    <div className="block h-full">
      <TileContent />
    </div>
  );
};

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div
            className="text-center relative z-10"
          >
            <div
              className="mb-8 flex justify-center"
            >
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-foreground/60 ring-1 ring-foreground/10 hover:ring-foreground/20">
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 mb-8">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 overflow-hidden rounded-full ring-2 ring-foreground/10">
                <Image
                  src="/profile.jpeg"
                  alt="Pranav Mahableshwarkar"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 12rem, 14rem"
                />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-center text-foreground sm:text-6xl font-space-grotesk">
                Pranav Mahableshwarkar
              </h1>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/research"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors duration-300"
              >
                Research
              </Link>
              <Link
                href="/experience"
                className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors duration-300"
              >
                Experience
              </Link>
            </div>
            <p className="mt-10 text-lg leading-8 text-foreground/80 text-center">
              Software, Computational Biology, Deep Learning
            </p>
          </div>
        </div>

        {/* Info Tiles */}
        <div className="max-w-6xl mx-auto pb-24">
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <InfoTile 
              title="Research"
              description="Exploring interpretable machine learning models for complex biological datasets and healthcare applications. Currently working with the MIMIC-IV dataset and protein folding models."
              link="/research"
              bgColor="bg-indigo-600/20"
            />
            <InfoTile 
              title="Education"
              description="BS in Computer Science & BA in Applied Mathematics at Brown University (2021-2025)."
              isClickable={false}
              bgColor="bg-purple-600/20"
            />
            <InfoTile 
              title="About Me"
              description="I am a current senior at Brown University! I love baking, swimming, and teaching in my free time. Click here for my contact info!"
              link="/about"
              bgColor="bg-indigo-600/20"
            />
          </div>
        </div>
      </div>
    </>
  );
}
