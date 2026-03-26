const products = [
  ["Electrical", "./public/categories/electrical.svg", "Wires, switches, fans, lights, MCBs", "EL"],
  ["Plumbing", "./public/categories/plumbing.svg", "Taps, pipes, fittings, valves, sanitary", "PL"],
  ["Paints", "./public/categories/paints.svg", "Berger, Asian, Nerolac premium paints", "PA"],
  ["Hardware", "./public/categories/hardware.svg", "Locks, hinges, tools, nails, blades", "HW"],
  ["Tanks", "./public/categories/tanks.svg", "Sintex, Vahini, Sudhakar, Arshiwad", "TK"],
  ["Doors & Accessories", "./public/categories/doors.svg", "Doors, handles, fittings, accessories", "DR"],
];

const highlights = [
  ["Authorized Berger Distributor", "Trusted source for Berger Paints with dependable stock and consistent product authenticity.", "shield"],
  ["Wholesale + Retail Supply", "Flexible service for homeowners, contractors, workshops, builders, and local businesses.", "tag"],
  ["Fast Local Delivery", "Quick dispatch support for project sites and home orders across the surrounding area.", "truck"],
];

const whyChoose = [
  ["100% Genuine Products", "All products are brand-certified and authentic.", "shield"],
  ["Delivery Available", "Fast and reliable delivery to your doorstep.", "truck"],
  ["Fair Pricing", "Competitive wholesale and retail pricing.", "tag"],
  ["Expert Support", "Guidance for choosing the right materials and brands.", "headset"],
];

const brands = [
  ["Havells", "./public/brands/havells.png"], ["Crompton", "./public/brands/crompton.png"],
  ["Polycab", "./public/brands/polycab.png"], ["Anchor", "./public/brands/anchor.png"],
  ["Atomberg", "./public/brands/atomberg.png"], ["Finolex", "./public/brands/finolex.png"],
  ["Legrand", "./public/brands/legrand.png"], ["L&T", "./public/brands/lt.png"],
  ["RR Kabel", "./public/brands/rr-kabel.png"], ["KEI", "./public/brands/kei.jpg"],
  ["Philips", "./public/brands/philips.png"], ["Syska", "./public/brands/syska.jpg"],
  ["Wipro", "./public/brands/wipro.png"], ["Berger Paints", "./public/brands/berger.png"],
  ["Asian Paints", "./public/brands/asian-paints.jpg"], ["Vahini", "./public/brands/vahini.png"],
  ["Sudhakar", "./public/brands/sudhakar.png"], ["Arshiwad", "./public/brands/ashirvad.png"],
  ["Jaquar", "./public/brands/jaquar.png"], ["Cera", "./public/brands/cera.png"],
  ["Parryware", "./public/brands/parryware.png"], ["GM", "./public/brands/gm.png"],
  ["Gold Medal", "./public/brands/gold-medal.jpg"], ["Godrej", "./public/brands/godrej.jpg"],
  ["Hindware", "./public/brands/hindware.png"], ["Orient", "./public/brands/orient.png"],
  ["Sintex", "./public/brands/sintex.png"],
];

function renderCards(rootId, data, template) {
  const root = document.getElementById(rootId);
  if (!root) return;
  root.innerHTML = data.map(template).join("");
}

renderCards(
  "highlightsGrid",
  highlights,
  ([title, description, icon]) => `
    <article class="basic-card">
      <div class="why-icon"><svg class="icon"><use href="#icon-${icon}"></use></svg></div>
      <h3>${title}</h3>
      <p>${description}</p>
    </article>
  `
);

renderCards(
  "productsGrid",
  products,
  ([title, image, description, icon]) => `
    <article class="product-card">
      <img src="${image}" alt="${title}" />
      <div class="product-copy">
        <div class="product-badge">${icon}</div>
        <h3>${title}</h3>
        <p>${description}</p>
        <a class="btn btn-outline" href="https://wa.me/919885106475?text=Hello%20Sri%20Mahalakshmi%20Enterprises,%20I%20would%20like%20to%20request%20a%20quotation%20for%20Category:%20${encodeURIComponent(title)}" target="_blank" rel="noreferrer">Get Quote</a>
      </div>
    </article>
  `
);

renderCards(
  "whyChooseGrid",
  whyChoose,
  ([title, description, icon]) => `
    <article class="basic-card">
      <div class="why-icon"><svg class="icon"><use href="#icon-${icon}"></use></svg></div>
      <h3>${title}</h3>
      <p>${description}</p>
    </article>
  `
);

renderCards(
  "brandsGrid",
  brands,
  ([name, image]) => `
    <article class="brand-card">
      <img src="${image}" alt="${name} logo" />
      <h3>${name}</h3>
      <p>Genuine stocked brand</p>
    </article>
  `
);

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}
