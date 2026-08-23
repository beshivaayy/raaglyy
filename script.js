/* =========================================================
   RAAGLYY
   SOUND BEYOND SILENCE

   SANATAN / INDIC ART DIRECTION

   Playback:
   YouTube Playlist
   Playlist ID: PLJRipbfj__b0

   Spotify intentionally removed.
   ========================================================= */


const YOUTUBE_PLAYLIST_ID = "PLJRipbfj__b0";


/* =========================================================
   27 RAAGS
   ========================================================= */

const raags = [

  {
    name: "Bhimpalasi",
    hindi: "राग भीमपलासी",
    time: "Afternoon",
    description:
      "A deeply expressive afternoon raag carrying longing, tenderness and introspection through its characteristic melodic movement.",
    tags: ["Afternoon", "Shringara", "Viraha"],
    deity: "Krishna",
    art: "krishna"
  },

  {
    name: "Darbari Kanada",
    hindi: "राग दरबारी कानड़ा",
    time: "Late Night",
    description:
      "A grave and majestic raag carrying depth, dignity and the atmosphere of an ancient royal court.",
    tags: ["Late Night", "Gambhir", "Royal"],
    deity: "Mahadev",
    art: "shiva"
  },

  {
    name: "Shuddh Sarang",
    hindi: "राग शुद्ध सारंग",
    time: "Afternoon",
    description:
      "A luminous Sarang-family raag associated with clarity, balance and a bright, open melodic character.",
    tags: ["Afternoon", "Sarang", "Luminous"],
    deity: "Surya",
    art: "surya"
  },

  {
    name: "Komal Rishabh Asavari",
    hindi: "राग कोमल ऋषभ आसावरी",
    time: "Morning",
    description:
      "A contemplative morning raag carrying an earthy, inward and austere melodic character.",
    tags: ["Morning", "Asavari", "Gambhir"],
    deity: "Shiva",
    art: "trishul"
  },

  {
    name: "Yaman",
    hindi: "राग यमन",
    time: "Evening",
    description:
      "A luminous evening raag associated with serenity, devotion, expansion and refined emotional expression.",
    tags: ["Evening", "Tivra Ma", "Shanta"],
    deity: "Krishna",
    art: "krishna"
  },

  {
    name: "Hamsadhwani",
    hindi: "राग हंसध्वनि",
    time: "Evening",
    description:
      "A bright pentatonic raag carrying auspiciousness, clarity and an uplifting melodic energy.",
    tags: ["Evening", "Pentatonic", "Mangala"],
    deity: "Ganesha",
    art: "ganesha"
  },

  {
    name: "Bhairavi",
    hindi: "राग भैरवी",
    time: "Morning",
    description:
      "A profound morning raag carrying devotion, compassion and the emotional gravity of surrender.",
    tags: ["Morning", "Bhakti", "Karuna"],
    deity: "Devi",
    art: "devi"
  },

  {
    name: "Asavari",
    hindi: "राग आसावरी",
    time: "Late Morning",
    description:
      "A grave and earthy morning raag with a distinctly introspective melodic personality.",
    tags: ["Morning", "Asavari", "Gambhir"],
    deity: "Shiva",
    art: "shiva"
  },

  {
    name: "Desi Todi",
    hindi: "राग देसी तोड़ी",
    time: "Late Morning",
    description:
      "An introspective Todi-family raag carrying tension, depth and finely shaded emotional colour.",
    tags: ["Morning", "Todi", "Gambhir"],
    deity: "Devi",
    art: "mandala"
  },

  {
    name: "Kalyan",
    hindi: "राग कल्याण",
    time: "Evening",
    description:
      "An expansive evening raag associated with refinement, communication and luminous melodic movement.",
    tags: ["Evening", "Kalyan", "Communication"],
    deity: "Surya",
    art: "temple"
  },

  {
    name: "Poorvi",
    hindi: "राग पूर्वी",
    time: "Sunset",
    description:
      "A contemplative sunset raag carrying mystery, gravity and the stillness between day and night.",
    tags: ["Sunset", "Gambhir", "Dhyana"],
    deity: "Shiva",
    art: "shiva"
  },

  {
    name: "Nat Bhairav",
    hindi: "राग नट भैरव",
    time: "Morning",
    description:
      "A morning raag balancing devotional gravity with a graceful melodic character.",
    tags: ["Morning", "Relationship", "Finance"],
    deity: "Surya",
    art: "surya"
  },

  {
    name: "Brindavani Sarang",
    hindi: "राग वृन्दावनी सारंग",
    time: "Afternoon",
    description:
      "A radiant afternoon raag carrying the pastoral and devotional atmosphere of Vrindavan.",
    tags: ["Afternoon", "Relationship", "Finance"],
    deity: "Krishna",
    art: "vrindavan"
  },

  {
    name: "Shuddh Kalyan",
    hindi: "राग शुद्ध कल्याण",
    time: "Evening",
    description:
      "A serene evening raag associated with inner peace, devotion and emotional balance.",
    tags: ["Evening", "Kalyan", "Shanta"],
    deity: "Krishna",
    art: "temple"
  },

  {
    name: "Jaunpuri",
    hindi: "राग जौनपुरी",
    time: "Late Morning",
    description:
      "A reflective morning raag with an elegant and melancholic melodic personality.",
    tags: ["Morning", "Profession", "Chronic"],
    deity: "Devi",
    art: "devi"
  },

  {
    name: "Kirwani",
    hindi: "राग किरवानी",
    time: "Night",
    description:
      "A nocturnal raag with a dramatic, introspective and emotionally intense character.",
    tags: ["Night", "Profession", "Chronic"],
    deity: "Shiva",
    art: "shiva"
  },

  {
    name: "Neelambari",
    hindi: "राग नीलाम्बरी",
    time: "Night",
    description:
      "A deeply tranquil night raag carrying softness, introspection and repose.",
    tags: ["Night", "Profession", "Chronic"],
    deity: "Vishnu",
    art: "vishnu"
  },

  {
    name: "Malkauns",
    hindi: "राग मालकौंस",
    time: "Late Night",
    description:
      "An ancient pentatonic raag of gravity, meditation and powerful inward resonance.",
    tags: ["Night", "Pentatonic", "Gambhir"],
    deity: "Shiva",
    art: "mahakal"
  },

  {
    name: "Bhairav",
    hindi: "राग भैरव",
    time: "Dawn",
    description:
      "A dawn raag of profound gravity, devotion and spiritual awakening.",
    tags: ["Dawn", "Gambhir", "Bhakti"],
    deity: "Bhairav",
    art: "bhairav"
  },

  {
    name: "Lalit",
    hindi: "राग ललित",
    time: "Pre-Dawn",
    description:
      "A mysterious pre-dawn raag inhabiting the silent transition between darkness and light.",
    tags: ["Pre-Dawn", "Dhyana", "Gambhir"],
    deity: "Shiva",
    art: "mandala"
  },

  {
    name: "Bhoop",
    hindi: "राग भूप",
    time: "Evening",
    description:
      "A pure pentatonic evening raag with a calm, spacious and uplifting character.",
    tags: ["Evening", "Pentatonic", "Shanta"],
    deity: "Surya",
    art: "surya"
  },

  {
    name: "Madhuvanti",
    hindi: "राग मधुवंती",
    time: "Afternoon",
    description:
      "A lyrical afternoon raag carrying sweetness, yearning and contemplative emotional colour.",
    tags: ["Afternoon", "Viraha", "Contemplative"],
    deity: "Krishna",
    art: "krishna"
  },

  {
    name: "Pilu",
    hindi: "राग पीलू",
    time: "Afternoon",
    description:
      "A lyrical and flexible raag with a delicate, intimate and expressive personality.",
    tags: ["Afternoon", "Lyrical", "Light"],
    deity: "Radha",
    art: "radha"
  },

  {
    name: "Shivranjani",
    hindi: "राग शिवरंजनी",
    time: "Night",
    description:
      "A haunting night raag carrying longing, introspection and profound emotional colour.",
    tags: ["Night", "Karuna", "Introspective"],
    deity: "Shiva",
    art: "shiva"
  },

  {
    name: "Jaijaiwanti",
    hindi: "राग जयजयवंती",
    time: "Night",
    description:
      "A refined nocturnal raag balancing romantic expression with subtle emotional tension.",
    tags: ["Night", "Shringara", "Lyrical"],
    deity: "Radha",
    art: "radha"
  },

  {
    name: "Khamaj",
    hindi: "राग खमाज",
    time: "Night",
    description:
      "A graceful night raag associated with romantic expression and lyrical beauty.",
    tags: ["Night", "Shringara", "Lyrical"],
    deity: "Krishna",
    art: "krishna"
  },

  {
    name: "Raag Tanpura",
    hindi: "राग तानपुरा",
    time: "All Prahar",
    description:
      "The eternal drone beneath melody — the sustained sonic foundation from which musical consciousness emerges.",
    tags: ["Tanpura", "Drone", "Foundation"],
    deity: "Nada Brahma",
    art: "om"
  }

];


