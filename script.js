/* =========================================================
   RAAGLY — APPLICATION ENGINE
   =========================================================
   - 27 Raag orbital archive
   - Orrery drag / spin
   - Rail navigation
   - Archive drawer
   - Background image transitions
   - YouTube IFrame player
   - Progress / seek controls
   - Keyboard navigation
   - Touch / pointer interaction
   ========================================================= */


/* =========================================================
   CONFIG
========================================================= */

const PLAYLIST_ID = "PLJRipbfj__b0";
const TOTAL_TRACKS = 27;

const CONFIG = {
    autoplay: false,
    rotationSpeed: 0.0018,
    inertiaFriction: 0.94,
    autoRotateSpeed: 0.00045,
    orbitWidth: 40,
    orbitHeight: 33,
    planetCount: 27,
    backgroundOpacity: 0.48
};


/* =========================================================
   RAAG DATA
========================================================= */

const RAAGS = [
    {
        id: 1,
        name: "Bhairav",
        hindi: "भैरव",
        prahar: "First Prahar · Morning",
        description:
            "A grave and meditative morning raag traditionally associated with awakening, discipline and contemplative stillness.",
        associations: ["Meditation", "Devotion", "Discipline", "Awakening"],
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 2,
        name: "Ahir Bhairav",
        hindi: "अहीर भैरव",
        prahar: "First Prahar · Morning",
        description:
            "A gentle morning expression combining the gravity of Bhairav with a softer, pastoral emotional colour.",
        associations: ["Peace", "Devotion", "Tenderness", "Morning"],
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 3,
        name: "Todi",
        hindi: "तोड़ी",
        prahar: "Late Morning",
        description:
            "An introspective morning raag whose characteristic intervals create a deeply contemplative and yearning atmosphere.",
        associations: ["Introspection", "Longing", "Contemplation", "Depth"],
        image:
            "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 4,
        name: "Bhairavi",
        hindi: "भैरवी",
        prahar: "Dawn / Concluding Raag",
        description:
            "One of the most familiar and versatile raags of Hindustani music, often heard at the conclusion of a concert.",
        associations: ["Devotion", "Yearning", "Closure", "Reflection"],
        image:
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 5,
        name: "Yaman",
        hindi: "यमन",
        prahar: "First Prahar · Evening",
        description:
            "A luminous evening raag characterised by serenity, expansiveness and an elegant melodic architecture.",
        associations: ["Serenity", "Love", "Expansion", "Grace"],
        image:
            "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 6,
        name: "Kedar",
        hindi: "केदार",
        prahar: "Late Evening",
        description:
            "A devotional evening raag with a distinctive oscillating melodic character and a strong sense of repose.",
        associations: ["Devotion", "Stillness", "Reverence", "Peace"],
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 7,
        name: "Marwa",
        hindi: "मारवा",
        prahar: "Sunset",
        description:
            "A psychologically intense sunset raag, marked by tension, anticipation and an almost suspended tonal centre.",
        associations: ["Tension", "Anticipation", "Solitude", "Transition"],
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 8,
        name: "Puriya",
        hindi: "पूरिया",
        prahar: "Sunset",
        description:
            "A sophisticated twilight raag carrying an introspective and restrained emotional character.",
        associations: ["Mysticism", "Introspection", "Twilight", "Stillness"],
        image:
            "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 9,
        name: "Puriya Dhanashree",
        hindi: "पूरिया धनाश्री",
        prahar: "Evening",
        description:
            "An evening raag balancing the tension of the Puriya family with a more flowing and lyrical melodic movement.",
        associations: ["Elegance", "Romance", "Twilight", "Reflection"],
        image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 10,
        name: "Multani",
        hindi: "मुल्तानी",
        prahar: "Late Afternoon",
        description:
            "A powerful afternoon raag known for its intense melodic colour and inward emotional atmosphere.",
        associations: ["Intensity", "Heat", "Longing", "Contemplation"],
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 11,
        name: "Darbari Kanada",
        hindi: "दरबारी कानड़ा",
        prahar: "Late Night",
        description:
            "A profound late-night raag traditionally associated with gravity, introspection and majestic depth.",
        associations: ["Depth", "Majesty", "Solitude", "Night"],
        image:
            "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 12,
        name: "Malkauns",
        hindi: "मालकौंस",
        prahar: "Late Night",
        description:
            "A pentatonic night raag with an austere, hypnotic and deeply meditative character.",
        associations: ["Meditation", "Mysticism", "Night", "Stillness"],
        image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 13,
        name: "Bageshree",
        hindi: "बागेश्री",
        prahar: "Late Night",
        description:
            "A romantic night raag traditionally connected with longing, tenderness and inward emotional expression.",
        associations: ["Love", "Longing", "Tenderness", "Night"],
        image:
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 14,
        name: "Kafi",
        hindi: "काफ़ी",
        prahar: "Late Night",
        description:
            "A flexible and expressive raag with an earthy tonal vocabulary and strong associations with folk traditions.",
        associations: ["Earthiness", "Folk", "Romance", "Freedom"],
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 15,
        name: "Bihag",
        hindi: "बिहाग",
        prahar: "Second Prahar · Night",
        description:
            "A graceful night raag with a bright melodic personality and a refined romantic character.",
        associations: ["Beauty", "Romance", "Joy", "Grace"],
        image:
            "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 16,
        name: "Hameer",
        hindi: "हमीर",
        prahar: "Second Prahar · Night",
        description:
            "A majestic evening-to-night raag marked by richness, grandeur and expansive melodic gestures.",
        associations: ["Grandeur", "Royalty", "Confidence", "Expansion"],
        image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 17,
        name: "Desh",
        hindi: "देश",
        prahar: "Second Prahar · Night",
        description:
            "A lyrical raag whose melodic contours carry a strong sense of nostalgia, affection and cultural memory.",
        associations: ["Nostalgia", "Affection", "Rain", "Memory"],
        image:
            "https://images.unsplash.com/photo-1501691223387-dd0500403074?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 18,
        name: "Khamaj",
        hindi: "खमाज",
        prahar: "Second Prahar · Night",
        description:
            "A sensuous and expressive raag with a strong presence in lighter classical traditions.",
        associations: ["Romance", "Sensuality", "Grace", "Expression"],
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 19,
        name: "Basant",
        hindi: "बसंत",
        prahar: "Spring / Seasonal",
        description:
            "A seasonal raag traditionally associated with spring, renewal and the changing colours of nature.",
        associations: ["Spring", "Renewal", "Nature", "Celebration"],
        image:
            "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 20,
        name: "Bahar",
        hindi: "बहार",
        prahar: "Spring / Seasonal",
        description:
            "A spring-associated raag celebrated for its lyrical beauty and evocation of flowering nature.",
        associations: ["Spring", "Flowers", "Beauty", "Joy"],
        image:
            "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 21,
        name: "Megh",
        hindi: "मेघ",
        prahar: "Monsoon",
        description:
            "A rain-associated raag whose melodic character evokes clouds, rainfall and the atmosphere of the monsoon.",
        associations: ["Rain", "Clouds", "Monsoon", "Relief"],
        image:
            "https://images.unsplash.com/photo-1501691223387-dd0500403074?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 22,
        name: "Miyan Ki Malhar",
        hindi: "मियाँ की मल्हार",
        prahar: "Monsoon",
        description:
            "One of the great Malhar traditions, deeply associated with rain, storm clouds and monsoon atmosphere.",
        associations: ["Rain", "Storm", "Monsoon", "Intensity"],
        image:
            "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 23,
        name: "Gorakh Kalyan",
        hindi: "गोरख कल्याण",
        prahar: "Evening",
        description:
            "A restrained and contemplative raag characterised by an uncluttered melodic movement and quiet atmosphere.",
        associations: ["Simplicity", "Peace", "Contemplation", "Evening"],
        image:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 24,
        name: "Shree",
        hindi: "श्री",
        prahar: "Sunset",
        description:
            "An ancient and serious raag carrying an austere, devotional and deeply contemplative character.",
        associations: ["Austerity", "Devotion", "Wisdom", "Twilight"],
        image:
            "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 25,
        name: "Lalit",
        hindi: "ललित",
        prahar: "Pre-Dawn",
        description:
            "A distinctive dawn raag whose unusual treatment of the madhyam creates a mysterious and suspended tonal world.",
        associations: ["Dawn", "Mystery", "Awakening", "Stillness"],
        image:
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 26,
        name: "Ahir Lalit",
        hindi: "अहीर ललित",
        prahar: "Pre-Dawn",
        description:
            "A contemplative early-morning expression combining the atmospheric qualities of Ahir and Lalit traditions.",
        associations: ["Dawn", "Meditation", "Tenderness", "Mysticism"],
        image:
            "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=1000&q=80"
    },

    {
        id: 27,
        name: "Shivaranjani",
        hindi: "शिवरंजनी",
        prahar: "Night",
        description:
            "A widely recognised pentatonic melodic framework associated in modern listening culture with poignancy and emotional reflection.",
        associations: ["Emotion", "Reflection", "Longing", "Solitude"],
        image:
            "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1000&q=80"
    }
];


