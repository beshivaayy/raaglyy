/**
 * ============================================================
 * RAAGLY — Sound Beyond Silence
 * Production Single-Page Engine
 * ============================================================
 */

"use strict";


/* ============================================================
   CONFIGURATION
============================================================ */

const PLAYLIST_ID = "PLJRipbfj__b0";

const YOUTUBE_ORIGIN = window.location.origin;


/* ============================================================
   RAAG DATA
============================================================ */

const raagData = [
    {
        name: "Asavari",
        dev: "असावरी",
        prahar: "Late Morning",
        desc: "A raag of renunciation and melancholy, traditionally associated with the late morning hours when the sun begins its ascent.",
        assoc: [
            "Property-related issues",
            "Blood-related problems",
            "Violence",
            "Accidents"
        ],
        complexity: 12,
        accent: "#b87333",
        bg: "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Bhairav",
        dev: "भैरव",
        prahar: "Early Morning",
        desc: "The king of morning raags, evoking dawn, contemplative stillness and spiritual discipline.",
        assoc: ["Headache"],
        complexity: 16,
        accent: "#c5a059",
        bg: "https://images.unsplash.com/photo-1590050752117-23a9d7fc2140?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Bhairavi",
        dev: "भैरवी",
        prahar: "Morning / Closure",
        desc: "A universally loved raag, often used to conclude concerts with a feeling of peaceful surrender.",
        assoc: [
            "Insomnia",
            "Property-related issues",
            "Blood-related problems",
            "Violence",
            "Accidents"
        ],
        complexity: 24,
        accent: "#752735",
        bg: "https://images.unsplash.com/photo-1518548419970-58e3b4079ca2?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Bhoop",
        dev: "भूप",
        prahar: "Evening",
        desc: "A bright and satisfying raag that evokes a sense of calm accomplishment.",
        assoc: ["Blood pressure"],
        complexity: 8,
        accent: "#c5a059",
        bg: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Brindabani Sarang",
        dev: "वृन्दावनी सारंग",
        prahar: "Afternoon",
        desc: "A raag associated with the thirst of the afternoon and the desire for relief.",
        assoc: [
            "Relationship issues",
            "Money-related / financial troubles"
        ],
        complexity: 10,
        accent: "#e6be8a",
        bg: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Darbari",
        dev: "दरबारी",
        prahar: "Late Night",
        desc: "A grave and majestic raag traditionally associated with the royal court tradition.",
        assoc: [
            "Heart disease",
            "Problems related to children",
            "Honour",
            "Getting a position in life",
            "Relationships with father",
            "Government-related matters"
        ],
        complexity: 20,
        accent: "#1e272e",
        bg: "https://images.unsplash.com/photo-1505933332464-44565780a87a?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Gandharva",
        dev: "गन्धर्व",
        prahar: "Evening",
        desc: "A celestial melody representing the music of the divine beings.",
        assoc: [
            "Education-related troubles",
            "Fights with siblings",
            "Thyroid and hormonal imbalance",
            "Communication",
            "Business",
            "Friends"
        ],
        complexity: 14,
        accent: "#d2dae2",
        bg: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Hansdhawani",
        dev: "हंसध्वनि",
        prahar: "Evening",
        desc: "The sound of the swan — an auspicious and bright melody of the evening.",
        assoc: [
            "Mental peace",
            "Relations with mother",
            "Happiness",
            "Calmness",
            "Family atmosphere",
            "Emotional trauma",
            "Pain"
        ],
        complexity: 9,
        accent: "#fff200",
        bg: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Jaunpuri",
        dev: "जौनपुरी",
        prahar: "Late Morning",
        desc: "A brilliant raag of the morning, blending sadness with a glimmer of hope.",
        assoc: [
            "Profession-related issues",
            "Long-term diseases",
            "Chronic troubles"
        ],
        complexity: 13,
        accent: "#3c6382",
        bg: "https://images.unsplash.com/photo-1500382017468-9049fee790ce?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Jay Jaywanti",
        dev: "जयजयवन्ती",
        prahar: "Night",
        desc: "A majestic melody creating an atmosphere of deep romance and devotion.",
        assoc: ["Weakness"],
        complexity: 18,
        accent: "#ff9f1c",
        bg: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Kalyan",
        dev: "कल्याण",
        prahar: "Evening",
        desc: "A grand evening raag representing the transition from day to night.",
        assoc: [
            "Education-related troubles",
            "Fights with siblings",
            "Thyroid and hormonal imbalance",
            "Communication",
            "Business",
            "Friends"
        ],
        complexity: 7,
        accent: "#e67e22",
        bg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Khamaj",
        dev: "खमाज",
        prahar: "Late Evening",
        desc: "A raag of light, flirtatious beauty and romantic charm.",
        assoc: ["Acidity"],
        complexity: 9,
        accent: "#c0392b",
        bg: "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Kirwani",
        dev: "किरवाणी",
        prahar: "Night",
        desc: "A melodic raag that feels both ancient and universally modern.",
        assoc: [
            "Profession-related issues",
            "Long-term diseases",
            "Chronic troubles"
        ],
        complexity: 15,
        accent: "#2980b9",
        bg: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Komal",
        dev: "कोमल",
        prahar: "Morning",
        desc: "Soft notes creating an inward atmosphere of empathy.",
        assoc: [
            "Mental peace",
            "Relations with mother",
            "Happiness",
            "Calmness",
            "Family atmosphere",
            "Emotional trauma",
            "Pain"
        ],
        complexity: 6,
        accent: "#27ae60",
        bg: "https://images.unsplash.com/photo-1510784722466-f2aa9c52fed6?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Lalit",
        dev: "ललित",
        prahar: "Early Dawn",
        desc: "A unique dawn melody that captures the exact moment of awakening.",
        assoc: ["Asthma"],
        complexity: 19,
        accent: "#f39c12",
        bg: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Madhuwanti",
        dev: "मधुवन्ती",
        prahar: "Afternoon",
        desc: "Meaning 'sweet as honey', it evokes a sense of romantic longing.",
        assoc: [
            "Depression",
            "Mental stress"
        ],
        complexity: 11,
        accent: "#f1c40f",
        bg: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Malkauns",
        dev: "मालकौंस",
        prahar: "Midnight",
        desc: "An ancient, serious raag traditionally associated with the depth and stillness of night.",
        assoc: ["Asthma"],
        complexity: 5,
        accent: "#8e44ad",
        bg: "https://images.unsplash.com/photo-1516339901600-2e1a62dc0c45?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Nat Bhairav",
        dev: "नट भैरव",
        prahar: "Morning",
        desc: "A majestic morning raag blending devotion with grace.",
        assoc: [
            "Relationship issues",
            "Money-related troubles"
        ],
        complexity: 13,
        accent: "#d35400",
        bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Neelambri",
        dev: "नीलाम्बरी",
        prahar: "Night",
        desc: "A soothing night atmosphere evoking the vastness of a blue sky.",
        assoc: [
            "Profession-related issues",
            "Long-term diseases",
            "Chronic troubles"
        ],
        complexity: 10,
        accent: "#2c3e50",
        bg: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Pilu",
        dev: "पिलू",
        prahar: "Flexible",
        desc: "A light classical raag incorporating many regional colors.",
        assoc: ["Anemia"],
        complexity: 8,
        accent: "#16a085",
        bg: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Poorvi",
        dev: "पूर्वी",
        prahar: "Evening / Sunset",
        desc: "A serious evening melody performed as the sun sets.",
        assoc: [
            "Education-related troubles",
            "Fights with siblings",
            "Thyroid and hormonal imbalances",
            "PCOD",
            "Cramps",
            "Communication",
            "Business",
            "Friends"
        ],
        complexity: 15,
        accent: "#e74c3c",
        bg: "https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Shadbhinna",
        dev: "षाड्भिन्न",
        prahar: "Night",
        desc: "A profound night raag with intricate structure.",
        assoc: [
            "Problems related to children",
            "Honour",
            "Getting a position in life",
            "Relationships with father",
            "Government"
        ],
        complexity: 22,
        accent: "#34495e",
        bg: "https://images.unsplash.com/photo-1436891620584-47fd0e565afb?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Shivranjani",
        dev: "शिवरञ्जनी",
        prahar: "Night",
        desc: "Highly emotive and melancholic, often used in folk and film music.",
        assoc: ["Memory loss"],
        complexity: 5,
        accent: "#2c2c54",
        bg: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Shudh",
        dev: "शुद्ध",
        prahar: "Morning",
        desc: "Focuses on pure notes to create a grounded and contemplative atmosphere.",
        assoc: [
            "Mental peace",
            "Relations with mother",
            "Family atmosphere",
            "Emotional trauma",
            "Pain",
            "Missing motivation",
            "Missing purpose",
            "Intangible happiness"
        ],
        complexity: 7,
        accent: "#f4f4f4",
        bg: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Tanpura",
        dev: "तानपुरा",
        prahar: "Continuous",
        desc: "The foundational drone that represents the continuous tonal foundation of Indian classical music.",
        assoc: [
            "Problems related to children",
            "Honour",
            "Getting a position in life",
            "Relationships with father",
            "Government"
        ],
        complexity: 30,
        accent: "#c5a059",
        bg: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Todi",
        dev: "तोडी",
        prahar: "Morning",
        desc: "A grand, deeply devotional morning melody.",
        assoc: [
            "Property-related issues",
            "Blood-related problems",
            "Violence",
            "Accidents"
        ],
        complexity: 19,
        accent: "#7f8c8d",
        bg: "https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?auto=format&fit=crop&q=80&w=1600"
    },

    {
        name: "Yaman",
        dev: "यमन",
        prahar: "Evening",
        desc: "Often among the first raags taught, representing peace and quiet joy.",
        assoc: [
            "Mental peace",
            "Relations with mother",
            "Happiness",
            "Calmness",
            "Family atmosphere",
            "Emotional trauma",
            "Pain"
        ],
        complexity: 9,
        accent: "#ffda79",
        bg: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=1600"
    }
];


