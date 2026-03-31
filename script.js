/* ============================================================
   DARK DEVELOPER PORTFOLIO — script.js
   Made with ❤️ by sae.py | SynthX Development · © 2026
   ============================================================

   ✏️  EDIT THE CONFIG OBJECT BELOW TO PERSONALISE YOUR PORTFOLIO.
       No build tools, no frameworks — just plain HTML/CSS/JS.

   ============================================================ */

const CONFIG = {

  /* ──────────────────────────────────────────────────────────
     SITE
  ────────────────────────────────────────────────────────── */
  siteTitle: "Your Name — Developer Portfolio",

  /* ──────────────────────────────────────────────────────────
     NAVBAR LOGO  (usually your initials)
  ────────────────────────────────────────────────────────── */
  navLogo: "YN",

  /* ──────────────────────────────────────────────────────────
     PROFILE PICTURE
     ─────────────────────────────────────────────────────────
     Pick ONE avatarMode:

     "local"           → Drop your photo at  assets/avatar.png
                         (or change localAvatarPath below)
                         EASIEST for a custom image.

     "discord-lanyard" → Auto-fetches your Discord avatar.
                         Only your Discord User ID is needed!
                         ① Enable Developer Mode in Discord:
                            Settings → Advanced → Developer Mode
                         ② Right-click your name → Copy User ID
                         ③ Paste it in discordUserId below.
                         ④ Join the Lanyard server so your
                            presence is tracked:
                            https://discord.gg/lanyard

     "custom"          → Any direct image URL (Imgur, CDN, etc.)

     "initials"        → Shows initials (default / fallback)
  ────────────────────────────────────────────────────────── */
  avatarMode: "local",          // "local" | "discord-lanyard" | "custom" | "initials"

  localAvatarPath: "assets/avatar.png",   // used when avatarMode = "local"

  discordUserId:   "000000000000000000",  // used when avatarMode = "discord-lanyard"

  customPfpUrl:    "https://i.imgur.com/YOURIMAGE.png", // used when avatarMode = "custom"

  avatarInitials:  "YN",                 // fallback if image fails to load

  /* ──────────────────────────────────────────────────────────
     HERO
  ────────────────────────────────────────────────────────── */
  heroGreeting: "Hello, I'm",
  heroName:     "Your Name",
  heroRole:     "Full-Stack Developer",
  heroTagline:  "I build clean, fast, and accessible web experiences.",

  /* ──────────────────────────────────────────────────────────
     ABOUT
  ────────────────────────────────────────────────────────── */
  aboutParagraph1:
    "I'm a passionate developer with a love for building beautiful and " +
    "functional web applications. I focus on writing clean, maintainable " +
    "code and delivering smooth user experiences across all devices.",
  aboutParagraph2:
    "When I'm not coding, you'll find me exploring new frameworks, " +
    "contributing to open-source projects, or working on side projects " +
    "to sharpen my skills.",

  factYears:    "2+",
  factProjects: "10+",
  factCoffee:   "∞",

  /* ──────────────────────────────────────────────────────────
     SKILLS
     icon key must exist in SKILL_ICONS below.
     Add / remove / reorder freely.
  ────────────────────────────────────────────────────────── */
  skills: [
    { icon: "html",       name: "HTML" },
    { icon: "css",        name: "CSS" },
    { icon: "javascript", name: "JavaScript" },
    { icon: "react",      name: "React" },
    { icon: "typescript", name: "TypeScript" },
    { icon: "nodejs",     name: "Node.js" },
    { icon: "git",        name: "Git" },
    { icon: "docker",     name: "Docker" },
    { icon: "figma",      name: "Figma" },
    { icon: "python",     name: "Python" },
    { icon: "database",   name: "SQL" },
    { icon: "terminal",   name: "CLI" },
  ],

  /* ──────────────────────────────────────────────────────────
     PROJECTS
     link: live URL or GitHub repo ("" = hides the button)
     tech: array of badge strings
  ────────────────────────────────────────────────────────── */
  projects: [
    {
      tag:  "Web App",
      name: "Project One",
      desc: "A full-stack task management app with real-time updates, drag-and-drop, and team collaboration features.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      tag:  "E-Commerce",
      name: "Project Two",
      desc: "A modern e-commerce storefront with cart functionality, Stripe payments, and a responsive product catalog.",
      tech: ["Next.js", "Tailwind", "Stripe"],
      link: "#",
    },
    {
      tag:  "Open Source",
      name: "Project Three",
      desc: "A developer utility CLI tool that automates boilerplate generation and project scaffolding for common stacks.",
      tech: ["Node.js", "TypeScript", "CLI"],
      link: "#",
    },
  ],

  /* ──────────────────────────────────────────────────────────
     CONTACT FORM
     ─────────────────────────────────────────────────────────
     This portfolio uses Formspree to send emails — no backend
     needed!  Follow these steps to activate the form:

     ① Go to https://formspree.io and sign up (free).
     ② Click "New Form", give it a name, and copy your Form ID.
        It looks like:  xpzgkdqb
     ③ Paste it in formspreeId below.

     Leave formspreeId empty ("") to disable the form and fall
     back to a plain mailto: link instead.
  ────────────────────────────────────────────────────────── */
  formspreeId: "",                       // e.g. "xpzgkdqb"

  contactText:
    "Have a project in mind or want to collaborate? " +
    "Drop me a message and I'll get back to you as soon as possible.",
  contactEmail: "hello@yourname.com",

  /* ──────────────────────────────────────────────────────────
     SOCIAL LINKS
     Supported icons: github | linkedin | twitter | discord | website
     Remove any entry to hide it.
  ────────────────────────────────────────────────────────── */
  socials: [
    { label: "GitHub",   icon: "github",   url: "https://github.com/yourusername" },
    { label: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/yourusername" },
    { label: "Discord",  icon: "discord",  url: "https://discord.com/users/youruserid" },
  ],

  /* ──────────────────────────────────────────────────────────
     FOOTER  (do not remove — credits must stay)
  ────────────────────────────────────────────────────────── */
  footerAuthor: "sae.py",
  footerOrg:    "SynthX Development",

  /* ──────────────────────────────────────────────────────────
     ACCENT COLOUR  (default: Red)
     Any valid CSS hex.  Users can also change it live via the
     colour-palette widget in the bottom-right corner.
  ────────────────────────────────────────────────────────── */
  accentColor: "#e53935",

};

/* ============================================================
   APPLY ACCENT — runs immediately to avoid a colour flash
   Uses saved localStorage value first, then CONFIG fallback.
   ============================================================ */
(function () {
  let hex = CONFIG.accentColor;
  try {
    const saved = localStorage.getItem("portfolio_accent");
    if (saved && /^#[0-9a-fA-F]{6}$/.test(saved)) hex = saved;
  } catch (_) {}
  _applyAccent(hex);
})();

function _applyAccent(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const root = document.documentElement;
  root.style.setProperty("--accent",      hex);
  root.style.setProperty("--accent-dim",  `rgba(${r},${g},${b},0.13)`);
  root.style.setProperty("--accent-glow", `rgba(${r},${g},${b},0.30)`);
  try { localStorage.setItem("portfolio_accent", hex); } catch (_) {}
}

/* ============================================================
   SKILL SVG ICONS  (24×24 viewBox, fill via CSS currentColor)
   ============================================================ */
const SKILL_ICONS = {
  html: `<svg viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>`,

  css: `<svg viewBox="0 0 24 24"><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/></svg>`,

  javascript: `<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>`,

  typescript: `<svg viewBox="0 0 24 24"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"/></svg>`,

  react: `<svg viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 0 0-1.098-.278zm-.005 1.09c.176 0 .34.047.493.139.473.274.675 1.05.577 2.233-.023.264-.066.549-.121.843a13.818 13.818 0 0 0-1.89-.364 13.676 13.676 0 0 0-1.245-1.572c.365-.368.73-.695 1.079-.966.397-.307.771-.46 1.107-.313zm-9.344.45c.327 0 .7.155 1.097.46.35.27.716.598 1.082.968A13.7 13.7 0 0 0 8.44 5.65a13.818 13.818 0 0 0-1.875.364 8.94 8.94 0 0 1-.12-.836c-.1-1.18.098-1.958.57-2.234a.94.94 0 0 1 .494-.14zm4.814 2.634c.344.42.663.863.958 1.32-.308-.016-.622-.025-.94-.025-.314 0-.626.008-.932.023.297-.458.618-.903.914-1.318zm-5.77 1.637a12.612 12.612 0 0 1 1.697-.324 12.544 12.544 0 0 1-.74 1.557 12.66 12.66 0 0 1-1.16 1.572c-.463-.43-.876-.869-1.243-1.31-.367-.445-.677-.89-.937-1.334.437-.127.888-.242 1.383-.161zm11.19.32c.494.127.944.24 1.378.367-.26.444-.57.89-.934 1.332-.367.44-.78.88-1.242 1.31a12.537 12.537 0 0 1-1.16-1.572 12.566 12.566 0 0 1-.74-1.558c.58.077 1.14.191 1.698.121zM12 10.158c.486 0 .962.015 1.422.042.447.662.856 1.357 1.212 2.07.356.712.657 1.441.895 2.167a14.45 14.45 0 0 1-3.53.075 14.45 14.45 0 0 1-3.997 0c.237-.726.537-1.455.894-2.167.357-.713.766-1.408 1.104-2.187zm-5.17.898c.39.088.784.195 1.183.33a12.52 12.52 0 0 0-.73 1.562c-.253.638-.47 1.295-.643 1.963-.517-.24-1.005-.504-1.457-.79-.45-.285-.86-.59-1.218-.915.356-.328.764-.641 1.216-.927.45-.284.942-.55 1.648-.222zm10.34 0c.7.326 1.194.591 1.645.875.453.286.86.599 1.218.927-.358.325-.769.63-1.22.915-.45.286-.94.55-1.456.79a13.33 13.33 0 0 0-.643-1.963 12.48 12.48 0 0 0-.73-1.562c.395-.133.79-.24 1.186-.327zm-9.75 4.276a12.65 12.65 0 0 1 1.164 1.573c.462.43.875.869 1.241 1.31.368.444.677.888.937 1.333a13.65 13.65 0 0 1-1.383.366 12.604 12.604 0 0 1-1.697-.323c-.463-.43-.876-.87-1.242-1.31a12.537 12.537 0 0 1-1.16-1.572c.58-.079 1.14-.191 1.698-.322zm8.36.046c.558.13 1.12.243 1.697.322-.463.43-.876.87-1.242 1.31-.367.44-.78.88-1.243 1.31-.494-.127-.944-.24-1.378-.367.26-.445.57-.89.934-1.333.367-.44.78-.88 1.232-1.242zm-4.18.694c.314 0 .626-.01.932-.024a12.544 12.544 0 0 1-.958 1.321c-.346.42-.71.813-1.079 1.168-.368-.355-.73-.748-1.079-1.173a12.612 12.612 0 0 1-.964-1.322c.306.016.618.025.935.025.314 0 .626-.01.932-.024zm-5.44 2.15c-.176 0-.34-.048-.493-.14-.473-.274-.675-1.05-.577-2.234.023-.264.066-.549.121-.842.594.14 1.23.254 1.89.364.378.578.796 1.098 1.244 1.572-.364.368-.73.695-1.078.966-.398.307-.772.46-1.108.314zm10.884-.448c-.174.082-.422.178-.614.178-.335 0-.71-.152-1.108-.46-.348-.27-.714-.598-1.079-.966.449-.474.866-.994 1.245-1.572a13.65 13.65 0 0 0 1.875-.364c.055.293.098.578.12.843.1 1.183-.097 1.96-.57 2.234a.94.94 0 0 1-.494.107z"/></svg>`,

  nodejs: `<svg viewBox="0 0 24 24"><path d="M11.998.01C5.375.01 0 5.388 0 12.012 0 18.635 5.375 24 11.998 24c6.625 0 12.002-5.366 12.002-11.988C24 5.388 18.623.011 11.998.01zm-.003 1.22c.57 0 1.14.14 1.647.422l.3.177-6.38 11.033a.613.613 0 0 1-.535.307.614.614 0 0 1-.613-.611V6.524c0-.34.181-.653.474-.82l5.107-2.952c.326-.19.694-.29 1.063-.29l-.063-.231zM5.19 7.853v5.634l5.174-2.952L5.19 7.853zm13.622.15-5.174 2.952 5.174 2.952V8.003zM6.91 15.042l.65-1.136 5.41 3.13.65 1.136-6.71-3.13zm10.18 0-6.71 3.13.65-1.136 5.41-3.13.65 1.136z"/></svg>`,

  git: `<svg viewBox="0 0 24 24"><path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039 1.837 1.837 0 0 1-2.6-2.59L13.46 8.198v6.57a1.838 1.838 0 0 1 .49 3.59 1.838 1.838 0 0 1-2.26-1.77 1.836 1.836 0 0 1 1-1.645v-6.63a1.836 1.836 0 0 1-1-1.645 1.838 1.838 0 0 1 .09-.57L8.89 5.374 0 14.26a1.55 1.55 0 0 0 0 2.188l10.48 10.48a1.55 1.55 0 0 0 2.187 0l10.879-10.876a1.55 1.55 0 0 0 0-2.188z"/></svg>`,

  docker: `<svg viewBox="0 0 24 24"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/></svg>`,

  figma: `<svg viewBox="0 0 24 24"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.026-4.49 4.515-4.49c2.489 0 4.515 2.014 4.515 4.49S10.661 24 8.172 24zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019 3.019-1.355 3.019-3.019-1.355-3.019-3.019-3.019zm7.856-3.981c0 2.476-2.014 4.49-4.49 4.49s-4.49-2.014-4.49-4.49 2.014-4.49 4.49-4.49 4.49 2.014 4.49 4.49zm-7.51 0c0 1.665 1.355 3.019 3.019 3.019s3.019-1.355 3.019-3.019-1.354-3.02-3.019-3.02-3.019 1.355-3.019 3.02z"/></svg>`,

  python: `<svg viewBox="0 0 24 24"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.835S0 5.789 0 11.969c0 6.18 3.403 5.963 3.403 5.963h2.031v-2.868s-.109-3.402 3.35-3.402h5.766s3.24.052 3.24-3.13V3.13S18.325 0 11.914 0zM8.708 1.81a1.044 1.044 0 1 1 0 2.087 1.044 1.044 0 0 1 0-2.088zM12.086 24c6.094 0 5.714-2.656 5.714-2.656l-.007-2.752h-5.814v-.826h8.186S24 18.211 24 12.031c0-6.18-3.403-5.963-3.403-5.963h-2.031v2.868s.109 3.402-3.35 3.402H9.45s-3.24-.052-3.24 3.13v5.271S5.675 24 12.086 24zm3.206-1.81a1.044 1.044 0 1 1 0-2.088 1.044 1.044 0 0 1 0 2.088z"/></svg>`,

  database: `<svg viewBox="0 0 24 24"><path d="M12 1C7.58 1 4 2.79 4 5v14c0 2.21 3.58 4 8 4s8-1.79 8-4V5c0-2.21-3.58-4-8-4zm0 2c3.87 0 6 1.36 6 2s-2.13 2-6 2-6-1.36-6-2 2.13-2 6-2zm0 16c-3.87 0-6-1.36-6-2v-2.23C7.61 15.58 9.72 16 12 16s4.39-.42 6-1.23V17c0 .64-2.13 2-6 2zm6-6.23C16.39 13.58 14.28 14 12 14s-4.39-.42-6-1.23V10c1.61.81 3.72 1.23 6 1.23S16.39 10.81 18 10v1.77z"/></svg>`,

  terminal: `<svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6.41 16.59L11 12 6.41 7.41 5 8.83 8.17 12 5 15.17l1.41 1.42zM13 16h6v-2h-6v2z"/></svg>`,
};

/* ============================================================
   SOCIAL ICONS
   ============================================================ */
const ICONS = {
  github:   `<svg viewBox="0 0 24 24"><path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 6.82c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297 24 5.67 18.627.297 12 .297z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>`,
  twitter:  `<svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  discord:  `<svg viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.053a19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 13.945 13.945 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,
  website:  `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
};

/* ============================================================
   COLOUR PALETTE WIDGET
   ============================================================ */
const PALETTE_COLORS = [
  { name: "Red",     hex: "#e53935" },  // ← default
  { name: "Crimson", hex: "#d32f2f" },
  { name: "Pink",    hex: "#e91e63" },
  { name: "Violet",  hex: "#7c4dff" },
  { name: "Indigo",  hex: "#5b8af5" },
  { name: "Cyan",    hex: "#00b4d8" },
  { name: "Mint",    hex: "#2ecc71" },
  { name: "Orange",  hex: "#ff8c42" },
];

function buildPaletteWidget() {
  let initialHex = CONFIG.accentColor;
  try {
    const saved = localStorage.getItem("portfolio_accent");
    if (saved && /^#[0-9a-fA-F]{6}$/.test(saved)) initialHex = saved;
  } catch (_) {}
  _applyAccent(initialHex);

  // Toggle button
  const btn = document.createElement("button");
  btn.id = "paletteToggle";
  btn.setAttribute("aria-label", "Change accent colour");
  btn.setAttribute("title", "Change accent colour");
  btn.innerHTML = `<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>`;

  // Panel
  const panel = document.createElement("div");
  panel.id = "palettePanel";
  panel.setAttribute("role", "dialog");
  panel.setAttribute("aria-label", "Colour palette");
  panel.innerHTML = `
    <span class="palette-label">Accent Colour</span>
    <div class="swatches" role="group" aria-label="Preset colours"></div>
    <div class="palette-divider"></div>
    <div class="palette-custom">
      <label for="customColour">Custom</label>
      <input type="color" id="customColour" value="${initialHex}" title="Pick a custom colour" />
    </div>`;

  const swatchesEl = panel.querySelector(".swatches");
  PALETTE_COLORS.forEach(({ name, hex }) => {
    const sw = document.createElement("button");
    sw.className = "swatch" + (hex.toLowerCase() === initialHex.toLowerCase() ? " selected" : "");
    sw.style.background = hex;
    sw.title = name;
    sw.setAttribute("aria-label", name);
    sw.addEventListener("click", () => {
      panel.querySelectorAll(".swatch").forEach(s => s.classList.remove("selected"));
      sw.classList.add("selected");
      _applyAccent(hex);
      panel.querySelector("#customColour").value = hex;
    });
    swatchesEl.appendChild(sw);
  });

  panel.querySelector("#customColour").addEventListener("input", e => {
    const hex = e.target.value;
    _applyAccent(hex);
    panel.querySelectorAll(".swatch").forEach(s => s.classList.remove("selected"));
  });

  const wrap = document.createElement("div");
  wrap.id = "paletteWrap";
  wrap.appendChild(panel);
  wrap.appendChild(btn);
  document.body.appendChild(wrap);

  let isOpen = false;
  const open  = () => { panel.classList.add("visible");    btn.classList.add("active");    isOpen = true;  };
  const close = () => { panel.classList.remove("visible"); btn.classList.remove("active"); isOpen = false; };
  btn.addEventListener("click", e => { e.stopPropagation(); isOpen ? close() : open(); });
  document.addEventListener("click", e => { if (isOpen && !wrap.contains(e.target)) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && isOpen) close(); });
}

/* ============================================================
   AVATAR LOADER
   ============================================================ */
function loadAvatar() {
  const wrap = document.getElementById("heroAvatar");
  if (!wrap) return;

  const showInitials = () => {
    wrap.innerHTML = `<span class="avatar-initials">${CONFIG.avatarInitials}</span>`;
  };

  const showImage = (src) => {
    const img = new Image();
    img.alt     = CONFIG.heroName || "Avatar";
    img.onload  = () => { wrap.innerHTML = ""; wrap.appendChild(img); };
    img.onerror = showInitials;
    img.src     = src;
  };

  switch (CONFIG.avatarMode) {

    // Drop your photo at assets/avatar.png (or change localAvatarPath)
    case "local":
      showImage(CONFIG.localAvatarPath || "assets/avatar.png");
      break;

    // Discord Lanyard: only your User ID needed — no hash required!
    // Join https://discord.gg/lanyard first.
    case "discord-lanyard":
      fetch(`https://api.lanyard.rest/v1/users/${CONFIG.discordUserId}`)
        .then(r => r.json())
        .then(data => {
          const user = data && data.data && data.data.discord_user;
          if (data.success && user && user.avatar) {
            const ext = user.avatar.startsWith("a_") ? "gif" : "png";
            showImage(`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${ext}?size=256`);
          } else {
            showInitials();
          }
        })
        .catch(showInitials);
      break;

    // Any direct image URL
    case "custom":
      showImage(CONFIG.customPfpUrl);
      break;

    // Default: show initials
    default:
      showInitials();
  }
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form      = document.getElementById("contactForm");
  const submitBtn = document.getElementById("formSubmitBtn");
  const status    = document.getElementById("formStatus");

  if (!form) return;

  // If no Formspree ID, swap form for a mailto fallback gracefully
  if (!CONFIG.formspreeId) {
    form.innerHTML = `
      <div class="form-fallback">
        <p style="color:var(--text-muted);font-size:0.9rem;line-height:1.7;">
          Contact form coming soon — for now, send me an email directly:
        </p>
        <a class="btn btn-primary" href="mailto:${CONFIG.contactEmail}"
           style="margin-top:8px;align-self:flex-start;">
          Open Email Client
        </a>
      </div>`;
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Basic client-side validation
    let valid = true;
    ["cfName", "cfEmail", "cfMessage"].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      if (!el.value.trim()) {
        el.classList.add("error");
        valid = false;
      } else {
        el.classList.remove("error");
      }
    });
    if (!valid) {
      status.textContent = "Please fill in all fields.";
      status.className   = "form-status error";
      return;
    }

    // Set loading state
    submitBtn.classList.add("loading");
    submitBtn.disabled  = true;
    status.textContent  = "";
    status.className    = "form-status";

    try {
      const data = new FormData(form);
      const res  = await fetch(`https://formspree.io/f/${CONFIG.formspreeId}`, {
        method:  "POST",
        body:    data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        status.textContent = "✓ Message sent! I'll get back to you soon.";
        status.className   = "form-status success";
        form.reset();
        ["cfName", "cfEmail", "cfMessage"].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.classList.remove("error");
        });
      } else {
        const json = await res.json().catch(() => ({}));
        status.textContent = json.error || "Something went wrong. Please try again.";
        status.className   = "form-status error";
      }
    } catch (_) {
      status.textContent = "Network error. Please check your connection and try again.";
      status.className   = "form-status error";
    } finally {
      submitBtn.classList.remove("loading");
      submitBtn.disabled = false;
    }
  });

  // Clear error state on input
  ["cfName", "cfEmail", "cfMessage"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", () => el.classList.remove("error"));
  });
}

