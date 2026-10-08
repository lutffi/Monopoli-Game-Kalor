// State Management
const questions = [
    { id: 1, type: "start", text: "Garis Start", answer: "" },
    { id: 2, type: "konsep", text: "Apa yang dimaksud dengan kalor?", answer: "Energi panas yang berpindah dari benda bersuhu tinggi ke benda bersuhu rendah." },
    { id: 3, type: "konsep", text: "Sebutkan satuan kalor dalam Sistem Internasional (SI)!", answer: "Joule (J)" },
    { id: 4, type: "eksperimen", text: "Sentuhlah sendok logam dan sendok kayu/plastik. Mana yang lebih cepat panas? Mengapa?", answer: "Sendok logam, karena logam konduktor panas yang baik." },
    { id: 5, type: "konsep", text: "Sebutkan 3 cara perpindahan kalor!", answer: "Konduksi, Konveksi, dan Radiasi." },
    { id: 6, type: "konsep", text: "Apa yang dimaksud dengan konduksi?", answer: "Perpindahan panas melalui zat perantara tanpa perpindahan partikel." },
    { id: 7, type: "konsep", text: "Berikan contoh konduksi dalam kehidupan sehari-hari!", answer: "Ujung sendok logam terasa panas saat ujung lainnya dicelupkan ke teh panas." },
    { id: 8, type: "corner", text: "Istirahat Sejenak", answer: "" },
    { id: 9, type: "konsep", text: "Apa yang dimaksud dengan konveksi?", answer: "Perpindahan panas melalui aliran zat perantara yang disertai perpindahan partikel." },
    { id: 10, type: "konsep", text: "Berikan contoh peristiwa konveksi!", answer: "Terjadinya angin darat dan laut, air mendidih." },
    { id: 11, type: "konsep", text: "Apa yang dimaksud dengan radiasi?", answer: "Perpindahan panas tanpa memerlukan zat perantara." },
    { id: 12, type: "konsep", text: "Apa yang dimaksud dengan kalor jenis zat?", answer: "Banyak kalor untuk menaikkan suhu 1 kg zat sebesar 1°C." },
    { id: 13, type: "konsep", text: "Mengapa terjadi angin laut pada siang hari?", answer: "Karena daratan lebih cepat panas, udara di darat naik digantikan udara laut." },
    { id: 14, type: "konsep", text: "Mengapa dinding dalam termos dilapisi perak?", answer: "Memantulkan radiasi panas kembali ke dalam." },
    { id: 15, type: "corner", text: "Pos Pengamatan", answer: "" },
    { id: 16, type: "konsep", text: "Warna pakaian apa yang baik dipakai saat terik?", answer: "Putih/cerah, karena memantulkan panas dengan baik." },
    { id: 17, type: "hitungan", text: "Apa rumus untuk menghitung besar kalor (Q)?", answer: "Q = m × c × ΔT" },
    { id: 18, type: "konsep", text: "Apa bunyi Asas Black?", answer: "Kalor yang dilepas benda suhu tinggi = kalor diserap benda suhu rendah." },
    { id: 19, type: "konsep", text: "Sebutkan wujud zat yang berubah karena menyerap panas!", answer: "Mencair, Menguap, Menyublim." },
    { id: 20, type: "konsep", text: "Apa yang dimaksud dengan menguap?", answer: "Perubahan cair menjadi gas." },
    { id: 21, type: "konsep", text: "Apa yang dimaksud dengan mencair?", answer: "Perubahan padat menjadi cair." },
    { id: 22, type: "corner", text: "Zona Aman", answer: "" },
    { id: 23, type: "kolaborasi", text: "Sebutkan 1 benda di rumah yang memanfaatkan kalor!", answer: "Setrika, panci, oven, termos." },
    { id: 24, type: "konsep", text: "Sebutkan bahan yang merupakan isolator panas!", answer: "Kayu, plastik, karet, kain." },
    { id: 25, type: "konsep", text: "Mengapa gagang panci terbuat dari plastik?", answer: "Karena plastik adalah isolator panas." },
    { id: 26, type: "konsep", text: "Apa fungsi ruang hampa udara pada termos?", answer: "Mencegah perpindahan kalor secara konduksi & konveksi." },
    { id: 27, type: "hitungan", text: "Berapa titik didih & beku air murni?", answer: "Titik didih 100°C, titik beku 0°C." },
    { id: 28, type: "hitungan", text: "Hitung Q memanaskan 1 kg air 20°C ke 50°C (c=4200)!", answer: "Q = 1 × 4200 × 30 = 126.000 Joule." },
    { id: 29, type: "konsep", text: "Mengapa sambungan rel kereta dibuat renggang?", answer: "Agar tidak melengkung saat memuai." },
    { id: 30, type: "konsep", text: "Apa yang dimaksud kalor laten?", answer: "Kalor untuk mengubah wujud zat tanpa mengubah suhunya." }
];

