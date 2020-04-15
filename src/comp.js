import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';

import {observable, computed, action} from 'mobx';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
class Comp extends Component {
  @observable fireMessage = 'Selam';
  @observable fire = [];

  @computed get shortFire() {
    return this.fireMessage.substring(0, 5);
  }

  @observable temp = 30;
  @computed get ferh() {
    return (this.temp * 9) / 5 + 32;
  }

  @action tempChangeText = val => {
    this.temp = val;
  };
  @action storeChangeText = val => {
    this.props.store.title = val;
  };

  render() {
    return (
      <View>
        <Text>Substring {this.shortFire} </Text>
        <Test fireMessage={this.fireMessage} />
        <TextInput
          placeholder="Text Changer"
          onChangeText={val => (this.fireMessage = val)}
        />

        <Text>Derece: {this.temp} </Text>
        <Text>Fahren: {this.ferh} </Text>
        <TextInput
          placeholder="Temp Changer"
          onChangeText={this.tempChangeText}
        />

        <Text>Store: {this.props.store.title} </Text>
        <TextInput
          placeholder="Burdan Store Değiştir"
          onChangeText={this.storeChangeText}
        />
        <TextInput
          placeholder="Burdan Store Değiştir"
          onChangeText={this.props.store.titleChange}
        />
      </View>
    );
  }
}

const Test = observer(({fireMessage}) => (
  <Text>Orjinal Text: {fireMessage}</Text>
));

export default Comp;
