/**
 * RAAGLY — script.js
 * Immersive Single-Page Engine
 */

const raagData = [
    { name: "Asavari", dev: "असावरी", prahar: "Late Morning", desc: "A raag of renunciation and melancholy, traditionally associated with the late morning hours when the sun begins its ascent.", assoc: ["Property-related issues", "Blood-related problems", "Violence", "Accidents"], complexity: 12, accent: "#b87333", bg: "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1200" },
    { name: "Bhairav", dev: "भैरव", prahar: "Early Morning", desc: "The king of morning raags, evoking dawn, contemplative stillness and spiritual discipline.", assoc: ["Headache"], complexity: 16, accent: "#c5a059", bg: "https://images.unsplash.com/photo-1590050752117-23a9d7fc2140?auto=format&fit=crop&q=80&w=1200" },
    { name: "Bhairavi", dev: "भैरवी", prahar: "Morning / Closure", desc: "A universally loved raag, often used to conclude concerts with a feeling of peaceful surrender.", assoc: ["Insomnia", "Property-related issues", "Blood-related problems", "Violence", "Accidents"], complexity: 24, accent: "#752735", bg: "https://images.unsplash.com/photo-1518548419970-58e3b4079ca2?auto=format&fit=crop&q=80&w=1200" },
    { name: "Bhoop", dev: "भूप", prahar: "Evening", desc: "A bright and satisfyng raag that evokes a sense of calm satisfyng accomplishment.", assoc: ["Blood pressure"], complexity: 8, accent: "#c5a059", bg: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&q=80&w=1200" },
    { name: "Brindabani Sarang", dev: "वृन्दावनी सारंग", prahar: "Afternoon", desc: "A raag associated with the thirst of the afternoon and the desire for relief.", assoc: ["Relationship issues", "Money-related / financial troubles"], complexity: 10, accent: "#e6be8a", bg: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=1200" },
    { name: "Darbari", dev: "दरबारी", prahar: "Late Night", desc: "A grave and majestic raag composed by Tansen for the royal courts of Akbar.", assoc: ["Heart disease", "Problems related to children", "Honour", "Getting a position in life", "Relationships with father", "Government-related matters"], complexity: 20, accent: "#1e272e", bg: "https://images.unsplash.com/photo-1505933332464-44565780a87a?auto=format&fit=crop&q=80&w=1200" },
    { name: "Gandharva", dev: "गन्धर्व", prahar: "Evening", desc: "A celestial melody representing the music of the divine beings.", assoc: ["Education-related troubles", "Fights with siblings", "Thyroid and hormonal imbalance", "Communication", "Business", "Friends"], complexity: 14, accent: "#d2dae2", bg: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200" },
    { name: "Hansdhawani", dev: "हंसध्वनि", prahar: "Evening", desc: "The 'sound of the swan', an auspicious and bright melody of the evening.", assoc: ["Mental peace", "Relations with mother", "Happiness", "Calmness", "Family atmosphere", "Emotional trauma", "Pain"], complexity: 9, accent: "#fff200", bg: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200" },
    { name: "Jaunpuri", dev: "जौनपुरी", prahar: "Late Morning", desc: "A brilliant raag of the morning, blending sadness with a glimmer of hope.", assoc: ["Profession-related issues", "Long-term diseases", "Chronic troubles"], complexity: 13, accent: "#3c6382", bg: "https://images.unsplash.com/photo-1500382017468-9049fee790ce?auto=format&fit=crop&q=80&w=1200" },
    { name: "Jay Jaywanti", dev: "जयजयवन्ती", prahar: "Night", desc: "A majestic melody creating an atmosphere of deep romance and devotion.", assoc: ["Weakness"], complexity: 18, accent: "#ff9f1c", bg: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=1200" },
    { name: "Kalyan", dev: "कल्याण", prahar: "Evening", desc: "A grand evening raag representing the transition from day to night.", assoc: ["Education-related troubles", "Fights with siblings", "Thyroid and hormonal imbalance", "Communication", "Business", "Friends"], complexity: 7, accent: "#e67e22", bg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=1200" },
    { name: "Khamaj", dev: "खमाज", prahar: "Late Evening", desc: "A raag of light, flirtatious beauty and romantic charm.", assoc: ["Acidity"], complexity: 9, accent: "#c0392b", bg: "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=1200" },
    { name: "Kirwani", dev: "किरवाणी", prahar: "Night", assoc: ["Profession-related issues", "Long-term diseases", "Chronic troubles"], complexity: 15, accent: "#2980b9", bg: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200", desc: "A melodic raag that feels both ancient and universally modern." },
    { name: "Komal", dev: "कोमल", prahar: "Morning", assoc: ["Mental peace", "Relations with mother", "Happiness", "Calmness", "Family atmosphere", "Emotional trauma", "Pain"], complexity: 6, accent: "#27ae60", bg: "https://images.unsplash.com/photo-1510784722466-f2aa9c52fed6?auto=format&fit=crop&q=80&w=1200", desc: "Soft notes creating an inward atmosphere of empathy." },
    { name: "Lalit", dev: "ललित", prahar: "Early Dawn", assoc: ["Asthma"], complexity: 19, accent: "#f39c12", bg: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&q=80&w=1200", desc: "A unique dawn melody that captures the exact moment of awakening." },
    { name: "Madhuwanti", dev: "मधुवन्ती", prahar: "Afternoon", assoc: ["Depression", "Mental stress"], complexity: 11, accent: "#f1c40f", bg: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200", desc: "Meaning 'sweet as honey', it evokes a sense of romantic longing." },
    { name: "Malkauns", dev: "मालकौंस", prahar: "Midnight", assoc: ["Asthma"], complexity: 5, accent: "#8e44ad", bg: "https://images.unsplash.com/photo-1516339901600-2e1a62dc0c45?auto=format&fit=crop&q=80&w=1200", desc: "An ancient, serious raag meant to be performed in the dead of night." },
    { name: "Nat Bhairav", dev: "नट भैरव", prahar: "Morning", assoc: ["Relationship issues", "Money-related troubles"], complexity: 13, accent: "#d35400", bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200", desc: "A majestic morning raag blending devotion with grace." },
    { name: "Neelambri", dev: "नीलाम्बरी", prahar: "Night", assoc: ["Profession-related issues", "Long-term diseases", "Chronic troubles"], complexity: 10, accent: "#2c3e50", bg: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&q=80&w=1200", desc: "Translates to 'blue sky', creating a soothing night atmosphere." },
    { name: "Pilu", dev: "पिलू", prahar: "Flexible", assoc: ["Anemia"], complexity: 8, accent: "#16a085", bg: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200", desc: "A light classical raag incorporating many regional colors." },
    { name: "Poorvi", dev: "पूर्वी", prahar: "Evening / Sunset", assoc: ["Education-related troubles", "Fights with siblings", "Thyroid and hormonal imbalances", "PCOD", "Cramps", "Communication", "Business", "Friends"], complexity: 15, accent: "#e74c3c", bg: "https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?auto=format&fit=crop&q=80&w=1200", desc: "A serious evening melody performed as the sun sets." },
    { name: "Shadbhinna", dev: "षाड्भिन्न", prahar: "Night", assoc: ["Problems related to children", "Honour", "Getting a position in life", "Relationships with father", "Government"], complexity: 22, accent: "#34495e", bg: "https://images.unsplash.com/photo-1436891620584-47fd0e565afb?auto=format&fit=crop&q=80&w=1200", desc: "A profound night raag with intricate structure." },
    { name: "Shivranjani", dev: "शिवरञ्जनी", prahar: "Night", assoc: ["Memory loss"], complexity: 5, accent: "#2c2c54", bg: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=1200", desc: "Highly emotive and melancholic, often used in folk and film music." },
    { name: "Shudh", dev: "शुद्ध", prahar: "Morning", assoc: ["Mental peace", "Relations with mother", "Family atmosphere", "Emotional trauma", "Pain", "Missing motivation", "Missing purpose", "Intangible happiness"], complexity: 7, accent: "#f4f4f4", bg: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1200", desc: "Focuses on pure notes to ground the mind." },
    { name: "Tanpura", dev: "तानपुरा", prahar: "Continuous", assoc: ["Problems related to children", "Honour", "Getting a position in life", "Relationships with father", "Government"], complexity: 30, accent: "#c5a059", bg: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1200", desc: "The foundational drone that represents the cosmic sound 'Om'." },
    { name: "Todi", dev: "तोडी", prahar: "Morning", assoc: ["Property-related issues", "Blood-related problems", "Violence", "Accidents"], complexity: 19, accent: "#7f8c8d", bg: "https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?auto=format&fit=crop&q=80&w=1200", desc: "A grand, deeply devotional morning melody." },
    { name: "Yaman", dev: "यमन", prahar: "Evening", assoc: ["Mental peace", "Relations with mother", "Happiness", "Calmness", "Family atmosphere", "Emotional trauma", "Pain"], complexity: 9, accent: "#ffda79", bg: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&q=80&w=1200", desc: "Often the first raag taught, representing peace and quiet joy." }
];

let player;
let currentIndex = 0;
let isPlaying = false;
const PLAYLIST_ID = 'PLJRipbfj__b0';

/**
 * INITIALIZATION
 */
window.onYouTubeIframeAPIReady = () => {
    player = new YT.Player('youtube-player', {
        height: '0', width: '0',
        playerVars: { listType: 'playlist', list: PLAYLIST_ID, autoplay: 0, controls: 0 },
        events: {
            onReady: () => {
                document.getElementById('status-text').textContent = "READY TO LISTEN";
                initUI();
            },
            onStateChange: (e) => {
                const btn = document.getElementById('play-btn');
                if (e.data === YT.PlayerState.PLAYING) {
                    isPlaying = true; btn.textContent = 'Ⅱ';
                    document.querySelector('.main-stage').classList.add('playing');
                } else {
                    isPlaying = false; btn.textContent = '▶';
                    document.querySelector('.main-stage').classList.remove('playing');
                }
                syncPlayerState();
            }
        }
    });
};

function initUI() {
    renderRail();
    renderArchive();
    loadRaag(0);
    
    // Global Listeners
    document.getElementById('play-btn').onclick = togglePlay;
    document.getElementById('next-btn').onclick = nextRaag;
    document.getElementById('prev-btn').onclick = prevRaag;
    document.getElementById('open-nav').onclick = () => document.getElementById('side-archive').classList.add('open');
    document.getElementById('close-nav').onclick = () => document.getElementById('side-archive').classList.remove('open');
    document.getElementById('progress-bar').onclick = seek;
    
    // Progress Loop
    setInterval(updateProgress, 500);
}

/**
 * CORE LOGIC
 */
function loadRaag(index) {
    currentIndex = index;
    const data = raagData[index];
    if (!data) return;

    // 1. Text Update
    document.getElementById('raag-name').textContent = `Raag ${data.name}`;
    document.getElementById('raag-hindi').textContent = data.dev;
    document.getElementById('raag-prahar').textContent = data.prahar;
    document.getElementById('raag-desc').textContent = data.desc || "Traditional Indian melody.";
    
    // 2. Associations Update
    const assocList = document.getElementById('raag-associations');
    assocList.innerHTML = '';
    data.assoc.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        assocList.appendChild(li);
    });

    // 3. Theme Update
    document.documentElement.style.setProperty('--accent', data.accent);
    updateBackground(data.bg);
    generateMandala(data.complexity);

    // 4. Player Update
    if (player && player.getPlaylist()) {
        player.playVideoAt(index);
    }

    // 5. Rail UI update
    document.querySelectorAll('.rail-item').forEach((item, i) => {
        item.classList.toggle('active', i === index);
        if (i === index) item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
}

function updateBackground(imgUrl) {
    const bg1 = document.getElementById('bg-1');
    const bg2 = document.getElementById('bg-2');
    const active = bg1.classList.contains('active') ? bg1 : bg2;
    const next = active === bg1 ? bg2 : bg1;

    next.style.backgroundImage = `url('${imgUrl}')`;
    next.classList.add('active');
    active.classList.remove('active');
}

function generateMandala(complexity) {
    const layersGroup = document.getElementById('mandala-layers');
    layersGroup.innerHTML = '';
    
    // Base Rings
    for (let i = 0; i < 3; i++) {
        const ring = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        ring.setAttribute("cx", "200"); ring.setAttribute("cy", "200");
        ring.setAttribute("r", 80 + (i * 30));
        ring.setAttribute("fill", "none");
        ring.setAttribute("stroke", "var(--gold)");
        ring.setAttribute("stroke-width", "0.5");
        ring.setAttribute("opacity", 0.15);
        layersGroup.appendChild(ring);
    }

    // Complexity-based Petals
    const configs = [
        { count: complexity, r: 120, speed: 'slow', op: 0.3 },
        { count: Math.floor(complexity/1.5), r: 150, speed: 'reverse', op: 0.2 },
        { count: Math.floor(complexity * 1.5), r: 180, speed: 'mid', op: 0.1 }
    ];

    configs.forEach(cfg => {
        const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
        g.setAttribute("class", `mandala-layer ${cfg.speed}`);
        
        for (let i = 0; i < cfg.count; i++) {
            const angle = (i / cfg.count) * 360;
            const shape = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            shape.setAttribute("x", "190");
            shape.setAttribute("y", 200 - cfg.r);
            shape.setAttribute("width", "20");
            shape.setAttribute("height", "20");
            shape.setAttribute("fill", "none");
            shape.setAttribute("stroke", "var(--accent)");
            shape.setAttribute("stroke-width", "0.5");
            shape.setAttribute("opacity", cfg.op);
            shape.setAttribute("transform", `rotate(${angle}, 200, 200)`);
            g.appendChild(shape);
        }
        layersGroup.appendChild(g);
    });
}

function renderRail() {
    const rail = document.getElementById('selector-rail');
    raagData.forEach((r, i) => {
        const div = document.createElement('div');
        div.className = 'rail-item';
        div.innerHTML = `<span class="num">${String(i+1).padStart(2, '0')}</span><span class="name">${r.name}</span>`;
        div.onclick = () => loadRaag(i);
        rail.appendChild(div);
    });
}

function renderArchive() {
    const list = document.getElementById('archive-list');
    raagData.forEach((r, i) => {
        const li = document.createElement('li');
        li.textContent = `${String(i+1).padStart(2, '0')} — Raag ${r.name}`;
        li.onclick = () => { loadRaag(i); document.getElementById('side-archive').classList.remove('open'); };
        list.appendChild(li);
    });
}

/**
 * PLAYER ACTIONS
 */
function togglePlay() {
    if (!player) return;
    isPlaying ? player.pauseVideo() : player.playVideo();
}

function nextRaag() {
    let next = (currentIndex + 1) % raagData.length;
    loadRaag(next);
}

function prevRaag() {
    let prev = (currentIndex - 1 + raagData.length) % raagData.length;
    loadRaag(prev);
}

function updateProgress() {
    if (player && isPlaying) {
        const cur = player.getCurrentTime();
        const dur = player.getDuration();
        if (dur > 0) {
            const per = (cur / dur) * 100;
            document.getElementById('progress-fill').style.width = per + '%';
            document.getElementById('time-cur').textContent = formatTime(cur);
            document.getElementById('time-dur').textContent = formatTime(dur);
        }
    }
}

function seek(e) {
    const rect = this.getBoundingClientRect();
    const pos = (e.pageX - rect.left) / rect.width;
    const dur = player.getDuration();
    if (dur > 0) player.seekTo(pos * dur);
}

function formatTime(s) {
    let m = Math.floor(s / 60);
    let sec = M