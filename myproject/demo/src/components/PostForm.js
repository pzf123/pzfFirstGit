import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {createPost} from '../action/postAction'
import './post.css';

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'lily',
            body: 'djasdjfejwrjnjfdasdjrrew'
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({
            [e.targte.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault()
        // 提交
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        // 触发action
        this.props.createPost(post)
        // fetch("https://jsonplaceholder.typicode.com/posts",
        //     {
        //         method: 'POST',
        //         headers:{
        //             'content-type': 'application/json'
        //         },
        //         body: JSON.stringify(post)
        //     }
        // )
        //   .then(res => res.json())
        //   .then(data => {
        //       console.log(data)
        //   })
    }
    render() {
        return (
            <div className="postForm">
                <form onSubmit={this.onSubmit}>
                    <label>name</label><input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
                    <label>body</label><textarea name="body" value={this.state.body} onChange={this.onChange}></textarea>
                    <button type="submit">提交</button>
                </form>
            </div>
        )
    }
}
// 标准化
PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}
export default connect(null, {createPost})(PostForm)