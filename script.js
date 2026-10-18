// State Management
const questions = [
    { id: 1, type: "start", cardType: "konsep" },
    { id: 2, type: "konsep" },
    { id: 3, type: "eksperimen" },
    { id: 4, type: "hitungan" },
    { id: 5, type: "kolaborasi" },
    { id: 6, type: "konsep" },
    { id: 7, type: "eksperimen" },
    { id: 8, type: "corner", cardType: "eksperimen" },
    { id: 9, type: "hitungan" },
    { id: 10, type: "kolaborasi" },
    { id: 11, type: "konsep" },
    { id: 12, type: "eksperimen" },
    { id: 13, type: "hitungan" },
    { id: 14, type: "kolaborasi" },
    { id: 15, type: "corner", cardType: "hitungan" },
    { id: 16, type: "konsep" },
    { id: 17, type: "eksperimen" },
    { id: 18, type: "hitungan" },
    { id: 19, type: "kolaborasi" },
    { id: 20, type: "konsep" },
    { id: 21, type: "eksperimen" },
    { id: 22, type: "corner", cardType: "kolaborasi" },
    { id: 23, type: "hitungan" },
    { id: 24, type: "kolaborasi" },
    { id: 25, type: "konsep" },
    { id: 26, type: "eksperimen" },
    { id: 27, type: "hitungan" },
    { id: 28, type: "kolaborasi" },
    { id: 29, type: "konsep" },
    { id: 30, type: "eksperimen" }
];

