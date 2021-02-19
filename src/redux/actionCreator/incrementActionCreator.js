 import {INCREMENT,DECREASE} from '../actions/actions'

const increase=()=>{
    return {
        type:INCREMENT
    }
}

const decrease=()=>{
    return {
        type:DECREASE
    }
}

export {increase,decrease}
