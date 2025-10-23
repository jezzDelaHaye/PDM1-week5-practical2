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
    console.log(player.x)
    console.log(player.y)

    

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
function move()
{
    if (movingUpwards) 
    {
        if (!(player.y - player.speed) === (player.y >= 75 && player.y <= 275)) 
        {
            if (!(player.x) === (player.x >= 125 && player.x <= 375))
            {
                player.y -= player.speed
            }
            
        }
    }
    if (movingDownwards) 
    {
        if (!(player.y + player.speed) === (player.y >= 75 && player.y <= 275))
        {
            if (!(player.x) === (player.x >= 125 && player.x <= 375))
            {
                player.y += player.speed
            }       
        }
    }
    if (movingLeft) {player.x -= player.speed}
    if (movingRight) {player.x += player.speed}
    /*if (player.x >= 0 && player.x <= 150)
    if (player.x >= 250 && player.x <= 400)
    if (player.y >= 0 && player.y <= 100)
    if (player.y >= 300 && player.y <= 400)
    */
}
