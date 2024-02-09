const openModalBtn = document.getElementsByClassName("item");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");
const iframe = document.getElementById("vimeoPlayer");

function handleModalClose() {
  modal.style.display = "none";
  iframe.src = "";
  closeModalBtn.removeEventListener("click", handleModalClose);
  window.removeEventListener("click", handleModalCloseByOverlay);
}
function handleModalCloseByOverlay(e) {
  if (e.target === modal) {
    modal.style.display = "none";
    iframe.src = "";
    window.removeEventListener("click", handleModalCloseByOverlay);
  }
}

export default function handleModal() {
  Array.from(openModalBtn).map((item) => {
    item.addEventListener("click", (e) => {
      const videoUrl = e.currentTarget.dataset.videoUrl;
      iframe.src = videoUrl;
      modal.style.display = "block";
      closeModalBtn.addEventListener("click", handleModalClose);
      window.addEventListener("click", handleModalCloseByOverlay);
    });
  });
}
