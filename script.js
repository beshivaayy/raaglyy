/* =========================================================
   RAAGLYY
   Sound Beyond Silence

   Playback:
   - YouTube IFrame API = custom Raaglyy player
   - Spotify Embed = native Spotify player
   ========================================================= */


/* =========================================================
   RAAG DATA
   ========================================================= */

const raags = [

  [
    'Yaman',
    'राग यमन',
    'Evening',
    'A luminous evening raag built around the tivra madhyam. Its character is expansive, serene and quietly devotional.',
    ['Evening', 'Tivra Ma', 'Shanta']
  ],

  [
    'Bhairav',
    'राग भैरव',
    'Dawn',
    'A grave morning raag whose oscillating komal Re and Dha create an austere, meditative atmosphere.',
    ['Dawn', 'Gambhir', 'Bhakti']
  ],

  [
    'Malkauns',
    'राग मालकौंस',
    'Late Night',
    'A pentatonic night raag with a deep, inward and almost elemental character.',
    ['Night', 'Pentatonic', 'Gambhir']
  ],

  [
    'Darbari Kanada',
    'राग दरबारी कानड़ा',
    'Late Night',
    'A majestic late-night raag known for its weight, depth and slow, deliberate ornamentation.',
    ['Night', 'Gambhir', 'Royal']
  ],

  [
    'Bageshri',
    'राग बागेश्री',
    'Night',
    'An intimate night raag shaped by longing, tenderness and quiet introspection.',
    ['Night', 'Shringara', 'Komal']
  ],

  [
    'Todi',
    'राग तोड़ी',
    'Late Morning',
    'A highly expressive morning raag with a distinctive microtonal and contemplative personality.',
    ['Morning', 'Gambhir', 'Viraha']
  ],

  [
    'Marwa',
    'राग मारवा',
    'Sunset',
    'A tense, austere sunset raag suspended between daylight and darkness.',
    ['Sunset', 'Tension', 'Dhyana']
  ],

  [
    'Desh',
    'राग देश',
    'Night',
    'A graceful raag carrying warmth, nostalgia and a distinctly lyrical contour.',
    ['Night', 'Lyrical', 'Monsoon']
  ],

  [
    'Kafi',
    'राग काफी',
    'Evening',
    'Earthy and folk-inflected, Kafi balances sweetness with an understated naturalness.',
    ['Evening', 'Folk', 'Lyrical']
  ]

];


/* =========================================================
   CONFIG
   ========================================================= */

const YOUTUBE_PLAYLIST_ID = 'PLJRipbfj__b0';

const SPOTIFY_PLAYLIST_ID = '1uCwKa8NKlV4fywgZ2gnMp';


/* =========================================================
   DOM HELPERS
   ========================================================= */

const $ = selector => document.querySelector(selector);


/* =========================================================
   STATE
   ========================================================= */

let index = 0;

let player = null;

let youtubeReady = false;

let playerReady = false;

let updateTimer = null;

let source = 'youtube';

let isSeeking = false;


/* =========================================================
   AUDIO ART
   ========================================================= */

