import Race from './Race';

class Dwarf extends Race {
  protected _maxLifePoints = 80;
  protected static instanceOfRace = 0;
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Dwarf.instanceOfRace += 1;
  }

  static createdRacesInstances(): number {
    return this.instanceOfRace;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  set maxLifePoints(hp: number) { this._maxLifePoints = hp; }
}

export default Dwarf;