/* ============================================================
   STATE
============================================================ */

let player = null;

let currentIndex = 0;

let isPlaying = false;

let playerReady = false;

let uiInitialized = false;

let progressTimer = null;

let backgroundRequest = 0;


/* ============================================================
   DOM
============================================================ */

const $ = (selector) =>
    document.querySelector(selector);

const $$ = (selector) =>
    document.querySelectorAll(selector);


/* ============================================================
   INITIAL UI
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

    initUI();

    initializeYouTube();

});


/* ============================================================
   UI INITIALIZATION
============================================================ */

function initUI() {

    if (uiInitialized) {
        return;
    }

    uiInitialized = true;

    renderRail();

    renderArchive();

    initOrrery();

    bindEvents();

    loadRaag(0, {
        play: false
    });

    setStatus(
        "WAITING FOR AUDIO",
        "waiting"
    );

    startProgressLoop();

}


/* ============================================================
   EVENT LISTENERS
============================================================ */

function bindEvents() {

    $("#play-btn").addEventListener(
        "click",
        togglePlay
    );

    $("#next-btn").addEventListener(
        "click",
        nextRaag
    );

    $("#prev-btn").addEventListener(
        "click",
        prevRaag
    );

    $("#open-nav").addEventListener(
        "click",
        openDrawer
    );

    $("#close-nav").addEventListener(
        "click",
        closeDrawer
    );

    $("#drawer-backdrop").addEventListener(
        "click",
        closeDrawer
    );

    $("#progress-bar").addEventListener(
        "click",
        seek
    );

    document.addEventListener(
        "keydown",
        handleKeyboard
    );

    $$(".knowledge a").forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                const topic =
                    link.dataset.knowledge;

                showKnowledgeMessage(topic);

            }
        );

    });

}


