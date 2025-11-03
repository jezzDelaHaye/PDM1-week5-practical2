let movingUpwards = false;
let movingDownwards = false;
let movingLeft = false;
let movingRight = false;
function setup()
{
    createCanvas(400,400)
}
function draw()
{
    
    background(255)
    fill(0);
    rectMode(CORNER)
    rect(obstacle.x,obstacle.y,obstacle.width,obstacle.height);
    move();
    rectMode(CENTER);
    square(player.x,player.y,player.size);      
}
let player = 
{
    x:50,
    y:50,
    size:50,
    speed:10 
}
let obstacle = 
{
    x:150,
    y:100,
    width:100,
    height:200
}
function keyPressed()
{
    if (key === 'w'){movingUpwards = true;} 
    if (key === 's'){movingDownwards = true;}
    if (key === 'a'){movingLeft = true;}
    if (key === 'd'){movingRight = true;}   
}
function keyReleased()
{
    if (key === 'w'){movingUpwards = false;}
    if (key === 's'){movingDownwards = false;}
    if (key === 'a'){movingLeft = false;}
    if (key === 'd'){movingRight = false;}
}
function move() {
    // Up
    if (movingUpwards && player.y - player.size/2 > 0) {
        if (!(player.x + player.size/2 > obstacle.x &&
              player.x - player.size/2 < obstacle.x + obstacle.width &&
              player.y - player.size/2 - player.speed < obstacle.y + obstacle.height &&
              player.y + player.size/2 > obstacle.y))
        {
            player.y -= player.speed;
        }
    }

    // Down
    if (movingDownwards && player.y + player.size/2 < height) {
        if (!(player.x + player.size/2 > obstacle.x &&
              player.x - player.size/2 < obstacle.x + obstacle.width &&
              player.y + player.size/2 + player.speed > obstacle.y &&
              player.y - player.size/2 < obstacle.y + obstacle.height))
        {
            player.y += player.speed;
        }
    }

    // Left
    if (movingLeft && player.x - player.size/2 > 0) {
        if (!(player.y + player.size/2 > obstacle.y &&
              player.y - player.size/2 < obstacle.y + obstacle.height &&
              player.x - player.size/2 - player.speed < obstacle.x + obstacle.width &&
              player.x + player.size/2 > obstacle.x))
        {
            player.x -= player.speed;
        }
    }

    // Right
    if (movingRight && player.x + player.size/2 < width) {
        if (!(player.y + player.size/2 > obstacle.y &&
              player.y - player.size/2 < obstacle.y + obstacle.height &&
              player.x + player.size/2 + player.speed > obstacle.x &&
              player.x - player.size/2 < obstacle.x + obstacle.width))
        {
            player.x += player.speed;
        }
    }
}