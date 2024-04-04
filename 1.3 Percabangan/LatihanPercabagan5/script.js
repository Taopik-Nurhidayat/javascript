const no_bulan = prompt("Masukan No Bulan: ");
let nama_bulan;
switch (no_bulan) {
  case "1":
    nama_bulan = "Januari";
    break;
  case "2":
    nama_bulan = "Februari";
    break;
  case "3":
    nama_bulan = "Maret";
    break;
  case "4":
    nama_bulan = "april";
    break;
  case "5":
    nama_bulan = "Mei";
    break;
  case "6":
    nama_bulan = "Juni";
    break;
  case "7":
    nama_bulan = "Juli";
    break;
  case "8":
    nama_bulan = "Agustus";
    break;
  case "9":
    nama_bulan = "September";
    break;
  case "10":
    nama_bulan = "Oktober";
    break;
  case "11":
    nama_bulan = "November";
    break;
  case "12":
    nama_bulan = "Desember";
    break;
  default:
    console.log("Bulan Tidak Tersedia!");
    break;
}

if (no_bulan >= 1 && no_bulan <= 12) {
  console.log(" Bulan ke" + " " + no_bulan + " " + "Adalah" + " " + nama_bulan);
} else {
  console.log("~Silahkan Masukan Kembali~");
}
