// Fix Leaflet default icon path for offline use
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'assets/leaflet/images/marker-icon-2x.png',
    iconUrl: 'assets/leaflet/images/marker-icon.png',
    shadowUrl: 'assets/leaflet/images/marker-shadow.png',
});

// ─── Room Data ───────────────────────────────────────────────────────────────
const roomsData = [
    // First Floor
    { id: 1,  name: 'CDJP Office',     floor: 1, category: 'Admnistration',                   coordinates: [87, 1250],  image: '👨‍💼' },
    { id: 2,  name: 'Student Affairs', floor: 1, category: 'Administration',                  coordinates: [185, 1250],  image: '👨‍💼' },
    { id: 3,  name: 'Registrar Office',  floor: 1, category: 'Administration',             coordinates: [401, 1250],  image: '📝' },
    { id: 4,  name: 'Accounting Office', floor: 1, category: 'Administration',               coordinates: [407, 1445], image: '💵' },
    { id: 5,  name: 'Stock & Inventory Office',floor: 1, category: 'Administration',         coordinates: [760, 1630],  image: '📦' },
    { id: 6,  name: 'Library',floor: 1, category: 'Library',         coordinates: [971, 1507],  image: '📚' },
    { id: 7,  name: 'Admission Office',floor: 1, category: 'Administration',         coordinates: [121, 670],  image: '👨‍💼' },
    { id: 8,  name: 'Testing Room',floor: 1, category: 'Health Services',         coordinates: [240, 670],  image: '👨‍⚕️' },
    { id: 9,  name: 'Social Lounge',floor: 1, category: 'Administration',         coordinates: [417, 670],  image: '🤝' },
    { id: 10,  name: 'Family Clinic',floor: 1, category: 'Health Services',         coordinates: [125, 435],  image: '👨‍⚕️' },
    { id: 11,  name: 'Drug Testing',floor: 1, category: 'Health Services',         coordinates: [419, 435],  image: '👨‍⚕️' },
    { id: 12,  name: 'Engineering Laboratory',floor: 1, category: 'Laboratory',         coordinates: [676, 855],  image: '💡' },
    { id: 13,  name: 'Criminology Laboratory',floor: 1, category: 'Laboratory',         coordinates: [794, 855],  image: '🕵️‍♀️' },
    { id: 14,  name: 'HRM Demo Room',floor: 1, category: 'Hospitality',         coordinates: [908, 855],  image: '🛎️' },
    { id: 15,  name: 'HRM Tools & Equipment Room',floor: 1, category: 'Hospitality',         coordinates: [1010, 855],  image: '🛎️' },

    // Second Floor
    { id: 20, name: 'Academic Affairs Office',      floor: 2, category: 'Administration', coordinates: [461, 1060], image: '👨‍💼' },
    { id: 21, name: 'Faculty Room 1',               floor: 2, category: 'Administration', coordinates: [345, 1060], image: '👨‍💼' },
    { id: 22, name: 'Faculty Room 2',               floor: 2, category: 'Administration', coordinates: [81,  1060], image: '👨‍💼' },
    { id: 23, name: 'Office of the VP',             floor: 2, category: 'Administration', coordinates: [173, 1060], image: '👨‍💼' },
    { id: 24, name: 'Judicial Court 1',             floor: 2, category: 'Administration', coordinates: [411, 1520], image: '👨‍💼' },
    { id: 25, name: 'Judicial Court 2',             floor: 2, category: 'Administration', coordinates: [199, 1520], image: '👨‍💼' },
    { id: 26, name: 'Multi Purpose Academic Hall',  floor: 2, category: 'Administration', coordinates: [303, 1520], image: '👨‍💼' },
    { id: 27, name: 'Office of the College Deans',  floor: 2, category: 'Administration', coordinates: [81,  1520], image: '👨‍💼' },
    { id: 28, name: 'B2.21', floor: 2, category: 'Academic',    coordinates: [733,  1210], image: '💻' },
    { id: 29, name: 'B2.22', floor: 2, category: 'Academic',    coordinates: [857,  1210], image: '💻' },
    { id: 30, name: 'B2.23', floor: 2, category: 'Academic',    coordinates: [1001, 1210], image: '💻' },
    { id: 31, name: 'B2.24', floor: 2, category: 'Academic',    coordinates: [721,  1520], image: '💻' },
    { id: 32, name: 'B2.25', floor: 2, category: 'Academic',    coordinates: [857,  1520], image: '💻' },
    { id: 33, name: 'B2.26', floor: 2, category: 'Academic',    coordinates: [1003, 1520], image: '💻' },
    { id: 34, name: 'B4.21', floor: 2, category: 'Laboratory',  coordinates: [757,  400],  image: '💻' },
    { id: 35, name: 'B4.22', floor: 2, category: 'Laboratory',  coordinates: [981,  400],  image: '💻' },
    { id: 36, name: 'B4.23', floor: 2, category: 'Laboratory',  coordinates: [735,  700],  image: '💻' },
    { id: 37, name: 'B4.24', floor: 2, category: 'Laboratory',  coordinates: [877,  700],  image: '💻' },
    { id: 38, name: 'B4.25', floor: 2, category: 'Laboratory',  coordinates: [1001, 700],  image: '👨‍💼' },

    // Third Floor
    { id: 39, name: 'Gym Basketball Court', floor: 3, category: 'Recreational & Event Facilities', coordinates: [303,  1000], image: '🏀' },
    { id: 40, name: 'B2.31', floor: 3, category: 'Academic', coordinates: [713,  1210], image: '📖' },
    { id: 41, name: 'B2.32', floor: 3, category: 'Academic', coordinates: [811,  1210], image: '📖' },
    { id: 42, name: 'B2.33', floor: 3, category: 'Academic', coordinates: [909,  1210], image: '📖' },
    { id: 43, name: 'B2.34', floor: 3, category: 'Academic', coordinates: [1013, 1210], image: '📖' },
    { id: 44, name: 'B2.35', floor: 3, category: 'Academic', coordinates: [706,  1520], image: '📖' },
    { id: 45, name: 'B2.36', floor: 3, category: 'Academic', coordinates: [808,  1520], image: '📖' },
    { id: 46, name: 'B2.37', floor: 3, category: 'Academic', coordinates: [917,  1520], image: '📖' },
    { id: 47, name: 'B2.38', floor: 3, category: 'Academic', coordinates: [1015, 1520], image: '📖' },
    { id: 48, name: 'B4.31', floor: 3, category: 'Academic', coordinates: [711,  400],  image: '📖' },
    { id: 49, name: 'B4.32', floor: 3, category: 'Academic', coordinates: [816,  400],  image: '📖' },
    { id: 50, name: 'B4.33', floor: 3, category: 'Academic', coordinates: [916,  400],  image: '📖' },
    { id: 51, name: 'B4.34', floor: 3, category: 'Academic', coordinates: [1010, 400],  image: '📖' },
    { id: 52, name: 'B4.35', floor: 3, category: 'Academic', coordinates: [710,  700],  image: '📖' },
    { id: 53, name: 'B4.36', floor: 3, category: 'Academic', coordinates: [811,  700],  image: '📖' },
    { id: 54, name: 'B4.37', floor: 3, category: 'Academic', coordinates: [917,  700],  image: '📖' },
    { id: 55, name: 'B4.38', floor: 3, category: 'Academic', coordinates: [1017, 700],  image: '📖' },

    // Fourth Floor
    { id: 56, name: 'B2.41', floor: 4, category: 'Academic', coordinates: [709,  1210], image: '📖' },
    { id: 57, name: 'B2.42', floor: 4, category: 'Academic', coordinates: [812,  1210], image: '📖' },
    { id: 58, name: 'B2.43', floor: 4, category: 'Academic', coordinates: [909,  1210], image: '📖' },
    { id: 59, name: 'B2.44', floor: 4, category: 'Academic', coordinates: [1013, 1210], image: '📖' },
    { id: 60, name: 'B2.45', floor: 4, category: 'Academic', coordinates: [706,  1520], image: '📖' },
    { id: 61, name: 'B2.46', floor: 4, category: 'Academic', coordinates: [808,  1520], image: '📖' },
    { id: 62, name: 'B2.47', floor: 4, category: 'Academic', coordinates: [917,  1520], image: '📖' },
    { id: 63, name: 'B2.48', floor: 4, category: 'Academic', coordinates: [1015, 1520], image: '📖' },
    { id: 64, name: 'B4.41', floor: 4, category: 'Academic', coordinates: [711,  400],  image: '📖' },
    { id: 65, name: 'B4.42', floor: 4, category: 'Academic', coordinates: [816,  400],  image: '📖' },
    { id: 66, name: 'B4.43', floor: 4, category: 'Academic', coordinates: [916,  400],  image: '📖' },
    { id: 67, name: 'B4.44', floor: 4, category: 'Academic', coordinates: [1010, 400],  image: '📖' },
    { id: 68, name: 'B4.45', floor: 4, category: 'Academic', coordinates: [710,  700],  image: '📖' },
    { id: 69, name: 'B4.46', floor: 4, category: 'Academic', coordinates: [811,  700],  image: '📖' },
    { id: 70, name: 'B4.47', floor: 4, category: 'Academic', coordinates: [917,  700],  image: '📖' },
    { id: 71, name: 'B4.48', floor: 4, category: 'Academic', coordinates: [1017, 700],  image: '📖' },

    // Fifth Floor
    { id: 72, name: 'B2.51', floor: 5, category: 'Academic', coordinates: [403, 1335], image: '📖' },
    { id: 73, name: 'B2.52', floor: 5, category: 'Academic', coordinates: [583, 1335], image: '📖' },
    { id: 74, name: 'B2.53', floor: 5, category: 'Academic', coordinates: [763, 1335], image: '📖' },
    { id: 75, name: 'B2.54', floor: 5, category: 'Academic', coordinates: [946, 1335], image: '📖' },
    { id: 76, name: 'B2.55', floor: 5, category: 'Academic', coordinates: [406, 1515], image: '📖' },
    { id: 77, name: 'B2.56', floor: 5, category: 'Academic', coordinates: [583, 1515], image: '📖' },
    { id: 78, name: 'B2.57', floor: 5, category: 'Academic', coordinates: [770, 1515], image: '📖' },
    { id: 79, name: 'B2.58', floor: 5, category: 'Academic', coordinates: [948, 1515], image: '📖' },
    { id: 80, name: 'B4.51', floor: 5, category: 'Academic', coordinates: [407, 370],  image: '📖' },
    { id: 81, name: 'B4.52', floor: 5, category: 'Academic', coordinates: [587, 370],  image: '📖' },
    { id: 82, name: 'B4.53', floor: 5, category: 'Academic', coordinates: [772, 370],  image: '📖' },
    { id: 83, name: 'B4.54', floor: 5, category: 'Academic', coordinates: [954, 370],  image: '📖' },
    { id: 84, name: 'B4.55', floor: 5, category: 'Academic', coordinates: [407, 580],  image: '📖' },
    { id: 85, name: 'B4.56', floor: 5, category: 'Academic', coordinates: [598, 580],  image: '📖' },
    { id: 86, name: 'B4.57', floor: 5, category: 'Academic', coordinates: [774, 580],  image: '📖' },
    { id: 87, name: 'B4.58', floor: 5, category: 'Academic', coordinates: [955, 580],  image: '📖' },

    // Sixth Floor
    { id: 88, name: 'Gymnasium',      floor: 6, category: 'Recreational & Event Facilities', coordinates: [433, 1413], image: '🏃‍♀️' },
    { id: 89, name: 'The ICCT Theatre',floor: 6, category: 'Recreational & Event Facilities', coordinates: [441, 468],  image: '🎬' },

    // Seventh Floor
    { id: 90, name: 'The ICCT Theatre Balcony', floor: 7, category: 'Recreational & Event Facilities', coordinates: [441, 468], image: '🎬' },
];

