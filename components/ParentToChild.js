/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';

import {
    View,
    Text,
} from 'react-native';

class ParentToChild extends React.Component{
    render(){
        return(
            <View>
                <Text>
                    Parent To Child
                </Text>
                <Text>{this.props.newtext}</Text>
            </View>
        )
    }
}

export default ParentToChild;