const HOUSE_COMPONENTS = ["foundation", "wall-left", "wall-right", "door", "window-left", "window-right", "roof"];
const COLORS = ["#2563eb", "#16a34a", "#ca8a04", "#dc2626", "#9333ea", "#ea580c", "#db2777", "#0891b2"];
const AVATARS = ["🧑‍🚀", "👩‍🔬", "🧑‍🔧", "🦸", "🧑‍🚒", "🧑‍🍳", "🥷", "🧙"];

let groups = [];
let currentTurn = 0;
let isRolling = false;

// DOM Elements
const setupScreen = document.getElementById('setup-screen');
const gameUi = document.getElementById('game-ui');
const groupCountEl = document.getElementById('group-count');
const btnStartGame = document.getElementById('btn-start-game');

const board = document.getElementById('board');
const centerArea = document.getElementById('center-area');
const pawnsContainer = document.getElementById('pawns-container');
const btnRoll = document.getElementById('btn-roll');
const diceVisual = document.getElementById('dice-visual');

const hudTurnName = document.getElementById('hud-turn-name');
const hudComponents = document.getElementById('hud-components');
const hudProgressBar = document.getElementById('hud-progress-bar');
const hudAvatar = document.getElementById('hud-avatar');
const sidebarAvatar = document.getElementById('sidebar-avatar');
const sidebarTurnName = document.getElementById('sidebar-turn-name');

// Modal Elements
const modalChallenge = document.getElementById('modal-challenge');
const modalChallengeContent = document.getElementById('modal-challenge-content');
const modalType = document.getElementById('modal-type');
const modalQuestion = document.getElementById('modal-question');
const btnShowAnswer = document.getElementById('btn-show-answer');
const answerArea = document.getElementById('answer-area');
const modalAnswer = document.getElementById('modal-answer');
const btnFail = document.getElementById('btn-fail');
const btnSuccess = document.getElementById('btn-success');

// Setup Logic (group count is chosen with the 2/3/4 buttons -> #group-count)
btnStartGame.onclick = () => {
    const numGroups = parseInt(groupCountEl.innerText, 10) || 2;

    // Init Groups
    for (let i = 0; i < numGroups; i++) {
        groups.push({
            id: i,
            name: `Kelompok ${i + 1}`,
            pos: 1, // Start position (1-30)
            color: COLORS[i],
            components: []
        });
    }
    
    setupScreen.classList.add('opacity-0');
    setTimeout(() => {
        setupScreen.classList.add('hidden');
        gameUi.classList.remove('hidden');
        
        generateBoard();
        initPawns();
        renderDice(3);
        updateHUD();
    }, 500);
};

// How-to-play dialog
const modalHelp = document.getElementById('modal-help');
document.getElementById('btn-help').onclick = () => modalHelp.classList.remove('hidden');
document.getElementById('btn-help-close').onclick = () => modalHelp.classList.add('hidden');

// Sound button (icon toggle only)
const btnSound = document.getElementById('btn-sound');
btnSound.onclick = () => {
    btnSound.innerText = btnSound.innerText.trim() === '🔊' ? '🔇' : '🔊';
};

// Track layout (same 30 tiles, same order): starts bottom-left and goes UP the left column,
// then across the top row (left->right), down the right column, and back along the bottom row.
function getGridArea(id) {
    if (id === 1) return `7 / 1 / span 1 / span 1`;
    if (id <= 6) return `${8 - id} / 1 / span 1 / span 1`;
    if (id <= 16) return `1 / ${id - 6} / span 1 / span 1`;
    if (id <= 21) return `${id - 15} / 10 / span 1 / span 1`;
    return `7 / ${32 - id} / span 1 / span 1`;
}

