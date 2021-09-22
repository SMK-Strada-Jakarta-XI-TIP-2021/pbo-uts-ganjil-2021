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

class Mobil {
    constructor(tipe, tahun, suara, warna, beratGram) {
        this.tipe = tipe;
        this.tahun = tahun;
        this.suara = suara;
        this.warna = warna;
        this.beratGram = beratGram;
    }

    cekKondisiBagus(kondisi = false) {
        return this.kondisiBagus = kondisi;
    }
}

class Televisi {
    constructor(tipe, tahun, suara, warna, beratGram) {
        this.tipe = tipe;
        this.tahun = tahun;
        this.suara = suara;
        this.warna = warna;
        this.beratGram = beratGram;
    }

    cekKondisiBagus(kondisi = false) {
        return this.kondisiBagus = kondisi;
    }
}

class Kulkas {
    constructor(tipe, tahun, warna, beratGram) {
        this.tipe = tipe;
        this.tahun = tahun;
        this.warna = warna;
        this.beratGram = beratGram;
    }

    cekKondisiBagus(kondisi = false) {
        return this.kondisiBagus = kondisi;
    }
}

class Magiccom {
    constructor(tipe, tahun, warna, beratGram) {
        this.tipe = tipe;
        this.tahun = tahun;
        this.warna = warna;
        this.beratGram = beratGram;
    }

    cekKondisiBagus(kondisi = false) {
        return this.kondisiBagus = kondisi;
    }
}

// Cara membuat object instance

let hewanKucing = new Hewan("Kucing", "Putih", 25, 100000);
hewanKucing.cekKondisiBagus(true);
console.log(hewanKucing);
let mobilAlya = new Mobil("Alya", 2019, "brum", "Putih", 17);
mobilAlya.cekKondisiBagus(true);
console.log(mobilAlya);
let televisiSharp = new Televisi("Sharp", 2010, "srekkk", "Hitam", 20);
televisiSharp.cekKondisiBagus(true);
console.log(televisiSharp);
let kulkasSharp = new Kulkas("Sharp", 2004, "Pink", 50);
kulkasSharp.cekKondisiBagus(true);
console.log(kulkasSharp);
let magiccomMiyako = new Magiccom("Miyako", 2010, "Cokelat", 30);
magiccomMiyako.cekKondisiBagus(true);
console.log(magiccomMiyako);