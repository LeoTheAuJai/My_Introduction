// app/page.js
'use client'; // 添加這行

import { useEffect, useState } from 'react';
import NameAnimation from './components/NameAnimation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // 3秒後隱藏動畫
    const timer = setTimeout(() => {
      setShowAnimation(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      {showAnimation && <NameAnimation />}
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}