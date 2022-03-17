abstract class Archetype {
  constructor(
    private readonly _name: string,
    private readonly _special: number = 0,
    private readonly _cost: number = 0,
  ) {}

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
}

export default Archetype;