/* =========================================================
   STATE
========================================================= */

const state = {
    currentIndex: 0,

    player: null,
    playerReady: false,

    isPlaying: false,
    duration: 0,
    currentTime: 0,

    bgIndex: 0,

    rotation: 0,
    velocity: 0,

    dragging: false,
    pointerId: null,
    pointerStartX: 0,
    pointerStartRotation: 0,
    lastPointerX: 0,
    lastPointerTime: 0,

    animationFrame: null,
    progressTimer: null,

    planets: [],

    touchStartX: 0,
    touchStartY: 0
};


/* =========================================================
   DOM
========================================================= */

const $ = (selector) => document.querySelector(selector);

const DOM = {
    body: document.body,

    bg1: $("#bg-1"),
    bg2: $("#bg-2"),

    sideArchive: $("#side-archive"),
    openNav: $("#open-nav"),
    closeNav: $("#close-nav"),
    drawerBackdrop: $("#drawer-backdrop"),
    archiveList: $("#archive-list"),

    statusDot: $("#status-dot"),
    statusText: $("#status-text"),

    raagNumber: $("#raag-number"),
    raagPrahar: $("#raag-prahar"),
    raagName: $("#raag-name"),
    raagHindi: $("#raag-hindi"),
    raagDesc: $("#raag-desc"),
    raagAssociations: $("#raag-associations"),

    selectorRail: $("#selector-rail"),

    orrery: $("#orrery"),
    orreryPlane: $("#orrery-plane"),
    orreryPlanets: $("#orrery-planets"),
    orreryLensBase: $("#orrery-lens-base"),
    orreryLensIris: $("#orrery-lens-iris"),
    orreryIndex: $("#orrery-index"),
    orreryDegree: $("#orrery-degree"),

    playBtn: $("#play-btn"),
    prevBtn: $("#prev-btn"),
    nextBtn: $("#next-btn"),

    playerLabel: $("#player-label"),
    playerMessage: $("#player-message"),

    progressBar: $("#progress-bar"),
    progressFill: $("#progress-fill"),

    timeCurrent: $("#time-cur"),
    timeDuration: $("#time-dur"),

    youtubePlayer: $("#youtube-player")
};


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", init);

