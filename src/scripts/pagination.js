export default function createPagination(idString) {
  const paginationList = document.getElementById("pagination");
  const numberOfItems = JSON.parse(localStorage.getItem("videoList")).length;
  const index = idString.substring(idString.length - 2);
  for (let i = 0; i < numberOfItems; i++) {
    const paginationItem = document.createElement("li");
    paginationItem.classList.add("paginationItem");

    if (i === Number(index)) {
      paginationItem.classList.add("active");
    }

    paginationList.appendChild(paginationItem);
  }
}
