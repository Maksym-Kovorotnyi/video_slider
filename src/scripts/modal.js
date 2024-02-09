const openModalBtn = document.getElementsByClassName("item");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");
const player = document.getElementById("vimeo-player");

function handleModalClose() {
  modal.style.display = "none";
  closeModalBtn.removeEventListener("click", handleModalClose);
  window.removeEventListener("click", handleModalCloseByOverlay);
}
function handleModalCloseByOverlay(e) {
  if (e.target === modal) {
    modal.style.display = "none";
    window.removeEventListener("click", handleModalCloseByOverlay);
  }
}

export default function handleModal() {
  Array.from(openModalBtn).map((item) => {
    item.addEventListener("click", (e) => {
      console.dir(e.currentTarget);
      player.src = e.currentTarget.dataset.videoUrl;
      modal.style.display = "block";
      closeModalBtn.addEventListener("click", handleModalClose);
      window.addEventListener("click", handleModalCloseByOverlay);
    });
  });
}