const essayQuestions = [
    { text: "Jelaskan pengertian kalor dengan bahasamu sendiri!", answer: "Kalor adalah energi yang berpindah dari benda bersuhu lebih tinggi ke benda bersuhu lebih rendah karena perbedaan suhu." },
    { text: "Jelaskan perbedaan antara suhu dan kalor!", answer: "Suhu menunjukkan derajat panas atau dingin benda, sedangkan kalor adalah energi yang berpindah akibat perbedaan suhu." },
    { text: "Mengapa setiap jenis benda membutuhkan jumlah kalor berbeda untuk menaikkan suhunya?", answer: "Setiap zat memiliki kalor jenis berbeda. Zat dengan kalor jenis lebih besar membutuhkan kalor lebih banyak untuk kenaikan suhu yang sama." },
    { text: "Jelaskan hubungan massa benda dengan jumlah kalor yang diperlukan!", answer: "Semakin besar massa benda, semakin banyak kalor yang dibutuhkan untuk perubahan suhu dan kalor jenis yang sama." },
    { text: "Mengapa air membutuhkan kalor cukup besar untuk menaikkan suhunya?", answer: "Air memiliki kalor jenis relatif besar, sekitar 4.200 J/(kg·°C)." },
    { text: "Apa yang dimaksud dengan kesetimbangan termal? Berikan contohnya!", answer: "Keadaan ketika benda yang berinteraksi mencapai suhu sama sehingga tidak ada perpindahan kalor bersih, misalnya air panas dan dingin yang dicampur." },
    { text: "Sebutkan enam macam perubahan wujud zat!", answer: "Mencair, membeku, menguap, mengembun, menyublim, dan mengkristal atau deposisi." },
    { text: "Jelaskan apa yang terjadi pada partikel zat ketika es mencair!", answer: "Es menyerap kalor; susunan partikelnya berubah dari relatif teratur menjadi dapat bergerak lebih bebas sebagai zat cair." },
    { text: "Mengapa suhu es tetap ketika sedang mencair meskipun terus diberi kalor?", answer: "Kalor digunakan untuk mengubah wujud es menjadi air, bukan menaikkan suhu, sampai seluruh es mencair." },
    { text: "Jelaskan perbedaan antara menguap dan mendidih!", answer: "Menguap terjadi di permukaan zat cair dan dapat berlangsung pada berbagai suhu. Mendidih terjadi di seluruh bagian zat cair pada suhu didih tertentu." },
    { text: "Mengapa pakaian yang dijemur di bawah sinar Matahari dapat menjadi kering?", answer: "Air pada pakaian menyerap energi dari lingkungan lalu menguap." },
    { text: "Jelaskan proses terbentuknya titik air di luar gelas berisi es!", answer: "Uap air di udara menyentuh permukaan gelas yang dingin, melepaskan energi, lalu mengembun. Air berasal dari udara." },
    { text: "Mengapa kapur barus lama-kelamaan habis meskipun tidak terlihat mencair?", answer: "Kapur barus menyublim, yaitu berubah langsung dari padat menjadi gas." },
    { text: "Apa yang dimaksud dengan kalor laten?", answer: "Kalor yang diserap atau dilepaskan untuk mengubah wujud zat tanpa mengubah suhunya." },
    { text: "Jelaskan perbedaan konduksi, konveksi, dan radiasi!", answer: "Konduksi tidak memindahkan zat secara keseluruhan; konveksi disertai perpindahan zat; radiasi merambat sebagai gelombang elektromagnetik tanpa medium." },
    { text: "Mengapa sendok logam yang dicelupkan ke air panas lama-kelamaan menjadi panas?", answer: "Kalor merambat dari ujung yang terkena air ke bagian sendok lainnya melalui konduksi." },
    { text: "Mengapa air yang dipanaskan dapat bergerak naik dan turun?", answer: "Air panas memuai dan massa jenisnya berkurang sehingga naik, sementara air lebih dingin turun; terbentuk arus konveksi." },
    { text: "Bagaimana panas Matahari sampai ke Bumi meskipun ruang angkasa hampir tidak memiliki udara?", answer: "Panas Matahari merambat melalui radiasi, yaitu gelombang elektromagnetik yang tidak memerlukan medium." },
    { text: "Jelaskan peran konveksi dalam terjadinya angin darat dan angin laut!", answer: "Perbedaan pemanasan darat dan laut menimbulkan perbedaan suhu dan tekanan udara yang membentuk sirkulasi: siang hari angin laut menuju darat, malam hari angin darat menuju laut." },
    { text: "Mengapa logam digunakan sebagai bahan utama bagian bawah panci?", answer: "Logam adalah konduktor yang baik sehingga kalor dari kompor berpindah efektif ke makanan atau air." },
    { text: "Mengapa pegangan panci biasanya dibuat dari plastik atau kayu?", answer: "Plastik dan kayu merupakan penghantar kalor yang buruk sehingga memperlambat perpindahan kalor ke tangan." },
    { text: "Jelaskan cara kerja termos dalam mengurangi perpindahan kalor!", answer: "Ruang hampa menghambat konduksi dan konveksi, permukaan reflektif mengurangi radiasi, dan penutup rapat mengurangi pertukaran udara." },
    { text: "Mengapa pakaian putih lebih nyaman digunakan pada siang hari yang panas?", answer: "Pakaian putih cenderung memantulkan lebih banyak radiasi Matahari sehingga menyerap lebih sedikit energi." },
    { text: "Mengapa dua benda yang menerima kalor sama dapat mengalami kenaikan suhu berbeda?", answer: "Massa atau kalor jenisnya dapat berbeda. Benda dengan hasil kali massa dan kalor jenis lebih kecil mengalami kenaikan suhu lebih besar." },
    { text: "Apa yang terjadi pada kalor dan suhu air panas serta air dingin hingga mencapai keseimbangan termal?", answer: "Kalor berpindah dari air panas ke air dingin; suhu air panas turun dan air dingin naik sampai sama. Dalam wadah terisolasi, kalor yang dilepas sama dengan yang diterima." },
    { text: "Apakah benda bersuhu tinggi pasti memiliki kalor lebih banyak? Jelaskan!", answer: "Tidak. Suhu bukan jumlah kalor; energi termal juga dipengaruhi massa dan jenis zat." }
];

