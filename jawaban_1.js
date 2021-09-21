// Jawaban Soal 1 ada di bawah ini

class hewan {
    constructor(nama, ras, usia, kondisi, kaki) {
        this.nama = nama;
        this.ras = ras;
        this.usia =usia;
        this.kondisi = kondisi;
        this.kaki = kaki;
    }
    jenis(){
        return `ini adalah ${this.nama}`;
    }
    cekKondisi(){
        if(this.kondisi === true){
            return `${this.nama} sehat`;
        } else{
            return `${this.nama}sakit` ;
        }
    }
    umur(){
        return `${this.nama} berusia ${this.usia} bulan`;
    }
    keturunan(){
        return `${this.nama} berjenis ${this.ras}.`;
    }
    cekKaki(){
        if(this.kaki === 0){
            return `${this.nama} tidak punya kaki`;
        }
        else{
            return `${this.nama} mempunyai ${this.kaki} kaki.`;
        }

    }


}

// bikin objek
let macan = new hewan('macan','tulul',12,true,4);
let kucing = new hewan('kucing','anggora',4,true,4);
let anjing = new hewan('anjing','bulldog',18,true,4);
let ular = new hewan('ular','kobra',30,true,0);
let buaya = new hewan('buaya','buaya rawa',40,true,4);

// panggil objek

// memanggil macan
console.log(macan);
console.log(macan.jenis());
console.log(macan.cekKondisi());
console.log(macan.umur());
console.log(macan.keturunan());
console.log(macan.cekKaki());
console.log();

// panggil kucing
console.log(kucing);
console.log(kucing.jenis());
console.log(kucing.cekKondisi());
console.log(kucing.umur());
console.log(kucing.keturunan());
console.log(kucing.cekKaki());
console.log();

// panggil anjing
console.log(anjing);
console.log(anjing.jenis());
console.log(anjing.cekKondisi());
console.log(anjing.umur());
console.log(anjing.keturunan());
console.log(anjing.cekKaki());
console.log();

// panggil ular
console.log(ular);
console.log(ular.jenis());
console.log(ular.cekKondisi());
console.log(ular.umur());
console.log(ular.keturunan());
console.log(ular.cekKaki());
console.log();
// panggil objek
console.log(buaya);
console.log(buaya.jenis());
console.log(buaya.cekKondisi());
console.log(buaya.umur());
console.log(buaya.keturunan());
console.log(buaya.cekKaki());
console.log();