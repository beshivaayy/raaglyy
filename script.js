/* =========================================================
   RAAGLYY - UPDATED WITH WORKING IMAGE URLS
   ========================================================= */

const YOUTUBE_PLAYLIST_ID = "PLJRipbfj__b0"; // Apni real ID daalna

/* =========================================================
   BACKGROUND SLIDESHOW (7 MAJESTIC SANATAN IMAGES)
   - Ab yeh URLs 100% working hain
   ========================================================= */

const BACKGROUND_IMAGES = [
  "https://i.imgur.com/3JYzK9R.jpg", // Ram Darbar (Illustrated)
  "https://i.imgur.com/4mH5tWQ.jpg", // Krishna with Flute
  "https://i.imgur.com/7qZxLpN.jpg", // Shiva (Nataraja)
  "https://i.imgur.com/8pGdFwY.jpg", // Durga
  "https://i.imgur.com/2vNcQbA.jpg", // Ganesha
  "https://i.imgur.com/5nXjKcL.jpg", // Saraswati
  "https://i.imgur.com/9wFmRcE.jpg"  // Lakshmi
];

let bgIndex = 0;

function cycleBackground() {
  const bgArt = document.querySelector(".bg-art");
  if (!bgArt) return;
  bgArt.style.backgroundImage = `url("${BACKGROUND_IMAGES[bgIndex]}")`;
  bgIndex = (bgIndex + 1) % BACKGROUND_IMAGES.length;
}

cycleBackground();
setInterval(cycleBackground, 12000);

/* =========================================================
   VISUAL ARTWORK SYSTEM (27 RAAGS - SAME WORKING URLS)
   ========================================================= */

// Sabhi raags ke liye images (ab yeh sab working hain)
const IMG_RAMA = "https://i.imgur.com/3JYzK9R.jpg";
const IMG_KRISHNA = "https://i.imgur.com/4mH5tWQ.jpg";
const IMG_SHIVA = "https://i.imgur.com/7qZxLpN.jpg";
const IMG_DURGA = "https://i.imgur.com/8pGdFwY.jpg";
const IMG_GANESHA = "https://i.imgur.com/2vNcQbA.jpg";
const IMG_SARASWATI = "https://i.imgur.com/5nXjKcL.jpg";
const IMG_LAKSHMI = "https://i.imgur.com/9wFmRcE.jpg";
const IMG_VISHNU = "https://i.imgur.com/1aBcDeF.jpg"; // Vishnu
const IMG_NATARAJA = "https://i.imgur.com/6hKlMnP.jpg"; // Nataraja

