import React ,{useEffect,useState} from 'react';
import {SafeAreaView,Text,FlatList,ActivityIndicator} from 'react-native'
import Config from 'react-native-config'
import config from '../../../config';
import axios from 'axios';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Laoding/Loading';
import LottieView from "lottie-react-native";
import Error from '../../components/Error/Error';


const Products = ({navigation}) => {
    const {loading,data,error} = useFetch(config.API_URL);

    const handleProductSelect = (id) =>{
        navigation.navigate('DetailPage',{id})
    };

    const renderProduct = ({item}) => <ProductCard product = {item} onSelect={() => handleProductSelect(item.id)} />;
  
    if(loading){
        return <Loading/>
    }
    if(error){
        return<Error />
    }

    return(
      
            <FlatList data={data} renderItem={renderProduct} />

    );
} ;
export default Products;