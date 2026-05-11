// Inline SVG icon strings
const ICONS = {
  boxes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.97 5.95L12 10.5l9.03-4.55"/><path d="M12 21V10.5"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
  image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg>',
  palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>',
  shirt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
};

const TOOLS = [
  { title: "Shape Generator", desc: "Generate block layouts for spheres, ellipsoids, circles, cylinders and domes with layer-by-layer build guides.", icon: "boxes" },
  { title: "Image to Pixel Art", desc: "Upload any image and convert it into Minecraft block pixel art. Pick a version, toggle blocks, and preview in 3D.", icon: "image" },
  { title: "Block Gradient", desc: "Generate smooth Minecraft block gradients between any two blocks at any length.", icon: "palette" },
  { title: "Skin Editor", desc: "Edit Minecraft skins in your browser. Import from a PNG or grab any player's skin by username.", icon: "shirt" },
];

// Render tool cards (preview only — coming soon)
const grid = document.getElementById("tools-grid");
grid.innerHTML = TOOLS.map(t => `
  <div class="tool-card tool-card-soon">
    <span class="tool-icon">${ICONS[t.icon]}</span>
    <h4>${t.title}</h4>
    <p>${t.desc}</p>
    <span class="tool-open">Coming soon</span>
  </div>
`).join("");

// Theme toggle
const themeBtn = document.getElementById("theme-btn");
themeBtn.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  try { localStorage.setItem("theme", isDark ? "dark" : "light"); } catch (e) {}
});

// Side nav toggle
const menuBtn = document.getElementById("menu-btn");
const sideNav = document.getElementById("side-nav");
const overlay = document.getElementById("side-nav-overlay");
function setNav(open) {
  sideNav.classList.toggle("open", open);
  sideNav.setAttribute("aria-hidden", open ? "false" : "true");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  overlay.hidden = !open;
}
menuBtn.addEventListener("click", () => setNav(!sideNav.classList.contains("open")));
overlay.addEventListener("click", () => setNav(false));
document.addEventListener("keydown", e => { if (e.key === "Escape") setNav(false); });
