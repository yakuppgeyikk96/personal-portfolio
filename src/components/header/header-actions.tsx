import ContactMeButton from "../common/contact-me-button";
import CVDownloadButton from "../common/cv-download-button";

export default function HeaderActions() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-12">
      <ContactMeButton />
      <CVDownloadButton />
    </div>
  );
}