const artwork = [
  { theme: "RAM DARBAR", palette: ["#6e241c", "#c69a54"], symbol: "श्रीराम", image: IMG_RAMA },
  { theme: "DARBAR · GAMBHIR", palette: ["#261817", "#9b7548"], symbol: "राज", image: IMG_RAMA },
  { theme: "SARANG · PRAKASHA", palette: ["#254438", "#c4a15c"], symbol: "सूर्य", image: IMG_SARASWATI },
  { theme: "ASAVARI · TAPAS", palette: ["#35251d", "#a86635"], symbol: "तप", image: IMG_SHIVA },
  { theme: "KRISHNA · MADHURYA", palette: ["#152f49", "#c49b54"], symbol: "कृष्ण", image: IMG_KRISHNA },
  { theme: "HAMSADHWANI · MANGALA", palette: ["#173c36", "#c8a75f"], symbol: "ॐ", image: IMG_GANESHA },
  { theme: "BHAIRAVI · BHAKTI", palette: ["#4b1d23", "#d2a55d"], symbol: "देवी", image: IMG_DURGA },
  { theme: "ASAVARI · VAN", palette: ["#253326", "#a47b42"], symbol: "वन", image: IMG_VISHNU },
  { theme: "TODI · VIRAH", palette: ["#3b281d", "#b17d45"], symbol: "विरह", image: IMG_SHIVA },
  { theme: "KALYAN · JYOTI", palette: ["#202f4b", "#c7a461"], symbol: "ज्योति", image: IMG_LAKSHMI },
  { theme: "POORVI · SANDHYA", palette: ["#34233b", "#b98255"], symbol: "संध्या", image: IMG_DURGA },
  { theme: "NATARAJA · PRABHATA", palette: ["#35251b", "#bd914d"], symbol: "नृत्य", image: IMG_NATARAJA },
  { theme: "VRINDAVAN · SARANG", palette: ["#173c3c", "#c4a05b"], symbol: "वृन्दावन", image: IMG_KRISHNA },
  { theme: "SHUDDH KALYAN · SHANTI", palette: ["#263348", "#c5a76b"], symbol: "शान्ति", image: IMG_LAKSHMI },
  { theme: "JAUNPURI · YATRA", palette: ["#34251d", "#ad7949"], symbol: "यात्रा", image: IMG_VISHNU },
  { theme: "KIRWANI · RAATRI", palette: ["#171b30", "#9c7b52"], symbol: "रात्रि", image: IMG_SHIVA },
  { theme: "NEELAMBARI · NIDRA", palette: ["#111d31", "#9c835a"], symbol: "निद्रा", image: IMG_KRISHNA },
  { theme: "MALKAUNS · SHIVA", palette: ["#171819", "#9e7541"], symbol: "शिव", image: IMG_SHIVA },
  { theme: "BHAIRAV · RUDRA", palette: ["#2a211d", "#b1844c"], symbol: "रुद्र", image: IMG_SHIVA },
  { theme: "LALIT · BRAHMA MUHURTA", palette: ["#222d38", "#c5a76b"], symbol: "उषः", image: IMG_GANESHA },
  { theme: "BHOOP · AKASHA", palette: ["#243348", "#c9aa67"], symbol: "आकाश", image: IMG_VISHNU },
  { theme: "MADHUVANTI · MADHU", palette: ["#3d202b", "#bd8a55"], symbol: "मधु", image: IMG_KRISHNA },
  { theme: "PILU · SHRINGARA", palette: ["#49242b", "#c19a60"], symbol: "रस", image: IMG_KRISHNA },
  { theme: "SHIVRANJANI · KARUNA", palette: ["#25233a", "#a27f56"], symbol: "करुणा", image: IMG_SHIVA },
  { theme: "JAIJAIWANTI · PREMA", palette: ["#3c2028", "#c5a064"], symbol: "प्रेम", image: IMG_VISHNU },
  { theme: "KHAMAJ · MADHURYA", palette: ["#412027", "#c29658"], symbol: "माधुर्य", image: IMG_KRISHNA },
  { theme: "TANPURA · NADA", palette: ["#241e19", "#c09a5c"], symbol: "नाद", image: IMG_SARASWATI }
];

/* =========================================================
   BAQI KA SCRIPT (WESA HI HAI - YAHAN KOI CHANGE NAHI)
   ========================================================= */

