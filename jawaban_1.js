// Jawaban Soal 1 ada di bawah ini
class manusia {
    constructor(nama, umur, warnaRambut, pekerjaan, asal) {
        this.nama = nama;
        this.umur = umur;
        this.warnaRambut = warnaRambut;
        this.pekerjaan = pekerjaan;
        this.asal = asal;
    }
    cekUmur() {
        if (this.umur >= 21) {
            return 'Sudah Dewasa';
        } else {
            return 'Masih Kecil'
        }
    }
}