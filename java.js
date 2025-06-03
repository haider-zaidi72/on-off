

let img = document.getElementById("greenapple");

document.getElementById("change").addEventListener('click', function(){
    if(img.src.includes("applered.png")){
        img.src = "applegreen.png"
    }else{
        img.src = "applered.png"
    }
})