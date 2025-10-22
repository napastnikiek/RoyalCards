// Clash Royale cards data - with correct naming convention (a_b.webp)
const cards = [
    // ===== CHAMPION CARDS =====
    { name: "Little Prince", type: "Troop", elixir: 3, rarity: "Champion", icon: "👑", imageUrl: "Cards/little_prince.webp" },
    { name: "Archer Queen", type: "Troop", elixir: 5, rarity: "Champion", icon: "🏹", imageUrl: "Cards/archer_queen.webp" },
    { name: "Golden Knight", type: "Troop", elixir: 4, rarity: "Champion", icon: "⚔️", imageUrl: "Cards/golden_knight.webp" },
    { name: "Skeleton King", type: "Troop", elixir: 4, rarity: "Champion", icon: "💀", imageUrl: "Cards/skeleton_king.webp" },
    { name: "Mighty Miner", type: "Troop", elixir: 4, rarity: "Champion", icon: "⛏️", imageUrl: "Cards/mighty_miner.webp" },
    { name: "Monk", type: "Troop", elixir: 5, rarity: "Champion", icon: "🙏", imageUrl: "Cards/monk.webp" },
    { name: "Boss Bandit", type: "Troop", elixir: 6, rarity: "Champion", icon: "🎭", imageUrl: "Cards/boss_bandit.webp" },
    { name: "Goblinstein", type: "Troop", elixir: 5, rarity: "Champion", icon: "👹", imageUrl: "Cards/goblinstein.webp" },

    // ===== LEGENDARY CARDS =====
    { name: "Bandit", type: "Troop", elixir: 3, rarity: "Legendary", icon: "🎭", imageUrl: "Cards/bandit.webp" },
    { name: "Royal Ghost", type: "Troop", elixir: 3, rarity: "Legendary", icon: "👻", imageUrl: "Cards/royal_ghost.webp" },
    { name: "Magic Archer", type: "Troop", elixir: 4, rarity: "Legendary", icon: "🏹", imageUrl: "Cards/magic_archer.webp" },
    { name: "Fisherman", type: "Troop", elixir: 3, rarity: "Legendary", icon: "🎣", imageUrl: "Cards/fisherman.webp" },
    { name: "Lumberjack", type: "Troop", elixir: 4, rarity: "Legendary", icon: "🪓", imageUrl: "Cards/lumberjack.webp" },
    { name: "Inferno Dragon", type: "Troop", elixir: 4, rarity: "Legendary", icon: "🐲", imageUrl: "Cards/inferno_dragon.webp" },
    { name: "Electro Wizard", type: "Troop", elixir: 4, rarity: "Legendary", icon: "⚡", imageUrl: "Cards/electro_wizard.webp" },
    { name: "Mega Knight", type: "Troop", elixir: 7, rarity: "Legendary", icon: "🤴", imageUrl: "Cards/mega_knight.webp" },
    { name: "Ram Rider", type: "Troop", elixir: 5, rarity: "Legendary", icon: "🐏", imageUrl: "Cards/ram_rider.webp" },
    { name: "Night Witch", type: "Troop", elixir: 4, rarity: "Legendary", icon: "🧙‍♀️", imageUrl: "Cards/night_witch.webp" },
    { name: "Ice Wizard", type: "Troop", elixir: 3, rarity: "Legendary", icon: "❄️", imageUrl: "Cards/ice_wizard.webp" },
    { name: "Mother Witch", type: "Troop", elixir: 4, rarity: "Legendary", icon: "🧙‍♀️", imageUrl: "Cards/mother_witch.webp" },
    { name: "Sparky", type: "Troop", elixir: 6, rarity: "Legendary", icon: "⚡", imageUrl: "Cards/sparky.webp" },
    { name: "Lava Hound", type: "Troop", elixir: 7, rarity: "Legendary", icon: "🌋", imageUrl: "Cards/lava_hound.webp" },
    { name: "Miner", type: "Troop", elixir: 3, rarity: "Legendary", icon: "⛏️", imageUrl: "Cards/miner.webp" },
    { name: "Princess", type: "Troop", elixir: 3, rarity: "Legendary", icon: "👸", imageUrl: "Cards/princess.webp" },
    { name: "The Log", type: "Spell", elixir: 2, rarity: "Legendary", icon: "🪵", imageUrl: "Cards/the_log.webp" },
    { name: "Graveyard", type: "Spell", elixir: 5, rarity: "Legendary", icon: "💀", imageUrl: "Cards/graveyard.webp" },
    { name: "Phoenix", type: "Troop", elixir: 4, rarity: "Legendary", icon: "🔥", imageUrl: "Cards/phoenix.webp" },
    { name: "Goblin Machine", type: "Troop", elixir: 5, rarity: "Legendary", icon: "🤖", imageUrl: "Cards/goblin_machine.webp" },
    { name: "Spirit Empress", type: "Troop", elixir: 3, rarity: "Legendary", icon: "👸", imageUrl: "Cards/spirit_empress.webp" },

    // ===== EPIC CARDS =====
    { name: "Prince", type: "Troop", elixir: 5, rarity: "Epic", icon: "🤴", imageUrl: "Cards/prince.webp" },
    { name: "Baby Dragon", type: "Troop", elixir: 4, rarity: "Epic", icon: "🐲", imageUrl: "Cards/baby_dragon.webp" },
    { name: "Skeleton Army", type: "Troop", elixir: 3, rarity: "Epic", icon: "💀", imageUrl: "Cards/skeleton_army.webp" },
    { name: "Witch", type: "Troop", elixir: 5, rarity: "Epic", icon: "🧙‍♀️", imageUrl: "Cards/witch.webp" },
    { name: "P.E.K.K.A", type: "Troop", elixir: 7, rarity: "Epic", icon: "🤖", imageUrl: "Cards/pekka.webp" },
    { name: "Golem", type: "Troop", elixir: 8, rarity: "Epic", icon: "🗿", imageUrl: "Cards/golem.webp" },
    { name: "Dark Prince", type: "Troop", elixir: 4, rarity: "Epic", icon: "🤴", imageUrl: "Cards/dark_prince.webp" },
    { name: "Balloon", type: "Troop", elixir: 5, rarity: "Epic", icon: "🎈", imageUrl: "Cards/balloon.webp" },
    { name: "Bowler", type: "Troop", elixir: 5, rarity: "Epic", icon: "🎳", imageUrl: "Cards/bowler.webp" },
    { name: "Executioner", type: "Troop", elixir: 5, rarity: "Epic", icon: "🪓", imageUrl: "Cards/executioner.webp" },
    { name: "Cannon Cart", type: "Troop", elixir: 5, rarity: "Epic", icon: "🔫", imageUrl: "Cards/cannon_cart.webp" },
    { name: "Electro Dragon", type: "Troop", elixir: 5, rarity: "Epic", icon: "🐲", imageUrl: "Cards/electro_dragon.webp" },
    { name: "Electro Giant", type: "Troop", elixir: 7, rarity: "Epic", icon: "👹", imageUrl: "Cards/electro_giant.webp" },
    { name: "Goblin Giant", type: "Troop", elixir: 6, rarity: "Epic", icon: "👹", imageUrl: "Cards/goblin_giant.webp" },
    { name: "Wall Breakers", type: "Troop", elixir: 2, rarity: "Epic", icon: "💣", imageUrl: "Cards/wall_breakers.webp" },
    { name: "Hunter", type: "Troop", elixir: 4, rarity: "Epic", icon: "🔫", imageUrl: "Cards/hunter.webp" },
    { name: "Giant Skeleton", type: "Troop", elixir: 6, rarity: "Epic", icon: "💀", imageUrl: "Cards/giant_skeleton.webp" },
    { name: "Guards", type: "Troop", elixir: 3, rarity: "Epic", icon: "🛡️", imageUrl: "Cards/guards.webp" },
    { name: "Rune Giant", type: "Troop", elixir: 4, rarity: "Epic", icon: "⚡", imageUrl: "Cards/rune_giant.webp" },

    // ===== RARE CARDS =====
    { name: "Giant", type: "Troop", elixir: 5, rarity: "Rare", icon: "👹", imageUrl: "Cards/giant.webp" },
    { name: "Musketeer", type: "Troop", elixir: 4, rarity: "Rare", icon: "🔫", imageUrl: "Cards/musketeer.webp" },
    { name: "Mini P.E.K.K.A", type: "Troop", elixir: 4, rarity: "Rare", icon: "🤖", imageUrl: "Cards/mini_pekka.webp" },
    { name: "Valkyrie", type: "Troop", elixir: 4, rarity: "Rare", icon: "⚔️", imageUrl: "Cards/valkyrie.webp" },
    { name: "Mega Minion", type: "Troop", elixir: 3, rarity: "Rare", icon: "🦇", imageUrl: "Cards/mega_minion.webp" },
    { name: "Hog Rider", type: "Troop", elixir: 4, rarity: "Rare", icon: "🐗", imageUrl: "Cards/hog_rider.webp" },
    { name: "Flying Machine", type: "Troop", elixir: 4, rarity: "Rare", icon: "🚁", imageUrl: "Cards/flying_machine.webp" },
    { name: "Battle Ram", type: "Troop", elixir: 4, rarity: "Rare", icon: "🐏", imageUrl: "Cards/battle_ram.webp" },
    { name: "Ice Golem", type: "Troop", elixir: 2, rarity: "Rare", icon: "❄️", imageUrl: "Cards/ice_golem.webp" },
    { name: "Royal Hogs", type: "Troop", elixir: 5, rarity: "Rare", icon: "🐗", imageUrl: "Cards/royal_hogs.webp" },
    { name: "Dart Goblin", type: "Troop", elixir: 3, rarity: "Rare", icon: "🎯", imageUrl: "Cards/dart_goblin.webp" },
    { name: "Battle Healer", type: "Troop", elixir: 4, rarity: "Rare", icon: "💖", imageUrl: "Cards/battle_healer.webp" },
    { name: "Elixir Golem", type: "Troop", elixir: 3, rarity: "Rare", icon: "⚗️", imageUrl: "Cards/elixir_golem.webp" },
    { name: "Three Musketeers", type: "Troop", elixir: 9, rarity: "Rare", icon: "🔫", imageUrl: "Cards/three_musketeers.webp" },
    { name: "Zappies", type: "Troop", elixir: 4, rarity: "Rare", icon: "⚡", imageUrl: "Cards/zappies.webp" },
    { name: "Heal Spirit", type: "Troop", elixir: 1, rarity: "Rare", icon: "💖", imageUrl: "Cards/heal_spirit.webp" },
    { name: "Goblin Demolisher", type: "Troop", elixir: 4, rarity: "Rare", icon: "💣", imageUrl: "Cards/goblin_demolisher.webp" },
    { name: "Suspicious Bush", type: "Troop", elixir: 2, rarity: "Rare", icon: "🌿", imageUrl: "Cards/suspicious_bush.webp" },

    // ===== COMMON CARDS =====
    { name: "Knight", type: "Troop", elixir: 3, rarity: "Common", icon: "⚔️", imageUrl: "Cards/knight.webp" },
    { name: "Archers", type: "Troop", elixir: 3, rarity: "Common", icon: "🏹", imageUrl: "Cards/archers.webp" },
    { name: "Goblins", type: "Troop", elixir: 2, rarity: "Common", icon: "🗡️", imageUrl: "Cards/goblins.webp" },
    { name: "Spear Goblins", type: "Troop", elixir: 2, rarity: "Common", icon: "🏹", imageUrl: "Cards/spear_goblins.webp" },
    { name: "Skeletons", type: "Troop", elixir: 1, rarity: "Common", icon: "💀", imageUrl: "Cards/skeletons.webp" },
    { name: "Bomber", type: "Troop", elixir: 2, rarity: "Common", icon: "💣", imageUrl: "Cards/bomber.webp" },
    { name: "Minions", type: "Troop", elixir: 3, rarity: "Common", icon: "🦇", imageUrl: "Cards/minions.webp" },
    { name: "Barbarians", type: "Troop", elixir: 5, rarity: "Common", icon: "⚔️", imageUrl: "Cards/barbarians.webp" },
    { name: "Royal Giant", type: "Troop", elixir: 6, rarity: "Common", icon: "👑", imageUrl: "Cards/royal_giant.webp" },
    { name: "Elite Barbarians", type: "Troop", elixir: 6, rarity: "Common", icon: "⚔️", imageUrl: "Cards/elite_barbarians.webp" },
    { name: "Royal Recruits", type: "Troop", elixir: 7, rarity: "Common", icon: "🛡️", imageUrl: "Cards/royal_recruits.webp" },
    { name: "Skeleton Dragons", type: "Troop", elixir: 4, rarity: "Common", icon: "🐲", imageUrl: "Cards/skeleton_dragons.webp" },
    { name: "Fire Spirit", type: "Troop", elixir: 1, rarity: "Common", icon: "🔥", imageUrl: "Cards/fire_spirit.webp" },
    { name: "Ice Spirit", type: "Troop", elixir: 1, rarity: "Common", icon: "❄️", imageUrl: "Cards/ice_spirit.webp" },
    { name: "Electro Spirit", type: "Troop", elixir: 1, rarity: "Common", icon: "⚡", imageUrl: "Cards/electro_spirit.webp" },
    { name: "Rascals", type: "Troop", elixir: 5, rarity: "Common", icon: "👦", imageUrl: "Cards/rascals.webp" },
    { name: "Skeleton Barrel", type: "Troop", elixir: 3, rarity: "Common", icon: "💀", imageUrl: "Cards/skeleton_barrel.webp" },
    { name: "Bats", type: "Troop", elixir: 2, rarity: "Common", icon: "🦇", imageUrl: "Cards/bats.webp" },
    { name: "Firecracker", type: "Troop", elixir: 3, rarity: "Common", icon: "🎆", imageUrl: "Cards/firecracker.webp" },
    { name: "Minion Horde", type: "Troop", elixir: 5, rarity: "Common", icon: "🦇", imageUrl: "Cards/minion_horde.webp" },
    { name: "Berserker", type: "Troop", elixir: 2, rarity: "Common", icon: "⚔️", imageUrl: "Cards/berserker.webp" },
    { name: "Fireball", type: "Spell", elixir: 4, rarity: "Rare", icon: "🔥", imageUrl: "Cards/fireball.webp" },
    { name: "Arrows", type: "Spell", elixir: 3, rarity: "Common", icon: "🏹", imageUrl: "Cards/arrows.webp" },
    { name: "Rocket", type: "Spell", elixir: 6, rarity: "Rare", icon: "🚀", imageUrl: "Cards/rocket.webp" },
    { name: "Zap", type: "Spell", elixir: 2, rarity: "Common", icon: "⚡", imageUrl: "Cards/zap.webp" },
    { name: "Giant Snowball", type: "Spell", elixir: 2, rarity: "Common", icon: "❄️", imageUrl: "Cards/giant_snowball.webp" },
    { name: "Royal Delivery", type: "Spell", elixir: 3, rarity: "Common", icon: "📦", imageUrl: "Cards/royal_delivery.webp" },
    { name: "Earthquake", type: "Spell", elixir: 3, rarity: "Rare", icon: "🌋", imageUrl: "Cards/earthquake.webp" },
    { name: "Heal", type: "Spell", elixir: 1, rarity: "Rare", icon: "💖", imageUrl: "Cards/heal.webp" },

// ===== BUILDING CARDS =====
    { name: "Cannon", type: "Building", elixir: 3, rarity: "Common", icon: "🔫", imageUrl: "Cards/cannon.webp" },
    { name: "Mortar", type: "Building", elixir: 4, rarity: "Common", icon: "💥", imageUrl: "Cards/mortar.webp" },
    { name: "Tesla", type: "Building", elixir: 4, rarity: "Common", icon: "⚡", imageUrl: "Cards/tesla.webp" },
    { name: "X-Bow", type: "Building", elixir: 6, rarity: "Epic", icon: "🏹", imageUrl: "Cards/x-bow.webp" },
    { name: "Inferno Tower", type: "Building", elixir: 5, rarity: "Rare", icon: "🔥", imageUrl: "Cards/inferno_tower.webp" },
    { name: "Bomb Tower", type: "Building", elixir: 4, rarity: "Rare", icon: "💣", imageUrl: "Cards/bomb_tower.webp" },
    { name: "Goblin Hut", type: "Building", elixir: 4, rarity: "Rare", icon: "🏠", imageUrl: "Cards/goblin_hut.webp" },
    { name: "Barbarian Hut", type: "Building", elixir: 6, rarity: "Rare", icon: "🏠", imageUrl: "Cards/barbarian_hut.webp" },
    { name: "Furnace", type: "Building", elixir: 4, rarity: "Rare", icon: "🔥", imageUrl: "Cards/furnace.webp" },
    { name: "Goblin Cage", type: "Building", elixir: 4, rarity: "Rare", icon: "🐀", imageUrl: "Cards/goblin_cage.webp" },
    { name: "Goblin Drill", type: "Building", elixir: 4, rarity: "Epic", icon: "⛏️", imageUrl: "Cards/goblin_drill.webp" },
    { name: "Tombstone", type: "Building", elixir: 3, rarity: "Rare", icon: "🪦", imageUrl: "Cards/tombstone.webp" },
    { name: "Elixir Collector", type: "Building", elixir: 6, rarity: "Rare", icon: "⚗️", imageUrl: "Cards/elixir_collector.webp" },
];

