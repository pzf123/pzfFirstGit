import React, {Component} from 'react';
// 引入组件
// 引入头部组件
import Person from './person'
import Persons from './persons'
// 引入外部样式
import './person.css';
// state传参需要用类，属性传常量不需要
// 有状态的组件
class personAll extends Component {
  state = {
    Persons: [
      {name: 'limin', count: 1},
      {name: 'lily', count: 2},
      {name: 'amy', count: 3},
      {name: 'john', count: 4},
    ],
    color: 'yellow',
    colors: ['color1', 'color2'],
    showDiv: false
  }
  switchState = (name1) => {
    let name = (typeof name1) === 'string' ? name1 : false
    // this指向当前类
    //  报错，不要直接更改
    //  Do not mutate state directly. Use setState()
    //  this.state.Persons[0].name = 'ddd'
    this.setState({
      Persons: [
        {name: name || 'limindd', count: 1},
        {name: name || 'lily', count: 2},
        {name: name || 'amy', count: 3},
        {name: name || 'john', count: 4},
      ],
      color: 'red'
    }) 
  }
  // 
  changeDataHandle = (event) => {
    console.log(event.target.value)
    let name = event.target.value
    // props用于组件间传值
    // state用于改变组件内容状态的值
    this.setState({
      Persons: [
        {name: name || 'limindd', count: 1},
        {name: 'lily', count: 2},
        {name: 'amy', count: 3},
        {name: 'john', count: 4},
      ],
      color: 'red'
    })
  }
  // 切换内容
  switchContent = () => {
    this.setState({
      showDiv: !this.state.showDiv
    })
  }
  // 删除元素
  deletePerson = (index) => {
    console.log(index)
    let persons = [...this.state.Persons]
    persons.splice(index, 1)
    console.log(persons)
    this.setState({
      Persons: persons
    })
  }
  // 动态改值
  nameChange = (event, index) => {
    let persons = [...this.state.Persons]
    persons[index].name = event.target.value
    persons[index].color = this.state.colors[0]
    this.setState({
      Persons: persons
    })
  }
  render () {
    // 使用行间样式
    let style ={
      color: 'red'
    }
    let content = null
    if (this.state.showDiv) {
      content = (<div>第2种</div>)
      style.color = 'yellow'
    }
    return (
      <div className="personAll">
        <button onClick={this.switchState} style={style}>切换state</button>
        {/* 采用箭头函数 */}
        <button onClick={() => this.switchState('箭头函数传属性值')}>箭头函数传属性值</button>
        {/* 采用bind方式传参 */}
        <button onClick={this.switchState.bind(this, 'bind方式传属性值')}>bind方式传属性值</button>
        {/* 两种方式 */}
        {/* <Person name="双标签" count="1" myclick={this.switchState.bind(this, '组件调用函数')} changeData={this.changeDataHandle}>ceshi</Person> */}
        {/* 更常用 */}
        {/* <Person name="pzf" count="3"/>  */}
        {/* <Person name={this.state.Persons[0].name} count={this.state.Persons[0].count} color={this.state.color}/> */}
        {/* 采用三目语句写if */}
        <button onClick={this.switchContent} style={style}>内容更改</button>
        {/* 第一种 */}
        {this.state.showDiv ? <div>第1种</div>: ''}
        {/* 第2种 */}
        {content}
        {/* for循环 */}
        {this.state.Persons.map((person, index) => {
          return <Person key={index} name={person.name} count={person.count} color={person.color} myclick={() => this.deletePerson(index)} changeData={(event) => this.nameChange(event, index)}/>
        })}
        {/* 组件抽离 */}
        <Persons persons={this.state.Persons} myclick={(index) => this.deletePerson(index)} changeData={(event, index) => this.nameChange(event, index)}/>
      </div>
    );
  }
  
}

export default personAll;