// Visual info for each challenge type
const TYPE_META = {
    konsep:     { label: 'Konsep',     icon: '💡', color: '#a8eba5' },
    eksperimen: { label: 'Eksperimen', icon: '🧪', color: '#9fdcff' },
    hitungan:   { label: 'Hitungan',   icon: '🧮', color: '#ffc58a' },
    kolaborasi: { label: 'Kolaborasi', icon: '🤝', color: '#ffb3ad' }
};
const CORNER_META = {
    1:  { label: 'MULAI',      icon: '🏁' },
    8:  { label: 'Istirahat',  icon: '☕' },
    15: { label: 'Pengamatan', icon: '🔍' },
    22: { label: 'Zona Aman',  icon: '🛡️' }
};

function getTileVisual(q) {
    if (q.type === 'start') return { cls: 't-start', ...CORNER_META[q.id] };
    if (q.type === 'corner') return { cls: 't-corner', ...CORNER_META[q.id] };
    const m = TYPE_META[q.type];
    return { cls: `t-${q.type}`, label: m.label, icon: m.icon };
}

function generateBoard() {
    // Remove previously generated tiles (keeps the centre panel)
    board.querySelectorAll('.tile').forEach(t => t.remove());
    
    // Create 30 Tiles
    questions.forEach(q => {
        const v = getTileVisual(q);
        const tile = document.createElement('div');
        tile.className = `tile ${v.cls}`;
        tile.style.gridArea = getGridArea(q.id);
        tile.id = `tile-${q.id}`;
        tile.innerHTML = `
            <span class="tile-number">${q.id}</span>
            <span class="tile-icon">${v.icon}</span>
            <span class="tile-label">${v.label}</span>
        `;
        board.appendChild(tile);
    });

    // Create Center House Plots
    centerArea.innerHTML = '';
    centerArea.dataset.count = groups.length;
    centerArea.classList.toggle('dense', groups.length > 4);
    groups.forEach(g => {
        const plot = document.createElement('div');
        plot.className = 'house-plot';
        plot.id = `plot-${g.id}`;
        plot.innerHTML = `
            <div class="plot-label"><span class="plot-avatar" style="--pc:${g.color}">${AVATARS[g.id % AVATARS.length]}</span>${g.name}</div>
            <div class="badges-container" id="badges-${g.id}">
                ${HOUSE_COMPONENTS.map(c => `<div class="badge" id="badge-${g.id}-${c}"></div>`).join('')}
            </div>
        `;
        centerArea.appendChild(plot);
    });
}

// Convert 1-based index (1-30) to board coordinates to place pawns
function getTilePosition(id) {
    const tile = document.getElementById(`tile-${id}`);
    if (!tile) return { top: 0, left: 0, height: 0 };
    return {
        top: board.offsetTop + board.clientTop + tile.offsetTop + tile.offsetHeight / 2,
        left: board.offsetLeft + board.clientLeft + tile.offsetLeft + tile.offsetWidth / 2,
        height: tile.offsetHeight
    };
}

// Initialize Pawns only once to preserve DOM elements for transitions
function initPawns() {
    pawnsContainer.innerHTML = '';
    // smaller tokens when many groups share a tile
    pawnsContainer.style.setProperty('--ps', groups.length <= 4 ? 1 : groups.length <= 6 ? 0.8 : 0.68);
    groups.forEach(g => {
        const pawn = document.createElement('div');
        pawn.className = 'pawn-wrapper';
        pawn.id = `pawn-${g.id}`;
        pawn.style.setProperty('--pc', g.color);
        pawn.innerHTML = `<span class="pawn-avatar">${AVATARS[g.id % AVATARS.length]}</span><span class="pawn-num">${g.id + 1}</span>`;
        pawn.style.transition = 'none'; // no slide-in on first placement
        
        pawnsContainer.appendChild(pawn);
    });
    renderPawns(false);
    void pawnsContainer.offsetWidth; // flush so the first position is applied instantly
    pawnsContainer.querySelectorAll('.pawn-wrapper').forEach(p => p.style.transition = '');
}

