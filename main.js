noseX = 0;
noseY = 0;
function preload(){
    clown_nose = loadImage("https://i2.wp.com/freepngimages.com/wp-content/uploads/2019/03/red-nose.png?fit=800%2C800");
}
function setup(){
    Canvas = createCanvas(300,300);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.size(300,300);
    Video.hide();
    poseNet = ml5.poseNet(Video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("poseNet loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
    }
}
function draw(){
    image(Video,0,0,300,300);
    image(clown_nose,noseX,noseY,30,30);
}
function Take_Snapshot(){
    save("Result.png");
}

