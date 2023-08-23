window.onscroll = myScroll;
var counter = 0; // Global Variable
function myScroll(){
   var val = document.getElementById("animate");
   val.innerHTML = 'pageYOffset = ' + window.pageYOffset;
   if(counter == 0){ // if counter is 1, it will not execute
     if(window.pageYOffset > 300){
         
        counter++; // increment the counter by 1, new value = 1
     }
   }
  }