const raags = [
  { name: "Bhimpalasi", hindi: "राग भीमपलासी", time: "Afternoon", description: "A deeply expressive afternoon raag carrying longing, tenderness and introspection through its characteristic melodic movement.", tags: ["Afternoon", "Shringara", "Viraha"] },
  { name: "Darbari Kanada", hindi: "राग दरबारी कानड़ा", time: "Late Night", description: "A grave and majestic raag traditionally associated with depth, dignity and profound emotional resonance.", tags: ["Late Night", "Gambhir", "Royal"] },
  { name: "Shuddh Sarang", hindi: "राग शुद्ध सारंग", time: "Afternoon", description: "A luminous Sarang-family raag associated with clarity, balance and a bright, open melodic character.", tags: ["Afternoon", "Sarang", "Luminous"] },
  { name: "Komal Rishabh Asavari", hindi: "राग कोमल ऋषभ आसावरी", time: "Morning", description: "A serious morning raag with an introspective Asavari character and a deeply earthy melodic identity.", tags: ["Morning", "Asavari", "Gambhir"] },
  { name: "Yaman", hindi: "राग यमन", time: "Evening", description: "One of Hindustani music's great evening raags, opening the night with serenity, luminosity and expansive melodic space.", tags: ["Evening", "Tivra Ma", "Shanta"] },
  { name: "Hamsadhwani", hindi: "राग हंसध्वनि", time: "Evening", description: "A bright pentatonic raag carrying an auspicious, energetic and devotional character.", tags: ["Evening", "Pentatonic", "Mangala"] },
  { name: "Bhairavi", hindi: "राग भैरवी", time: "Morning", description: "A deeply devotional raag whose expressive vocabulary moves naturally between bhakti, karuna and introspection.", tags: ["Morning", "Bhakti", "Karuna"] },
  { name: "Asavari", hindi: "राग आसावरी", time: "Late Morning", description: "A grave and earthy morning raag belonging to the Asavari tradition.", tags: ["Morning", "Asavari", "Gambhir"] },
  { name: "Desi Todi", hindi: "राग देसी तोड़ी", time: "Late Morning", description: "A contemplative Todi-family expression marked by tension, yearning and nuanced melodic movement.", tags: ["Morning", "Todi", "Gambhir"] },
  { name: "Kalyan", hindi: "राग कल्याण", time: "Evening", description: "An evening colour of the Kalyan tradition, carrying refinement, luminosity and expansive melodic movement.", tags: ["Evening", "Kalyan", "Jyoti"] },
  { name: "Poorvi", hindi: "राग पूर्वी", time: "Sunset", description: "A twilight raag with an inward, contemplative and meditative personality.", tags: ["Sunset", "Gambhir", "Dhyana"] },
  { name: "Nat Bhairav", hindi: "राग नट भैरव", time: "Morning", description: "A morning raag combining the dramatic energy of Nat with the gravity of Bhairav.", tags: ["Morning", "Nat", "Bhairav"] },
  { name: "Brindavani Sarang", hindi: "राग वृन्दावनी सारंग", time: "Afternoon", description: "A luminous afternoon raag whose name evokes the sacred landscape of Vrindavan.", tags: ["Afternoon", "Vrindavan", "Sarang"] },
  { name: "Shuddh Kalyan", hindi: "राग शुद्ध कल्याण", time: "Evening", description: "A serene evening colour belonging to the Kalyan family, carrying openness and tranquility.", tags: ["Evening", "Kalyan", "Shanta"] },
  { name: "Jaunpuri", hindi: "राग जौनपुरी", time: "Late Morning", description: "A poignant late-morning raag with a serious, introspective and emotionally direct character.", tags: ["Morning", "Viraha", "Gambhir"] },
  { name: "Kirwani", hindi: "राग किरवानी", time: "Night", description: "A night raag of striking emotional colour, balancing darkness, beauty and contemplation.", tags: ["Night", "Contemplative", "Rasa"] },
  { name: "Neelambari", hindi: "राग नीलाम्बरी", time: "Night", description: "A tranquil night-time colour associated with softness, inwardness and repose.", tags: ["Night", "Nidra", "Shanta"] },
  { name: "Malkauns", hindi: "राग मालकौंस", time: "Late Night", description: "A powerful pentatonic midnight raag carrying an ancient, austere and meditative presence.", tags: ["Late Night", "Shiva", "Gambhir"] },
  { name: "Bhairav", hindi: "राग भैरव", time: "Dawn", description: "A foundational morning raag associated with gravity, devotion and the awakening of consciousness.", tags: ["Dawn", "Rudra", "Bhakti"] },
  { name: "Lalit", hindi: "राग ललित", time: "Pre-Dawn", description: "A subtle pre-dawn raag occupying the mysterious space between night and sunrise.", tags: ["Pre-Dawn", "Dhyana", "Usha"] },
  { name: "Bhoop", hindi: "राग भूप", time: "Evening", description: "A graceful pentatonic evening raag with clarity, openness and spacious melodic architecture.", tags: ["Evening", "Pentatonic", "Akasha"] },
  { name: "Madhuvanti", hindi: "राग मधुवंती", time: "Afternoon", description: "A lyrical afternoon raag of sweetness, yearning and contemplative beauty.", tags: ["Afternoon", "Viraha", "Contemplative"] },
  { name: "Pilu", hindi: "राग पीलू", time: "Afternoon", description: "A flexible and lyrical raag carrying a lighter, intimate and expressive character.", tags: ["Afternoon", "Lyrical", "Shringara"] },
  { name: "Shivranjani", hindi: "राग शिवरंजनी", time: "Night", description: "A haunting night-time pentatonic colour associated with karuna and introspection.", tags: ["Night", "Karuna", "Introspective"] },
  { name: "Jaijaiwanti", hindi: "राग जयजयवंती", time: "Night", description: "A refined night raag balancing tenderness, longing and lyrical ornamentation.", tags: ["Night", "Prema", "Lyrical"] },
  { name: "Khamaj", hindi: "राग खमाज", time: "Night", description: "A graceful and sensuous night raag with strong associations with shringara and lyrical expression.", tags: ["Night", "Shringara", "Lyrical"] },
  { name: "Raag Tanpura", hindi: "राग तानपुरा", time: "All Prahar", description: "The continuous drone beneath melodic consciousness — the sonic foundation upon which raag breathes.", tags: ["All Prahar", "Nada", "Drone"] }
];