function init() {
    buildArchive();
    buildRail();
    buildPlanets();

    bindNavigation();
    bindPlayerControls();
    bindOrreryControls();
    bindKeyboard();

    setRaag(0, false);

    startOrreryLoop();

    setStatus("READY", true);

    loadYouTubeAPI();
}


/* =========================================================
   RAAG UI
========================================================= */

function setRaag(index, shouldPlay = false) {
    if (!Number.isFinite(index)) {
        return;
    }

    index = ((index % RAAGS.length) + RAAGS.length) % RAAGS.length;

    const previousIndex = state.currentIndex;

    state.currentIndex = index;

    const raag = RAAGS[index];

    DOM.raagNumber.textContent = String(raag.id).padStart(2, "0");
    DOM.raagPrahar.textContent = raag.prahar;
    DOM.raagName.textContent = raag.name;
    DOM.raagHindi.textContent = raag.hindi;
    DOM.raagDesc.textContent = raag.description;

    DOM.raagAssociations.innerHTML = "";

    raag.associations.forEach((association) => {
        const li = document.createElement("li");
        li.textContent = association;
        DOM.raagAssociations.appendChild(li);
    });

    DOM.orreryIndex.textContent =
        `${String(raag.id).padStart(2, "0")} / ${TOTAL_TRACKS}`;

    updateDegree();

    updateRailActiveState();
    updateArchiveActiveState();
    updatePlanetActiveState();

    updateLens(raag.image);

    setBackground(raag.image);

    if (previousIndex !== index) {
        pulseContent();
    }

    if (state.playerReady) {
        loadTrack(index, shouldPlay);
    } else {
        DOM.playerMessage.textContent =
            "Preparing the listening experience…";
    }
}