console.log(`Loaded ${cards.length} Clash Royale cards with local webp images!`);

// Game state
let gameState = {
    currentMode: null,
    targetCard: null,
    attempts: 0,
    maxAttempts: Infinity,
    streak: 0,
    timeLeft: 60,
    timer: null,
    gameActive: false,
    guessedCards: [],
    imageRevealLevel: 0,
    maxRevealLevel: 10,
    imageDifficulty: 'medium'
};

// DOM elements
const homeScreen = document.getElementById('home-screen');
const gameScreen = document.getElementById('game-screen');
const modeCards = document.querySelectorAll('.mode-card');
const homeBtn = document.getElementById('home-btn');
const guessInput = document.getElementById('guess-input');
const guessBtn = document.getElementById('guess-btn');
const autocompleteList = document.getElementById('autocomplete-list');
const guessLog = document.getElementById('guess-log');
const gameResult = document.getElementById('game-result');
const resultTitle = document.getElementById('result-title');
const resultCard = document.getElementById('result-card');
const resultAttempts = document.getElementById('result-attempts');
const resultTime = document.getElementById('result-time');
const newGameBtn = document.getElementById('new-game-btn');
const streakDisplay = document.getElementById('streak-display');
const timerDisplay = document.getElementById('timer-display');
const attemptsDisplay = document.getElementById('attempts-display');
const imageGuessContainer = document.getElementById('image-guess-container');
const cardImg = document.getElementById('card-img');
const cardPlaceholder = document.getElementById('card-placeholder');

