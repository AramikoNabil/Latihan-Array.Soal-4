// ****4

// var nilai santri
var nilaiSantri = [5, 9, 6, 7, 9, 8, 10, 7, 8];
var total = 0;

// var mencari banyaknya santri
var isiNilai = nilaiSantri.length;
// perulangan untuk mencari nilai rata rata santri
for (i = 0; i < isiNilai; i++) // cetak
{
  console.log(i);
  total += nilaiSantri[i];
}
document.write(total / isiNilai);
