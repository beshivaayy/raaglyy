/* =========================================================
   RAAGLYY
   SOUND BEYOND SILENCE

   VISUAL ARCHIVE ENGINE

   YouTube Playlist:
   PLJRipbfj__b0

   Spotify intentionally removed.
   ========================================================= */


const YOUTUBE_PLAYLIST_ID = "PLJRipbfj__b0";


/* =========================================================
   RAAG VISUAL SYSTEM
   =========================================================

   Every Raag has its own visual world.

   art:
   Main cover artwork.

   background:
   Full-screen atmospheric image.

   direction:
   Art-direction label shown below the artwork.

   mood:
   Used for visual styling.

   Replace these URLs later with your final curated
   photography / illustration assets.
   ========================================================= */


const raags = [

  {
    name: "Bhimpalasi",
    hindi: "राग भीमपलासी",
    time: "Afternoon",

    description:
      "A deeply expressive afternoon raag carrying longing, tenderness and introspection through its characteristic melodic movement.",

    tags: [
      "Afternoon",
      "Shringara",
      "Viraha"
    ],

    direction: "AFTERNOON LIGHT",
    mood: "warm",

    art:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",

    background:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=85"
  },


  {
    name: "Darbari Kanada",
    hindi: "राग दरबारी कानड़ा",
    time: "Late Night",

    description:
      "A grave and majestic late-night raag carrying depth, dignity, introspection and the atmosphere of an ancient royal court.",

    tags: [
      "Late Night",
      "Gambhir",
      "Royal"
    ],

    direction: "THE ROYAL NIGHT",
    mood: "dark",

    art:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=85",

    background:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2200&q=85"
  },


  {
    name: "Shuddh Sarang",
    hindi: "राग शुद्ध सारंग",
    time: "Afternoon",

    description:
      "A luminous Sarang-family raag associated with clarity, balance and a bright, open melodic character.",

    tags: [
      "Afternoon",
      "Sarang",
      "Luminous"
    ],

    direction: "WHITE HEAT",
    mood: "bright",

    art:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85",

    background:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2200&q=85"
  },


  {
    name: "Komal Rishabh Asavari",
    hindi: "राग कोमल ऋषभ आसावरी",
    time: "Morning",

    description:
      "A serious morning atmosphere shaped by the introspective character of the Asavari family.",

    tags: [
      "Morning",
      "Asavari",
      "Gambhir"
    ],

    direction: "EARTH AFTER DAWN",
    mood: "earth",

    art:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",

    background:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85"
  },


  {
    name: "Yaman",
    hindi: "राग यमन",
    time: "Evening",

    description:
      "An expansive evening raag with a luminous melodic character, associated with serenity, openness and emotional refinement.",

    tags: [
      "Evening",
      "Tivra Ma",
      "Shanta"
    ],

    direction: "BLUE HOUR",
    mood: "blue",

    art:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85",

    background:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2200&q=85"
  },


  {
    name: "Hamsadhwani",
    hindi: "राग हंसध्वनि",
    time: "Evening",

    description:
      "A bright pentatonic raag carrying a graceful, auspicious and celebratory character.",

    tags: [
      "Evening",
      "Pentatonic",
      "Mangala"
    ],

    direction: "FIRST STAR",
    mood: "silver",

    art:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",

    background:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2200&q=80"
  },


  {
    name: "Bhairavi",
    hindi: "राग भैरवी",
    time: "Morning",

    description:
      "A deeply emotional raag whose atmosphere can move between devotion, tenderness and introspection.",

    tags: [
      "Morning",
      "Bhakti",
      "Karuna"
    ],

    direction: "AFTER THE NIGHT",
    mood: "red",

    art:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=82",

    background:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=82"
  },


  {
    name: "Asavari",
    hindi: "राग आसावरी",
    time: "Late Morning",

    description:
      "A serious and earthy morning raag with a characteristic sense of gravity and introspection.",

    tags: [
      "Morning",
      "Asavari",
      "Gambhir"
    ],

    direction: "DRY EARTH",
    mood: "earth",

    art:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=82",

    background:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=82"
  },


  {
    name: "Desi Todi",
    hindi: "राग देसी तोड़ी",
    time: "Late Morning",

    description:
      "A contemplative late-morning atmosphere shaped by the distinctive tension and delicacy of the Todi family.",

    tags: [
      "Morning",
      "Todi",
      "Gambhir"
    ],

    direction: "PALE MORNING",
    mood: "pale",

    art:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=85",

    background:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=2200&q=85"
  },


  {
    name: "Kalyan",
    hindi: "राग कल्याण",
    time: "Evening",

    description:
      "An evening atmosphere associated with refinement, communication, learning and luminous melodic movement.",

    tags: [
      "Evening",
      "Kalyan",
      "Communication"
    ],

    direction: "GOLDEN BLUE",
    mood: "gold",

    art:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",

    background:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2200&q=80"
  },


  {
    name: "Poorvi",
    hindi: "राग पूर्वी",
    time: "Sunset",

    description:
      "A contemplative sunset raag carrying a serious and meditative colour as daylight withdraws.",

    tags: [
      "Sunset",
      "Gambhir",
      "Dhyana"
    ],

    direction: "THE LAST LIGHT",
    mood: "sunset",

    art:
      "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?auto=format&fit=crop&w=1200&q=85",

    background:
      "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?auto=format&fit=crop&w=2200&q=85"
  },


  {
    name: "Nat Bhairav",
    hindi: "राग नट भैरव",
    time: "Morning",

    description:
      "A morning raag balancing dignity, movement and expressive melodic contours.",

    tags: [
      "Morning",
      "Relationship",
      "Finance"
    ],

    direction: "MORNING STONE",
    mood: "stone",

    art:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=78",

    background:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=78"
  },


  {
    name: "Brindavani Sarang",
    hindi: "राग वृन्दावनी सारंग",
    time: "Afternoon",

    description:
      "An open and pastoral afternoon atmosphere carrying the freshness associated with the Sarang tradition.",

    tags: [
      "Afternoon",
      "Relationship",
      "Finance"
    ],

    direction: "VRINDAVAN AFTERNOON",
    mood: "green",

    art:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=85",

    background:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2200&q=85"
  },


  {
    name: "Shuddh Kalyan",
    hindi: "राग शुद्ध कल्याण",
    time: "Evening",

    description:
      "A serene evening atmosphere built around clarity, emotional balance and luminous melodic space.",

    tags: [
      "Evening",
      "Kalyan",
      "Shanta"
    ],

    direction: "QUIET HORIZON",
    mood: "blue",

    art:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=76",

    background:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2200&q=76"
  },


  {
    name: "Jaunpuri",
    hindi: "राग जौनपुरी",
    time: "Late Morning",

    description:
      "A reflective late-morning raag carrying a serious and expressive melodic personality.",

    tags: [
      "Morning",
      "Profession",
      "Chronic"
    ],

    direction: "LATE MORNING",
    mood: "earth",

    art:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",

    background:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80"
  },


  {
    name: "Kirwani",
    hindi: "राग किरवानी",
    time: "Night",

    description:
      "A nocturnal raag with a dramatic, lyrical and introspective character.",

    tags: [
      "Night",
      "Profession",
      "Chronic"
    ],

    direction: "AFTER DARK",
    mood: "night",

    art:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=85",

    background:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=85"
  },


  {
    name: "Neelambari",
    hindi: "राग नीलाम्बरी",
    time: "Night",

    description:
      "A quiet nocturnal world with a soft, inward and dreamlike character.",

    tags: [
      "Night",
      "Profession",
      "Chronic"
    ],

    direction: "BLUE SILENCE",
    mood: "blue",

    art:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=84",

    background:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2200&q=84"
  },


  {
    name: "Malkauns",
    hindi: "राग मालकौंस",
    time: "Late Night",

    description:
      "A powerful late-night pentatonic raag with an austere, mysterious and deeply inward atmosphere.",

    tags: [
      "Night",
      "Pentatonic",
      "Gambhir"
    ],

    direction: "MIDNIGHT EARTH",
    mood: "dark",

    art:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85",

    background:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2200&q=85"
  },


  {
    name: "Bhairav",
    hindi: "राग भैरव",
    time: "Dawn",

    description:
      "A dawn raag carrying gravity, devotion and the feeling of a world slowly awakening.",

    tags: [
      "Dawn",
      "Gambhir",
      "Bhakti"
    ],

    direction: "BEFORE SUNRISE",
    mood: "dawn",

    art:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=74",

    background:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2200&q=74"
  },


  {
    name: "Lalit",
    hindi: "राग ललित",
    time: "Pre-Dawn",

    description:
      "A pre-dawn atmosphere existing between night and morning, contemplative and unusually intimate.",

    tags: [
      "Pre-Dawn",
      "Dhyana",
      "Gambhir"
    ],

    direction: "BETWEEN NIGHT & DAY",
    mood: "mist",

    art:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=85",

    background:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2200&q=85"
  },


  {
    name: "Bhoop",
    hindi: "राग भूप",
    time: "Evening",

    description:
      "A spacious pentatonic evening raag with simplicity, openness and a clear melodic architecture.",

    tags: [
      "Evening",
      "Pentatonic",
      "Shanta"
    ],

    direction: "OPEN SKY",
    mood: "open",

    art:
      "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1200&q=85",

    background:
      "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=2200&q=85"
  },


  {
    name: "Madhuvanti",
    hindi: "राग मधुवंती",
    time: "Afternoon",

    description:
      "A tender afternoon raag carrying sweetness, longing and inward contemplation.",

    tags: [
      "Afternoon",
      "Viraha",
      "Contemplative"
    ],

    direction: "SWEET AFTERNOON",
    mood: "rose",

    art:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1200&q=78",

    background:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=2200&q=78"
  },


  {
    name: "Pilu",
    hindi: "राग पीलू",
    time: "Afternoon",

    description:
      "A lyrical and flexible afternoon raag with an intimate, human and expressive quality.",

    tags: [
      "Afternoon",
      "Lyrical",
      "Light"
    ],

    direction: "SOFT SUN",
    mood: "warm",

    art:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85",

    background:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=2200&q=85"
  },


  {
    name: "Shivranjani",
    hindi: "राग शिवरंजनी",
    time: "Night",

    description:
      "A deeply introspective night raag often experienced through tenderness, memory and emotional distance.",

    tags: [
      "Night",
      "Karuna",
      "Introspective"
    ],

    direction: "MEMORY AT NIGHT",
    mood: "night",

    art:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=78",

    background:
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2200&q=78"
  },


  {
    name: "Jaijaiwanti",
    hindi: "राग जयजयवंती",
    time: "Night",

    description:
      "A refined nocturnal raag combining lyrical delicacy with expressive emotional movement.",

    tags: [
      "Night",
      "Shringara",
      "Lyrical"
    ],

    direction: "MIDNIGHT POETRY",
    mood: "violet",

    art:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=75",

    background:
      "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2200&q=75"
  },


  {
    name: "Khamaj",
    hindi: "राग खमाज",
    time: "Night",

    description:
      "A graceful nocturnal raag with a lyrical and expressive character.",

    tags: [
      "Night",
      "Shringara",
      "Lyrical"
    ],

    direction: "VELVET NIGHT",
    mood: "wine",

    art:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=72",

    background:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=72"
  },


  {
    name: "Raag Tanpura",
    hindi: "राग तानपुरा",
    time: "All Prahar",

    description:
      "The continuous drone of the tanpura — the quiet foundation beneath melody, time and listening.",

    tags: [
      "Tanpura",
      "Drone",
      "Foundation"
    ],

    direction: "THE FOUNDATION",
    mood: "wood",

    art:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=85",

    background:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=2200&q=85"
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

let wheelLocked = false;


/* =========================================================
   HELPERS
   ========================================================= */

function pad(number) {

  return String(number).padStart(2, "0");

}


function formatTime(seconds) {

  if (
    !Number.isFinite(seconds) ||
    seconds < 0
  ) {

    return "00:00";

  }

  const minutes =
    Math.floor(seconds / 60);

  const secs =
    Math.floor(seconds % 60);

  return `${pad(minutes)}:${pad(secs)}`;

}


function wrapIndex(value) {

  return (
    (value + raags.length) %
    raags.length
  );

}


/* =========================================================
   BACKGROUND
   ========================================================= */

function updateBackground(raag) {

  const background =
    $("#bg .bg-image");

  background.style.backgroundImage =
    `url("${raag.background}")`;

  document.body.dataset.mood =
    raag.mood || "dark";

}


/* =========================================================
   COVERFLOW
   ========================================================= */

function buildCoverflow() {

  const stage =
    $("#coverflowStage");

  stage.innerHTML = "";

  const total =
    raags.length;


  /*
   * Render only nearby cards.
   * The remaining cards are represented by the
   * archive rail below.
   */

  for (
    let offset = -3;
    offset <= 3;
    offset++
  ) {

    const cardIndex =
      wrapIndex(index + offset);

    const raag =
      raags[cardIndex];


    const card =
      document.createElement("button");

    card.className =
      "cover-card";

    card.dataset.offset =
      offset;

    card.dataset.index =
      cardIndex;


    const position =
      Math.max(
        -3,
        Math.min(3, offset)
      );


    card.style.setProperty(
      "--offset",
      position
    );


    card.innerHTML = `

      <div class="cover-art">

        <img
          src="${raag.art}"
          alt="${raag.name}"
          draggable="false"
        >

        <div class="cover-overlay"></div>

        <div class="cover-number">
          ${pad(cardIndex + 1)}
        </div>

        <div class="cover-label">
          ${raag.name}
        </div>

      </div>

    `;


    card.addEventListener(
      "click",
      () => {

        if (offset === 0) {
          return;
        }

        selectRaag(
          index + offset
        );

      }
    );


    stage.appendChild(card);

  }


  /*
   * Accessibility / metadata
   */

  stage.setAttribute(
    "aria-label",
    `${raags[index].name}, ${index + 1} of ${total}`
  );

}


/* =========================================================
   RENDER
   ========================================================= */

function render() {

  const raag =
    raags[index];

  const number =
    pad(index + 1);

  const total =
    pad(raags.length);


  /* -----------------------------------------
     Text
     ----------------------------------------- */

  $("#num").textContent =
    number;

  $("#prahar").textContent =
    raag.time.toUpperCase();

  $("#category").textContent =
    raag.name.toUpperCase();

  $("#title").textContent =
    raag.name;

  $("#hindi").textContent =
    raag.hindi;

  $("#desc").textContent =
    raag.description;

  $("#time").textContent =
    raag.time.toUpperCase();

  $("#artDirection").textContent =
    raag.direction;

  $("#count").textContent =
    `${number} / ${total}`;

  $("#captionCount").textContent =
    `${number} — ${total}`;

  $("#visualCurrent").textContent =
    number;


  /* -----------------------------------------
     Tags
     ----------------------------------------- */

  $("#tags").innerHTML =
    raag.tags
      .map(
        tag =>
          `<span>${tag}</span>`
      )
      .join("");


  /* -----------------------------------------
     Background
     ----------------------------------------- */

  updateBackground(
    raag
  );


  /* -----------------------------------------
     Coverflow
     ----------------------------------------- */

  buildCoverflow();


  /* -----------------------------------------
     Archive rail
     ----------------------------------------- */

  buildRail();


  /* -----------------------------------------
     Drawer archive
     ----------------------------------------- */

  buildArchive();

}


/* =========================================================
   ARCHIVE RAIL
   ========================================================= */

function buildRail() {

  $("#rail").innerHTML =
    raags
      .map(
        (raag, i) => `

          <button
            class="
              rail-item
              ${i === index ? "active" : ""}
            "
            data-i="${i}"
            aria-label="${raag.name}"
          >

            <img
              src="${raag.art}"
              alt=""
              loading="lazy"
            >

            <span>
              ${raag.name}
            </span>

          </button>

        `
      )
      .join("");


  document
    .querySelectorAll(".rail-item")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          selectRaag(
            Number(
              button.dataset.i
            )
          );

        }
      );

    });


  const active =
    document.querySelector(
      ".rail-item.active"
    );


  if (active) {

    active.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center"
    });

  }

}