// Event listeners
modeCards.forEach(card => {
    card.addEventListener('click', () => startGame(card.dataset.mode));
});

homeBtn.addEventListener('click', goHome);
guessBtn.addEventListener('click', processGuess);
newGameBtn.addEventListener('click', () => startGame(gameState.currentMode));

guessInput.addEventListener('input', handleAutocomplete);
guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') processGuess();
});

// Autocomplete functionality
function handleAutocomplete() {
    const input = guessInput.value.toLowerCase();
    autocompleteList.innerHTML = '';

    if (input.length < 2) {
        autocompleteList.style.display = 'none';
        return;
    }

    const matches = cards.filter(card =>
        card.name.toLowerCase().includes(input) &&
        !gameState.guessedCards.includes(card.name)
    ).slice(0, 5);

    if (matches.length > 0) {
        matches.forEach(card => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';

            // Add card image to autocomplete
            if (card.imageUrl) {
                const img = document.createElement('img');
                img.src = card.imageUrl;
                img.alt = card.name;
                item.appendChild(img);
            }

            const text = document.createElement('span');
            text.textContent = card.name;
            item.appendChild(text);

            item.addEventListener('click', () => {
                guessInput.value = card.name;
                autocompleteList.style.display = 'none';
            });
            autocompleteList.appendChild(item);
        });
        autocompleteList.style.display = 'block';
    } else {
        autocompleteList.style.display = 'none';
    }
}

