/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React from 'react';

import{
    View,
    Text,
} from 'react-native';

class Getderived extends React.Component {
    constructor()
    {
        super();
        this.state = {
            currentValue: 0
        }
        console.warn('Constructor initialize....');

    }

    static getDerivedStateFromProps(props,state){
        console.warn("hook",props,state);
         return{
           currentValue:props.counter*10 
         };
        
    }
    
    render(){

        return(
            <View>
    <Text>Current value: {this.state.currentValue}</Text>
            </View>
        )
    }
}

export default Getderived;