/* =========================================================
   DRAWER ARCHIVE
   ========================================================= */

function buildArchive() {

  $("#archive").innerHTML =
    raags
      .map(
        (raag, i) => `

          <button
            class="${i === index ? "active" : ""}"
            data-i="${i}"
          >

            <span>
              ${pad(i + 1)}
            </span>

            ${raag.name}

          </button>

        `
      )
      .join("");


  document
    .querySelectorAll(
      "#archive button"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          selectRaag(
            Number(
              button.dataset.i
            )
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

  const nextIndex =
    wrapIndex(newIndex);


  if (nextIndex === index) {
    return;
  }


  index =
    nextIndex;


  render();


  /*
   * Load corresponding YouTube playlist item.
   */

  if (
    playerReady &&
    player
  ) {

    try {

      player.loadPlaylist({
        list:
          YOUTUBE_PLAYLIST_ID,

        listType:
          "playlist",

        index
      });

    } catch (error) {

      console.warn(
        "Playlist navigation error:",
        error
      );

    }

  }

}


/* =========================================================
   NEXT / PREVIOUS
   ========================================================= */

function nextRaag() {

  selectRaag(
    index + 1
  );

}


function previousRaag() {

  selectRaag(
    index - 1
  );

}


$("#next").addEventListener(
  "click",
  nextRaag
);


$("#prev").addEventListener(
  "click",
  previousRaag
);


$("#flowNext").addEventListener(
  "click",
  nextRaag
);


$("#flowPrev").addEventListener(
  "click",
  previousRaag
);


/* =========================================================
   KEYBOARD NAVIGATION
   ========================================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.target.matches(
        "input, textarea"
      )
    ) {

      return;

    }


    if (
      event.key ===
      "ArrowRight"
    ) {

      nextRaag();

    }


    if (
      event.key ===
      "ArrowLeft"
    ) {

      previousRaag();

    }

  }
);


/* =========================================================
   TOUCH / SWIPE
   ========================================================= */

let touchStartX = 0;
let touchEndX = 0;


$("#coverflow")
  .addEventListener(
    "touchstart",
    event => {

      touchStartX =
        event.changedTouches[0].screenX;

    },
    { passive: true }
  );


$("#coverflow")
  .addEventListener(
    "touchend",
    event => {

      touchEndX =
        event.changedTouches[0].screenX;

      const distance =
        touchEndX -
        touchStartX;


      if (
        Math.abs(distance) <
        45
      ) {

        return;

      }


      if (
        distance < 0
      ) {

        nextRaag();

      } else {

        previousRaag();

      }

    },
    { passive: true }
  );


/* =========================================================
   MOUSE WHEEL
   ========================================================= */

$("#coverflow")
  .addEventListener(
    "wheel",
    event => {

      if (wheelLocked) {
        return;
      }


      if (
        Math.abs(event.deltaY) <
        Math.abs(event.deltaX)
      ) {

        return;

      }


      wheelLocked = true;


      if (
        event.deltaY > 0
      ) {

        nextRaag();

      } else {

        previousRaag();

      }


      setTimeout(
        () => {
          wheelLocked = false;
        },
        550
      );

    },
    { passive: true }
  );


/* =========================================================
   DRAWER
   ========================================================= */

function closeDrawer() {

  $("#drawer")
    .classList
    .remove("open");

  $("#veil")
    .classList
    .remove("open");

}


$("#menu")
  .addEventListener(
    "click",
    () => {

      $("#drawer")
        .classList
        .add("open");

      $("#veil")
        .classList
        .add("open");

    }
  );


$("#close")
  .addEventListener(
    "click",
    closeDrawer
  );


$("#veil")
  .addEventListener(
    "click",
    closeDrawer
  );


/* =========================================================
   PLAY / PAUSE
   ========================================================= */

$("#play")
  .addEventListener(
    "click",
    () => {

      if (
        !playerReady ||
        !player
      ) {

        return;

      }


      const state =
        player.getPlayerState();


      if (
        state ===
        YT.PlayerState.PLAYING
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

$("#seek")
  .addEventListener(
    "input",
    event => {

      if (
        !playerReady ||
        !player
      ) {

        return;

      }


      const duration =
        player.getDuration();


      if (!duration) {
        return;
      }


      const percentage =
        Number(
          event.target.value
        );


      player.seekTo(
        duration *
        percentage /
        100,
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

          listType:
            "playlist",

          list:
            YOUTUBE_PLAYLIST_ID

        },


        events: {

          onReady:
          event => {

            playerReady =
              true;


            $("#state")
              .textContent =
              "READY TO LISTEN";


            $("#duration")
              .textContent =
              formatTime(
                event
                  .target
                  .getDuration()
              );

          },


          onStateChange:
          event => {

            if (
              event.data ===
              YT.PlayerState.PLAYING
            ) {

              $("#play")
                .textContent =
                "Ⅱ";


              $("#state")
                .textContent =
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

              $("#play")
                .textContent =
                "▶";


              $("#state")
                .textContent =
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

              $("#play")
                .textContent =
                "▶";


              $("#state")
                .textContent =
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

              $("#state")
                .textContent =
                "BUFFERING";

            }

          },


          onError:
          event => {

            console.warn(
              "YouTube Player Error:",
              event.data
            );


            $("#state")
              .textContent =
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

        if (
          !playerReady ||
          !player
        ) {

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
          (
            current /
            duration
          ) * 100;


        $("#seek")
          .value =
          percentage;


        $("#fill")
          .style
          .width =
          `${percentage}%`;


        $("#current")
          .textContent =
          formatTime(
            current
          );


        $("#total")
          .textContent =
          formatTime(
            duration
          );


        $("#duration")
          .textContent =
          formatTime(
            duration
          );

      },
      250
    );

}


function stopProgress() {

  if (
    progressTimer
  ) {

    clearInterval(
      progressTimer
    );

    progressTimer =
      null;

  }

}


/* =========================================================
   INITIALISE
   ========================================================= */

render();
