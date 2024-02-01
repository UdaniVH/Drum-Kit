var drumButtons= document.querySelectorAll(".drum").length;

for (var x = 0; x < drumButtons; x++) {
      
document.querySelectorAll("button")[x].addEventListener("click", function(){
    //this.style.color= "white";
    var buttonInnerHTML = this.innerHTML;
    playKeys(buttonInnerHTML);
    pressedKey(buttonInnerHTML);
});
}

document.addEventListener("keydown", function(event){
    playKeys(event.key);
    pressedKey(event.key);
});
//function handleClick(){
    
  //  var soundButtonW = new Audio("././crash.mp3");
    // soundButtonW.play();

//}
function playKeys(key){

    //alert(key);
    switch (key) {
        case "w":
            var soundButton = new Audio("./crash.mp3");
            soundButton.play();
            break;
        case "a":
            var soundButton = new Audio("./kick-bass.mp3");
            soundButton.play();
            break;
        case "s":
            var soundButton = new Audio("./snare.mp3");
            soundButton.play();
            break;
        case "d":
            var soundButton = new Audio("./tom-1.mp3");
            soundButton.play();
            break;
        case "j":
            var soundButton = new Audio("./tom-2.mp3");
            soundButton.play();
            break;
        case "k":
            var soundButton = new Audio("./tom-3.mp3");
            soundButton.play();
            break;
        case "l":
            var soundButton = new Audio("./tom-4.mp3");
            soundButton.play();
            break;
        default:
            var soundButton = new Audio("./tom-5.mp3");
            soundButton.play();
            break;
    }
}
function pressedKey(key){
    var buttonActive=document.querySelector("."+key);
    buttonActive.classList.add("pressed");
    setTimeout(function(){
        buttonActive.classList.remove("pressed");
    }, 100);

}