/* ============================================================
   APPLY TEXT CONFIG
   ============================================================ */
document.title = CONFIG.siteTitle;

[
  "navLogo", "heroGreeting", "heroName", "heroRole", "heroTagline",
  "aboutParagraph1", "aboutParagraph2",
  "factYears", "factProjects", "factCoffee",
  "contactText", "contactEmail",
  "footerAuthor", "footerOrg",
].forEach(key => {
  document.querySelectorAll(`[data-config="${key}"]`).forEach(el => {
    el.textContent = CONFIG[key];
  });
});

// Email href
const emailEl = document.getElementById("contactEmailLink");
if (emailEl) emailEl.href = `mailto:${CONFIG.contactEmail}`;

// Footer year
const yearEl = document.getElementById("footerYear");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ============================================================
   RENDER SKILLS
   ============================================================ */
const skillsGrid = document.getElementById("skillsGrid");
if (skillsGrid) {
  skillsGrid.innerHTML = CONFIG.skills.map(s => {
    const svg = SKILL_ICONS[s.icon] || SKILL_ICONS["terminal"];
    return `
      <div class="skill-card">
        <span class="skill-icon">${svg}</span>
        <span class="skill-name">${s.name}</span>
      </div>`;
  }).join("");
}

/* ============================================================
   RENDER PROJECTS
   ============================================================ */
