const appElement = document.getElementById('app');
const btnPrivacy = document.getElementById('btnPrivacy');

let currentMode = null; // 'streamer' or 'friends'
let currentPack = null;
let currentDareIndex = -1;

function renderHomeScreen() {
    appElement.innerHTML = `
        <div class="screen home-screen active">
            <h1 class="hero-title">Are You Brave Enough ?<br>Unleash The Dare Packs !</h1>
            <p class="hero-subtitle">A party game filled with chaotic dares, unexpected moments,<br>and the kind of memories your group will talk about for weeks.</p>
            <div class="mode-buttons">
                <button class="mode-btn bg-green" onclick="selectMode('streamer')">
                    <div class="pack-badge trending-badge">Trending</div>
                    <div style="font-size: 4rem; margin-bottom: 10px;">🎙️</div>
                    <h2>Streamer mode</h2>
                    <p>Turn your stream into pure chaos with live dares, chat-triggered moments, and nonstop entertainment.</p>
                </button>
                <button class="mode-btn bg-blue" onclick="selectMode('friends')">
                    <div class="pack-badge trending-badge">Trending</div>
                    <div style="font-size: 4rem; margin-bottom: 10px;">👥</div>
                    <h2>Friends mode</h2>
                    <p>The fastest way to turn a normal hangout into nonstop laughter, chaos, and unforgettable moments.</p>
                </button>
                <button class="mode-btn bg-yellow" style="cursor: default;">
                    <h2 style="font-size: 2.2rem; margin:0;">Coming Soon!</h2>
                </button>
            </div>
        </div>
    `;
}

function selectMode(mode) {
    currentMode = mode;
    renderModeScreen();
}

function renderModeScreen() {
    const packs = currentMode === 'streamer' ? streamerDares : friendsDares;
    const modeTitle = currentMode === 'streamer' ? 'Streamer mode' : 'Friends mode';
    const modeIcon = currentMode === 'streamer' ? '🎙️' : '👥';
    const modeDesc = currentMode === 'streamer' 
        ? 'Turn your stream into pure chaos with live dares, chat-triggered moments, and nonstop entertainment.'
        : 'The fastest way to turn a normal hangout into nonstop laughter, chaos, and unforgettable moments.';
        
    let packsHtml = packs.map((pack, index) => `
        <div class="pack-card ${pack.color}" onclick="startGame(${index})">
            <div class="pack-header">
                <div class="pack-number">${index + 1}</div>
                <div class="pack-badge">Trending</div>
            </div>
            <div class="pack-icon">${modeIcon}</div>
            <div class="pack-title">${modeTitle}</div>
            <div class="pack-desc">${modeDesc}</div>
            <button class="btn-start">
                <span class="icon-box">▶</span> Start Game
            </button>
        </div>
    `).join('');

    appElement.innerHTML = `
        <div class="screen active">
            <div class="back-btn-container">
                <button class="btn-back" onclick="renderHomeScreen()">
                    <span>↩</span> Back
                </button>
            </div>
            <div class="selection-header" style="position: relative;">
                <h1 class="selection-title">${modeTitle}</h1>
                <p class="selection-subtitle">Choose a dare stack below and let the chaos begin</p>
                <div class="carousel-nav" style="position: absolute; right: 40px; top: 50%; transform: translateY(-50%); display: flex; gap: 10px;">
                    <button class="carousel-btn" onclick="scrollPacks(-1)">❮</button>
                    <button class="carousel-btn" onclick="scrollPacks(1)">❯</button>
                </div>
            </div>
            <div class="carousel-container">
                <div class="packs-list" id="packsList">
                    ${packsHtml}
                </div>
            </div>
        </div>
    `;
}

function scrollPacks(direction) {
    const list = document.getElementById('packsList');
    if (list) {
        const cardWidth = 330; // 300px width + 30px gap
        list.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startGame(packIndex) {
    const originalPack = currentMode === 'streamer' ? streamerDares[packIndex] : friendsDares[packIndex];
    
    // Copy and shuffle dares so the order is random every time you play
    currentPack = { ...originalPack, dares: [...originalPack.dares] };
    shuffleArray(currentPack.dares);
    
    currentDareIndex = -1;
    renderGameScreen();
}

function renderGameScreen() {
    const modeTitle = currentMode === 'streamer' ? 'Streamer mode' : 'Friends mode';
    const modeIcon = currentMode === 'streamer' ? '🎙️' : '👥';
    const modeDesc = currentMode === 'streamer' 
        ? 'Turn your stream into pure chaos with live dares, chat-triggered moments, and nonstop entertainment.'
        : 'The fastest way to turn a normal hangout into nonstop laughter, chaos, and unforgettable moments.';

    let cardHtml = '';

    if (currentDareIndex === -1) {
        // Mode Stack Card
        cardHtml = `
            <div class="dare-card ${currentPack.color}">
                <div class="pack-header">
                    <div class="pack-number">0</div>
                    <div class="pack-badge">Trending</div>
                </div>
                <div class="pack-icon">${modeIcon}</div>
                <div class="pack-title">${modeTitle}</div>
                <div class="pack-desc" style="color:#000;">${modeDesc}</div>
                <button class="btn-start" onclick="nextDare()" style="background:#000; color:#fff; width:180px; margin: 0 auto; border-radius:30px; padding:6px 20px 6px 6px; display:flex; gap:12px;">
                    <span class="icon-box" style="background:#fff; color:#000;">▶</span> Tap to open
                </button>
            </div>
        `;
    } else {
        // Dare Card
        const dare = currentPack.dares[currentDareIndex];
        cardHtml = `
            <div class="dare-card">
                <div class="dare-number-circle">${currentDareIndex + 1}</div>
                <div class="dare-title">Dare ${currentDareIndex + 1}</div>
                <div class="dare-text">${dare}</div>
                <button class="btn-close-dare" onclick="nextDare()">
                    <span class="icon-box">✖</span> Close dare
                </button>
            </div>
        `;
    }

    appElement.innerHTML = `
        <div class="screen active">
            <div class="back-btn-container" style="position: absolute; top: 20px; left: 20px; z-index: 10;">
                <button class="btn-back" onclick="renderModeScreen()">
                    <span>↩</span> Back
                </button>
            </div>
            <div class="gameplay-screen" style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 20px; overflow: hidden;">
                ${cardHtml}
            </div>
        </div>
    `;
}

function nextDare() {
    currentDareIndex++;
    if (currentDareIndex >= currentPack.dares.length) {
        alert("Stack completed! Choose another pack.");
        renderModeScreen();
    } else {
        renderGameScreen();
    }
}

function renderPrivacyScreen() {
    appElement.innerHTML = `
        <div class="screen active privacy-screen">
            <div class="back-btn-container" style="margin-bottom: 20px;">
                <button class="btn-back" onclick="renderHomeScreen()">
                    <span>↩</span> Back
                </button>
            </div>
            <h1 class="privacy-title">Privacy Policy</h1>
            <div class="privacy-content">
                ${privacyPolicy}
            </div>
        </div>
    `;
}

btnPrivacy.addEventListener('click', renderPrivacyScreen);

// Initialize app
renderHomeScreen();