const multipleChoiceQuestions = [
    { text: "Kalor berpindah dari benda yang ....", options: ["Bersuhu rendah ke bersuhu tinggi", "Bersuhu tinggi ke bersuhu rendah", "Bermassa besar ke bermassa kecil", "Berukuran besar ke berukuran kecil"], answer: 1 },
    { text: "Satuan SI untuk kalor adalah ....", options: ["Celsius", "Kelvin", "Joule", "Watt"], answer: 2 },
    { text: "Alat untuk mengukur suhu suatu benda adalah ....", options: ["Kalorimeter", "Termometer", "Barometer", "Higrometer"], answer: 1 },
    { text: "Kalor dapat berpindah karena adanya perbedaan ....", options: ["Massa", "Volume", "Suhu", "Warna"], answer: 2 },
    { text: "Kesetimbangan termal terjadi ketika dua benda memiliki ....", options: ["Massa sama", "Volume sama", "Suhu sama", "Bentuk sama"], answer: 2 },
    { text: "Hubungan yang benar antara kalori dan joule adalah ....", options: ["1 kalori ≈ 4,2 joule", "1 kalori = 42 joule", "1 kalori = 0,42 joule", "1 kalori = 420 joule"], answer: 0 },
    { text: "Banyaknya kalor untuk menaikkan suhu benda dipengaruhi oleh ....", options: ["Massa, kalor jenis, dan perubahan suhu", "Warna dan bentuk saja", "Volume saja", "Tekanan udara saja"], answer: 0 },
    { text: "Rumus kalor untuk perubahan suhu adalah ....", options: ["Q = cΔT", "Q = mcΔT", "Q = m + c + ΔT", "Q = ΔT"], answer: 1 },
    { text: "Dalam rumus Q = mcΔT, simbol c menyatakan ....", options: ["Suhu akhir", "Kalor jenis", "Massa", "Kalor"], answer: 1 },
    { text: "Satuan kalor jenis dalam SI adalah ....", options: ["J/kg", "J/(kg·°C)", "J·°C/kg", "kg/J·°C"], answer: 1 },
    { text: "Bahan pegangan panci yang penghantaran kalornya rendah adalah ....", options: ["Besi", "Tembaga", "Aluminium", "Kayu"], answer: 3 },
    { text: "Benda bermassa 2 kg, kalor jenis 500 J/(kg·°C), naik suhu 10°C. Kalor yang diterima adalah ....", options: ["1.000 J", "5.000 J", "10.000 J", "20.000 J"], answer: 2 },
    { text: "Air 1 kg dipanaskan dari 25°C ke 35°C (c = 4.200 J/(kg·°C)). Kalor yang diperlukan adalah ....", options: ["4.200 J", "21.000 J", "42.000 J", "84.000 J"], answer: 2 },
    { text: "Benda bermassa 500 gram menerima 10.000 J. Jika c = 500 J/(kg·°C), perubahan suhunya adalah ....", options: ["10°C", "20°C", "30°C", "40°C"], answer: 1 },
    { text: "Air 2 kg naik suhu 5°C dengan c = 4.200 J/(kg·°C). Kalor yang diterima adalah ....", options: ["4.200 J", "8.400 J", "21.000 J", "42.000 J"], answer: 3 },
    { text: "Perubahan wujud dari padat menjadi cair disebut ....", options: ["Membeku", "Menguap", "Mencair", "Mengembun"], answer: 2 },
    { text: "Perubahan wujud dari cair menjadi gas disebut ....", options: ["Mengembun", "Membeku", "Menguap", "Menyublim"], answer: 2 },
    { text: "Kapur barus yang semakin lama semakin habis mengalami ....", options: ["Membeku", "Mencair", "Menyublim", "Mengembun"], answer: 2 },
    { text: "Kalor yang mengubah wujud zat tanpa mengubah suhunya disebut ....", options: ["Kalor jenis", "Kalor laten", "Kalor mekanik", "Kalor listrik"], answer: 1 },
    { text: "Rumus kalor untuk perubahan wujud adalah ....", options: ["Q = mcΔT", "Q = mL", "Q = cΔT", "Q = m/c"], answer: 1 },
    { text: "Perpindahan kalor tanpa perpindahan zat secara keseluruhan disebut ....", options: ["Konveksi", "Konduksi", "Radiasi", "Evaporasi"], answer: 1 },
    { text: "Perpindahan kalor yang disertai perpindahan zat disebut ....", options: ["Konduksi", "Konveksi", "Radiasi", "Sublimasi"], answer: 1 },
    { text: "Perpindahan kalor yang tidak memerlukan medium adalah ....", options: ["Konduksi", "Konveksi", "Radiasi", "Kondensasi"], answer: 2 },
    { text: "Contoh perpindahan kalor secara konduksi adalah ....", options: ["Panas Matahari sampai ke Bumi", "Air bergerak saat dipanaskan", "Sendok logam menjadi panas di air panas", "Angin laut"], answer: 2 },
    { text: "Contoh perpindahan kalor secara konveksi adalah ....", options: ["Panas Matahari sampai ke Bumi", "Gagang panci menjadi panas", "Air bergerak naik turun saat dipanaskan", "Panas api terasa dari kejauhan"], answer: 2 },
    { text: "Contoh bahan konduktor yang baik adalah ....", options: ["Kayu", "Plastik", "Tembaga", "Karet"], answer: 2 },
    { text: "Contoh bahan isolator panas adalah ....", options: ["Aluminium", "Tembaga", "Besi", "Kayu"], answer: 3 },
    { text: "Termos dapat mempertahankan suhu minuman karena ....", options: ["Mempercepat perpindahan kalor", "Mengurangi perpindahan kalor", "Menghasilkan kalor sendiri", "Menghilangkan massa minuman"], answer: 1 },
    { text: "Pakaian hitam pada siang hari cenderung lebih panas karena ....", options: ["Lebih banyak menyerap radiasi", "Tidak menyerap kalor", "Memantulkan seluruh radiasi", "Menghasilkan kalor sendiri"], answer: 0 },
    { text: "Air panas dicampur air dingin dalam wadah terisolasi. Suhu akhirnya ....", options: ["Sama dengan suhu air panas", "Sama dengan suhu air dingin", "Di antara suhu air panas dan dingin", "Selalu 0°C"], answer: 2 },
    { text: "Sebuah benda melepaskan kalor ke lingkungan. Suhunya dapat ....", options: ["Selalu naik", "Turun", "Selalu tetap", "Tidak mungkin berubah"], answer: 1 },
    { text: "Air 1 kg menerima 4.200 J (c = 4.200 J/(kg·°C)). Kenaikan suhunya adalah ....", options: ["0,5°C", "1°C", "2°C", "10°C"], answer: 1 },
    { text: "Benda membutuhkan 12.000 J untuk naik suhu 10°C. Jika massanya 2 kg, kalor jenisnya adalah ....", options: ["300 J/(kg·°C)", "400 J/(kg·°C)", "500 J/(kg·°C)", "600 J/(kg·°C)"], answer: 3 },
    { text: "Pernyataan paling tepat tentang kalor adalah ....", options: ["Ukuran langsung suhu benda", "Hanya dimiliki benda panas", "Energi yang berpindah akibat perbedaan suhu", "Selalu menyebabkan perubahan wujud"], answer: 2 },
    { text: "Kalor jenis menunjukkan kalor yang diperlukan untuk ....", options: ["Menaikkan suhu 1 kg zat sebesar 1°C", "Menaikkan massa zat sebesar 1 kg", "Mengubah zat menjadi gas", "Menurunkan suhu sampai 0°C"], answer: 0 },
    { text: "Jika perubahan suhu diperbesar dua kali dengan massa dan kalor jenis tetap, kalor yang diperlukan ....", options: ["Menjadi setengah", "Tetap", "Menjadi dua kali", "Menjadi empat kali"], answer: 2 },
    { text: "Jika massa zat yang mengalami perubahan wujud diperbesar dua kali, kalor yang diperlukan menjadi ....", options: ["Setengah", "Tetap", "Dua kali", "Empat kali"], answer: 2 },
    { text: "Contoh peristiwa mengembun adalah ....", options: ["Es mencair", "Air mendidih", "Titik air terbentuk di luar gelas berisi es", "Kapur barus mengecil"], answer: 2 },
    { text: "Saat es mencair pada tekanan tetap, suhu campuran secara ideal ....", options: ["Terus meningkat", "Terus menurun", "Tetap sampai seluruh es mencair", "Selalu 100°C"], answer: 2 },
    { text: "Bahan yang mudah menghantarkan kalor disebut ....", options: ["Isolator", "Konduktor", "Radiator", "Evaporator"], answer: 1 },
    { text: "Pegangan panci dibuat dari bahan isolator agar ....", options: ["Panci cepat dingin", "Tangan tidak mudah menerima kalor dari panci", "Panci menjadi lebih berat", "Air cepat mendidih"], answer: 1 },
    { text: "Panas Matahari sampai ke Bumi terutama melalui ....", options: ["Radiasi", "Konduksi", "Konveksi", "Sublimasi"], answer: 0 },
    { text: "Ketika sendok logam dimasukkan ke teh panas, gagangnya ikut panas karena ....", options: ["Konduksi", "Konveksi", "Radiasi", "Evaporasi"], answer: 0 },
    { text: "Aluminium dapat menghantarkan kalor dengan baik karena merupakan ....", options: ["Isolator panas", "Konduktor panas", "Penyerap suara", "Isolator listrik sempurna"], answer: 1 },
    { text: "Es batu lebih cepat mencair di tempat panas karena ....", options: ["Es menghasilkan kalor sendiri", "Es menerima kalor dari lingkungan", "Es kehilangan kalor ke lingkungan", "Suhunya naik tanpa menerima kalor"], answer: 1 },
    { text: "Dua benda berbeda suhu dalam wadah terisolasi pada akhirnya akan ....", options: ["Memiliki massa sama", "Memiliki suhu sama", "Memiliki volume sama", "Menjadi gas"], answer: 1 },
    { text: "Dalam rumus Q = mcΔT, simbol m menyatakan ....", options: ["Massa benda", "Kalor jenis", "Perubahan suhu", "Kalor"], answer: 0 },
    { text: "Ketika air dipanaskan, suhu air pada umumnya akan ....", options: ["Turun", "Naik", "Tetap sejak awal", "Menjadi nol"], answer: 1 },
    { text: "Jika massa benda menjadi dua kali dan nilai lain tetap, kalor yang diperlukan menjadi ....", options: ["Setengah", "Tetap", "Dua kali lipat", "Empat kali lipat"], answer: 2 },
    { text: "Saat air mendidih, energi kalor digunakan untuk ....", options: ["Menghilangkan massa air", "Mengubah air menjadi uap", "Menurunkan suhu air", "Membuat air menjadi padat"], answer: 1 },
    { text: "Gagang setrika dibuat dari plastik agar ....", options: ["Setrika lebih berat", "Kalor tidak mudah merambat ke tangan", "Setrika cepat panas", "Listrik lebih banyak mengalir"], answer: 1 },
    { text: "Saat tangan didekatkan ke api unggun, tangan terasa panas terutama karena ....", options: ["Radiasi", "Konduksi", "Pembekuan", "Penyubliman"], answer: 0 }
];

