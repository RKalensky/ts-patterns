import { IWeaponBehavior } from './IWeaponBehavior';

export class AxeBehavior implements IWeaponBehavior {
	public getDescription() {
		return 'axe';
	}
	public useWeapon() {
		return 9;
	}
}
