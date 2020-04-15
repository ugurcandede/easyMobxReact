import {observable, action} from 'mobx';

class AppStore {
  @observable title = 'Hello World';
  @action titleChange = val => {
    console.log('Değiştirildi=> ', val);
    this.title = val;
  };
}

export default AppStore;