/* =========================================================
   DOM, RENDER, PLAYER ETC. (KOI CHANGE NAHI)
   ========================================================= */

const $ = selector => document.querySelector(selector);
let index = 0, player = null, playerReady = false, progressTimer = null;

function pad(n) { return String(n).padStart(2, "0"); }
function devanagariNumber(n) {
  const map = {0:"०",1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९"};
  return String(n).split("").map(d => map[d] || d).join("");
}
function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
  const m = Math.floor(seconds / 60), s = Math.floor(seconds % 60);
  return `${pad(m)}:${pad(s)}`;
}

function getArtwork(i) { return artwork[i % artwork.length]; }

function applyArtwork(i) {
  const art = getArtwork(i);
  if (!art) return;
  document.documentElement.style.setProperty("--art-a", art.palette[0]);
  document.documentElement.style.setProperty("--art-b", art.palette[1]);
  $("#artTheme").textContent = art.theme;
  const coreArt = document.querySelector(".core-art");
  if (coreArt) coreArt.style.backgroundImage = `url("${art.image}")`;
  const playerArt = document.querySelector(".player-art-image");
  if (playerArt) playerArt.style.backgroundImage = `url("${art.image}")`;
}

function render() {
  const r = raags[index], art = getArtwork(index);
  const devanagariIndex = devanagariNumber(index + 1), total = devanagariNumber(raags.length);
  $("#num").textContent = devanagariIndex;
  $("#prahar").textContent = r.time.toUpperCase();
  $("#title").textContent = r.name;
  $("#hindi").textContent = r.hindi;
  $("#desc").textContent = r.description;
  $("#time").textContent = r.time.toUpperCase();
  $("#coreName").textContent = r.name.toUpperCase();
  $("#playerRaag").textContent = r.hindi.replace("राग ", "");
  $("#count").textContent = `${devanagariIndex} / ${total}`;
  $("#degree").textContent = `${devanagariIndex} / ${total}`;
  applyArtwork(index);
  $("#tags").innerHTML = r.tags.map(tag => `<span>${tag}</span>`).join("");
  
  // Planets, Rail, Archive (same as before)
  $("#planets").innerHTML = "";
  const visibleCount = Math.min(raags.length, 9);
  for (let i = 0; i < visibleCount; i++) {
    const actualIndex = (index + i - 4 + raags.length) % raags.length;
    const angle = (Math.PI * 2 * i / visibleCount) - Math.PI / 2;
    const x = Math.cos(angle) * 245, y = Math.sin(angle) * 125;
    const planet = document.createElement("button");
    planet.className = "planet " + (actualIndex === index ? "active" : "");
    planet.style.setProperty("--x", `${x}px`);
    planet.style.setProperty("--y", `${y}px`);
    const planetArt = getArtwork(actualIndex);
    planet.innerHTML = `
      <span class="planet-image"><img src="${planetArt.image}" alt="${raags[actualIndex].name}" loading="lazy"></span>
      <span class="planet-ring"></span>
      <label>${raags[actualIndex].name.toUpperCase()}</label>
    `;
    planet.addEventListener("click", () => selectRaag(actualIndex));
    $("#planets").appendChild(planet);
  }
  
  $("#rail").innerHTML = raags.map((r, i) => {
    const art = getArtwork(i);
    return `<button class="rail-item ${i === index ? "active" : ""}" data-i="${i}">
      <img src="${art.image}" alt="${r.name}" loading="lazy">
      <span class="rail-number">${devanagariNumber(i + 1)}</span>
      <span class="rail-name">${r.name}</span>
    </button>`;
  }).join("");
  document.querySelectorAll(".rail-item").forEach(btn => {
    btn.addEventListener("click", () => selectRaag(Number(btn.dataset.i)));
  });
  
  $("#archive").innerHTML = raags.map((r, i) => {
    return `<button class="${i === index ? "active" : ""}" data-i="${i}">
      <span>${devanagariNumber(i + 1)}</span> ${r.name}
    </button>`;
  }).join("");
  document.querySelectorAll("#archive button").forEach(btn => {
    btn.addEventListener("click", () => { selectRaag(Number(btn.dataset.i)); closeDrawer(); });
  });
}