/* =========================================================
   DOM
   ========================================================= */

const $ = selector => document.querySelector(selector);

let index = 0;
let player = null;
let playerReady = false;
let progressTimer = null;


/* =========================================================
   HELPERS
   ========================================================= */

function pad(number) {
  return String(number).padStart(2, "0");
}


function formatTime(seconds) {

  if (!Number.isFinite(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${pad(minutes)}:${pad(secs)}`;
}


/* =========================================================
   SANATAN ILLUSTRATION ENGINE
   ---------------------------------------------------------
   These are intentionally stylised sacred illustrations,
   not random nature photography.
   ========================================================= */

function art(type, i = 0) {

  const palettes = [
    ["#b7833d", "#5d291d", "#17100c"],
    ["#d1a15a", "#59352a", "#110c0b"],
    ["#d8b66a", "#6d4223", "#100d0b"],
    ["#a86e3b", "#321c27", "#09080a"],
    ["#c99b54", "#45232a", "#0b090b"]
  ];

  const p = palettes[i % palettes.length];

  let central = "";

  if (type === "krishna" || type === "vrindavan") {

    central = `
      <circle cx="300" cy="190" r="105"
        fill="url(#halo)" opacity=".55"/>

      <path
        d="M270 155
           Q300 125 330 155
           Q342 178 329 207
           Q314 229 300 240
           Q286 229 271 207
           Q258 178 270 155Z"
        fill="#151016"
        stroke="${p[0]}"
        stroke-width="2"
      />

      <circle cx="286" cy="178" r="4" fill="${p[0]}"/>
      <circle cx="314" cy="178" r="4" fill="${p[0]}"/>

      <path
        d="M274 164 Q300 138 326 164"
        fill="none"
        stroke="${p[0]}"
        stroke-width="5"
      />

      <path
        d="M250 255 Q300 225 350 255
           L378 350 H222Z"
        fill="#120e12"
        stroke="${p[0]}"
        stroke-width="2"
      />

      <path
        d="M327 125 Q375 100 397 120
           Q363 127 342 153"
        fill="none"
        stroke="${p[0]}"
        stroke-width="8"
      />

      <path
        d="M245 270 Q205 230 178 258"
        fill="none"
        stroke="${p[0]}"
        stroke-width="3"
        opacity=".8"
      />
    `;

  } else if (type === "shiva" || type === "mahakal" || type === "bhairav") {

    central = `
      <circle cx="300" cy="195" r="115"
        fill="url(#halo)" opacity=".48"/>

      <path
        d="M250 170 Q300 125 350 170
           Q365 205 345 245
           Q325 275 300 285
           Q275 275 255 245
           Q235 205 250 170Z"
        fill="#0d0b10"
        stroke="${p[0]}"
        stroke-width="2"
      />

      <path
        d="M263 165 Q300 145 337 165"
        fill="none"
        stroke="${p[0]}"
        stroke-width="3"
      />

      <circle cx="282" cy="200" r="4" fill="${p[0]}"/>
      <circle cx="318" cy="200" r="4" fill="${p[0]}"/>

      <path
        d="M285 235 Q300 245 315 235"
        fill="none"
        stroke="${p[0]}"
        stroke-width="2"
      />

      <path
        d="M300 135 L300 75
           M272 95 L300 75 L328 95"
        stroke="${p[0]}"
        stroke-width="7"
        fill="none"
      />

      <path
        d="M255 255 Q300 230 345 255
           L380 350 H220Z"
        fill="#100c11"
        stroke="${p[0]}"
        stroke-width="2"
      />

      <path
        d="M300 255 L300 345"
        stroke="${p[0]}"
        stroke-width="2"
      />
    `;

  } else if (type === "surya") {

    central = `
      <circle cx="300" cy="200" r="82"
        fill="none"
        stroke="${p[0]}"
        stroke-width="2"/>

      <circle cx="300" cy="200" r="55"
        fill="url(#halo)"
        opacity=".65"/>

      <circle cx="300" cy="200" r="30"
        fill="${p[0]}"
        opacity=".75"/>

      ${Array.from({length:12}, (_,n) => {
        const a = n * 30 * Math.PI / 180;
        const x1 = 300 + Math.cos(a) * 90;
        const y1 = 200 + Math.sin(a) * 90;
        const x2 = 300 + Math.cos(a) * 125;
        const y2 = 200 + Math.sin(a) * 125;
        return `
          <line
            x1="${x1}" y1="${y1}"
            x2="${x2}" y2="${y2}"
            stroke="${p[0]}"
            stroke-width="4"
          />
        `;
      }).join("")}
    `;

  } else if (type === "ganesha") {

    central = `
      <circle cx="300" cy="200" r="105"
        fill="url(#halo)"
        opacity=".5"/>

      <path
        d="M250 170
           Q260 130 300 135
           Q340 130 350 170
           L340 245
           Q325 275 300 280
           Q275 275 260 245Z"
        fill="#100d11"
        stroke="${p[0]}"
        stroke-width="2"
      />

      <circle cx="282" cy="190" r="5" fill="${p[0]}"/>
      <circle cx="318" cy="190" r="5" fill="${p[0]}"/>

      <path
        d="M300 205
           Q320 220 315 250
           Q310 270 295 262"
        fill="none"
        stroke="${p[0]}"
        stroke-width="6"
      />

      <path
        d="M260 150 Q220 125 205 155
           Q230 165 260 180"
        fill="none"
        stroke="${p[0]}"
        stroke-width="7"
      />

      <path
        d="M340 150 Q380 125 395 155
           Q370 165 340 180"
        fill="none"
        stroke="${p[0]}"
        stroke-width="7"
      />
    `;

  } else if (type === "devi" || type === "radha") {

    central = `
      <circle cx="300" cy="195" r="105"
        fill="url(#halo)"
        opacity=".5"/>

      <path
        d="M300 130
           Q350 145 355 205
           Q350 260 300 285
           Q250 260 245 205
           Q250 145 300 130Z"
        fill="#100c12"
        stroke="${p[0]}"
        stroke-width="2"
      />

      <circle cx="282" cy="188" r="4" fill="${p[0]}"/>
      <circle cx="318" cy="188" r="4" fill="${p[0]}"/>

      <path
        d="M278 215 Q300 228 322 215"
        fill="none"
        stroke="${p[0]}"
        stroke-width="2"
      />

      <path
        d="M300 120 L300 75
           M275 95 L300 75 L325 95"
        stroke="${p[0]}"
        stroke-width="5"
        fill="none"
      />

      <path
        d="M250 270 L210 340
           M350 270 L390 340"
        stroke="${p[0]}"
        stroke-width="3"
      />
    `;

  } else if (type === "vishnu") {

    central = `
      <circle cx="300" cy="200" r="110"
        fill="url(#halo)"
        opacity=".5"/>

      <circle cx="300" cy="185" r="65"
        fill="#0d0b11"
        stroke="${p[0]}"
        stroke-width="2"/>

      <circle cx="280" cy="180" r="4" fill="${p[0]}"/>
      <circle cx="320" cy="180" r="4" fill="${p[0]}"/>

      <path
        d="M275 210 Q300 225 325 210"
        fill="none"
        stroke="${p[0]}"
        stroke-width="2"
      />

      <path
        d="M245 240 Q300 220 355 240
           L375 350 H225Z"
        fill="#0d0a10"
        stroke="${p[0]}"
        stroke-width="2"
      />
    `;

  } else if (type === "temple") {

    central = `
      <path
        d="M180 350 L180 220
           L300 90
           L420 220
           L420 350Z"
        fill="#0c090c"
        stroke="${p[0]}"
        stroke-width="3"
      />

      <path
        d="M300 55 L300 90"
        stroke="${p[0]}"
        stroke-width="4"
      />

      <path
        d="M245 350 V245
           Q300 190 355 245 V350"
        fill="#050406"
        stroke="${p[0]}"
        stroke-width="3"
      />

      <path
        d="M215 220 H385
           M235 190 H365
           M255 160 H345"
        stroke="${p[0]}"
        stroke-width="2"
      />
    `;

  } else {

    central = `
      <circle cx="300" cy="200" r="95"
        fill="none"
        stroke="${p[0]}"
        stroke-width="2"/>

      <circle cx="300" cy="200" r="55"
        fill="none"
        stroke="${p[0]}"
        stroke-width="1"/>

      <path
        d="M300 115
           L320 180
           L385 200
           L320 220
           L300 285
           L280 220
           L215 200
           L280 180Z"
        fill="none"
        stroke="${p[0]}"
        stroke-width="2"
      />

      <text
        x="300"
        y="220"
        text-anchor="middle"
        font-size="48"
        fill="${p[0]}"
        font-family="serif">
        ॐ
      </text>
    `;
  }


  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 400">

      <defs>

        <radialGradient id="background">
          <stop offset="0" stop-color="${p[1]}"/>
          <stop offset=".55" stop-color="${p[2]}"/>
          <stop offset="1" stop-color="#050406"/>
        </radialGradient>

        <radialGradient id="halo">
          <stop stop-color="${p[0]}" stop-opacity=".8"/>
          <stop offset="1" stop-color="${p[0]}" stop-opacity="0"/>
        </radialGradient>

        <filter id="blur">
          <feGaussianBlur stdDeviation="18"/>
        </filter>

      </defs>


      <rect
        width="600"
        height="400"
        fill="url(#background)"
      />


      <circle
        cx="300"
        cy="200"
        r="150"
        fill="none"
        stroke="${p[0]}"
        stroke-width="1"
        opacity=".2"
      />

      <circle
        cx="300"
        cy="200"
        r="175"
        fill="none"
        stroke="${p[0]}"
        stroke-width="1"
        stroke-dasharray="2 12"
        opacity=".3"
      />


      <path
        d="M0 350 Q150 305 300 350 T600 350 V400 H0Z"
        fill="#030304"
        opacity=".75"
      />


      ${central}


      <text
        x="300"
        y="375"
        text-anchor="middle"
        fill="${p[0]}"
        opacity=".55"
        font-size="10"
        letter-spacing="5"
        font-family="serif">
        RAAGLYY
      </text>

    </svg>

  `)}`;
}


/* =========================================================
   BACKGROUND
   ========================================================= */

function updateBackground() {

  const r = raags[index];

  const backgrounds = {

    krishna:
      "radial-gradient(circle at 72% 45%, #7d442a45, transparent 30%), #080607",

    shiva:
      "radial-gradient(circle at 72% 45%, #453b5340, transparent 30%), #070608",

    surya:
      "radial-gradient(circle at 72% 45%, #a66a2845, transparent 30%), #080706",

    ganesha:
      "radial-gradient(circle at 72% 45%, #713a3040, transparent 30%), #090607",

    devi:
      "radial-gradient(circle at 72% 45%, #713c5145, transparent 30%), #090609",

    radha:
      "radial-gradient(circle at 72% 45%, #8c4a5540, transparent 30%), #090608",

    vrindavan:
      "radial-gradient(circle at 72% 45%, #51612e40, transparent 30%), #070806",

    temple:
      "radial-gradient(circle at 72% 45%, #76502e45, transparent 30%), #080706",

    vishnu:
      "radial-gradient(circle at 72% 45%, #304c6740, transparent 30%), #060709",

    mahakal:
      "radial-gradient(circle at 72% 45%, #40334d48, transparent 30%), #060507",

    bhairav:
      "radial-gradient(circle at 72% 45%, #59433245, transparent 30%), #080706",

    mandala:
      "radial-gradient(circle at 72% 45%, #70452f40, transparent 30%), #080706",

    om:
      "radial-gradient(circle at 72% 45%, #a4773d48, transparent 32%), #080706"

  };

  $("#bg").style.background =
    backgrounds[r.art] || backgrounds.om;
}


/* =========================================================
   RENDER
   ========================================================= */

function render() {

  const r = raags[index];

  const number = pad(index + 1);
  const total = pad(raags.length);

  $("#num").textContent = number;
  $("#prahar").textContent = r.time.toUpperCase();

  $("#title").textContent = r.name;
  $("#hindi").textContent = r.hindi;
  $("#desc").textContent = r.description;

  $("#time").textContent = r.time.toUpperCase();

  $("#coreName").textContent =
    r.name.toUpperCase();

  $("#count").textContent =
    `${number} / ${total}`;

  $("#degree").textContent =
    `${number} / 27`;

  updateBackground();


  /* =====================================================
     CORE ART
     ===================================================== */

  $("#coreArt").style.backgroundImage =
    `url("${art(r.art, index)}")`;


  /* =====================================================
     PLAYER ART
     ===================================================== */

  $("#playerArt").style.backgroundImage =
    `url("${art(r.art, index)}")`;


  /* =====================================================
     TAGS
     ===================================================== */

  $("#tags").innerHTML = r.tags
    .map(tag => `<span>${tag}</span>`)
    .join("");


  /* =====================================================
     ORBIT
     ===================================================== */

  $("#planets").innerHTML = "";

  const n = Math.min(raags.length, 9);

  for (let i = 0; i < n; i++) {

    const angle =
      (Math.PI * 2 * i / n) - Math.PI / 2;

    const x = Math.cos(angle) * 245;
    const y = Math.sin(angle) * 125;

    const planet =
      document.createElement("button");

    planet.className =
      "planet " +
      (i === index ? "active" : "");

    planet.style.setProperty(
      "--x",
      `${x}px`
    );

    planet.style.setProperty(
      "--y",
      `${y}px`
    );

    planet.innerHTML = `

      <img
        src="${art(raags[i].art, i)}"
        alt="${raags[i].name}"
      >

      <label>
        ${raags[i].name.toUpperCase()}
      </label>

    `;

    planet.addEventListener(
      "click",
      () => selectRaag(i)
    );

    $("#planets").appendChild(planet);
  }


  /* =====================================================
     RAIL
     ===================================================== */

  $("#rail").innerHTML =
    raags
      .map((r, i) => `

        <button
          class="rail-item ${i === index ? "active" : ""}"
          data-i="${i}"
        >

          <img
            src="${art(r.art, i)}"
            alt="${r.name}"
          >

          <span>
            ${r.name}
          </span>

        </button>

      `)
      .join("");


  document
    .querySelectorAll(".rail-item")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {
          selectRaag(
            Number(button.dataset.i)
          );
        }
      );

    });


  /* =====================================================
     ARCHIVE
     ===================================================== */

  $("#archive").innerHTML =
    raags
      .map((r, i) => `

        <button
          class="${i === index ? "active" : ""}"
          data-i="${i}"
        >

          <span>
            ${pad(i + 1)}
          </span>

          ${r.name}

        </button>

      `)
      .join("");


  document
    .querySelectorAll("#archive button")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          selectRaag(
            Number(button.dataset.i)
          );

          closeDrawer();

        }
      );

    });
}


/* =========================================================
   SELECT RAAG
   ========================================================= */

function selectRaag(newIndex) {

  index =
    (newIndex + raags.length) %
    raags.length;

  render();

  if (playerReady && player) {

    player.loadPlaylist({

      list: YOUTUBE_PLAYLIST_ID,

      listType: "playlist",

      index: index

    });

  }
}


/* =========================================================
   DRAWER
   ========================================================= */

function closeDrawer() {

  $("#drawer").classList.remove("open");
  $("#veil").classList.remove("open");

}


$("#menu").addEventListener(
  "click",
  () => {

    $("#drawer").classList.add("open");
    $("#veil").classList.add("open");

  }
);


$("#close").addEventListener(
  "click",
  closeDrawer
);

$("#veil").addEventListener(
  "click",
  closeDrawer
);


/* =========================================================
   NEXT / PREVIOUS
   ========================================================= */

$("#next").addEventListener(
  "click",
  () => selectRaag(index + 1)
);

$("#prev").addEventListener(
  "click",
  () => selectRaag(index - 1)
);


/* =========================================================
   PLAY / PAUSE
   ========================================================= */

$("#play").addEventListener(
  "click",
  () => {

    if (!playerReady || !player) {
      return;
    }

    const state =
      player.getPlayerState();

    if (
      state === YT.PlayerState.PLAYING
    ) {

      player.pauseVideo();

    } else {

      player.playVideo();

    }

  }
);


/* =========================================================
   SEEK
   ========================================================= */

$("#seek").addEventListener(
  "input",
  event => {

    if (!playerReady || !player) {
      return;
    }

    const duration =
      player.getDuration();

    if (!duration) {
      return;
    }

    const percentage =
      Number(event.target.value);

    player.seekTo(
      duration * percentage / 100,
      true
    );

    $("#fill").style.width =
      `${percentage}%`;

  }
);


/* =========================================================
   YOUTUBE PLAYER
   ========================================================= */

window.onYouTubeIframeAPIReady =
  function () {

    player =
      new YT.Player(
        "youtube-player",
        {

          width: "1",
          height: "1",

          playerVars: {

            autoplay: 0,
            controls: 0,
            disablekb: 1,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,

            listType: "playlist",

            list:
              YOUTUBE_PLAYLIST_ID

          },

          events: {

            onReady: event => {

              playerReady = true;

              $("#state").textContent =
                "READY TO LISTEN";

              $("#duration").textContent =
                formatTime(
                  event.target.getDuration()
                );

            },


            onStateChange: event => {

              if (
                event.data ===
                YT.PlayerState.PLAYING
              ) {

                $("#play").textContent =
                  "Ⅱ";

                $("#state").textContent =
                  "NOW LISTENING";

                $(".player")
                  .classList
                  .add("playing");

                startProgress();

              }

              else if (
                event.data ===
                YT.PlayerState.PAUSED
              ) {

                $("#play").textContent =
                  "▶";

                $("#state").textContent =
                  "PAUSED";

                $(".player")
                  .classList
                  .remove("playing");

                stopProgress();

              }

              else if (
                event.data ===
                YT.PlayerState.ENDED
              ) {

                $("#play").textContent =
                  "▶";

                $("#state").textContent =
                  "READY TO LISTEN";

                $(".player")
                  .classList
                  .remove("playing");

                stopProgress();

              }

              else if (
                event.data ===
                YT.PlayerState.BUFFERING
              ) {

                $("#state").textContent =
                  "BUFFERING";

              }

            },


            onError: event => {

              console.warn(
                "YouTube Player Error:",
                event.data
              );

              $("#state").textContent =
                "UNAVAILABLE";

            }

          }

        }
      );

  };


/* =========================================================
   PROGRESS
   ========================================================= */

function startProgress() {

  stopProgress();

  progressTimer =
    setInterval(
      () => {

        if (!playerReady || !player) {
          return;
        }

        const duration =
          player.getDuration();

        const current =
          player.getCurrentTime();

        if (!duration) {
          return;
        }

        const percentage =
          (current / duration) * 100;

        $("#seek").value =
          percentage;

        $("#fill").style.width =
          `${percentage}%`;

        $("#current").textContent =
          formatTime(current);

        $("#total").textContent =
          formatTime(duration);

        $("#duration").textContent =
          formatTime(duration);

      },
      250
    );

}


function stopProgress() {

  if (progressTimer) {

    clearInterval(progressTimer);

    progressTimer = null;

  }

}


/* =========================================================
   INITIAL STATE
   ========================================================= */

render();
