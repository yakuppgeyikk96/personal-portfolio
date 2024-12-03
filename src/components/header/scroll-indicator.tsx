import { ArrowDown } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export default function ScrollIndicator() {
  const { t } = useLanguage();

  return (
    <div className="absolute -bottom-36 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-gray-400 z-10">
      <span className="text-sm">{t("header.scroll")}</span>
      <ArrowDown size={20} className="animate-bounce" />
    </div>
  );
}
