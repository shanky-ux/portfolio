import skin0 from "../../../assets/images/projects/skin-scan/skin-scan-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Skin Disease Classifier",
  theme: "dark",
  tags: ["python", "tensorflow", "flask", "postgresql", "docker"],
  videoBorder: false,
  description:
    "Ein CNN-basiertes System zur Klassifizierung von Hautkrankheiten mit ~90% Genauigkeit. Das Projekt umfasst ein vollständiges Flask-API-Backend und eine dockerisierte Umgebung für eine zuverlässige Bereitstellung.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: skin0,
        alt: "Skin Disease Classifier Dashboard",
        caption: "Skin Disease Classifier Dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
