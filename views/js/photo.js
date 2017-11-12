

window.onload = function() {


    (function(){
      var video = document.getElementById('video'),
        canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),

      vendorUrl = window.URL || window.webkitURL;
      navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia||
                            navigator.mozGetUserMedia|| navigator.msGetUserMedia;



      navigator.getMedia({
        video:true,
        audio: false
      },function(stream){

        video.src = vendorUrl.createObjectURL(stream);
        video.play();
      },function(error){

      });

      document.getElementById('capture').addEventListener('click',function(){
             context.drawImage(video,0,0,380,300);
             create_img();

      });

      function create_img(){


        var x = document.createElement("IMG");
        x.src = canvas.toDataURL("image/png"); // this will generate base64 data
        //document.getElementById("img_display").innerHTML = "<img src='"+x.src+"' width='380' height='300' class='img-responsive'>";

        //document.getElementById("img_display").innerHTML = "<input id="image" type="image" src= '"+x.src+"'>"



         //"<img src='"+x.src+"' width='380' height='300' class='img-responsive'>";
        //document.body.appendChild(x);
        console.log(img.src);
        }



    })();





}