const CARD_DECKS = {
    eksperimen: [
        { type: "Percobaan", text: "Bayangkan ujung sendok logam dan sendok plastik dicelupkan ke air hangat selama satu menit. Menurutmu, sendok mana yang lebih cepat terasa hangat?", answer: "Sendok logam terasa lebih cepat hangat karena logam menghantarkan kalor lebih baik daripada plastik." },
        { type: "Percobaan", text: "Bayangkan es batu diletakkan di atas piring logam dan piring plastik selama beberapa menit. Menurutmu, di piring mana es lebih cepat mencair?", answer: "Es di piring logam biasanya lebih cepat mencair karena logam menghantarkan kalor dari lingkungan ke es lebih baik." },
        { type: "Percobaan", text: "Bayangkan kamu menyentuh bagian luar gelas berisi air hangat, lalu gelas berisi air bersuhu ruang. Apa yang terasa berbeda dan ke arah mana kalor berpindah?", answer: "Gelas berisi air hangat terasa lebih panas. Kalor berpindah dari air dan gelas yang lebih hangat menuju udara atau tangan yang lebih dingin." },
        { type: "Percobaan", text: "Bayangkan dua gelas berisi air hangat: satu dibungkus kain dan satu dibiarkan terbuka. Setelah beberapa menit, gelas mana yang menurutmu airnya lebih lama tetap hangat?", answer: "Air pada gelas yang dibungkus biasanya lebih lama mendingin karena kain menghambat perpindahan kalor ke lingkungan." }
    ],
    hitungan: [
        { type: "Soal numerik", text: "Air bermassa 1 kg dipanaskan dari 25°C menjadi 30°C. Jika kalor jenis air 4.200 J/(kg·°C), berapa kalor yang diperlukan?", answer: "Q = mcΔT = 1 × 4.200 × 5 = 21.000 J." },
        { type: "Soal numerik", text: "Benda bermassa 2 kg menerima kalor 6.000 J. Jika kalor jenisnya 300 J/(kg·°C), berapa kenaikan suhunya?", answer: "ΔT = Q/(mc) = 6.000/(2 × 300) = 10°C." },
        { type: "Soal numerik", text: "Air 0,5 kg naik suhu 4°C. Dengan kalor jenis 4.200 J/(kg·°C), hitung kalor yang diterima.", answer: "Q = mcΔT = 0,5 × 4.200 × 4 = 8.400 J." },
        { type: "Soal numerik", text: "Sebanyak 10.000 J kalor menaikkan suhu benda 5°C. Jika massa benda 2 kg, berapa kalor jenisnya?", answer: "c = Q/(mΔT) = 10.000/(2 × 5) = 1.000 J/(kg·°C)." },
        { type: "Soal numerik", text: "Benda bermassa 500 g menerima kalor 5.000 J. Jika kalor jenisnya 500 J/(kg·°C), berapa perubahan suhunya?", answer: "Massa 500 g = 0,5 kg. ΔT = Q/(mc) = 5.000/(0,5 × 500) = 20°C." }
    ],
    kolaborasi: [
        { type: "Tantangan kelompok", text: "Setiap anggota kelompok bergiliran memberi satu contoh perpindahan kalor. Kelompok harus menyebutkan apakah contohnya konduksi, konveksi, atau radiasi.", answer: "Contoh dapat mencakup sendok logam menjadi panas (konduksi), air bergerak saat dipanaskan (konveksi), dan panas Matahari sampai ke Bumi (radiasi). Setiap anggota menyumbang satu contoh." },
        { type: "Tantangan kelompok", text: "Buat urutan penjelasan bersama: bagaimana kalor dari kompor berpindah hingga air di dalam panci menjadi panas? Setiap anggota menambahkan satu tahap.", answer: "Kalor dari api memanaskan panci, kalor merambat melalui logam panci, lalu berpindah ke air. Arus konveksi menyebarkan kalor di dalam air." },
        { type: "Tantangan kelompok", text: "Rancang cara menjaga minuman tetap hangat menggunakan benda yang tersedia di kelas. Setiap anggota mengusulkan satu bahan atau langkah dan alasannya.", answer: "Gunakan bahan isolator seperti kain untuk membungkus wadah dan tutup wadah agar perpindahan kalor berkurang. Setiap anggota perlu memberi usulan beserta alasan." },
        { type: "Tantangan kelompok", text: "Diskusikan mengapa pegangan panci dibuat dari bahan berbeda dengan badan pancinya. Semua anggota harus memberi satu alasan atau contoh.", answer: "Badan panci memakai konduktor agar kalor mudah sampai ke makanan, sedangkan pegangan memakai isolator seperti kayu atau plastik agar tangan terlindung." }
    ]
};

