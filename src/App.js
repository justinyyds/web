import React from 'react';
import { Button } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import Mycpt from './components/Mycpt';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import homeStore from './store/homeStore'
const {data} = homeStore
console.log(data);
const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    {/* <Mycpt/> */}
    <div>Mycpt--{data.count}</div>
  </div>
);

export default observer(App);