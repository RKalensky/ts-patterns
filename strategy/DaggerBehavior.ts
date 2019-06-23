import { IWeaponBehavior } from './IWeaponBehavior';

export class DaggerBehavior implements IWeaponBehavior {
	public getDescription() {
		return 'dagger';
	}
	public useWeapon() {
		return 8;
	}
}
