// Jawaban Soal 1 ada di bawah ini
class Hewan {
    constructor(nama, warna, beratGram, harga) {
        this.nama = nama;
        this.warna = warna;
        this.beratGram = beratGram;
        this.harga = harga;
        this.kondisiBagus = false;
    }

    cekKondisiBagus(kondisi = false) {
        return this.kondisiBagus = kondisi;
    }
}

// Cara membuat object instance

let hewanKucing = new Hewan("Kucing", "Putih", 25, 100000);
hewanKucing.cekKondisiBagus(true);
console.log(hewanKucing);
let hewanBebek = new Hewan("Bebek", "Cokelat", 20, 40000);
hewanBebek.cekKondisiBagus();
console.log(hewanBebek);

console.log('ini hewan kucing =>', hewanKucing);
console.log('ini hewan bebek =>', hewanBebek);