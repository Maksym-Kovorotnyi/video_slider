export default function setDataToLocalStorage(fetchFunc, deepCloneFunc) {
  fetchFunc()
    .then((videoData) => {
      let localStorageData = [];
      for (let i = 0; i < 8; i++) {
        const clonedObj = deepCloneFunc(videoData);
        localStorageData.push(clonedObj);
      }
      const serializedData = JSON.stringify(localStorageData);
      localStorage.setItem("videoList", serializedData);
    })
    .catch((error) => console.log(error));
}
