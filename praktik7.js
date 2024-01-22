// let silaPancasila = 1;
// switch (silaPancasila) {
//     case 1:
//         document.write("Ketuhanan Yang Maha Esa");
//         break;

//     case 2:
//         document.write("Kemanusiaan Yang Adil Dan Beradab");
//         break;

//     case 3:
//         document.write("Persatuan Indonesia");
//         break;

//     case 4:
//         document.write("Kerakyatan Yang Dipipimpin Oleh Hikmah Kebijaksanaan Dalam Permusyawaratan Perwakilan");
//         break;

//     case 5:
//         document.write("Keadilan Sosial Bagi Seluruh Indonesia")
//         break;
//         default:
//             document.write("nilai tidak valid")
// }

let platNomor = prompt("Pilih Plat Nomor (KU/ KT/ DA/ KB/ KH) Dengan Huruf Kapital")
switch (platNomor) {
    case 'KU':
        document.write(platNomor +" Adalah Plat Nomor Polisi Daerah Kalimantan Utara");
        break;

    case 'KT':
        document.write(platNomor +" Adalah Plat Nomor Polisi Daerah Kalimantan Timur");
        break;

    case 'DA':
        document.write(platNomor +" Adalah Plat Nomor Polisi Daerah Kalimantan Selatan");
        break;

    case 'KB':
        document.write(platNomor +" Adalah Plat Nomor Polisi Daerah Kalimantan Barat");
        break;

    case 'KH':
        document.write(platNomor +" Adalah Plat Nomor Polisi Daerah Kalimantan Tengah")
        break;
        default:
            document.write("Plat Nomor Tidak Tersedia")
}


