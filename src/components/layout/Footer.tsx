import { useTranslation } from "react-i18next";
import logoUrl from "@/assets/images/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-muted/30 py-16 text-center text-muted-foreground">
      <div className="container mx-auto px-4">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img
            src={logoUrl}
            alt="ENGINEER1"
            className="h-6 w-auto"
          />
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
  );
};

export default Footer;

