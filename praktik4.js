// const umur = 15;
// if (umur >=18) {
//     console.log("Bisa Ikut Tes SIM");
// } else {
//     const yearLeft = 18 - umur;
//     console.log(`Masih terlalu muda, tunggu ${yearLeft} tahun lagi`)
// }

let beratMadan = 60;
let tinggiMadan = 1.6;

let beratJoan = 64;
let tinggiJoan = 1.65;

console.log("Berat Madan: "+beratMadan);
console.log("Tinggi Madan: "+tinggiMadan);

console.log();

console.log("Berat Joan: "+beratJoan);
console.log("Tinggi Joan: "+tinggiJoan)

console.log();

var IMTMadan = beratMadan / tinggiMadan**2;
var IMTJoan = beratJoan / tinggiJoan**2;

if (IMTMadan > IMTJoan) {
    console.log(`Nilai IMT Madan ${IMTMadan.toFixed(1)} Lebih Tinggi Dari Joan ${IMTJoan.toFixed(1)}`);
} else {
    console.log(`Nilai IMT Joan ${IMTJoan.toFixed(1)} Lebih Tinggi Dari Madan ${IMTMadan.toFixed(1)}`);
}




