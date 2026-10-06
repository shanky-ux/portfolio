import applivo0 from "../../../assets/images/projects/applivo/applivo-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Applivo",
  theme: "dark",
  tags: ["python", "fastapi", "flask", "react", "typescript", "postgresql", "docker"],
  videoBorder: false,
  live: "https://applivo.in",
  description:
    "Applivo ist eine produktionsreife KI-Orchestrierungsplattform. Sie optimiert komplexe Arbeitsabläufe durch die Integration intelligenter Agenten in Backend-Verarbeitungspipelines.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: applivo0,
        alt: "Applivo Dashboard",
        caption: "Applivo Dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
