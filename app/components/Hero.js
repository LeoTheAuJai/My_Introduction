'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin, FileText, Youtube } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 動態背景 */}
      <div className="absolute inset-0 grid-bg" />
      
      {/* 漂浮元素 */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: Math.sin(i) * 50,
            rotate: [0, 360]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute w-64 h-64 rounded-full opacity-10 blur-3xl ${
            i % 3 === 0 ? 'bg-cyan-500' : 
            i % 3 === 1 ? 'bg-blue-500' : 'bg-purple-500'
          }`}
          style={{
            left: `${20 + i * 15}%`,
            top: `${10 + i * 10}%`
          }}
        />
      ))}

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              區世俊
            </span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8"
          >
            Full Stack Developer & UI/UX Designer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
          >
            我專注於創建美觀、高效能且使用者友好的網站和應用程式。
            從2025年開始接觸全端開發，熟用現代網頁技術。
          </motion.p>

          {/* 社交連結 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex justify-center gap-6 mb-12"
          >
            {[
              { icon: Mail, href: "mailto:aassboy2046@gmail.com", label: "Email" },
              { icon: Github, href: "https://github.com/LeoTheAuJai", label: "GitHub" },
              { icon: Youtube, href: "https://www.youtube.com/@leo6044", label: "YouTube" },
              { icon: FileText, href: "https://docs.google.com/document/d/1-u1zQz_GoB-oIHw4Yh3uF2F0GJ1tpi3x/edit?usp=sharing&ouid=100031348150721512292&rtpof=true&sd=true", label: "Resume" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="glass-effect p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
              >
                <item.icon className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
                <span className="sr-only">{item.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* CTA 按鈕 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              查看我的作品
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
            >
              聯繫我
            </motion.a>
          </motion.div>
        </motion.div>

        {/* 向下滾動指示 */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="text-gray-400 hover:text-white transition-colors">
            <ArrowDown className="w-8 h-8" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}