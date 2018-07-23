import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { GameEventsType } from "../types/gameEvents";
import { connect } from "react-redux";
import { gameEventAction } from "./actions";

interface Props {
	children: JSX.Element;
	dispatch: any;
}
class GameEvents extends Component<Props> {
	public ws: WebSocket | null;
	public response: GameEventsType | null;
	constructor(props: any) {
		super(props);
		this.ws = null;
		this.response = null;
	}
	componentWillMount() {
		this.ws = new WebSocket("ws://localhost:8080/game_events");
		this.ws.onmessage = e => {
			console.log(e.data);
			this.response = GameEventsType.fromJSON(JSON.parse(e.data));
			this.props.dispatch(gameEventAction(this.response));
		};
	}
	public render() {
		return <View style={style.container}>{this.props.children}</View>;
	}
}

const style = StyleSheet.create({
	container: {
		flex: 1
	}
});

export default connect()(GameEvents);