function art(i) {

  const hue = (i * 41) % 360;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 400"
    >

      <defs>

        <radialGradient id="g">

          <stop
            stop-color="hsl(${hue} 38% 45%)"
          />

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


/* =========================================================
   TIME FORMAT
   ========================================================= */

function formatTime(seconds) {

  if (!Number.isFinite(seconds) || seconds < 0) {
    return '00:00';
  }

  const minutes = Math.floor(seconds / 60);

  const secs = Math.floor(seconds % 60);

  return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

}


/* =========================================================
   BACKGROUND
   ========================================================= */

function updateBackground() {

  const hue = (index * 41) % 360;

  $('#bg').style.background = `
    radial-gradient(
      circle at 68% 48%,
      hsl(${hue} 30% 28% / .28),
      transparent 30%
    ),
    radial-gradient(
      circle at 30% 65%,
      hsl(${(hue + 55) % 360} 30% 25% / .12),
      transparent 25%
    ),
    #08070a
  `;

}


/* =========================================================
   RENDER MAIN CONTENT
   ========================================================= */

function render() {

  const r = raags[index];

  const number = String(index + 1).padStart(2, '0');

  $('#num').textContent = number;

  $('#prahar').textContent = r[2].toUpperCase();

  $('#title').textContent = r[0];

  $('#hindi').textContent = r[1];

  $('#desc').textContent = r[3];

  $('#time').textContent = r[2].toUpperCase();

  $('#coreName').textContent = r[0].toUpperCase();

  $('#count').textContent =
    `${number} / 27`;

  $('#degree').textContent =
    `${number} / 27`;

  $('#captionCount').textContent =
    `${number} — 27`;


  updateBackground();


  /* TAGS */

  $('#tags').innerHTML = r[4]
    .map(tag => `<span>${tag}</span>`)
    .join('');


  /* =======================================================
     ORBIT PLANETS
     ======================================================= */

  $('#planets').innerHTML = '';

  const visiblePlanets = Math.min(raags.length, 9);

  for (let i = 0; i < visiblePlanets; i++) {

    const angle =
      (Math.PI * 2 * i / visiblePlanets) -
      Math.PI / 2;

    const x =
      Math.cos(angle) * 245;

    const y =
      Math.sin(angle) * 125;


    const planet =
      document.createElement('button');


    planet.type = 'button';

    planet.className =
      'planet ' +
      (i === index ? 'active' : '');


    planet.style.setProperty(
      '--x',
      `${x}px`
    );

    planet.style.setProperty(
      '--y',
      `${y}px`
    );


    planet.innerHTML = `
      <img
        src="${art(i)}"
        alt="${raags[i][0]}"
      >

      <label>
        ${raags[i][0].toUpperCase()}
      </label>
    `;


    planet.addEventListener(
      'click',
      () => selectRaag(i)
    );


    $('#planets').appendChild(planet);

  }


  /* =======================================================
     BOTTOM RAIL
     ======================================================= */

  $('#rail').innerHTML = raags
    .map((r, i) => `

      <button
        type="button"
        class="rail-item ${i === index ? 'active' : ''}"
        data-i="${i}"
      >

        <img
          src="${art(i)}"
          alt=""
        >

        <span>
          ${r[0]}
        </span>

      </button>

    `)
    .join('');


  document
    .querySelectorAll('.rail-item')
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          selectRaag(
            Number(button.dataset.i)
          );

        }
      );

    });


  /* =======================================================
     ARCHIVE
     ======================================================= */

  $('#archive').innerHTML = raags
    .map((r, i) => `

      <button
        type="button"
        class="${i === index ? 'active' : ''}"
        data-i="${i}"
      >

        ${String(i + 1).padStart(2, '0')}
        —
        ${r[0]}

      </button>

    `)
    .join('');


  document
    .querySelectorAll('#archive button')
    .forEach(button => {

      button.addEventListener(
        'click',
        () => {

          selectRaag(
            Number(button.dataset.i)
          );

          closeDrawer();

        }
      );

    });


  updatePlayerUI();

}


/* =========================================================
   SELECT RAAG
   ========================================================= */

function selectRaag(newIndex) {

  index =
    (newIndex + raags.length) %
    raags.length;


  render();


  /*
   * Only automatically move YouTube.
   * Spotify's normal Embed does not expose
   * arbitrary track selection through the iframe.
   */

  if (
    source === 'youtube' &&
    playerReady &&
    player
  ) {

    player.loadPlaylist({
      list: YOUTUBE_PLAYLIST_ID,
      listType: 'playlist',
      index: index,
      startSeconds: 0
    });

  }

}


/* =========================================================
   YOUTUBE API
   ========================================================= */

window.onYouTubeIframeAPIReady = function () {

  youtubeReady = true;

  createYouTubePlayer();

};


function createYouTubePlayer() {

  if (!youtubeReady || player) {
    return;
  }


  player =
    new YT.Player(
      'youtubeHost',
      {

        width: '1',

        height: '1',

        playerVars: {

          autoplay: 0,

          controls: 0,

          disablekb: 1,

          fs: 0,

          modestbranding: 1,

          playsinline: 1,

          rel: 0,

          listType: 'playlist',

          list: YOUTUBE_PLAYLIST_ID

        },


        events: {

          onReady: onYouTubeReady,

          onStateChange: onYouTubeStateChange,

          onError: onYouTubeError

        }

      }
    );

}


/* =========================================================
   YOUTUBE READY
   ========================================================= */

function onYouTubeReady(event) {

  playerReady = true;

  player =
    event.target;


  /*
   * Load the playlist at the currently
   * selected Raag.
   */

  player.cuePlaylist({

    list: YOUTUBE_PLAYLIST_ID,

    listType: 'playlist',

    index: index

  });


  updatePlayerUI();

}


/* =========================================================
   YOUTUBE STATE
   ========================================================= */

