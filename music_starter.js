var leftcircle_posx = 540/2;
var rightcircle_posx = 940/2;
var isLeftcircle = false;
var isRighrcircle = false;
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  console.log(counter);

  let red = color(245, 66, 66);
  let yellow = color(245, 236, 66);

  
  let rectSize = map(drum, 0, 100, 50, width/2);
  let mappedColorLerp = map(vocal, 0, 100, 0, 0.5);
  let colorLerp = lerpColor(red, yellow, mappedColorLerp);

 
  // ellipse(width/2, height/2, rectSize, rectSize);
 
  // ellipse(rightcircle_posx, height/2, rectSize, rectSize);
  // right_circle(rectSize);
  // left_circle(rectSize);
  
   // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3);

   fill(colorLerp);
   for (let i = 0; i < 450; i += 90) {
    ellipse(rightcircle_posx + i, height/2, 50, 50);
  }
}


function right_circle(rectSize){
  //right circle
    if (rightcircle_posx < 450){
        rightcircle_posx++
        ellipse(rightcircle_posx, height/2, rectSize, rectSize);
    }

    if (rightcircle_posx === 450){
        isRighrcircle = true;
    }
    if (isRighrcircle)
    {
      ellipse(rightcircle_posx, height/2, rectSize, rectSize);
    }

}

function left_circle(rectSize){
  if (leftcircle_posx > 90){
    leftcircle_posx--
    ellipse(leftcircle_posx, height/2, rectSize, rectSize);
  }

  if (leftcircle_posx === 90){
    isLeftcircle = true;
  }
  if (isLeftcircle)
  {
    ellipse(leftcircle_posx, height/2, rectSize, rectSize);
  }
}