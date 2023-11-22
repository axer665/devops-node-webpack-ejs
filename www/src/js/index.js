import example from './../img/grass.png';
import styles from './../styles/main.scss';
import {jQuery, $} from 'jquery';
window.$ = $;
window.jQuery = jQuery;

// создание свойства класса без конструктора
class Game {
    name = 'Violin Charades'
}
const myGame = new Game()

// создаем параграф
const p = document.createElement('p')
p.textContent = `I like ${myGame.game}.`

// создаем элемент заголовка
const heading = document.createElement('h1')
heading.textContent = 'Как интересно!'

// добавляем заголовок в DOM
const root = document.querySelector('#root')
root.append(heading)

$(document).ready(function() {
    $('h2').html("asf");
});
