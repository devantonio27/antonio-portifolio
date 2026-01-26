import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingParticle = ({
  delay,
  x,
  y,
}: {
  delay: number;
  x: number;
  y: number;
}) => (
  <motion.div
    className="absolute w-1 h-1 bg-primary/30 rounded-full"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{
      y: [0, -20, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.5, 1],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Hero = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center section-padding pt-32 relative overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-primary/10 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <FloatingParticle
            key={particle.id}
            delay={particle.delay}
            x={particle.x}
            y={particle.y}
          />
        ))}
      </div>

      <div className="container-narrow text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4"
        >
          <motion.span
            className="inline-flex items-center gap-2 text-primary text-sm font-medium tracking-wide uppercase px-4 py-2 rounded-full border border-primary/20 bg-primary/5"
            whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Sparkles className="h-4 w-4" />
            Desenvolvedor Web
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Olá, sou{" "}
          <motion.span
            className="text-gradient relative inline-block"
            whileHover={{ scale: 1.02 }}
          >
            Antonio Dev
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Desenvolvedor Frontend apaixonado por criar experiências web modernas
          e performáticas com React e Node.js.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              size="lg"
              className="px-8 relative overflow-hidden group"
            >
              <a href="#projects">
                <span className="relative z-10">Ver Projetos</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </Button>
          </motion.div>

          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="icon"
                asChild
                className="relative overflow-hidden group"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 relative z-10 group-hover:text-primary transition-colors" />
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="icon"
                asChild
                className="relative overflow-hidden group"
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 relative z-10 group-hover:text-primary transition-colors" />
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors flex flex-col items-center gap-2"
            aria-label="Scroll para baixo"
            whileHover={{ y: 5 }}
          >
            <span className="text-xs uppercase tracking-wider">Explorar</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown className="h-6 w-6" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
