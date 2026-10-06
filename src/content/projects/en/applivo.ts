import applivo0 from "../../../assets/images/projects/applivo/applivo-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Applivo",
  theme: "dark",
  tags: ["python", "fastapi", "flask", "react", "typescript", "postgresql", "docker"],
  videoBorder: false,
  live: "https://applivo.in",
  description:
    "Applivo is a production-ready AI orchestration platform. It streamlines complex workflows by integrating intelligent agents with backend processing pipelines.",
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
