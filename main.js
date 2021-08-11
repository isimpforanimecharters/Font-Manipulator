difference=0;
rightWristx=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    
    canvas=createCanvas(450,450);
    canvas.position(760,100);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',getPoses)
    }
    
    function draw(){
        background('#1F51FF')
        document.getElementById("font_size").innerHTML="width and height of a name will be" + difference + "px"; 
        textSize(difference)
        fill('#F0FFFF');
        text('Alaina',50,400);
        
    }
    
    function modelLoaded(){
        console.log("poseNet is initialized")
    }
    
    function getPoses(results){
        if(results.length> 0){console.log(results)}
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX=" + leftWristX + "rightWristX=" + rightWristX + "difference=" + difference )
    }