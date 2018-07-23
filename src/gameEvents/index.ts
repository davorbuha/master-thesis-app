import { AnyAction } from "redux";
import { GAME_CREATED, GAME_CLOSED } from "./actions";

export interface GameType {
	id: number;
	name: string;
	adminColor: string;
}

export interface State {
	games: Array<GameType>;
}

const GameEventsReducer = (state: State = { games: [] }, action: AnyAction) => {
	switch (action.type) {
		case GAME_CREATED:
			return {
				games: [
					...state.games,
					{
						id: action.payload.id,
						name: action.payload.name,
						adminColor: action.payload.adminColor
					}
				]
			};
		case GAME_CLOSED:
			return {
				games: state.games.filter(game => game.id !== action.payload.id)
			};

		default:
			return state;
	}
};

export default GameEventsReducer;
