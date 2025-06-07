// Fetch playlists from json file
async function getPlaylists() {
  let playlists = [];
  let response = await fetch("assets/playlists.json");
  playlists = await response.json();
  return playlists;
}

// Function to Display playlists on the page
function displayPlaylists(playlists) {
  const container = document.getElementById("app");
  playlists.sort((a,b) => b.year - a.year).forEach((playlist) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = playlist.poster;
    img.alt = playlist.title;

    const title = document.createElement("h2");
    title.textContent = `${playlist.title} - ${playlist.year}`;

    const link = document.createElement("a");
    link.href = playlist.streamURL;
    link.target = "_blank";
    link.textContent = "Watch Now";

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(link);

    container.appendChild(card);
  });
}

// Fetch details of all playlists
async function fetchAllPlaylistsDetails() {
  const playlists = await getPlaylists();
  displayPlaylists(playlists);
}

document.addEventListener("DOMContentLoaded", () => {
  // Call the function to fetch and display all playlist details on page load
  fetchAllPlaylistsDetails();
});

// Register service worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js")
    .then(() => console.log("Service Worker Registered"));
}
