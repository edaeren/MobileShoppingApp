import { ActivityIndicator, FlatList,Text,View } from "react-native";
import React from 'react';
import { COLORS, SIZES } from "../../constants";
import styles from "./productList.style";
//import useFetch from '../../hook/useFetch';

const ProductList=()=>{
    //const {data,isLoading,error}=useFetch(); 
    //if(isLoading){
        return(
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={SIZES.xxLarge} 
                color={COLORS.primary}/>
            </View>
        );
  //  }

    return(
        <View style={styles.container}>

        </View>
    )
}

export default ProductList