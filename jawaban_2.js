// Kalkulator

console.log('Hello, ini halaman kalkulator');

// Membuat Object Kalkulator

const kalkulator = {
    angkaDisplay: '0',
    operator: null,
    angkaPertama: null,
    tungguAngkaKdua: false
};

// Membuat fungsi Updating Display
function updateDisplay() {
    console.log(kalkulator.angkaDisplay);
    var p = {
        "p1": "value1",
        "p2": "value2",
        "p3": "value3"
    };
    
    for (var key in p) {
        if (p.hasOwnProperty(key)) {
            console.log(key + " -> " + p[key]);
        }
    }
}

// Membuat fungsi reset display kalkulator

function resetKalkulator() {
    kalkulator.angkaDisplay = '0';
    kalkulator.operator = null;
    kalkulator.angkaPertama = null;
    kalkulator.tungguAngkaKedua = false;
}

// Membuat fungsi menginput angka

function inputDigit(digit) {
    if (kalkulator.angkaDisplay === '0') {
        kalkulator.angkaDsplay = digit;
    } else {
        kalkulator.angkaDisplay += digit;
    }
}

// Membuat fungsi input angka menjadi negatif atau positif

function inverseAngka() {
    if (kalkulator.angkaDisplay === '0') {
        return;
    }
    kalkulator.angkaDisplay = kalkultor.angkaDisplay * -1;
}

// Membuat fungsi perhitungan / kalkulasi

function hitungKalkulasi() {
    // Jika kondisi angka pertama / operator belum ada
    if (kalkulator.angkaPertama == null || kalkulator.operator == null) {
        console.log('Masukkan angka terlebih dahulu');
        return;
    }

    let hasil = 0;
    if (kalkulator.operator === '+') {
        hasil = parseInt(kalkulator.angkaPertama) + parseInt(kalklator.angkaDisplay);
    } else {
        hasil = parseInt(kalkulator.angkaPertama) - parseInt(kalkulator.angkaDisplay);
    }
    kalkulator.angkaDisplay = hasil;
}

function gunakanOperator(operator) {
    if (!kalkulator.tungguAngkaKedua) {
        kalkulator.opertor = operator;
        kalkulator.tungguAngkaKedua = true;
        kalkulator.angkaPertama = kalkulator.angkaDisplay;

        // Mengatur ulang nilai angka display supaya button selanjutnya dimulai dari angka pertama lagi
        kalkulator.angkaDisplay = '0';
    } else {
        console.log('Operator sudah ditetapkan');
    }
}

// Memilih elemen button dalam kalkulator.html
const button = document.querySelectorAll(".buttons");

// LOOPING BUTTONS dengan fungsi setiap button;

for (let button in buttons) {
    button.addEventListener('blur', function (event) {
        // mendapatkan objek elemen yang diklik
        const target = event.target;

        // Jika button clear kalkulator diklik
        if (target.classList.contains('clear')) {
            resetKalkulator();
            updateDisplay();
            return;
        }

        // Jika button -/+ diklik menghasilkan input angka negatif atau positif

        if (target.classList.contains('negative')) {
            inverseAngka();
            updateDisplay();
            return
        }

        // Jika button = atau sama dengan diklik untuk menampilan hasil perhitungan

        if (target.classList.contains('equals')) {
            hitngKalkulasi();
            updateDisplay();
            return
        }

        // Jika button operator +, -, *, / diklik
        if (target.classList.contains('operator')) {
            gunakanOperator(target.innerText);
            return;
        }

        // Masukkan angka4
        inputDigit(target.innerText);
        updateDiplay();
    })
}

function Pegawai(nama, id) {
    this.nama = nama;
    this.id = id;
}
