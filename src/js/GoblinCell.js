/* eslint-disable linebreak-style */
/* eslint-disable no-plusplus */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
export default class GoblinCell {
  constructor() {
    this.fieldSize = 4;
    this.field = document.querySelector('.field');
    this.cells = null;
    this.previousIndex = null;
  }

  createField() {
    for (let i = 0; i < this.fieldSize; i++) {
      const col = document.createElement('div');
      col.classList.add('col');
      this.field.appendChild(col);
      for (let j = 0; j < this.fieldSize; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        col.appendChild(cell);
      }
    }
    this.cells = Array.from(document.querySelectorAll('.cell'));
  }

  flip() {
    if (document.querySelector('.goblin')) {
      document.querySelector('.goblin').remove();
    }
    let randomIndex = Math.floor(Math.random() * this.cells.length);
    while (randomIndex === this.previousIndex) {
      randomIndex = Math.floor(Math.random() * this.cells.length);
    }
    const randomCell = this.cells[randomIndex];
    this.previousIndex = randomIndex;
    const goblin = document.createElement('div');
    goblin.classList.add('goblin');
    randomCell.appendChild(goblin);
  }
}