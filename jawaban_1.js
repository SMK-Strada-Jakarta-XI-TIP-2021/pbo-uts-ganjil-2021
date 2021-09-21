// Jawaban Soal 1 ada di bawah ini
console.log ('================ Ulangan Object Literal ================');
let kendaraan = {
    nama: "Yamaha",
    model : "R15",
    tipe : 2020,
    perlengkapanKendaraan : ['SIM','STNK','Helm','Spion','PlatNomor'],
    kondisiKendaraan : true,
    suara : function () {
        return 'Bersuara ' + 'Brummm!!!!';
    },

    start : function () {
        let kondisi = (this.kondisiKendaraan ? true:false);
        if (kondisi === true) {
            console.log ("Motor bisa dijalankan ! " + "Memulai perjalanan dari nol");
        } else {
            console.log("Motor rusak ! " + "Motor tidak bisa dijalankan");
        } 
        return kondisi;
    },

    perlengkapanBerkendara: function() {
        let perlengkapan =  ['SIM','STNK','Helm','Spion','PlatNomor'];
        if (perlengkapan <= this.perlengkapanKendaraan) {
            console.log("Perlengkapan berkendara sudah lengkap " + "Cuzz Berangkat");
        } else {
            console.log('Perlengkapan berkendara kurang nih ! ' + 'ntar ditilang nangiss');
        }

        return perlengkapan;
    },
}
let suaraKendaraan = kendaraan.suara();
console.log (`Ini ${kendaraan.nama} ${kendaraan.model} keluaran ==> ${kendaraan.tipe}`);
console.log (`${kendaraan.nama} ${kendaraan.model} ini ${kendaraan.suara()}`);
console.log (`Perlengkapan yang sudah tersedia ==> ${kendaraan.perlengkapanKendaraan}`);
kendaraan.perlengkapanBerkendara();
console.log (`Kondisi motor Sekarang ==> ${kendaraan.kondisiKendaraan}`);
kendaraan.start();
console.log('========================================================');