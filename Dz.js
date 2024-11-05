// 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».

// let myName = prompt("Type your name here");
// console.log("Name: ", myName);
// alert("Hello, " + myName + "!");

// 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.

// const currentYear = 2024;

// console.log("currentYear: ", currentYear);
// let yearOfBirth = prompt("Type your year of birth");

// let age = currentYear - yearOfBirth;

// console.log("yearOfBirth: ", yearOfBirth);
// console.log("age: ", age);

// alert("Your age is " + age);

// 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.

// const squareSide = prompt("Type the length of the side of the square");
// console.log("squareSide: ", squareSide);
// const squarePerimeter = squareSide * squareSide;
// console.log("squarePerimeter: ", squarePerimeter);
// alert("the perimeter of the square is " + squarePerimeter);

// 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.

// const π = 3.14;
// console.log("π = ", π);
// const radius = prompt("Type the radius of the circle");
// console.log("radius = ", radius);
// const perimeter = π * radius ** 2;
// console.log("perimeter = ", perimeter);
// alert("the perimeter of the circle is equal to " + perimeter);

// 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться.
// Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.

// const distance = prompt("Type the distance in km between two cites");
// console.log("distance = ", distance);
// const hours = prompt("how many hours does it take to reach your destination");
// console.log("hours = ", hours);
// const speedKmh = distance / hours;
// console.log("speedKmh = ", speedKmh);
// alert("the speed required is " + speedKmh + " km/h");

// 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.

// const euroExRate = 0.9;
// console.log("euroExRate = ", euroExRate);
// const dollars = prompt("Type the dollars amount");
// console.log("dollars = ", dollars);
// const euros = dollars * euroExRate;
// console.log("euros = ", euros);
// alert("result euros amount is " + euros);

// 7. Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

// const flashDriveGB = prompt("type flash drive capacity in GB");
// const oneFileMB = 820;
// console.log("flashDriveGB = ", flashDriveGB);
// console.log("oneFileMB = ", oneFileMB);
// const result = parseInt((flashDriveGB * 1000) / oneFileMB);
// console.log("result = ", result);
// alert("the amount of files that can fit in the flash drive is " + result);

// 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки.
// Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется.

// const ChocolatePrice = 3.5;
// const walletAmount = prompt("how much money is in your wallet");
// console.log("ChocolatePrice = ", ChocolatePrice);
// console.log("walletAmount = ", walletAmount);
// const chocolateAmount = parseInt(walletAmount / 3.5);
// console.log("chocolateAmount = ", chocolateAmount);
// const fullPrice = ChocolatePrice * chocolateAmount;
// const change = walletAmount - ChocolatePrice * chocolateAmount;
// console.log("fullPrice = ", fullPrice);
// console.log("change = ", change);
// alert("the amount of chocolate you can get is " + chocolateAmount);
// alert("change from purchase is $" + change);

// 9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления).

// const inputNum = prompt("type the 3 digit number to revers it");
// const firstNum = parseInt(inputNum / 100);
// const secondNum = parseInt((inputNum % 100) / 10);
// const lastNum = inputNum % 10;
// console.log("fistNum = ", firstNum);
// console.log("secondNum = ", secondNum);
// console.log("lastNum = ", lastNum);
// let result = ((lastNum + secondNum * 0.1) * 10 + firstNum * 0.1) * 10;
// console.log("result = ", result);
// alert("number: " + inputNum + " reversed number: " + result);

// 10. Запросите у пользователя целое число и выведите в ответ, четное число или нет.
// В задании используйте логические операторы. В задании не надо использовать if или switch.

// const num = prompt("type the number");
// const isEven = num % 2 == 0;
// console.log("num = ", num);
// console.log("isEven = ", isEven);
// alert("number is even: " + isEven);
