# Rules

- This repo is a clone of David Heckhoff's portfolio-2025 (Vue 3 + three.js). Goal: keep it IDENTICAL in design, animation, 3D, sounds and behaviour; only replace content with Ravi Shankar's info and add the contact form.
- Read this file once at the start of a task. Do not re-read it, and do not edit it.

## NEVER edit
- src/three/**, src/animations/**, src/composables/**, src/assets/styles/**
- shaders (*.glsl), *.glb, textures, sounds, music, fonts
- vite.config.ts, tsconfig*.json

## Allowed to edit
- index.html, public/meta/*
- public/legal.html, public/privacy.html, public/de/legal.html, public/de/privacy.html
- src/content/** (including src/content/emailjs.ts)
- src/i18n/messages/**
- src/components/tagVariants.ts
- src/components/Footer.vue (copyright name, and removing the "Privacy" and "Legal Notice" links only)
- src/features/home/components/{Hero,BoxDescription,BoxDetails,BoxServices}.vue (text only)
- src/features/home/components/Projects.vue (only the "+" placeholder card)
- src/components/ContactForm.vue (new file)
- src/components/Header.vue, src/components/Social.vue, src/features/home/components/Contact.vue, src/App.vue (only the minimal wiring that opens the contact form)
- vercel.json (new file)
- src/assets/images/projects/**, src/assets/thumbnails/**
- README.md (add my section at the top, keep Credits unchanged)
- package.json (only to add @emailjs/browser)

## Rules for every task
- Keep both EN and DE (translate my copy to German properly).
- Run `npm run typecheck` and `npm run build` after every task.
- Make the smallest change needed and say what you changed.
- Old site files are in C:\Users\ravis\old-site (assets/images, assets/projects, assets/files, assets/certificates, assets/proofs, script.js, index.html).

## Owner info
- Name: Ravi Shankar. Email: ravishankarx2005@gmail.com. GitHub: https://github.com/shanky-ux. Site: https://ravish4nkar.vercel.app. Chennai, India.