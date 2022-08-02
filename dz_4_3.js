const rl = require('readline').createInterface(process.stdin, process.stdout);

let givenValue = Math.round(Math.random() * 1000);
let counter = 1;
console.log(givenValue);

function question (quest) {
    return new Promise((resolve, reject) => {
        rl.question(quest, (data) =>{
            resolve (data);
        })        
    })
}


(async () => {
    while(true) {
        const data = await question ('Введите число: ');
        console.log(`Попытка № ${counter}\nВы ввели: ${data}`);
        if (data == givenValue) {
            rl.close();
            return console.log(`Угадали! Это число - ${data}\nКоличество попыток: ${counter}`);
        } else if (isNaN(data) || (data < 0 || data > 999)) {
            console.log('Вы ввели некорректное значение');
        } else if (data < givenValue) {
            console.log('Загаданное число больше');
        } else {
            console.log('Загаданное число меньше');
        }
        counter++;
    }
}) ();