import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLanguage } from "../../context/LanguageContext";
import { contactFormSchema, ContactFormData } from "./schema";

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = () => {
  const { t } = useLanguage();
  const {
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  return (
    <form
      action="https://formsubmit.co/yakuppgeyik@gmail.com"
      method="POST"
      className="space-y-6"
    >
      <input type="hidden" name="_next" value="https://yakupgeyik.com" />
      <input
        type="hidden"
        name="_subject"
        value="New Contact Form Submission!"
      />
      <input type="text" name="_honey" style={{ display: "none" }} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="true" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            {t("contact.form.name")}
          </label>
          <input
            id="name"
            {...register("name")}
            className={`w-full px-4 py-2 rounded-lg bg-dark-800/50 border text-gray-200 focus:outline-none transition-colors ${
              errors.name
                ? "border-red-500/50 focus:border-red-500/50"
                : "border-dark-700/50 focus:border-purple-500/50"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">
              {t(errors.name.message!)}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            {t("contact.form.email")}
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`w-full px-4 py-2 rounded-lg bg-dark-800/50 border text-gray-200 focus:outline-none transition-colors ${
              errors.email
                ? "border-red-500/50 focus:border-red-500/50"
                : "border-dark-700/50 focus:border-purple-500/50"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">
              {t(errors.email.message!)}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {t("contact.form.subject")}
        </label>
        <input
          id="subject"
          {...register("subject")}
          className={`w-full px-4 py-2 rounded-lg bg-dark-800/50 border text-gray-200 focus:outline-none transition-colors ${
            errors.subject
              ? "border-red-500/50 focus:border-red-500/50"
              : "border-dark-700/50 focus:border-purple-500/50"
          }`}
        />
        {errors.subject && (
          <p className="mt-1 text-sm text-red-500">
            {t(errors.subject.message!)}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          {t("contact.form.message")}
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className={`w-full px-4 py-2 rounded-lg bg-dark-800/50 border text-gray-200 focus:outline-none transition-colors resize-none ${
            errors.message
              ? "border-red-500/50 focus:border-red-500/50"
              : "border-dark-700/50 focus:border-purple-500/50"
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">
            {t(errors.message.message!)}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium transition-all duration-300 ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
        }`}
      >
        {isSubmitting ? t("contact.form.submitting") : t("contact.form.submit")}
      </button>
    </form>
  );
};

export default ContactForm;