// ─── Floor Plan Image Config ──────────────────────────────────────────────────
const floorPlanConfig = {
    1: { image: 'floor1.jpg', bounds: [[0, 0], [1080, 1920]] },
    2: { image: 'floor2.jpg', bounds: [[0, 0], [1080, 1920]] },
    3: { image: 'floor3.jpg', bounds: [[0, 0], [1080, 1920]] },
    4: { image: 'floor4.jpg', bounds: [[0, 0], [1080, 1920]] },
    5: { image: 'floor5.jpg', bounds: [[0, 0], [1080, 1920]] },
    6: { image: 'floor6.jpg', bounds: [[0, 0], [1080, 1920]] },
    7: { image: 'floor7.jpg', bounds: [[0, 0], [1080, 1920]] },
};

// ─── Category Colors ──────────────────────────────────────────────────────────
const categoryColors = {
    'Classroom':           '#3b82f6',
    'Computer Laboratory': '#8b5cf6',
    'Laboratory':          '#8b5cf6',
    'Office':              '#10b981',
    'Facility':            '#f59e0b',
    'Special':             '#ec4899',
};

// ─── State ────────────────────────────────────────────────────────────────────
let currentPage = 'welcome';
let currentFloor = null;
let map = null;
let markers = [];
let searchResults = [];
let currentImageOverlay = null;

