const game = (() => {
  const createPlayer = (name, marker, turn) => {
    return {name, marker, turn}
  }

  player1 = createPlayer('Player 1', "x", true)
  player2 = createPlayer('Player 2', "o", false)

  const gameBoard = () => {
    var gameBoard = []

    const movement = (e) => {

      if (player1.turn === true && e.target.textContent === "") {
        gameBoard[e.target.id] = player1.marker
        e.target.textContent = player1.marker
        player1.turn = false
      } else if (player1.turn === false && e.target.textContent === "") {
        gameBoard[e.target.id] = player2.marker
        e.target.textContent = player2.marker
        player1.turn = true
      }


      if (gameBoard["button-1"] === "x" && gameBoard["button-2"] === "x" && gameBoard["button-3"] === "x") {
        document.getElementById('winner-element').innerHTML = "Player 1 Wins"
        player1.marker = ""
        player2.marker = ""
      } else if (gameBoard["button-4"] === "x" && gameBoard["button-5"] === "x" && gameBoard["button-6"] === "x") {
        document.getElementById('winner-element').innerHTML = "Player 1 Wins"
        player1.marker = ""
        player2.marker = ""
      } else if (gameBoard["button-7"] === "x" && gameBoard["button-8"] === "x" && gameBoard["button-9"] === "x") {
        document.getElementById('winner-element').innerHTML = "Player 1 Wins"
        player1.marker = ""
        player2.marker = ""
      } else if (gameBoard["button-1"] === "x" && gameBoard["button-4"] === "x" && gameBoard["button-7"] === "x") {
        document.getElementById('winner-element').innerHTML = "Player 1 Wins"
        player1.marker = ""
        player2.marker = ""
      } else if (gameBoard["button-2"] === "x" && gameBoard["button-5"] === "x" && gameBoard["button-8"] === "x") {
        document.getElementById('winner-element').innerHTML = "Player 1 Wins"
        player1.marker = ""
        player2.marker = ""
      } else if (gameBoard["button-3"] === "x" && gameBoard["button-6"] === "x" && gameBoard["button-9"] === "x") {
        document.getElementById('winner-element').innerHTML = "Player 1 Wins"
        player1.marker = ""
        player2.marker = ""
      } else if (gameBoard["button-1"] === "o" && gameBoard["button-2"] === "o" && gameBoard["button-3"] === "o") {
        document.getElementById('winner-element').innerHTML = "Player 2 Wins"
        player1.marker = ""
        player2.marker = ""
      } else if (gameBoard["button-4"] === "o" && gameBoard["button-5"] === "o" && gameBoard["button-6"] === "o") {
        document.getElementById('winner-element').innerHTML = "Player 2 Wins"
        player1.marker = ""
        player2.marker = ""
      } else if (gameBoard["button-7"] === "o" && gameBoard["button-8"] === "o" && gameBoard["button-9"] === "o") {
        document.getElementById('winner-element').innerHTML = "Player 2 Wins"
        player1.marker = ""
        player2.marker = ""
      } else if (gameBoard["button-1"] === "o" && gameBoard["button-4"] === "o" && gameBoard["button-7"] === "o") {
      document.getElementById('winner-element').innerHTML = "Player 2 Wins"
      player1.marker = ""
      player2.marker = ""
      } else if (gameBoard["button-2"] === "o" && gameBoard["button-5"] === "o" && gameBoard["button-8"] === "o") {
        document.getElementById('winner-element').innerHTML = "Player 2 Wins"
        player1.marker = ""
        player2.marker = ""
      } else if (gameBoard["button-3"] === "o" && gameBoard["button-6"] === "o" && gameBoard["button-9"] === "o") {
        document.getElementById('winner-element').innerHTML = "Player 2 Wins"
        player1.marker = ""
        player2.marker = ""
      } else if (gameBoard["button-1"] === "o" && gameBoard["button-5"] === "o" && gameBoard["button-9"] === "o") {
        document.getElementById('winner-element').innerHTML = "Player 2 Wins"
      } else if (gameBoard["button-3"] === "o" && gameBoard["button-5"] === "o" && gameBoard["button-7"] === "o") {
        document.getElementById('winner-element').innerHTML = "Player 2 Wins"
        player1.marker = ""
        player2.marker = ""
      } else if (gameBoard["button-1"] === "x" && gameBoard["button-5"] === "x" && gameBoard["button-9"] === "x") {
      document.getElementById('winner-element').innerHTML = "Player 1 Wins"
      player1.marker = ""
      player2.marker = ""
      } else if (gameBoard["button-3"] === "x" && gameBoard["button-5"] === "x" && gameBoard["button-7"] === "x") {
        document.getElementById('winner-element').innerHTML = "Player 1 Wins"
        player1.marker = ""
        player2.marker = ""
      }
          console.log(gameBoard)
    }

    const board = document.querySelector('.item-board').addEventListener('click', movement)

    const restartGame = () => {
      gameBoard = []
      player1.marker = "x"
      player2.marker = "o"
      document.getElementById("winner-element").innerHTML = ""
      document.getElementById("button-1").innerHTML = ""
      document.getElementById("button-2").innerHTML = ""
      document.getElementById("button-3").innerHTML = ""
      document.getElementById("button-4").innerHTML = ""
      document.getElementById("button-5").innerHTML = ""
      document.getElementById("button-6").innerHTML = ""
      document.getElementById("button-7").innerHTML = ""
      document.getElementById("button-8").innerHTML = ""
      document.getElementById("button-9").innerHTML = ""
      }

    const restart = document.getElementById('restart-button').addEventListener('click', restartGame)

  }

  gameBoard()

})

game()
