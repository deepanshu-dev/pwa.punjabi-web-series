const API_KEY = "AIzaSyALr9tR1bj7ZTvD_K_jrWJqAaZiRUNRlSQ";

// Fetch playlists from json file
async function getPlaylists() {
  let playlists = [];
  let response = await fetch("assets/playlists.json");
  playlists = await response.json();
  return playlists;
}

// Function to Display playlists on the page
function displayPlaylists(playlists) {
  const container = document.getElementById("playlistContainer");
  playlists.forEach((playlist) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = playlist.poster;
    img.alt = playlist.title;

    const title = document.createElement("h2");
    title.textContent = playlist.title;

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

  // const playlistDetails = [];
  // for (let playlist of playlists) {
  //   // Extract playlist ID from URL
  //   const playlistId = new URL(playlist.streamURL).searchParams.get("list");
  //   const apiUrl = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${API_KEY}`;

  //   try {
  //     const response = await fetch(apiUrl);
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const data = await response.json();
  //     if (data.items && data.items.length > 0) {
  //       playlistDetails.push(
  //         {
  //           ...data.items[0].snippet,
  //           poster: data.items[0].snippet.thumbnails.maxres.url,
  //           streamURL: `https://www.youtube.com/playlist?list=${data.items[0].id}`
  //         }
  //       );
  //     }
  //   } catch (error) {
  //     console.error(`Error fetching playlist with ID ${playlistId}:`, error);
  //   }
  // }
  // displayPlaylists(playlistDetails);
}

document.addEventListener("DOMContentLoaded", () => {
  // Call the function to fetch and display all playlist details on page load
  fetchAllPlaylistsDetails();
});
