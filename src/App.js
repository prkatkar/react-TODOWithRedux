import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Reducer from './reducer/reducer.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import SearchURL from './todoComponents/srchurl';
//import ListURLData from './todoComponents/listData.js'
const store = createStore(Reducer);
class App extends Component {
  // constructor() {
  //   super();
  //   this.state = { searchUrl: "" };
  //   this.getURLdata = this.getURLdata.bind(this);
  //   this.handleUrlChange = this.handleUrlChange.bind(this);
  // }

  // getURLdata(e) {

  //   console.log(this.state.searchUrl);
  //   if (this.state.searchUrl) {

  //     axios.get(this.state.searchUrl)
  //       .then(data =>

  //         data.data.items.map(result => ({
  //           title: result.title,
  //           pubdate: result.pubDate,
  //           description: result.description
  //         }))


  //       ).then(resp => {
  //         const ToDoData = [];
  //         if (resp) {

  //           var obj = { url: this.state.searchUrl, urlName: (this.state.searchUrl.split('=')[1] ? this.state.searchUrl.split('=')[1] : this.state.searchUrl), data: resp };
  //           ToDoData.push(obj);


  //         }
  //         console.log(resp);
  //         console.log(ToDoData);

  //       }

  //       ).catch(error => alert(error));

  //   }
  // }
  // handleUrlChange(event) {
  //   this.setState({ searchUrl: event.target.value });
  // }

  render() {
    return (
      <Provider store={store}>
        <SearchURL />
      </Provider>
    );
  }
}

export default App;
