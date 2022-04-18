let gui;
let track1;
let track2;
let track3;
let track4;
let track5;

let play1;
let play2;
let play3;
let play4;
let play5;

let stop1;
let stop2;
let stop3;
let stop4;
let stop5;

let vibes1;
let vibes2;
let vibes3;
let vibes4;
let vibes5;

var tocadiscos;
var song1;
var song2;
var song3;
var song4;
var song5;

let angle = 0;
let amplitude;
let vol;
var pg;

function preload() {
  tocadiscos = loadImage("tocadiscos.jpeg");
  song1 = loadSound("classic.mp3");
  song2 = loadSound("enemy.mp3");
  song3 = loadSound("grace.mp3");
  song4 = loadSound("memories.mp3");
  song5 = loadSound("stereo.mp3");
}

function setup() {
  createCanvas(1920, 1080);
  pg = createGraphics(1920, 1080,WEBGL);
  gui = createGui();

  

  amplitude = new p5.Amplitude();
  amplitude.setInput(song1);
  
  //TogglesTrack

  track1 = createToggle("Track 1", 50, 50, 200, 50);
  track2 = createToggle("Track 2", 50, 110, 200, 50);
  track3 = createToggle("Track 3", 50, 170, 200, 50);
  track4 = createToggle("Track 4", 50, 230, 200, 50);
  track5 = createToggle("Track 5", 50, 290, 200, 50);

  track1.setStyle("fillBgOff", color(2, 229, 250));
  track1.setStyle("fillBgOffHover", color(225, 255, 0));
  track1.setStyle("strokeWeight", 0);
  track2.setStyle("fillBgOff", color(2, 171, 250));
  track2.setStyle("strokeWeight", 0);
  track2.setStyle("fillBgOffHover", color(225, 255, 0));
  track3.setStyle("fillBgOff", color(2, 118, 250));
  track3.setStyle("fillBgOffHover", color(225, 255, 0));
  track3.setStyle("strokeWeight", 0);
  track4.setStyle("fillBgOff", color(2, 72, 250));
  track4.setStyle("fillBgOffHover", color(225, 255, 0));
  track4.setStyle("strokeWeight", 0);
  track5.setStyle("fillBgOff", color(63, 66, 252));
  track5.setStyle("fillBgOffHover", color(225, 255, 0));
  track5.setStyle("strokeWeight", 0);

  // togglesplay
  play1 = createToggle("Play", 1350, 240, 100, 200);
  play2 = createToggle("Play", 1460, 240, 100, 200);
  play3 = createToggle("Play", 1570, 240, 100, 200);
  play4 = createToggle("Play", 1680, 240, 100, 200);
  play5 = createToggle("Play", 1790, 240, 100, 200);

  play1.setStyle("fillBgOff", color(227, 32, 32));
  play1.setStyle("fillBgOffHover", color(225, 255, 0));
  play1.setStyle("strokeWeight", 0);
  play1.setStyle("textSize", 35);
  play2.setStyle("fillBgOff", color(227, 32, 32));
  play2.setStyle("fillBgOffHover", color(225, 255, 0));
  play2.setStyle("strokeWeight", 0);
  play2.setStyle("textSize", 35);
  play3.setStyle("fillBgOff", color(227, 32, 32));
  play3.setStyle("fillBgOffHover", color(225, 255, 0));
  play3.setStyle("strokeWeight", 0);
  play3.setStyle("textSize", 35);
  play4.setStyle("fillBgOff", color(227, 32, 32));
  play4.setStyle("fillBgOffHover", color(225, 255, 0));
  play4.setStyle("strokeWeight", 0);
  play4.setStyle("textSize", 35);
  play5.setStyle("fillBgOff", color(227, 32, 32));
  play5.setStyle("fillBgOffHover", color(225, 255, 0));
  play5.setStyle("strokeWeight", 0);
  play5.setStyle("textSize", 35);

  //togglesstop
  stop1 = createToggle("Stop", 1350, 450, 100, 200);
  stop2 = createToggle("Stop", 1460, 450, 100, 200);
  stop3 = createToggle("Stop", 1570, 450, 100, 200);
  stop4 = createToggle("Stop", 1680, 450, 100, 200);
  stop5 = createToggle("Stop", 1790, 450, 100, 200);

  stop1.setStyle("fillBgOff", color(227, 97, 32));
  stop1.setStyle("fillBgOffHover", color(225, 255, 0));
  stop1.setStyle("strokeWeight", 0);
  stop1.setStyle("textSize", 35);
  stop2.setStyle("fillBgOff", color(227, 97, 32));
  stop2.setStyle("fillBgOffHover", color(225, 255, 0));
  stop2.setStyle("strokeWeight", 0);
  stop2.setStyle("textSize", 35);
  stop3.setStyle("fillBgOff", color(227, 97, 32));
  stop3.setStyle("fillBgOffHover", color(225, 255, 0));
  stop3.setStyle("strokeWeight", 0);
  stop3.setStyle("textSize", 35);
  stop4.setStyle("fillBgOff", color(227, 97, 32));
  stop4.setStyle("fillBgOffHover", color(225, 255, 0));
  stop4.setStyle("strokeWeight", 0);
  stop4.setStyle("textSize", 35);
  stop5.setStyle("fillBgOff", color(227, 97, 32));
  stop5.setStyle("fillBgOffHover", color(225, 255, 0));
  stop5.setStyle("strokeWeight", 0);
  stop5.setStyle("textSize", 35);

  //togglesvibes
  vibes1 = createToggle("Vibes", 1350, 660, 100, 200);
  vibes2 = createToggle("Vibes", 1460, 660, 100, 200);
  vibes3 = createToggle("Vibes", 1570, 660, 100, 200);
  vibes4 = createToggle("Vibes", 1680, 660, 100, 200);
  vibes5 = createToggle("Vibes", 1790, 660, 100, 200);

  vibes1.setStyle("fillBgOff", color(227, 211, 32));
  vibes1.setStyle("fillBgOffHover", color(225, 255, 0));
  vibes1.setStyle("strokeWeight", 0);
  vibes1.setStyle("textSize", 35);
  vibes2.setStyle("fillBgOff", color(227, 211, 32));
  vibes2.setStyle("fillBgOffHover", color(225, 255, 0));
  vibes2.setStyle("strokeWeight", 0);
  vibes2.setStyle("textSize", 35);
  vibes3.setStyle("fillBgOff", color(227, 211, 32));
  vibes3.setStyle("fillBgOffHover", color(225, 255, 0));
  vibes3.setStyle("strokeWeight", 0);
  vibes3.setStyle("textSize", 35);
  vibes4.setStyle("fillBgOff", color(227, 211, 32));
  vibes4.setStyle("fillBgOffHover", color(225, 255, 0));
  vibes4.setStyle("strokeWeight", 0);
  vibes4.setStyle("textSize", 35);
  vibes5.setStyle("fillBgOff", color(227, 211, 32));
  vibes5.setStyle("fillBgOffHover", color(225, 255, 0));
  vibes5.setStyle("strokeWeight", 0);
  vibes5.setStyle("textSize", 35);
}

