/* =========================================================
   RAAGLYY
   SOUND BEYOND SILENCE

   Application state + 27 Raag archive + audio engine
   ========================================================= */


/* =========================================================
   RAAG DATA
   ========================================================= */

const RAAGS = [

  {
    id: "yaman",
    name: "Yaman",
    hindi: "राग यमन",
    prahar: "Evening",
    time: "First Prahar",
    description:
      "A luminous evening raag built around tivra madhyam. Its character is expansive, serene and quietly devotional.",
    tags: ["Evening", "Tivra Ma", "Shanta"],
    audio: "audio/yaman.mp3"
  },

  {
    id: "bhairav",
    name: "Bhairav",
    hindi: "राग भैरव",
    prahar: "Dawn",
    time: "First Prahar",
    description:
      "A grave morning raag whose oscillating komal Re and Dha create an austere and meditative atmosphere.",
    tags: ["Dawn", "Gambhir", "Bhakti"],
    audio: "audio/bhairav.mp3"
  },

  {
    id: "malkauns",
    name: "Malkauns",
    hindi: "राग मालकौंस",
    prahar: "Late Night",
    time: "Fourth Prahar",
    description:
      "A pentatonic night raag with a deep, inward and almost elemental character.",
    tags: ["Night", "Pentatonic", "Gambhir"],
    audio: "audio/malkauns.mp3"
  },

  {
    id: "darbari-kanada",
    name: "Darbari Kanada",
    hindi: "राग दरबारी कानड़ा",
    prahar: "Late Night",
    time: "Fourth Prahar",
    description:
      "A majestic late-night raag known for its weight, depth and slow, deliberate ornamentation.",
    tags: ["Night", "Gambhir", "Royal"],
    audio: "audio/darbari-kanada.mp3"
  },

  {
    id: "bageshri",
    name: "Bageshri",
    hindi: "राग बागेश्री",
    prahar: "Night",
    time: "Third Prahar",
    description:
      "An intimate night raag shaped by longing, tenderness and quiet introspection.",
    tags: ["Night", "Shringara", "Komal"],
    audio: "audio/bageshri.mp3"
  },

  {
    id: "todi",
    name: "Todi",
    hindi: "राग तोड़ी",
    prahar: "Late Morning",
    time: "Second Prahar",
    description:
      "A highly expressive morning raag with a distinctive microtonal and contemplative personality.",
    tags: ["Morning", "Gambhir", "Viraha"],
    audio: "audio/todi.mp3"
  },

  {
    id: "marwa",
    name: "Marwa",
    hindi: "राग मारवा",
    prahar: "Sunset",
    time: "Fourth Prahar",
    description:
      "A tense and austere sunset raag suspended between daylight and darkness.",
    tags: ["Sunset", "Tension", "Dhyana"],
    audio: "audio/marwa.mp3"
  },

  {
    id: "desh",
    name: "Desh",
    hindi: "राग देश",
    prahar: "Night",
    time: "Second Prahar",
    description:
      "A graceful raag carrying warmth, nostalgia and a distinctly lyrical contour.",
    tags: ["Night", "Lyrical", "Monsoon"],
    audio: "audio/desh.mp3"
  },

  {
    id: "kafi",
    name: "Kafi",
    hindi: "राग काफी",
    prahar: "Evening",
    time: "Second Prahar",
    description:
      "Earthy and folk-inflected, Kafi balances sweetness with an understated naturalness.",
    tags: ["Evening", "Folk", "Lyrical"],
    audio: "audio/kafi.mp3"
  },

  {
    id: "bhimpalasi",
    name: "Bhimpalasi",
    hindi: "राग भीमपलासी",
    prahar: "Afternoon",
    time: "Second Prahar",
    description:
      "A deeply expressive afternoon raag associated with yearning, repose and inward emotional colour.",
    tags: ["Afternoon", "Viraha", "Komal"],
    audio: "audio/bhimpalasi.mp3"
  },

  {
    id: "multani",
    name: "Multani",
    hindi: "राग मुल्तानी",
    prahar: "Late Afternoon",
    time: "Fourth Prahar",
    description:
      "A contemplative afternoon raag with a highly distinctive tonal identity and restrained intensity.",
    tags: ["Afternoon", "Todi Ang", "Dhyana"],
    audio: "audio/multani.mp3"
  },

  {
    id: "puriya",
    name: "Puriya",
    hindi: "राग पूरिया",
    prahar: "Sunset",
    time: "Fourth Prahar",
    description:
      "A serious twilight raag whose tension and refinement create an atmosphere of anticipation.",
    tags: ["Twilight", "Gambhir", "Dhyana"],
    audio: "audio/puriya.mp3"
  },

  {
    id: "puriya-dhanashri",
    name: "Puriya Dhanashri",
    hindi: "राग पूरिया धनाश्री",
    prahar: "Evening",
    time: "First Prahar",
    description:
      "A graceful evening raag combining the introspective colour of Puriya with lyrical movement.",
    tags: ["Evening", "Lyrical", "Gambhir"],
    audio: "audio/puriya-dhanashri.mp3"
  },

  {
    id: "shree",
    name: "Shree",
    hindi: "राग श्री",
    prahar: "Sunset",
    time: "Fourth Prahar",
    description:
      "A profound twilight raag marked by gravity, restraint and an unmistakably meditative presence.",
    tags: ["Twilight", "Gambhir", "Dhyana"],
    audio: "audio/shree.mp3"
  },

  {
    id: "lalit",
    name: "Lalit",
    hindi: "राग ललित",
    prahar: "Dawn",
    time: "Last Prahar",
    description:
      "A subtle pre-dawn raag with a distinctive tonal architecture and an atmosphere of stillness.",
    tags: ["Pre-Dawn", "Meditative", "Rare"],
    audio: "audio/lalit.mp3"
  },

  {
    id: "ahirbhairav",
    name: "Ahir Bhairav",
    hindi: "राग अहीर भैरव",
    prahar: "Dawn",
    time: "First Prahar",
    description:
      "A serene morning raag blending the gravity of Bhairav with a softer pastoral colour.",
    tags: ["Dawn", "Devotional", "Serene"],
    audio: "audio/ahir-bhairav.mp3"
  },

  {
    id: "jaunpuri",
    name: "Jaunpuri",
    hindi: "राग जौनपुरी",
    prahar: "Morning",
    time: "Second Prahar",
    description:
      "A lyrical morning raag with a plaintive character and expressive treatment of its komal swaras.",
    tags: ["Morning", "Viraha", "Lyrical"],
    audio: "audio/jaunpuri.mp3"
  },

  {
    id: "deshkar",
    name: "Deshkar",
    hindi: "राग देशकार",
    prahar: "Morning",
    time: "First Prahar",
    description:
      "A bright pentatonic morning raag carrying clarity, movement and an uplifting character.",
    tags: ["Morning", "Pentatonic", "Bright"],
    audio: "audio/deshkar.mp3"
  },

  {
    id: "shankara",
    name: "Shankara",
    hindi: "राग शंकरा",
    prahar: "Late Night",
    time: "Fourth Prahar",
    description:
      "A majestic late-night raag with a bright, dignified and strongly classical character.",
    tags: ["Night", "Majestic", "Bright"],
    audio: "audio/shankara.mp3"
  },

  {
    id: "hamir",
    name: "Hamir",
    hindi: "राग हमीर",
    prahar: "Night",
    time: "Second Prahar",
    description:
      "A rich and expansive evening raag with regal movement and a luminous upper register.",
    tags: ["Night", "Royal", "Expansive"],
    audio: "audio/hamir.mp3"
  },

  {
    id: "kedar",
    name: "Kedar",
    hindi: "राग केदार",
    prahar: "Night",
    time: "First Prahar",
    description:
      "A devotional night raag known for its graceful oscillations and distinctive treatment of madhyam.",
    tags: ["Night", "Devotional", "Graceful"],
    audio: "audio/kedar.mp3"
  },

  {
    id: "hameer-kalyani",
    name: "Hameer Kalyani",
    hindi: "राग हमीर कल्याणी",
    prahar: "Evening",
    time: "First Prahar",
    description:
      "A luminous evening colour combining the grandeur of Hamir with the radiance of Kalyan.",
    tags: ["Evening", "Luminous", "Royal"],
    audio: "audio/hameer-kalyani.mp3"
  },

  {
    id: "shuddha-kalyan",
    name: "Shuddha Kalyan",
    hindi: "राग शुद्ध कल्याण",
    prahar: "Evening",
    time: "First Prahar",
    description:
      "A serene Kalyan-family raag with a balanced, spacious and devotional character.",
    tags: ["Evening", "Kalyan", "Serene"],
    audio: "audio/shuddha-kalyan.mp3"
  },

  {
    id: "bihag",
    name: "Bihag",
    hindi: "राग बिहाग",
    prahar: "Night",
    time: "Second Prahar",
    description:
      "A graceful night raag celebrated for its romantic luminosity and elegant melodic movement.",
    tags: ["Night", "Shringara", "Elegant"],
    audio: "audio/bihag.mp3"
  },

  {
    id: "khamaj",
    name: "Khamaj",
    hindi: "राग खमाज",
    prahar: "Late Evening",
    time: "Second Prahar",
    description:
      "A warm and sensuous evening raag with an intimate, lyrical and expressive personality.",
    tags: ["Evening", "Shringara", "Lyrical"],
    audio: "audio/khamaj.mp3"
  },

  {
    id: "tilak-kamod",
    name: "Tilak Kamod",
    hindi: "राग तिलक कामोद",
    prahar: "Night",
    time: "Second Prahar",
    description:
      "A playful and graceful night raag with a lyrical contour and unmistakable romantic charm.",
    tags: ["Night", "Lyrical", "Playful"],
    audio: "audio/tilak-kamod.mp3"
  },

  {
    id: "bhoopali",
    name: "Bhoopali",
    hindi: "राग भूपाली",
    prahar: "Evening",
    time: "First Prahar",
    description:
      "A clear pentatonic raag whose open intervals create a luminous, spacious and tranquil mood.",
    tags: ["Evening", "Pentatonic", "Shanta"],
    audio: "audio/bhoopali.mp3"
  }

];


