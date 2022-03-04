

objectdetector=""; 
objectX=""; 
objectY=""; 
objectWidth="";
objectLength=""; 
status="";
k=[];
objectNeeded="";
detected="";

function start_identifying() { 
     detector=ml5.objectDetector('cocossd',modelloaded);
     document.getElementById("status").innerHTML="Detecting objects"
     } 

function setup() {
    canvas=createCanvas(400,345);
    canvas.position(100,300);
    video=createCapture(VIDEO);
    video.hide();
      } 

function draw(){ 
     image(video,0,0,400,345); 
     if (status != ""){
         detector.detect(video,gotresults);
         for(i=0;i<k.length;i++){
             detected="no";
            objectNeeded=document.getElementById("object").value;
            console.log(objectNeeded);
            document.getElementById("status").innerHTML="Objects detected."
            if(k[i].label == objectNeeded){
                detected="yes"
                fill("#ff0000");
                stroke("#ff0000");
                text(k[i].label,k[i].x+15,k[i].y+15);
                stroke("#ff0000");
                noFill();
                rect(k[i].x,k[i].y,k[i].width,k[i].height);
            }
         }
     }
    } 


function modelloaded(){
    status=true

    console.log("model has loaded");
  }

  function gotresults(error,results){
if (error){
    console.error(error);
}
else {
    console.log(results);
    k=results;
}
  }