function draw() {
  background(220);

  textSize(20);
  fill(50, 125, 168);
  text("Click to discover the sound", 25, 30);

  ///////////////////////////////
  //TRACK1
  if (track1.val) {
    image(tocadiscos, 0, 0, width, height);
  }
  if (track1.val) {
    play1.visible = true;
    stop1.visible = true;
    vibes1.visible = true;
  } else {
    play1.visible = false;
    stop1.visible = false;
    vibes1.visible = false;
  }

  if (play1.val) {
    if (song1.isPlaying()) {
    } else {
      song1.play();
    }
  }
  
  if(stop1.val){
    if (song1.isPlaying()) {
      song1.stop();
    } else {
      
    }
  }

  if (vibes1.val) {
    //play1.visible = false;
    //stop1.visible = false;
    background(255, 0, 0);
    pg.background(0);
    vol = amplitude.getLevel();
//1
    
  pg.normalMaterial();
  pg.push()
  pg.translate(0, -300);
  pg.rotateX(sin(angle));
  pg.rotateY(sin(angle));
  pg.rotateZ(sin(angle));
  pg.torus(170 + vol * 200, 20, 6);
  pg.rotateY(angle);
  pg.rotateZ(angle);
  pg.torus(80, 20, 6);
  pg.pop()

  //2
  pg.push()
  pg.translate(-500, 30);
  pg.rotateX(cos(angle));
  pg.rotateY(cos(angle));
  pg.rotateZ(cos(angle));
  pg.torus(250 + vol * 200, 30, 6);
  pg.rotateY(angle);
  pg.rotateZ(angle);
  pg.torus(120, 25, 6);
  pg.pop()

  //3
  pg.push()
  pg.translate(300, 70);
  pg.rotateX(sin(angle));
  pg.rotateY(sin(angle));
  pg.rotateZ(sin(angle));
  pg.torus(100 + vol * 200, 30, 6);
  pg.rotateY(-angle);
  pg.rotateZ(-angle);
  pg.torus(20, 8, 6);
  pg.pop()


  angle += 0.003
//1

  image(pg, 0, 0);
  }

  ///////////////////////////////
  //TRACK2
  if (track2.val) {
    image(tocadiscos, 0, 0, width, height);
  }
  if (track2.val) {
    play2.visible = true;
    stop2.visible = true;
    vibes2.visible = true;
  } else {
    play2.visible = false;
    stop2.visible = false;
    vibes2.visible = false;
  }
  if (play2.val) {
    if (song2.isPlaying()) {
    } else {
      song2.play();
    }
    if (stop2.val) {
      song2.stop();
    }
  }
  if (vibes2.val) {
    play2.visible = false;
    stop2.visible = false;
  }

  ///////////////////////////////
  //TRACK3
  if (track3.val) {
    image(tocadiscos, 0, 0, width, height);
  }
  if (track3.val) {
    play3.visible = true;
    stop3.visible = true;
    vibes3.visible = true;
  } else {
    play3.visible = false;
    stop3.visible = false;
    vibes3.visible = false;
  }
  if (play3.val) {
    if (song3.isPlaying()) {
    } else {
      song3.play();
    }
    if (stop3.val) {
      song3.stop();
    }
  }
  if (vibes3.val) {
    play3.visible = false;
    stop3.visible = false;
  }

  ///////////////////////////////
  //TRACK4
  if (track4.val) {
    image(tocadiscos, 0, 0, width, height);
  }
  if (track4.val) {
    play4.visible = true;
    stop4.visible = true;
    vibes4.visible = true;
  } else {
    play4.visible = false;
    stop4.visible = false;
    vibes4.visible = false;
  }
  if (play4.val) {
    if (song4.isPlaying()) {
    } else {
      song4.play();
    }
    if (stop4.val) {
      song4.stop();
    }
  }

  if (vibes4.val) {
    play4.visible = false;
    stop4.visible = false;
  }
  ///////////////////////////////
  //TRACK5
  if (track5.val) {
    image(tocadiscos, 0, 0, width, height);
  }
  if (track5.val) {
    play5.visible = true;
    stop5.visible = true;
    vibes5.visible = true;
  } else {
    play5.visible = false;
    stop5.visible = false;
    vibes5.visible = false;
  }
  if (play5.val) {
    if (song5.isPlaying()) {
    } else {
      song5.play();
    }
    if (stop5.val) {
      song5.stop();
    }
  }
  if (vibes5.val) {
    play5.visible = false;
    stop5.visible = false;
  }

  drawGui();
}
