// // contoh 1
// let nilaiAkhir = prompt("Masukkan Nilai Akhir");
// if (nilaiAkhir >= 80 && nilaiAkhir <= 100) {
//     document.write(`Nilai Akhir Anda A (${nilaiAkhir})`);
// } else if (nilaiAkhir >= 70 && nilaiAkhir <= 80) {
//     document.write(`Nilai Akhir Anda B (${nilaiAkhir})`);
// } else if (nilaiAkhir >= 60 && nilaiAkhir <= 70) {
//     document.write(`Nilai Akhir Anda C (${nilaiAkhir})`);
// } else {
//     document.write("Anda Belum Mengikuti Ujian")
// } 

// // contoh 2
// // role (Admin, Operator)
// let userRole = prompt("Login Sebagai: ");
// if (userRole == "Admin") {
//     document.write("Selamat Datang Admin");
// } else if (userRole == "Operator") {
//     document.write("Selamat Datang Operator");
// } else {
//     document.write("Anda Dilarang Mengakses Halaman Ini");
// }

timA = (96 + 108 + 89);
timB = (88 + 91 + 110);

let aveTimA = (timA) / 3;
let aveTimB = (timB) / 3;

console.log(`Skor rata-rata tim A adalah ${aveTimA.toFixed()}`);
console.log(`Skor rata-rata tim B adalah ${aveTimB.toFixed()}`);

console.log();

if (aveTimA > aveTimB) {
    console.log(`Tim A Menang Dengan Rata-Rata Skor ${aveTimA.toFixed()}`)
} else if (aveTimA < aveTimB) {
    console.log(`Tim B Menang Dengan Rata-Rata Skor ${aveTimB.toFixed()}`)
} else {
    console.log("Pertandingan Seri");
}