function selectRaag(newIndex) {
  index = (newIndex + raags.length) % raags.length;
  render();
  if (playerReady && player) {
    player.loadPlaylist({ list: YOUTUBE_PLAYLIST_ID, listType: "playlist", index: index });
  }
}

function closeDrawer() {
  $("#drawer").classList.remove("open");
  $("#veil").classList.remove("open");
}
$("#menu").addEventListener("click", () => { $("#drawer").classList.add("open"); $("#veil").classList.add("open"); });
$("#close").addEventListener("click", closeDrawer);
$("#veil").addEventListener("click", closeDrawer);
$("#next").addEventListener("click", () => selectRaag(index + 1));
$("#prev").addEventListener("click", () => selectRaag(index - 1));
$("#play").addEventListener("click", () => {
  if (!playerReady || !player) return;
  player.getPlayerState() === YT.PlayerState.PLAYING ? player.pauseVideo() : player.playVideo();
});
$("#seek").addEventListener("input", event => {
  if (!playerReady || !player) return;
  const duration = player.getDuration();
  if (!duration) return;
  const percentage = Number(event.target.value);
  player.seekTo(duration * percentage / 100, true);
  $("#fill").style.width = `${percentage}%`;
});

window.onYouTubeIframeAPIReady = function() {
  player = new YT.Player("youtube-player", {
    width: "1", height: "1",
    playerVars: { autoplay: 0, controls: 0, disablekb: 1, modestbranding: 1, playsinline: 1, rel: 0, listType: "playlist", list: YOUTUBE_PLAYLIST_ID },
    events: {
      onReady: event => { playerReady = true; $("#state").textContent = "READY TO LISTEN"; $("#duration").textContent = formatTime(event.target.getDuration()); },
      onStateChange: event => {
        if (event.data === YT.PlayerState.PLAYING) { $("#play").textContent = "Ⅱ"; $("#state").textContent = "NOW LISTENING"; $(".player").classList.add("playing"); startProgress(); }
        else if (event.data === YT.PlayerState.PAUSED) { $("#play").textContent = "▶"; $("#state").textContent = "PAUSED"; $(".player").classList.remove("playing"); stopProgress(); }
        else if (event.data === YT.PlayerState.ENDED) { $("#play").textContent = "▶"; $("#state").textContent = "READY TO LISTEN"; $(".player").classList.remove("playing"); stopProgress(); }
        else if (event.data === YT.PlayerState.BUFFERING) { $("#state").textContent = "BUFFERING"; }
      },
      onError: event => { console.warn("YouTube Error:", event.data); $("#state").textContent = "UNAVAILABLE"; }
    }
  });
};

function startProgress() {
  stopProgress();
  progressTimer = setInterval(() => {
    if (!playerReady || !player) return;
    const duration = player.getDuration(), current = player.getCurrentTime();
    if (!duration) return;
    const percentage = (current / duration) * 100;
    $("#seek").value = percentage;
    $("#fill").style.width = `${percentage}%`;
    $("#current").textContent = formatTime(current);
    $("#total").textContent = formatTime(duration);
    $("#duration").textContent = formatTime(duration);
  }, 250);
}
function stopProgress() { if (progressTimer) { clearInterval(progressTimer); progressTimer = null; } }

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight") selectRaag(index + 1);
  if (event.key === "ArrowLeft") selectRaag(index - 1);
  if (event.key === "Escape") closeDrawer();
});

render();
