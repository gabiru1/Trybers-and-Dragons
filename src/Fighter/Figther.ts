import Energy from '../Energy';

interface Fighter {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
  attack(target: Fighter): void;
  special(target: Fighter): void;
  levelUp(): void;
  receiveDamage(damage: number): void;
}

export default Fighter;