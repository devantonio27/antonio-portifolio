import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:joao.silva@email.com",
    icon: Mail,
    value: "joao.silva@email.com",
    color: "from-red-500 to-orange-500",
  },
  {
    label: "GitHub",
    href: "https://github.com/joaosilva",
    icon: Github,
    value: "@joaosilva",
    color: "from-gray-600 to-gray-800",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/joaosilva",
    icon: Linkedin,
    value: "/in/joaosilva",
    color: "from-blue-600 to-blue-800",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5511999999999",
    icon: MessageCircle,
    value: "+55 11 99999-9999",
    color: "from-green-500 to-emerald-600",
  },
];

const ContactCard = ({
  link,
  index,
}: {
  link: (typeof contactLinks)[0];
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      key={link.label}
      href={link.href}
      target={link.href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex items-center gap-4 p-5 rounded-xl border border-border bg-card/50 overflow-hidden cursor-pointer"
    >
      {/* Animated gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${link.color}`}
        animate={{
          opacity: isHovered ? 0.1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated border */}
      <motion.div
        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${link.color}`}
        style={{ padding: "1px" }}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-full rounded-xl bg-card" />
      </motion.div>

      <motion.div
        className="relative z-10 p-3 rounded-lg bg-secondary group-hover:bg-transparent transition-colors"
        animate={{
          rotate: isHovered ? [0, -10, 10, 0] : 0,
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className={`absolute inset-0 rounded-lg bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-100 transition-opacity`}
        />
        <link.icon className="h-5 w-5 text-secondary-foreground group-hover:text-white relative z-10 transition-colors" />
      </motion.div>

      <div className="text-left relative z-10">
        <p className="text-sm text-muted-foreground">{link.label}</p>
        <motion.p
          className="font-medium text-foreground group-hover:text-primary transition-colors"
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {link.value}
        </motion.p>
      </div>

      {/* Arrow indicator */}
      <motion.div
        className="ml-auto relative z-10"
        animate={{
          x: isHovered ? 5 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Send className="h-4 w-4 text-primary" />
      </motion.div>
    </motion.a>
  );
};

const Contact = () => {
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">
              Disponível para oportunidades
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos <span className="text-primary">Conversar</span>
          </h2>
          <motion.div
            className="h-1 w-16 bg-primary rounded-full mb-4 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <p className="text-muted-foreground max-w-xl mx-auto">
            Estou disponível para oportunidades de estágio ou posições júnior.
            Entre em contato e vamos conversar sobre como posso contribuir para
            o seu projeto.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {contactLinks.map((link, index) => (
            <ContactCard key={link.label} link={link} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.div
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              size="lg"
              className="px-8 relative overflow-hidden group"
            >
              <a href="mailto:joao.silva@email.com">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-primary"
                  animate={{
                    x: buttonHovered ? ["0%", "100%"] : "0%",
                  }}
                  transition={{
                    duration: 1,
                    repeat: buttonHovered ? Infinity : 0,
                    ease: "linear",
                  }}
                  style={{ width: "200%" }}
                />
                <Mail className="h-4 w-4 mr-2 relative z-10" />
                <span className="relative z-10">Enviar Email</span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
