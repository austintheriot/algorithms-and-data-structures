/* 

  Implement an algorithm to determine who, if anyone, has won a game of Tic Tac Toe.
  Return 'x', 'o', 'draw', or 'unfinished'

*/

const checkCells = (gameArray, rowI, colI, rowInc, colInc) => {
	const el = gameArray[rowI][colI];
	if (
		gameArray[rowI + rowInc] &&
		gameArray[rowI + rowInc][colI + colInc] === el &&
		gameArray[rowI - rowInc] &&
		gameArray[rowI - rowInc][colI - colInc] === el
	) {
		return el;
	} else return false;
};

const checkForWinner = (gameArray, rowI, colI) =>
	checkCells(gameArray, rowI, colI, 0, 1) || //row
	checkCells(gameArray, rowI, colI, 1, 0) || //column
	checkCells(gameArray, rowI, colI, -1, 1) || //positive diagonal
	checkCells(gameArray, rowI, colI, 1, -1); //negative giaonal

export default function whoWonTicTacToe(gameArray) {
	//check if board has been completed
	let gameIsFinished = true;

	for (let rowI = 0; rowI < gameArray.length; rowI++) {
		const row = gameArray[rowI];
		for (let colI = 0; colI < row.length; colI++) {
			const el = gameArray[rowI][colI];

			//the cell is empty, don't bother checking equality
			if (el == null) {
				gameIsFinished = false;
			}

			//the cell has value, check for winner
			else {
				const winner = checkForWinner(gameArray, rowI, colI);
				if (winner) return winner;
			}
		}
	}

	//no winner found: draw or the game is unfinished
	return gameIsFinished ? 'draw' : 'unfinished';
}
