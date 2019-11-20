import React,{Component} from 'react'

import {render} from 'react-dom'

import App from './App'

import {Provider} from 'react-redux'

import  store from './store'

// import {Map, List,fromJS} from 'immutable'

// import {cloneDeep} from 'lodash'
// import { cloneDeep } from '@babel/types';

// const state = {
//     name:'myun',
//     obj:{
//         y:{
//             x:{
//                 z:4
//             }
//         }
//     },
//     course:['java','H5','iOS']
// }

// const imState = fromJS(state)

// // console.log(imState.get('course').get(0))
// console.log(imState.getIn(['course',1]))
// console.log(imState.toJS().obj.y.x)
// console.log(imState.getIn(['obj','y','x','z']))
// const  newState = cloneDeep(state)
// // const newState = JSON.parse(JSON.stringify(state)) 不能拷贝方法

// console.log(newState===state)

// newState.course.push('react')

// console.log(state,newState)


// const imState = Map({
//     name:'myun',
//     course:['java','H5','iOS']
// })




// console.log(state,imState)

// const newImState  = imState.set('name','雄安')

// console.log(imState.get('name'),newImState.get("name"))

// const list1 = List([1,2])

// const list2 = list1.push(2,3,4)

// console.log(list1.get(4),list2.get(4))



render(
    <Provider store={store}>
       <App/>
    </Provider>,
    document.querySelector("#root")
)