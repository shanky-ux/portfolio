import student0 from "../../../assets/images/projects/student-performance/student-performance-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Student Performance AI",
  theme: "dark",
  tags: ["python", "flask", "scikit-learn"],
  videoBorder: false,
  live: "https://predicting-student-performance-with.onrender.com",
  description:
    "Eine Anwendung für maschinelles Lernen, die mathematische Testergebnisse von Schülern basierend auf demografischen und akademischen Daten vorhersagt. Sie nutzt eine vollständige End-to-End-ML-Pipeline, von der Vorverarbeitung bis zur Bereitstellung.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: student0,
        alt: "Student Performance AI",
        caption: "Student Performance AI",
      },
    },
  ],
} as const satisfies ProjectContent;
