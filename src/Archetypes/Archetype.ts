abstract class Archetype {
  constructor(
    private readonly _name: string,
    private readonly _special: number = 0,
    private readonly _cost: number = 0,
  ) {}

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): 'mana' | 'stamina';
}

export default Archetype;
