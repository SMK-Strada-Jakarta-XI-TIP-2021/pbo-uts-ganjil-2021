// Jawaban Soal 1 ada di bawah ini
class kendaraan {
    constructor(nama, platNomor, kondisi, roda, type, harga, stock) {
        this.nama = nama;
        this.platNomor = platNomor;
        this.kondisi = kondisi;
        this.roda = roda;
        this.type = type;
        this.harga = harga;
        this.stock = stock;
    }
    cekKondisi() {
        if (this.kondisi === true) {
            return `${this.nama} ini dalam kondisi bagus`;
        } else {
            return `${this.nama} ini dalam kondisi bekas`;
        }
    }
    cekPlatnomor() {
        if (this.platNomor === true) {
            return "kendaraan ini legal";
        } else {
            return "kendaraan ini barang black market";
        }
    }
    cekHarga() {
        return `kendaraan ini seharga ${this.harga}`;
    }
    cekStok() {
        if (this.stock === 0) {
            return 'stok kosong';
        } else {
            return 'stok masih ada';
        }
    }
    transaksiPembelian(stokBeli, nama) {
        let jumlahStok = stokBeli * this.harga;
        return `${nama} sedang membeli kendaraan ini sebanyak ${stokBeli} unit dengan harga ${jumlahStok}.`;
    }
}

// membuat objectnya
const motor = new kendaraan("motor", false, false, 2, 'beat', 10000000, 500);

const mobil = new kendaraan("mobil", false, true, 4, 'avanza', 100000000, 5);

const truk = new kendaraan("truk", true, false, 4, 'pikap', 50000000, 2);

const bus = new kendaraan("bus", true, true, 4, 'bus mini', 200000000, 10);

const angkot = new kendaraan("angkot", true, true, 4, 'angkutan umum', 500000000, 500);

// memanggil object
// memanggil motor
console.log(motor);
console.log(motor.cekKondisi());
console.log(motor.cekPlatnomor());
console.log(motor.cekHarga());
console.log(motor.cekStok());
console.log(motor.transaksiPembelian(2, 'max'));

// memanggil mobil
console.log(mobil);
console.log(mobil.cekKondisi());
console.log(mobil.cekPlatnomor());
console.log(mobil.cekHarga());
console.log(mobil.cekStok());
console.log(mobil.transaksiPembelian(5, 'sulthan'));

// memanggil truk
console.log(truk);
console.log(truk.cekKondisi());
console.log(truk.cekPlatnomor());
console.log(truk.cekHarga());
console.log(truk.cekStok());
console.log(truk.transaksiPembelian(1, 'adri'));

// memanggil bus
console.log(bus);
console.log(bus.cekKondisi());
console.log(bus.cekPlatnomor());
console.log(bus.cekHarga());
console.log(bus.cekStok());
console.log(bus.transaksiPembelian(1, 'joaquin'));

// memanggil angkot
console.log(angkot);
console.log(angkot.cekKondisi());
console.log(angkot.cekPlatnomor());
console.log(angkot.cekHarga());
console.log(angkot.cekStok());
console.log(angkot.transaksiPembelian(1, 'john'));