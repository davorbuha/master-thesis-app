// interface Event {
// 	type: string;
// 	payload: {};
// }

// export class Game {
// 	public static fromJSON(maybe: any): Game {
// 		return new Game(maybe.type, maybe.payload);
// 	}
// 	public type: string;
// 	public payload: Payload;

// 	constructor(type: string, payload: any) {
// 		this.type = type;
// 		if (!payload.name && !payload.adminColor) {
// 			this.payload = {
// 				id: payload.id
// 			};
// 		} else {
// 			this.payload = {
// 				id: payload.id,
// 				name: payload.name,
// 				adminColor: payload.admin_color
// 			};
// 		}
// 	}
// }