// Game functions
function startGame(mode) {
    gameState.currentMode = mode;
    gameState.targetCard = cards[Math.floor(Math.random() * cards.length)];
    gameState.attempts = 0;
    gameState.guessedCards = [];
    gameState.gameActive = true;
    gameState.imageRevealLevel = 0;

    // Reset UI
    guessLog.innerHTML = '';
    gameResult.style.display = 'none';
    guessInput.value = '';
    guessInput.disabled = false;
    guessBtn.disabled = false;

    // Set mode-specific parameters
    switch(mode) {
        case 'normal':
            gameState.maxAttempts = Infinity;
            gameState.streak = 0;
            break;
        case 'streak':
            gameState.maxAttempts = 5;
            gameState.streak = 0;
            break;
        case 'time':
            gameState.maxAttempts = Infinity;
            gameState.timeLeft = 60;
            startTimer();
            break;
        case 'image':
            gameState.maxAttempts = Infinity;
            imageGuessContainer.style.display = 'block';
            updateImageReveal();
            break;
    }

    updateDisplay();
    homeScreen.style.display = 'none';
    gameScreen.style.display = 'block';
}

function updateImageReveal() {
    const container = document.getElementById('card-image-large');
    const revealLevelElement = document.getElementById('reveal-level');

    const revealPercent = Math.round((gameState.imageRevealLevel / gameState.maxRevealLevel) * 100);
    revealLevelElement.textContent = `${revealPercent}%`;

    if (gameState.targetCard.imageUrl) {
        const oldImg = container.querySelector('img');
        if (oldImg) oldImg.remove();

        const img = document.createElement('img');
        img.alt = "Guess this card";
        img.id = 'card-img';

        // WIĘKSZA PIXELACJA - WOLNIEJSZE ODSŁANIANIE
        const pixelSizes = [38,32,26,16,6,4,3,2,1]; // Od 40px do 1px
        const pixelSize = pixelSizes[gameState.imageRevealLevel] || 1;

        // WOLNIEJSZE ROZJAŚNIANIE
        const brightnessLevels = [20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 100];
        const brightness = brightnessLevels[gameState.imageRevealLevel] || 100;

        createHighQualityPixelation(img, gameState.targetCard.imageUrl, pixelSize, brightness);

        container.appendChild(img);
        cardPlaceholder.style.display = 'none';
    } else {
        cardImg.style.display = 'none';
        cardPlaceholder.style.display = 'block';
        cardPlaceholder.textContent = gameState.targetCard.icon;
    }
}