let essayIndex = 0;
let multipleChoiceIndex = 0;
questions.forEach(question => {
    const cardType = question.cardType || question.type;
    if (cardType === "konsep") {
        question.items = [
            { type: "Esai", ...essayQuestions[essayIndex++] },
            ...multipleChoiceQuestions.slice(multipleChoiceIndex, multipleChoiceIndex + 2).map(item => ({
                type: "Pilihan Ganda",
                ...item
            }))
        ];
        multipleChoiceIndex += 2;
        return;
    }
    question.items = CARD_DECKS[cardType];
});

const HOUSE_COMPONENTS = ["foundation", "wall-left", "wall-right", "door", "window-left", "window-right", "roof"];
const HOUSE_COMPONENT_ICONS = {
    foundation: "🧱",
    "wall-left": "🧱",
    "wall-right": "🧱",
    door: "🚪",
    "window-left": "🪟",
    "window-right": "🪟",
    roof: "🔺"
};
const COLORS = ["#2563eb", "#16a34a", "#ca8a04", "#dc2626", "#9333ea", "#ea580c", "#db2777", "#0891b2"];
const AVATARS = ["🧑‍🚀", "👩‍🔬", "🧑‍🔧", "🦸", "🧑‍🚒", "🧑‍🍳", "🥷", "🧙"];

