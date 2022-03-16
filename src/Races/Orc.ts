import Race from './Race';

class Orc extends Race {
  protected _maxLifePoints = 74;
  protected static instanceOfRace = 0;
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Orc.instanceOfRace += 1;
  }

  static createdRacesInstances(): number {
    return this.instanceOfRace;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  set maxLifePoints(sangue: number) { this._maxLifePoints = sangue; }
}

export default Orc;