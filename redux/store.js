import {createStore} from "redux"
import { reducer } from "./reducer.js"
import { INC_COUNT,DEC_COUNT } from "./actionTypes.js";



// const incCountaction  = {type:"INC_COUNT",payload:1}
// const{createStore} = require("redux")


// class Store{
//     constructor(reducer,init){
//         this.reducer = reducer,
//         this.state = init
//     }
//     getState(){
//         return this.state
//     }

//     dispatch(action){
//         this.state = this.reducer(this.state , action)
//     }
// }


// const reducer =(state,{type,payload})=>{
//     switch(type){
//         case "INC_COUNT":
//             return{...state,count:state.count + payload};
//         case "DEC_COUNT":
//             return{...state,count:state.count - payload}
//         case "ADD_TODO":
//             return{...state,todo:[...state.todo,payload]}
//         default:
//             return state
//     }
// }






const init = {count:0 , todo:[]}

export const store = createStore(reducer,init)


// store.dispatch({type:INC_COUNT,payload:1})
// store.dispatch({type:INC_COUNT,payload:1})

// console.log(store.getState())

// store.dispatch({type:DEC_COUNT,payload:1})
// store.dispatch({type:DEC_COUNT,payload:1})
// store.dispatch({type:"ADD_TODO",payload:{title:"learn redux" ,status:false}})
// store.dispatch({type:"ADD_TODO",payload:{title:"learn react redux" ,status:false}})



// console.log(store.getState())
