import { motion } from "framer-motion";
import { BrainCircuit, Layers, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const CapabilitiesSection = () => {
  const { t } = useTranslation();

  const items = [
    {
      key: "adaptive",
      icon: BrainCircuit,
      color: "text-blue-500",
      bg: "bg-blue-50 dark:bg-blue-900/20",
      border: "border-blue-100 dark:border-blue-900/50",
    },
    {
      key: "multimodal",
      icon: Layers,
      color: "text-purple-500",
      bg: "bg-purple-50 dark:bg-purple-900/20",
      border: "border-purple-100 dark:border-purple-900/50",
    },
    {
      key: "user_centric",
      icon: Users,
      color: "text-rose-500",
      bg: "bg-rose-50 dark:bg-rose-900/20",
      border: "border-rose-100 dark:border-rose-900/50",
    },
  ];

  const getTags = (key: string) => {
    const tags = t(`capability.items.${key}.tags`, { returnObjects: true });
    return Array.isArray(tags) ? tags : [];
  };

  return (
    <section className="bg-slate-50 py-24 dark:bg-slate-950/50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2 inline-block text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400"
          >
            {t('capability.subtitle')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-foreground md:text-4xl"
          >
            {t('capability.title')}
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl border p-8 transition-all hover:shadow-lg",
                "bg-card",
                item.border
              )}
            >
              <div className={cn("mb-6 inline-flex rounded-xl p-3", item.bg)}>
                <item.icon className={cn("h-8 w-8", item.color)} />
              </div>
              
              <h3 className="mb-4 text-xl font-bold text-foreground">
                {t(`capability.items.${item.key}.title`)}
              </h3>
              
              <p className="mb-6 leading-relaxed text-muted-foreground min-h-[5rem]">
                {t(`capability.items.${item.key}.description`)}
              </p>

              <div className="flex flex-wrap gap-2">
                {getTags(item.key).map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground transition-colors group-hover:bg-brand-50 group-hover:text-brand-600 dark:group-hover:bg-brand-900/20 dark:group-hover:text-brand-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;

