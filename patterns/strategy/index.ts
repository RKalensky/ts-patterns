import { Character } from './Character';

import { King } from './King';
import { Queen } from './Queen';
import { Troll } from './Troll';

import { AxeBehavior } from './AxeBehavior';
import { BowBehavior } from './BowBehavior';
import { DaggerBehavior } from './DaggerBehavior';
import { SwordBehavior } from './SwordBehavior';

console.log('------------- strategy battlefield -------------\n');

const king: Character = new King(new SwordBehavior());
const queen: Character = new Queen(new DaggerBehavior());
const troll: Character = new Troll(new AxeBehavior());
console.log(king.fight());
console.log(queen.fight());
console.log(troll.fight());

console.log('--------------------------------------------------');

king.setWeapon(new AxeBehavior());
queen.setWeapon(new BowBehavior());
console.log(king.fight());
console.log(queen.fight());
console.log(troll.fight());
