
var all_button=document.querySelectorAll(".drum");

for(var i=0;i<all_button.length;i++)
{
  all_button[i].addEventListener("click",handle_click);
}

// function get_button()
// {
//   return this.
// }

function handle_click()
{
  button_txt=this.innerHTML;
  animation(button_txt);
  makeSound(button_txt);
}



document.addEventListener("keydown",handle_keypress);


function handle_keypress(event)
{
  animation(event.key);
  makeSound(event.key);
}

function makeSound(key)
{
 switch(key)
  {
    case "w":
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
    break;

    case "a":
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;

    case "s":
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
    break;

    case "d":
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
    break;

    case "j":
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
    break;

    case "k":
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
    break;

    case "l":
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
    break;

    default:console.log(key);
  }



}

function animation(key)
{

var activeButton=document.querySelector("."+key);
activeButton.classList.add("pressed");
setTimeout(function()
{
activeButton.classList.remove("pressed");
},100);

}
