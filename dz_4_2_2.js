const rl = require('readline').createInterface(process.stdin, process.stdout);

const fs = require('fs');

let givenValue = Math.round(Math.random() * 1000);
let counter = 1;
console.log(givenValue);

function question() {
    rl.question('Введите число: ', (cmd) => {
        numb = Number(cmd);
        const con = {'Попытка №': counter, 'Вы ввели': numb};
        let content = JSON.stringify(con);
        fs.appendFile('result.json', content, (err) => {
            if (err) {
              console.error(err);
            }
        })
        console.log(con);
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
