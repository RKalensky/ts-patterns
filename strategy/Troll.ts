import { Character } from './Character';
import {IWeaponBehavior} from './IWeaponBehavior';

export class Troll extends Character {
	constructor(weapon: IWeaponBehavior) {
		super(weapon);
	}

	public fight() {
		console.log(`troll fights using ${this.weapon.getDescription()} weapon`);
	}
}
