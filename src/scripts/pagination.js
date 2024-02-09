export default function createPagination(openModal) {
  const paginationList = document.getElementById("pagination");
  const numberOfItems = JSON.parse(localStorage.getItem("videoList")).length;
  for (let i = 0; i < numberOfItems; i++) {
    const paginationItem = document.createElement("li");
    paginationItem.textContent = i + 1;
    paginationItem.addEventListener("click", function () {
      openModal(i);
    });
    paginationList.appendChild(paginationItem);
  }
}
