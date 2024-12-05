import React, { useState } from "react";
import { FileText, Download } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const CVDownloadButton: React.FC = () => {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    const cvUrl = "/documents/yakup-geyik-cv.pdf";
    setIsDownloading(true);
    setProgress(0);

    try {
      const response = await fetch(cvUrl);
      const reader = response.body?.getReader();
      const contentLength = +response.headers.get("Content-Length")!;

      let receivedLength = 0;
      const chunks = [];

      if (!reader) {
        throw new Error("Reader not available");
      }

      while (true) {
        const { done, value } = await reader.read();

        if (done) break;

        chunks.push(value);
        receivedLength += value.length;

        const progressPercentage = (receivedLength / contentLength) * 100;
        setProgress(progressPercentage);
      }

      const blob = new Blob(chunks);
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "yakup-geyik-cv.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsDownloading(false);
      setProgress(0);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="group relative px-6 py-3 border border-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 transition-all duration-300 inline-flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FileText className="w-5 h-5" />
        <span>
          {isDownloading ? t("common.downloading") : t("common.downloadCV")}
        </span>
        <Download
          className={`w-4 h-4 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ${
            isDownloading ? "animate-bounce" : ""
          }`}
        />
      </button>

      {isDownloading && (
        <div className="absolute left-0 bottom-0 w-full h-1 bg-gray-700 rounded-b-lg overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
};

export default CVDownloadButton;
