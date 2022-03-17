type EnergyType = 'mana' | 'stamina';

interface Energy {
  type_: 'mana' | 'stamina';
  amount: number;
}

export { EnergyType };

export default Energy;
