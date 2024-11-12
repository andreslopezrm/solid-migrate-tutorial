export interface NavMenuItem {
	key: number;
	title: string;
	path: string;
}

export interface NavMenu {
	title: string;
	path: string;
	items: NavMenuItem[];
}
