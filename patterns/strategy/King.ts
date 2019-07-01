import { Character } from './Character';
import {IWeaponBehavior} from './IWeaponBehavior';

export class King extends Character {
	constructor(weapon: IWeaponBehavior) {
		super(weapon);
	}

	public fight() {
		console.log(`king fights using ${this.weapon.getDescription()} weapon`);
	}
}
