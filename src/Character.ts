import Archetype, { Mage } from './Archetypes';
import Race, { Elf } from './Races';
import Energy from './Energy';
import Fighter from './Fighter';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    this._race = new Elf(name, this.dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._dexterity = this._race.dexterity;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race { return this._race; }

  get archetype(): Archetype { return this._archetype; }
  
  get lifePoints(): number { return this._lifePoints; }

  get strength(): number { return this._strength; }
  
  get dexterity(): number { return this._dexterity; }
  
  get defense(): number { return this._defense; }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  receiveDamage(atackPower: number): number {
    const damage = atackPower - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (this._lifePoints < 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(target: Fighter): void {
    target.receiveDamage(this._strength);
  }

  levelUp() {
    const random = getRandomInt(1, 10);

    this._maxLifePoints += random;

    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
    this._strength += random;
    this._dexterity += random;
    this._defense += random;
    this._energy.amount = 10;
  }

  special(target: Fighter): void {
    console.log(`${this._race.name}, ENRAGE! ROAROAROAORA`);
    
    return target.receiveDamage(target.lifePoints / 3);
  }
}

export default Character;