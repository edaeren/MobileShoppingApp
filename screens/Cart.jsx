import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Ionicons,SimpleLineIcons} from "@expo/vector-icons";
import { COLORS } from "../constants";
import styles from './cart.style';
import fetchCart from '../hook/fetchCart';
import { FlatList } from 'react-native-gesture-handler';

const Cart =({navigation})=>{
    
    const {data,loading,error,refetch} = fetchCart();

    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.titleRow}>

            <Ionicons
                onPress={()=> navigation.goBack()}
                name='chevron-back-circle'
                size ={30}
                color ={COLORS.primary}
            />
          
            <Text style={styles.titleText}>
                Cart
            </Text>

        </View>

        {loading ? (<ActivityIndicator/>):(<FlatList
            data={data}
            keyExtractor={(item) => item._id}
            renderItem={({item}) => <Text>{item.cartItem.title}</Text>}
        />)}

        </SafeAreaView>
    )
}

export default Cart