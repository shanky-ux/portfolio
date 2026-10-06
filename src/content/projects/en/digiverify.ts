import digiverify0 from "../../../assets/images/projects/digiverify/digiverify-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "DigiVerify AI",
  theme: "dark",
  tags: ["python", "flask", "react", "typescript", "postgresql"],
  videoBorder: false,
  live: "https://digiverify-ai-6.onrender.com/",
  description:
    "DigiVerify AI is an AI-powered fraud detection platform. It combines a robust Flask backend with a React frontend to provide real-time fraud analysis and verification, winning 1st place at CareHack'26.",
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
