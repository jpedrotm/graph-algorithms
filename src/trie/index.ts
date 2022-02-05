export class Trie {
  root: Record<string, any> = {};
  endSymbol: string;

  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }

  add(word: string) {
    let current = this.root;
    for (const letter of word) {
      if (!(letter in current)) {
        current[letter] = {};
      }
      current = current[letter];
    }
    current[this.endSymbol] = word;
  }
}
