/*
=====================================================
    FILE SCRIPT.JS - PROYEK BIODATA AHMAD SAYFUDIN
=====================================================
*/

/* ===================================================
    1. DEFINISI VARIABEL & DATA GLOBAL
=================================================== */

// Data Cadangan untuk Kutipan Shinobi
const kutipanLokal = [
    {
        quote: "Untuk mencapai tujuanmu, kamu harus bersabar.",
        character: "Kakashi Hatake"
    },
    {
        quote: "Aku hanya ingin melindungi mereka, walau harus menjalani penderitaan seperti apapun.",
        character: "Naruto Uzumaki"
    },
    {
        quote: "Benar-benar merepotkan, tapi aku harus melakukannya.",
        character: "Shikamaru Nara"
    },
    {
        quote: "Kegagalan juga merupakan bagian dari hidup. Jika kau tidak gagal, kau tidak akan belajar.",
        character: "Jiraiya"
    },
    {
        quote: "Bangunlah dan hadapi kenyataan! Tak ada yang berjalan sesuai rencana di dunia ini.",
        character: "Uchiha Sasuke"
    }
];

/* ===================================================
    2. PENCARIAN ELEMEN (DOM SELECTORS)
=================================================== */
console.log("Mencari semua elemen DOM...");

// Elemen untuk Kutipan
const quoteTextElement = document.getElementById('quote-text');
const quoteCharacterElement = document.getElementById('quote-character');

// Elemen untuk Daftar Hobi
const daftarInfo = document.getElementById('daftar-informasi');

// Elemen untuk Tombol
const tombolTambah = document.getElementById('tombol-tambah');
const tombolHapus = document.getElementById('tombol-hapus');
const tombolKutipanBaru = document.getElementById('tombol-kutipan-baru');


/* ===================================================
    3. DEFINISI FUNGSI (LOGIKA UTAMA)
=================================================== */

// --- Fungsi untuk Kutipan ---
function tampilkanKutipan(kutipan, karakter) {
    quoteTextElement.textContent = `"${kutipan}"`;
    quoteCharacterElement.textContent = `- ${karakter}`;
}

function ambilKutipanBaru() {
    console.log("Memulai proses fetch API...");
    quoteTextElement.textContent = "Mencari kutipan baru...";
    quoteCharacterElement.textContent = "";

    fetch('https://animechan.xyz/api/random/anime?title=naruto')
        .then(response => response.json())
        .then(data => {
            tampilkanKutipan(data.quote, data.character);
        })
        .catch(error => {
            console.warn("API gagal, menjalankan fallback lokal:", error); // Ganti jadi .warn
            const randomIndex = Math.floor(Math.random() * kutipanLokal.length);
            const kutipanCadangan = kutipanLokal[randomIndex];
            tampilkanKutipan(kutipanCadangan.quote, kutipanCadangan.character);
        });
}

// --- Fungsi untuk Hobi ---
function tambahHobi() {
    const hobiBaru = prompt("Tuliskan hobi barumu:");
    if (hobiBaru) { 
        const itemBaru = document.createElement('li');
        itemBaru.textContent = "Hobi: " + hobiBaru;
        daftarInfo.appendChild(itemBaru);
    } 
}

function hapusHobi() {
    if (daftarInfo.children.length > 3) {
        const hobiTerakhir = daftarInfo.lastElementChild;
        hobiTerakhir.remove();
    } else {
        alert("Tidak ada hobi tambahan untuk dihapus!");
    }
}


/* ===================================================
    4. PEMASANGAN EVENT LISTENERS
=================================================== */
console.log("Memasang semua event listener...");

tombolTambah.addEventListener('click', tambahHobi);
tombolHapus.addEventListener('click', hapusHobi);
tombolKutipanBaru.addEventListener('click', ambilKutipanBaru);


/* ===================================================
    5. KODE INISIALISASI (DIJALANKAN SAAT HALAMAN DIMUAT)
=================================================== */
console.log("Menjalankan inisialisasi halaman...");

ambilKutipanBaru(); // Langsung muat kutipan pertama kali

console.log("Inisialisasi script.js selesai.");