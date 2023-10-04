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

  let catStartX = 0 
  let catEndX = width

  let catXLoki = map(song.currentTime(), 0, song.duration(), catStartX ,catEndX);
  console.log(currentTime)
  let rectSize = map(drum, 0, 100, 50, width/2);
  let mappedColorLerp = map(vocal, 0, 100, 0, 0.5);
  let colorLerp = lerpColor(red, yellow, mappedColorLerp);
  fill(colorLerp);
  
  let vocalFrame = int(map(other, 1,100, 0,3));
  console.log(int(song.currentTime()%4))
   
      push();
      scale(1);
     // image(Cat[vocalFrame],catXLoki, height/2);
      image(Cat[int((song.currentTime()*3)%4)],catXLoki, height/2);
      pop();
    
   
  
 
 
  // ellipse(width/2, height/2, rectSize, rectSize);
 
  
  // right_circle(rectSize);
  // left_circle(rectSize);
  // load_circles();

  // var posX = random(30, 31);
  // var posY = random(500,515);
  // // console.log(posX);
  // ellipse(posX, posY, 40, 40);
  // ellipse(random(100), random(800), 40, 40);
  // ellipse(random(100), random(800), 40, 40);
  // ellipse(random(100), random(800), 40, 40);


  
  //  display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);
  
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

function load_circles(){
 
  for (let i = 0; i < 15; i++)
  {
    let posX = random(30, 100);
    let posY = random(500, 800);
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