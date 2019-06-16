var backgroundImg = [url("portfolioImages/background.jpg"),
                     'url("portfolioImages/background night.jpg")'
                    ]; 
var backgroundCount = 0;
var backgroundChangeButton = document.getElementById("change-background");

backgroundChangeButton.onclick = function(){
        document.body.style.backgroundImage = "url('portfolioImages/background.jpg')";
}