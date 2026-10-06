import veloura0 from "../../../assets/images/projects/veloura/veloura-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Veloura",
  theme: "dark",
  tags: ["react", "typescript", "node", "postgresql"],
  videoBorder: false,
  live: "https://veloura-nvsw.onrender.com/",
  description:
    "Veloura ist ein luxuriöser E-Commerce-Shop, der für ein nahtloses Einkaufserlebnis entwickelt wurde. Er bietet integrierte Produktsuche, einen dynamischen Warenkorb, die Nachverfolgung der Bestellhistorie und eine sichere Benutzeranmeldung.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: veloura0,
        alt: "Veloura Storefront",
        caption: "Veloura Storefront",
      },
    },
  ],
} as const satisfies ProjectContent;
