import orbitxos0 from "../../../assets/images/projects/orbitxos/orbitxos-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "OrbitXOS Dashboard",
  theme: "light",
  tags: ["react", "typescript", "tailwind"],
  videoBorder: false,
  live: "https://orbitxos-5b09.onrender.com/",
  description:
    "OrbitXOS ist ein responsives Business-Dashboard, das mit React und TypeScript erstellt wurde. Es bietet eine saubere, moderne Benutzeroberfläche mit wiederverwendbaren Komponenten und nahtloser REST-API-Integration.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: orbitxos0,
        alt: "OrbitXOS Dashboard",
        caption: "OrbitXOS Dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
