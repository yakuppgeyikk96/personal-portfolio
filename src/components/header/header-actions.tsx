import { FileText, Mail } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function HeaderActions() {
  const { t } = useLanguage();

  const contactText = t("header.buttons.contact");
  const cvDownloadText = t("header.buttons.cv");

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-12">
      <button className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
        <Mail size={20} />
        <span>{contactText}</span>
      </button>
      <button className="w-full md:w-auto px-6 py-3 border border-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
        <FileText size={20} />
        <span>{cvDownloadText}</span>
      </button>
    </div>
  );
}
