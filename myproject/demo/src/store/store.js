import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import  rootReducer from './../reducers/index'

const initialState = {}
const minddleware = [thunk]
// applyMiddleWare将所有中间件组成一个数组
// redux-thunk中间件，异步地去执行用户操作action
// Reducer store收到action以后，必须输出一个新的State,这样view才会发生变化，这种State的计算过程就叫做Reducer
// Reducer需要接收两个参数，state,action, reducer的拆分和合并
export const store = createStore(rootReducer, initialState, applyMiddleware(...minddleware))