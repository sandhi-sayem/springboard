/** Textual markov chain generator */

class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    const chains = new Map();

    for (let i = 0; i < this.words.length; i++) {
      const word = this.words[i];
      console.log("word: " + word);
      const nextWord = this.words[i + 1] || null;
      console.log("nextWord: " + nextWord);

      if (chains.has(word)) {
        chains.get(word).push(nextWord);
      } else {
        chains.set(word, [nextWord]);
      }

      // console.log(chains);
    }

    this.chains = chains;
  }

  choice(arr) {
    // console.log("arr: " + arr);
    return arr[Math.floor(Math.random() * arr.length)];
  }

  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    const keys = Array.from(this.chains.keys());
    // console.log(keys);
    let key = this.choice(keys);
    // console.log(key);
    const out = [];

    while (out.length < numWords && key !== null) {
      out.push(key);
      key = this.choice(this.chains.get(key));
      // console.log(key);
    }

    return out.join(" ");
  }
}

module.exports = { MarkovMachine };