// FUNKCJA PIXELACJI
function createHighQualityPixelation(imgElement, imageUrl, pixelSize, brightness) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = imageUrl;
    img.crossOrigin = "anonymous";

    img.onload = function() {
        const targetSize = 150;
        canvas.width = targetSize;
        canvas.height = targetSize;

        // WYŁĄCZAMY WYGŁADZANIE
        ctx.imageSmoothingEnabled = false;
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.msImageSmoothingEnabled = false;

        // Rysujemy obraz w BARDZO MAŁEJ rozdzielczości
        const smallWidth = Math.floor(targetSize / pixelSize);
        const smallHeight = Math.floor(targetSize / pixelSize);

        // 1. Rysujemy pomniejszony obraz (to tworzy pixelację)
        ctx.drawImage(img, 0, 0, smallWidth, smallHeight);

        // 2. Powiększamy go do pełnego rozmiaru (zachowując pixelację)
        ctx.drawImage(canvas, 0, 0, smallWidth, smallHeight, 0, 0, targetSize, targetSize);

        // 3. Dodajemy efekt ciemności
        if (brightness < 100) {
            ctx.fillStyle = `rgba(0, 0, 0, ${(100 - brightness) / 150})`;
            ctx.fillRect(0, 0, targetSize, targetSize);
        }

        // Ustawiamy wynikowy obraz
        imgElement.src = canvas.toDataURL();
        imgElement.style.width = targetSize + 'px';
        imgElement.style.height = targetSize + 'px';
        imgElement.style.borderRadius = '12px';
        imgElement.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    };

    img.onerror = function() {
        // Fallback
        imgElement.src = imageUrl;
        imgElement.style.width = '150px';
        imgElement.style.height = '150px';
        imgElement.style.imageRendering = 'pixelated';
        imgElement.style.filter = `brightness(${brightness}%)`;
        imgElement.style.borderRadius = '12px';
    };
}

