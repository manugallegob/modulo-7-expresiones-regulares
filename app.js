console.log("");
console.log("///////// VALIDANDO IBAN /////////");
console.log("");

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
    console.log("El IBAN " + value + " no coincide con el patrón");
  }
});

console.log("");
console.log("//////// VALIDANDO MATRÍCULAS ////////");
console.log("");

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

console.log("");
console.log("//////// VALIDANDO TARJETA DE CRÉDITO ////////");
console.log("");

const pattern3 = /^(5[0-5]{1})\d{2}(\s|-?)?\d{4}(\s|-)?\d{4}(\s|-)?\d{4}$/i;
const values3 = [
  "5299 6400 0000 0000",
  "5299-6400-0000-0000",
  "5299640000000000",
  "6599640000000000",
];
values3.forEach((valor) => {
  console.log(`Regexp matchs with "${valor}"? -> `, pattern3.test(valor));
});

console.log("");
console.log("//////// Ejercicio Extra 1 ////////");
console.log("");

const pattern4 = /^(\d{3})(\s?(\d{2})){3}$/i;
const values4 = ["952 35 42 77", "952354277"];
values4.forEach((valor) => {
  console.log(`Regexp matchs with "${valor}"? -> `, pattern4.test(valor));
});

console.log("");
console.log("//////// Ejercicio Extra 2 ////////");
console.log("");

const pattern5 = /^(9|6)(\d{2})(\s?(\d{2})){3}/i;
const values5 = [
  "952 35 42 77",
  "652 35 42 77",
  "952354277",
  "652354277",
  "552354277",
];
values5.forEach((valor) => {
  console.log(`Regexp matchs with "${valor}"? -> `, pattern5.test(valor));
});

console.log("");
console.log("//////// Ejercicio Extra 3 ////////");
console.log("");

const pattern6 = /^(\+\d{2})2\s?(9|6)(\d{2})(\s?(\d{2})){3}/i;
const values6 = [
  "+34 952 35 42 77",
  "+34 652 35 42 77",
  "952354277",
  "+34952354277",
  "652354277",
  "+55552354277",
];
values6.forEach((valor) => {
  console.log(`Regexp matchs with "${valor}"? -> `, pattern6.test(valor));
});

console.log("");
console.log("//////// Ejercicio Extra 4 ////////");
console.log("");

const pattern7 = /^(\(?\+\d{2}\)?)?\s?(9|6)(\d{2})(\s?(\d{2})){3}/i;
const values7 = [
  "(+34) 952 35 42 77",
  "(+34) 652 35 42 77",
  "+54952354277",
  "652354277",
  "+55552354277",
];
values7.forEach((valor) => {
  console.log(`Regexp matchs with "${valor}"? -> `, pattern7.test(valor));
});

console.log("");
console.log("//////// Ejercicio Extra 5 ////////");
console.log("");

const pattern8 = /^[xyz]\s?\d{7}\s?[A-Za-z]{1}/i;
const values8 = [
  "X 1234567P",
  "X1234567P",
  "A1234567P",
  "X 1234567 P",
];
values8.forEach((valor) => {
  console.log(`Regexp matchs with "${valor}"? -> `, pattern8.test(valor));
});

console.log("");
console.log("//////// Ejercicio Extra 6 ////////");
console.log("");

const pattern9 = /^[xyz]\s?\d{7}(\s|-?)[A-Za-z]{1}/i;
const values9 = [
  "X 1234567P",
  "X1234567P",
  "A1234567P",
  "X 1234567-P",
];
values9.forEach((valor) => {
  console.log(`Regexp matchs with "${valor}"? -> `, pattern9.test(valor));
});

console.log("");
console.log("//////// Ejercicio Extra 7,8,9 ////////");
console.log("");

const pattern10 = /^(29|28|08)\d{3}/i;
const values10 = [
  "29015",
"28024",
"08024",
"27023",
"24987",
];
values10.forEach((valor) => {
  console.log(`Regexp matchs with "${valor}"? -> `, pattern10.test(valor));
});

console.log("");
console.log("//////// Ejercicio Extra 10 ////////");
console.log("");

const pattern11 = /^rgb\(\d{1,3}(,\s?\d{1,3}){2}\)$/i;
const values11 = [
  "RGB(128, 128, 0)",
  "rgb(128, 128, 0)",
  "agb(128, 128, 0)",
  "rgb(128,12,0)",
];
values11.forEach((valor) => {
  console.log(`Regexp matchs with "${valor}"? -> `, pattern11.test(valor));
});
