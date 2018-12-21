import React from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { styles } from "./styles";

class Component extends React.Component {

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					{
						this.props.strings['welcome']
					}
				</Text>
			</View>
		);
	}

}

export const HomePage = connect((store) => {
	return {
		strings: store['LocaleReducer']['strings']
	};
})(Component);
