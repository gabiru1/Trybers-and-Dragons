import Archetype, { Mage } from './Archetypes';
import Race, { Elf } from './Races';
import Fighter from './Fighter';
import Energy from './Energy';
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
}

export default Character;