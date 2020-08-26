/* eslint-disable prettier/prettier */
import React from 'react';

import{
    View,
    Text,
    Button,
} from 'react-native';

class Getsnap extends React.Component {
    constructor()
    {
        super();
        this.state = {
            current: 0
        }
        console.warn('Constructor initialize....');

    }

    componentDidUpdate(props,state,snapshot){
        console.warn("componentDidUpdate", snapshot)

    }
    getSnapshotBeforeUpdate(preProps, preState){
        return preState.current*10;

    }

    render(){

        return(
            <View>
                <Text style={{fontSize:20}}>{this.state.current}</Text>
                <Button
                 title="Counter"
                 onPress={()=>this.setState({current: this.state.current+1})}
                ></Button>
            </View>
        )
    }
}

export default Getsnap;