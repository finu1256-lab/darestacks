const appElement = document.getElementById('app');
const btnPrivacy = document.getElementById('btnPrivacy');

let currentMode = null; // 'streamer' or 'friends'
let currentPack = null;

function renderHomeScreen() {
    appElement.innerHTML = `
        <div class="screen home-screen active">
            <h1 class="hero-title">Choose your mode</h1>
            <div class="mode-buttons">
                <button class="mode-btn bg-green" onclick="selectMode('streamer')">
                    <div style="font-size: 4rem; margin-bottom: 10px;">🎙️</div>
                    <h2>Streamer mode</h2>
                    <p>Turn your stream into pure chaos with live dares, chat-triggered moments, and nonstop entertainment.</p>
                </button>
                <button class="mode-btn bg-blue" onclick="selectMode('friends')">
                    <div style="font-size: 4rem; margin-bottom: 10px;">👥</div>
                    <h2>Friends mode</h2>
                    <p>The fastest way to turn a normal hangout into nonstop laughter, chaos, and unforgettable moments.</p>
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
            <div class="selection-header">
                <h1 class="selection-title">${modeTitle}</h1>
                <p class="selection-subtitle">Choose a dare stack below and let the chaos begin</p>
            </div>
            <div class="carousel-container">
                <div class="packs-list">
                    ${packsHtml}
                </div>
            </div>
        </div>
    `;
}

function startGame(packIndex) {
    currentPack = currentMode === 'streamer' ? streamerDares[packIndex] : friendsDares[packIndex];
    renderGameScreen();
}

function renderGameScreen() {
    const modeTitle = currentMode === 'streamer' ? 'Streamer mode' : 'Friends mode';
    const modeIcon = currentMode === 'streamer' ? '🎙️' : '👥';
    const modeDesc = currentMode === 'streamer' 
        ? 'Turn your stream into pure chaos with live dares, chat-triggered moments, and nonstop entertainment.'
        : 'The fastest way to turn a normal hangout into nonstop laughter, chaos, and unforgettable moments.';

    let daresHtml = currentPack.dares.map((dare, index) => `
        <div class="dare-card" id="dare-${index}">
            <div class="dare-number-circle">${index + 1}</div>
            <div class="dare-title">Dare ${index + 1}</div>
            <div class="dare-text">${dare}</div>
            <button class="btn-close-dare" onclick="closeDare(${index})">
                <span class="icon-box">✖</span> Close dare
            </button>
        </div>
    `).join('');

    appElement.innerHTML = `
        <div class="screen active">
            <div class="back-btn-container" style="position: absolute; top: 100px; left: 0;">
                <button class="btn-back" onclick="renderModeScreen()">
                    <span>↩</span> Back
                </button>
            </div>
            <div class="gameplay-screen" style="margin-top: 60px;">
                <!-- Mode Stack Card -->
                <div class="dare-card ${currentPack.color}">
                    <div class="pack-header">
                        <div class="pack-number">0</div>
                        <div class="pack-badge">Trending</div>
                    </div>
                    <div class="pack-icon">${modeIcon}</div>
                    <div class="pack-title">${modeTitle}</div>
                    <div class="pack-desc" style="color:#000;">${modeDesc}</div>
                    <button class="btn-start" onclick="document.getElementById('dare-0').scrollIntoView({behavior: 'smooth'})">
                        <span class="icon-box">▶</span> Tap to open
                    </button>
                </div>
                ${daresHtml}
            </div>
        </div>
    `;
}

function closeDare(index) {
    const nextDare = document.getElementById(`dare-${index + 1}`);
    if (nextDare) {
        nextDare.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'center'});
    } else {
        alert("Stack completed! Choose another pack.");
        renderModeScreen();
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
