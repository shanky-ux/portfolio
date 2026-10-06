import student0 from "../../../assets/images/projects/student-performance/student-performance-0.webp";
import type { ProjectContent } from "../../types";

export default {
  title: "Student Performance AI",
  theme: "dark",
  tags: ["python", "flask", "scikit-learn"],
  videoBorder: false,
  live: "https://predicting-student-performance-with.onrender.com",
  description:
    "A machine learning application that predicts student mathematics scores based on demographic and academic data. It utilizes a complete end-to-end ML pipeline, from preprocessing to deployment.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: student0,
        alt: "Student Performance AI",
        caption: "Student Performance AI",
      },
    },
  ],
} as const satisfies ProjectContent;
