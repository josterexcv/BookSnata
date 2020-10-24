import React, { Components} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, StyleSheet ,Alert} from 'react-native';

const MyHeader = props => {
    return (
        <Header
         leftComponents={<Icon name='bars' type='font-awesome' color='#696969' onPress={() => props.navigator.toggleDrawer()}/>}
         centerComponent={{ text: props.title, style: { color: '#90A5A9', fontSize:20,fontWeight:"bold", } }}
        /> 
    );
};

export default MyHeader;