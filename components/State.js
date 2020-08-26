/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';

import {
    View,
    Text,
    Button,
} from 'react-native';

class State extends React.Component{
    constructor()
    {
       super();
       this.state={
           data:"State example"
       }
    }
test(){
    this.setState({data:"New state data"})
}
    render(){
        return(
            <View>
                <Text style={{fontSize:30}}>
                    {this.state.data}
                </Text>
                <Button title="Update state" onPress={()=>{this.test()}}></Button>
            </View>
        )
    }
}

export default State;