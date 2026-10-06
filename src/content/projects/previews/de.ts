import thumbnailApplivo from "../../../assets/thumbnails/applivo.webp";
import thumbnailVeloura from "../../../assets/thumbnails/veloura.webp";
import thumbnailOrbitxos from "../../../assets/thumbnails/orbitxos.webp";
import thumbnailDigiverify from "../../../assets/thumbnails/digiverify.webp";
import thumbnailStudentPerformance from "../../../assets/thumbnails/student-performance.webp";
import thumbnailSkinScan from "../../../assets/images/projects/skin-scan/skin-scan-0.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Applivo",
    slug: "applivo",
    thumbnail: thumbnailApplivo,
    description: "KI-Orchestrierungsplattform",
  },
  {
    title: "Veloura",
    slug: "veloura",
    thumbnail: thumbnailVeloura,
    description: "E-Commerce-Shop",
  },
  {
    title: "OrbitXOS Dashboard",
    slug: "orbitxos",
    thumbnail: thumbnailOrbitxos,
    description: "Responsives Business-Dashboard",
  },
  {
    title: "DigiVerify AI",
    slug: "digiverify",
    thumbnail: thumbnailDigiverify,
    description: "KI-Betrugserkennung",
  },
  {
    title: "Student Performance AI",
    slug: "student-performance",
    thumbnail: thumbnailStudentPerformance,
    description: "ML Vorhersage-App",
  },
  {
    title: "Skin Disease Classifier",
    slug: "skin-scan",
    thumbnail: thumbnailSkinScan,
    description: "Krankheitsklassifizierungssystem",
  },
] as const satisfies ProjectPreview[];