let groups = [];
let currentTurn = 0;
let isRolling = false;
let activeChallenge = null;
const questionDraws = new Map();

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
    startBackgroundMusic();
    playSoundEffect("start");
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
document.getElementById('btn-help').onclick = () => {
    playSoundEffect("help");
    modalHelp.classList.remove('hidden');
};
document.getElementById('btn-help-close').onclick = () => {
    playSoundEffect("help");
    modalHelp.classList.add('hidden');
};

// Sound controls
const btnSound = document.getElementById('btn-sound');
const backgroundMusic = new Audio("assets/audio/background.mp3");
backgroundMusic.loop = true;
backgroundMusic.volume = 0.35;
backgroundMusic.preload = "none";

let soundEnabled = true;
let audioContext;

function startBackgroundMusic() {
    if (!soundEnabled || !backgroundMusic.paused) return;
    backgroundMusic.play().catch(() => {});
}

function playSoundEffect(name) {
    if (!soundEnabled) return;

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    audioContext ??= new AudioContextClass();
    if (audioContext.state === "suspended") audioContext.resume().catch(() => {});

    const notesByEffect = {
        start: [523.25, 659.25],
        select: [698.46],
        help: [587.33, 698.46],
        dice: [392, 587, 440, 659],
        roll: [783.99, 1046.5],
        step: [480],
        land: [440, 554.37],
        question: [587.33, 783.99],
        reveal: [659.25, 783.99],
        correct: [523.25, 659.25, 783.99],
        component: [659.25, 783.99, 1046.5],
        turn: [659.25],
        wrong: [392, 293.66],
        win: [523.25, 659.25, 783.99, 1046.5, 1318.51]
    };
    const notes = notesByEffect[name];
    if (!notes) return;

    const now = audioContext.currentTime;
    notes.forEach((frequency, index) => {
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        const startAt = now + index * (name === "dice" ? 0.055 : 0.11);
        const duration = name === "step" ? 0.075 : 0.18;

        oscillator.type = name === "step" ? "triangle" : "sine";
        oscillator.frequency.setValueAtTime(frequency, startAt);
        gain.gain.setValueAtTime(0.0001, startAt);
        gain.gain.exponentialRampToValueAtTime(name === "step" ? 0.055 : 0.1, startAt + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
        oscillator.connect(gain);
        gain.connect(audioContext.destination);
        oscillator.start(startAt);
        oscillator.stop(startAt + duration + 0.02);
    });
}

function updateSoundButton() {
    btnSound.innerText = soundEnabled ? "🔊" : "🔇";
    btnSound.title = soundEnabled ? "Matikan suara" : "Nyalakan suara";
    btnSound.setAttribute("aria-label", btnSound.title);
    btnSound.setAttribute("aria-pressed", String(soundEnabled));
}

btnSound.onclick = () => {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
        startBackgroundMusic();
    } else {
        backgroundMusic.pause();
    }
    updateSoundButton();
};
updateSoundButton();
document.querySelectorAll('.group-select-btn').forEach(button => {
    button.addEventListener('click', () => playSoundEffect("select"));
});

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
    hitungan:   { label: 'Hitungan',   icon: '🧮', color: '#ffe680' },
    kolaborasi: { label: 'Kolaborasi', icon: '🤝', color: '#ffb3ad' }
};
const CORNER_META = {
    1:  { label: 'MULAI',      icon: '🏁' },
    8:  { label: 'Istirahat',  icon: '☕' },
    15: { label: 'Pengamatan', icon: '🔍' },
    22: { label: 'Zona Aman',  icon: '🛡️' }
};
const ROW_COLORS = ['#f8d7b8', '#e8dcf8', '#d5edfa', '#f8e1bd', '#dff0c9', '#f7d5df', '#d6eee7'];

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
        const gridArea = getGridArea(q.id);
        tile.style.gridArea = gridArea;
        tile.style.setProperty('--row-color', ROW_COLORS[Number.parseInt(gridArea, 10) - 1]);
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
                ${HOUSE_COMPONENTS.map(c => `<div class="badge" id="badge-${g.id}-${c}" data-icon="${HOUSE_COMPONENT_ICONS[c]}" title="${c.replaceAll('-', ' ')}" aria-label="${c.replaceAll('-', ' ')}"></div>`).join('')}
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
    playSoundEffect("dice");
    
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
            playSoundEffect("roll");
            
            setTimeout(() => {
                moveCurrentPawn(finalRoll);
            }, 600);
        }
    }, 80);
};

