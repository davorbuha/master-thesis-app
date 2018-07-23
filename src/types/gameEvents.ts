interface Payload {
	id: number;
	name?: string;
	adminColor?: string;
}

export class GameEventsType {
	public static fromJSON(maybe: any): GameEventsType {
		return new GameEventsType(maybe.type, maybe.payload);
	}
	public type: string;
	public payload: Payload;

	constructor(type: string, payload: any) {
		this.type = type;
		if (!payload.name && !payload.adminColor) {
			this.payload = {
				id: payload.id
			};
		} else {
			this.payload = {
				id: payload.id,
				name: payload.name,
				adminColor: payload.admin_color
			};
		}
	}
}
