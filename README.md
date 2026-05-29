# Sacha Alips — Portfolio

Portfolio personnel single-page construit avec Next.js 16, Tailwind CSS 4, Framer Motion et Lenis.

---

## Lancer en local

```bash
pnpm dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Déployer sur Vercel

```bash
vercel deploy
```

Ou connecte le repo GitHub à Vercel — le déploiement est automatique à chaque push.

---

## ✅ Checklist des fichiers à déposer dans `/public/`

| Fichier | Specs |
|---|---|
| `sacha-portrait.jpg` | Portrait B&W hero |
| `projects/project-01.jpg` | Visuel Projet 01 (toute résolution, ratio libre) |
| `projects/project-02.jpg` | Visuel Projet 02 (toute résolution, ratio libre) |
| `videos/video-01.mp4` | YouTube 16:9 horizontal — ~10s loop muet, MP4 H.264, < 5 MB |
| `videos/video-02.mp4` | TikTok sport 9:16 vertical — ~10s loop muet, MP4 H.264, < 5 MB |
| `videos/video-03.mp4` | TikTok trend 9:16 vertical — ~10s loop muet, MP4 H.264, < 5 MB |
| `cv-sacha-alips.pdf` | CV téléchargeable (lien déjà câblé) |

> **Liens déjà câblés en dur** : LinkedIn (`https://www.linkedin.com/in/sacha-alips-a50593294/`) et CV (`/cv-sacha-alips.pdf`) — rien à modifier dans le code.

---

## 🔧 Autres placeholders à swap si besoin

### 1. Email de contact
**Fichier :** `src/components/Contact.tsx`
- `href="mailto:sacha.alips@gmail.com"` → swap si l'email change.

### 2. Noms des projets freelance
**Fichier :** `src/components/Projects.tsx`
- `name: 'PROJET 01'` / `'PROJET 02'` → remplace par les vrais noms.
- `desc:` → remplace les descriptions par les vraies.

### 3. Noms d'agences (optionnel)
**Fichier :** `src/components/Experiences.tsx`
- `company: 'Agence de communication'` → swap si tu veux afficher les vrais noms.

---

## Stack

| Outil | Rôle |
|---|---|
| Next.js 16 | Framework React — App Router |
| Tailwind CSS 4 | Utility-first CSS — config dans `globals.css` via `@theme` |
| Framer Motion 12 | Animations scroll, whileInView, spring |
| Lenis 1.x | Smooth scroll |
| next/font | Google Fonts auto-hébergées (Anton, Instrument Serif, JetBrains Mono, Inter) |

---

## Structure

```
src/
  app/
    layout.tsx            → Fonts, metadata, providers
    page.tsx              → Assemblage des sections
    globals.css           → Tailwind @theme, grain, marquee CSS
    opengraph-image.tsx   → OG image générée dynamiquement
  components/
    Nav.tsx               → Navigation sticky + burger mobile
    Hero.tsx              → Titre display + cercle marker animé
    About.tsx             → Présentation + 3 piliers
    Parcours.tsx          → Timeline éducation avec ligne animée
    Experiences.tsx       → Cartes de stages
    Projects.tsx          → Projets freelance avec parallax image
    Ecommerce.tsx         → Boutique Shopify + stats display
    Skills.tsx            → Compétences + chips outils
    Contact.tsx           → Email animé au hover + boutons
    Footer.tsx
    SmoothScrollProvider.tsx
    CursorFollower.tsx
    GrainOverlay.tsx
    MarkerCircle.tsx
    MarkerUnderline.tsx
    Marquee.tsx
    SectionLabel.tsx
  lib/
    fonts.ts
    utils.ts
public/
  projects/
    README.txt            → Instructions images
  cv-sacha-alips.pdf      → À déposer
```
