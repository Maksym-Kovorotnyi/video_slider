const openModalBtn = document.getElementsByClassName("item");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("myModal");
const iframe = document.getElementById("vimeoPlayer");
const paginationList = document.getElementById("pagination");

function handleModalCloseByBtn() {
  modal.style.display = "none";
  iframe.src = "";
  paginationList.innerHTML = "";
  closeModalBtn.removeEventListener("click", handleModalCloseByBtn);
  window.removeEventListener("click", handleModalCloseByOverlay);
}
function handleModalCloseByOverlay(e) {
  if (e.target === modal) {
    modal.style.display = "none";
    iframe.src = "";
    paginationList.innerHTML = "";
    closeModalBtn.removeEventListener("click", handleModalCloseByBtn);
    window.removeEventListener("click", handleModalCloseByOverlay);
  }
}

export default function handleModal(paginationFunc) {
  Array.from(openModalBtn).map((item) => {
    item.addEventListener("click", (e) => {
      paginationFunc(e.currentTarget.id);
      const videoUrl = e.currentTarget.dataset.videoUrl;
      iframe.src = videoUrl + " &autoplay=1";
      modal.style.display = "block";
      closeModalBtn.addEventListener("click", handleModalCloseByBtn);
      window.addEventListener("click", handleModalCloseByOverlay);
    });
  });
}
