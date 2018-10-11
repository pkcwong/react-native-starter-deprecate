import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { HomePage } from "./home-page/home-page";

export const NavigationStack = createStackNavigator({
	HomePage: {
		screen: HomePage
	}
}, {
	initialRouteName: 'HomePage',
	headerMode: 'none'
});
