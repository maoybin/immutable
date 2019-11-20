import {fromJS} from 'immutable'

const initState = fromJS({
    count:100
})


export  const counter = (state=initState,action) =>{

    console.log(initState.toJS())

    switch (action.type) {
        case 'INCREMENT':
        //    return{
        //        ...state,
        //        count:state.count+1
        //    }

        return state.updateIn(['count'],v=>v+1)

        // return state.setIn(['count'],state.get('count')+1)

        case 'DECREMENT':
            // return{
            //     ...state,
            //     count:state.count-1
            // }
        return state.updateIn(['count'],v=>v-1)
    
        default:
            return state;
    }
}