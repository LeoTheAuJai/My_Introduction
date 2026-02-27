// app/components/NameAnimation.js
'use client';

import { motion } from 'framer-motion';

// 固定的粒子數據
const FIXED_PARTICLES = Array.from({ length: 20 }, (_, i) => {
  const angle = (i * 137.5) * (Math.PI / 180);
  const radius = Math.sqrt(i) * 10;
  
  return {
    id: i,
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
    size: (Math.sin(i) * 1.5 + 2.5),
    delay: (i * 0.1) % 2,
    colorIndex: i % 3
  };
});

export default function NameAnimation() {
  const colors = ['bg-cyan-400', 'bg-blue-500', 'bg-purple-600'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="overflow-hidden mx-auto mb-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent inline-block">
            Hello, I&apos;m
          </h1>
        </motion.div>

        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1
          }}
          className="mb-8"
        >
          <h2 className="text-7xl md:text-9xl font-bold text-white glow-text">
            區世俊
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mt-4"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-2xl md:text-3xl text-gray-300">
            Full Stack Developer
          </p>
          
          <div className="mt-12 relative">
            {FIXED_PARTICLES.map((particle) => (
              <motion.div
                key={particle.id}
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  x: particle.x,
                  y: particle.y
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: particle.x + (particle.id % 2 === 0 ? 50 : -50),
                  y: particle.y + (particle.id % 3 === 0 ? 50 : -50)
                }}
                transition={{
                  duration: 2,
                  delay: particle.delay,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className={`absolute rounded-full ${colors[particle.colorIndex]}`}
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}