// ─── Page Elements ────────────────────────────────────────────────────────────
// NOTE: Initialized inside init() to ensure DOM is ready before querying elements
let pages = {};

// ─── Init ─────────────────────────────────────────────────────────────────────
function init() {
    pages = {
        welcome: document.getElementById('welcomePage'),
        main:    document.getElementById('mainPage'),
        search:  document.getElementById('searchPage'),
        floor:   document.getElementById('floorPage'),
        map:     document.getElementById('mapPage'),
    };
    setupEventListeners();
    createKeyboard();
}

// ─── Event Listeners ──────────────────────────────────────────────────────────
function setupEventListeners() {
    pages.welcome.addEventListener('click', () => showPage('main'));

    document.getElementById('searchBtn').addEventListener('click', () => showPage('search'));
    document.getElementById('mapBtn').addEventListener('click', () => {
        showPage('map');
        showFloorMap(1);
    });
    document.getElementById('mainBackBtn').addEventListener('click', () => showPage('welcome'));
    document.getElementById('mainHomeBtn').addEventListener('click', () => showPage('welcome'));

    document.getElementById('searchBackBtn').addEventListener('click', () => showPage('main'));
    document.getElementById('searchHomeBtn').addEventListener('click', () => showPage('welcome'));

    document.getElementById('floorBackBtn').addEventListener('click', () => showPage('main'));
    document.getElementById('floorHomeBtn').addEventListener('click', () => showPage('welcome'));
    document.querySelectorAll('.floor-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showPage('map');
            showFloorMap(parseInt(btn.dataset.floor));
        });
    });

    document.querySelectorAll('.floor-tab').forEach(tab => {
        tab.addEventListener('click', () => showFloorMap(parseInt(tab.dataset.floor)));
    });
    document.getElementById('mapBackBtn').addEventListener('click', () => showPage('main'));
    document.getElementById('mapHomeBtn').addEventListener('click', () => showPage('welcome'));

    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('roomModal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });

    document.getElementById('zoomInBtn').addEventListener('click',  () => { if (map) map.zoomIn(1);  });
    document.getElementById('zoomOutBtn').addEventListener('click', () => { if (map) map.zoomOut(1); });
}