/* =========================================================
   CONSTANTS
   ========================================================= */

const TOTAL_RAAGS = RAAGS.length;

const $ = selector => document.querySelector(selector);

const elements = {
  bg: $("#bg"),
  menu: $("#menu"),
  drawer: $("#drawer"),
  close: $("#close"),
  veil: $("#veil"),
  archive: $("#archive"),
  planets: $("#planets"),
  rail: $("#rail"),
  orbit: $("#orbit"),

  num: $("#num"),
  prahar: $("#prahar"),
  title: $("#title"),
  hindi: $("#hindi"),
  desc: $("#desc"),
  time: $("#time"),
  coreName: $("#coreName"),
  degree: $("#degree"),
  count: $("#count"),
  captionCount: $("#captionCount"),
  tags: $("#tags"),

  player: $("#player"),
  audio: $("#audio"),
  play: $("#play"),
  prev: $("#prev"),
  next: $("#next"),
  seek: $("#seek"),
  fill: $("#fill"),
  current: $("#current"),
  total: $("#total"),
  duration: $("#duration"),
  state: $("#state")
};


/* =========================================================
   APPLICATION STATE
   ========================================================= */

const state = {
  index: 0,
  isPlaying: false,
  loadedIndex: -1,
  seeking: false
};


/* =========================================================
   HELPERS
   ========================================================= */

