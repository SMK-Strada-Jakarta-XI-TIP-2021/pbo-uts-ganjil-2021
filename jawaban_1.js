// Jawaban Soal 1 ada di bawah ini
console.log ('================ Ulangan Object Literal ================');
const kendaraan = {
    nama: "Yamaha",
    model : "R15",
    tipe : 2020,
    perlengkapanKendaraan : ['SIM','STNK','Helm','Spion','PlatNomor'],
    kondisiKendaraan : true && 'Baik' ,
    suara : function () {
        return 'Bersuara ' + 'Brummm!!!!';
    },

    start : function () {
        let kondisi = (this.kondisiKendaraan ? true:false);
        if (kondisi === true || kondisi === 'Baik') {
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
const hewan = {
    nama : 'Kiko',
    modelHewan: 'Musang bulan',
    umur : 5,
    anggotaBadan: ['mata', 'telinga', 'hidung', 'kaki', 'mulut'],
    kondisi : true && 'Baik',

     namaHewan :function () {
         return 'Ini hewan ' + this.modelHewan + ' Bernama ' + this.nama;
    },

    umurHewan: function () {
        return `${this.nama} Berumur ==> ${this.umur} bulan`;
    },
    
    anggotaTubuh : function () {
        let x = ['mata', 'telinga', 'hidung', 'kaki', 'mulut'];
        if (this.anggotaBadan >= x) {
            console.log('Anggota badan lengkap :)')
        } else {
            console.log ('Anggota badan tidak lengkap :( kasian sekali')
        }
        return x;
    },

    kodisiHewan : function () {
        let x = true && 'Baik';
        if (this.kondisi === x) {
            console.log ("Kondisi hewan ini baik");
        } else if (this.kondisi === 'Tidak baik' || this.kondisi === false) {
            console.log ("Kondisi hewan ini tidak baik");
        } else {
            console.log ("Cek kondisi Terlebih dahulu");
        }

        return x;
    },

    pembeli : function () {
        let a = this.kondisi;
        let b = 'Anggota tubuh lengkap' || true ;
        let dompetPembeli = 1000000;
        let hargaHewan = 250000;
        if (a && b) {
            console.log (`Dengan kondisi ${a} dan ${b} bisa anda membeli dengan harga ==> Rp.${hargaHewan}`)
        } else {
            console.log('Tidak bisa anda beli')
        }
        return `Sisa kembalian == Rp.${dompetPembeli - hargaHewan}`
    }
}

const person = {
    firstName : 'Adri',
    lastName : 'Gunawan',
    umur : 20,
    hobi : ['Ngegame', 'Coding', 'Mendengarkan musik'] ,
    kondisi : true && 'Baik',
    tanyaKabar : 'Bagaimana kabarmu ?',
    tanyaHobi : 'Hobi kamu apa ?',

    fullName : function () {
        return `Halo nama saya ${this.firstName + this.lastName}`;
    },

    umurPerson : function () {
        return `Umur saya = ${this.umur} Y.O`
    },

    kondisiPerson : function () {
        if (this.kondisi == 'Baik') {
            console.log ('Kabar saya baik. Terima kasih sudah menanyakan kabarku :)')
        } else {
            console.log ('Hari ini aku sedang sakit >,<')
        }
    },

    hobiPerson : function () {
        if (this.hobi.length) {
            console.log (`Hobiku adalah == ${this.hobi[0]}`)
        } else {
            console.log('Aku banyak sekali hobi')
        }
    }
}
// Object pertama
console.log ('=================== Object Pertama =================');
let suaraKendaraan = kendaraan.suara();
console.log (`Ini ${kendaraan.nama} ${kendaraan.model} keluaran ==> ${kendaraan.tipe}`);
console.log (`${kendaraan.nama} ${kendaraan.model} ini ${kendaraan.suara()}`);
console.log (`Perlengkapan yang sudah tersedia ==> ${kendaraan.perlengkapanKendaraan}`);
kendaraan.perlengkapanBerkendara();
console.log (`Kondisi motor Sekarang ==> ${kendaraan.kondisiKendaraan}`);
kendaraan.start();
console.log('=====================================================');
// ===============

//Object kedua
console.log ('=================== Object Kedua =================');
console.log(hewan.namaHewan());
console.log(hewan.umurHewan());
hewan.anggotaTubuh();
hewan.kodisiHewan();
console.log(hewan.pembeli());
console.log('====================================================');
// ===============

// Object ketiga
console.log ('=================== Object Ketiga =================');
console.log(person.fullName());
console.log(person.umurPerson());
console.log(person.tanyaKabar)
person.kondisiPerson();
console.log(person.tanyaHobi);
person.hobiPerson();
console.log('====================================================');
// ===============


console.log('========================================================');