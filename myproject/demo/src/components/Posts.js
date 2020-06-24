import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {fetchPosts} from '../action/postAction'
// es7 react (rcc + tab键)
class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        // 促发action操作
        this.props.fetchPosts()
        // fetch("https://jsonplaceholder.typicode.com/posts")
        //   .then(res => res.json())
        //   .then(data => {
        //       console.log(data)
        //       this.setState({
        //           posts: data
        //       })
        //   })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }
    render() {
        const postItem = this.props.posts.map((post, idx) => (
           <div key={idx}><h3>{post.title}</h3> <p>{post.body}</p></div>
        ))
        return (
            <div className="posts">
                {postItem}
            </div>
        )
    }
}
// 标准化
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}
// 获取reducer里的状态
const mapStateToProps = (state, ownProps) => {
    return {
        // 对应reducers/index文件下的
        posts: state.posts.items,
        newPost: state.posts.item
    }
}
export default connect(mapStateToProps, {fetchPosts}) (Posts)

