console.log('');
console.log('///////// VALIDANDO IBAN /////////');
console.log('');

const pattern = /^(ES)(\d{2})\s?(\d{4}\s?){4}\d{4}$/i;
const values = [
  "ES66 0019 0020 9612 3456 7890",
  "ES6600190020961234567890",
  "es6600190020961234567890",
  "VE6600190020961234567890",
];

values.forEach((value) => {
  console.log("----------------");
  if (pattern.test(value)) {
  console.log(`Regexp matchs with "${value}"? -> `, pattern.test(value));
  console.log("El código de país es: " + value.match(pattern)[1]);
  console.log("El código de oficina es: " + value.match(pattern)[2]);
  } else {
    console.log('El IBAN ' + value + ' no coincide con el patrón')
  } 
});

console.log('');
console.log('//////// VALIDANDO MATRÍCULAS ////////');
console.log('');

const pattern2 = /^(\d{4})(\s|-)?([a-z]{3})$/i;
const values2 = ["2021 GMD", "2345-GMD", "4532BDB", "0320-AAA", "032-1AAA"];

values2.forEach((val) => {
  if (pattern2.test(val)) {
    console.log("-------------------------------------------------");
    console.log(`Regexp matchs with "${val}"? -> `, pattern2.test(val));
    console.log("Números de la matrícula: " + val.match(pattern2)[1]);
    console.log("Letras de la matrícula: " + val.match(pattern2)[3]);
  } else {
    console.log("-------------------------------------------------");
    console.log(`Regexp matchs with "${val}"? -> `, pattern2.test(val));
  }
});

console.log('');
console.log('//////// VALIDANDO TARJETA DE CRÉDITO ////////');
console.log('');

const pattern3 = /^(5[0-5]{1})\d{2}(\s|-?)?\d{4}(\s|-)?\d{4}(\s|-)?\d{4}$/i;
const values3 = [
    "5299 6400 0000 0000",
    "5299-6400-0000-0000",
    "5299640000000000",
    "6599640000000000",
];
values3.forEach((valor) => {
      console.log("-------------------------------------------------");
      console.log(`Regexp matchs with "${valor}"? -> `, pattern3.test(valor));
  });



