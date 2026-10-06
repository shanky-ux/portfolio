import skin0 from "../../../assets/images/projects/skin-scan/skin-scan-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Skin Disease Classifier",
  theme: "dark",
  tags: ["python", "tensorflow", "flask", "postgresql", "docker"],
  videoBorder: false,
  description:
    "A CNN-based system designed to classify skin diseases with ~90% accuracy. The project includes a complete Flask API backend and dockerized environment for reliable deployment.",
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