/* ============================================================
   YOUTUBE INITIALIZATION
============================================================ */

function initializeYouTube() {

    setStatus(
        "CONNECTING",
        "connecting"
    );

    /*
     * The API may already have loaded before this script
     * executes. Handle both cases.
     */

    if (
        window.YT &&
        typeof window.YT.Player === "function"
    ) {

        createYouTubePlayer();

        return;

    }

    /*
     * The YouTube API normally calls this global function
     * once it has loaded.
     */

    window.onYouTubeIframeAPIReady =
        createYouTubePlayer;

    /*
     * Safety timeout.
     * The UI remains usable even if YouTube fails.
     */

    setTimeout(() => {

        if (!playerReady) {

            setStatus(
                "AUDIO OFFLINE",
                "error"
            );

            setPlayerMessage(
                "Audio service could not connect. The visual archive remains available."
            );

        }

    }, 10000);

}


/* ============================================================
   CREATE YOUTUBE PLAYER
============================================================ */

function createYouTubePlayer() {

    if (
        player ||
        !window.YT ||
        typeof window.YT.Player !== "function"
    ) {
        return;
    }

    try {

        player = new YT.Player(
            "youtube-player",
            {

                width: "200",
                height: "200",

                playerVars: {

                    listType: "playlist",

                    list: PLAYLIST_ID,

                    autoplay: 0,

                    controls: 0,

                    playsinline: 1,

                    rel: 0,

                    enablejsapi: 1,

                    origin: YOUTUBE_ORIGIN

                },

                events: {

                    onReady:
                        handlePlayerReady,

                    onStateChange:
                        handlePlayerStateChange,

                    onError:
                        handlePlayerError

                }

            }
        );

    } catch (error) {

        console.error(
            "RAAGLY YouTube initialization failed:",
            error
        );

        setStatus(
            "AUDIO OFFLINE",
            "error"
        );

        setPlayerMessage(
            "YouTube could not initialize. You can still explore the raag archive."
        );

    }

}


/* ============================================================
   YOUTUBE READY
============================================================ */

function handlePlayerReady() {

    playerReady = true;

    try {

        player.setLoop(true);

        player.setVolume(100);

    } catch (error) {

        console.warn(
            "Player configuration warning:",
            error
        );

    }

    $("#play-btn").disabled = false;

    setStatus(
        "READY TO LISTEN",
        "ready"
    );

    setPlayerMessage(
        "Select a raag and enter the sound."
    );

    /*
     * Cue the first item without autoplay.
     */

    try {

        if (
            player.getPlaylist &&
            player.getPlaylist().length
        ) {

            player.cueVideoAt(0);

        }

    } catch (error) {

        console.warn(
            "Initial playlist cue failed:",
            error
        );

    }

}


/* ============================================================
   YOUTUBE STATE
============================================================ */

function handlePlayerStateChange(event) {

    switch (event.data) {

        case YT.PlayerState.PLAYING:

            isPlaying = true;

            setPlayingVisual(true);

            $("#play-btn").textContent = "Ⅱ";

            $("#play-btn").setAttribute(
                "aria-label",
                "Pause"
            );

            setStatus(
                "PLAYING",
                "playing"
            );

            setPlayerMessage(
                "Listening to " +
                raagData[currentIndex].name
            );

            syncPlaylistIndex();

            break;


        case YT.PlayerState.PAUSED:

            isPlaying = false;

            setPlayingVisual(false);

            $("#play-btn").textContent = "▶";

            $("#play-btn").setAttribute(
                "aria-label",
                "Play"
            );

            setStatus(
                "PAUSED",
                "ready"
            );

            break;


        case YT.PlayerState.ENDED:

            isPlaying = false;

            setPlayingVisual(false);

            $("#play-btn").textContent = "▶";

            $("#play-btn").setAttribute(
                "aria-label",
                "Play"
            );

            /*
             * Playlist looping is handled by YouTube.
             * We only sync the UI.
             */

            setTimeout(
                syncPlaylistIndex,
                250
            );

            break;


        case YT.PlayerState.BUFFERING:

            setStatus(
                "BUFFERING",
                "connecting"
            );

            break;

    }

}