// ─── Show Page ────────────────────────────────────────────────────────────────
function showPage(pageName) {
    Object.values(pages).forEach(p => p.classList.remove('active'));
    pages[pageName].classList.add('active');
    currentPage = pageName;

    const keyboard = document.getElementById('keyboard');
    keyboard.classList.toggle('visible', pageName === 'search');
    document.getElementById('searchNavButtons').style.display =
    pageName === 'search' ? 'flex' : 'none';

    // ✅ Show/hide search nav buttons
    document.getElementById('searchNavButtons').style.display =
        pageName === 'search' ? 'flex' : 'none';

    if (pageName !== 'search') {
        document.getElementById('searchInput').value = '';
        searchResults = [];
        updateSearchResults();
    }
}

// ─── Keyboard ─────────────────────────────────────────────────────────────────
function createKeyboard() {
    const keyboard = document.getElementById('keyboard');
    const layout = [
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L'],
        ['Z','X','C','V','B','N','M'],
        ['1','2','3','4','5','6','7','8','9','0','.'],
        ['SPACE','←','CLEAR'],
    ];

    layout.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'keyboard-row';
        row.forEach(key => {
            const btn = document.createElement('button');
            btn.className = 'key';
            btn.textContent = key === 'SPACE' ? '␣' : key === '←' ? '⌫' : key;
            if (key === 'SPACE')  btn.classList.add('space');
            if (key === '←')     btn.classList.add('backspace');
            if (key === 'CLEAR') btn.classList.add('clear');
            btn.addEventListener('click', () => handleKeyPress(key));
            rowDiv.appendChild(btn);
        });
        keyboard.appendChild(rowDiv);
    });
}

function handleKeyPress(key) {
    const input = document.getElementById('searchInput');
    if      (key === '←')     input.value = input.value.slice(0, -1);
    else if (key === 'SPACE')  input.value += ' ';
    else if (key === 'CLEAR')  input.value = '';
    else                       input.value += key;
    performSearch(input.value);
}