/* =========================================================
   CONTENT TRANSITION
========================================================= */

function pulseContent() {
    const targets = [
        DOM.raagPrahar,
        DOM.raagName,
        DOM.raagHindi,
        DOM.raagDesc
    ];

    targets.forEach((element) => {
        if (!element) return;

        element.animate(
            [
                {
                    opacity: 0.2,
                    transform: "translateY(8px)"
                },
                {
                    opacity: 1,
                    transform: "translateY(0)"
                }
            ],
            {
                duration: 420,
                easing: "cubic-bezier(.2,.7,.2,1)"
            }
        );
    });
}


/* =========================================================
   ARCHIVE
========================================================= */

function buildArchive() {
    if (!DOM.archiveList) return;

    DOM.archiveList.innerHTML = "";

    RAAGS.forEach((raag, index) => {
        const li = document.createElement("li");

        li.textContent =
            `${String(raag.id).padStart(2, "0")}  ${raag.name}`;

        li.dataset.index = index;

        li.addEventListener("click", () => {
            setRaag(index);
            closeArchive();
        });

        DOM.archiveList.appendChild(li);
    });
}


function updateArchiveActiveState() {
    const items = DOM.archiveList?.querySelectorAll("li");

    if (!items) return;

    items.forEach((item, index) => {
        item.style.color =
            index === state.currentIndex
                ? "var(--accent)"
                : "";
    });
}


/* =========================================================
   RAIL
========================================================= */

function buildRail() {
    if (!DOM.selectorRail) return;

    DOM.selectorRail.innerHTML = "";

    RAAGS.forEach((raag, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "rail-item";
        button.dataset.index = index;

        button.innerHTML = `
            <span class="num">${String(raag.id).padStart(2, "0")}</span>
            <span class="name">${escapeHTML(raag.name)}</span>
        `;

        button.addEventListener("click", () => {
            setRaag(index, false);
        });

        DOM.selectorRail.appendChild(button);
    });

    updateRailActiveState();
}


function updateRailActiveState() {
    const items = DOM.selectorRail?.querySelectorAll(".rail-item");

    if (!items) return;

    items.forEach((item, index) => {
        const active = index === state.currentIndex;

        item.classList.toggle("active", active);

        if (active) {
            item.setAttribute("aria-current", "true");

            item.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center"
            });
        } else {
            item.removeAttribute("aria-current");
        }
    });
}


/* =========================================================
   ORRERY
========================================================= */

function buildPlanets() {
    if (!DOM.orreryPlanets) return;

    DOM.orreryPlanets.innerHTML = "";

    state.planets = [];

    const count = RAAGS.length;

    RAAGS.forEach((raag, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "orrery-planet";

        button.dataset.index = index;

        button.title = `${raag.name} — ${raag.prahar}`;
        button.setAttribute(
            "aria-label",
            `Select ${raag.name}`
        );

        button.style.backgroundImage =
            `url("${raag.image}")`;

        button.addEventListener("click", (event) => {
            event.stopPropagation();

            setRaag(index);

            velocity = 0;
        });

        DOM.orreryPlanets.appendChild(button);

        state.planets.push(button);
    });

    updatePlanetPositions();
}


function updatePlanetPositions() {
    const count = state.planets.length;

    if (!count) return;

    const frame = DOM.orreryPlane;

    if (!frame) return;

    const rect = frame.getBoundingClientRect();

    const radiusX = rect.width * 0.40;
    const radiusY = rect.height * 0.33;

    state.planets.forEach((planet, index) => {
        const baseAngle =
            (index / count) * Math.PI * 2;

        const angle =
            baseAngle + state.rotation;

        const x =
            Math.cos(angle) * radiusX;

        const y =
            Math.sin(angle) * radiusY;

        /*
         * Fake depth:
         * front planets are larger/brighter,
         * rear planets are smaller/dimmer.
         */
        const depth =
            (Math.sin(angle) + 1) / 2;

        const scale =
            0.62 + depth * 0.46;

        const opacity =
            0.30 + depth * 0.70;

        const zIndex =
            Math.round(depth * 100);

        planet.style.transform =
            `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${depth * 80}px) scale(${scale})`;

        planet.style.opacity = opacity;
        planet.style.zIndex = zIndex;

        const active =
            index === state.currentIndex;

        planet.classList.toggle("is-active", active);

        if (active) {
            planet.style.boxShadow =
                "0 8px 24px rgba(0,0,0,.42), inset 0 0 0 1px var(--accent)";
        } else {
            planet.style.boxShadow = "";
        }
    });
}


