import React from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
} from 'react-native';

import Login from './components/Login';
import Home from './components/Home';
import State from './components/State';
import Demo from './components/Demo';
import LifeCycle from './components/Lifecycle';
import ParentToChild from './components/ParentToChild';

const App = () => {
function send() 
{
  alert("Send a function")
}
const data="Props component example"
  return (
    <ScrollView>
    <Login />
    <Text style={{fontSize:20}}>Function Component</Text>
    <Button title="Send" onPress={send} />
    <Home data={data}></Home>
    <State></State>
    <Demo />
    <LifeCycle />
    <ParentToChild newtext={"Example of passing data from parent to child component"}/>
    </ScrollView>
  );
};

import ChildToParent from './components/ChildToParent'
import CallParent from './components/CallParent';
import FlatListEX from './components/FlatListEX';
import Stacknavigator from './components/Stacknavigator';
class App extends React.Component{
  constructor()
  {
    super()
    this.state={
      unit: 'Prerana'
    }
  }

  changeUnit(item){
    this.setState({unit:item})
  }

  ChildCall(){
    alert("hello, This call from child")
  }
  render(){
    return(
      <View>
        <Text style={{fontSize:30}}>Class Component</Text>
        <Button title="Class Send" onPress={()=>alert("Send a class component")}></Button>  

        <ChildToParent data={
          {unit:this.state.unit, 
          changeUnit:this.changeUnit.bind(this)}}/>  

        <CallParent ChildCall={this.ChildCall.bind(this)} data="Calling a child method from parent" /> 
        <FlatListEX></FlatListEX>
        <Stacknavigator></Stacknavigator>
      </View>
    )
  }
}

export default App;

