/* =========================================================
   RAAGLYY — SOUND BEYOND SILENCE
   27 RAAG ARCHIVE
   YouTube + Spotify
   ========================================================= */


/* ---------------------------------------------------------
   PLAYLISTS
   --------------------------------------------------------- */

const YOUTUBE_PLAYLIST_ID = "PLJRipbfj__b0";

const SPOTIFY_PLAYLIST_ID = "1uCwKa8NKlV4fywgZ2gnMp";


/* ---------------------------------------------------------
   27 RAAGS
   Exact YouTube playlist order
   --------------------------------------------------------- */

const raags = [

  {
    name: "Raag Bhimpalasi",
    hindi: "राग भिम्पलासी",
    time: "Afternoon",
    description:
      "A deeply expressive afternoon raag associated with longing, tenderness, emotional depth, and introspection.",
    tags: ["Afternoon", "Longing", "Introspection"]
  },

  {
    name: "Raag Darbari Kanada",
    hindi: "राग दरबारी कानड़ा",
    time: "Late Night",
    description:
      "For heart disease, problems related to children, honour, getting a position in life, and relationships with father and government",
    tags: ["Late Night", "Gambhir", "Depth"]
  },

  {
    name: "Raag Shuddh Sarang",
    hindi: "राग शुद्ध सारंग",
    time: "Afternoon",
    description:
      "A radiant afternoon raag carrying brightness, serenity, warmth, and a graceful sense of emotional balance.",
    tags: ["Afternoon", "Serene", "Luminous"]
  },

  {
    name: "Raag Komal Rishabh Asavari",
    hindi: "राग कोमल ऋषभ आसावरी",
    time: "Morning",
    description:
      "A serious and contemplative raag with a plaintive character, associated with introspection, emotional depth, and detachment.",
    tags: ["Morning", "Contemplative", "Depth"]
  },

  {
    name: "Raag Yaman",
    hindi: "राग यमन",
    time: "Evening",
    description:
      "For mental peace, relations with mother, happiness, calmness, family atmosphere, emotional trauma, and pain",
    tags: ["Evening", "Peace", "Calm"]
  },

  {
    name: "Raag Hamsadhwani",
    hindi: "राग हंसध्वनि",
    time: "Evening",
    description:
      "For mental peace, relations with mother, happiness, calmness, family atmosphere, emotional trauma, and pain",
    tags: ["Evening", "Peace", "Happiness"]
  },

  {
    name: "Raag Bhairavi",
    hindi: "राग भैरवी",
    time: "Morning",
    description:
      "For insomnia, property-related issues, blood-related problems, violence, and accidents",
    tags: ["Morning", "Devotional", "Emotional"]
  },

  {
    name: "Raag Asavari",
    hindi: "राग आसावरी",
    time: "Late Morning",
    description:
      "For property-related issues, blood-related problems, violence, and accidents",
    tags: ["Morning", "Serious", "Earthy"]
  },

  {
    name: "Raag Desi Todi",
    hindi: "राग देसी तोड़ी",
    time: "Morning",
    description:
      "A powerful morning raag marked by introspection, emotional intensity, and a deeply contemplative character.",
    tags: ["Morning", "Intense", "Contemplative"]
  },

  {
    name: "Raag Kalyan",
    hindi: "राग कल्याण",
    time: "Evening",
    description:
      "For education-related troubles, fights with siblings, thyroid and hormonal imbalance, communication, business, and friends",
    tags: ["Evening", "Learning", "Communication"]
  },

  {
    name: "Raag Poorvi",
    hindi: "राग पूर्वी",
    time: "Evening",
    description:
      "For education-related troubles, fights with siblings, thyroid and hormonal imbalances (like PCOD and cramps), communication, business, and friends",
    tags: ["Evening", "Dhyana", "Communication"]
  },

  {
    name: "Raag Nat Bhairav",
    hindi: "राग नट भैरव",
    time: "Morning",
    description:
      "For relationship issues and money-related troubles",
    tags: ["Morning", "Relationships", "Finance"]
  },

  {
    name: "Raag Vrindavani Sarang",
    hindi: "राग वृन्दावनी सारंग",
    time: "Afternoon",
    description:
      "For relationship issues and money-related (financial) troubles",
    tags: ["Afternoon", "Relationships", "Finance"]
  },

  {
    name: "Raag Shuddh Kalyan",
    hindi: "राग शुद्ध कल्याण",
    time: "Evening",
    description:
      "A serene and luminous raag associated with purity, balance, devotion, and a calm expansive emotional atmosphere.",
    tags: ["Evening", "Pure", "Serene"]
  },

  {
    name: "Raag Jaunpuri",
    hindi: "राग जौनपुरी",
    time: "Late Morning",
    description:
      "For profession-related issues, long-term diseases, and chronic troubles",
    tags: ["Morning", "Profession", "Long Term"]
  },

  {
    name: "Raag Kirvani",
    hindi: "राग किरवानी",
    time: "Evening",
    description:
      "For profession-related issues, long-term diseases, and chronic troubles",
    tags: ["Evening", "Profession", "Long Term"]
  },

  {
    name: "Raag Neelambari",
    hindi: "राग नीलाम्बरी",
    time: "Late Night",
    description:
      "For profession-related issues, long-term diseases, and chronic troubles",
    tags: ["Night", "Profession", "Long Term"]
  },

  {
    name: "Raag Malkauns",
    hindi: "राग मालकौंस",
    time: "Late Night",
    description:
      "For asthma",
    tags: ["Night", "Gambhir", "Meditative"]
  },

  {
    name: "Raag Bhairav",
    hindi: "राग भैरव",
    time: "Dawn",
    description:
      "For headache",
    tags: ["Dawn", "Gambhir", "Bhakti"]
  },

  {
    name: "Raag Lalit",
    hindi: "राग ललित",
    time: "Pre-Dawn",
    description:
      "For asthma",
    tags: ["Pre-Dawn", "Contemplative", "Subtle"]
  },

  {
    name: "Raag Bhoop",
    hindi: "राग भूप",
    time: "Evening",
    description:
      "For blood pressure",
    tags: ["Evening", "Simple", "Serene"]
  },

  {
    name: "Raag Madhuvanti",
    hindi: "राग मधुवन्ती",
    time: "Afternoon",
    description:
      "For depression and mental stress",
    tags: ["Afternoon", "Longing", "Emotional"]
  },

  {
    name: "Raag Pilu",
    hindi: "राग पीलू",
    time: "Afternoon",
    description:
      "For anemia",
    tags: ["Afternoon", "Lyrical", "Expressive"]
  },

  {
    name: "Raag Shivaranjani",
    hindi: "राग शिवरंजनी",
    time: "Night",
    description:
      "For memory loss",
    tags: ["Night", "Emotional", "Introspective"]
  },

  {
    name: "Raag Jaijaiwanti",
    hindi: "राग जयजयवन्ती",
    time: "Evening",
    description:
      "For weakness",
    tags: ["Evening", "Tender", "Expressive"]
  },

  {
    name: "Raag Khamaj",
    hindi: "राग खमाज",
    time: "Night",
    description:
      "For acidity",
    tags: ["Night", "Romantic", "Lyrical"]
  },

  {
    name: "Raag Tanpura",
    hindi: "राग तानपुरा",
    time: "All Time",
    description:
      "For problems related to children, honour, getting a position in life, and relationships with father and government",
    tags: ["Tanpura", "Resonance", "Foundation"]
  }

];