/* ============================================================
   YOUTUBE ERRORS
============================================================ */

function handlePlayerError(event) {

    console.warn(
        "YouTube player error:",
        event.data
    );

    setStatus(
        "AUDIO ERROR",
        "error"
    );

    setPlayerMessage(
        "This audio track could not be loaded."
    );

    $("#play-btn").disabled = true;

}


/* ============================================================
   ORRERY — ORBITAL RAAG NAVIGATION
============================================================ */

const orrery = {

    initialized: false,

    rotation: 0,

    velocity: 0,

    target: null,

    active: 0,

    drag: false,

    moved: false,

    lastX: 0,

    lastTime: 0,

    pointerX: 0,

    pointerY: 0,

    pointerInside: false,

    raf: 0,

    lastFrame: 0,

    iris: {

        running: false,

        start: 0,

        target: 0,

        duration: 720

    }

};

const ORRERY_FRONT = Math.PI / 2;

const ORRERY_AUTO = 0.16;

const ORRERY_STEP = () =>
    (Math.PI * 2) / raagData.length;


function orreryWrap(v) {

    const tau = Math.PI * 2;

    while (v > Math.PI) v -= tau;

    while (v < -Math.PI) v += tau;

    return v;

}


function orreryEaseOutCubic(t) {

    return 1 - Math.pow(1 - t, 3);

}


function initOrrery() {

    const root = $("#orrery");

    const plane = $("#orrery-plane");

    const planetsRoot = $("#orrery-planets");

    if (
        !root ||
        !plane ||
        !planetsRoot ||
        orrery.initialized
    ) return;

    orrery.initialized = true;

    planetsRoot.replaceChildren();

    raagData.forEach((raag, index) => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className =
            "orrery-planet";

        button.dataset.index =
            String(index);

        button.setAttribute(
            "aria-label",
            `Select Raag ${raag.name}`
        );

        button.style.backgroundImage =
            raag.bg
                ? `url("${raag.bg}")`
                : "none";

        button.addEventListener(
            "click",
            () => {

                if (orrery.moved) {

                    orrery.moved = false;

                    return;

                }

                seekOrreryPlanet(index);

                loadRaag(
                    index,
                    {
                        play: playerReady
                    }
                );

            }
        );

        button.addEventListener(
            "pointerenter",
            () => {

                if (!orrery.drag)
                    seekOrreryPlanet(index);

            }
        );

        planetsRoot.appendChild(button);

    });

    root.addEventListener(
        "pointerenter",
        e => {

            orrery.pointerInside = true;

            orrery.pointerX = e.clientX;

            orrery.pointerY = e.clientY;

        }
    );

    root.addEventListener(
        "pointerleave",
        () => {

            orrery.pointerInside = false;

        }
    );

    root.addEventListener(
        "pointerdown",
        e => {

            orrery.drag = true;

            orrery.moved = false;

            orrery.lastX =
                e.clientX;

            orrery.lastTime =
                performance.now();

            orrery.velocity = 0;

            root.classList.add(
                "is-dragging"
            );

            root.setPointerCapture?.(
                e.pointerId
            );

        }
    );

    root.addEventListener(
        "pointermove",
        e => {

            orrery.pointerX =
                e.clientX;

            orrery.pointerY =
                e.clientY;

            if (!orrery.drag)
                return;

            const now =
                performance.now();

            const dx =
                e.clientX -
                orrery.lastX;

            const dt =
                Math.max(
                    1,
                    now -
                    orrery.lastTime
                );

            if (Math.abs(dx) > 2)
                orrery.moved = true;

            orrery.rotation +=
                dx * 0.006;

            orrery.velocity =
                (dx * 0.006) /
                (dt / 1000);

            orrery.target = null;

            orrery.lastX =
                e.clientX;

            orrery.lastTime =
                now;

        }
    );

    const release = e => {

        if (!orrery.drag)
            return;

        orrery.drag = false;

        root.classList.remove(
            "is-dragging"
        );

        root.releasePointerCapture?.(
            e.pointerId
        );

    };

    root.addEventListener(
        "pointerup",
        release
    );

    root.addEventListener(
        "pointercancel",
        release
    );

    orrery.rotation =
        ORRERY_FRONT;

    orrery.active = 0;

    const reduced =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    if (reduced) {

        renderOrrery(true);

        return;

    }

    orrery.lastFrame =
        performance.now();

    orrery.raf =
        requestAnimationFrame(
            orreryFrame
        );

}


function seekOrreryPlanet(index) {

    const step =
        ORRERY_STEP();

    const target =
        orrery.rotation +
        orreryWrap(
            ORRERY_FRONT -
            index * step -
            orrery.rotation
        );

    orrery.target =
        target;

    orrery.velocity =
        0;

}


