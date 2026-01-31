import { motion } from "framer-motion";
import { Code2, Target, MapPin } from "lucide-react";

const infoCards = [
  {
    icon: Code2,
    title: "Foco Atual",
    description: "Desenvolvimento Fullstack com TypeScript, React e NodeJs",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Target,
    title: "Objetivo",
    description: "Estágio ou posição Júnior em Desenvolvimento Web",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    title: "Localização",
    description: "Maceió - AL • Remoto ou Presencial",
    color: "from-orange-500 to-yellow-500",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="section-padding bg-card/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-primary">Mim</span>
          </h2>
          <motion.div
            className="h-1 w-16 bg-primary rounded-full mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {[
              "Sou um desenvolvedor web focado em criar aplicações modernas e responsivas. Tenho experiência com desenvolvimento frontend utilizando React e TypeScript, além de conhecimentos em backend com Node.js.",
              "Atualmente estou em busca de uma oportunidade de estágio ou posição júnior onde possa aplicar e expandir meus conhecimentos, contribuindo para projetos desafiadores e aprendendo com profissionais experientes.",
              "Acredito que código limpo e boas práticas são fundamentais para o sucesso de qualquer projeto. Estou sempre aprendendo novas tecnologias e buscando formas de melhorar minhas habilidades.",
            ].map((text, index) => (
              <motion.p
                key={index}
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          <div className="space-y-4">
            {infoCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group p-6 rounded-xl border border-border bg-card/50 hover:border-primary/30 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                <div className="flex items-start gap-4 relative z-10">
                  <motion.div
                    className="p-3 rounded-lg bg-secondary group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 10 }}
                  >
                    <card.icon className="h-5 w-5 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-sm font-medium text-primary mb-1 uppercase tracking-wide">
                      {card.title}
                    </h3>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
