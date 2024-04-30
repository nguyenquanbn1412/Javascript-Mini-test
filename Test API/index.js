document.addEventListener("DOMContentLoaded", function () {
  const listElement = document.getElementById("list");
  const h1Element = document.querySelector("h1");
  const postsButton = document.getElementById("postsBtn");
  const photosButton = document.getElementById("photosBtn");
  const albumsButton = document.getElementById("albumsBtn");

  postsButton.addEventListener("click", () => fetchData("posts"));
  photosButton.addEventListener("click", () => fetchData("photos"));
  albumsButton.addEventListener("click", () => fetchData("albums"));

  fetchData("posts");

  function fetchData(type) {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((data) => {
        updateUI(data, type);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  function updateUI(data, type) {
    listElement.innerHTML = "";
    data.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.title;
      listElement.appendChild(li);
    });

    h1Element.textContent = `Type: ${
      type.charAt(0).toUpperCase() + type.slice(1)
    }`;

    postsButton.classList.remove("active");
    photosButton.classList.remove("active");
    albumsButton.classList.remove("active");

    switch (type) {
      case "posts":
        postsButton.classList.add("active");
        break;
      case "photos":
        photosButton.classList.add("active");
        break;
      case "albums":
        albumsButton.classList.add("active");
        break;
    }
  }
});
