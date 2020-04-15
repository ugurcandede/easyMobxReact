import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Comp from './src/comp';

import {Provider} from 'mobx-react';
import AppStore from './src/store';

// eslint-disable-next-line prettier/prettier
const store = window.store = new AppStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Comp />
        </View>
      </Provider>
    );
  }
}
