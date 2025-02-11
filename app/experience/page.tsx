import Experience from '../components/Experience';

export function generateStaticParams() {
  return [{ slug: 'index' }];
}

export default function ExperiencePage() {
  return <Experience />;
}
