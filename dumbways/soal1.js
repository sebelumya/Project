// Ismail berangkat dari rumah menuju ke kantor yang berjarak 64,5km dengan kecepatan 3 m/detik. Tetapi setelah 23 menit kemudian, kecepatan menjadi 5 m/detik. Demikian setelah 12 menit berikutnya kecepatan konstan dengan lebih lambat 3 m/detik dibandingkan 23 menit sebelumnya. Buatlah suatu program untuk menghitung dan mengetahui berapa lama Ismail menempuh perjalanan dalam format Jam, Menit dan Detik dari rumah menuju ke kantornya.

var jarakInKilo = 64.5;
var kecepatanMeterSecond1 = 3;
var jarakInMeter = jarakInKilo * 1000;
var timeMenit1 = 23;
var timeSecond1 = timeMenit1 * 60;
var kecepatanMeterSecond2 = 5;
var timeMenit2 = 12;
var timeSecond2 = timeMenit2 * 60;
var kecepatanMeterSecond3 = kecepatanMeterSecond2 - 3;
var ismailKecepatan = 0;

var sisaWaktu = 0;
var waktuSecond = 0;
jarak1 = kecepatanMeterSecond1 * timeSecond1;
jarak2 = kecepatanMeterSecond2 * timeSecond2;
jarak3 = kecepatanMeterSecond3 * sisaWaktu;

sisaWaktu = (jarakInMeter - jarak1 - jarak2) / kecepatanMeterSecond3;

waktuSecond = timeSecond1 + timeSecond2 + sisaWaktu;
waktuMenit = waktuSecond / 60;
waktuJam = waktuMenit / 60;

result = `waktu perjalanan ismail ke kantor adalah ${waktuJam} jam, atau ${waktuMenit} dalam menit, atau ${waktuSecond} dalam detik`;
console.log(result);
