import { Trie } from 'src/trie';

export const boggleBoard = (board: string[][], words: string[]): string[] => {
  const trie: Trie = new Trie();
  for (const word of words) {
    trie.add(word);
  }

  const found: Set<string> = new Set();
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const letter = board[i][j];
      if (trie.root[letter]) {
        search(letter, i, j, trie.root, board, new Set(), found);
      }
    }
  }
  return Array.from(found);
};

const search = (
  letter: string,
  i: number,
  j: number,
  trie: Record<string, any>,
  board: string[][],
  visited: Set<string>,
  found: Set<string>,
): void => {
  visited.add(buildKey(i, j));

  for (const child of getChildren(i, j, board)) {
    const nextLetter = board[child.i][child.j];
    const subTrie = trie[letter];

    if (subTrie['*'] && !found.has(subTrie['*'])) {
      found.add(subTrie['*']);
    } else if (
      subTrie[nextLetter] &&
      !visited.has(buildKey(child.i, child.j))
    ) {
      search(nextLetter, child.i, child.j, subTrie, board, visited, found);
    }
  }

  visited.delete(buildKey(i, j));
};

const buildKey = (i: number, j: number): string => `${i}_${j}`;

const getChildren = (
  i: number,
  j: number,
  board: string[][],
): { i: number; j: number }[] => {
  const children: { i: number; j: number }[] = [];

  if (i - 1 >= 0) {
    children.push({ i: i - 1, j });
    if (j - 1 >= 0) {
      children.push({ i: i - 1, j: j - 1 });
    }

    if (j + 1 < board[i - 1].length) {
      children.push({ i: i - 1, j: j + 1 });
    }
  }

  if (j - 1 >= 0) {
    children.push({ i, j: j - 1 });
    if (i + 1 < board.length) {
      children.push({ i: i + 1, j: j - 1 });
    }
  }

  if (i + 1 < board.length) {
    children.push({ i: i + 1, j });
    if (j + 1 < board[i + 1].length) {
      children.push({ i: i + 1, j: j + 1 });
    }

    if (j + 1 < board[i + 1].length) {
      children.push({ i, j: j + 1 });
    }
  }

  return children;
};
