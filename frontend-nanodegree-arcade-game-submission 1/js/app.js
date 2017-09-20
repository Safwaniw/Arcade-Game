// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;

    //random number between 0 (inclusive) and 1 (exclusive) multiplied by number to specify the speed
    this.speed = Math.random() * 600;
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// which will ensure the game runs at the same speed for
// all computers.
Enemy.prototype.update = function(dt) {

    //to check if collesion happens
    this.collesion(player);

    if (this.x >= 400) {
        this.x = 5;
        //random number between 0 (inclusive) and 1 (exclusive) multiplied by number to specify the speed
        this.speed = Math.random() * 600;
    }
    this.x += (this.speed * dt);
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.collesion = function() {
    // I used the x and y and added a small value for width and hight of the objects
    if (player.x < this.x + 80 && player.x + 80 > this.x &&
        player.y < this.y + 70 && player.y + 70 > this.y) {
        alert("You lost, try again !");
        player.reset();
    }
}

// instantiate enemies.
// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy(5, 70);
var enemy2 = new Enemy(5, 150);
var enemy3 = new Enemy(5, 225);
var enemy4 = new Enemy(5, 320);

var allEnemies = [enemy1, enemy2, enemy3, enemy4];

// player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Variables applied to each of our instances go here,

    //starting positon of the player
    this.x = 200;
    this.y = 500;

    // The image/sprite for our Player
    this.sprite = 'images/char-boy.png';
};

// Update the Player's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function(dt) {

    if (this.x >= 400)
        this.x = 400;

    if (this.x <= 5)
        this.x = 5;

    if (this.y >= 400)
        this.y = 400;

    if (this.y <= 0) {
        alert("Well done !");
        this.reset();
    }
};

// Draw the Player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// This listens for key presses and sends the keys to 
// Player.handleInput() method.
Player.prototype.handleInput = function(key) {
    switch (key) {
        case 'left':
            this.x -= 50;
            break;

        case 'right':
            this.x += 50;
            break;

        case 'up':
            this.y -= 50;
            break;

        case 'down':
            this.y += 50;
    }
};

//reset the game which is simply reseting the player's position
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
}

// This listens for key presses and sends the keys to
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

// Place the player object in a variable called player
var player = new Player();