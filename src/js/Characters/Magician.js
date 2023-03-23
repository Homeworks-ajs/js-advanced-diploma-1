import Character from '../Character';

export default class Magician extends Character {
  constructor(name) {
    super(name, 'magician');
    this.attack = 10;
    this.defence = 40;
    this.attackRange = 4;
    this.moveRange = 1;
  }
}
