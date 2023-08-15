import React from 'react';
import {View,Text,TextInput} from 'react-native'
import styles from './Input.style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Input = ({placeholder,onType,value,iconName,isSecure}) =>{
    return(
        <View style = {styles.container}>
            <TextInput style = {styles.Input} 
            placeholder={placeholder} onChangeText={onType}
             value= {value}
             secureTextEntry ={isSecure}
             />
            <Icon  name ={iconName} size={30}/>
        </View>
    );
};
export default Input;