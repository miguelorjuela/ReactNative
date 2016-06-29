var BookList = require('./BookList');

import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class Featured extends Component {
	render() {
		return (
			<NavigatorIOS
        style = {styles.container}
        initialRoute = {{
          title: 'Featured Books',
          component: BookList
        }}/>
			);
	}
}

module.exports = Featured;
