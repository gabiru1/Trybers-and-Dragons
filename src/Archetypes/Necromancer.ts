import Archetype from './Archetype';

class Necromancer extends Archetype {
  static instanceOfArchetype = 0;
  energyType: 'mana' | 'stamina' = 'mana';

  constructor(_name: string, _special = 0, _cost = 0) {
    super(_name, _special, _cost);
    Necromancer.instanceOfArchetype += 1;
  }

  static createdArchetypeInstances(): number { 
    return this.instanceOfArchetype;
  }
}

export default Necromancer;