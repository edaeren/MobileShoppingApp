import { StyleSheet, Text, View, Image } from 'react-native' 
import React from ' react' 
import { TouchableOpacity } from 'react-native-gesture-handler' 
import styles from '../../screens/cart.style'
const cartTile = ({item, onPress}) =>{
    return(
        <TouchableOpacity style ={styles.container} onPress={onPress}>
        
        </TouchableOpacity>
    )
}

export default cartTile