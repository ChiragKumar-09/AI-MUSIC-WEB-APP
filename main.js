nothings = "";
paint_my_love = "";
right_here = "";
baby = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
leftElbowX = 0;
leftElbowY = 0;
rightElbowX = 0;
rightElbowY = 0;

function setup() {
    canvas = createCanvas(450 , 370);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses)
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

function modelLoaded() {
   console.log("poseNet is initialized !")
}
function gotPoses(results) {
        if(results.length > 0) {
            console.log(results);

            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;
            rightWristX = results[0].pose.rightWrist.x;
            rightWristY = results[0].pose.rightWrist.y;
            leftElbowX = results[0].pose.leftElbow.x;
            leftElbowY = results[0].pose.leftElbow.y;
            rightElbowX = results[0].pose.rightElbow.x;
            rightElbowY = results[0].pose.rightElbow.y;

            console.log("leftWristX = "+leftWristX+"leftWristY = "+leftWristY);
            console.log("rightWristX = "+rightWristX+"rightWristY = "+rightWristY);
            console.log("leftElbowX = "+leftElbowX+"leftElbowY = "+leftElbowY);
            console.log("rightElbowX = "+rightElbowX+"rightElbowY = "+rightElbowY);
        }
}