// ─── Search ───────────────────────────────────────────────────────────────────
function performSearch(query) {
    if (query.trim() === '') {
        searchResults = [];
        updateSearchResults();
        return;
    }
    const q = query.toLowerCase();
    searchResults = roomsData.filter(r =>
        r.name.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q)
    );
    updateSearchResults();
}

function updateSearchResults() {
    const container = document.getElementById('resultsContainer');
    const query = document.getElementById('searchInput').value.trim();

    if (searchResults.length === 0 && query !== '') {
        container.innerHTML = '<div class="not-found">❌ Not Found</div>';
        return;
    }
    if (searchResults.length === 0) {
        container.innerHTML = '<div class="not-found">Start typing to search...</div>';
        return;
    }

    container.innerHTML = searchResults.map(room => `
        <div class="result-item" onclick="showRoomOnMap(${room.id})">
            <div class="result-info">
                <h3>${room.name}</h3>
                <div class="result-meta">
                    <span>📍 Floor ${room.floor}</span>
                    <span class="category-badge" style="background:${categoryColors[room.category] || '#555'}">
                        ${room.category}
                    </span>
                </div>
            </div>
            <div style="font-size:2rem">${room.image}</div>
        </div>
    `).join('');
}

// ─── Map ──────────────────────────────────────────────────────────────────────
function showRoomOnMap(roomId) {
    const room = roomsData.find(r => r.id === roomId);
    if (!room) return;
    currentFloor = room.floor;
    showFloorMap(room.floor, roomId);
}

function showFloorMap(floor, highlightRoomId = null) {
    currentFloor = floor;
    showPage('map');

    document.querySelectorAll('.floor-tab').forEach(tab => {
        tab.classList.toggle('active', parseInt(tab.dataset.floor) === floor);
    });

    if (map) {
        map.remove();
        map = null;
        markers = [];
        currentImageOverlay = null;
    }

    map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -3,
        maxZoom: 3,
        zoomControl: false,
        zoomSnap: 0.25,
        zoomDelta: 0.5,
        wheelPxPerZoomLevel: 120,
        inertia: true,
        animate: true,
    });

    const { image, bounds } = floorPlanConfig[floor];
    map.fitBounds(bounds);

    currentImageOverlay = L.imageOverlay(image, bounds, {
        opacity: 0.8,
        interactive: false,
    }).addTo(map);

    const floorRooms = roomsData.filter(r => r.floor === floor);

    floorRooms.forEach(room => {
        const isHighlighted = room.id === highlightRoomId;
        const icon = L.divIcon({
            className: 'room-marker',
            html: `
                <div style="
                    text-align: center;
                    font-size: 2.5rem;
                    cursor: pointer;
                    transform-origin: center center;
                    ${isHighlighted ? 'animation: zoom 0.8s ease-in-out infinite;' : ''}
                ">${room.image}</div>
            `,
            iconSize: [40, 40],
            iconAnchor: [20, 20],
        });

        const marker = L.marker(room.coordinates, { icon })
            .addTo(map)
            .bindPopup(`
                <div class="room-popup" style="font-family:Lexend,sans-serif;text-align:center;">
                    <h3 style="margin-bottom:8px">${room.name}</h3>
                    <p style="margin-bottom:4px">Floor: ${room.floor}F</p>
                    <p style="color:${categoryColors[room.category]};font-weight:600">${room.category}</p>
                </div>
            `);

        marker.on('click', () => showRoomDetails(room.id));
        markers.push(marker);
    });

    if (highlightRoomId) {
        const room = floorRooms.find(r => r.id === highlightRoomId);
        if (room) {
            map.setView(room.coordinates, 0);
            setTimeout(() => showRoomDetails(highlightRoomId), 500);
        }
    }
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function showRoomDetails(roomId) {
    const room = roomsData.find(r => r.id === roomId);
    if (!room) return;

    document.getElementById('roomImage').textContent    = room.image;
    document.getElementById('roomName').textContent     = room.name;
    document.getElementById('roomLocation').textContent = `${room.floor}F`;

    const badge = document.getElementById('roomCategory');
    badge.textContent      = room.category;
    badge.style.background = categoryColors[room.category] || '#555';

    document.getElementById('roomModal').classList.add('active');
}

function closeModal() {
    document.getElementById('roomModal').classList.remove('active');
}

// ─── Bootstrap ────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', init);