function moveCurrentPawn(steps) {
    const group = groups[currentTurn];
    let movedSteps = 0;

    const moveOneStep = () => {
        group.pos = group.pos === 30 ? 1 : group.pos + 1;
        movedSteps++;
        playSoundEffect("step");
        if (movedSteps === steps) playSoundEffect("land");
        renderPawns();

        if (movedSteps < steps) {
            setTimeout(moveOneStep, 550);
            return;
        }

        setTimeout(() => {
            const question = questions.find(q => q.id === group.pos);
            if (question) {
                triggerChallenge(question);
            } else {
                nextTurn();
            }
        }, 550);
    };

    moveOneStep();
}

function drawQuestionForTile(question) {
    let draw = questionDraws.get(question.id);
    if (!draw) {
        draw = { usedIndexes: [], lastIndex: null };
    }

    if (draw.usedIndexes.length === question.items.length) {
        draw.usedIndexes = [];
    }

    let availableIndexes = question.items
        .map((_, index) => index)
        .filter(index => !draw.usedIndexes.includes(index));

    if (draw.usedIndexes.length === 0 && draw.lastIndex !== null && availableIndexes.length > 1) {
        availableIndexes = availableIndexes.filter(index => index !== draw.lastIndex);
    }

    const selectedIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    draw.usedIndexes.push(selectedIndex);
    draw.lastIndex = selectedIndex;
    questionDraws.set(question.id, draw);
    return question.items[selectedIndex];
}

