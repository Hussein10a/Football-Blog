document.getElementById("searchInput").addEventListener("keyup", searchPlayers);
document
  .getElementById("fromTeamFilter")
  .addEventListener("change", filterTransfers);
document
  .getElementById("feeFilter")
  .addEventListener("change", filterTransfers);

function searchPlayers() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll(".player-card");

  cards.forEach((card) => {
    const name = card.querySelector("h2").innerText.toLowerCase();
    card.style.display = name.includes(input) ? "block" : "none";
  });
}

function filterTransfers() {
  const team = document.getElementById("fromTeamFilter").value.toLowerCase();
  const feeOption = document.getElementById("feeFilter").value;
  const cards = document.querySelectorAll(".player-card");

  cards.forEach((card) => {
    const fromTeam = card
      .querySelector("p:nth-of-type(1)")
      .innerText.toLowerCase();
    const feeText = card.querySelector("p:nth-of-type(3)").innerText;
    const fee = parseInt(feeText.replace(/[^0-9]/g, ""));

    let show = true;

    if (team && !fromTeam.includes(team)) show = false;
    if (feeOption === "over100" && fee <= 100) show = false;
    if (feeOption === "under100" && fee > 100) show = false;

    card.style.display = show ? "block" : "none";
  });
}
