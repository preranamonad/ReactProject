/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';

import {
    View,
    Text,
} from 'react-native';

const Home = (props) => {
    return (
        <View>
            <Text style={{fontSize:20}}>
                {props.data}
            </Text>
        </View>
    )
}


export default Home;