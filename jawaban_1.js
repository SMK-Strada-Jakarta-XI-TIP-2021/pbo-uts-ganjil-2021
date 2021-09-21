// Jawaban Soal 1 ada di bawah ini

class kendaraan {
    constructor(nama, model, kondisi, roda, type, harga, stok) {
        this.nama = nama;
        this.model = model;
        this.kondisi = kondisi;
        this.roda = roda;
        this.type = type;
        this.harga = harga;
        this.stok = stok;
    }
    cekKondisi() {
        if (this.kondisi === true) {
            return `${this.nama} ini dalam kondisi bagus`;
        } else {
            return `${this.nama} ini dalam kondisi bekas`;
        }
    }
    cekModel() {
        if (this.model === true) {
            return "kendaraan ini model terbaru";
        } else {
            return "kendaraan ini model lama";
        }
    }
    cekHarga() {
        return `kendaraan ini seharga ${this.harga}`;
    }
    cekStok() {
        if (this.stok === 0) {
            return 'stok kendaraan kosong';
        } else {
            return 'stok kendaraan masih ada';
        }
    }
    transaksiPembelian(stokBeli, nama) {
        let jumlahStok = stokBeli * this.harga;
        return `${nama} sedang membeli kendaraan ini sebanyak ${stokBeli} unit dengan harga ${jumlahStok}.`;
    }
}

// membuat objectnya
const motor = new kendaraan("motor", false, false, 2, 'Yamaha Aerox', 25900000, 58);

const mobil = new kendaraan("mobil", false, true, 4, 'Honda CR-V', 473000000, 20);

const sepeda = new kendaraan("sepeda", true, false, 2, 'Fixie Visp', 3500000, 52);

const trail = new kendaraan("motor trail", true, true, 2, 'Kawasaki KLX', 27700000, 150);

const skuter = new kendaraan("skuter listrik", true, true, 2, 'Maxspeed X9S', 9700000, 100);

// memanggil object
// memanggil motor
console.log(motor);
console.log(motor.cekKondisi());
console.log(motor.cekModel());
console.log(motor.cekHarga());
console.log(motor.cekStok());
console.log(motor.transaksiPembelian(6, 'Michelle'));

// memanggil mobil
console.log(mobil);
console.log(mobil.cekKondisi());
console.log(mobil.cekModel());
console.log(mobil.cekHarga());
console.log(mobil.cekStok());
console.log(mobil.transaksiPembelian(2, 'Monasari'));

// memanggil sepeda
console.log(sepeda);
console.log(sepeda.cekKondisi());
console.log(sepeda.cekModel());
console.log(sepeda.cekHarga());
console.log(sepeda.cekStok());
console.log(sepeda.transaksiPembelian(5, 'Nicole'));

// memanggil trail
console.log(trail);
console.log(trail.cekKondisi());
console.log(trail.cekModel());
console.log(trail.cekHarga());
console.log(trail.cekStok());
console.log(trail.transaksiPembelian(1, 'Tasya'));

// memanggil skuter
console.log(skuter);
console.log(skuter.cekKondisi());
console.log(skuter.cekModel());
console.log(skuter.cekHarga());
console.log(skuter.cekStok());
console.log(skuter.transaksiPembelian(8, 'Helena'));