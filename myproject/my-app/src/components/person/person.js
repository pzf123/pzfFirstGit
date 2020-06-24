// 组件需要引入这个
import React from 'react';
import './person.css';
const person = (props) => {
    // 组件间传参
return <div className="myPerson">
    {/* 定义了onChange， 使用value会报错 */}
        <input type="text" onChange={props.changeData} defaultValue="222"/>
        <p onClick={props.myclick} className={props.color}>大家好。我是{props.name},随机数字{props.count}，内部的内容{props.children},{props.color}</p>
    </div>
}
export default person