const chalk = require('chalk');
const log = console.log;

// Combine styled and normal strings
log('Wykorzystując moduł chalk dokonuję zmian kolorów wyświetlanego tekstu.')
log('za pomocą napisu chalk.kolor można zmienić kolor tekstu w nawiasie na taki jaki się chce')
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log('W tym przypadku tekst został przekolorowany na niebiesko oraz wykorzystano metode bgRed zmieniającą tło tekstu')
log(chalk.blue.bgRed.bold('Hello world!'));


// Nest styles
log('wypisanie tekstu w wybranym kolorze oraz zmiana tła i podkreślenie jednego wyrazu')
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log('wypisanie zdania na zielono z wstawką koloru niebieskiego na środku')
log(chalk.green(
    'Zielona linia ' +
    chalk.blue.underline.bold('z niebieską wstawką') +
    ' , która robi się zielona!'
));
