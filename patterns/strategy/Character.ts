import { IWeaponBehavior } from './IWeaponBehavior';

export abstract class Character {
	protected weapon: IWeaponBehavior;
	constructor(weapon: IWeaponBehavior) {
		this.weapon = weapon;
	}
	public fight() {
		console.log('abstract fight');
	}
	public setWeapon(newWeapon: IWeaponBehavior) {
		this.weapon = newWeapon;
	}
}
