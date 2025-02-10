'use client';
import Experience from '../components/Experience';
import { motion } from 'framer-motion';

export default function ExperiencePage() {
  return (
    <div className="relative isolate min-h-screen bg-background">
      <div className="mx-auto">
        <Experience />
      </div>
    </div>
  );
}
