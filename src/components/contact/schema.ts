import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "contact.form.errors.nameMin")
    .max(50, "contact.form.errors.nameMax"),
  email: z.string().email("contact.form.errors.emailInvalid"),
  subject: z
    .string()
    .min(3, "contact.form.errors.subjectMin")
    .max(100, "contact.form.errors.subjectMax"),
  message: z
    .string()
    .min(10, "contact.form.errors.messageMin")
    .max(1000, "contact.form.errors.messageMax"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