function createPixelatedImage(imgElement, pixelSize, brightness) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const originalImg = new Image();
    originalImg.src = imgElement.src;
    originalImg.crossOrigin = "anonymous";

    originalImg.onload = function() {
        // Ustawiamy rozmiar canvas
        canvas.width = 150;
        canvas.height = 150;

        // Wyłączamy wygładzanie
        ctx.imageSmoothingEnabled = false;
        ctx.mozImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.msImageSmoothingEnabled = false;

        // Rysujemy obraz w małej rozdzielczości i powiększamy
        const smallWidth = Math.floor(150 / pixelSize);
        const smallHeight = Math.floor(150 / pixelSize);

        // Rysujemy pomniejszony obraz
        ctx.drawImage(originalImg, 0, 0, smallWidth, smallHeight);

        // Powiększamy go z pixelacją
        ctx.drawImage(canvas, 0, 0, smallWidth, smallHeight, 0, 0, 150, 150);

        // Dodajemy efekt jasności
        if (brightness < 100) {
            ctx.fillStyle = `rgba(0, 0, 0, ${(100 - brightness) / 100})`;
            ctx.fillRect(0, 0, 150, 150);
        }

        // Ustawiamy wynikowy obraz
        imgElement.src = canvas.toDataURL();
        imgElement.style.width = '150px';
        imgElement.style.height = '150px';
        imgElement.style.borderRadius = '12px';
        imgElement.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    };
}

