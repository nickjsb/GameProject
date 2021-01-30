/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var collectable;
var canyon;
var scrollPos;

var clouds;
var mountains;
var trees_x;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    //boolean variables to move character
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    
    //variables to control background scrolling.
    scrollPos = 0;
    
    //Arrays of scenery objects.
    trees_x = [200, 400, 600, 1000];
    clouds = [
        {x_pos: 180, y_pos: 320, size: 60},
        {x_pos: 680, y_pos: 220, size: 60},      
        {x_pos: 880, y_pos: 320, size: 60}
    ]
    mountain = [{x_pos: 50, y_pos: 432, size: 50}];
    collectable = {x_pos: 320, y_pos: floorPos_y, size: 100, isFound: false};
    canyon = {canx_pos: 80, width: 40, isOvercanyon: false};
}

function draw()
{

	///////////DRAWING CODE//////////

	//fill the sky blue
    background(100,155,255); 

    //draw some green ground
	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y);
    
    //draw the clouds
    for(var i = 0; i < clouds.length; i++)
        {
            noStroke();
            fill(255);
            ellipse(clouds[i].x_pos - 100, clouds[i].y_pos - 250, clouds[i].size);
            ellipse(clouds[i].x_pos - 60, clouds[i].y_pos - 250, clouds[i].size);
            ellipse(clouds[i].x_pos - 130, clouds[i].y_pos - 250, clouds[i].size, clouds[i].size - 20);
            ellipse(clouds[i].x_pos - 30, clouds[i].y_pos - 250, clouds[i].size, clouds[i].size - 20);
        }
    
    //draw the mountains
    for(var i = 0; i < mountain.length; i++)
        {
            noStroke();
            fill(160, 160, 160);
            triangle(mountain[i].x_pos + 100, mountain[i].y_pos, 
                     mountain[i].x_pos + 300, mountain[i].y_pos,
                     mountain[i].x_pos + 300, mountain[i].y_pos - 300);

            fill(128, 128, 128);
            triangle(mountain[i].x_pos + 300, mountain[i].y_pos,
                     mountain[i].x_pos + 450, mountain[i].y_pos,
                     mountain[i].x_pos + 300, mountain[i].y_pos - 300);
            fill(255);
            triangle(mountain[i].x_pos + 300, mountain[i].y_pos - 182,
                     mountain[i].x_pos + 228, mountain[i].y_pos - 192,
                     mountain[i].x_pos + 300, mountain[i].y_pos - 300);
            fill(224, 224, 224);
            triangle(mountain[i].x_pos + 300, mountain[i].y_pos - 182,
                     mountain[i].x_pos + 354, mountain[i].y_pos - 192,
                     mountain[i].x_pos + 300, mountain[i].y_pos - 300);
            fill(160, 160, 160);
            triangle(mountain[i].x_pos + 75, mountain[i].y_pos, 
                     mountain[i].x_pos + 175, mountain[i].y_pos,
                     mountain[i].x_pos + 175, mountain[i].y_pos - 200);
            fill(128, 128, 128);
            triangle(mountain[i].x_pos + 175, mountain[i].y_pos,
                     mountain[i].x_pos + 275, mountain[i].y_pos,
                     mountain[i].x_pos + 175, mountain[i].y_pos - 200);
            fill(160, 160, 160);
            triangle(mountain[i].x_pos + 325, mountain[i].y_pos,
                     mountain[i].x_pos + 405, mountain[i].y_pos,
                     mountain[i].x_pos + 405, mountain[i].y_pos - 150);
            fill(128, 128, 128);
            triangle(mountain[i].x_pos + 405, mountain[i].y_pos,
                     mountain[i].x_pos + 505, mountain[i].y_pos,
                     mountain[i].x_pos + 405, mountain[i].y_pos - 150);
        }    
    

	//draw the canyon
    for(var i = 0; i < canyon.length; i++)
        {
            noStroke();
            fill(100, 155, 255);
            rect(canyon[i].canx_pos, 432, canyon[i].width, 144);
            fill(91, 46, 0);
            triangle(canyon[i].canx_pos, 432, 
                     canyon[i].canx_pos, 576, 
                     canyon[i].canx_pos - 50, 576);
            triangle(canyon[i].canx_pos - 40 + 80, 432, 
                     canyon[i].canx_pos + 40, 576, 
                     canyon[i].canx_pos + 90, 576);
        }
    
    //draw the collectable
    if(dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) < 20)
        {
            collectable.isFound = true;
        }
    if(collectable.isFound == false)
        {
            noStroke();
            fill(93, 186, 0);
            ellipse(collectable.x_pos, collectable.y_pos, collectable.size - 60, collectable.size); 
            fill(102, 51, 0);
            rect(collectable.x_pos - 20, collectable.y_pos + 30, 40, 50);

            stroke(102, 51, 0) ;
            strokeWeight(2);
            line(collectable.x_pos - 25, collectable.y_pos - 40, collectable.x_pos - 10, collectable.y_pos - 30);
            line(collectable.x_pos + 25, collectable.y_pos - 40, collectable.x_pos + 10, collectable.y_pos - 30);
            line(collectable.x_pos, collectable.y_pos - 45, collectable.x_pos, collectable.y_pos - 75);
            line(collectable.x_pos + 25, collectable.y_pos - 10, collectable.x_pos + 10, collectable.y_pos);
            line(collectable.x_pos - 25, collectable.y_pos - 10, collectable.x_pos - 10, collectable.y_pos);
            line(collectable.x_pos - 25, collectable.y_pos + 20, collectable.x_pos - 10, collectable.y_pos + 30);
            line(collectable.x_pos + 35, collectable.y_pos + 20, collectable.x_pos + 10, collectable.y_pos + 30);
        }
    
    noStroke();
    
	//the game character
    if(isLeft && isFalling)
	{
		// add your jumping-left code
        
        //head
        fill(255, 204, 123);
        ellipse(gameChar_x, gameChar_y - 60, 25, 25);
        //eyes
        fill(255);
        ellipse(gameChar_x - 5, gameChar_y - 65, 5, 5);
        fill(0);
        ellipse(gameChar_x - 5, gameChar_y - 65, 2.5, 2.5);

        //body 
        fill(255, 128, 0);
        rect(gameChar_x - 10, gameChar_y - 50, 20, 25)

        //arms
        fill(0);
        rect(gameChar_x - 5, gameChar_y - 50, 5, 15);
        fill(255, 204, 123)
        ellipse(gameChar_x - 2.5, gameChar_y - 35, 7, 7);

        //legs
        fill(102, 102, 0);
        rect(gameChar_x - 5, gameChar_y - 25, 7.5, 12);


        rect(gameChar_x - 5, gameChar_y - 15, 12, - -5)
        //feet
        fill(0);
        rect(gameChar_x + 7, gameChar_y - 15, 5, 10);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code    
        //head
        fill(255, 204, 123);
        ellipse(gameChar_x, gameChar_y - 60, 25, 25);
        //eyes
        fill(255);
        ellipse(gameChar_x + 5, gameChar_y - 65, 5, 5);
        fill(0);
        ellipse(gameChar_x + 5, gameChar_y - 65, 2.5, 2.5);

        //body 
        fill(255, 128, 0);
        rect(gameChar_x - 10, gameChar_y - 50, 20, 25)

        //arms
        fill(0);
        rect(gameChar_x + 5, gameChar_y - 50, -5, 15);
        fill(255, 204, 123)
        ellipse(gameChar_x + 2.5, gameChar_y - 35, 7, 7);


        //legs
        fill(102, 102, 0);
        rect(gameChar_x + 5, gameChar_y - 25, - 7.5, 12)

        rect(gameChar_x - 7, gameChar_y - 15, 12, - -5)
        //feet
        fill(0);
        rect(gameChar_x - 7, gameChar_y - 15, 5, 10);

	}
	else if(isLeft)
	{
		// add your walking left code
        
        //head
        fill(255, 204, 123);
        ellipse(gameChar_x, gameChar_y - 60, 25, 25);
        //eyes
        fill(255);
        ellipse(gameChar_x - 5, gameChar_y - 65, 5, 5);
        fill(0);
        ellipse(gameChar_x - 5, gameChar_y - 65, 2.5, 2.5);

        //body 
        fill(255, 128, 0);
        rect(gameChar_x - 10, gameChar_y - 50, 20, 25)

        //arms
        fill(0);
        rect(gameChar_x - 5, gameChar_y - 50, 5, 15);
        fill(255, 204, 123)
        ellipse(gameChar_x - 2.5, gameChar_y - 35, 7, 7);

        //legs
        fill(102, 102, 0);
        rect(gameChar_x - 5, gameChar_y - 25, 7.5, 20);
        //feet
        fill(0);
        rect(gameChar_x - 8, gameChar_y - 5, 11, 5);
	}
	else if(isRight)
	{
		// add your walking right code
        
        //head
        fill(255, 204, 123);
        ellipse(gameChar_x, gameChar_y - 60, 25, 25);
        //eyes
        fill(255);
        ellipse(gameChar_x + 5, gameChar_y - 65, 5, 5);
        fill(0);
        ellipse(gameChar_x + 5, gameChar_y - 65, 2.5, 2.5);

        //body 
        fill(255, 128, 0);
        rect(gameChar_x - 10, gameChar_y - 50, 20, 25)

        //arms
        fill(0);
        rect(gameChar_x + 5, gameChar_y - 50, -5, 15);
        fill(255, 204, 123)
        ellipse(gameChar_x + 2.5, gameChar_y - 35, 7, 7);

        //legs
        fill(102, 102, 0);
        rect(gameChar_x + 5, gameChar_y - 25, - 7.5, 20)

        //feet
        fill(0);
        rect(gameChar_x + 8, gameChar_y - 5, - 11, 5)
	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
        
        fill(255, 204, 123);
        ellipse(gameChar_x, gameChar_y - 60, 25, 25);

        //eyes
        fill(255);
        ellipse(gameChar_x - 5, gameChar_y - 65, 5, 5);
        ellipse(gameChar_x + 5, gameChar_y - 65, 5, 5);
        fill(0);
        ellipse(gameChar_x - 5, gameChar_y - 65, 2.5, 2.5);
        ellipse(gameChar_x + 5, gameChar_y - 65, 2.5, 2.5);

        //body 
        fill(255, 128, 0);
        rect(gameChar_x - 10, gameChar_y - 50, 20, 25)

        //arms
        fill(0);
        rect(gameChar_x - 15, gameChar_y - 50, 5, 15);
        rect(gameChar_x + 15, gameChar_y - 50, -5, 15);
        fill(255, 204, 123)
        ellipse(gameChar_x - 12.5, gameChar_y - 35, 7, 7);
        ellipse(gameChar_x + 12.5, gameChar_y - 35, 7, 7);

        //legs
        fill(102, 102, 0);
        rect(gameChar_x - 10, gameChar_y - 25, 7.5, 12);
        rect(gameChar_x + 10, gameChar_y - 25, - 7.5, 12)
        //feet
        fill(0);
        rect(gameChar_x - 13, gameChar_y - 15, 11, 5);
        rect(gameChar_x + 13, gameChar_y - 15, - 11, 5)
	}
	else
	{
		// add your standing front facing code
        
        //head
        fill(255, 204, 123);
        ellipse(gameChar_x, gameChar_y - 60, 25, 25);
        //eyes
        fill(255);
        ellipse(gameChar_x - 5, gameChar_y - 65, 5, 5);
        ellipse(gameChar_x + 5, gameChar_y - 65, 5, 5);
        fill(0);
        ellipse(gameChar_x - 5, gameChar_y - 65, 2.5, 2.5);
        ellipse(gameChar_x + 5, gameChar_y - 65, 2.5, 2.5);

        //body 
        fill(255, 128, 0);
        rect(gameChar_x - 10, gameChar_y - 50, 20, 25)

        //arms
        fill(0);
        rect(gameChar_x - 15, gameChar_y - 50, 5, 15);
        rect(gameChar_x + 15, gameChar_y - 50, -5, 15);
        fill(255, 204, 123)
        ellipse(gameChar_x - 12.5, gameChar_y - 35, 7, 7);
        ellipse(gameChar_x + 12.5, gameChar_y - 35, 7, 7);

        //legs
        fill(102, 102, 0);
        rect(gameChar_x - 10, gameChar_y - 25, 7.5, 20);
        rect(gameChar_x + 10, gameChar_y - 25, - 7.5, 20)

        //feet
        fill(0);
        rect(gameChar_x - 13, gameChar_y - 5, 11, 5);
        rect(gameChar_x + 13, gameChar_y - 5, - 11, 5)
	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    
    if(isLeft == true)
        {
            gameChar_x -= 3;
        }
    
    if(isRight == true)
        {
            gameChar_x += 3;
        }
    

    if(gameChar_y < floorPos_y)
        {
            gameChar_y += 2.5;
            isFalling = true;
        }
    else
        {
            isFalling = false;
        }
    //charachter falling into the canyon
    if(canyon.canx_pos < gameChar_x && gameChar_x < canyon.canx_pos + canyon.width && gameChar_y >= floorPos_y)
        {
            isPlummeting = true;
        }
    if(isPlummeting == true)
        {
            gameChar_y += 25;
        }
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
    
    if(keyCode == 37)
        {
            console.log("left arrow");
            isLeft = true;
        }
    
    else if(keyCode == 39)
        {
            console.log("right arrow");
            isRight = true;
        }
    
    if(keyCode == 32)
        {
            console.log("space bar");
            isFalling = true;
        }
    
    if(keyCode == 32)
        {
            //console.log("space bar);
            gameChar_y -= 100;
        }
}


function keyReleased()
{
	// if statements to control the animation of the character when
    
	// keys are released.
    // console.log("keyReleased: " + key);
    // console.log("keyReleased: " + keyCode);
    
    if(keyCode == 37)
        {
            //console.log("left arrow");
            isLeft = false;
        }
    
    if(keyCode == 39)
        {
            //console.log("right arrow");
            isRight = false;
        }
}