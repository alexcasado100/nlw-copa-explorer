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
    createGame("England", "10:00", "Iran") +
    createGame("Senegal", "13:00", "Netherlands") +
    createGame("United_States", "16:00", "Wales")
  ) +
  createCard(
    "22/11",
    "Tuesday",
    createGame("Argentina", "7:00", "Saudi_Arabia") +
    createGame("Denmark", "10:00", "Tunisia") +
    createGame("Mexico", "13:00", "Poland") +
    createGame("France", "16:00", "Australia")
  ) +
  createCard(
    "23/11",
    "Wednesday",
    createGame("Morocco", "7:00", "Croatia") +
    createGame("Germany", "10:00", "Japan") +
    createGame("Spain", "13:00", "Costa_Rica") +
    createGame("Belgium", "16:00", "Canada")
  ) +
  createCard(
    "24/11",
    "Thursday",
    createGame("Switzerland", "7:00", "Cameroon") +
    createGame("Uruguay", "10:00", "South_Korea") +
    createGame("Portugal", "13:00", "Ghana") +
    createGame("Brazil", "16:00", "Serbia")
  ) +
  createCard(
    "25/11",
    "Friday",
    createGame("Wales", "7:00", "Iran") +
    createGame("Qatar", "10:00", "Senegal") +
    createGame("Netherlands", "13:00", "Ecuador") +
    createGame("England", "16:00", "United_States")
  ) +
  createCard(
    "26/11",
    "Saturday",
    createGame("Tunisia", "7:00", "Australia") +
    createGame("Poland", "10:00", "Saudi_Arabia") +
    createGame("France", "13:00", "Denmark") +
    createGame("Argentina", "16:00", "Mexico")
  ) +
  createCard(
    "27/11",
    "Sunday",
    createGame("Japan", "7:00", "Costa_Rica") +
    createGame("Belgium", "10:00", "Morocco") +
    createGame("Croatia", "13:00", "Canada") +
    createGame("Spain", "16:00", "Germany")
  ) +
  createCard(
    "28/11",
    "Monday",
    createGame("Cameroon", "7:00", "Serbia") +
    createGame("South_Korea", "10:00", "Ghana") +
    createGame("Brazil", "13:00", "Switzerland") +
    createGame("Portugal", "16:00", "Uruguay")
  ) +
  createCard(
    "29/11",
    "Tuesday",
    createGame("Ecuador", "12:00", "Senegal") +
    createGame("Netherlands", "12:00", "Qatar") +
    createGame("Iran", "16:00", "United_States") +
    createGame("Wales", "16:00", "England")
  ) +
  createCard(
    "30/11",
    "Wednesday",
    createGame("Tunisia", "12:00", "France") +
    createGame("Australia", "12:00", "Denmark") +
    createGame("Poland", "16:00", "Argentina") +
    createGame("Saudi_Arabia", "16:00", "Mexico")
  ) +
  createCard(
    "01/12",
    "Thursday",
    createGame("Croatia", "12:00", "Belgium") +
    createGame("Canada", "12:00", "Morocco") +
    createGame("Japan", "16:00", "Spain") +
    createGame("Costa_Rica", "16:00", "Germany")
  ) +
  createCard(
    "02/12",
    "Friday",
    createGame("South_Korea", "12:00", "Portugal") +
    createGame("Ghana", "12:00", "Uruguay") +
    createGame("Serbia", "16:00", "Switzerland") +
    createGame("Cameroon", "16:00", "Brazil")
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
