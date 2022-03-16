import Race from './Race';

class Elf extends Race {
  protected _maxLifePoints = 99; // Em que mundo Elfo tem mais life que Orc e Dwarf??????
  protected static instanceOfRace = 0;
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    Elf.instanceOfRace += 1;
  }

  static createdRacesInstances(): number {
    return this.instanceOfRace;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  set maxLifePoints(sangue: number) { this._maxLifePoints = sangue; } // quem nunca falou "sangue" ja nasceu velho
}

export default Elf;