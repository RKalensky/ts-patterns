import { Character } from './Character';
import {IWeaponBehavior} from './IWeaponBehavior';

export class Queen extends Character {
	constructor(weapon: IWeaponBehavior) {
		super(weapon);
	}

	public fight() {
		console.log(`queen fights using ${this.weapon.getDescription()} weapon`);
	}
}