function onYouTubeStateChange(event) {

  if (!player) {
    return;
  }


  if (
    event.data === YT.PlayerState.PLAYING
  ) {

    setPlayingUI(true);

    startProgressLoop();

  }


  else if (
    event.data === YT.PlayerState.PAUSED
  ) {

    setPlayingUI(false);

    stopProgressLoop();

  }


  else if (
    event.data === YT.PlayerState.ENDED
  ) {

    stopProgressLoop();

    /*
     * YouTube playlist normally handles next.
     * We update our selected index based on the
     * playlist position.
     */

    const playlistIndex =
      player.getPlaylistIndex();


    if (
      Number.isInteger(playlistIndex) &&
      playlistIndex >= 0 &&
      playlistIndex < raags.length
    ) {

      index = playlistIndex;

      render();

    }

  }


  else if (
    event.data === YT.PlayerState.BUFFERING
  ) {

    $('#state').textContent =
      'BUFFERING';

  }

}


/* =========================================================
   YOUTUBE ERROR
   ========================================================= */

function onYouTubeError() {

  $('#state').textContent =
    'PLAYBACK UNAVAILABLE';

  setPlayingUI(false);

}


/* =========================================================
   PLAY / PAUSE
   ========================================================= */

function togglePlay() {

  if (
    source !== 'youtube'
  ) {

    switchSource('youtube');

    return;

  }


  if (
    !playerReady ||
    !player
  ) {

    $('#state').textContent =
      'LOADING PLAYER…';

    return;

  }


  const state =
    player.getPlayerState();


  if (
    state === YT.PlayerState.PLAYING
  ) {

    player.pauseVideo();

  }

  else {

    /*
     * If playlist has not loaded correctly,
     * explicitly load the current index.
     */

    if (
      typeof player.getPlaylistIndex === 'function' &&
      player.getPlaylistIndex() < 0
    ) {

      player.loadPlaylist({

        list: YOUTUBE_PLAYLIST_ID,

        listType: 'playlist',

        index: index

      });

    }

    else {

      player.playVideo();

    }

  }

}


/* =========================================================
   NEXT
   ========================================================= */

function nextRaag() {

  if (
    source === 'youtube' &&
    playerReady &&
    player
  ) {

    const playlist =
      player.getPlaylist();


    const current =
      player.getPlaylistIndex();


    if (
      Array.isArray(playlist) &&
      playlist.length > 0
    ) {

      player.nextVideo();

      const next =
        current + 1 >= playlist.length
          ? 0
          : current + 1;


      if (next < raags.length) {

        index = next;

        render();

      }

      return;

    }

  }


  index =
    (index + 1) %
    raags.length;

  render();

}


/* =========================================================
   PREVIOUS
   ========================================================= */

function previousRaag() {

  if (
    source === 'youtube' &&
    playerReady &&
    player
  ) {

    const playlist =
      player.getPlaylist();


    const current =
      player.getPlaylistIndex();


    if (
      Array.isArray(playlist) &&
      playlist.length > 0
    ) {

      player.previousVideo();

      const previous =
        current - 1 < 0
          ? playlist.length - 1
          : current - 1;


      if (previous < raags.length) {

        index = previous;

        render();

      }

      return;

    }

  }


  index =
    (index - 1 + raags.length) %
    raags.length;

  render();

}


/* =========================================================
   PROGRESS LOOP
   ========================================================= */

function startProgressLoop() {

  stopProgressLoop();

  updateTimer =
    setInterval(
      updateProgress,
      250
    );

}


function stopProgressLoop() {

  if (updateTimer) {

    clearInterval(updateTimer);

    updateTimer = null;

  }

}


/* =========================================================
   PROGRESS
   ========================================================= */

function updateProgress() {

  if (
    source !== 'youtube' ||
    !playerReady ||
    !player ||
    isSeeking
  ) {

    return;

  }


  const duration =
    player.getDuration();


  const current =
    player.getCurrentTime();


  if (
    !Number.isFinite(duration) ||
    duration <= 0
  ) {

    return;

  }


  const percentage =
    Math.min(
      100,
      Math.max(
        0,
        (current / duration) * 100
      )
    );


  $('#seek').value =
    percentage;

  $('#fill').style.width =
    `${percentage}%`;


  $('#current').textContent =
    formatTime(current);


  $('#total').textContent =
    formatTime(duration);


  $('#duration').textContent =
    formatTime(duration);

}


/* =========================================================
   SEEK
   ========================================================= */

