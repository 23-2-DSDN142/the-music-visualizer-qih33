var leftcircle_posx = 1289/2;
var rightcircle_posx = 1289/2;
var distance = 0;
var isLeftcircle = false;
var isRighrcircle = false;
var circles = [];
var Cat = [];
var firstRun = true;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  load_cat();

  let red = color(245, 66, 66);
  let yellow = color(245, 236, 66);

  
  let rectSize = map(drum, 0, 100, 50, width/2);
  let mappedColorLerp = map(vocal, 0, 100, 0, 0.5);
  let colorLerp = lerpColor(red, yellow, mappedColorLerp);
  fill(colorLerp);
   console.log(song.currentTime())
  ellipse(width/2, height/2, rectSize, rectSize);

 

  load_circles();
  display_circle(words, vocal, drum, bass, other, counter);
 
  if (song.currentTime()> 5.3)
  {
    fill(colorLerp);
    right_circle(rectSize);
    left_circle(rectSize);
  }
 

 
  if (song.currentTime() > 11.3973125 && song.currentTime() < 11.3973125){
    cat_walk();
  }
  
  //  display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3); 
}

function display_circle(words, vocal, drum, bass, other, counter){

  let grey = color(227, 81, 68);
  let gold = color(68, 227, 219);
  let mappedColorLerp = map(drum, 0, 100, 0, 0.5);
  let colorLerp = lerpColor(grey, gold, mappedColorLerp);
  fill(colorLerp);
    circles[0].posX = 30;
    circles[0].posY = 30;
    ellipse(circles[0].posX, circles[0].posY, 50, 50);
    
    circles[1].posX = 30;
    circles[1].posY = 80;
    ellipse(circles[1].posX, circles[1].posY, 50, 50);

    circles[2].posX = 30;
    circles[2].posY = 130;
    ellipse(circles[2].posX, circles[2].posY, 50, 50);

    circles[3].posX = 80;
    circles[3].posY = 30;
    ellipse(circles[3].posX, circles[3].posY, 50, 50);

    circles[4].posX = 1259;
    circles[4].posY = 30;
    ellipse(circles[4].posX, circles[4].posY, 50, 50);
    
    circles[5].posX = 1209;
    circles[5].posY = 30;
    ellipse(circles[5].posX, circles[5].posY, 50, 50);
   
    circles[6].posX = 1259;
    circles[6].posY = 80;
    ellipse(circles[6].posX, circles[6].posY, 50, 50);

    circles[7].posX = 1259;
    circles[7].posY = 130;
    ellipse(circles[7].posX, circles[7].posY, 50, 50);    
}

function load_cat(){
  if (firstRun) {
    rectMode(CENTER);
    Cat.push(loadImage('cat_0.png'));
    Cat.push(loadImage('cat_1.png'));
    Cat.push(loadImage('cat_2.png'));
    Cat.push(loadImage('cat_3.png'));
    firstRun = false;
  }
}

function cat_walk(){

  let catStartX = 0;
  let catEndX = 500;
  let catXLoki = map(song.currentTime(), 0, song.duration(), catStartX ,catEndX);
  // let otherFrame = int(map(other, 1,100, 0,3));
  push();
  scale(1);
  image(Cat[int((song.currentTime()*3)%4)],catXLoki, height/2);
  pop();

}

function load_circles(){
  let posX = 30;
  let posY = 500;
  for (let i = 0; i < 15; i++)
  {
    let myCircle = new Circle(posX, posY, 40);
    myCircle.x = posX;
    myCircle.y = posY;
    circles.push(myCircle);
  }

}


function right_circle(rectSize){
  //right circle
    if (rightcircle_posx < 1144){
        rightcircle_posx++
        ellipse(rightcircle_posx, height/2, rectSize, rectSize);
    }

    if (rightcircle_posx > 1144){
        isRighrcircle = true;
    }
    if (isRighrcircle)
    {
      ellipse(rightcircle_posx, height/2, rectSize/2, rectSize/2);
    }
}

function left_circle(rectSize){
  if (leftcircle_posx > 145){
    leftcircle_posx--
    ellipse(leftcircle_posx, height/2, rectSize, rectSize);
  }

  if (leftcircle_posx < 145){
    isLeftcircle = true;
  }
  if (isLeftcircle)
  {
    ellipse(leftcircle_posx, height/2, rectSize/2, rectSize/2);
  }
}

class Circle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
   
  }
}