function goHome() {
    clearInterval(gameState.timer);
    homeScreen.style.display = 'block';
    gameScreen.style.display = 'none';
    gameState.gameActive = false;
}

function processGuess() {
    if (!gameState.gameActive) return;

    const guess = guessInput.value.trim();
    if (!guess) return;

    const card = cards.find(c => c.name.toLowerCase() === guess.toLowerCase());
    if (!card) {
        alert('Invalid card name! Please select from the autocomplete list.');
        return;
    }

    if (gameState.guessedCards.includes(card.name)) {
        alert('You already guessed this card!');
        return;
    }

    gameState.attempts++;
    gameState.guessedCards.push(card.name);

    // NOWE: Zwiększamy poziom odsłonięcia obrazka przy każdej błędnej próbie
    if (gameState.currentMode === 'image' && card.name !== gameState.targetCard.name) {
        if (gameState.imageRevealLevel < gameState.maxRevealLevel) {
            gameState.imageRevealLevel++;
            updateImageReveal();
        }
    }

    addGuessToLog(card);
    guessInput.value = '';
    autocompleteList.style.display = 'none';

    // Check if guess is correct
    if (card.name === gameState.targetCard.name) {
        endGame(true);
    } else if (gameState.attempts >= gameState.maxAttempts) {
        endGame(false);
    }

    updateDisplay();
}


function addGuessToLog(guessedCard) {
    const row = document.createElement('div');
    row.className = 'guess-row';

    if (gameState.currentMode === 'image') {
        // W trybie image pokazujemy tylko nazwę karty bez kolorów
        const nameCell = document.createElement('div');
        nameCell.className = 'guess-cell cell-name cell-image-mode';
        nameCell.textContent = guessedCard.name;
        row.appendChild(nameCell);

        // Puste komórki dla wyrównania
        const emptyCell1 = document.createElement('div');
        emptyCell1.className = 'guess-cell cell-image-mode';
        emptyCell1.textContent = "?";
        row.appendChild(emptyCell1);

        const emptyCell2 = document.createElement('div');
        emptyCell2.className = 'guess-cell cell-image-mode';
        emptyCell2.textContent = "?";
        row.appendChild(emptyCell2);

        const emptyCell3 = document.createElement('div');
        emptyCell3.className = 'guess-cell cell-image-mode';
        emptyCell3.textContent = "?";
        row.appendChild(emptyCell3);

        // Icon cell - ale bez koloru
        const iconCell = document.createElement('div');
        iconCell.className = 'guess-cell cell-icon cell-image-mode';

        if (guessedCard.imageUrl) {
            const img = document.createElement('img');
            img.src = guessedCard.imageUrl;
            img.className = 'card-icon-image';
            img.alt = guessedCard.name;
            iconCell.appendChild(img);
        } else {
            iconCell.textContent = guessedCard.icon;
        }
        row.appendChild(iconCell);

    } else {
        // Normalny tryb - pokazujemy wszystkie informacje z kolorami
        // Name cell
        const nameCell = document.createElement('div');
        nameCell.className = `guess-cell cell-name ${getCellClass('name', guessedCard)}`;
        nameCell.textContent = guessedCard.name;
        row.appendChild(nameCell);

        // Type cell
        const typeCell = document.createElement('div');
        typeCell.className = `guess-cell ${getCellClass('type', guessedCard)}`;
        typeCell.textContent = guessedCard.type;
        row.appendChild(typeCell);

        // Elixir cell
        const elixirCell = document.createElement('div');
        elixirCell.className = `guess-cell ${getCellClass('elixir', guessedCard)}`;
        elixirCell.textContent = guessedCard.elixir;
        row.appendChild(elixirCell);

        // Rarity cell
        const rarityCell = document.createElement('div');
        rarityCell.className = `guess-cell ${getCellClass('rarity', guessedCard)}`;
        rarityCell.textContent = guessedCard.rarity;
        row.appendChild(rarityCell);

        // Icon cell
        const iconCell = document.createElement('div');
        iconCell.className = `guess-cell cell-icon ${getCellClass('icon', guessedCard)}`;

        if (guessedCard.imageUrl) {
            const img = document.createElement('img');
            img.src = guessedCard.imageUrl;
            img.className = 'card-icon-image';
            img.alt = guessedCard.name;
            iconCell.appendChild(img);
        } else {
            iconCell.textContent = guessedCard.icon;
        }
        row.appendChild(iconCell);
    }

    // Add animation
    setTimeout(() => {
        row.classList.add('reveal');
        const cells = row.querySelectorAll('.guess-cell');
        cells.forEach((cell, index) => {
            setTimeout(() => {
                cell.classList.add('flip');
            }, index * 100);
        });
    }, 10);

    // Add to top of log
    guessLog.insertBefore(row, guessLog.firstChild);
}

