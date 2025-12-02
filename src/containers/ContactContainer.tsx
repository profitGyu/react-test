import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import KakaoMap from "@/components/contact/KakaoMap";
import ContactForm from "@/components/contact/ContactForm";

const ContactContainer = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />

      <main className="pt-20">
        {/* Hero / Title */}
        <section className="py-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl"
          >
            {t('contact.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            {t('contact.subtitle')}
          </motion.p>
        </section>

        <div className="container mx-auto mb-24 px-4">

          {/* 1. Info & Form Grid (Side by Side) */}
          <div className="grid gap-8 lg:grid-cols-2 mb-24 items-start">

            {/* Left: Info Cards (Moved here) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="rounded-2xl border border-border bg-card p-8 md:p-10 shadow-sm flex flex-col">
                <h3 className="mb-10 text-3xl font-bold text-foreground">{t('contact.info_title')}</h3>

                <div className="space-y-10">
                  {/* Address Item */}
                  <div className="flex items-start gap-6">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">
                      <MapPin className="size-7" />
                    </div>
                    <div>
                      <p className="mb-2 font-bold text-xl">{t('contact.map_title')}</p>
                      <p className="text-muted-foreground text-lg leading-relaxed">{t('contact.address')}</p>
                    </div>
                  </div>

                  {/* Email Item */}
                  <div className="flex items-start gap-6">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400">
                      <Mail className="size-7" />
                    </div>
                    <div>
                      <p className="mb-2 font-bold text-xl">{t('contact.email_label')}</p>
                      <a href="mailto:info@engineer1.net" className="text-lg font-medium text-brand-600 hover:text-brand-700 hover:underline dark:text-brand-400 transition-colors">
                        info@engineer1.net
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form (Moved here) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <ContactForm />
            </motion.div>
          </div>


          {/* 2. Map Section (Bottom, Full Width) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="w-full"
          >
            <h3 className="text-2xl font-bold mb-6 px-1">{t('contact.map_title')}</h3>
            <div className="relative h-[500px] w-full overflow-hidden rounded-3xl bg-muted shadow-sm ring-1 ring-border">
              <KakaoMap />
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactContainer;
