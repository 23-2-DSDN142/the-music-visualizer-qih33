var leftcircle_posx = 1289/2;
var rightcircle_posx = 1289/2;
var isLeftcircle = false;
var isRighrcircle = false;
var circles = [];
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  // console.log(counter);

  let red = color(245, 66, 66);
  let yellow = color(245, 236, 66);

  
  let rectSize = map(drum, 0, 100, 50, width/2);
  let mappedColorLerp = map(vocal, 0, 100, 0, 0.5);
  let colorLerp = lerpColor(red, yellow, mappedColorLerp);
  fill(colorLerp);
 
  ellipse(width/2, height/2, rectSize, rectSize);
 
  
  right_circle(rectSize);
  left_circle(rectSize);
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