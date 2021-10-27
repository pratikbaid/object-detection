img="";
objects=[];
status="";
function preload()
{
    img=loadImage('dog_cat.jpg');
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status=object detecting"
}

function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetector.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
        
    }
    else{console.log(results); }
}


function draw(){
    image(img,0,0,640,420);
   if(status!=""){
       for(i=0;i<objects.length;i++)
       {
           document.getElementById("status").innerHTML="objectsdetected";
           fill("#FF0000");
           p=floor(objects[i].confidence*100);
           text(objects[i].label+" "+p+"%"+objects[i].x,objects[i].y);
           noFill();
           stroke("#FF0000");
           rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
       }
   }

}

