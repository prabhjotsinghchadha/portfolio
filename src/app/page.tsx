import {Metadata} from 'next';

import {homePageMeta} from '../data/data';
import HomeContent from './components/HomeContent';

export const metadata: Metadata = {
  title: homePageMeta.title,
  description: homePageMeta.description,
};

export default function HomePage() {
  return (
    <main>
      <HomeContent />
    </main>
  );
}

