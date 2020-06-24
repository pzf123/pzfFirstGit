import React, {Component} from 'react';
// 引入组件
// 引入头部组件
import MyHeader from './components/header/header'
import PersonAll from './components/person/personAll'
// 引入外部样式
import './App.css';
// state传参需要用类，属性传常量不需要
// 有状态的组件
// 可以拥有状态，可以拥有生命周期。通过this来接收状态和属性，可以使用this.props.xy & this.state.xy
class App extends Component {
  // constructor 
  constructor(props) {
    // 调用父级的
    super(props)
  }
  // state 用于改变组件内容状态的值（动态）
  // props 用于组件间通信
  state = {
  }
  componentWillMount() {
    // 可以在这里修改状态
  }
  render () {
    return (
      <div className="App">
        {/* this.props */}
        <MyHeader appTitle={this.props.title}/>
        <PersonAll />
      </div>
    );
  }
  
}

export default App;
