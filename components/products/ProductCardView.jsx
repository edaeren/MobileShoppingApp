import { TouchableOpacity, Text, View,Image } from 'react-native';
import React from 'react';
import styles from './productCardView.Style';
import {Ionicons} from '@expo/vector-icons';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCardView = () => {
    const navigation=useNavigation();
  return (
   <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails")}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={{uri:"https://img.freepik.com/free-photo/sofa-green-living-room-with-copy-space_43614-905.jpg?w=2000&t=st=1703659273~exp=1703659873~hmac=97e33427fb11198fab737cfbc3136e56cf6e14f9ebd07b2215cc5ca6d53891bc"}}
                    style={styles.image}
                />
            </View>
            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>Product</Text>
                <Text style={styles.information} numberOfLines={1}>Product information</Text>
                <Text style={styles.price}>$2400</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
                <Ionicons name="add-circle" size={35} color={COLORS.primary}/>
            </TouchableOpacity>

        </View>
   </TouchableOpacity>
  )
}

export default ProductCardView

