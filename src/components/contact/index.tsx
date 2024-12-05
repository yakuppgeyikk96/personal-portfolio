// components/contact/index.tsx
import { useLanguage } from "../../context/LanguageContext";
import { CONTACT_CARDS } from "./constants";
import ContactCard from "./contact-card";
import ContactForm from "./contact-form";
import { ContactFormData } from "./types";

const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = (data: ContactFormData) => {
    // Form submission logic here
    console.log(data);
  };

  return (
    <section className="py-20 relative" id="contact">
      {/* Gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800/0 via-dark-800/50 to-dark-800/0" />

      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-gray-400 text-lg">{t("contact.description")}</p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:w-1/2 lg:mx-auto gap-6 mb-16">
          {CONTACT_CARDS.map((card, index) => (
            <ContactCard key={index} {...card} />
          ))}
        </div>

        {/* Contact form */}
        <div className="max-w-2xl mx-auto">
          <ContactForm onSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