function updatePlanetActiveState() {
    state.planets.forEach((planet, index) => {
        planet.classList.toggle(
            "is-active",
            index === state.currentIndex
        );
    });
}


function updateDegree() {
    const degrees =
        ((state.rotation * 180 / Math.PI) % 360 + 360) % 360;

    const rounded =
        Math.round(degrees / 10) * 10;

    DOM.orreryDegree.textContent =
        `${String(rounded % 360).padStart(3, "0")}°`;
}


/* =========================================================
   ORRERY ANIMATION LOOP
========================================================= */

function startOrreryLoop() {
    if (state.animationFrame) {
        cancelAnimationFrame(state.animationFrame);
    }

    let lastTime = performance.now();

    function frame(now) {
        const delta =
            Math.min(50, now - lastTime);

        lastTime = now;

        if (!state.dragging) {
            if (Math.abs(state.velocity) > 0.00001) {
                state.rotation += state.velocity * delta;

                state.velocity *=
                    Math.pow(
                        CONFIG.inertiaFriction,
                        delta / 16
                    );
            } else {
                state.rotation +=
                    CONFIG.autoRotateSpeed * delta;
            }
        }

        updatePlanetPositions();
        updateDegree();

        state.animationFrame =
            requestAnimationFrame(frame);
    }

    state.animationFrame =
        requestAnimationFrame(frame);
}


/* =========================================================
   ORRERY POINTER / DRAG
========================================================= */

function bindOrreryControls() {
    if (!DOM.orrery) return;

    DOM.orrery.addEventListener(
        "pointerdown",
        onPointerDown
    );

    window.addEventListener(
        "pointermove",
        onPointerMove
    );

    window.addEventListener(
        "pointerup",
        onPointerUp
    );

    window.addEventListener(
        "pointercancel",
        onPointerUp
    );

    DOM.orrery.addEventListener(
        "wheel",
        onOrreryWheel,
        { passive: false }
    );
}


function onPointerDown(event) {
    if (event.target.closest(".orrery-planet")) {
        return;
    }

    state.dragging = true;
    state.pointerId = event.pointerId;

    state.pointerStartX = event.clientX;
    state.lastPointerX = event.clientX;

    state.pointerStartRotation = state.rotation;

    state.lastPointerTime =
        performance.now();

    DOM.orrery.classList.add("is-dragging");

    DOM.orrery.setPointerCapture?.(
        event.pointerId
    );
}


function onPointerMove(event) {
    if (!state.dragging) return;

    if (
        state.pointerId !== null &&
        event.pointerId !== state.pointerId
    ) {
        return;
    }

    const now = performance.now();

    const dx =
        event.clientX - state.lastPointerX;

    const dt =
        Math.max(1, now - state.lastPointerTime);

    state.rotation += dx * CONFIG.rotationSpeed;

    state.velocity =
        (dx * CONFIG.rotationSpeed) /
        dt;

    state.lastPointerX = event.clientX;
    state.lastPointerTime = now;
}


function onPointerUp(event) {
    if (!state.dragging) return;

    state.dragging = false;
    state.pointerId = null;

    DOM.orrery.classList.remove("is-dragging");
}


function onOrreryWheel(event) {
    event.preventDefault();

    const direction =
        event.deltaY > 0 ? 1 : -1;

    state.rotation +=
        direction * 0.08;

    state.velocity =
        direction * 0.0007;
}


/* =========================================================
   BACKGROUND SYSTEM
========================================================= */

function setBackground(image) {
    if (!image) return;

    const current =
        state.bgIndex === 0
            ? DOM.bg1
            : DOM.bg2;

    const next =
        state.bgIndex === 0
            ? DOM.bg2
            : DOM.bg1;

    if (!current || !next) return;

    next.style.backgroundImage =
        `url("${image}")`;

    next.classList.add("active");
    current.classList.remove("active");

    state.bgIndex =
        state.bgIndex === 0 ? 1 : 0;
}


