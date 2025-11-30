import { motion } from "framer-motion";
import { HeartHandshake, Zap, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const CoreValuesSection = () => {
  const { t } = useTranslation();

  const values = [
    {
      key: "empathy",
      icon: HeartHandshake,
      color: "text-rose-500",
      bg: "bg-rose-100 dark:bg-rose-900/30",
    },
    {
      key: "efficiency",
      icon: Zap,
      color: "text-amber-500",
      bg: "bg-amber-100 dark:bg-amber-900/30",
    },
    {
      key: "content_specialized",
      icon: Sparkles,
      color: "text-purple-500",
      bg: "bg-purple-100 dark:bg-purple-900/30",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2 inline-block text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400"
          >
            {t('core_value.subtitle')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-foreground md:text-4xl"
          >
            {t('core_value.title')}
          </motion.h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {values.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className={cn("mb-6 flex h-20 w-20 items-center justify-center rounded-full shadow-sm", item.bg)}>
                <item.icon className={cn("h-10 w-10", item.color)} strokeWidth={1.5} />
              </div>
              
              <h3 className="mb-4 text-xl font-bold text-foreground">
                {t(`core_value.items.${item.key}.title`)}
              </h3>
              
              <p className="leading-relaxed text-muted-foreground">
                {t(`core_value.items.${item.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;

