import orbitxos0 from "../../../assets/images/projects/orbitxos/orbitxos-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "OrbitXOS Dashboard",
  theme: "light",
  tags: ["react", "typescript", "tailwind"],
  videoBorder: false,
  live: "https://orbitxos-5b09.onrender.com/",
  description:
    "OrbitXOS is a responsive business dashboard built with React and TypeScript. It features a clean, modern UI with reusable components and seamless REST API integration.",
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