function updateOrrerySelection(
    index,
    { iris = true } = {}
) {

    const planets =
        $$(".orrery-planet");

    if (!planets.length)
        return;

    planets.forEach(
        (planet, i) => {

            planet.classList.toggle(
                "is-active",
                i === index
            );

        }
    );

    if (
        index === orrery.active &&
        !iris
    ) return;

    orrery.active =
        index;

    const base =
        $("#orrery-lens-base");

    const irisLayer =
        $("#orrery-lens-iris");

    if (!base || !irisLayer)
        return;

    const photo =
        raagData[index]?.bg || "";

    if (
        !iris ||
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches
    ) {

        base.style.backgroundImage =
            photo
                ? `url("${photo}")`
                : "none";

        irisLayer.style.backgroundImage =
            "none";

        irisLayer.style.clipPath =
            "circle(0% at 50% 50%)";

        return;

    }

    irisLayer.style.backgroundImage =
        photo
            ? `url("${photo}")`
            : "none";

    irisLayer.style.clipPath =
        "circle(0% at 50% 50%)";

    orrery.iris.running =
        true;

    orrery.iris.start =
        performance.now();

    orrery.iris.target =
        index;

}


function renderOrrery(
    reduced = false
) {

    const plane =
        $("#orrery-plane");

    const planets =
        $$(".orrery-planet");

    const indexReadout =
        $("#orrery-index");

    const degreeReadout =
        $("#orrery-degree");

    if (
        !plane ||
        !planets.length
    ) return;

    const rect =
        plane.getBoundingClientRect();

    const Rx =
        rect.width * 0.40;

    const Ry =
        rect.height * 0.33;

    const step =
        ORRERY_STEP();

    let closest = 0;

    let closestDistance =
        Infinity;

    planets.forEach(
        (planet, i) => {

            const angle =
                orrery.rotation +
                i * step;

            const s =
                Math.sin(angle);

            const c =
                Math.cos(angle);

            const x =
                c * Rx;

            const y =
                s * Ry;

            const depth =
                (s + 1) / 2;

            const scale =
                0.60 +
                depth * 0.66;

            const opacity =
                0.34 +
                depth * 0.66;

            const distance =
                Math.abs(
                    orreryWrap(
                        angle -
                        ORRERY_FRONT
                    )
                );

            planet.style.transform =
                `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), 0) scale(${scale})`;

            planet.style.opacity =
                String(opacity);

            planet.style.zIndex =
                String(
                    Math.round(
                        depth * 100
                    )
                );

            if (
                distance <
                closestDistance
            ) {

                closestDistance =
                    distance;

                closest =
                    i;

            }

        }
    );

    if (
        closest !==
        orrery.active
    ) {

        orrery.active =
            closest;

        updateOrrerySelection(
            closest,
            {
                iris: !reduced
            }
        );

    }

    if (reduced) {

        plane.style.transform =
            "rotateX(0deg) rotateY(0deg)";

    } else {

        const root =
            $("#orrery");

        const r =
            root?.getBoundingClientRect();

        let rx = 0;

        let ry = 0;

        if (
            r &&
            orrery.pointerInside
        ) {

            const nx =
                (orrery.pointerX -
                    r.left) /
                r.width -
                0.5;

            const ny =
                (orrery.pointerY -
                    r.top) /
                r.height -
                0.5;

            rx =
                -ny * 13;

            ry =
                nx * 13;

        }

        plane.style.transform =
            `rotateX(${rx}deg) rotateY(${ry}deg)`;

    }

    if (indexReadout) {

        indexReadout.textContent =
            `${String(
                orrery.active + 1
            ).padStart(2, "0")} / ${raagData.length}`;

    }

    if (degreeReadout) {

        let deg =
            (
                (orrery.rotation %
                    (Math.PI * 2)) /
                (Math.PI * 2)
            ) * 360;

        if (deg < 0)
            deg += 360;

        degreeReadout.textContent =
            `${String(
                Math.round(deg)
            ).padStart(3, "0")}°`;

    }

}


function orreryFrame(now) {

    const dt =
        Math.min(
            0.05,
            Math.max(
                0,
                (now -
                    orrery.lastFrame) /
                1000
            )
        );

    orrery.lastFrame =
        now;

    if (orrery.drag) {

        // Pointer movement owns rotation while dragging.

    } else if (
        orrery.target !== null
    ) {

        orrery.rotation +=
            (
                orrery.target -
                orrery.rotation
            ) * 0.12;

        if (
            Math.abs(
                orrery.target -
                orrery.rotation
            ) < 0.0005
        ) {

            orrery.rotation =
                orrery.target;

            orrery.target =
                null;

        }

    } else {

        orrery.rotation +=
            ORRERY_AUTO * dt;

        if (
            Math.abs(
                orrery.velocity
            ) > 0.00001
        ) {

            orrery.rotation +=
                orrery.velocity * dt;

            orrery.velocity *=
                Math.pow(
                    0.9,
                    dt * 60
                );

        }

    }

    renderOrrery(false);

    const iris =
        orrery.iris;

    if (iris.running) {

        const layer =
            $("#orrery-lens-iris");

        const base =
            $("#orrery-lens-base");

        if (layer && base) {

            const progress =
                Math.min(
                    1,
                    (
                        now -
                        iris.start
                    ) /
                    iris.duration
                );

            const radius =
                72 *
                orreryEaseOutCubic(
                    progress
                );

            layer.style.clipPath =
                `circle(${radius}% at 50% 50%)`;

            if (progress >= 1) {

                const photo =
                    raagData[
                        iris.target
                    ]?.bg || "";

                base.style.backgroundImage =
                    photo
                        ? `url("${photo}")`
                        : "none";

                layer.style.backgroundImage =
                    "none";

                layer.style.clipPath =
                    "circle(0% at 50% 50%)";

                iris.running =
                    false;

            }

        }

    }

    orrery.raf =
        requestAnimationFrame(
            orreryFrame
        );

}