function updateLens(image) {
    if (!image) return;

    if (DOM.orreryLensBase) {
        DOM.orreryLensBase.style.backgroundImage =
            `url("${image}")`;
    }

    if (DOM.orreryLensIris) {
        DOM.orreryLensIris.style.backgroundImage =
            `url("${image}")`;

        DOM.orreryLensIris.animate(
            [
                {
                    clipPath:
                        "circle(0% at 50% 50%)"
                },
                {
                    clipPath:
                        "circle(100% at 50% 50%)"
                }
            ],
            {
                duration: 800,
                easing: "cubic-bezier(.2,.7,.2,1)",
                fill: "forwards"
            }
        );
    }
}


/* =========================================================
   NAVIGATION
========================================================= */

function bindNavigation() {
    DOM.openNav?.addEventListener(
        "click",
        openArchive
    );

    DOM.closeNav?.addEventListener(
        "click",
        closeArchive
    );

    DOM.drawerBackdrop?.addEventListener(
        "click",
        closeArchive
    );

    document
        .querySelectorAll("[data-knowledge]")
        .forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();

                const topic =
                    link.dataset.knowledge;

                showKnowledge(topic);
            });
        });
}


function openArchive() {
    DOM.sideArchive?.classList.add("open");
    DOM.drawerBackdrop?.classList.add("visible");

    DOM.sideArchive?.setAttribute(
        "aria-hidden",
        "false"
    );

    DOM.openNav?.setAttribute(
        "aria-expanded",
        "true"
    );

    document.body.style.overflow = "hidden";
}


function closeArchive() {
    DOM.sideArchive?.classList.remove("open");
    DOM.drawerBackdrop?.classList.remove("visible");

    DOM.sideArchive?.setAttribute(
        "aria-hidden",
        "true"
    );

    DOM.openNav?.setAttribute(
        "aria-expanded",
        "false"
    );

    document.body.style.overflow = "";
}


/* =========================================================
   KNOWLEDGE
========================================================= */

function showKnowledge(topic) {
    const messages = {
        vedic:
            "Vedic sound theory explores the relationship between svara, nada, rhythm, time and consciousness.",

        geometry:
            "Sacred geometry examines proportional relationships, symmetry and recurring mathematical structures found across traditional visual systems.",

        nada:
            "Nada Yoga treats sound as a contemplative discipline, distinguishing external audible sound from subtler internal modes of listening."
    };

    const message =
        messages[topic] ||
        "Knowledge module unavailable.";

    DOM.playerMessage.textContent = message;
}


/* =========================================================
   PLAYER CONTROLS
========================================================= */

function bindPlayerControls() {
    DOM.playBtn?.addEventListener(
        "click",
        togglePlayback
    );

    DOM.prevBtn?.addEventListener(
        "click",
        previousRaag
    );

    DOM.nextBtn?.addEventListener(
        "click",
        nextRaag
    );

    DOM.progressBar?.addEventListener(
        "click",
        seekFromProgress
    );
}


function togglePlayback() {
    if (!state.playerReady || !state.player) {
        return;
    }

    const playerState =
        state.player.getPlayerState();

    if (
        playerState ===
        YT.PlayerState.PLAYING
    ) {
        state.player.pauseVideo();
    } else {
        state.player.playVideo();
    }
}


function previousRaag() {
    const index =
        (state.currentIndex - 1 + RAAGS.length) %
        RAAGS.length;

    setRaag(index, true);
}


function nextRaag() {
    const index =
        (state.currentIndex + 1) %
        RAAGS.length;

    setRaag(index, true);
}


/* =========================================================
   YOUTUBE API
========================================================= */

function loadYouTubeAPI() {
    if (
        window.YT &&
        typeof window.YT.Player === "function"
    ) {
        createYouTubePlayer();
        return;
    }

    const previousCallback =
        window.onYouTubeIframeAPIReady;

    window.onYouTubeIframeAPIReady = () => {
        if (typeof previousCallback === "function") {
            previousCallback();
        }

        createYouTubePlayer();
    };
}


