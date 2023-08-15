import React from 'react';
import {SafeAreaView,Text,View,Image} from 'react-native'
import useFetch from '../../hooks/useFetch/useFetch';
import styles from './Detail.style'
import config from '../../../config';
import Loading from '../../components/Laoding/Loading';
import Error from '../../components/Error/Error';

const Detail = ({route}) => {
    const {id} = route.params;
    const {loading,data,error} = useFetch(`${config.API_URL}/${id}`);

    if(loading){
        return <Loading/>
    }
    if(error){
        return<Error />
    }

    return(
        <View style={styles.container}>
            <Image source={{uri : data.image}} style={styles.image}/>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.desc}>{data.description}</Text>
            <Text style={styles.price}>{data.price} $</Text>
        </View>
    );
} ;
export default Detail;