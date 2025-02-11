'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ThemeToggle from './ThemeToggle';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Research', href: '/research' },
  { name: 'Experience', href: '/experience' },
  { name: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <Link 
              href="/" 
              className="font-space-grotesk text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              PM
            </Link>
          </div>

          <div className="hidden lg:flex lg:gap-x-8 items-center">
            {navigation.map((item) => {
              const isActive = 
                item.href === '/' 
                  ? pathname === '/' 
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              );
            })}
            <ThemeToggle />
          </div>

          <div className="flex lg:hidden flex-1 justify-end items-center gap-4">
            <ThemeToggle />
            <button
              type="button"
              className="rounded-md p-2.5 text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-x-0 top-0 z-50' : 'hidden'}`}>
        <div className="bg-white dark:bg-gray-900 py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link 
              href="/" 
              className="font-space-grotesk text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
              onClick={() => setMobileMenuOpen(false)}
            >
              PM
            </Link>
            <button
              type="button"
              className="rounded-md p-2.5 text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="container mx-auto px-4 mt-4">
            <div className="space-y-2">
              {navigation.map((item) => {
                const isActive = 
                  item.href === '/' 
                    ? pathname === '/' 
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 rounded-lg text-foreground hover:bg-foreground/10 ${
                      isActive ? 'text-indigo-600 dark:text-indigo-400' : ''
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
