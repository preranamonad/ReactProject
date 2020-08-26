/* eslint-disable prettier/prettier */
import React from 'react';

import {
    View,
    Text,
    Button,
} from 'react-native';


class CallParent extends React.Component{

    constructor(props){
        super(props)
    }

    componentWillMount()
    {
        
    }
    render(){
        return(
          <View>
            <Text>{this.props.data}</Text>
            <Button onPress={()=>this.props.ChildCall()} title="Click me for alert"></Button>
          </View>
        )
    }
}

export default CallParent;