function pad(value) {
  return String(value).padStart(2, "0");
}


function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "00:00";
  }

  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${pad(minutes)}:${pad(secs)}`;
}


function slugHue(index) {
  return (index * 41) % 360;
}


function art(index) {
  const hue = slugHue(index);
  const secondHue = (hue + 70) % 360;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 400"
    >
      <defs>
        <radialGradient id="g">
          <stop stop-color="hsl(${hue} 38% 45%)"/>
          <stop offset="1" stop-color="#09070b"/>
        </radialGradient>
      </defs>

      <rect
        width="600"
        height="400"
        fill="#09070b"
      />

      <circle
        cx="300"
        cy="205"
        r="210"
        fill="url(#g)"
        opacity=".8"
      />

      <circle
        cx="430"
        cy="110"
        r="80"
        fill="hsl(${secondHue} 35% 38%)"
        opacity=".18"
      />

      <path
        d="M0 330 Q180 210 330 330 T600 300 V400H0Z"
        fill="#000"
        opacity=".35"
      />
    </svg>
  `)}`;
}


/* =========================================================
   BACKGROUND
   ========================================================= */

function updateBackground() {
  const hue = slugHue(state.index);

  elements.bg.style.background = `
    radial-gradient(
      circle at 68% 48%,
      hsl(${hue} 30% 28% / .28),
      transparent 30%
    ),
    radial-gradient(
      circle at 30% 65%,
      hsl(${(hue + 70) % 360} 25% 25% / .10),
      transparent 26%
    ),
    #08070a
  `;
}


/* =========================================================
   CORE INFORMATION
   ========================================================= */

function renderInformation() {
  const raag = RAAGS[state.index];

  elements.num.textContent = pad(state.index + 1);

  elements.prahar.textContent =
    raag.prahar.toUpperCase();

  elements.title.textContent =
    raag.name;

  elements.hindi.textContent =
    raag.hindi;

  elements.desc.textContent =
    raag.description;

  elements.time.textContent =
    raag.time.toUpperCase();

  elements.coreName.textContent =
    raag.name.toUpperCase();

  elements.degree.textContent =
    `${pad(state.index + 1)} / ${pad(TOTAL_RAAGS)}`;

  elements.count.textContent =
    `${pad(state.index + 1)} / ${pad(TOTAL_RAAGS)}`;

  elements.captionCount.textContent =
    `${pad(state.index + 1)} — ${pad(TOTAL_RAAGS)}`;

  elements.tags.innerHTML =
    raag.tags
      .map(tag => `<span>${tag}</span>`)
      .join("");

  updateBackground();
}


/* =========================================================
   ORBIT
   ========================================================= */

function getOrbitRadius() {
  const width =
    elements.orbit.getBoundingClientRect().width;

  /*
    Keep the orbit responsive.

    Desktop:
      larger radius

    Mobile:
      smaller radius
  */

  const radiusX =
    Math.min(
      Math.max(width * 0.39, 105),
      245
    );

  const radiusY =
    Math.min(
      Math.max(width * 0.205, 58),
      125
    );

  return {
    x: radiusX,
    y: radiusY
  };
}


function renderOrbit() {
  const { x: radiusX, y: radiusY } =
    getOrbitRadius();

  elements.planets.innerHTML = "";

  RAAGS.forEach((raag, index) => {

    /*
      27 positions around the ellipse.

      We rotate the entire sequence slightly so that
      the active raag is visually prominent.
    */

    const angle =
      (Math.PI * 2 * index / TOTAL_RAAGS)
      - Math.PI / 2;

    const x =
      Math.cos(angle) * radiusX;

    const y =
      Math.sin(angle) * radiusY;


    const planet =
      document.createElement("button");

    planet.type = "button";

    planet.className =
      `planet ${index === state.index ? "active" : ""}`;

    planet.dataset.index = index;

    planet.style.setProperty(
      "--x",
      `${x}px`
    );

    planet.style.setProperty(
      "--y",
      `${y}px`
    );

    planet.setAttribute(
      "aria-label",
      `Select ${raag.name}`
    );

    planet.setAttribute(
      "aria-pressed",
      index === state.index
        ? "true"
        : "false"
    );


    const image =
      document.createElement("img");

    image.src =
      art(index);

    image.alt = "";


    const label =
      document.createElement("label");

    label.textContent =
      raag.name.toUpperCase();


    planet.appendChild(image);
    planet.appendChild(label);

    elements.planets.appendChild(planet);
  });
}


/* =========================================================
   ARCHIVE RAIL
   ========================================================= */

function renderRail() {
  elements.rail.innerHTML = "";

  RAAGS.forEach((raag, index) => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      `rail-item ${index === state.index ? "active" : ""}`;

    button.dataset.index = index;

    button.setAttribute(
      "aria-label",
      `Select ${raag.name}`
    );

    button.setAttribute(
      "aria-current",
      index === state.index
        ? "true"
        : "false"
    );


    const image =
      document.createElement("img");

    image.src =
      art(index);

    image.alt = "";


    const title =
      document.createElement("span");

    title.textContent =
      raag.name;


    button.appendChild(image);
    button.appendChild(title);

    elements.rail.appendChild(button);
  });
}


/* =========================================================
   DRAWER ARCHIVE
   ========================================================= */

function renderArchive() {
  elements.archive.innerHTML = "";

  RAAGS.forEach((raag, index) => {

    const button =
      document.createElement("button");

    button.type = "button";

    button.className =
      index === state.index
        ? "active"
        : "";

    button.dataset.index = index;

    button.textContent =
      `${pad(index + 1)} — ${raag.name}`;

    button.setAttribute(
      "aria-current",
      index === state.index
        ? "true"
        : "false"
    );

    elements.archive.appendChild(button);
  });
}


/* =========================================================
   UI RENDER
   ========================================================= */

function render() {
  renderInformation();
  renderOrbit();
  renderRail();
  renderArchive();

  syncPlayerUI();
}


/* =========================================================
   AUDIO
   ========================================================= */

function loadTrack(index, autoplay = false) {
  const raag = RAAGS[index];

  state.loadedIndex = index;

  state.isPlaying = false;

  elements.audio.pause();

  elements.audio.src =
    raag.audio;

  elements.audio.load();

  resetProgress();

  setPlayerState(
    "LOADING",
    false
  );

  if (autoplay) {
    const playPromise =
      elements.audio.play();

    if (playPromise) {
      playPromise.catch(() => {
        /*
          Browser may block autoplay.

          The UI remains in a truthful state
          instead of pretending playback started.
        */
        state.isPlaying = false;

        setPlayerState(
          "READY TO LISTEN",
          false
        );
      });
    }
  }
}


function playCurrent() {
  const raag =
    RAAGS[state.index];

  if (
    state.loadedIndex !== state.index
  ) {
    loadTrack(
      state.index,
      true
    );

    return;
  }

  if (!elements.audio.src) {
    setPlayerState(
      "AUDIO UNAVAILABLE",
      false
    );

    return;
  }

  elements.audio
    .play()
    .catch(() => {
      setPlayerState(
        "AUDIO UNAVAILABLE",
        false
      );
    });
}


function pauseCurrent() {
  elements.audio.pause();
}


function togglePlay() {
  if (state.isPlaying) {
    pauseCurrent();
  } else {
    playCurrent();
  }
}


/* =========================================================
   PLAYER STATE
   ========================================================= */

function setPlayerState(label, playing) {
  state.isPlaying = playing;

  elements.state.textContent =
    label;

  elements.player.classList.toggle(
    "playing",
    playing
  );

  elements.play.textContent =
    playing
      ? "Ⅱ"
      : "▶";

  elements.play.setAttribute(
    "aria-pressed",
    playing
      ? "true"
      : "false"
  );

  elements.play.setAttribute(
    "aria-label",
    playing
      ? "Pause current raag"
      : "Play current raag"
  );
}


function syncPlayerUI() {
  if (state.loadedIndex !== state.index) {
    resetProgress();
  }
}


function resetProgress() {
  elements.seek.value = 0;

  elements.fill.style.width =
    "0%";

  elements.current.textContent =
    "00:00";

  elements.total.textContent =
    "00:00";

  elements.duration.textContent =
    "00:00";
}


/* =========================================================
   NAVIGATION
   ========================================================= */

function selectRaag(
  index,
  autoplay = false
) {
  if (
    index < 0 ||
    index >= TOTAL_RAAGS
  ) {
    return;
  }

  state.index = index;

  render();

  loadTrack(
    state.index,
    autoplay
  );

  /*
    Keep selected rail item visible.
  */

  requestAnimationFrame(() => {

    const activeRail =
      elements.rail.querySelector(
        ".rail-item.active"
      );

    activeRail?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });

  });
}


function nextRaag(
  autoplay = state.isPlaying
) {
  const next =
    (state.index + 1)
    % TOTAL_RAAGS;

  selectRaag(
    next,
    autoplay
  );
}


function previousRaag() {
  const previous =
    (state.index - 1 + TOTAL_RAAGS)
    % TOTAL_RAAGS;

  selectRaag(
    previous,
    state.isPlaying
  );
}


/* =========================================================
   DRAWER
   ========================================================= */

function openDrawer() {
  elements.drawer.classList.add(
    "open"
  );

  elements.veil.classList.add(
    "open"
  );

  elements.drawer.setAttribute(
    "aria-hidden",
    "false"
  );

  elements.menu.setAttribute(
    "aria-expanded",
    "true"
  );
}


function closeDrawer() {
  elements.drawer.classList.remove(
    "open"
  );

  elements.veil.classList.remove(
    "open"
  );

  elements.drawer.setAttribute(
    "aria-hidden",
    "true"
  );

  elements.menu.setAttribute(
    "aria-expanded",
    "false"
  );
}


/* =========================================================
   EVENTS
   ========================================================= */


/* Drawer */

elements.menu.addEventListener(
  "click",
  openDrawer
);

elements.close.addEventListener(
  "click",
  closeDrawer
);

elements.veil.addEventListener(
  "click",
  closeDrawer
);


/* Archive */

elements.archive.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        "button[data-index]"
      );

    if (!button) {
      return;
    }

    selectRaag(
      Number(button.dataset.index)
    );

    closeDrawer();
  }
);


/* Orbit */

elements.planets.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        ".planet[data-index]"
      );

    if (!button) {
      return;
    }

    selectRaag(
      Number(button.dataset.index)
    );
  }
);


/* Rail */

elements.rail.addEventListener(
  "click",
  event => {

    const button =
      event.target.closest(
        ".rail-item[data-index]"
      );

    if (!button) {
      return;
    }

    selectRaag(
      Number(button.dataset.index)
    );
  }
);


/* Player */

elements.play.addEventListener(
  "click",
  togglePlay
);

elements.next.addEventListener(
  "click",
  () => nextRaag(true)
);

elements.prev.addEventListener(
  "click",
  previousRaag
);


/* Audio events */

elements.audio.addEventListener(
  "play",
  () => {
    setPlayerState(
      "NOW LISTENING",
      true
    );
  }
);


elements.audio.addEventListener(
  "pause",
  () => {

    /*
      Don't overwrite LOADING state.
    */

    if (
      elements.state.textContent !==
      "LOADING"
    ) {
      setPlayerState(
        "PAUSED",
        false
      );
    }
  }
);


elements.audio.addEventListener(
  "loadedmetadata",
  () => {

    const duration =
      elements.audio.duration;

    if (
      Number.isFinite(duration)
    ) {
      elements.total.textContent =
        formatTime(duration);

      elements.duration.textContent =
        formatTime(duration);
    }
  }
);


elements.audio.addEventListener(
  "timeupdate",
  () => {

    if (
      state.seeking
    ) {
      return;
    }

    const current =
      elements.audio.currentTime;

    const duration =
      elements.audio.duration;

    elements.current.textContent =
      formatTime(current);

    if (
      Number.isFinite(duration) &&
      duration > 0
    ) {

      const percentage =
        (current / duration) * 100;

      elements.seek.value =
        percentage;

      elements.fill.style.width =
        `${percentage}%`;
    }
  }
);


elements.audio.addEventListener(
  "ended",
  () => {
    nextRaag(true);
  }
);


elements.audio.addEventListener(
  "error",
  () => {

    state.isPlaying = false;

    elements.player.classList.remove(
      "playing"
    );

    elements.play.textContent =
      "▶";

    elements.play.setAttribute(
      "aria-pressed",
      "false"
    );

    elements.state.textContent =
      "AUDIO UNAVAILABLE";
  }
);


/* Seek */

elements.seek.addEventListener(
  "pointerdown",
  () => {
    state.seeking = true;
  }
);


elements.seek.addEventListener(
  "pointerup",
  () => {

    const duration =
      elements.audio.duration;

    if (
      Number.isFinite(duration) &&
      duration > 0
    ) {

      const percentage =
        Number(elements.seek.value);

      elements.audio.currentTime =
        duration *
        (percentage / 100);
    }

    state.seeking = false;
  }
);


elements.seek.addEventListener(
  "input",
  event => {

    const percentage =
      Number(event.target.value);

    elements.fill.style.width =
      `${percentage}%`;

    const duration =
      elements.audio.duration;

    if (
      Number.isFinite(duration) &&
      duration > 0
    ) {

      const preview =
        duration *
        (percentage / 100);

      elements.current.textContent =
        formatTime(preview);
    }
  }
);


/* Keyboard */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {
      closeDrawer();
    }

    if (
      event.key === "ArrowRight" &&
      !isTypingTarget(event.target)
    ) {
      nextRaag(false);
    }

    if (
      event.key === "ArrowLeft" &&
      !isTypingTarget(event.target)
    ) {
      previousRaag();
    }

    if (
      event.code === "Space" &&
      !isTypingTarget(event.target)
    ) {
      event.preventDefault();
      togglePlay();
    }
  }
);


function isTypingTarget(
  target
) {
  return (
    target instanceof
      HTMLInputElement ||
    target instanceof
      HTMLTextAreaElement ||
    target instanceof
      HTMLSelectElement
  );
}


/* =========================================================
   RESPONSIVE ORBIT
   ========================================================= */

let resizeTimer;

window.addEventListener(
  "resize",
  () => {

    clearTimeout(resizeTimer);

    resizeTimer =
      setTimeout(
        () => renderOrbit(),
        120
      );
  }
);


/* =========================================================
   INITIALIZATION
   ========================================================= */

function init() {

  render();

  /*
    Load the first track metadata without
    automatically playing it.
  */

  loadTrack(
    state.index,
    false
  );

  setPlayerState(
    "READY TO LISTEN",
    false
  );
}


init();
