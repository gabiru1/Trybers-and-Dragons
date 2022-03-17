import Archetype from './Archetype';

class Ranger extends Archetype {
  static instanceOfArchetype = 0;
  energyType: 'mana' | 'stamina' = 'stamina';

  constructor(_name: string, _special = 0, _cost = 0) {
    super(_name, _special, _cost);
    Ranger.instanceOfArchetype += 1;
  }

  static createdArchetypeInstances(): number { 
    return this.instanceOfArchetype;
  }
}

export default Ranger;