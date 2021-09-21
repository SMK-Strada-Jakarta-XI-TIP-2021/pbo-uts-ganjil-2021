// Jawaban Soal 1 ada di bawah ini
let kendaraan = {
    nama: "Honda",
    model : "Supra GTR",
    tipe : 150,
    perlengkapanKendaraan : ['SIM','STNK','Helm','Spion','PlatNomor'],
    kondisiKendaraan : true,
    suara : function () {
        return 'ngeng' + 'ngengg';
    },

    start : function () {
        let kondisi = (this.kondisiKendaraan ? true:false);
        if (kondisi === true) {
            console.log ("Motor Bisa Berjalan ! " + "Mulai perlahan Melaju");
        } else {
            console.log("Motor rusak ! " + "Motor tidak Bisa Di Oprasikan");
        } 
        return kondisi;
    },

    perlengkapanBerkendara: function() {
        let perlengkapan =  ['SIM','STNK','Helm','Spion','PlatNomor'];
        if (perlengkapan <= this.perlengkapanKendaraan) {
            console.log("Jika Perlengkapan berkendara Sudah lengkap " + "Mari jalan");
        } else {
            console.log('Perlengkapan berkendara kurang lengkap ! ' + 'Nanti bisa di tilang');
        }

        return perlengkapan;
    },
}
let suaraKendaraan = kendaraan.suara();
console.log (`Ini ${kendaraan.nama} ${kendaraan.model} keluaran ==> ${kendaraan.tipe}`);
console.log (`${kendaraan.nama} ${kendaraan.model} ini ${kendaraan.suara()}`);
console.log (`Perlengkapan yang sudah ada ==> ${kendaraan.perlengkapanKendaraan}`);
kendaraan.perlengkapanBerkendara();
console.log (`Kondisi motor ==> ${kendaraan.kondisiKendaraan}`);
kendaraan.start();