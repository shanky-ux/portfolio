import digiverify0 from "../../../assets/images/projects/digiverify/digiverify-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "DigiVerify AI",
  theme: "dark",
  tags: ["python", "flask", "react", "typescript", "postgresql"],
  videoBorder: false,
  live: "https://digiverify-ai-6.onrender.com/",
  description:
    "DigiVerify AI ist eine KI-gestützte Betrugserkennungsplattform. Sie kombiniert ein robustes Flask-Backend mit einem React-Frontend, um Echtzeit-Betrugsanalysen und -verifizierungen bereitzustellen, und gewann den 1. Platz beim CareHack'26.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: digiverify0,
        alt: "DigiVerify AI Dashboard",
        caption: "DigiVerify AI Dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
