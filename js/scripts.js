const spans = document.querySelectorAll('span');

//Generate a random number
function random(num){
    return Math.floor(Math.random() *(num+1))
}

//Format RGB color styling for background
function rdmColor(){
  return "rgb("+random(255)+","+random(255)+","+random(255)+")";
}

//Show all of the found spans
spans.forEach(function(el,index){
  console.log(el);
  el.style.padding="35px";
  el.style.border = '1px solid black';
  el.style.display= 'block';
  //Listen for the user to click on the span and change the background color.
  el.addEventListener("click", function(e){
    console.log(e.target);
    console.log(el);
    console.log(this);
    //change background color
    e.target.style.backgroundColor = rdmColor();
  })
})
