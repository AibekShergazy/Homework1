/* 5. Создайте программу, которая запрашивает у пользователя два целых
 числа **a** и **b**, после чего выводит на экран результаты следующих математических операций: 
    
    - сумма a и b; 
    
    - разница между a и b;
    
    - произведение a и b; 
    
    - частное от деления a на b; 
    
    - остаток от деления a на b;  
    
    - результат возведения числа a в степень b*/

let a = Number(prompt("Введите цифру"));
let b = Number(prompt("Ввести вторую цифру"));

sum = a + b;

let result = a > b; // результат сравнения присваивается переменной result
alert(result); // tru
dd = a * b;
del = a / b;
ab = a % b;
vesty = a ** b;

document.write("Сумма: " + sum + "<br>");
document.write("Разница: " + result + "<br>");
document.write("Произведение: " + dd + "<br>");
document.write("Деление: " + del + "<br>");
document.write("Остаток: " + ab + "<br>");
document.write("Степень: " + vesty + "<br>");
