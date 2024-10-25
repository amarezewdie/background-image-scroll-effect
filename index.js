const bgImg=document.getElementById("bg-img");


bgImg.addEventListener("scroll", () =>{
    updateImage();
})

function updateImage(){
    bgImg.style.opacity=1 - window.pageYOffset / 800;
    
   bgImg.style.backgroundSize=160 - window.pageYOffset + "%"; 
}