function renderPawns(animate = true) {
    // Group pawns by position
    const positions = {};
    groups.forEach(g => {
        if (!positions[g.pos]) positions[g.pos] = [];
        positions[g.pos].push(g);
    });

    Object.keys(positions).forEach(pos => {
        const tileCoords = getTilePosition(pos);
        const pawnsOnTile = positions[pos];
        
        pawnsOnTile.forEach((g, idx) => {
            const pawn = document.getElementById(`pawn-${g.id}`);
            if (!pawn) return;
            
            // Arrange tokens on the tile: single, side by side, or a small grid (up to 8)
            const size = pawn.offsetWidth;
            const n = pawnsOnTile.length;
            let offsetLeft = 0;
            let offsetTop = tileCoords.height * 0.12;
            if (n === 2) {
                offsetLeft = (idx - 0.5) * size * 0.75;
            } else if (n > 2) {
                const cols = n <= 4 ? 2 : 3;
                const rows = Math.ceil(n / cols);
                offsetLeft = ((idx % cols) - (cols - 1) / 2) * size * 0.8;
                offsetTop = (Math.floor(idx / cols) - (rows - 1) / 2) * size * 0.7;
            }
            
            pawn.style.top = (tileCoords.top - size / 2 + offsetTop) + 'px';
            pawn.style.left = (tileCoords.left - size / 2 + offsetLeft) + 'px';
            
            // Only the group that just rolled hops, then its landing tile pops
            if (animate && g === groups[currentTurn]) {
                pawn.classList.add('moving');
                setTimeout(() => pawn.classList.remove('moving'), 500);
                const tile = document.getElementById(`tile-${pos}`);
                if (tile) setTimeout(() => {
                    replayAnim(tile, 'landed');
                    setTimeout(() => tile.classList.remove('landed'), 700);
                }, 450);
            }
        });
    });
}
window.addEventListener('resize', () => {
    if (!groups.length) return;
    const pawns = pawnsContainer.querySelectorAll('.pawn-wrapper');
    pawns.forEach(p => p.style.transition = 'none');
    renderPawns(false);
    void pawnsContainer.offsetWidth;
    pawns.forEach(p => p.style.transition = '');
});

// Replay a CSS animation class on an element
function replayAnim(el, cls) {
    el.classList.remove(cls);
    void el.offsetWidth;
    el.classList.add(cls);
}

function updateHUD() {
    const current = groups[currentTurn];
    const avatar = AVATARS[current.id % AVATARS.length];
    hudTurnName.innerText = current.name;
    hudComponents.innerText = `${current.components.length}/7`;
    hudProgressBar.style.width = `${(current.components.length / 7) * 100}%`;
    hudAvatar.innerText = avatar;
    hudAvatar.style.backgroundColor = current.color;
    sidebarAvatar.innerText = avatar;
    sidebarTurnName.innerText = current.name;
    
    // Mark whose turn it is (pawn + house plot) and animate the change
    groups.forEach(g => {
        const isTurn = g.id === current.id;
        const pawn = document.getElementById(`pawn-${g.id}`);
        const plot = document.getElementById(`plot-${g.id}`);
        if (pawn) pawn.classList.toggle('is-turn', isTurn);
        if (plot) plot.classList.toggle('is-turn', isTurn);
    });
    replayAnim(hudTurnName.parentElement.parentElement, 'turn-change');
    replayAnim(sidebarAvatar.parentElement, 'turn-change');
    
    // Remove active class from all tiles
    document.querySelectorAll('.tile').forEach(t => t.classList.remove('active'));
}

// Draw a die face with pips
function renderDice(n) {
    const pips = { 1: [5], 2: [1, 9], 3: [1, 5, 9], 4: [1, 3, 7, 9], 5: [1, 3, 5, 7, 9], 6: [1, 3, 4, 6, 7, 9] }[n];
    let html = '<div class="die-face">';
    for (let i = 1; i <= 9; i++) html += `<span class="pip${pips.includes(i) ? ' on' : ''}"></span>`;
    diceVisual.innerHTML = html + '</div>';
}

