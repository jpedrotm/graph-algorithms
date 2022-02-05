import { boggleBoard } from './boggle';

/**
 * Given a 2-dimensional matrix of potentially unequal width & height
 * containing letters (the boggle board) and list of words.
 *
 * We need to get an array of all words contained in the boggle board.
 * A word is constructed on the board by connecting adjacent
 * (horizontally, vertically, or diagonally) letters, without
 * using the same letter at a position more than once. While a word
 * can have repeated letters, they must come from a different position
 * on the board.
 */
const board = [
  ['t', 'h', 'i', 's', 'i', 's', 'a'],
  ['s', 'i', 'm', 'p', 'l', 'e', 'x'],
  ['b', 'x', 'x', 'x', 'x', 'e', 'b'],
  ['x', 'o', 'g', 'g', 'l', 'x', 'o'],
  ['x', 'x', 'x', 'D', 'T', 'r', 'a'],
  ['R', 'E', 'P', 'E', 'A', 'd', 'x'],
  ['x', 'x', 'x', 'x', 'x', 'x', 'x'],
  ['N', 'O', 'T', 'R', 'E', '-', 'P'],
  ['x', 'x', 'D', 'E', 'T', 'A', 'E'],
];
const words = [
  'this',
  'is',
  'not',
  'a',
  'simple',
  'boggle',
  'board',
  'test',
  'REPEATED',
  'NOTRE-PEATED',
];

const found: string[] = boggleBoard(board, words);
console.log(found);
