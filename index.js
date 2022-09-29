// 1. Написать функцию сложения двух чисел

function sumTwoNumbers(a,b) {
    result = a + b;
}


let a = parseInt(prompt("Вводите 1-ое число:"));

let b = parseInt(prompt("Вводите 2-ое число:"));

sumTwoNumbers(a,b);

alert("Your result is: " + result);


// 2. Написать функцию, которая выводит в консоль четные числа от a до b (a, b – параметры функции)

// let evenNumbers = [];

// let a = parseInt(prompt("Вводите 1-ое число:"));

// let b = parseInt(prompt("Вводите 2-ое число:"));

// for (i = a; i <= b; i++) {
//     if (i % 2 == 0) {
//         evenNumbers.push(i);
//     }
    
// }

// alert("Your result is: " + evenNumbers);


// 3. Написать функцию, которая сравнивает 3 числа и выводит в консоль самое большое из них

// function compareThreeNumbers(a,b,c) {
//     if (a > b) {
//         result = a;
//     } else {
//         result = b;
//     }

//     if (b > c) {
//         result = b;
//     } else {
//         result= c;
//     }
// }

// let a = parseInt(prompt("Вводите 1-ое число:"));

// let b = parseInt(prompt("Вводите 2-ое число:"));

// let c = parseInt(prompt("Вводите 3-е число:"));

// compareThreeNumbers(a,b,c);

// alert("The biggest number is: " + result);


// 4. Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false

// function isEmpty(obj) {
//    if  (Object.keys(obj).length === 0) {
//     result = true;
//    } else result = false;
// }

// let obj = {age:2, legs:3};

// isEmpty(obj);

// console.log(result);


// 5. Создать объект, у которого есть firstName и lastName, а также метод, который выводит в консоль firstName + lastName

// let firstName = prompt("Введите имя:");

// let lastName = prompt("Введите фамилию:");

// let fullName = {firstName, lastName};

// console.log(firstName + ' ' + lastName);


// 6. (NOT DONE) Realize pipe pattern
// const multiplyTwo = function (a) { return a * 2; }
// const minusFour = (n, y) => n - y;
// const minusFour = (n, y) => n - y;


// 7. (NOT DONE) Realize memo pattern
// const sum = (a,b) => a + b;
// const memedSum = memo(sum);

