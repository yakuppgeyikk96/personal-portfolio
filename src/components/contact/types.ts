export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  link?: string;
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}
