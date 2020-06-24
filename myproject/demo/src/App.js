import React, {Component} from 'react';
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import {Provider} from 'react-redux'
import {store} from './store/store'
import './App.css';
// import { createStore, applyMiddleware } from 'redux';
// 三个参数,
// const store = createStore(() => {return []}, {}, applyMiddleware())
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}
export default App;