function createYouTubePlayer() {
    if (!DOM.youtubePlayer) return;

    if (state.player) return;

    state.player =
        new YT.Player(
            DOM.youtubePlayer,
            {
                width: "1",
                height: "1",

                playerVars: {
                    autoplay: 0,
                    controls: 0,
                    disablekb: 1,
                    fs: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                    playsinline: 1,
                    rel: 0,
                    listType: "playlist",
                    list: PLAYLIST_ID
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
    state.playerReady = true;

    DOM.playBtn.disabled = false;

    DOM.playerMessage.textContent =
        "Listening system ready.";

    DOM.playerLabel.textContent =
        "READY";

    setStatus("READY", true);

    /*
     * Playlist starts at index 0.
     */
    loadTrack(0, false);
}


function loadTrack(index, shouldPlay = false) {
    if (
        !state.playerReady ||
        !state.player
    ) {
        return;
    }

    const safeIndex =
        ((index % TOTAL_TRACKS) +
            TOTAL_TRACKS) %
        TOTAL_TRACKS;

    state.currentTime = 0;
    state.duration = 0;

    updateProgress();

    try {
        state.player.playVideoAt(safeIndex);

        if (!shouldPlay) {
            state.player.pauseVideo();
        }
    } catch (error) {
        console.warn(
            "Unable to load playlist track:",
            error
        );
    }

    DOM.playerMessage.textContent =
        `${RAAGS[safeIndex].name} selected.`;

    DOM.playerLabel.textContent =
        shouldPlay
            ? "PLAYING"
            : "READY";
}


function onYouTubeStateChange(event) {
    if (!window.YT) return;

    switch (event.data) {
        case YT.PlayerState.UNSTARTED:
            state.isPlaying = false;
            break;

        case YT.PlayerState.BUFFERING:
            state.isPlaying = false;

            DOM.playerLabel.textContent =
                "BUFFERING";

            setStatus("BUFFERING", true);
            break;

        case YT.PlayerState.PLAYING:
            state.isPlaying = true;

            DOM.playBtn.textContent = "Ⅱ";
            DOM.playBtn.setAttribute(
                "aria-label",
                "Pause"
            );

            DOM.playerLabel.textContent =
                "PLAYING";

            DOM.playerMessage.textContent =
                `Now listening · ${RAAGS[state.currentIndex].name}`;

            DOM.body.classList.add("playing");

            setStatus("PLAYING", true);

            startProgressLoop();
            break;

        case YT.PlayerState.PAUSED:
            state.isPlaying = false;

            DOM.playBtn.textContent = "▶";
            DOM.playBtn.setAttribute(
                "aria-label",
                "Play"
            );

            DOM.playerLabel.textContent =
                "PAUSED";

            DOM.body.classList.remove("playing");

            stopProgressLoop();
            break;

        case YT.PlayerState.ENDED:
            state.isPlaying = false;

            DOM.body.classList.remove("playing");

            stopProgressLoop();

            nextRaag();

            break;
    }
}


function onYouTubeError(event) {
    console.warn(
        "YouTube player error:",
        event.data
    );

    DOM.playerMessage.textContent =
        "The listening source could not be loaded.";

    DOM.playerLabel.textContent =
        "SOURCE ERROR";

    setStatus("SOURCE ERROR", false);
}


/* =========================================================
   PROGRESS
========================================================= */

function startProgressLoop() {
    stopProgressLoop();

    state.progressTimer =
        window.setInterval(
            updateProgress,
            100
        );
}


function stopProgressLoop() {
    if (state.progressTimer) {
        clearInterval(
            state.progressTimer
        );

        state.progressTimer = null;
    }
}


function updateProgress() {
    if (
        !state.playerReady ||
        !state.player
    ) {
        return;
    }

    try {
        state.currentTime =
            state.player.getCurrentTime() || 0;

        state.duration =
            state.player.getDuration() || 0;
    } catch {
        return;
    }

    const percentage =
        state.duration > 0
            ? (state.currentTime /
                state.duration) *
              100
            : 0;

    DOM.progressFill.style.width =
        `${percentage}%`;

    DOM.progressBar.style.setProperty(
        "--progress",
        `${percentage}%`
    );

    DOM.timeCurrent.textContent =
        formatTime(state.currentTime);

    DOM.timeDuration.textContent =
        formatTime(state.duration);
}


function seekFromProgress(event) {
    if (
        !state.playerReady ||
        !state.player ||
        !state.duration
    ) {
        return;
    }

    const rect =
        DOM.progressBar.getBoundingClientRect();

    const percentage =
        Math.min(
            1,
            Math.max(
                0,
                (event.clientX - rect.left) /
                rect.width
            )
        );

    state.player.seekTo(
        percentage * state.duration,
        true
    );
}


/* =========================================================
   TIME
========================================================= */

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) {
        return "0:00";
    }

    seconds =
        Math.max(
            0,
            Math.floor(seconds)
        );

    const minutes =
        Math.floor(seconds / 60);

    const remaining =
        seconds % 60;

    return `${minutes}:${String(
        remaining
    ).padStart(2, "0")}`;
}


/* =========================================================
   STATUS
========================================================= */

function setStatus(text, healthy = true) {
    if (DOM.statusText) {
        DOM.statusText.textContent =
            text;
    }

    if (DOM.statusDot) {
        DOM.statusDot.style.background =
            healthy
                ? "var(--gold)"
                : "#8d4b4b";

        DOM.statusDot.style.boxShadow =
            healthy
                ? "0 0 8px var(--gold)"
                : "0 0 8px #8d4b4b";
    }
}


/* =========================================================
   KEYBOARD
========================================================= */

function bindKeyboard() {
    document.addEventListener(
        "keydown",
        (event) => {
            /*
             * Don't hijack keyboard input when
             * the user is interacting with a form field.
             */
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
                case "ArrowLeft":
                    event.preventDefault();
                    previousRaag();
                    break;

                case "ArrowRight":
                    event.preventDefault();
                    nextRaag();
                    break;

                case " ":
                    event.preventDefault();
                    togglePlayback();
                    break;

                case "Escape":
                    closeArchive();
                    break;

                case "m":
                case "M":
                    toggleMute();
                    break;
            }
        }
    );
}


