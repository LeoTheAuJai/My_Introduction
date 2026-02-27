'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork, Eye } from 'lucide-react';
import { projects } from '../data/projects';
import { useState } from 'react';

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              精選作品
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            這些項目展示了我解決複雜問題的能力和技術專長
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="glass-effect rounded-2xl overflow-hidden group relative"
            >
              {/* 項目卡片 */}
              <div className="p-6">
                {/* 技術標籤 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* 標題和描述 */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* 功能列表 */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">主要功能：</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 6).map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-400">
                        <div className={`w-1 h-1 rounded-full mr-2 ${project.imageColor.split(' ')[0].replace('from-', 'bg-')}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 連結按鈕 */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>程式碼</span>
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>預覽</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* 懸浮效果背景 */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${project.imageColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
              />

              {/* 裝飾元素 */}
              <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full ${project.imageColor} opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
}