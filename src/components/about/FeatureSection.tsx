import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string[]; // Now expects translated strings
  icon: LucideIcon;
  bgColor?: string; // 섹션 배경색 제어 (Tailwind class)
  isReversed?: boolean;
}

const FeatureSection = ({
  title,
  subtitle,
  description,
  icon: Icon,
  bgColor = "bg-background",
  isReversed = false,
}: FeatureSectionProps) => {
  return (
    <section className={cn("overflow-hidden py-24 md:py-32 transition-colors duration-300", bgColor)}>
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "flex flex-col items-center gap-12 lg:flex-row lg:gap-24",
            isReversed && "lg:flex-row-reverse"
          )}
        >
          {/* Image / Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square w-full max-w-xs flex-1 md:max-w-md lg:aspect-[4/3]"
          >

            <div className="absolute inset-0 -rotate-6 rounded-[3rem] bg-gradient-to-tr from-brand-200 to-purple-200 opacity-60 blur-2xl dark:from-brand-900/40 dark:to-purple-900/40" />


            <div className="relative flex size-full items-center justify-center rounded-[2.5rem] bg-card shadow-xl shadow-brand-100/50 ring-1 ring-border dark:shadow-none">

              <div className="absolute size-48 rounded-full bg-brand-50 blur-2xl dark:bg-brand-900/20" />
              <Icon className="relative z-10 size-32 text-brand-500 drop-shadow-sm" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Text Content Side */}
          <motion.div
            initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="mb-4 flex items-center justify-center gap-2 lg:justify-start">
              <div className="rounded-full bg-brand-100 p-2 dark:bg-brand-500/20">
                <Icon className="size-5 text-brand-600 dark:text-brand-400" />
              </div>
              <span className="text-sm font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400">
                {subtitle}
              </span>
            </div>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              {description.map((desc, i) => (
                <p key={i}>{desc}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
