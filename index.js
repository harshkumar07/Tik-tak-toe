let currentPlayer = "X";
const winnerDiv = document.getElementById("win");
let arr = Array(9).fill(null);

function checkWinner() {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) { 
    // winnerDiv.innerText = `Winner is ${currentPlayer}`;

    document.write(`Winner is ${currentPlayer}`);
    document.body.style.cssText = `
    background-image: linear-gradient(to right, #e66465, #9198e5);
    display: flex;
    justify-content: center;
    font-size: 30px;
    align-items: center;
    color: white;
    margin: 0;
   `;
   return;
  }

  if (!arr.some((e) => e === null)) {

    // winnerDiv.innerText = `Draw !!`;

    document.write(`Draw !!`);
    document.body.style.cssText = `
    background-image: linear-gradient(to right, #e66465, #9198e5);
    display: flex;
    justify-content: center;
    font-size: 30px;
    align-items: center;
    color: white;
    margin: 0;
`;
    return;
  }
}


function refresh(){
  location.reload();
}


function handelClick(el) {
  const id = Number(el.id);
  if (arr[id] !== null) return;
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

