import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, connect } from "react-redux";

import store from "./src/store";
import Router from "./src/router";
import Loading from "./src/components/Loading";
import GameEvents from "./src/gameEvents/GameEvents";

class AppComponent extends Component {
	render() {
		return (
			<Loading>
				<GameEvents>
					<Router />
				</GameEvents>
			</Loading>
		);
	}
}

class ProviderWrapper extends Component<{}> {
	render() {
		return (
			<Provider store={store}>
				<AppComponent />
			</Provider>
		);
	}
}

export default ProviderWrapper;
