import { IWeaponBehavior } from './IWeaponBehavior';

export class SwordBehavior implements IWeaponBehavior {
	public getDescription() {
		return 'sword';
	}
	public useWeapon() {
		return 10;
	}
}
