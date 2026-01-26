import { motion } from "framer-motion";
import { useState } from "react";

interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Next.js"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "REST APIs", "Python"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Banco de Dados",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Ferramentas",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Docker", "Vercel"],
    color: "from-orange-500 to-yellow-500",
  },
];

const SkillBadge = ({ skill, index, categoryColor }: { skill: string; index: number; categoryColor: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="relative text-sm px-4 py-2 rounded-lg bg-secondary text-secondary-foreground cursor-pointer overflow-hidden"
    >
      {/* Gradient background on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${categoryColor} opacity-0`}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <span className={`relative z-10 transition-colors ${isHovered ? 'text-white font-medium' : ''}`}>
        {skill}
      </span>
    </motion.span>
  );
};

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-all duration-300 overflow-hidden group"
    >
      {/* Animated gradient border */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        style={{ padding: "1px" }}
      >
        <div className="w-full h-full rounded-xl bg-card" />
      </motion.div>

      {/* Animated corner accent */}
      <motion.div
        className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${category.color} rounded-full blur-2xl`}
        animate={{
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.3 : 0.1,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="relative z-10">
        <motion.h3 
          className="text-lg font-semibold text-primary mb-4 flex items-center gap-2"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.span
            className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`}
            animate={{ scale: isHovered ? 1.5 : 1 }}
          />
          {category.title}
        </motion.h3>
        
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <SkillBadge 
              key={skill} 
              skill={skill} 
              index={skillIndex}
              categoryColor={category.color}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minhas <span className="text-primary">Skills</span>
          </h2>
          <motion.div 
            className="h-1 w-16 bg-primary rounded-full mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <p className="text-muted-foreground max-w-2xl mb-12">
            Tecnologias e ferramentas que utilizo no dia a dia para desenvolver 
            aplicações web modernas e de qualidade.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Animated skill counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.p 
            className="text-muted-foreground"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span 
              className="text-4xl font-bold text-primary inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              {skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0)}+
            </motion.span>
            <br />
            <span className="text-sm">tecnologias e ferramentas dominadas</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
