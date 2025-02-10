import './globals.css';
import { Space_Grotesk, Outfit } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';
import Script from 'next/script';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata = {
  title: 'Pranav Mahableshwarkar',
  description: 'Personal portfolio and blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <noscript>
          <style>{`
            [data-new-gr-c-s-check-loaded],
            [data-gr-ext-installed] {
              display: none !important;
            }
          `}</style>
        </noscript>
      </head>
      <body 
        className={`${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          value={{
            light: 'light',
            dark: 'dark',
            system: 'system'
          }}
        >
          <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
            <Navbar />
            <main className="relative">{children}</main>
          </div>
        </ThemeProvider>
        <Script id="remove-ext-attrs" strategy="afterInteractive">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              const removeExtAttrs = () => {
                document.querySelectorAll('[data-new-gr-c-s-check-loaded]').forEach(el => {
                  el.removeAttribute('data-new-gr-c-s-check-loaded');
                });
                document.querySelectorAll('[data-gr-ext-installed]').forEach(el => {
                  el.removeAttribute('data-gr-ext-installed');
                });
              };
              removeExtAttrs();
              new MutationObserver(removeExtAttrs).observe(document.body, {
                attributes: true,
                childList: true,
                subtree: true
              });
            });
          `}
        </Script>
      </body>
    </html>
  );
}
