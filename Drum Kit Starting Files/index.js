for ( var i = 0 ; i < document.querySelectorAll(".drum").length ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click" , function () {
    var btn = this.innerHTML;
    sound(btn);
});
}
document.addEventListener("keypress" , function(event){
    sound(event.key);
});

function sound(key){
    switch (key) {
        case "w":
            var ton1 = new Audio ("sounds/tom-1.mp3");
            ton1.play();
            break;

        case "a":
            var ton2 = new Audio ("sounds/tom-2.mp3");
            ton2.play();
            break; 
            
        case "s":
            var ton3 = new Audio ("sounds/tom-3.mp3");
            ton3.play();
            break;

        case "d":
            var ton4 = new Audio ("sounds/tom-4.mp3");
            ton4.play();
            break;
            
        case "j":
            var crash = new Audio ("sounds/crash.mp3");
            crash.play();
            break;
            
        case "k":
            var kick = new Audio ("sounds/kick-bass.mp3");
            kick.play();
            break;
            
        case "l":
            var snare = new Audio ("sounds/snare.mp3");
            snare.play();
            break;    
            
        default: console.log(btn);
    
    }
}