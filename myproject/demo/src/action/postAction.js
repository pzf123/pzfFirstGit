import {FETCH_POSTS, NEW_POSTS} from './type'
// 分发操作
// es5
// export function fetchPosts() {
//     return function(dispatch) {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//           .then(res => res.json())
//           .then(posts => {
//             dispatch({
//                 // 一定要传type
//                 type: FETCH_POSTS,
//                 payload: posts
//             })
//           })
//     }
// }
// es6语法
export const fetchPosts = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
          .then(res => res.json())
          .then(posts => {
            dispatch({
                // 一定要传type
                type: FETCH_POSTS,
                payload: posts
            })
          })
}
export const createPost = postData => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts",
             {
                 method: 'POST',
                 headers:{
                     'content-type': 'application/json'
                 },
                 body: JSON.stringify(postData)
             }
         )
           .then(res => res.json())
           .then(post => {
             console.log(post)
             dispatch({
                 // 一定要传type
                 type: NEW_POSTS,
                 payload: post
             })
           }) 
 }