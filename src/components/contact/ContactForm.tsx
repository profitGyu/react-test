import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Label } from "@/components/ui/Label";

const ContactForm = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic (e.g., API call)
    alert("메시지가 전송되었습니다. (데모 기능)");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full mx-auto bg-card rounded-2xl border border-border shadow-sm p-8 md:p-10"
    >
      <h2 className="text-3xl font-bold mb-8 text-foreground">
        {t('contact.form.title')}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">{t('contact.form.name')}</Label>
          <Input
            id="name"
            placeholder={t('contact.form.placeholder_name')}
            className="bg-background/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{t('contact.form.email')}</Label>
          <Input
            id="email"
            type="email"
            placeholder={t('contact.form.placeholder_email')}
            className="bg-background/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">{t('contact.form.subject')}</Label>
          <Input
            id="subject"
            placeholder={t('contact.form.placeholder_subject')}
            className="bg-background/50"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">{t('contact.form.message')}</Label>
          <Textarea
            id="message"
            placeholder={t('contact.form.placeholder_message')}
            className="bg-background/50 min-h-[150px] resize-none"
          />
        </div>

        <div className="pt-4 flex justify-end">
          <Button type="submit" size="lg" className="rounded-full px-8 font-semibold">
            {t('contact.form.submit')}
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default ContactForm;

