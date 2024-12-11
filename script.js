let currentPlayer = "X";
const grid = Array(9).fill(null);

function WinnerCheck() {
  if (
    (grid[0] != null && grid[0] == grid[1] && grid[1] == grid[2]) ||
    (grid[3] != null && grid[3] == grid[4] && grid[4] == grid[5]) ||
    (grid[6] != null && grid[6] == grid[7] && grid[7] == grid[8]) ||
    (grid[0] != null && grid[0] == grid[3] && grid[3] == grid[6]) ||
    (grid[1] != null && grid[1] == grid[4] && grid[4] == grid[7]) ||
    (grid[2] != null && grid[2] == grid[5] && grid[5] == grid[8]) ||
    (grid[0] != null && grid[0] == grid[4] && grid[4] == grid[8]) ||
    (grid[2] != null && grid[2] == grid[4] && grid[4] == grid[6])
  ) {
      const el = document.querySelector(".grid");
      el.innerText = `The Winner is ${currentPlayer}`;
      
     return;
    }
    if (!grid.some((el) => el == null)) {
        const el = document.querySelector(".grid");
        el.
           el.innerText = "Its a Draw!🤷🏻‍♀️";
    }
}

function handleClick(el) {
  const id = el.id;
  if (grid[id] != null) {
    return;
  }
  grid[id] = currentPlayer;
  el.innerText = currentPlayer;
  WinnerCheck();
  currentPlayer = currentPlayer == "X" ? 0 : "X";
}