/* ============================================================
   LOAD RAAG
============================================================ */

function loadRaag(
    index,
    options = {}
) {

    const {
        play = false
    } = options;

    if (
        index < 0 ||
        index >= raagData.length
    ) {
        return;
    }

    currentIndex =
        index;

    const data =
        raagData[
            currentIndex
        ];


    /* ---------------------------------------------
       TEXT
    --------------------------------------------- */

    $("#raag-number").textContent =
        String(
            currentIndex + 1
        ).padStart(2, "0");

    $("#raag-name").textContent =
        `Raag ${data.name}`;

    $("#raag-hindi").textContent =
        data.dev;

    $("#raag-prahar").textContent =
        data.prahar;

    $("#raag-desc").textContent =
        data.desc;


    /* ---------------------------------------------
       ASSOCIATIONS
    --------------------------------------------- */

    const assocList =
        $("#raag-associations");

    assocList.replaceChildren();

    data.assoc.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent =
            item;

        assocList.appendChild(
            li
        );

    });


    /* ---------------------------------------------
       THEME
    --------------------------------------------- */

    document.documentElement
        .style
        .setProperty(
            "--accent",
            data.accent
        );

    updateBackground(
        data.bg
    );

    updateOrrerySelection(
        currentIndex,
        {
            iris: true
        }
    );


    /* ---------------------------------------------
       RAIL
    --------------------------------------------- */

    updateRail();

    updateArchive();


    /* ---------------------------------------------
       PLAYER
    --------------------------------------------- */

    resetProgress();

    if (
        playerReady &&
        player
    ) {

        try {

            /*
             * playVideoAt() is used only when the
             * user intentionally selects another
             * raag or presses navigation.
             */

            if (play) {

                player.playVideoAt(
                    currentIndex
                );

            } else {

                player.cueVideoAt(
                    currentIndex
                );

            }

        } catch (error) {

            console.warn(
                "Unable to load playlist item:",
                error
            );

        }

    }


    /*
     * Update document metadata.
     */

    document.title =
        `Raag ${data.name} — RAAGLY`;

}


/* ============================================================
   BACKGROUND
============================================================ */

function updateBackground(
    imageUrl
) {

    const requestId =
        ++backgroundRequest;

    const bg1 =
        $("#bg-1");

    const bg2 =
        $("#bg-2");

    const active =
        bg1.classList.contains("active")
            ? bg1
            : bg2;

    const next =
        active === bg1
            ? bg2
            : bg1;

    const image =
        new Image();

    image.onload = () => {

        if (
            requestId !==
            backgroundRequest
        ) {
            return;
        }

        next.style.backgroundImage =
            `url("${imageUrl}")`;

        next.classList.add(
            "active"
        );

        active.classList.remove(
            "active"
        );

    };

    image.onerror = () => {

        console.warn(
            "Background failed:",
            imageUrl
        );

    };

    image.src =
        imageUrl;

}


/* ============================================================
   MANDALA GENERATOR
============================================================ */

function generateMandala(
    complexity
) {

    const group =
        $("#mandala-layers");

    group.replaceChildren();


    /*
     * Outer rings
     */

    for (
        let i = 0;
        i < 4;
        i++
    ) {

        const circle =
            svgElement("circle");

        circle.setAttribute(
            "cx",
            "200"
        );

        circle.setAttribute(
            "cy",
            "200"
        );

        circle.setAttribute(
            "r",
            String(
                65 +
                i * 35
            )
        );

        circle.setAttribute(
            "fill",
            "none"
        );

        circle.setAttribute(
            "stroke",
            "var(--gold)"
        );

        circle.setAttribute(
            "stroke-width",
            i === 0
                ? "1"
                : "0.5"
        );

        circle.setAttribute(
            "opacity",
            String(
                0.22 -
                i * 0.035
            )
        );

        group.appendChild(
            circle
        );

    }


    /*
     * Mandala layers
     */

    const configs = [

        {
            count: Math.max(
                4,
                complexity
            ),

            radius: 110,

            speed: "slow",

            opacity: 0.32
        },

        {
            count: Math.max(
                4,
                Math.floor(
                    complexity / 1.5
                )
            ),

            radius: 145,

            speed: "reverse",

            opacity: 0.22
        },

        {
            count: Math.max(
                6,
                Math.floor(
                    complexity * 1.5
                )
            ),

            radius: 175,

            speed: "mid",

            opacity: 0.13
        }

    ];


    configs.forEach(
        config => {

            const layer =
                svgElement("g");

            layer.setAttribute(
                "class",
                `mandala-layer ${config.speed}`
            );


            for (
                let i = 0;
                i < config.count;
                i++
            ) {

                const angle =
                    (
                        i /
                        config.count
                    ) * 360;

                const groupItem =
                    svgElement("g");

                groupItem.setAttribute(
                    "transform",
                    `rotate(${angle} 200 200)`
                );


                /*
                 * Petal / diamond
                 */

                const diamond =
                    svgElement("path");

                const x =
                    200;

                const y =
                    200 -
                    config.radius;

                const size =
                    10;


                diamond.setAttribute(
                    "d",
                    `
                    M ${x} ${y - size}
                    L ${x + size} ${y}
                    L ${x} ${y + size}
                    L ${x - size} ${y}
                    Z
                    `
                );

                diamond.setAttribute(
                    "fill",
                    "none"
                );

                diamond.setAttribute(
                    "stroke",
                    "var(--accent)"
                );

                diamond.setAttribute(
                    "stroke-width",
                    "0.7"
                );

                diamond.setAttribute(
                    "opacity",
                    String(
                        config.opacity
                    )
                );


                groupItem.appendChild(
                    diamond
                );


                /*
                 * Inner connecting line
                 */

                const line =
                    svgElement("line");

                line.setAttribute(
                    "x1",
                    "200"
                );

                line.setAttribute(
                    "y1",
                    String(
                        200 -
                        config.radius +
                        size
                    )
                );

                line.setAttribute(
                    "x2",
                    "200"
                );

                line.setAttribute(
                    "y2",
                    "200"
                );

                line.setAttribute(
                    "stroke",
                    "var(--accent)"
                );

                line.setAttribute(
                    "stroke-width",
                    "0.35"
                );

                line.setAttribute(
                    "opacity",
                    String(
                        config.opacity *
                        0.35
                    )
                );

                groupItem.appendChild(
                    line
                );

                layer.appendChild(
                    groupItem
                );

            }

            group.appendChild(
                layer
            );

        }
    );

}


