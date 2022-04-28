array1=[];
status1="";


function setup(){
  canvas=  createCanvas(540,540);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(540,540);
  video.hide();
  ml51=ml5.objectDetector('cocossd',ml5Loaded);
  document.getElementById("h3id").innerHTML="Status: Detecting Objects";

}
function ml5Loaded(){
    console.log("ML5 Is Loaded");
    status1=true;
   
}
function detectImage(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        array1=results;
    }
}
function draw(){
    image(video,0,0,540,540);
    if(status1!=""){
        r=random(255);
        g=random(255);
        b=random(255);
        ml51.detect(video,detectImage);
    for(var i=0;i<array1.length;i++){
        document.getElementById("h3id").innerHTML="Status: Object Detected";
        fill(r,g,b);
        noFill();
        stroke(r,g,b);
        conf=floor(array1[i].confidence*100);
        text(array1[i].label+" "+conf+"%",array1[i].x+15,array1[i].y+15);
        rect(array1[i].x,array1[i].y,array1[i].width,array1[i].height);
    }
}
}