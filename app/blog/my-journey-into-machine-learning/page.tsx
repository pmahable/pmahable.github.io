'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen">
      <div className="mx-auto max-w-3xl py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link 
            href="/blog" 
            className="text-indigo-600 hover:text-indigo-500 mb-4 inline-block"
          >
            ← Back to Blog
          </Link>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl mb-8">
            Coming soon!
          </h1>
{/*           
          <div className="text-gray-600 space-y-6">
            <p className="text-sm text-gray-500 mb-4">Published on Jan 30, 2025 • 5 min read</p>
            
            <p>
              My fascination with Artificial Intelligence began during my sophomore year of college. What started as a curiosity quickly transformed into a passionate pursuit that would shape my entire academic and professional trajectory.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-4">
              The Early Days
            </h2>
            
            <p>
              I remember my first encounter with machine learning. It was a simple neural network project in my introductory computer science course. We were tasked with building a basic image classification model, and the moment I saw the algorithm correctly identify handwritten digits, I was hooked.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-4">
              Diving Deeper
            </h2>
            
            <p>
              As I delved deeper into the field, I realized that AI is not just about algorithms and code. It's about solving complex human problems, understanding intricate patterns, and pushing the boundaries of what's possible with technology.
            </p>
            
            <p>
              My internships at places like the National Institutes of Health and insitro have been instrumental in transforming theoretical knowledge into practical applications. From developing RAG chatbots to supporting machine learning research, each experience has been a stepping stone in my AI journey.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-4">
              Looking Ahead
            </h2>
            
            <p>
              As I look forward to my upcoming role at insitro, I'm excited about the potential of AI in drug discovery and genomics. The intersection of machine learning, biology, and computational infrastructure is where I believe we can make transformative discoveries.
            </p>
            
            <p>
              This blog will be a space to share my thoughts, learnings, and experiences in the world of AI and machine learning. Stay tuned for more insights!
            </p>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
}
