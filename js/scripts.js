const listP = document.querySelector('ul');
const btn = document.getElementById('btnSub');
const inputVal =  document.getElementById('inputVal');
const clrChange = document.querySelector('button');
var i; 



btn.addEventListener("click", function(e) {
   //Test to make sure there are at least 3 characters
    if(inputVal.value.length > 3) {
        let li = document.createElement('li');
        let tempTxt = document.createTextNode(inputVal.value);
        //create the list item
        li.appendChild(tempTxt);

        //Add the updated list item to the unordered list
        listP.appendChild(li);
    }
})

clrChange.addEventListener("click", function () {
    // for(let i = 0; i < 50; i++){
    //     let bckColor = "rgb("+random(255)+","+random(255)+","+random(255)+")"
    //     console.log(bckColor);
    //     document.body.style.backgroundColor = bckColor;
    // }
    i = 1;
    myLoop();
    
})

clrChange.addEventListener("click", function(e){
  console.log(e);
  console.log(e.target);
  console.log(e.type);
  console.log(e);
});

function random(num){
    return Math.floor(Math.random() *(num+1))
}

                 //  set your counter to 1

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    let bckColor = "rgb("+random(255)+","+random(255)+","+random(255)+")"
        console.log(bckColor);
        document.body.style.backgroundColor = bckColor;  //  your code here
    i++;                    //  increment the counter
    if (i <= 5) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 250)
 
}


const spans = document.querySelectorAll('span');
spans.forEach(function(el,index){
  console.log(el);
  el.style.padding="35ps";
  el.style.border = '1px solid black';
  el.style.display= 'block';
})
