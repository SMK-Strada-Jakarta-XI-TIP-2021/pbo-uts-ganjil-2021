// Jawaban Soal 1 ada di bawah ini

  class makanan {
      constructor(nama, jenis, harga, rasa, beratGram) {
          this.nama = nama,
          this.jenis = jenis,
          this.harga = harga,
          this.rasa = rasa,
          this.beratGram = beratGram,
          this.kondisiBarang = true;

      }

      cekKondisiBarang(kondisi = true) {
          return this.kondisiBarang = kondisi
      }
  }

let makanan1 = new makanan("kue jahe", "kue kering", "Rp.39.000", "Jahe", "11.500 gram");
makanan1.cekKondisiBarang(true);
console.log(makanan1);

let makanan2 = new makanan("roti sobek", "kue kering", "Rp.15.000", "coklat", "500 gram");
makanan2.cekKondisiBarang(true);
console.log(makanan2);

let makanan3 = new makanan("kue bulan", "kue kering", "Rp.50.000", "manis gula halus", "19.500 gram");
makanan3.cekKondisiBarang(true);
console.log(makanan3);

let makanan4 = new makanan("nastas", "kue kering", "Rp.50.000", "nanas", "19.500 gram");
makanan4.cekKondisiBarang(true);
console.log(makanan4);

let makanan5 = new makanan("bolu", "kue basah", "Rp.40.000", "pandan keju", "20.500 gram");
makanan5.cekKondisiBarang(true);
console.log(makanan5);