import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Rocket, Sparkles, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import ClickSpark from "@/components/ui/ClickSpark";

const ProjectsSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for background text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  // Background text moves slower than foreground
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityText = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const projects = [
    {
      key: "project_a",
      icon: Rocket,
      iconColor: "text-pink-500",
      delay: 0,
    },
    {
      key: "project_b",
      icon: Sparkles,
      iconColor: "text-blue-500",
      delay: 0.2,
    },
  ];

  return (
    <section ref={containerRef} className="relative min-h-[150vh] py-24 overflow-hidden bg-slate-50 dark:bg-slate-950 text-foreground transition-colors duration-300">
      
      {/* 1. Background Layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div 
          style={{ y: yText, opacity: opacityText }}
          className="relative z-0 flex flex-col items-center text-center"
        >
          <h2 className="text-[15vw] font-black leading-none tracking-tighter text-slate-200 dark:text-slate-800 select-none transition-colors duration-300">
            COMING
          </h2>
          <h2 className="text-[15vw] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 select-none transition-colors duration-300">
            SOON
          </h2>
          
          {/* Decorative Blur */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-[100px]" />
        </motion.div>
      </div>

      {/* 2. Foreground Glass Layer */}
      <div className="relative z-10 container mx-auto px-4 pt-[10vh]">
        <div className="mx-auto flex max-w-3xl flex-col gap-24 md:gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.key}
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ duration: 0.8, delay: project.delay }}
              className="glass-capsule group min-h-[350px] md:min-h-[400px] p-8 md:p-12 flex flex-col justify-between backdrop-blur-md border-white/60 bg-white/40 dark:border-white/10 dark:bg-white/5 transition-colors duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <div className={cn("rounded-full p-3 md:p-4 bg-white/80 dark:bg-black/40 backdrop-blur-md shadow-sm transition-colors duration-300", project.iconColor)}>
                  <project.icon className="h-6 w-6 md:h-8 md:w-8" />
                </div>
                <span className="rounded-full border border-white/50 bg-white/30 px-4 py-2 text-xs md:text-sm font-bold text-slate-600 dark:border-white/20 dark:bg-white/10 dark:text-slate-200 backdrop-blur-md transition-colors duration-300">
                  {t('projects.coming_soon')}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4 md:space-y-6 text-center md:text-left my-6">
                <h3 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-white drop-shadow-sm transition-colors duration-300">
                  {t(`projects.items.${project.key}.title`)}
                </h3>
                <p className="text-lg md:text-xl font-medium leading-relaxed text-slate-600 dark:text-slate-300 transition-colors duration-300">
                  {t(`projects.items.${project.key}.description`)}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-slate-200 dark:border-white/10 pt-6 md:pt-8 transition-colors duration-300">
                <span className="text-base md:text-lg font-semibold text-slate-500 dark:text-slate-400 transition-colors duration-300">
                   # {t(`projects.items.${project.key}.tag`)}
                </span>
                <div className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-full bg-slate-900 text-white transition-transform group-hover:scale-110 dark:bg-white dark:text-slate-900">
                  <ArrowUpRight className="h-5 w-5 md:h-6 md:w-6" />
                </div>
              </div>
              
              {/* Shine Animation */}
              <div className="absolute -left-[100%] top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-shine pointer-events-none" />
            </motion.div>
          ))}

          {/* Contact Button Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center pt-12 pb-24"
          >
            <Button 
              onClick={() => navigate('/contact')}
              size="lg"
              className="relative h-auto w-full max-w-lg rounded-full bg-brand-500 py-6 text-xl font-bold text-white shadow-lg shadow-brand-500/30 transition-all hover:scale-105 hover:bg-brand-600 hover:shadow-xl hover:shadow-brand-500/40 active:scale-95 overflow-visible"
            >
              <ClickSpark sparkColor="#ffffff" sparkCount={12} sparkRadius={50} sparkSize={15} duration={600} />
              {t('nav.contact')}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

