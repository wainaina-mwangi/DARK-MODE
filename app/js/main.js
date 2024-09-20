const icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "./app/assets/sun.png";
    }else{
        icon.src = "./app/assets/MOON2.png";
    }
}