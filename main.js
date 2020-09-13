nothings = "";
paint_my_love = "";
right_here = "";
baby = "";
n = "";
function setup() {
    canvas = createCanvas(450 , 370);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
   image(img , 0 , 0, 450 , 400);
   image(video , 25 , 15, 400 , 320);  
}
function preload() {
   nothings = loadSound("Justin Bieber.mp3") ;
   paint_my_love = loadSound("NOTHING.mp3") ;
   right_here = loadSound("paint_my_love.mp3") ;
   baby = loadSound("right_here.mp3") ;
    img  = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6dkzQYnuyzlbg7vNZdXMDLakdEEnjcuuwBg&usqp=CAU");
}