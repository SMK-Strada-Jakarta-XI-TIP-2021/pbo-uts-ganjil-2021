// Jawaban Soal 1 ada di bawah ini
class manusia {
    constructor(nama, umur, sex, pekerjaan, asal) {
        this.nama = nama;
        this.umur = umur;
        this.sex = sex;
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
    cekSex() {
        return `${this.nama} berkelamin ${this.sex}`;    }
    cekAsal() {
        return `${this.nama} berasal dari ${this.asal}`;
    }
    nama() {
        return 'ini ' + this.nama;
    }
    cekPekerjaan() {
        return 'ini ' + this.pekerjaan
    }
}

// Objek
let lala = new manusia('lala', 14, 'perempuan', 'siswi', 'indonesia');
let noval = new manusia('noval', 17, 'laki-laki', 'kasir', 'indonesia');
let justin = new manusia('justin', 22, 'pria', 'penyanyi', 'america');
let joey = new manusia('joey', 32, 'pria', 'bos', 'japan');
let sari = new manusia('sari', 10, 'perempuan', 'siswi', 'india');

// Memanggil Objek

console.log(lala);
console.log(lala.cekUmur());
console.log(lala.cekSex());
console.log(lala.cekPekerjaan());
console.log(lala.cekAsal());
console.log('----------------------------');

console.log(noval);
console.log(noval.cekUmur());
console.log(noval.cekSex());
console.log(noval.cekPekerjaan());
console.log(noval.cekAsal());
console.log('----------------------------');

console.log(justin);
console.log(justin.cekUmur());
console.log(justin.cekSex());
console.log(justin.cekPekerjaan());
console.log(justin.cekAsal());
console.log('----------------------------');

console.log(joey);
console.log(joey.cekUmur());
console.log(joey.cekSex());
console.log(joey.cekPekerjaan());
console.log(joey.cekAsal());
console.log('----------------------------');

console.log(sari);
console.log(sari.cekUmur());
console.log(sari.cekSex());
console.log(sari.cekPekerjaan());
console.log(sari.cekAsal());
console.log('----------------------------');
