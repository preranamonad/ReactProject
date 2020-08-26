/* eslint-disable prettier/prettier */
import React from 'react';

import{
    View,
    Text,
    Button,
} from 'react-native';

class ChildToParent extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    {this.props.data.unit}
                </Text>
                <Button title="Click" onPress={()=>this.props.data.changeUnit("Child Unit")}></Button>
            </View>
        )
    }
}

export default ChildToParent;