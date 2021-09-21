// Jawaban Soal 1 ada di bawah ini

class hewan {
    constructor(nama, ras, usia, kondisi, kaki) {
        this.nama = nama;
        this.ras = ras;
        this.usia =usia;
        this.kondisi = kondisi;
        this.kaki = kaki;
    }
    cekKondisi(){
        if(this.kondisi === true){
            return `${this.nama} sehat`
        } else{
            return `sakit`
        }
    }
}