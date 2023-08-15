import {StyleSheet,Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor:'#64b5f6',
        flex : 1,
    },
    logo_container :{

    },
    body_container: {
            

    },
    logo:{
        height : Dimensions.get('window').height/3,
        width : Dimensions.get('window').width,
        resizeMode: 'contain',
        backgroundColor: 'white',
        
       
    }
});