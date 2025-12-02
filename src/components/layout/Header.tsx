import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/theme-provider";
import { useTranslation } from "react-i18next";
import { Moon, Sun, Globe } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logoUrl from "@/assets/images/logo.png";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'ko' ? 'en' : 'ko';
    i18n.changeLanguage(nextLang);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo Area */}
        <Link to="/" className="flex items-center h-7">
          <img
            src={logoUrl}
            alt="ENGINEER1"
            className="w-auto h-7 -mt-2"
          />
        </Link>

        {/* Navigation */}
        {/* <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">{t('nav.about')}</Link>            
        </nav> */}

        {/* Controls & CTA */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleLanguage} className="text-muted-foreground hover:text-foreground">
            <Globe className="size-5" />
            <span className="sr-only">Toggle Language</span>
          </Button>

          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-muted-foreground hover:text-foreground">
            <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>

          <Button
            className="ml-2 rounded-full px-6 hidden sm:inline-flex"
            onClick={() => navigate('/contact')}
          >
            {t('nav.contact')}
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
