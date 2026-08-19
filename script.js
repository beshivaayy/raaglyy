/* =========================================================
   RAAGLY — SOUND BEYOND SILENCE
   =========================================================
   Core:
   - 27 Raag data
   - YouTube playlist player
   - Archive drawer
   - Bottom selector rail
   - Background crossfade
   - Orbital photo gallery
   - Drag / pointer orbit interaction
   - Keyboard controls
   - Progress + seeking
   - Responsive behaviour
   ========================================================= */

"use strict";

/* =========================================================
   CORE SETTINGS
   ========================================================= */

const PLAYLIST_ID = "PLJRipbfj__b0";
const TOTAL_TRACKS = 27;
const DEFAULT_VOLUME = 80;

const ORBIT_COUNT = 27;
const ORBIT_STEP = (Math.PI * 2) / ORBIT_COUNT;

let player = null;
let youtubeReady = false;
let playlistReady = false;

let currentIndex = 0;
let isPlaying = false;
let isMuted = false;
let previousVolume = DEFAULT_VOLUME;

let progressTimer = null;
let backgroundLayer = 1;

let orbitRotation = 0;
let orbitVelocity = 0;
let orbitDragging = false;
let orbitStartX = 0;
let orbitStartRotation = 0;

let autoOrbit = true;
let lastOrbitTime = performance.now();

/* =========================================================
   RAAG DATA
   ========================================================= */

