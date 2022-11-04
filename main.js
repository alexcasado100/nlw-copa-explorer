function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}" title="${player1}"/>
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}" title="${player2}"/>
    </li>
  `
}

let delay = -0.2;
function createCard(date, day, games) {
  delay = delay + 0.2;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `  
}

document.querySelector("#cards").innerHTML =
  createCard("20/11", "Sunday", createGame("qatar", "13:00", "ecuador")) +
  createCard(
    "21/11",
    "Monday",
    createGame("england", "10:00", "iran") +
    createGame("senegal", "13:00", "netherlands") +
    createGame("united_States", "16:00", "wales")
  ) +
  createCard(
    "22/11",
    "Tuesday",
    createGame("argentina", "7:00", "saudi_arabia") +
    createGame("denmark", "10:00", "tunisia") +
    createGame("mexico", "13:00", "poland") +
    createGame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "Wednesday",
    createGame("morocco", "7:00", "croatia") +
    createGame("germany", "10:00", "japan") +
    createGame("spain", "13:00", "costa_rica") +
    createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "24/11",
    "Thursday",
    createGame("switzerland", "7:00", "cameroon") +
    createGame("uruguay", "10:00", "south_korea") +
    createGame("portugal", "13:00", "ghana") +
    createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "25/11",
    "Friday",
    createGame("wales", "7:00", "iran") +
    createGame("qatar", "10:00", "senegal") +
    createGame("netherlands", "13:00", "ecuador") +
    createGame("england", "16:00", "united_states")
  ) +
  createCard(
    "26/11",
    "Saturday",
    createGame("tunisia", "7:00", "australia") +
    createGame("poland", "10:00", "saudi_arabia") +
    createGame("france", "13:00", "denmark") +
    createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "Sunday",
    createGame("japan", "7:00", "costa_rica") +
    createGame("belgium", "10:00", "morocco") +
    createGame("croatia", "13:00", "canada") +
    createGame("spain", "16:00", "germany")
  ) +
  createCard(
    "28/11",
    "Monday",
    createGame("cameroon", "7:00", "serbia") +
    createGame("south_korea", "10:00", "ghana") +
    createGame("brazil", "13:00", "switzerland") +
    createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "Tuesday",
    createGame("ecuador", "12:00", "senegal") +
    createGame("netherlands", "12:00", "qatar") +
    createGame("iran", "16:00", "united_states") +
    createGame("wales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "Wednesday",
    createGame("tunisia", "12:00", "france") +
    createGame("australia", "12:00", "denmark") +
    createGame("poland", "16:00", "argentina") +
    createGame("saudi_arabia", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "Thursday",
    createGame("croatia", "12:00", "belgium") +
    createGame("canada", "12:00", "morocco") +
    createGame("japan", "16:00", "spain") +
    createGame("costa_rica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "Friday",
    createGame("south_korea", "12:00", "portugal") +
    createGame("ghana", "12:00", "uruguay") +
    createGame("serbia", "16:00", "switzerland") +
    createGame("cameroon", "16:00", "brazil")
  ) +
  createCard(
    "03/12",
    "Saturday",
    createGame("", "12:00", "") + createGame("", "16:00", "")
  ) +
  createCard(
    "04/12",
    "Sunday",
    createGame("", "12:00", "") + createGame("", "16:00", "")
  ) +
  createCard(
    "05/12",
    "Monday",
    createGame("", "12:00", "") + createGame("", "16:00", "")
  ) +
  createCard(
    "06/12",
    "Tuesday",
    createGame("", "12:00", "") + createGame("", "16:00", "")
  ) +
  createCard(
    "09/12",
    "Friday",
    createGame("", "12:00", "") + createGame("", "16:00", "")
  ) + 
  createCard(
    "10/12",
    "Saturday",
    createGame("", "12:00", "") + createGame("", "16:00", "")
  ) +
  createCard(
    "13/12",
    "Tuesday",
    createGame("", "16:00", "")
  ) +
  createCard(
    "14/12",
    "Wednesday",
    createGame("", "16:00", "")
  ) +
  createCard(
    "17/12",
    "Saturday",
    createGame("", "12:00", "")
  ) +
  createCard(
    "18/12",
    "Sunday",
    createGame("", "12:00", "")
  )
