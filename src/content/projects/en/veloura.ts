import veloura0 from "../../../assets/images/projects/veloura/veloura-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Veloura",
  theme: "dark",
  tags: ["react", "typescript", "node", "postgresql"],
  videoBorder: false,
  live: "https://veloura-nvsw.onrender.com/",
  description:
    "Veloura is a luxury e-commerce storefront designed for a seamless shopping experience. It features integrated product search, a dynamic shopping cart, order history tracking, and secure user sign-in.",
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