const projectsGrid = document.getElementById("projectsGrid");
if (projectsGrid) {
  projectsGrid.innerHTML = CONFIG.projects.map(p => {
    const linkBtn = p.link && p.link !== ""
      ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer"
            class="btn btn-ghost project-link">View Project</a>`
      : "";
    return `
      <div class="project-card">
        <span class="project-tag">${p.tag}</span>
        <h3 class="project-name">${p.name}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span class="tech-badge">${t}</span>`).join("")}
        </div>
        ${linkBtn}
      </div>`;
  }).join("");
}

/* ============================================================
   RENDER SOCIALS
   ============================================================ */
const socialLinks = document.getElementById("socialLinks");
if (socialLinks) {
  socialLinks.innerHTML = CONFIG.socials.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="social-link">
      ${ICONS[s.icon] || ""}
      <span>${s.label}</span>
    </a>`
  ).join("");
}

/* ============================================================
   NAVBAR SCROLL GLASS
   ============================================================ */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 16);
}, { passive: true });

/* ============================================================
   MOBILE MENU
   ============================================================ */
const navToggle = document.getElementById("navToggle");
const navLinks  = document.getElementById("navLinks");

function closeMenu() {
  navLinks.classList.remove("open");
  navToggle.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}
function openMenu() {
  navLinks.classList.add("open");
  navToggle.classList.add("open");
  navToggle.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

navToggle.addEventListener("click", () =>
  navLinks.classList.contains("open") ? closeMenu() : openMenu()
);
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
document.addEventListener("click", e => {
  if (navLinks.classList.contains("open") &&
      !navLinks.contains(e.target) &&
      !navToggle.contains(e.target)) closeMenu();
});
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

/* ============================================================
   ACTIVE NAV HIGHLIGHT
   ============================================================ */
const sections   = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a[href^='#']");

sections.forEach(s => {
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navAnchors.forEach(a =>
          a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`)
        );
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" }).observe(s);
});

/* ============================================================
   INIT
   ============================================================ */
loadAvatar();
buildPaletteWidget();
initContactForm();
