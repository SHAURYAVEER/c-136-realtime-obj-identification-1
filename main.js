status ="";
video ="";

function preload()
{
    video = createVideo('video.mp4');
    video.hide();
}
function setup()
{
    canvas= createCanvas(500,400);
     canvas.center();

}
function draw()
{
    image(video, 0, 0, 500, 400);

}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById(id="status").innerHTML = "Status : Detecting Object";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    video.loop();
    video.speak(1);
    video.volume(0);
}