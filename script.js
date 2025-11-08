const modal = document.getElementById("myModal");
const modalImg = document.getElementById("imgFull");

const closeBtn = document.getElementsByClassName("close")[0]; 

const captionText = document.getElementById("caption"); 


const images = document.querySelectorAll(".sum-img");


images.forEach(img => {
  img.addEventListener("click", () => {

    modal.style.display = "block"; 
    

    modalImg.src = img.src; 
 
    if (captionText) {
        captionText.innerHTML = img.alt;
    }
  });
});


if (closeBtn) {
    closeBtn.onclick = () => {
        modal.style.display = "none";
    }
}

if (modal) {
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    }
}
  
