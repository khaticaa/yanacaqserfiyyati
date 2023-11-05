function YanacaqMiqdari(mesafe, zaman) {
  const surət = mesafe / zaman;
  let yanacaqSərfiyyati;
  if (surət >= 0 && surət < 60) {
    yanacaqSərfiyyati = 6;
  } else if (surət >= 60 && surət < 90) {
    yanacaqSərfiyyati = 9;
  } else if (surət >= 90 && surət < 120) {
    yanacaqSərfiyyati = 8;
  } else {
    yanacaqSərfiyyati = 10;
  }
  let YanacaqMiqdar = (mesafe / 100) * yanacaqSərfiyyati;
  let Yekun = `${mesafe} km yolu ${zaman} saat müddətinə getmək üçün, sizin ortalama sürətiniz ${surət} km/saat olmalıdır. Sizə lazım olacaq yanacaq miqdarı ${YanacaqMiqdar}, ortalama yanacaq sərfiyyatı isə ${yanacaqSərfiyyati} olacaq.`;
  return Yekun;
}
console.log(YanacaqMiqdari(230, 2));
