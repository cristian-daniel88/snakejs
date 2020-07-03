const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;


/* crea snake and fruit*/
(function setup() {
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();
    console.log(fruit);
    
    window.setInterval(()=> {
/* propiedad para que se desplace sin marcarse*/ ctx.clearRect (0, 0, canvas.width, canvas.height);
        
        fruit.draw();
        snake.draw();
        snake.update();

        if (snake.eat(fruit)) {
            fruit.pickLocation();
        }
        
    },150)
}());


/* evento para el teclado*/
window.addEventListener('keydown', ((evt) => {

    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))
