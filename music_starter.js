var leftcircle_posx = 1289/2;
var rightcircle_posx = 1289/2;
var distance = 0;
var isLeftcircle = false;
var isRighrcircle = false;
var circles = [];
var Cat = [];
var firstRun = true;
var isShanghai = true;
var shanghai;
var isHongKong = true;
var HongKong;
var Sun = [];
var isSun = true;


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  load_cat();

 
    cat_walk();
   
   
    if (song.currentTime()< 138.9013125){
      load_shanghai();
      display_shanghai();
      load_sun();
      display_sun(drum);
    }
   
   if (song.currentTime() > 138.9013125){
      load_hongKang();
      display_hongKang();
      load_circles();
      display_circle(words, vocal, drum, bass, other, counter);
   }


  
  //  display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/3); 
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


function display_circle(words, vocal, drum, bass, other, counter){

  let lightBlue = color(151, 185, 240);
  let grey = color(210, 212, 214);
  let rectSize = map(drum, 0, 100, 50, width/2);
  let mappedColorLerp = map(bass, 0, 100, 0, 0.5);
  let colorLerp = lerpColor(lightBlue, grey, mappedColorLerp);
  let newSize = map(vocal, 0, 100, 50, width/2);
  fill(colorLerp);

    circles[0].posX = 300;
    circles[0].posY = 50;
    scale(0.5);
    ellipse(circles[0].posX, circles[0].posY, rectSize/16, rectSize/16);
    
    circles[1].posX = 750;
    circles[1].posY = 80;
    scale(0.5);
    ellipse(circles[1].posX, circles[1].posY, newSize/16, newSize/16);

    circles[2].posX = 800;
    circles[2].posY = 130;
    ellipse(circles[2].posX, circles[2].posY, rectSize/16, rectSize/16);

    circles[3].posX = 500;
    circles[3].posY = 30;
    ellipse(circles[3].posX, circles[3].posY, newSize/16, newSize/16);

    circles[4].posX = 1000;
    circles[4].posY = 60;
    ellipse(circles[4].posX, circles[4].posY, rectSize/16, rectSize/16);
    
    circles[5].posX = 1209;
    circles[5].posY = 30;
    ellipse(circles[5].posX, circles[5].posY, rectSize/16, rectSize/16);
   
    circles[6].posX = 1259;
    circles[6].posY = 80;
    ellipse(circles[6].posX, circles[6].posY, newSize/16, newSize/16);

    circles[7].posX = 1359;
    circles[7].posY = 130;
    ellipse(circles[7].posX, circles[7].posY, newSize/16, newSize/16);    
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
    // Sun.push(loadImage('sun_2.png'));
    isSun = false;
  }
}

function display_sun(vocal){
  var vocalFrame = int(map(vocal, 0, 100, 0,2));
  push();
  scale(0.5);
  image(Sun[vocalFrame], 100, 50);
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


class Circle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
   
  }
}