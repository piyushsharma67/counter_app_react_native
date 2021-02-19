const initialState={
    value:0
}

const reducer=(state=initialState,action)=>{
    switch (action.type){
        case 'INCREMENT':
            return {
                ...state,value:state.value+1
            }
        case 'DECREMENT':
            if (state.value==0){
                return state
            }
            return {
                ...state,value:state.value-1
            }
        default:
            return state
    }
}

export default reducer