import React, { Component } from "react";
import { ListView, Text } from "react-native";

class GamesScreen extends Component {
	public ws: WebSocket | null;

	constructor(props: any) {
		super(props);
		this.ws = null;
	}

	componentWillMount() {
		this.ws = new WebSocket("ws://localhost:8080/game_events");

		this.ws.onmessage = e => {
			console.log(e.data);
		};
	}
	public render() {
		return <Text />;
	}
}

export default GamesScreen;
