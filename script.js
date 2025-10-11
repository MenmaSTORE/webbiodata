console.log("File script.js BERHASIL TERHUBUNG DAN BERJALAN!");

console.log("Mencari elemen-elemen tombol dan daftar...");
const tombol = document.getElementById('dari-jihan');
const tombolTambah = document.getElementById('tombol-tambah');
const daftarInfo = document.getElementById('daftar-informasi');

console.log("Elemen berhasil ditemukan, lanjut memasang event listener...");

tombolTambah.addEventListener('click', function() {
    const hobiBaru = prompt("Tuliskan hobi barumu:");
    
    if (hobiBaru) { 
        const itemBaru = document.createElement('li');
        itemBaru.textContent = "Hobi: " + hobiBaru;
        const itemPacar = document.getElementById('item-pacar');
        daftarInfo.insertBefore(itemBaru, itemPacar);
    } 
}); 

tombol.addEventListener('click', function() 
{
    alert('Semangat belajarnya yah!');
});

console.log("Memulai proses fetch API kutipan Naruto...");
const quoteTextElement = document.getElementById('quote-text');
const quoteCharacterElement = document.getElementById('quote-character');

fetch('https://animechan.xyz/api/random/anime?title=naruto')
    .then(response => response.json())
    .then(data => {
        tampilkanKutipan(data.quote, data.character);
    })
    .catch(error => {
        console.error("API gagal, menjalankan fallback lokal:", error);
        const randomIndex = Math.floor(Math.random() * kutipanLokal.length);
        const kutipanCadangan = kutipanLokal[randomIndex];

        tampilkanKutipan(kutipanCadangan.quote, kutipanCadangan.character);
    });

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
    }
];

function tampilkanKutipan(kutipan, karakter) {
    quoteTextElement.textContent = `"${kutipan}"`;
    quoteCharacterElement.textContent = `- ${karakter}`;
}