import whoWonTicTacToe from './whoWonTicTacToe';

const x = 'x';
const o = 'o';
const draw = 'draw';
const unfinished = 'unfinished';
const _ = null;

const boardEmpty = [
	[_, _, _],
	[_, _, _],
	[_, _, _],
];

const boardUnfinished = [
	[x, o, o],
	[o, x, x],
	[_, x, o],
];

const boardO = [
	[o, x, x],
	[x, x, o],
	[o, o, o],
];

const boardX = [
	[o, x, x],
	[x, x, o],
	[o, x, o],
];

const boardDraw = [
	[o, o, x],
	[x, x, o],
	[o, x, x],
];

const boardLargeEmpty = [
	[_, _, _, _, _],
	[_, _, _, _, _],
	[_, _, _, _, _],
	[_, _, _, _, _],
	[_, _, _, _, _],
];

const boardLargeUnfinished = [
	[x, o, x, o, x],
	[o, o, _, o, o],
	[x, _, x, _, x],
	[o, o, _, o, o],
	[x, o, x, o, x],
];

const boardLargeX = [
	[_, _, _, _, _],
	[_, _, _, o, _],
	[_, o, x, x, _],
	[_, x, x, o, _],
	[o, x, _, _, _],
];

const boardLargeO = [
	[_, _, _, _, _],
	[_, _, _, _, _],
	[x, _, x, _, _],
	[o, o, o, _, _],
	[_, x, o, o, x],
];

describe('Tic Tac Win', () => {
	it('Should return who won the game of Tic Tac Toe', () => {
		expect(whoWonTicTacToe(boardEmpty)).toBe(unfinished);
		expect(whoWonTicTacToe(boardUnfinished)).toBe(unfinished);
		expect(whoWonTicTacToe(boardO)).toBe(o);
		expect(whoWonTicTacToe(boardX)).toBe(x);
		expect(whoWonTicTacToe(boardDraw)).toBe(draw);
	});

	it('Should work for larger size boards too', () => {
		//should work for larger size boards too
		expect(whoWonTicTacToe(boardLargeEmpty)).toBe(unfinished);
		expect(whoWonTicTacToe(boardLargeUnfinished)).toBe(unfinished);
		expect(whoWonTicTacToe(boardLargeO)).toBe(o);
		expect(whoWonTicTacToe(boardLargeX)).toBe(x);
	});
});
