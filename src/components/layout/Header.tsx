import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/theme-provider";
import { useTranslation } from "react-i18next";
import { Moon, Sun, Globe } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

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
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M12 2a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4v2a2 2 0 0 1-4 0v-2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2zm0 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            ENGINEER<span className="text-primary">1</span>
          </span>
        </Link>

        {/* Navigation */}
        {/* <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">{t('nav.about')}</Link>            
        </nav> */}

        {/* Controls & CTA */}
        <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleLanguage} className="text-muted-foreground hover:text-foreground">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Toggle Language</span>
            </Button>
            
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-muted-foreground hover:text-foreground">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
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