/* ============================================================
   SVG HELPER
============================================================ */

function svgElement(
    name
) {

    return document.createElementNS(
        "http://www.w3.org/2000/svg",
        name
    );

}


/* ============================================================
   RAIL
============================================================ */

function renderRail() {

    const rail =
        $("#selector-rail");

    rail.replaceChildren();

    raagData.forEach(
        (raag, index) => {

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.className =
                "rail-item";

            button.dataset.index =
                String(index);

            button.setAttribute(
                "role",
                "listitem"
            );

            button.innerHTML = `
                <span class="num">
                    ${String(
                        index + 1
                    ).padStart(2, "0")}
                </span>

                <span class="name">
                    ${escapeHTML(
                        raag.name
                    )}
                </span>
            `;

            button.addEventListener(
                "click",
                () => {

                    loadRaag(
                        index,
                        {
                            play:
                                playerReady
                        }
                    );

                }
            );

            rail.appendChild(
                button
            );

        }
    );

    updateRail();

}


function updateRail() {

    $$(".rail-item").forEach(
        (item, index) => {

            const active =
                index ===
                currentIndex;

            item.classList.toggle(
                "active",
                active
            );

            item.setAttribute(
                "aria-current",
                active
                    ? "true"
                    : "false"
            );

            if (active) {

                item.scrollIntoView({

                    behavior:
                        window.matchMedia(
                            "(prefers-reduced-motion: reduce)"
                        ).matches
                            ? "auto"
                            : "smooth",

                    block:
                        "nearest",

                    inline:
                        "center"

                });

            }

        }
    );

}


/* ============================================================
   ARCHIVE
============================================================ */

function renderArchive() {

    const list =
        $("#archive-list");

    list.replaceChildren();

    raagData.forEach(
        (raag, index) => {

            const li =
                document.createElement(
                    "li"
                );

            li.textContent =
                `${String(
                    index + 1
                ).padStart(
                    2,
                    "0"
                )} — Raag ${raag.name}`;

            li.dataset.index =
                String(index);

            li.addEventListener(
                "click",
                () => {

                    loadRaag(
                        index,
                        {
                            play:
                                playerReady
                        }
                    );

                    closeDrawer();

                }
            );

            list.appendChild(
                li
            );

        }
    );

    updateArchive();

}


function updateArchive() {

    $$("#archive-list li").forEach(
        (item, index) => {

            item.style.color =
                index ===
                currentIndex
                    ? "var(--accent)"
                    : "";

        }
    );

}


/* ============================================================
   PLAYBACK
============================================================ */

function togglePlay() {

    if (
        !playerReady ||
        !player
    ) {

        setPlayerMessage(
            "Audio is still connecting…"
        );

        return;

    }

    try {

        if (isPlaying) {

            player.pauseVideo();

        } else {

            player.playVideo();

        }

    } catch (error) {

        console.error(
            "Playback error:",
            error
        );

    }

}


function nextRaag() {

    const next =
        (
            currentIndex + 1
        ) %
        raagData.length;

    loadRaag(
        next,
        {
            play:
                playerReady
        }
    );

}


function prevRaag() {

    const previous =
        (
            currentIndex -
            1 +
            raagData.length
        ) %
        raagData.length;

    loadRaag(
        previous,
        {
            play:
                playerReady
        }
    );

}


/* ============================================================
   PLAYLIST SYNC
============================================================ */

function syncPlaylistIndex() {

    if (
        !playerReady ||
        !player ||
        typeof player.getPlaylistIndex !==
            "function"
    ) {

        return;

    }

    try {

        const index =
            player.getPlaylistIndex();

        if (
            index >= 0 &&
            index < raagData.length &&
            index !== currentIndex
        ) {

            currentIndex =
                index;

            loadRaag(
                index,
                {
                    play: false
                }
            );

        }

    } catch (error) {

        console.warn(
            "Playlist sync failed:",
            error
        );

    }

}


/* ============================================================
   PROGRESS
============================================================ */

function startProgressLoop() {

    if (progressTimer) {

        clearInterval(
            progressTimer
        );

    }

    progressTimer =
        setInterval(
            updateProgress,
            250
        );

}


