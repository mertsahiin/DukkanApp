import React from 'react';
import LottieAnimationView from 'lottie-react-native';
import {View} from 'react-native'

function Loading(){
    return (
             <LottieAnimationView style = {{ flex: 1}}
              source={require ('../../assets/error.json') } autoPlay />
        
        
       
    )
    
}

export default Loading;