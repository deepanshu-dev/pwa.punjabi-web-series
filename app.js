async function getPlaylists() {
    let playlists = [];
    let response = await fetch("assets/playlists.json");
    playlists = await response.json();
    return playlists;
}

// Function to generate the UI
async function displayPlaylists() {
  const container = document.getElementById('playlistContainer');
  const playlists = await getPlaylists();
  playlists.forEach(playlist => {
    const card = document.createElement('div');
    card.className = 'card';
    
    const img = document.createElement('img');
    img.src = playlist.poster;
    img.alt = playlist.name;
    
    const title = document.createElement('h2');
    title.textContent = playlist.name;
    
    const link = document.createElement('a');
    link.href = playlist.streamURL;
    link.target = '_blank';
    link.textContent = 'Watch Now';

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(link);
    
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
    // Call the function to display playlists on page load
    displayPlaylists();
});