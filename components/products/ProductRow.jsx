import { ActivityIndicator, FlatList, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import ProductCardView from './ProductCardView'
import styles from './productRow.style'
import useFetch from '../../hook/useFetch'

const ProductRow = () => {

const{data,isLoading,error} = useFetch()
const products=[1,2,3,4]

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
      ): error ? (
        <Text style={{fontFamily:"bold", color:"red"}}>EĞER BU YAZI GELİYORSA AWS KAPANMIŞ DEMEKTİR. LÜTFEN taha.adiguzel@ogr.sakarya.edu.tr MAİLİNE VEYA 05428007345 NUMARAYA MESAJ ATABİLİR MİSİNİZ </Text>
      ):(
        <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => <ProductCardView item ={item}/>}
        horizontal
        contentContainerStyle={{columnGap:SIZES.medium}}
        />
      )

      }
    </View>
  );
};

export default ProductRow

