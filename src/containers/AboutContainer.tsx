import HeroSection from "@/components/about/HeroSection";
import CapabilitiesSection from "@/components/about/CapabilitiesSection";
import CoreValuesSection from "@/components/about/CoreValuesSection";
import ProjectsSection from "@/components/about/ProjectsSection";
import FeatureSection from "@/components/about/FeatureSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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

      <Footer />
    </div>
  );
};

export default AboutContainer;
