const iframe = document.getElementById("vimeoPlayer");
const paginationList = document.getElementById("pagination");
const videoList = JSON.parse(localStorage.getItem("videoList"));

export default function createPagination(idString) {
  const index = idString.substring(idString.length - 2);
  for (let i = 0; i < videoList.length; i++) {
    const paginationItem = document.createElement("li");
    paginationItem.classList.add("paginationItem");
    paginationItem.id = i;
    if (i === Number(index)) {
      paginationItem.classList.add("active");
    }
    paginationList.appendChild(paginationItem);
  }
  paginationList.addEventListener("click", (e) => {
    const paginationItems = Array.from(e.currentTarget.children);
    paginationItems.map((item) => {
      if (item.className.includes("active")) {
        item.className = "paginationItem";
      } else if (item.id === e.target.id) {
        item.className = "paginationItem active";
      }
    });
    iframe.src = videoList[e.target.id].player_embed_url + "&autoplay=1";
  });
}
