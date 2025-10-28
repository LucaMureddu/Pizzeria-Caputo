import Hero from '../components/Hero';
import AboutSnippet from '../components/AboutSnippet';
import FeaturedPizzas from '../components/FeaturedPizzas';
import type { MenuItem } from '@/types/menu';

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/menu', { cache: 'no-store' });
  const menuItems: MenuItem[] = await res.json();

  const featuredPizzas = menuItems
    .filter((item) => item.category === 'pizza')
    .slice(0, 3);

  return (
    <>
      <Hero />
      <AboutSnippet />
      <FeaturedPizzas pizzas={featuredPizzas} />
    </>
  );
}
