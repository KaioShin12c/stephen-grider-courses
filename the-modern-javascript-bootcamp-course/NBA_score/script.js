const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

const ulParent = document.createElement("ul");
for (let game of warriorsGames) {
  const { awayTeam, homeTeam } = game;
  const gameLi = document.createElement("li");
  let scoreLine = "";
  const teamNames = `${awayTeam.team} @ ${homeTeam.team}`;

  if (awayTeam.points > homeTeam.points) {
    scoreLine = `<b>${awayTeam.points}</b> - ${homeTeam.points}`;
  } else {
    scoreLine = `${awayTeam.points} - <b>${homeTeam.points}</b>`;
  }

  const warriors = homeTeam.team === "Golden State" ? homeTeam : awayTeam;
  gameLi.classList.add(warriors.isWinner ? "win" : "lose");

  gameLi.innerHTML = `${teamNames} ${scoreLine}`;
  ulParent.appendChild(gameLi);
}

document.body.prepend(ulParent);
