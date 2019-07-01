import { IWeaponBehavior } from './IWeaponBehavior';

export class BowBehavior implements IWeaponBehavior {
	public getDescription() {
		return 'bow';
	}
	public useWeapon() {
		return 6;
	}
}
