import React from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class Demo extends React.Component{
      render(){
        return(
          <View>
            <Text style={[styles.heading,styles.common]}>Hello React Native</Text>
            <Text style={[styles.footer,styles.common]}>Android</Text>
          </View>
        )
      }
    }

const styles=StyleSheet.create({

heading:{
    color:'white',
    backgroundColor:'black'
},

common:{
    fontSize: 30,
    textAlign: 'center'
},

footer:{
    color:'black',
    backgroundColor:'orange',
    marginTop: 40  
}

})

export default Demo;