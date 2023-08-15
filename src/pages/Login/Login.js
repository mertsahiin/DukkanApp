import React from 'react';
import {SafeAreaView,Text,View,StatusBar,Image,Alert} from 'react-native';
import styles from './Login.style'
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import {Formik} from 'formik'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import config from '../../../config';
import usePost from '../../hooks/usePost/usePost';



const Login = ({navigation}) =>{
    const {data,error,post,loading} = usePost();
    function handleLogin(values){
        post(config.API_AUTH_URL +'/login',values);
    }
    if(error){
        Alert.alert('Dükkan', 'Hata olustu')
    }
    if(data) {
        if(data.status == 'Error'){
            Alert.alert('Dükkan' , 'Kullanıcı yok')
        }
        console.log(data)
    }
    
    return(
        <SafeAreaView style = {styles.container}>
            <View style = {styles.logo_container}>
               <Image style = {styles.logo} source={require('../../assets/login-logo.png')} />
            </View>
            <Formik initialValues={{username: '',password :''}} onSubmit={handleLogin} >{({handleSubmit,handleChange,values}) =>(
               
            <View style = {styles.body_container}>
            <Input placeholder='Kullanıcı adı giriniz...'
             value={values.username}
             onType = {handleChange('username')}
             iconName='account'
             />  
             
               <Input placeholder='Sifre Giriniz..'
                value={values.password}
                onType = {handleChange('password')}
                iconName='key'
                isSecure
                
                />  
               <Button text = 'Giris Yap' onPress={()=> navigation.navigate('ProductsPage')} loading = {loading} />

            </View> )}
            </Formik>
            
            <StatusBar/>
        </SafeAreaView>
    )
}

export default Login;