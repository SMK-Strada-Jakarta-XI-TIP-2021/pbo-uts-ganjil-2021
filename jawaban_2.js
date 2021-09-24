// Kalkulator

console.log('Hello, ini halaman kalkulator');

// Membuat Object Kalkulator

const kalkulator = {
    angkaDiplay: '0',
    operator: null,
    angkaPertama: null,
    tungguAngkaKdua: false,
};

// Membuat fungsi Updating Display

function updteDisplay() {
    console.log(kalkulator.angkaDiplay);
}

// Membuat fungsi reset display kalkulator

function resetKalklator() {
    kalkulator.angkaDiplay = '0';
    kalkulator.operator = null;
    kalkulator.angkaPertama = null;
    kalkulator.tungguAngkaKdua = false;
}

// Membuat fungsi menginput angka

function inputDigit(digit) {
    if (kalkulator.angkaDiplay === '0') {
        kalkulator.angkaDiplay = digit;
    } else {
        kalkulator.angkaDiplay += digit;
    }
}

// Membuat fungsi input angka menjadi negatif atau positif

function inverseAngka() {
    if (kalkulator.angkaDiplay === '0') {
        return;
    }
    kalkulator.angkaDiplay = kalkulator.angkaDiplay * -1;
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
        hasil = parseInt(kalkulator.angkaPertama) + parseInt(kalkulator.angkaDiplay);
    } else {
        hasil = parseInt(kalkulator.angkaPertama) - parseInt(kalkulator.angkaDiplay);
    }
    kalkulator.angkaDiplay = hasil;
}

function gunakanOperator(operator) {
    if (!kalkulator.tungguAngkaKdua) {
        kalkulator.operator = operator;
        kalkulator.tungguAngkaKdua = true;
        kalkulator.angkaPertama = kalkulator.angkaDisplay;

        // Mengatur ulang nilai angka display supaya button selanjutnya dimulai dari angka pertama lagi
        kalkulator.angkaDiplay = '0';
    } else {
        console.log('Operator sudah ditetapkan');
    }
}

// Memilih elemen button dalam kalkulator.html
const buttons = document.querySelectorAll(".button");

// LOOPING BUTTONS dengan fungsi setiap button;

for (let button in buttons) {
    buttonaddEventListener('blur', function (event) {
        // mendapatkan objek elemen yang diklik
        const target = event.target;

        // Jika button clear kalkulator diklik
        if (target.classList.contains('clear')) {
            resetKalklator();
            updteDisplay();
            return;
        }

        // Jika button -/+ diklik menghasilkan input angka negatif atau positif

        if (target.classList.contains('negative')) {
            inverseAngka();
            updteDisplay();
            return;
        }

        // Jika button = atau sama dengan diklik untuk menampilan hasil perhitungan

        if (target.classList.contains('equals')) {
            hitungKalkulasi();
            updteDisplay();
            return;
        }

        // Jika button operator +, -, *, / diklik
        if (target.classList.contains('operator')) {
            gunakanOperator(target.innerText);
            return;
        }

        // Masukkan angka
        inputDigit(target.innerText);
        updteDisplay();
    })
}