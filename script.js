function search() {
    const input = document.getElementById("searchInput").value;
    if (input.trim() === "") {
      alert("Please enter a search term.");
    } else {
      alert(`Searching for "${input}"... (Functionality coming soon!)`);
    }
  }
  