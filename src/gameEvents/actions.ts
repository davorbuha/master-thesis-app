import { GameEventsType } from "../types/gameEvents";

export const GAME_CREATED = "game.created";
export const GAME_CLOSED = "game.closed";
export const GAME_STARTED = "game.started";

export const gameEventAction = (event: GameEventsType) => {
	switch (event.type) {
		case GAME_CREATED:
			return {
				type: GAME_CREATED,
				payload: event.payload
			};

		case GAME_CLOSED:
			return {
				type: GAME_CLOSED,
				payload: event.payload
			};

		case GAME_STARTED:
			return {
				type: GAME_STARTED,
				payload: event.payload
			};
		default:
			return {};
	}
};
