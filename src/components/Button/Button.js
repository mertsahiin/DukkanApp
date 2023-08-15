import React from 'react';
import {View,Text,TextInput,TouchableOpacity} from 'react-native'
import styles from './Button.style'
import { ActivityIndicator } from 'react-native-paper';

const Button = ({text,onPress,loading}) =>{
    return(

        <TouchableOpacity style = {styles.container} onPress={onPress}>
            { loading ? (
            <ActivityIndicator color='white' />
            ) : (
                <Text style = {styles.title} >{text}</Text>
            )}
            
        </TouchableOpacity>
    );
};
export default Button;