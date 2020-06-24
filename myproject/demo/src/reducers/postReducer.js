// reducer的作用： 返回新的状态
import {FETCH_POSTS, NEW_POSTS} from '../action/type' 
let initialState = {
    items: [],
    item: {}
}
export default function (state = initialState, action) {
    switch (action.type) {
        // 分别处理
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POSTS:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}