import ContactContainer from "@/containers/ContactContainer";
import SEO from "@/components/layout/SEO";

const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Contact ENGINEER1. We are waiting for your inquiries about AI solutions and content collaboration."
      />
      <ContactContainer />
    </>
  );
};

export default ContactPage;

