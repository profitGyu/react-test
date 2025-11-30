import HeroSection from "@/components/about/HeroSection";
import CapabilitiesSection from "@/components/about/CapabilitiesSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import ProjectsSection from "@/components/about/ProjectsSection";
import FeatureSection from "@/components/about/FeatureSection";
import Header from "@/components/layout/Header";
import { Bot, Clapperboard, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutContainer = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      
      <main>
        <HeroSection />

        <FeatureSection
          subtitle={t('feature.platform.subtitle')}
          title={t('feature.platform.title')}
          description={[
            t('feature.platform.desc_1'),
            t('feature.platform.desc_2'),
          ]}
          icon={Bot}
          bgColor="bg-background"
        />

        <FeatureSection
          subtitle={t('feature.content.subtitle')}
          title={t('feature.content.title')}
          description={[
            t('feature.content.desc_1'),
            t('feature.content.desc_2'),
          ]}
          icon={Clapperboard}
          isReversed
          bgColor="bg-brand-50/50 dark:bg-muted/30" // 다크모드에서는 muted 배경 사용
        />

        <FeatureSection
          subtitle={t('feature.space.subtitle')}
          title={t('feature.space.title')}
          description={[
             t('feature.space.desc_1'),
             t('feature.space.desc_2'),
          ]}
          icon={MapPin}
          bgColor="bg-background"
        />
        
        <CoreValuesSection />
        
        <CapabilitiesSection />

        <ProjectsSection />
      </main>
      
      <footer className="border-t border-border bg-muted/30 py-16 text-center text-muted-foreground">
        <div className="container mx-auto px-4">
          {/* Logo or Brand Name */}
          <div className="mb-6">
            <span className="text-lg font-bold tracking-tight text-foreground">
              ENGINEER<span className="text-brand-500">1</span>
            </span>
          </div>
          
          {/* Address & Contact Info */}
          <div className="mb-8 flex flex-col items-center justify-center gap-3 text-sm leading-relaxed md:flex-row md:gap-8">
            <p>
              <span className="mr-2 font-semibold text-foreground">{t('footer.address_label')}</span>
              {t('footer.address_value')}
            </p>
            <span className="hidden h-3 w-px bg-border md:block"></span>
            <p>
              <span className="mr-2 font-semibold text-foreground">{t('footer.contact_label')}</span>
              <a href="mailto:info@engineer1.net" className="hover:text-brand-500 transition-colors">
                info@engineer1.net
              </a>
            </p>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutContainer;
