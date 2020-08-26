import React from 'react';
import {View, Text, FlatList} from 'react-native';

class FlatListEX extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {name: 'anil', email: 'anil@gmail.com'},
        {name: 'peter', email: 'peter@gmail.com'},
        {name: 'kevil', email: 'kevil@gmail.com'},
        {name: 'jack', email: 'jack@gmail.com'},
        {name: 'victor', email: 'victor@gmail.com'},
        {name: 'anil', email: 'anil@gmail.com'},
        {name: 'peter', email: 'peter@gmail.com'},
      ],
    };
  }
  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}>FlatList</Text>
        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <Text style={{fontSize: 30}}>{item.name}</Text>
          )} />
      </View>
    );
  }
}

export default FlatListEX;
