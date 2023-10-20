var distance = 0;
var stars = [];
var Cat = [];
var firstRun = true;
var isShanghai = true;
var shanghai;
var isHongKong = true;
var HongKong;
var Sun = [];
var isSun = true;
var Moon = [];
var isMoon =true;


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if (song.currentTime() < 70.69864583333333)
  {
    background('#fefae0');
  }
  else
  {
    background(20);
  }
 
  load_cat();
  cat_walk();
  display_leftlines(other);
  display_rightlines(other);

   
   console.log(song.currentTime())
    if (song.currentTime()< 70.69864583333333){
      load_shanghai();
      display_shanghai();
      
      load_sun();
      if (song.currentTime()> 15.066645833333334)
      {
        display_sun(vocal);
      }
      
    }
   
   if (song.currentTime() > 70.69864583333333){
      load_hongKang();
      display_hongKang();
      load_moon();
      display_moon(vocal);
      load_star();
      display_star(words, vocal, drum, bass, other, counter);
   }

}


function load_hongKang(){
  if (isHongKong){
    rectMode(CENTER);
    HongKong = loadImage('hongkong.png');
    isHongKong = false;
  }  
}

function display_hongKang(){
  scale(2);
  image(HongKong, 150, 30);
}

function load_shanghai(){
  if (isShanghai){
    rectMode(CENTER);
    shanghai = loadImage('shanghai.png');
    isShanghai = false;
  }  
}

function display_shanghai(){
  scale(2.0);
  image(shanghai, 100, 50);
}

function display_leftlines(other)
{
  let lightBlue = color(52, 85, 235);
  let red = color(235, 52, 52);
  let mappedColorLerp = map(other, 0, 100, 0, 0.5);
  let colorLerp = lerpColor(lightBlue, red, mappedColorLerp);
  strokeWeight(9);
  stroke(colorLerp);
  var otherMap = map(other, 1, 100, 5,30);
  var lengthOfLine = 100;
  var lineStart = 60;
  var lineEnd = lineStart + lengthOfLine;
  var lineStep = 400;
  for (var i = 1; i<= otherMap; i++){
    lineStep += 10;
    line(lineStart, lineStep, lineEnd, lineStep);
  }
}

function display_rightlines(other)
{
  let lightBlue = color(52, 85, 235);
  let red = color(235, 52, 52);
  let mappedColorLerp = map(other, 0, 100, 0, 0.5);
  let colorLerp = lerpColor(lightBlue, red, mappedColorLerp);
  strokeWeight(9);
  stroke(colorLerp);
  var otherMap = map(other, 1, 100, 5,30);
  var lengthOfLine = 100;
  var lineStart = 1100;
  var lineEnd = lineStart + lengthOfLine;
  var lineStep = 400;
  for (var i = 1; i<= otherMap; i++){
    lineStep += 10;
    line(lineStart, lineStep, lineEnd, lineStep);
  }
}


function display_star(words, vocal, drum, bass, other, counter){

  let lightBlue = color(151, 185, 240);
  let grey = color(210, 212, 214);
  let rectSize = map(drum, 0, 100, 50, width/2);
  let mappedColorLerp = map(bass, 0, 100, 0, 0.5);
  let colorLerp = lerpColor(lightBlue, grey, mappedColorLerp);
  let newSize = map(vocal, 0, 100, 50, width/2);
  fill(colorLerp);
  noStroke();


    stars[0].posX = 300;
    stars[0].posY = 50;
    scale(0.5);
    ellipse(stars[0].posX, stars[0].posY, rectSize/16, rectSize/16);
    
    stars[1].posX = 750;
    stars[1].posY = 80;
    scale(0.5);
    ellipse(stars[1].posX, stars[1].posY, newSize/16, newSize/16);

    stars[2].posX = 800;
    stars[2].posY = 130;
    ellipse(stars[2].posX, stars[2].posY, rectSize/16, rectSize/16);

    stars[3].posX = 500;
    stars[3].posY = 30;
    ellipse(stars[3].posX, stars[3].posY, newSize/16, newSize/16);

    stars[4].posX = 1000;
    stars[4].posY = 60;
    ellipse(stars[4].posX, stars[4].posY, rectSize/16, rectSize/16);
    
    stars[5].posX = 1209;
    stars[5].posY = 30;
    ellipse(stars[5].posX, stars[5].posY, rectSize/16, rectSize/16);
   
    stars[6].posX = 1259;
    stars[6].posY = 80;
    ellipse(stars[6].posX, stars[6].posY, newSize/16, newSize/16);

    stars[7].posX = 1359;
    stars[7].posY = 130;
    ellipse(stars[7].posX, stars[7].posY, newSize/16, newSize/16);    

    stars[8].posX = 1459;
    stars[8].posY = 180;
    ellipse(stars[8].posX, stars[8].posY, newSize/16, newSize/16);  
    
    stars[9].posX = 700;
    stars[9].posY = 180;
    ellipse(stars[9].posX, stars[9].posY, newSize/16, newSize/16);    

    stars[10].posX = 600;
    stars[10].posY = 180;
    ellipse(stars[10].posX, stars[10].posY, rectSize/16, rectSize/16);    
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
  let catEndX = width;
  let catXLoki = map(song.currentTime(), 0, song.duration(), catStartX ,catEndX);
  // let otherFrame = int(map(other, 1,100, 0,3));
  push();
  scale(1);
  image(Cat[int((song.currentTime()*3)%4)],catXLoki, 650);
  pop();

}

function load_sun(){
  if (isSun) {
    rectMode(CENTER);
    Sun.push(loadImage('sun_0.png'));
    Sun.push(loadImage('sun_1.png'));
    Sun.push(loadImage('sun_2.png'));
    Sun.push(loadImage('sun_3.png'));
    Sun.push(loadImage('sun_4.png'));
    isSun = false;
  }
}

function load_moon(){
  if (isMoon) {
    rectMode(CENTER);
    Moon.push(loadImage('moon_0.png'));
    Moon.push(loadImage('moon_1.png'));
    Moon.push(loadImage('moon_2.png'));
    Moon.push(loadImage('moon_3.png'));
    Moon.push(loadImage('moon_4.png'));
    isMoon = false;
  }
}



function display_sun(vocal){
  var vocalFrame = int(map(vocal, 0, 100, 0, 4));
  push();
  scale(0.4);
  image(Sun[vocalFrame], 100, 50);
  pop();
}

function display_moon(vocal){
  var vocalFrame = int(map(vocal, 0, 100, 0, 4));
  console.log(vocalFrame);

  push();
  scale(0.4);
  image(Moon[vocalFrame], 1100, 50);
  pop();
}


function load_star(){
  let posX = 30;
  let posY = 500;
  for (let i = 0; i < 15; i++)
  {
    let myStar = new Star(posX, posY, 40);
    myStar.x = posX;
    myStar.y = posY;
    stars.push(myStar);
  }

}


class Star {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
   
  }
}