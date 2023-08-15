import {StyleSheet,Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window')

export default StyleSheet.create({
    container:{flex : 1,},
    image: {
        width: deviceSize.width,
        height: deviceSize.height/3,
        resizeMode: 'contain',
        backgroundColor: 'white',
    },
    title : {fontWeight : 'bold', fontSize: 25,},
    desc : {fontSize : 18,fontStyle: 'italic' , marginVertical:5,},
    price: {textAlign: 'right',fontWeight: 'bold',fontSize: 22},

});