$('#seek').addEventListener(
  'input',
  event => {

    isSeeking = true;

    const percentage =
      Number(event.target.value);


    $('#fill').style.width =
      `${percentage}%`;


    if (
      playerReady &&
      player
    ) {

      const duration =
        player.getDuration();


      if (
        Number.isFinite(duration) &&
        duration > 0
      ) {

        const target =
          duration *
          (percentage / 100);


        $('#current').textContent =
          formatTime(target);

      }

    }

  }
);


$('#seek').addEventListener(
  'change',
  event => {

    if (
      playerReady &&
      player
    ) {

      const duration =
        player.getDuration();


      if (
        Number.isFinite(duration) &&
        duration > 0
      ) {

        const target =
          duration *
          (Number(event.target.value) / 100);


        player.seekTo(
          target,
          true
        );

      }

    }


    isSeeking = false;

  }
);


/* =========================================================
   PLAYING UI
   ========================================================= */

function setPlayingUI(active) {

  playing = active;

  $('#play').textContent =
    active ? 'Ⅱ' : '▶';


  $('#state').textContent =
    active
      ? 'NOW LISTENING'
      : 'READY TO LISTEN';


  $('#playerPanel')
    .classList
    .toggle(
      'playing',
      active
    );

}


/* =========================================================
   LEGACY STATE
   ========================================================= */

let playing = false;


/* =========================================================
   PLAYER UI
   ========================================================= */

function updatePlayerUI() {

  $('#current').textContent =
    '00:00';

  $('#total').textContent =
    '00:00';

  $('#duration').textContent =
    '—';

  $('#seek').value =
    0;

  $('#fill').style.width =
    '0%';


  if (
    source === 'spotify'
  ) {

    $('#state').textContent =
      'SPOTIFY PLAYER';

    return;

  }


  $('#state').textContent =
    'READY TO LISTEN';

}


/* =========================================================
   SOURCE SWITCHING
   ========================================================= */

function switchSource(nextSource) {

  source =
    nextSource;


  const youtube =
    source === 'youtube';

  const spotify =
    source === 'spotify';


  $('#sourceYT')
    .classList
    .toggle(
      'active',
      youtube
    );


  $('#sourceSpotify')
    .classList
    .toggle(
      'active',
      spotify
    );


  $('#youtubeControls')
    .classList
    .toggle(
      'hidden',
      !youtube
    );


  $('#spotifyControls')
    .classList
    .toggle(
      'visible',
      spotify
    );


  if (youtube) {

    if (
      playerReady &&
      player
    ) {

      player.unMute();

    }

    updatePlayerUI();

  }

  else {

    /*
     * Stop YouTube when moving to Spotify.
     */

    if (
      playerReady &&
      player
    ) {

      player.pauseVideo();

    }


    setPlayingUI(false);

    $('#state').textContent =
      'SPOTIFY PLAYER';

  }

}


/* =========================================================
   DRAWER
   ========================================================= */

function closeDrawer() {

  $('#drawer')
    .classList
    .remove('open');

  $('#veil')
    .classList
    .remove('open');

}


$('#menu').addEventListener(
  'click',
  () => {

    $('#drawer')
      .classList
      .add('open');

    $('#veil')
      .classList
      .add('open');

  }
);


$('#close').addEventListener(
  'click',
  closeDrawer
);


$('#veil').addEventListener(
  'click',
  closeDrawer
);


/* =========================================================
   PLAYER BUTTONS
   ========================================================= */

$('#play').addEventListener(
  'click',
  togglePlay
);


$('#next').addEventListener(
  'click',
  nextRaag
);


$('#prev').addEventListener(
  'click',
  previousRaag
);


/* =========================================================
   SOURCE BUTTONS
   ========================================================= */

$('#sourceYT').addEventListener(
  'click',
  () => switchSource('youtube')
);


$('#sourceSpotify').addEventListener(
  'click',
  () => switchSource('spotify')
);


/* =========================================================
   KEYBOARD
   ========================================================= */

document.addEventListener(
  'keydown',
  event => {

    /*
     * Don't hijack typing.
     */

    const tag =
      document.activeElement?.tagName;


    if (
      tag === 'INPUT' ||
      tag === 'TEXTAREA'
    ) {

      return;

    }


    if (event.code === 'Space') {

      event.preventDefault();

      togglePlay();

    }


    if (event.code === 'ArrowRight') {

      nextRaag();

    }


    if (event.code === 'ArrowLeft') {

      previousRaag();

    }

  }
);


/* =========================================================
   INITIAL RENDER
   ========================================================= */

render();

switchSource('youtube');
