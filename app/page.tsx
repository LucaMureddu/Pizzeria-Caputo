import Hero from '../components/Hero';
import AboutSnippet from '../components/AboutSnippet';
import FeaturedPizzas from '../components/FeaturedPizzas';
import type { MenuItem } from '@/types/menu';
import { supabase } from '@/lib/supabase/serverClient';

export default async function Home() {
  // Fetch diretto da Supabase (Server Component): niente chiamate HTTP interne
  const { data: menuItems, error } = await supabase.from('menu').select('*');
  if (error) {
    console.error('Errore fetch menu:', error);
    // Opzionale: gestire l'errore nella UI, per ora continuiamo con una lista vuota
  }

  const featuredPizzas = (menuItems as MenuItem[] | null ?? [])
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
