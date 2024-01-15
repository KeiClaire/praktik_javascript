// const tagihan = 100000; // nyimpan data tagihan
// const tip = 0.25; // persentase tip dariharga bayar
// const nilaiTip = tagihan * tip; // perhitungan dari nilaiTip = tagihan dikali tip

// // tampilkan dalam konsol
// console.log(
//     `Tagihan sejumlah ${tagihan}, tip ${nilaiTip}, total bayar ${tagihan + nilaiTip}`
// );

// console.log(typeof tagihan);


// console.log("===============================")
// console.log("        Nota Pembayaran        ")
// console.log("===============================")

// const jumlahBaju = 5; 
// const hargaBaju = 10000;
// const totalPembayaran =  jumlahBaju * hargaBaju;

// console.log("Harga baju              : "+hargaBaju)
// console.log("Jumlah baju yang dibeli : "+jumlahBaju)
// console.log("===============================")
// console.log("Total                   : "+totalPembayaran);

// if (jumlahBaju > 3) {
//     const diskon1 = 0.35;
//     const afterDiskon1 = totalPembayaran * diskon1;
//     console.log(`Diskon                  : ${afterDiskon1}`);
//     console.log(`Total pembayaran        : ${totalPembayaran - afterDiskon1}`);
// } else {
//     const diskon2 = 0.05;
//     const afterDiskon2 = totalPembayaran * diskon2;
//     console.log(`Diskon                  : ${afterDiskon2}`)
//     console.log(`Total pembayaran        : ${totalPembayaran - afterDiskon2}`);
// }
// console.log("===============================")



const uang = prompt("Masukkan uang: ");
const beliBaju = prompt("Jumlah baju yang dibeli: ");
let diskon = beliBaju > 3 ? uang * 0.35 : uang * 0.05
alert 
