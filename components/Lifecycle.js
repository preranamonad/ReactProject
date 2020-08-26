/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';

import{
    View,
    Text,
    Button,
} from 'react-native';


import Getderived from './Getderived';
import Getsnap from './Getsnap';
class LifeCycle extends React.Component{

    constructor()
    {
        super()
        this.state = {
            value : '5',
            counter: 0
        }
        console.warn('Constructor initialize....');

    }

    componentDidMount(){
        console.warn('componentDidMount initialize....');
    }
    
    shouldComponentUpdate(nextProps,nextState){
        console.warn('shouldComponentUpdate initialize....', nextState.value);
        console.warn('shouldComponentUpdate1 initialize....', this.state.value);
        // if(this.state.value != nextState.value)
        //     return true
        // else 
        //     return false
        return true
    }

    componentWillUnmount(){
        console.warn('componentWillUnmount initialize....');
    }
    componentDidUpdate(){
        console.warn('componentDidUpdate initialize....');
    }
    componentWillUpdate(nextProps,nextState){
        console.warn('componentWillUpdate initialize....',nextProps,nextState);
    }
    render() {
        console.warn('render initialize......');
        return(
            <View>
                <Text style={{fontSize:30}}>Lifecycle Method</Text>
                <Text style={{fontSize:20}}>{this.state.value}</Text>
                <Button
                    title="click"
                    onPress={()=> this.setState({value : '6'})}>
                </Button>
                <Text style={{fontSize:20}}>{this.state.counter}</Text>
                <Button
                 title="Counter"
                 onPress={()=>this.setState({counter: this.state.counter+1})}
                ></Button>
                <Getderived counter={this.state.counter}/>
                <Getsnap />
            
            </View>
        )
    }
}

export default LifeCycle;