function updateProgress() {

    if (
        !playerReady ||
        !player ||
        !isPlaying
    ) {

        return;

    }

    try {

        const current =
            player.getCurrentTime();

        const duration =
            player.getDuration();

        if (
            !duration ||
            duration <= 0
        ) {

            return;

        }

        const percentage =
            Math.min(
                100,
                Math.max(
                    0,
                    (
                        current /
                        duration
                    ) * 100
                )
            );

        $("#progress-fill")
            .style
            .width =
            `${percentage}%`;

        $("#progress-bar")
            .style
            .setProperty(
                "--progress",
                `${percentage}%`
            );

        $("#time-cur")
            .textContent =
            formatTime(
                current
            );

        $("#time-dur")
            .textContent =
            formatTime(
                duration
            );

    } catch (error) {

        /*
         * Player may briefly reject API calls
         * while buffering/loading.
         */

    }

}


function resetProgress() {

    $("#progress-fill")
        .style
        .width =
        "0%";

    $("#progress-bar")
        .style
        .setProperty(
            "--progress",
            "0%"
        );

    $("#time-cur")
        .textContent =
        "0:00";

    $("#time-dur")
        .textContent =
        "0:00";

}


function seek(event) {

    if (
        !playerReady ||
        !player
    ) {

        return;

    }

    const rect =
        event.currentTarget
            .getBoundingClientRect();

    const x =
        event.clientX -
        rect.left;

    const ratio =
        Math.min(
            1,
            Math.max(
                0,
                x /
                rect.width
            )
        );

    try {

        const duration =
            player.getDuration();

        if (
            duration &&
            duration > 0
        ) {

            player.seekTo(
                ratio *
                duration,
                true
            );

        }

    } catch (error) {

        console.warn(
            "Seek failed:",
            error
        );

    }

}


/* ============================================================
   TIME
============================================================ */

function formatTime(
    seconds
) {

    if (
        !Number.isFinite(
            seconds
        ) ||
        seconds < 0
    ) {

        return "0:00";

    }

    const minutes =
        Math.floor(
            seconds / 60
        );

    const secs =
        Math.floor(
            seconds % 60
        );

    return `${minutes}:${String(
        secs
    ).padStart(
        2,
        "0"
    )}`;

}


/* ============================================================
   DRAWER
============================================================ */

function openDrawer() {

    const drawer =
        $("#side-archive");

    drawer.classList.add(
        "open"
    );

    drawer.setAttribute(
        "aria-hidden",
        "false"
    );

    $("#drawer-backdrop")
        .classList
        .add(
            "visible"
        );

    $("#close-nav").focus();

    document.body.style.overflow =
        "hidden";

}


function closeDrawer() {

    const drawer =
        $("#side-archive");

    drawer.classList.remove(
        "open"
    );

    drawer.setAttribute(
        "aria-hidden",
        "true"
    );

    $("#drawer-backdrop")
        .classList
        .remove(
            "visible"
        );

    document.body.style.overflow =
        "";

    $("#open-nav").focus();

}


/* ============================================================
   KEYBOARD
============================================================ */

function handleKeyboard(
    event
) {

    /*
     * Do not hijack keyboard controls
     * when typing into an input.
     */

    const tag =
        event.target.tagName;

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

            nextRaag();

            break;


        case "ArrowLeft":

            prevRaag();

            break;


        case "Escape":

            closeDrawer();

            break;

    }

}


/* ============================================================
   VISUAL PLAYING STATE
============================================================ */

function setPlayingVisual(
    playing
) {

    isPlaying =
        playing;

    $("#mandala-svg")
        .closest(
            ".main-stage"
        )
        .classList
        .toggle(
            "playing",
            playing
        );

}


/* ============================================================
   STATUS
============================================================ */

function setStatus(
    text,
    state
) {

    $("#status-text")
        .textContent =
        text;

    const dot =
        $("#status-dot");

    const colors = {

        connecting:
            "#c5a059",

        waiting:
            "#c5a059",

        ready:
            "#c5a059",

        playing:
            "#7ed6a5",

        error:
            "#b84a4a"

    };

    const color =
        colors[state] ||
        "#c5a059";

    dot.style.background =
        color;

    dot.style.boxShadow =
        `0 0 10px ${color}`;

}


function setPlayerMessage(
    message
) {

    $("#player-message")
        .textContent =
        message;

}


/* ============================================================
   KNOWLEDGE
============================================================ */

function showKnowledgeMessage(
    topic
) {

    const messages = {

        vedic:
            "Vedic Sound Theory — knowledge section coming soon.",

        geometry:
            "Sacred Geometry — visualization studies coming soon.",

        nada:
            "Nada Yoga — the inner journey of sound coming soon."

    };

    setPlayerMessage(
        messages[topic] ||
        "Knowledge section coming soon."
    );

}


/* ============================================================
   HTML ESCAPE
============================================================ */

function escapeHTML(
    value
) {

    return String(value)
        .replaceAll(
            "&",
            "&amp;"
        )
        .replaceAll(
            "<",
            "&lt;"
        )
        .replaceAll(
            ">",
            "&gt;"
        )
        .replaceAll(
            '"',
            "&quot;"
        )
        .replaceAll(
            "'",
            "&#039;"
        );

}