const raagData = [
    {
        name: "Raag Bhimpalasi",
        hindi: "राग भीमपलासी",
        prahar: "Afternoon",
        desc: "A contemplative afternoon raag traditionally associated with introspection, longing and emotional depth.",
        associations: ["Mind", "Introspection", "Emotional balance"],
        category: "Mind",
        accent: "#A855F7",
        bg: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Darbari Kanada",
        hindi: "राग दरबारी कानड़ा",
        prahar: "Late Night",
        desc: "A grave and majestic late-night raag known for depth, seriousness and a powerful meditative character.",
        associations: ["Depth", "Seriousness", "Contemplation"],
        category: "Mind",
        accent: "#6366F1",
        bg: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Shuddh Sarang",
        hindi: "राग शुद्ध सारंग",
        prahar: "Afternoon",
        desc: "A bright afternoon raag carrying a spacious, serene and luminous character.",
        associations: ["Peace", "Family harmony", "Serenity"],
        category: "Harmony",
        accent: "#06B6D4",
        bg: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Komal Rishabh Asavari",
        hindi: "राग कोमल ऋषभ आसावरी",
        prahar: "Morning",
        desc: "A morning-oriented melodic atmosphere with a gentle and introspective emotional quality.",
        associations: ["Calmness", "Introspection", "Emotional balance"],
        category: "Mind",
        accent: "#8B5CF6",
        bg: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Yaman",
        hindi: "राग यमन",
        prahar: "Evening",
        desc: "One of Hindustani music's foundational evening raags, associated with expansiveness, elegance and devotion.",
        associations: ["Harmony", "Clarity", "Devotion"],
        category: "Harmony",
        accent: "#EC4899",
        bg: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Hamsadhwani",
        hindi: "राग हंसध्वनि",
        prahar: "Evening",
        desc: "A bright pentatonic raag with an uplifting and auspicious musical character.",
        associations: ["Positivity", "Clarity", "Auspiciousness"],
        category: "Mind",
        accent: "#F59E0B",
        bg: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Bhairavi",
        hindi: "राग भैरवी",
        prahar: "Morning / Closing",
        desc: "Traditionally used as a concluding raag, carrying a devotional, reflective and emotionally complete character.",
        associations: ["Devotion", "Closure", "Reflection"],
        category: "Mind",
        accent: "#F43F5E",
        bg: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Asavari",
        hindi: "राग आसावरी",
        prahar: "Late Morning",
        desc: "A late-morning raag with a serious yet expressive melodic personality.",
        associations: ["Reflection", "Grounding", "Expression"],
        category: "Health",
        accent: "#14B8A6",
        bg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Desi Todi",
        hindi: "राग देसी तोड़ी",
        prahar: "Late Morning",
        desc: "A nuanced morning-family melody carrying introspective and sophisticated tonal movement.",
        associations: ["Introspection", "Focus", "Depth"],
        category: "Mind",
        accent: "#10B981",
        bg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Kalyan",
        hindi: "राग कल्याण",
        prahar: "Evening",
        desc: "A luminous evening atmosphere associated with refinement, openness and melodic clarity.",
        associations: ["Learning", "Communication", "Harmony"],
        category: "Harmony",
        accent: "#38BDF8",
        bg: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Poorvi",
        hindi: "राग पूर्वी",
        prahar: "Evening",
        desc: "A powerful evening raag with a serious, contemplative and distinctive tonal character.",
        associations: ["Focus", "Ambition", "Contemplation"],
        category: "Career",
        accent: "#7C3AED",
        bg: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Nat Bhairav",
        hindi: "राग नट भैरव",
        prahar: "Morning",
        desc: "A morning raag combining brightness with the gravity of the Bhairav tradition.",
        associations: ["Discipline", "Relationships", "Stability"],
        category: "Career",
        accent: "#F97316",
        bg: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Vrindavani Sarang",
        hindi: "राग वृन्दावनी सारंग",
        prahar: "Afternoon",
        desc: "A graceful afternoon raag carrying a devotional and pastoral atmosphere.",
        associations: ["Love", "Devotion", "Harmony"],
        category: "Harmony",
        accent: "#22C55E",
        bg: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Shuddh Kalyan",
        hindi: "राग शुद्ध कल्याण",
        prahar: "Evening",
        desc: "A serene evening raag with a refined and peaceful melodic character.",
        associations: ["Peace", "Clarity", "Gentle positivity"],
        category: "Mind",
        accent: "#60A5FA",
        bg: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Jaunpuri",
        hindi: "राग जौनपुरी",
        prahar: "Late Morning",
        desc: "A late-morning raag marked by introspective phrases and expressive emotional shading.",
        associations: ["Reflection", "Patience", "Resilience"],
        category: "Health",
        accent: "#84CC16",
        bg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Kirwani",
        hindi: "राग किरवानी",
        prahar: "Evening",
        desc: "A deeply expressive evening raag with a strong emotional and contemplative identity.",
        associations: ["Emotion", "Reflection", "Depth"],
        category: "Mind",
        accent: "#A855F7",
        bg: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Neelambari",
        hindi: "राग नीलाम्बरी",
        prahar: "Night",
        desc: "A nocturnal melodic atmosphere associated with softness, stillness and repose.",
        associations: ["Stillness", "Rest", "Night"],
        category: "Mind",
        accent: "#4338CA",
        bg: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Malkauns",
        hindi: "राग मालकौंस",
        prahar: "Late Night",
        desc: "A profound pentatonic night raag with an intense, inward and meditative character.",
        associations: ["Meditation", "Inner strength", "Depth"],
        category: "Mind",
        accent: "#7E22CE",
        bg: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Bhairav",
        hindi: "राग भैरव",
        prahar: "Early Morning",
        desc: "A foundational morning raag characterised by gravity, devotion and spiritual austerity.",
        associations: ["Discipline", "Devotion", "Grounding"],
        category: "Health",
        accent: "#EA580C",
        bg: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Lalit",
        hindi: "राग ललित",
        prahar: "Early Dawn",
        desc: "A distinctive dawn raag associated with ambiguity, subtle tension and meditative beauty.",
        associations: ["Dawn", "Meditation", "Subtlety"],
        category: "Mind",
        accent: "#C026D3",
        bg: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Bhoop",
        hindi: "राग भूप",
        prahar: "Evening",
        desc: "A clear pentatonic evening raag known for simplicity, openness and devotional brightness.",
        associations: ["Clarity", "Balance", "Harmony"],
        category: "Harmony",
        accent: "#0EA5E9",
        bg: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Madhuwanti",
        hindi: "राग मधुवंती",
        prahar: "Afternoon / Evening",
        desc: "An emotionally nuanced raag with a romantic, introspective and lyrical quality.",
        associations: ["Emotion", "Longing", "Reflection"],
        category: "Mind",
        accent: "#DB2777",
        bg: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Pilu",
        hindi: "राग पीलू",
        prahar: "Flexible",
        desc: "A versatile light-classical raag capable of expressing a broad spectrum of emotional colours.",
        associations: ["Flexibility", "Emotion", "Expression"],
        category: "Harmony",
        accent: "#F59E0B",
        bg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Shivaranjani",
        hindi: "राग शिवरंजनी",
        prahar: "Evening / Night",
        desc: "A highly recognisable pentatonic melody often associated with longing, pathos and introspection.",
        associations: ["Memory", "Longing", "Reflection"],
        category: "Mind",
        accent: "#6366F1",
        bg: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Jaijaiwanti",
        hindi: "राग जयजयवंती",
        prahar: "Evening",
        desc: "An intricate evening raag blending contrasting emotional colours with refined melodic movement.",
        associations: ["Expression", "Strength", "Emotional balance"],
        category: "Mind",
        accent: "#E879F9",
        bg: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Raag Khamaj",
        hindi: "राग खमाज",
        prahar: "Late Evening",
        desc: "A graceful late-evening raag with a warm, romantic and expressive character.",
        associations: ["Romance", "Expression", "Warmth"],
        category: "Harmony",
        accent: "#F43F5E",
        bg: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=85"
    },

    {
        name: "Tanpura",
        hindi: "तानपुरा",
        prahar: "Continuous Drone",
        desc: "The tanpura provides the continuous tonal foundation over which Indian classical music unfolds.",
        associations: ["Drone", "Shruti", "Foundation"],
        category: "Health",
        accent: "#D4AF37",
        bg: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2200&q=85"
    }
];

