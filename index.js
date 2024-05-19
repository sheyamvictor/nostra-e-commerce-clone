var sidenav = document.querySelector(".sidenavbar")

function shownavbar(){

    sidenav.style.left = "0"
}

function closenavbar(){
    sidenav.style.left = "-60%"
}
var sliderleftbutton = document.getElementById("slider-left-activate")
var sliderrightbutton = document.getElementById("slider-right-activate")
var sliderimage = document.querySelector(".slider-images")
var slidermargin =0


sliderrightbutton.addEventListener("click",function(){
slidermargin = slidermargin+100

if(slidermargin>200)

{
slidermargin = 0
sliderimage.style.marginleft=0;

}

else{
    sliderimage.style.marginleft="-"+slidermargin+"vw"
}

})

sliderleftbutton.addEventListener("click",

function(){
  if(slidermargin==0)
     {
    
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
     else{

        slidermargin=slidermargin-100
    sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    
    
})



// Select all like buttons using their class
var likeButtons = document.querySelectorAll(".like-button");

// Add click event listener to each like button
likeButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Toggle 'liked' class for visual change
    this.classList.toggle("liked");

    // Update CSS color using class (more flexible)
    if (this.classList.contains("liked")) {
      this.style.color = "red"; // Change to your preferred red shade (e.g., "#FF0000")
    } else {
      this.style.color = null; // Reset color to default (inherited)
    }
  });
});
