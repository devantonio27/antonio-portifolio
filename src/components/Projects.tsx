import { motion } from "framer-motion";
import { Github, ExternalLink, Folder, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Task Manager",
    description:
      "Aplicação de gerenciamento de tarefas com autenticação, CRUD completo e interface intuitiva. Permite organizar tarefas por categorias e prioridades.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Dashboard administrativo para e-commerce com visualização de métricas, gráficos interativos e gerenciamento de produtos.",
    technologies: ["React", "Tailwind CSS", "Chart.js", "REST API"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Weather App",
    description:
      "Aplicação de previsão do tempo que consome API externa, exibindo dados climáticos em tempo real com interface responsiva.",
    technologies: ["React", "TypeScript", "OpenWeather API", "CSS Modules"],
    githubUrl: "https://github.com",
  },
  {
    title: "Blog Pessoal",
    description:
      "Blog desenvolvido com foco em performance e SEO. Sistema de publicação de artigos com markdown e categorização.",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative p-6 rounded-xl border border-border bg-card/50 hover:bg-card transition-all duration-500 overflow-hidden"
    >
      {/* Animated border gradient */}
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(217 91% 70%) 50%, hsl(var(--primary)) 100%)",
          padding: "1px",
        }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-full rounded-xl bg-card" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <motion.div
            className="p-2 rounded-lg bg-secondary"
            animate={{ rotate: isHovered ? 10 : 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Folder className="h-5 w-5 text-primary" />
          </motion.div>

          {project.featured && (
            <motion.div
              className="flex items-center gap-1 text-xs text-yellow-500"
              animate={{ scale: isHovered ? 1.1 : 1 }}
            >
              <Star className="h-3 w-3 fill-current" />
              <span>Destaque</span>
            </motion.div>
          )}
        </div>

        <motion.h3
          className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {project.title}
        </motion.h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              className="text-xs font-mono px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + techIndex * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="gap-2 hover:bg-primary/10"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
                Código
              </a>
            </Button>
          </motion.div>

          {project.liveUrl && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="gap-2 hover:bg-primary/10"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/20 via-blue-500/20 to-primary/20 blur-xl"
        animate={{
          opacity: isHovered ? 0.5 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus <span className="text-primary">Projetos</span>
          </h2>
          <motion.div
            className="h-1 w-16 bg-primary rounded-full mb-4"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <p className="text-muted-foreground max-w-2xl mb-12">
            Uma seleção dos meus principais projetos. Cada um representa um
            desafio superado e habilidades desenvolvidas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" asChild size="lg" className="gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                Ver mais no GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
