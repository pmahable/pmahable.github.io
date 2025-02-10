'use client';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'Coming soon!',
    excerpt: '...',
    date: 'Jan 30, 2025',
    readTime: '',
    slug: 'my-journey-into-machine-learning',
  },
  // Add more blog posts as needed
];

export default function Blog() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-3xl py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8" role="alert">
            <p className="font-bold">🚧 Under Construction</p>
            <p>This blog section is currently being developed. Stay tuned for upcoming content!</p>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl mb-12">
            Blog
          </h1>
          <div className="space-y-8">
            {posts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <p className="text-sm text-gray-500">{post.readTime}</p>
                </div>
                <h2 className="text-xl font-semibold text-black mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href={`/blog/${post.slug}`}
                  className="text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Read more →
                </a>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
