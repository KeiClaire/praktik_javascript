let beratMadan = 60;
let tinggiMadan = 1.6;

let beratJoan = 64;
let tinggiJoan = 1.65;

console.log("Berat Madan: "+beratMadan);
console.log("Tinggi Madan: "+tinggiMadan);

console.log("Berat Joan: "+beratJoan);
console.log("Tinggi Joan: "+tinggiJoan)

console.log();

var IMTMadan = beratMadan / tinggiMadan**2;
console.log("IMT Madan: "+IMTMadan);

var IMTJoan = beratJoan / tinggiJoan**2;
console.log("IMT Joan: "+IMTJoan);

console.log();

var MadanHigherIMT = IMTMadan > IMTJoan;
console.log("Apakah IMT Madan lebih tinggi dari Joan? "+MadanHigherIMT);




