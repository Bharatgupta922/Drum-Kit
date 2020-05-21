for(var i =0 ; i<document.querySelectorAll(".drum").length;i++)
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
  var buttonPressed = this.innerHTML;
makeSound(buttonPressed);
addAnimation(buttonPressed);
removeAnimation(buttonPressed);
});
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  addAnimation(event.key);
  removeAnimation(event.key);
});


function makeSound(character){
  switch (character) {
    case "w":
       var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
      break;
      case "a":
         var tom2 = new Audio('sounds/tom-2.mp3');
          tom2.play();
        break;
        case "s":
           var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
          break;
          case "d":
             var tom4 = new Audio('sounds/tom-4.mp3');
              tom4.play();
            break;
            case "j":
               var share = new Audio('sounds/snare.mp3');
                share.play();
              break;
              case "k":
                 var kick = new Audio('sounds/crash.mp3');
                  kick.play();
                break;
                case "l":
                   var crash = new Audio('sounds/kick-bass.mp3');
                    crash.play();
                  break;
    default:

  }
}
function addAnimation(character){
  var pressedButton = document.querySelector("."+character);
  pressedButton.classList.add("pressed");
}
function removeAnimation(character){
    var pressedButton = document.querySelector("."+character);
    setTimeout(function(character){
       pressedButton.classList.remove("pressed");
    },100);

}
