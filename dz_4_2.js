const rl = require('readline').createInterface(process.stdin, process.stdout);

let givenValue = Math.round(Math.random() * 1000);
let counter = 1;
console.log(givenValue);

function question() {
    rl.question('Введите число: ', (cmd) => {
        console.log(`Попытка № ${counter}\nВы ввели: ${cmd}`);
        counter++;
        if (cmd == givenValue) {
            rl.close();
            return console.log(`Угадали! Это число - ${cmd}\nКоличество попыток: ${counter}`);
        } else if (isNaN(cmd) || (cmd < 0 || cmd > 999)) {
            console.log('Вы ввели некорректное значение');
        } else if (cmd < givenValue) {
            console.log('Загаданное число больше');
        } else {
            console.log('Загаданное число меньше');
        }
        question();
    })
}

question();
