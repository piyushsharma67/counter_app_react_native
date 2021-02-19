import React from 'react'

import {Text,View,Button }from 'react-native'
import {increase,decrease} from '../redux/actionCreator/incrementActionCreator'
import {connect} from 'react-redux'

const helloScreen=(props)=>{
    console.log(props)
    return (
        <View>
            <Text>current value is{props.amount}</Text>
            <Button
                onPress={()=>props.dispatch(increase())}
                title="increase"
                color="#841584"
                accessibilityLabel="increment"
            />

            <Button
                onPress={()=>props.dispatch(decrease())}
                title="decrease"
                color="#841584"
                accessibilityLabel="increment"
            />
        </View>
    )
}

const mapStateToProps = (state, props) => {
    return { amount: state.value };
  }
export default connect(mapStateToProps)(helloScreen);

