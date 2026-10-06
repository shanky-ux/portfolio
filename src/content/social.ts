export const social = [
  { url: "mailto:ravishankarx2005@gmail.com", name: "mail" },
  { url: "https://github.com/shanky-ux", name: "github" },
  { url: "https://www.linkedin.com/in/ravi-shankar-b-77b5b9377/", name: "linkedin" },
  //{ url: "https://www.instagram.com/davidhckh/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" }[];
