import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 text-center">
      {/* Background Blobs (Light & Vivid) - Adjusted for Dark Mode */}
      <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-brand-200/40 blur-3xl filter dark:bg-brand-50/10" />
      <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl filter dark:bg-purple-900/20" />
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-50/50 blur-3xl filter dark:bg-brand-500/5" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-4xl"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-6 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-bold text-brand-600 ring-1 ring-inset ring-brand-200 dark:bg-brand-500/10 dark:text-brand-400 dark:ring-brand-500/20"
        >
          {t('hero.badge')}
        </motion.span>
        
        <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-foreground md:text-7xl lg:text-8xl">
          <span className="block text-foreground">
            {t('hero.title_1')}
          </span>
          <span className="bg-gradient-to-r from-brand-500 to-purple-600 bg-clip-text text-transparent">
            {t('hero.title_2')}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mx-auto max-w-2xl text-lg font-medium text-muted-foreground md:text-xl"
        >
          {t('hero.description_1')}
          <br className="hidden md:block" />
          {t('hero.description_2')}
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 transform text-muted-foreground"
      >
        <ChevronDown className="h-10 w-10" strokeWidth={3} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