// W funkcji processGuess - USUWAMY zwiększanie poziomu odsłonięcia przy każdej próbie
function processGuess() {
    if (!gameState.gameActive) return;

    const guess = guessInput.value.trim();
    if (!guess) return;

    const card = cards.find(c => c.name.toLowerCase() === guess.toLowerCase());
    if (!card) {
        alert('Invalid card name! Please select from the autocomplete list.');
        return;
    }

    if (gameState.guessedCards.includes(card.name)) {
        alert('You already guessed this card!');
        return;
    }

    gameState.attempts++;
    gameState.guessedCards.push(card.name);

    // Zwiększamy poziom odsłonięcia obrazka przy każdej błędnej próbie
    if (gameState.currentMode === 'image' && card.name !== gameState.targetCard.name) {
        if (gameState.imageRevealLevel < gameState.maxRevealLevel) {
            gameState.imageRevealLevel++;
            updateImageReveal();
        }
    }

    addGuessToLog(card);
    guessInput.value = '';
    autocompleteList.style.display = 'none';

    // Check if guess is correct
    if (card.name === gameState.targetCard.name) {
        endGame(true);
    } else if (gameState.attempts >= gameState.maxAttempts) {
        endGame(false);
    }

    updateDisplay();
}

function getCellClass(property, guessedCard) {
    const targetValue = gameState.targetCard[property];
    const guessedValue = guessedCard[property];

    if (property === 'elixir') {
        if (guessedValue === targetValue) return 'cell-correct';
        if (Math.abs(guessedValue - targetValue) <= 1) return 'cell-close';
        return 'cell-wrong';
    }

    if (guessedValue === targetValue) return 'cell-correct';
    return 'cell-wrong';
}

function updateDisplay() {
    streakDisplay.textContent = `🔥 Streak: ${gameState.streak}`;
    timerDisplay.textContent = `⏱️ Time: ${gameState.timeLeft}s`;

    if (gameState.maxAttempts === Infinity) {
        attemptsDisplay.textContent = `Attempts: ${gameState.attempts}/∞`;
    } else {
        attemptsDisplay.textContent = `Attempts: ${gameState.attempts}/${gameState.maxAttempts}`;
    }

    // Hide image container for non-image modes
    if (gameState.currentMode !== 'image') {
        imageGuessContainer.style.display = 'none';
    }
}

function startTimer() {
    clearInterval(gameState.timer);
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        updateDisplay();

        if (gameState.timeLeft <= 0) {
            endGame(false);
        }
    }, 1000);
}

function endGame(isWin) {
    gameState.gameActive = false;
    clearInterval(gameState.timer);
    guessInput.disabled = true;
    guessBtn.disabled = true;

    // NOWE: W trybie image pokazujemy pełny obrazek na koniec
    if (gameState.currentMode === 'image') {
        gameState.imageRevealLevel = gameState.maxRevealLevel;
        updateImageReveal();
    }

    if (isWin) {
        resultTitle.textContent = '🎉 Congratulations! 🎉';
        resultCard.textContent = `You guessed ${gameState.targetCard.name} correctly!`;

        if (gameState.currentMode === 'streak') {
            gameState.streak++;
        } else if (gameState.currentMode === 'time') {
            setTimeout(() => startGame('time'), 1500);
            return;
        }
    } else {
        resultTitle.textContent = '💀 Game Over 💀';
        resultCard.textContent = `The card was ${gameState.targetCard.name}`;

        if (gameState.currentMode === 'streak') {
            gameState.streak = 0;
        }
    }

    resultAttempts.textContent = `Attempts: ${gameState.attempts}`;

    if (gameState.currentMode === 'time') {
        resultTime.textContent = `Time Left: ${gameState.timeLeft}s`;
    } else {
        resultTime.textContent = '';
    }

    gameResult.style.display = 'block';
}

// Initialize the game
updateDisplay();
console.log('Clash Royale Card Guesser loaded successfully!');