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
    }
    
    function modelLoaded(){
        console.log("poseNet is initialized")
    }
    
    function getPoses(results){
        if(results.length> 0){console.log(results)}
    }