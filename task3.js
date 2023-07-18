let rl = require('readline').createInterface(process.stdin, process.stdout);
const fs = require('fs');


async function question(q) {
    return new Promise((resolve, reject) => {
        rl.question(q, (answer) => {
            resolve(answer);
        })
    })
    
}


async function game() {
    const findNum = Math.floor(Math.random()*50);
    console.log(findNum);
    let counter = 1;
    while(true) {
        const input = await question(`Угадайте число от 1 до 50. Сейчас ${counter}-я попытка: `);

        if (input === 'q') {
            rl.close();
            break;
        }

        if (findNum == input) {
            let nowData = new Date();
            let textWin = `Вы угадали с ${counter} попытки ${nowData}\n`;
            fs.appendFile('result2.txt', textWin, err => {
                if (err) throw err;
            })
            rl.close();
            break;
        } else if (isNaN(input) || input === '') {
            console.log('Не число или пустой ввод');
        } else if (input > 50 || input < 0) {
            console.log('Вне диапазона 0-50');
        } else if (input > findNum) {
            console.log('Число больше');
        } else if (input < findNum) {
            console.log('Число меньше');
        }

        counter++;
    }
}

game();