/* ---------------------------------------------------------
   HELPERS
   --------------------------------------------------------- */

const $ = selector => document.querySelector(selector);

const pad = number =>
  String(number).padStart(2, "0");

let index = 0;

let playing = false;

let youtubePlayer = null;

let youtubeReady = false;

let spotifyVisible = false;

let playerTimer = null;


/* ---------------------------------------------------------
   ARTWORK
   --------------------------------------------------------- */

function art(i) {

  const hue = (i * 41) % 360;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400">

      <defs>

        <radialGradient id="g">

          <stop stop-color="hsl(${hue} 38% 45%)"/>

          <stop
            offset="1"
            stop-color="#09070b"
          />

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


/* ---------------------------------------------------------
   RENDER MAIN INFORMATION
   --------------------------------------------------------- */

function renderInfo() {

  const r = raags[index];

  $("#num").textContent = pad(index + 1);

  $("#prahar").textContent =
    r.time.toUpperCase();

  $("#title").textContent =
    r.name;

  $("#hindi").textContent =
    r.hindi;

  $("#desc").textContent =
    r.description;

  $("#time").textContent =
    r.time.toUpperCase();

  $("#coreName").textContent =
    r.name;

  $("#count").textContent =
    `${pad(index + 1)} / 27`;

  $("#degree").textContent =
    `${pad(index + 1)} / 27`;

  $("#bg").style.background =
    `
      radial-gradient(
        circle at 68% 48%,
        hsl(${(index * 41) % 360} 30% 28% / .28),
        transparent 30%
      ),
      #08070a
    `;


  $("#tags").innerHTML =
    r.tags
      .map(tag => `<span>${tag}</span>`)
      .join("");


  $("#fill").style.width = "0%";

  $("#seek").value = 0;

  $("#current").textContent = "00:00";

  $("#total").textContent = "00:00";

}


/* ---------------------------------------------------------
   ORBIT
   --------------------------------------------------------- */

function renderPlanets() {

  const planets = $("#planets");

  planets.innerHTML = "";

  const total = raags.length;

  /*
    27 planets distributed around the ellipse.
  */

  raags.forEach((raag, i) => {

    const angle =
      (Math.PI * 2 * i / total) - Math.PI / 2;

    const x =
      Math.cos(angle) * 245;

    const y =
      Math.sin(angle) * 125;

    const planet =
      document.createElement("button");

    planet.className =
      "planet" +
      (i === index ? " active" : "");

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
        src="${art(i)}"
        alt="${raag.name}"
      >
      <label>
        ${raag.name.toUpperCase()}
      </label>
    `;

    planet.addEventListener(
      "click",
      () => selectRaag(i)
    );

    planets.appendChild(planet);

  });

}


/* ---------------------------------------------------------
   BOTTOM RAIL
   --------------------------------------------------------- */

function renderRail() {

  $("#rail").innerHTML =
    raags.map((raag, i) => `
      <button
        class="rail-item ${i === index ? "active" : ""}"
        data-i="${i}"
      >

        <img
          src="${art(i)}"
          alt="${raag.name}"
        >

        <span>
          ${raag.name}
        </span>

      </button>
    `).join("");


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

}


/* ---------------------------------------------------------
   ARCHIVE DRAWER
   --------------------------------------------------------- */

function renderArchive() {

  $("#archive").innerHTML =
    raags.map((raag, i) => `
      <button
        class="${i === index ? "active" : ""}"
        data-i="${i}"
      >
        ${pad(i + 1)} — ${raag.name}
      </button>
    `).join("");


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


/* ---------------------------------------------------------
   SELECT RAAG
   --------------------------------------------------------- */

function selectRaag(newIndex) {

  if (
    newIndex < 0 ||
    newIndex >= raags.length
  ) {
    return;
  }

  index = newIndex;

  renderInfo();

  renderPlanets();

  renderRail();

  renderArchive();

  /*
    If YouTube player is ready,
    jump to the exact playlist position.
  */

  if (youtubeReady && youtubePlayer) {

    try {

      youtubePlayer.playVideoAt(index);

      playing = true;

      updatePlayUI(true);

    } catch (error) {

      console.warn(
        "YouTube playlist selection failed:",
        error
      );

    }

  }

}


/* ---------------------------------------------------------
   YOUTUBE API
   --------------------------------------------------------- */

function onYouTubeIframeAPIReady() {

  youtubePlayer =
    new YT.Player(
      "youtubePlayer",
      {

        width: "1",
        height: "1",

        playerVars: {

          autoplay: 0,

          controls: 0,

          disablekb: 1,

          fs: 0,

          playsinline: 1,

          rel: 0,

          modestbranding: 1,

          listType: "playlist",

          list: YOUTUBE_PLAYLIST_ID

        },

        events: {

          onReady:
            onYouTubeReady,

          onStateChange:
            onYouTubeStateChange,

          onError:
            onYouTubeError

        }

      }
    );

}


function onYouTubeReady(event) {

  youtubeReady = true;

  /*
    Make sure the playlist is loaded.
  */

  try {

    event.target.cuePlaylist({
      listType: "playlist",
      list: YOUTUBE_PLAYLIST_ID,
      index: index,
      startSeconds: 0
    });

  } catch (error) {

    console.warn(
      "Playlist cue failed:",
      error
    );

  }

}


/* ---------------------------------------------------------
   YOUTUBE STATE
   --------------------------------------------------------- */

function onYouTubeStateChange(event) {

  if (!window.YT) {
    return;
  }


  if (
    event.data === YT.PlayerState.PLAYING
  ) {

    playing = true;

    updatePlayUI(true);

    startProgressTimer();

  }


  if (
    event.data === YT.PlayerState.PAUSED
  ) {

    playing = false;

    updatePlayUI(false);

    stopProgressTimer();

  }


  if (
    event.data === YT.PlayerState.ENDED
  ) {

    playing = false;

    updatePlayUI(false);

    stopProgressTimer();

  }

}


/* ---------------------------------------------------------
   YOUTUBE ERROR
   --------------------------------------------------------- */

function onYouTubeError(event) {

  console.warn(
    "YouTube player error:",
    event.data
  );

  $("#state").textContent =
    "TRACK UNAVAILABLE";

  updatePlayUI(false);

}


/* ---------------------------------------------------------
   PLAY / PAUSE
   --------------------------------------------------------- */

function toggleYouTubePlayback() {

  if (!youtubeReady || !youtubePlayer) {

    $("#state").textContent =
      "YOUTUBE LOADING...";

    return;

  }


  if (playing) {

    youtubePlayer.pauseVideo();

  } else {

    /*
      Always use the currently selected
      playlist index.
    */

    youtubePlayer.playVideoAt(index);

  }

}


/* ---------------------------------------------------------
   PLAY UI
   --------------------------------------------------------- */

function updatePlayUI(isPlaying) {

  playing = isPlaying;

  $("#play").textContent =
    isPlaying ? "Ⅱ" : "▶";

  $("#state").textContent =
    isPlaying
      ? "NOW LISTENING"
      : "READY TO LISTEN";

  $(".player")
    .classList.toggle(
      "playing",
      isPlaying
    );

}


/* ---------------------------------------------------------
   PROGRESS
   --------------------------------------------------------- */

function startProgressTimer() {

  stopProgressTimer();

  playerTimer =
    setInterval(
      updateProgress,
      500
    );

}


function stopProgressTimer() {

  if (playerTimer) {

    clearInterval(playerTimer);

    playerTimer = null;

  }

}


function updateProgress() {

  if (
    !youtubeReady ||
    !youtubePlayer ||
    typeof youtubePlayer.getCurrentTime !== "function"
  ) {
    return;
  }


  const current =
    youtubePlayer.getCurrentTime();

  const duration =
    youtubePlayer.getDuration();


  if (!duration || duration <= 0) {
    return;
  }


  const percentage =
    Math.min(
      100,
      (current / duration) * 100
    );


  $("#fill").style.width =
    `${percentage}%`;

  $("#seek").value =
    percentage;

  $("#current").textContent =
    formatTime(current);

  $("#total").textContent =
    formatTime(duration);

  $("#duration").textContent =
    "YOUTUBE";

}


/* ---------------------------------------------------------
   SEEK
   --------------------------------------------------------- */

$("#seek").addEventListener(
  "input",
  event => {

    const value =
      Number(event.target.value);

    $("#fill").style.width =
      `${value}%`;

    if (
      youtubeReady &&
      youtubePlayer
    ) {

      const duration =
        youtubePlayer.getDuration();

      if (duration) {

        youtubePlayer.seekTo(
          duration * value / 100,
          true
        );

      }

    }

  }
);


/* ---------------------------------------------------------
   TIME
   --------------------------------------------------------- */

function formatTime(seconds) {

  if (
    !Number.isFinite(seconds) ||
    seconds < 0
  ) {
    return "00:00";
  }

  const mins =
    Math.floor(seconds / 60);

  const secs =
    Math.floor(seconds % 60);

  return (
    String(mins).padStart(2, "0") +
    ":" +
    String(secs).padStart(2, "0")
  );

}


/* ---------------------------------------------------------
   NEXT / PREVIOUS
   --------------------------------------------------------- */

function nextRaag() {

  selectRaag(
    (index + 1) % raags.length
  );

}


function previousRaag() {

  selectRaag(
    (index - 1 + raags.length) %
    raags.length
  );

}


/* ---------------------------------------------------------
   DRAWER
   --------------------------------------------------------- */

function closeDrawer() {

  $("#drawer")
    .classList.remove("open");

  $("#veil")
    .classList.remove("open");

}


function openDrawer() {

  $("#drawer")
    .classList.add("open");

  $("#veil")
    .classList.add("open");

}


$("#menu")
  .addEventListener(
    "click",
    openDrawer
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


/* ---------------------------------------------------------
   CONTROLS
   --------------------------------------------------------- */

$("#play")
  .addEventListener(
    "click",
    toggleYouTubePlayback
  );


$("#next")
  .addEventListener(
    "click",
    nextRaag
  );


$("#prev")
  .addEventListener(
    "click",
    previousRaag
  );


/* ---------------------------------------------------------
   SOURCE SWITCH
   --------------------------------------------------------- */

function showYouTube() {

  spotifyVisible = false;

  $("#youtubePlayerWrap")
    .classList.remove("hidden");

  $("#spotifyWrap")
    .classList.remove("visible");

  $("#youtubeSource")
    .classList.add("active");

  $("#spotifySource")
    .classList.remove("active");

}


function showSpotify() {

  spotifyVisible = true;

  $("#spotifyWrap")
    .classList.add("visible");

  $("#youtubePlayerWrap")
    .classList.add("hidden");

  $("#spotifySource")
    .classList.add("active");

  $("#youtubeSource")
    .classList.remove("active");

}


$("#youtubeSource")
  .addEventListener(
    "click",
    showYouTube
  );


$("#spotifySource")
  .addEventListener(
    "click",
    showSpotify
  );


$("#drawerYoutube")
  .addEventListener(
    "click",
    () => {

      showYouTube();

      closeDrawer();

    }
  );


$("#drawerSpotify")
  .addEventListener(
    "click",
    () => {

      showSpotify();

      closeDrawer();

    }
  );


/* ---------------------------------------------------------
   KEYBOARD
   --------------------------------------------------------- */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "ArrowRight"
    ) {

      nextRaag();

    }

    if (
      event.key === "ArrowLeft"
    ) {

      previousRaag();

    }

    if (
      event.code === "Space" &&
      event.target.tagName !== "INPUT"
    ) {

      event.preventDefault();

      toggleYouTubePlayback();

    }

    if (
      event.key === "Escape"
    ) {

      closeDrawer();

    }

  }
);


/* ---------------------------------------------------------
   INITIAL RENDER
   --------------------------------------------------------- */

renderInfo();

renderPlanets();

renderRail();

renderArchive();

showYouTube();
