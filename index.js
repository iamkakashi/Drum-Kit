for(var i=0;i< document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function(){
    var b=this.innerHTML;
    fun(b);
    makeappearence(b);

  });
}
document.addEventListener("keypress",function(event){
  fun(event.key);
  makeappearence(event.key);
});
function fun(val){
  switch (val){
    case "w":
      var plays =new Audio ("sounds/crash.mp3");
      plays.play();
      break;
    case "a":
        var plays =new Audio ("sounds/kick-bass.mp3");
        plays.play();
        break;
    case "s":
        var plays =new Audio ("sounds/snare.mp3");
        plays.play();
        break;
    case "d":
        var plays =new Audio ("sounds/tom-1.mp3");
        plays.play();
        break;
    case "j":
        var plays =new Audio ("sounds/tom-2.mp3");
        plays.play();
        break;
    case "k":
        var plays =new Audio ("sounds/tom-3.mp3");
        plays.play();
        break;
    case "l":
        var plays =new Audio ("sounds/tom-4.mp3");
        plays.play();
        break;
    default:

  }
}
function makeappearence(val){
  var c=document.querySelector("." + val);
  c.classList.add("pressed");
  setTimeout(function(){
    c.classList.remove("pressed");
  },100);
}
