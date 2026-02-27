'use client';

import { motion } from 'framer-motion';
import { 
  Code2, Database, Palette, Smartphone, 
  Cloud, Shield, Zap, Globe 
} from 'lucide-react';

const skills = [
  { icon: Code2, name: "前端開發", level: 95, color: "from-cyan-400 to-blue-500" },
  { icon: Database, name: "後端開發", level: 90, color: "from-green-400 to-emerald-500" },
  { icon: Palette, name: "UI/UX 設計", level: 85, color: "from-purple-400 to-pink-500" },
  { icon: Smartphone, name: "行動開發", level: 80, color: "from-yellow-400 to-orange-500" },
  { icon: Cloud, name: "雲端服務", level: 85, color: "from-blue-400 to-indigo-500" },
  { icon: Shield, name: "資訊安全", level: 75, color: "from-red-400 to-rose-500" },
  { icon: Zap, name: "效能優化", level: 90, color: "from-amber-400 to-yellow-500" },
  { icon: Globe, name: "SEO", level: 80, color: "from-teal-400 to-cyan-500" },
];

const technologies = {
  "前端": ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"],
  "後端": ["Node.js", "Python", "PHP", "MongoDB"],
  "工具": ["Git", "Docker", "Firebase"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              技術能力
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            持續學習並掌握最新的網頁開發技術
          </p>
        </motion.div>

        {/* 技能條 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${skill.color}`}>
                  <skill.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <div className="text-sm text-gray-400">{skill.level}% 精通</div>
                </div>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 技術棧 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">技術棧</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(technologies).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-2xl"
              >
                <h4 className="text-xl font-bold mb-4 text-cyan-400">{category}</h4>
                <div className="space-y-3">
                  {items.map((tech, i) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-150 transition-transform" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}