btnRoll.onclick = () => {
    if (isRolling) return;
    isRolling = true;
    
    let rollCount = 0;
    diceVisual.classList.add('dice-rolling');
    
    const interval = setInterval(() => {
        const n = Math.floor(Math.random() * 6) + 1;
        renderDice(n);
        rollCount++;
        if (rollCount > 10) {
            clearInterval(interval);
            diceVisual.classList.remove('dice-rolling');
            
            const finalRoll = Math.floor(Math.random() * 6) + 1;
            renderDice(finalRoll);
            
            setTimeout(() => {
                moveCurrentPawn(finalRoll);
            }, 600);
        }
    }, 80);
};

function moveCurrentPawn(steps) {
    const group = groups[currentTurn];
    group.pos += steps;
    if (group.pos > 30) group.pos -= 30; // wrap around
    
    renderPawns(); // Animated smoothly via CSS transition
    
    // Check challenge
    setTimeout(() => {
        const question = questions.find(q => q.id === group.pos);
        if (question && question.type !== "start" && question.type !== "corner") {
            triggerChallenge(question);
        } else {
            nextTurn();
        }
    }, 600);
}

function triggerChallenge(question) {
    // Highlight tile
    document.getElementById(`tile-${question.id}`).classList.add('active');
    
    // Setup modal
    const meta = TYPE_META[question.type];
    modalType.innerHTML = `<span>${meta.icon}</span> KARTU ${meta.label.toUpperCase()}`;
    modalQuestion.innerText = question.text;
    modalAnswer.innerText = question.answer;
    
    // Reset state
    btnShowAnswer.classList.remove('hidden');
    answerArea.classList.add('hidden');
    
    // Colorize modal header based on type
    const modalInner = document.getElementById('modal-challenge-content');
    document.getElementById('modal-header').style.backgroundColor = meta.color;

    modalChallenge.classList.remove('hidden');
    // trigger reflow
    void modalChallenge.offsetWidth;
    modalChallenge.classList.add('modal-show');
    modalInner.classList.add('modal-content-show');
}

btnShowAnswer.onclick = () => {
    btnShowAnswer.classList.add('hidden');
    answerArea.classList.remove('hidden');
};

function closeChallenge() {
    modalChallenge.classList.remove('modal-show');
    document.getElementById('modal-challenge-content').classList.remove('modal-content-show');
    setTimeout(() => {
        modalChallenge.classList.add('hidden');
    }, 300);
}

btnFail.onclick = () => {
    closeChallenge();
    nextTurn();
};

btnSuccess.onclick = () => {
    closeChallenge();
    rewardComponent();
};

function rewardComponent() {
    const group = groups[currentTurn];
    // Find next missing component
    const nextComp = HOUSE_COMPONENTS.find(c => !group.components.includes(c));
    
    if (nextComp) {
        group.components.push(nextComp);
        
        // Visual Update
        const badge = document.getElementById(`badge-${group.id}-${nextComp}`);
        if(badge) {
            badge.classList.add('earned');
        }
        const plot = document.getElementById(`plot-${group.id}`);
        if (plot) plot.style.setProperty('--p', group.components.length);
        
        // Check win
        if (group.components.length === 7) {
            setTimeout(() => showWinner(group), 1000);
            return;
        }
    }
    
    nextTurn();
}

function nextTurn() {
    currentTurn = (currentTurn + 1) % groups.length;
    isRolling = false;
    renderDice(3);
    updateHUD();
}

// Win Confetti
function showWinner(group) {
    const winnerModal = document.getElementById('modal-winner');
    document.getElementById('winner-name').innerText = `${group.name} Menang!`;
    winnerModal.classList.remove('hidden');
    
    const canvas = document.getElementById('confetti-canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    
    const confettis = Array.from({length: 100}).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 10 + 5,
        h: Math.random() * 10 + 5,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
        v: Math.random() * 5 + 2
    }));

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettis.forEach(c => {
            ctx.fillStyle = c.c;
            ctx.fillRect(c.x, c.y, c.w, c.h);
            c.y += c.v;
            if (c.y > canvas.height) c.y = -10;
        });
        requestAnimationFrame(draw);
    }
    draw();
}
