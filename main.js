//https://teachablemachine.withgoogle.com/models/Pwc42Sm68/
Webcam.set({
    width:350 ,
    height:350 ,
    image_format:"png" ,
    png_quality:90
    });
    var camera=document.getElementById("camera");
    Webcam.attach(camera);
    
    function snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("picture").innerHTML="<img id='captured_img' src='"+data_uri+"'>";
    });
    }
    console.log("ml5 version=",ml5.version);
    var classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Pwc42Sm68/model.json",modelLoaded)
    
    function modelLoaded(){
    console.log("Model loaded")
    }
    
    
    