/* =========================================================
   MUTE
========================================================= */

function toggleMute() {
    if (
        !state.playerReady ||
        !state.player
    ) {
        return;
    }

    try {
        if (state.player.isMuted()) {
            state.player.unMute();
            DOM.playerMessage.textContent =
                "Sound restored.";
        } else {
            state.player.mute();
            DOM.playerMessage.textContent =
                "Sound muted.";
        }
    } catch {
        /* Ignore player API errors. */
    }
}


/* =========================================================
   RESPONSIVE REFLOW
========================================================= */

window.addEventListener(
    "resize",
    () => {
        updatePlanetPositions();
    },
    { passive: true }
);


/* =========================================================
   TOUCH SWIPE ON CONTENT
========================================================= */

document.addEventListener(
    "touchstart",
    (event) => {
        if (!event.touches.length) return;

        state.touchStartX =
            event.touches[0].clientX;

        state.touchStartY =
            event.touches[0].clientY;
    },
    { passive: true }
);


document.addEventListener(
    "touchend",
    (event) => {
        if (!event.changedTouches.length) {
            return;
        }

        const dx =
            event.changedTouches[0].clientX -
            state.touchStartX;

        const dy =
            event.changedTouches[0].clientY -
            state.touchStartY;

        /*
         * Only treat reasonably horizontal
         * swipes as navigation gestures.
         */
        if (
            Math.abs(dx) > 70 &&
            Math.abs(dx) > Math.abs(dy) * 1.3
        ) {
            if (dx < 0) {
                nextRaag();
            } else {
                previousRaag();
            }
        }
    },
    { passive: true }
);


/* =========================================================
   ACCESSIBILITY
========================================================= */

function updateAccessibility() {
    DOM.playBtn?.setAttribute(
        "aria-label",
        state.isPlaying
            ? "Pause"
            : "Play"
    );
}


/* =========================================================
   SAFE HTML
========================================================= */

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


/* =========================================================
   PAGE VISIBILITY
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {
        if (
            document.hidden &&
            state.isPlaying
        ) {
            /*
             * Do not forcibly pause.
             * Browser / YouTube policy controls
             * background playback.
             */
            return;
        }
    }
);


/* =========================================================
   GLOBAL DEBUG HANDLE
========================================================= */

window.RAAGLY = {
    RAAGS,

    state,

    next: nextRaag,

    previous: previousRaag,

    select(index) {
        setRaag(index, false);
    },

    play() {
        if (state.playerReady) {
            state.player.playVideo();
        }
    },

    pause() {
        if (state.playerReady) {
            state.player.pauseVideo();
        }
    }
};


/* =========================================================
   END
========================================================= */
