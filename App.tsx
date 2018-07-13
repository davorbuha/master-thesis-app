import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, connect } from "react-redux";

import store from "./src/store";
import Router from "./src/router";

class AppComponent extends Component {
	render() {
		return <Router />;
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