/* =========================================================
   DOM
   ========================================================= */

const $ = (selector) => document.querySelector(selector);

const els = {
    body: document.body,

    bg1: $("#bg-1"),
    bg2: $("#bg-2"),

    sideArchive: $("#side-archive"),
    drawerBackdrop: $("#drawer-backdrop"),
    openNav: $("#open-nav"),
    closeNav: $("#close-nav"),
    archiveList: $("#archive-list"),

    statusDot: $("#status-dot"),
    statusText: $("#status-text"),

    raagNumber: $("#raag-number"),
    raagPrahar: $("#raag-prahar"),
    raagName: $("#raag-name"),
    raagHindi: $("#raag-hindi"),
    raagDesc: $("#raag-desc"),
    raagAssociations: $("#raag-associations"),

    playBtn: $("#play-btn"),
    prevBtn: $("#prev-btn"),
    nextBtn: $("#next-btn"),

    progressBar: $("#progress-bar"),
    progressFill: $("#progress-fill"),
    currentTime: $("#time-cur"),
    duration: $("#time-dur"),

    playerLabel: $("#player-label"),
    playerMessage: $("#player-message"),

    selectorRail: $("#selector-rail"),

    youtube: $("#youtube-player"),

    orreryPlane: $("#orrery-plane"),
    orreryPlanets: $("#orrery-planets"),
    orreryIndex: $("#orrery-index"),
    orreryDegree: $("#orrery-degree"),

    lensBase: $("#orrery-lens-base"),
    lensIris: $("#orrery-lens-iris")
};

/* =========================================================
   HELPERS
   ========================================================= */

function pad(value, size = 2) {
    return String(value).padStart(size, "0");
}

