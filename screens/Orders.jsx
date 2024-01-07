import { StyleSheet ,View,SafeAreaView,Text} from "react-native";
import {Ionicons,SimpleLineIcons} from "@expo/vector-icons";
import { COLORS } from "../constants";
import React from 'react';
import styles from "./cart.style";

const Orders=({navigation})=>{
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.titleRow}>

            <Ionicons
                onPress={()=> navigation.goBack()}
                name='chevron-back-circle'
                size ={30}
                color ={COLORS.primary}
            />
          
            <Text style={styles.titleText}>Orders</Text>

        </View>
        </SafeAreaView>
    )
}

export default Orders
