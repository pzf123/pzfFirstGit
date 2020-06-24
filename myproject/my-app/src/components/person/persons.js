// 组件需要引入这个
import React, { Component } from 'react';
// 引入组件
import Person from './person'

// 无状态
// 不可以拥有状态，不可以拥有生命周期。通过属性来进行数据传递，可以使用this.props.xy
const persons = (props) => {
    // 组件间传参
return  props.persons.map((person, index) => {
    return <Person key={index} name={person.name} count={person.count} color={person.color} myclick={() => props.myclick(index)} changeData={(event) => props.changeData(event, index)}/>
}) 
}
// 改成有状态
// class persons extends Component {
//     render () {
//         return this.props.persons.map((person, index) => {
//             return <Person key={index} name={person.name} count={person.count} color={person.color} myclick={() => this.props.myclick(index)} changeData={(event) => this.props.changeData(event, index)}/>
//         })  
//     }
// }
export default persons