function triggerChallenge(question) {
    // Highlight tile
    document.getElementById(`tile-${question.id}`).classList.add('active');
    
    // Setup modal
    const cardType = question.cardType || question.type;
    const meta = TYPE_META[cardType];
    activeChallenge = drawQuestionForTile(question);
    playSoundEffect("question");
    modalType.innerHTML = `<span>${meta.icon}</span> KARTU ${meta.label.toUpperCase()} · ${activeChallenge.type.toUpperCase()}`;
    renderChallengeItems([activeChallenge], modalQuestion);
    modalAnswer.replaceChildren();
    
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

function renderChallengeItems(items, container, showAnswers = false) {
    const optionLabels = ["A", "B", "C", "D"];
    container.replaceChildren();

    items.forEach((item, index) => {
        const card = document.createElement("section");
        card.className = "rounded-xl border-2 border-[#00164e]/20 bg-white p-3";

        const heading = document.createElement("div");
        heading.className = "text-xs font-bold uppercase tracking-wide text-[#0b57c9] mb-1";
        heading.textContent = item.type;
        card.appendChild(heading);

        if (showAnswers) {
            const answer = document.createElement("p");
            answer.className = "font-semibold text-[#15803d]";
            answer.textContent = item.options
                ? `Jawaban: ${optionLabels[item.answer]}. ${item.options[item.answer]}`
                : `Contoh jawaban: ${item.answer}`;
            card.appendChild(answer);
        } else {
            const prompt = document.createElement("p");
            prompt.className = "font-semibold text-[#00164e] leading-snug";
            prompt.textContent = item.text;
            card.appendChild(prompt);

            if (item.options) {
                const options = document.createElement("ol");
                options.className = "mt-2 space-y-1 text-sm text-[#334155]";
                item.options.forEach((option, optionIndex) => {
                    const optionItem = document.createElement("li");
                    optionItem.textContent = `${optionLabels[optionIndex]}. ${option}`;
                    options.appendChild(optionItem);
                });
                card.appendChild(options);
            }
        }

        container.appendChild(card);
    });
}

btnShowAnswer.onclick = () => {
    playSoundEffect("reveal");
    btnShowAnswer.classList.add('hidden');
    renderChallengeItems([activeChallenge], modalAnswer, true);
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
    playSoundEffect("wrong");
    closeChallenge();
    nextTurn();
};

btnSuccess.onclick = () => {
    playSoundEffect("correct");
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
        setTimeout(() => playSoundEffect("component"), 350);
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
    setTimeout(() => playSoundEffect("turn"), 450);
    isRolling = false;
    renderDice(3);
    updateHUD();
}

// Win Confetti
function showWinner(group) {
    playSoundEffect("win");
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
