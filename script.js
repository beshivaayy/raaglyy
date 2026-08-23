/* =========================================================
   RAAGLYY
   SOUND BEYOND SILENCE

   PLAYBACK:
   YouTube Playlist
   Playlist ID: PLJRipbfj__b0

   Spotify intentionally removed.
   ========================================================= */


const YOUTUBE_PLAYLIST_ID = "PLJRipbfj__b0";


/* =========================================================
   27 RAAGS
   EXACT YOUTUBE PLAYLIST ORDER
   ========================================================= */

const raags = [

  {
    name: "Bhimpalasi",
    hindi: "राग भीमपलासी",
    time: "Afternoon",
    description:
      "A deeply expressive afternoon raag carrying longing, tenderness and introspection through its characteristic melodic movement.",
    tags: ["Afternoon", "Shringara", "Viraha"]
  },

  {
    name: "Darbari Kanada",
    hindi: "राग दरबारी कानड़ा",
    time: "Late Night",
    description:
      "For heart disease, problems related to children, honour, getting a position in life, and relationships with father and government.",
    tags: ["Late Night", "Gambhir", "Royal"]
  },

  {
    name: "Shuddh Sarang",
    hindi: "राग शुद्ध सारंग",
    time: "Afternoon",
    description:
      "A luminous Sarang-family raag associated with clarity, balance and a bright, open melodic character.",
    tags: ["Afternoon", "Sarang", "Luminous"]
  },

  {
    name: "Komal Rishabh Asavari",
    hindi: "राग कोमल ऋषभ आसावरी",
    time: "Morning",
    description:
      "For property-related issues, blood-related problems, violence, and accidents.",
    tags: ["Morning", "Asavari", "Gambhir"]
  },

  {
    name: "Yaman",
    hindi: "राग यमन",
    time: "Evening",
    description:
      "For mental peace, relations with mother, happiness, calmness, family atmosphere, emotional trauma, and pain.",
    tags: ["Evening", "Tivra Ma", "Shanta"]
  },

  {
    name: "Hamsadhwani",
    hindi: "राग हंसध्वनि",
    time: "Evening",
    description:
      "For mental peace, relations with mother, happiness, calmness, family atmosphere, emotional trauma, and pain.",
    tags: ["Evening", "Pentatonic", "Mangala"]
  },

  {
    name: "Bhairavi",
    hindi: "राग भैरवी",
    time: "Morning",
    description:
      "For insomnia, property-related issues, blood-related problems, violence, and accidents.",
    tags: ["Morning", "Bhakti", "Karuna"]
  },

  {
    name: "Asavari",
    hindi: "राग आसावरी",
    time: "Late Morning",
    description:
      "For property-related issues, blood-related problems, violence, and accidents.",
    tags: ["Morning", "Asavari", "Gambhir"]
  },

  {
    name: "Desi Todi",
    hindi: "राग देसी तोड़ी",
    time: "Late Morning",
    description:
      "For property-related issues, blood-related problems, violence, and accidents.",
    tags: ["Morning", "Todi", "Gambhir"]
  },

  {
    name: "Kalyan",
    hindi: "राग कल्याण",
    time: "Evening",
    description:
      "For education-related troubles, fights with siblings, thyroid and hormonal imbalance, communication, business, and friends.",
    tags: ["Evening", "Kalyan", "Communication"]
  },

  {
    name: "Poorvi",
    hindi: "राग पूर्वी",
    time: "Sunset",
    description:
      "For education-related troubles, fights with siblings, thyroid and hormonal imbalances, communication, business, and friends.",
    tags: ["Sunset", "Gambhir", "Dhyana"]
  },

  {
    name: "Nat Bhairav",
    hindi: "राग नट भैरव",
    time: "Morning",
    description:
      "For relationship issues and money-related troubles.",
    tags: ["Morning", "Relationship", "Finance"]
  },

  {
    name: "Brindavani Sarang",
    hindi: "राग वृन्दावनी सारंग",
    time: "Afternoon",
    description:
      "For relationship issues and money-related financial troubles.",
    tags: ["Afternoon", "Relationship", "Finance"]
  },

  {
    name: "Shuddh Kalyan",
    hindi: "राग शुद्ध कल्याण",
    time: "Evening",
    description:
      "For mental peace, relations with mother, family atmosphere, emotional trauma, pain, and missing motivation, purpose, or intangible happiness.",
    tags: ["Evening", "Kalyan", "Shanta"]
  },

  {
    name: "Jaunpuri",
    hindi: "राग जौनपुरी",
    time: "Late Morning",
    description:
      "For profession-related issues, long-term diseases, and chronic troubles.",
    tags: ["Morning", "Profession", "Chronic"]
  },

  {
    name: "Kirwani",
    hindi: "राग किरवानी",
    time: "Night",
    description:
      "For profession-related issues, long-term diseases, and chronic troubles.",
    tags: ["Night", "Profession", "Chronic"]
  },

  {
    name: "Neelambari",
    hindi: "राग नीलाम्बरी",
    time: "Night",
    description:
      "For profession-related issues, long-term diseases, and chronic troubles.",
    tags: ["Night", "Profession", "Chronic"]
  },

  {
    name: "Malkauns",
    hindi: "राग मालकौंस",
    time: "Late Night",
    description:
      "For asthma.",
    tags: ["Night", "Pentatonic", "Gambhir"]
  },

  {
    name: "Bhairav",
    hindi: "राग भैरव",
    time: "Dawn",
    description:
      "For headache.",
    tags: ["Dawn", "Gambhir", "Bhakti"]
  },

  {
    name: "Lalit",
    hindi: "राग ललित",
    time: "Pre-Dawn",
    description:
      "For asthma.",
    tags: ["Pre-Dawn", "Dhyana", "Gambhir"]
  },

  {
    name: "Bhoop",
    hindi: "राग भूप",
    time: "Evening",
    description:
      "For blood pressure.",
    tags: ["Evening", "Pentatonic", "Shanta"]
  },

  {
    name: "Madhuvanti",
    hindi: "राग मधुवंती",
    time: "Afternoon",
    description:
      "For depression and mental stress.",
    tags: ["Afternoon", "Viraha", "Contemplative"]
  },

  {
    name: "Pilu",
    hindi: "राग पीलू",
    time: "Afternoon",
    description:
      "For anemia.",
    tags: ["Afternoon", "Lyrical", "Light"]
  },

  {
    name: "Shivranjani",
    hindi: "राग शिवरंजनी",
    time: "Night",
    description:
      "For memory loss.",
    tags: ["Night", "Karuna", "Introspective"]
  },

  {
    name: "Jaijaiwanti",
    hindi: "राग जयजयवंती",
    time: "Night",
    description:
      "For weakness.",
    tags: ["Night", "Shringara", "Lyrical"]
  },

  {
    name: "Khamaj",
    hindi: "राग खमाज",
    time: "Night",
    description:
      "For acidity.",
    tags: ["Night", "Shringara", "Lyrical"]
  },

  {
    name: "Raag Tanpura",
    hindi: "राग तानपुरा",
    time: "All Prahar",
    description:
      "For problems related to children, honour, getting a position in life, and relationships with father and government.",
    tags: ["Tanpura", "Drone", "Foundation"]
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


function art(i) {

  const hue = (i * 41) % 360;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">

      <defs>
        <radialGradient id="g">
          <stop stop-color="hsl(${hue} 38% 45%)"/>
          <stop offset="1" stop-color="#09070b"/>
        </radialGradient>
      </defs>

      <rect width="600" height="400" fill="#09070b"/>

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
        fill="hsl(${(hue + 70) % 360} 35% 38%)"
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

  const hue = (index * 41) % 360;

  $("#bg").style.background = `
    radial-gradient(
      circle at 68% 48%,
      hsl(${hue} 30% 28% / .28),
      transparent 30%
    ),
    #08070a
  `;
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
  $("#coreName").textContent = r.name.toUpperCase();

  $("#count").textContent = `${number} / ${total}`;
  $("#degree").textContent = `${number} / 27`;

  updateBackground();


  /* TAGS */

  $("#tags").innerHTML = r.tags
    .map(tag => `<span>${tag}</span>`)
    .join("");


  /* ORBIT */

  $("#planets").innerHTML = "";

  const n = Math.min(raags.length, 9);

  for (let i = 0; i < n; i++) {

    const angle =
      (Math.PI * 2 * i / n) - Math.PI / 2;

    const x = Math.cos(angle) * 245;
    const y = Math.sin(angle) * 125;

    const planet = document.createElement("button");

    planet.className =
      "planet " + (i === index ? "active" : "");

    planet.style.setProperty("--x", `${x}px`);
    planet.style.setProperty("--y", `${y}px`);

    planet.innerHTML = `
      <img src="${art(i)}" alt="${raags[i].name}">
      <label>${raags[i].name.toUpperCase()}</label>
    `;

    planet.addEventListener("click", () => {
      selectRaag(i);
    });

    $("#planets").appendChild(planet);
  }


  /* RAIL */

  $("#rail").innerHTML = raags
    .map((r, i) => `
      <button
        class="rail-item ${i === index ? "active" : ""}"
        data-i="${i}"
      >
        <img src="${art(i)}" alt="${r.name}">
        <span>${r.name}</span>
      </button>
    `)
    .join("");


  document
    .querySelectorAll(".rail-item")
    .forEach(button => {

      button.addEventListener("click", () => {
        selectRaag(Number(button.dataset.i));
      });

    });


  /* ARCHIVE */

  $("#archive").innerHTML = raags
    .map((r, i) => `
      <button
        class="${i === index ? "active" : ""}"
        data-i="${i}"
      >
        ${pad(i + 1)} — ${r.name}
      </button>
    `)
    .join("");


  document
    .querySelectorAll("#archive button")
    .forEach(button => {

      button.addEventListener("click", () => {

        selectRaag(Number(button.dataset.i));
        closeDrawer();

      });

    });
}


/* =========================================================
   SELECT RAAG
   ========================================================= */

function selectRaag(newIndex) {

  index =
    (newIndex + raags.length) % raags.length;

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


$("#menu").addEventListener("click", () => {

  $("#drawer").classList.add("open");
  $("#veil").classList.add("open");

});


$("#close").addEventListener("click", closeDrawer);
$("#veil").addEventListener("click", closeDrawer);


/* =========================================================
   NEXT / PREVIOUS
   ========================================================= */

$("#next").addEventListener("click", () => {

  selectRaag(index + 1);

});


$("#prev").addEventListener("click", () => {

  selectRaag(index - 1);

});


/* =========================================================
   PLAY / PAUSE
   ========================================================= */

$("#play").addEventListener("click", () => {

  if (!playerReady || !player) {
    return;
  }

  const state = player.getPlayerState();

  if (
    state === YT.PlayerState.PLAYING
  ) {

    player.pauseVideo();

  } else {

    player.playVideo();

  }

});


/* =========================================================
   SEEK
   ========================================================= */

$("#seek").addEventListener("input", event => {

  if (!playerReady || !player) {
    return;
  }

  const duration = player.getDuration();

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

});


/* =========================================================
   YOUTUBE PLAYER
   ========================================================= */

window.onYouTubeIframeAPIReady = function () {

  player = new YT.Player("youtube-player", {

    width: "100%",
    height: "1",

    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
      listType: "playlist",
      list: YOUTUBE_PLAYLIST_ID
    },

    events: {

      onReady: event => {

        playerReady = true;

        $("#state").textContent =
          "READY TO LISTEN";

        $("#duration").textContent =
          formatTime(event.target.getDuration());

      },


      onStateChange: event => {

        if (
          event.data ===
          YT.PlayerState.PLAYING
        ) {

          $("#play").textContent = "Ⅱ";

          $("#state").textContent =
            "NOW LISTENING";

          $(".player").classList.add("playing");

          startProgress();

        }


        else if (
          event.data ===
          YT.PlayerState.PAUSED
        ) {

          $("#play").textContent = "▶";

          $("#state").textContent =
            "PAUSED";

          $(".player").classList.remove("playing");

          stopProgress();

        }


        else if (
          event.data ===
          YT.PlayerState.ENDED
        ) {

          $("#play").textContent = "▶";

          $("#state").textContent =
            "READY TO LISTEN";

          $(".player").classList.remove("playing");

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

  });

};


/* =========================================================
   PROGRESS
   ========================================================= */

function startProgress() {

  stopProgress();

  progressTimer = setInterval(() => {

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

    $("#seek").value = percentage;
    $("#fill").style.width =
      `${percentage}%`;

    $("#current").textContent =
      formatTime(current);

    $("#total").textContent =
      formatTime(duration);

    $("#duration").textContent =
      formatTime(duration);

  }, 250);

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
