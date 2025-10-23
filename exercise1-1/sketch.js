let squares = [];
let c1 = 128;
let c2 = 0;
let c3 = 128;
function setup()
{
    createCanvas(600,600)

}
function draw()
{
    background(c1,c2,c3);
    for (let i =0; i < squares.length; i++)
    {
        if(i % 2 === 0)
        {
            fill(0);
        }
        else
        {
            fill(255);
        }
        rect(squares[i].x,squares[i].y,squares[i].h,squares[i].w)
    }
}

function keyPressed()
{
    if (key === ' ')
    {
        c1 = (random(255))
        c2 = (random(255))
        c3 = (random(255))
        squares.length = (0);
        for(let i =0; i < 100; i++)
        {
            squares.shift;
            let rectangle = 
            {
              x:random(600),
              y:random(600),
              h:random(5,15),            
              w:random(5,15)
            }
            squares.push(rectangle);
            console.log(squares);
        }
    }
}
