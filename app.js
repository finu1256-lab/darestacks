const appElement = document.getElementById('app');
const btnPrivacy = document.getElementById('btnPrivacy');

let currentMode = null; // 'streamer' or 'friends' or 'truth_or_dare'
let currentPack = null;
let currentDareIndex = -1;
let currentToDChoice = null;

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
                <button class="mode-btn bg-yellow" onclick="selectMode('truth_or_dare')">
                    <div class="pack-badge trending-badge">Trending</div>
                    <div style="font-size: 4rem; margin-bottom: 10px;">🎭</div>
                    <h2>Truth or Dare</h2>
                    <p>The classic game reimagined. Choose: answer the brutal truth, or do the chaotic dare.</p>
                </button>
                <button class="mode-btn bg-green" onclick="selectMode('would_you_rather')">
                    <div class="pack-badge trending-badge">Trending</div>
                    <div style="font-size: 4rem; margin-bottom: 10px;">🤔</div>
                    <h2>Would You Rather</h2>
                    <p>Two terrible options. One impossible choice. The group decides what you will pick.</p>
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
    let packs;
    let modeTitle;
    let modeIcon;
    let modeDesc;

    if (currentMode === 'streamer') {
        packs = streamerDares;
        modeTitle = 'Streamer mode';
        modeIcon = '🎙️';
        modeDesc = 'Turn your stream into pure chaos with live dares, chat-triggered moments, and nonstop entertainment.';
    } else if (currentMode === 'friends') {
        packs = friendsDares;
        modeTitle = 'Friends mode';
        modeIcon = '👥';
        modeDesc = 'The fastest way to turn a normal hangout into nonstop laughter, chaos, and unforgettable moments.';
    } else if (currentMode === 'truth_or_dare') {
        packs = truthOrDareDares;
        modeTitle = 'Truth or Dare';
        modeIcon = '🎭';
        modeDesc = 'The classic game reimagined. Pull a card and make your choice: answer the brutal truth or do the chaotic dare.';
    } else if (currentMode === 'would_you_rather') {
        packs = wouldYouRatherDares;
        modeTitle = 'Would You Rather';
        modeIcon = '🤔';
        modeDesc = 'Two terrible options. One impossible choice. The group decides what you will pick.';
    }
        
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
    let originalPack;
    if (currentMode === 'streamer') {
        originalPack = streamerDares[packIndex];
    } else if (currentMode === 'friends') {
        originalPack = friendsDares[packIndex];
    } else if (currentMode === 'truth_or_dare') {
        originalPack = truthOrDareDares[packIndex];
    } else if (currentMode === 'would_you_rather') {
        originalPack = wouldYouRatherDares[packIndex];
    }
    
    // Copy and shuffle dares so the order is random every time you play
    let shuffledDares = [...originalPack.dares];
    shuffleArray(shuffledDares);
    
    // Only take 25 dares out of the 100 available in the pack pool
    shuffledDares = shuffledDares.slice(0, 25);
    
    currentPack = { ...originalPack, dares: shuffledDares };
    
    currentDareIndex = -1;
    currentToDChoice = null;
    renderGameScreen();
}

function selectToD(choice) {
    currentToDChoice = choice;
    renderGameScreen();
}

function renderGameScreen() {
    let modeTitle;
    let modeIcon;
    let modeDesc;

    if (currentMode === 'streamer') {
        modeTitle = 'Streamer mode';
        modeIcon = '🎙️';
        modeDesc = 'Turn your stream into pure chaos with live dares, chat-triggered moments, and nonstop entertainment.';
    } else if (currentMode === 'friends') {
        modeTitle = 'Friends mode';
        modeIcon = '👥';
        modeDesc = 'The fastest way to turn a normal hangout into nonstop laughter, chaos, and unforgettable moments.';
    } else if (currentMode === 'truth_or_dare') {
        modeTitle = 'Truth or Dare';
        modeIcon = '🎭';
        modeDesc = 'The classic game reimagined. Pull a card and make your choice: answer the brutal truth or do the chaotic dare.';
    } else if (currentMode === 'would_you_rather') {
        modeTitle = 'Would You Rather';
        modeIcon = '🤔';
        modeDesc = 'Two terrible options. One impossible choice. The group decides what you will pick.';
    }

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
        
        if (currentMode === 'truth_or_dare' && !currentToDChoice) {
            cardHtml = `
                <div class="dare-card">
                    <div class="dare-number-circle">${currentDareIndex + 1}</div>
                    <div class="dare-title">Pick Your Poison</div>
                    <div style="flex:1; display:flex; flex-direction:column; justify-content:center; gap:20px; align-items:center;">
                        <button onclick="selectToD('truth')" style="width:100%; padding:20px; border-radius:16px; border:none; background:var(--card-green); color:#000; font-size:1.8rem; font-weight:800; cursor:pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.2); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">TRUTH</button>
                        <h2 style="font-size: 1.2rem; color: #888;">OR</h2>
                        <button onclick="selectToD('dare')" style="width:100%; padding:20px; border-radius:16px; border:none; background:var(--card-yellow); color:#000; font-size:1.8rem; font-weight:800; cursor:pointer; box-shadow: 0 4px 10px rgba(0,0,0,0.2); transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">DARE</button>
                    </div>
                </div>
            `;
        } else {
            let textToShow = dare;
            let titleText = `Dare ${currentDareIndex + 1}`;
            
            if (currentMode === 'truth_or_dare') {
                const parts = dare.split('<br><br>');
                if (currentToDChoice === 'truth') {
                    textToShow = parts[0].replace('TRUTH: ', '');
                    titleText = 'Truth';
                } else if (currentToDChoice === 'dare') {
                    textToShow = parts[1].replace('DARE: ', '');
                    titleText = 'Dare';
                }
            } else if (currentMode === 'would_you_rather') {
                titleText = 'Dilemma';
            }

            cardHtml = `
                <div class="dare-card">
                    <div class="dare-number-circle">${currentDareIndex + 1}</div>
                    <div class="dare-title">${titleText}</div>
                    <div class="dare-text">${textToShow}</div>
                    <button class="btn-close-dare" onclick="nextDare()">
                        <span class="icon-box">✖</span> Close card
                    </button>
                </div>
            `;
        }
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
    currentToDChoice = null;
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