function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
        return "0:00";
    }

    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${mins}:${String(secs).padStart(2, "0")}`;
}

function escapeHTML(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/* =========================================================
   ARCHIVE
   ========================================================= */

function renderArchive() {
    if (!els.archiveList) return;

    els.archiveList.innerHTML = "";

    raagData.forEach((raag, index) => {
        const link = document.createElement("button");

        link.type = "button";
        link.className = "archive-item";
        link.dataset.index = index;

        link.innerHTML = `
            <span class="archive-number">${pad(index + 1)}</span>
            <span class="archive-name">${escapeHTML(raag.name)}</span>
            <span class="archive-time">${escapeHTML(raag.prahar)}</span>
        `;

        link.addEventListener("click", () => {
            loadRaag(index);
            closeArchive();
        });

        els.archiveList.appendChild(link);
    });
}

/* =========================================================
   BOTTOM RAIL
   ========================================================= */

function renderRail() {
    if (!els.selectorRail) return;

    els.selectorRail.innerHTML = "";

    raagData.forEach((raag, index) => {
        const item = document.createElement("button");

        item.type = "button";
        item.className = "rail-item";
        item.dataset.index = index;
        item.setAttribute("role", "listitem");
        item.setAttribute(
            "aria-label",
            `${pad(index + 1)} ${raag.name}`
        );

        item.innerHTML = `
            <span class="rail-number">${pad(index + 1)}</span>
            <span class="rail-name">${escapeHTML(raag.name)}</span>
        `;

        item.addEventListener("click", () => {
            loadRaag(index);
        });

        els.selectorRail.appendChild(item);
    });
}

function updateRail(index) {
    document.querySelectorAll(".rail-item").forEach((item, i) => {
        const active = i === index;

        item.classList.toggle("active", active);

        if (active) {
            item.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
        }
    });
}

/* =========================================================
   ARCHIVE DRAWER
   ========================================================= */

function openArchive() {
    if (!els.sideArchive) return;

    els.sideArchive.classList.add("open");

    if (els.drawerBackdrop) {
        els.drawerBackdrop.classList.add("active");
    }

    els.sideArchive.setAttribute("aria-hidden", "false");
}

function closeArchive() {
    if (!els.sideArchive) return;

    els.sideArchive.classList.remove("open");

    if (els.drawerBackdrop) {
        els.drawerBackdrop.classList.remove("active");
    }

    els.sideArchive.setAttribute("aria-hidden", "true");
}

els.openNav?.addEventListener("click", openArchive);
els.closeNav?.addEventListener("click", closeArchive);
els.drawerBackdrop?.addEventListener("click", closeArchive);

/* =========================================================
   BACKGROUND
   ========================================================= */

function updateBackground(imageUrl) {
    if (!imageUrl) return;

    const active = backgroundLayer === 1
        ? els.bg1
        : els.bg2;

    const next = backgroundLayer === 1
        ? els.bg2
        : els.bg1;

    if (!active || !next) return;

    next.style.backgroundImage =
        `url("${imageUrl}")`;

    next.classList.add("active");
    active.classList.remove("active");

    backgroundLayer =
        backgroundLayer === 1 ? 2 : 1;
}

/* =========================================================
   THEME
   ========================================================= */

function updateTheme(raag) {
    if (!raag) return;

    document.documentElement.style.setProperty(
        "--accent",
        raag.accent || "#A855F7"
    );

    updateBackground(raag.bg);

    if (els.lensBase) {
        els.lensBase.style.background =
            `radial-gradient(
                circle at 35% 35%,
                ${raag.accent},
                transparent 68%
            )`;
    }

    if (els.lensIris) {
        els.lensIris.style.borderColor =
            raag.accent || "#A855F7";
    }
}

/* =========================================================
   RAAG CONTENT
   ========================================================= */

function updateRaagContent(index) {
    const raag = raagData[index];

    if (!raag) return;

    if (els.raagNumber) {
        els.raagNumber.textContent = pad(index + 1);
    }

    if (els.raagPrahar) {
        els.raagPrahar.textContent =
            raag.prahar || "—";
    }

    if (els.raagName) {
        els.raagName.textContent =
            raag.name;
    }

    if (els.raagHindi) {
        els.raagHindi.textContent =
            raag.hindi || "";
    }

    if (els.raagDesc) {
        els.raagDesc.textContent =
            raag.desc || "";
    }

    if (els.raagAssociations) {
        els.raagAssociations.innerHTML = "";

        (raag.associations || []).forEach(item => {
            const li = document.createElement("li");

            li.textContent = item;

            els.raagAssociations.appendChild(li);
        });
    }

    updateTheme(raag);
    updateRail(index);
    updateOrbitSelection(index);
}

/* =========================================================
   LOAD RAAG
   ========================================================= */

function loadRaag(index, play = false) {
    if (
        !Number.isInteger(index) ||
        index < 0 ||
        index >= raagData.length
    ) {
        return;
    }

    currentIndex = index;

    updateRaagContent(index);

    if (els.playerMessage) {
        els.playerMessage.textContent =
            `RAAG ${pad(index + 1)} — ${raagData[index].name}`;
    }

    if (els.orreryIndex) {
        els.orreryIndex.textContent =
            `${pad(index + 1)} / ${TOTAL_TRACKS}`;
    }

    if (player && playlistReady) {
        try {
            player.playVideoAt(index);

            if (!play) {
                player.pauseVideo();
            }
        } catch (error) {
            console.warn(
                "Unable to switch YouTube track:",
                error
            );
        }
    }
}

/* =========================================================
   PLAY / PAUSE
   ========================================================= */

function updatePlayButton() {
    if (!els.playBtn) return;

    els.playBtn.textContent =
        isPlaying ? "Ⅱ" : "▶";

    els.playBtn.setAttribute(
        "aria-label",
        isPlaying ? "Pause" : "Play"
    );
}

function togglePlay() {
    if (!player || !youtubeReady) {
        return;
    }

    try {
        if (isPlaying) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
    } catch (error) {
        console.warn(
            "Playback toggle failed:",
            error
        );
    }
}

els.playBtn?.addEventListener(
    "click",
    togglePlay
);

/* =========================================================
   NEXT / PREVIOUS
   ========================================================= */

function nextRaag() {
    const next =
        (currentIndex + 1) % TOTAL_TRACKS;

    loadRaag(next, true);
}

function prevRaag() {
    const previous =
        (currentIndex - 1 + TOTAL_TRACKS) %
        TOTAL_TRACKS;

    loadRaag(previous, true);
}

els.nextBtn?.addEventListener(
    "click",
    nextRaag
);

els.prevBtn?.addEventListener(
    "click",
    prevRaag
);

/* =========================================================
   PROGRESS
   ========================================================= */

function updateProgress() {
    if (!player || !youtubeReady) {
        return;
    }

    let current = 0;
    let duration = 0;

    try {
        current =
            Number(player.getCurrentTime()) || 0;

        duration =
            Number(player.getDuration()) || 0;
    } catch {
        return;
    }

    if (els.currentTime) {
        els.currentTime.textContent =
            formatTime(current);
    }

    if (els.duration) {
        els.duration.textContent =
            formatTime(duration);
    }

    if (
        els.progressFill &&
        duration > 0
    ) {
        const percentage =
            Math.max(
                0,
                Math.min(
                    100,
                    current / duration * 100
                )
            );

        els.progressFill.style.width =
            `${percentage}%`;
    }
}

function seek(event) {
    if (!player || !youtubeReady) {
        return;
    }

    const duration =
        Number(player.getDuration()) || 0;

    if (!duration) return;

    const rect =
        els.progressBar?.getBoundingClientRect();

    if (!rect || !rect.width) return;

    const percentage =
        Math.max(
            0,
            Math.min(
                1,
                (event.clientX - rect.left) /
                rect.width
            )
        );

    try {
        player.seekTo(
            duration * percentage,
            true
        );
    } catch (error) {
        console.warn(
            "Seek failed:",
            error
        );
    }
}

els.progressBar?.addEventListener(
    "click",
    seek
);

function startProgress() {
    stopProgress();

    progressTimer =
        setInterval(
            updateProgress,
            500
        );
}

function stopProgress() {
    if (progressTimer) {
        clearInterval(progressTimer);
        progressTimer = null;
    }
}

/* =========================================================
   YOUTUBE
   ========================================================= */

function createYouTubePlayer() {
    if (
        player ||
        !window.YT ||
        !window.YT.Player
    ) {
        return;
    }

    player = new YT.Player(
        "youtube-player",
        {
            width: "1",
            height: "1",

            playerVars: {
                listType: "playlist",
                list: PLAYLIST_ID,
                autoplay: 0,
                controls: 0,
                rel: 0,
                modestbranding: 1,
                playsinline: 1,
                enablejsapi: 1
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

function onYouTubeReady() {
    youtubeReady = true;

    if (els.statusText) {
        els.statusText.textContent =
            "READY TO LISTEN";
    }

    if (els.statusDot) {
        els.statusDot.classList.add(
            "ready"
        );
    }

    try {
        player.setVolume(
            DEFAULT_VOLUME
        );
    } catch {}

    waitForPlaylist();
}

function waitForPlaylist(attempt = 0) {
    if (!player) return;

    if (attempt > 40) {
        if (els.playerMessage) {
            els.playerMessage.textContent =
                "Playlist could not be loaded.";
        }

        return;
    }

    let playlist = [];

    try {
        playlist =
            player.getPlaylist() || [];
    } catch {}

    if (
        Array.isArray(playlist) &&
        playlist.length
    ) {
        playlistReady = true;

        loadRaag(currentIndex);

        return;
    }

    setTimeout(
        () => waitForPlaylist(attempt + 1),
        500
    );
}

function onYouTubeStateChange(event) {
    if (!window.YT) return;

    switch (event.data) {
        case YT.PlayerState.PLAYING:

            isPlaying = true;

            if (els.playerLabel) {
                els.playerLabel.textContent =
                    "PLAYING";
            }

            document
                .querySelector(".main-stage")
                ?.classList.add("playing");

            updatePlayButton();
            startProgress();

            break;

        case YT.PlayerState.PAUSED:

            isPlaying = false;

            if (els.playerLabel) {
                els.playerLabel.textContent =
                    "PAUSED";
            }

            document
                .querySelector(".main-stage")
                ?.classList.remove("playing");

            updatePlayButton();
            stopProgress();

            break;

        case YT.PlayerState.ENDED:

            isPlaying = false;

            document
                .querySelector(".main-stage")
                ?.classList.remove("playing");

            updatePlayButton();
            stopProgress();

            nextRaag();

            break;

        case YT.PlayerState.BUFFERING:

            if (els.playerLabel) {
                els.playerLabel.textContent =
                    "BUFFERING";
            }

            break;

        case YT.PlayerState.CUED:

            if (els.playerLabel) {
                els.playerLabel.textContent =
                    "READY";
            }

            break;
    }

    syncCurrentTrack();
}

function onYouTubeError(error) {
    console.warn(
        "YouTube player error:",
        error
    );

    if (els.playerMessage) {
        els.playerMessage.textContent =
            "Unable to load this recording.";
    }

    if (els.playerLabel) {
        els.playerLabel.textContent =
            "ERROR";
    }
}

function syncCurrentTrack() {
    if (!player || !playlistReady) {
        return;
    }

    try {
        const index =
            Number(player.getPlaylistIndex());

        if (
            Number.isInteger(index) &&
            index >= 0 &&
            index < TOTAL_TRACKS &&
            index !== currentIndex
        ) {
            currentIndex = index;
            updateRaagContent(index);
        }
    } catch {}
}

/* =========================================================
   ORBITAL ARCHIVE
   =========================================================
   Internal naming intentionally avoids displaying the word
   "Orrery" anywhere in the interface.
   ========================================================= */

function createOrbit() {
    if (!els.orreryPlanets) return;

    els.orreryPlanets.innerHTML = "";

    raagData.forEach((raag, index) => {
        const planet =
            document.createElement("button");

        planet.type = "button";

        planet.className =
            "orrery-planet";

        planet.dataset.index = index;

        planet.setAttribute(
            "aria-label",
            `${pad(index + 1)} ${raag.name}`
        );

        planet.innerHTML = `
            <span
                class="planet-image"
                style="background-image:url('${raag.bg}')"
            ></span>

            <span class="planet-number">
                ${pad(index + 1)}
            </span>

            <span class="planet-name">
                ${escapeHTML(raag.name)}
            </span>
        `;

        planet.addEventListener(
            "click",
            event => {
                event.stopPropagation();
                loadRaag(index);
            }
        );

        els.orreryPlanets.appendChild(
            planet
        );
    });

    updateOrbit();
}

function updateOrbitSelection(index) {
    document
        .querySelectorAll(".orrery-planet")
        .forEach((planet, i) => {
            planet.classList.toggle(
                "active",
                i === index
            );
        });
}

function updateOrbit() {
    if (!els.orreryPlanets) {
        return;
    }

    const planets =
        els.orreryPlanets.children;

    const count = planets.length;

    for (let i = 0; i < count; i++) {
        const planet = planets[i];

        const angle =
            i * ORBIT_STEP +
            orbitRotation;

        /*
         * Elliptical orbital positioning.
         * CSS handles the visual depth while JS
         * determines the actual orbital coordinates.
         */

        const x =
            Math.sin(angle) * 43;

        const y =
            Math.cos(angle) * 23;

        const depth =
            (Math.cos(angle) + 1) / 2;

        const scale =
            0.72 + depth * 0.48;

        const opacity =
            0.34 + depth * 0.66;

        const zIndex =
            Math.round(depth * 100);

        planet.style.setProperty(
            "--orbit-x",
            `${x}%`
        );

        planet.style.setProperty(
            "--orbit-y",
            `${y}%`
        );

        planet.style.setProperty(
            "--orbit-scale",
            scale
        );

        planet.style.opacity =
            opacity;

        planet.style.zIndex =
            zIndex;

        planet.classList.toggle(
            "active",
            i === currentIndex
        );
    }

    if (els.orreryDegree) {
        let degrees =
            ((orbitRotation * 180 / Math.PI) % 360 + 360) % 360;

        els.orreryDegree.textContent =
            `${String(Math.round(degrees)).padStart(3, "0")}°`;
    }
}

/* =========================================================
   ORBIT DRAG
   ========================================================= */

function orbitPointerDown(event) {
    if (!els.orreryPlane) return;

    orbitDragging = true;

    orbitStartX =
        event.clientX;

    orbitStartRotation =
        orbitRotation;

    orbitVelocity = 0;

    els.orreryPlane.classList.add(
        "dragging"
    );

    try {
        els.orreryPlane.setPointerCapture(
            event.pointerId
        );
    } catch {}
}

function orbitPointerMove(event) {
    if (!orbitDragging) return;

    const delta =
        event.clientX - orbitStartX;

    const previous =
        orbitRotation;

    orbitRotation =
        orbitStartRotation +
        delta * 0.008;

    orbitVelocity =
        orbitRotation - previous;

    updateOrbit();
}

function orbitPointerUp(event) {
    orbitDragging = false;

    els.orreryPlane?.classList.remove(
        "dragging"
    );

    try {
        els.orreryPlane?.releasePointerCapture(
            event.pointerId
        );
    } catch {}
}

els.orreryPlane?.addEventListener(
    "pointerdown",
    orbitPointerDown
);

els.orreryPlane?.addEventListener(
    "pointermove",
    orbitPointerMove
);

els.orreryPlane?.addEventListener(
    "pointerup",
    orbitPointerUp
);

els.orreryPlane?.addEventListener(
    "pointercancel",
    orbitPointerUp
);

/* =========================================================
   ORBIT MOMENTUM
   ========================================================= */

function animateOrbit(time) {
    const dt =
        Math.min(
            (time - lastOrbitTime) / 1000,
            0.05
        );

    lastOrbitTime = time;

    if (!orbitDragging) {

        if (
            Math.abs(orbitVelocity) > 0.0001
        ) {
            orbitRotation +=
                orbitVelocity;

            orbitVelocity *=
                Math.pow(0.001, dt);
        }

        else if (autoOrbit) {
            orbitRotation +=
                dt * 0.045;
        }

        updateOrbit();
    }

    requestAnimationFrame(
        animateOrbit
    );
}

/* =========================================================
   KNOWLEDGE LINKS
   ========================================================= */

document
    .querySelectorAll("[data-knowledge]")
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                const type =
                    link.dataset.knowledge;

                const messages = {
                    vedic:
                        "Vedic Sound Theory — Nada, Shruti, Swara and the relationship between tonal structure and consciousness.",

                    geometry:
                        "Sacred Geometry — proportion, symmetry, cycles and visual representations of musical structure.",

                    nada:
                        "Nada Yoga — the contemplative tradition of inner sound and attentive listening."
                };

                if (els.playerMessage) {
                    els.playerMessage.textContent =
                        messages[type] ||
                        "Knowledge archive.";
                }
            }
        );
    });

/* =========================================================
   KEYBOARD CONTROLS
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        const tag =
            event.target?.tagName;

        if (
            tag === "INPUT" ||
            tag === "TEXTAREA" ||
            tag === "SELECT"
        ) {
            return;
        }

        switch (event.key) {

            case " ":
                event.preventDefault();
                togglePlay();
                break;

            case "ArrowRight":
                event.preventDefault();
                nextRaag();
                break;

            case "ArrowLeft":
                event.preventDefault();
                prevRaag();
                break;

            case "Escape":
                closeArchive();
                break;

            case "ArrowUp":
                event.preventDefault();

                if (player) {
                    try {
                        const volume =
                            Math.min(
                                100,
                                player.getVolume() + 5
                            );

                        player.setVolume(
                            volume
                        );
                    } catch {}
                }

                break;

            case "ArrowDown":
                event.preventDefault();

                if (player) {
                    try {
                        const volume =
                            Math.max(
                                0,
                                player.getVolume() - 5
                            );

                        player.setVolume(
                            volume
                        );
                    } catch {}
                }

                break;
        }
    }
);

/* =========================================================
   TOUCH / MOBILE
   ========================================================= */

let touchStartX = 0;

els.orreryPlane?.addEventListener(
    "touchstart",
    event => {

        if (!event.touches.length) {
            return;
        }

        touchStartX =
            event.touches[0].clientX;
    },
    { passive: true }
);

els.orreryPlane?.addEventListener(
    "touchend",
    event => {

        if (!event.changedTouches.length) {
            return;
        }

        const endX =
            event.changedTouches[0].clientX;

        const delta =
            endX - touchStartX;

        if (Math.abs(delta) < 40) {
            return;
        }

        if (delta < 0) {
            orbitRotation += 0.35;
        } else {
            orbitRotation -= 0.35;
        }

        updateOrbit();
    },
    { passive: true }
);

/* =========================================================
   RESPONSIVE / RESIZE
   ========================================================= */

let resizeTimer = null;

window.addEventListener(
    "resize",
    () => {

        clearTimeout(resizeTimer);

        resizeTimer =
            setTimeout(
                () => updateOrbit(),
                100
            );
    },
    { passive: true }
);

/* =========================================================
   INITIALIZATION
   ========================================================= */

function initializeRaagly() {

    renderArchive();

    renderRail();

    createOrbit();

    loadRaag(0);

    updatePlayButton();

    if (els.statusText) {
        els.statusText.textContent =
            "INITIALIZING";
    }

    if (
        window.YT &&
        window.YT.Player
    ) {
        createYouTubePlayer();
    }

    requestAnimationFrame(
        animateOrbit
    );
}

/* =========================================================
   YOUTUBE API CALLBACK
   ========================================================= */

window.onYouTubeIframeAPIReady =
    function () {
        createYouTubePlayer();
    };

/* =========================================================
   START
   ========================================================= */

if (
    document.readyState === "loading"
) {
    document.addEventListener(
        "DOMContentLoaded",
        initializeRaagly,
        { once: true }
    );
} else {
    initializeRaagly();
}
