export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "python"
  | "fastapi"
  | "flask"
  | "typescript"
  | "docker"
  | "tailwind"
  | "scikit-learn"
  | "tensorflow";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  python: "Python",
  fastapi: "FastAPI",
  flask: "Flask",
  typescript: "TypeScript",
  docker: "Docker",
  tailwind: "Tailwind CSS",
  "scikit-learn": "Scikit-learn",
  tensorflow: "TensorFlow",
} as const satisfies Record<TagVariant, string>;
