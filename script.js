// Lấy phần tử
  const modal = document.getElementById("myModal");
  const img = document.getElementById("myImg");
  const modalImg = document.getElementById("imgFull");
  const span = document.getElementsByClassName("close")[0];

  // Khi nhấn vào ảnh
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }

  // Khi nhấn nút X
  span.onclick = function() {
    modal.style.display = "none";
  }

  // Khi nhấn ra ngoài ảnh
  modal.onclick = function(e) {
    if (e.target === modal) modal.style.display = "none";
  }

  