// Jawaban Soal 1 ada di bawah ini
class kendaraan {
    constructor(nama, platNomor, kondisi, roda, type) {
        this.nama = nama;
        this.platNomor = platNomor;
        this.kondisi = kondisi;
        this.roda = roda;
        this.type = type;
    }
    cekKondisi() {
        if (this.kondisi === true) {
            return `${this.nama} ini dalam kondisi bagus`;
        } else {
            return `${this.nama} ini dalam kondisi bekas`;
        }
    }
}