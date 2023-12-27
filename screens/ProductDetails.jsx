import { Image, Text, View ,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Ionicons,SimpleLineIcons,MaterialCommunityIcons,Fontisto} from '@expo/vector-icons';
import styles from './productDetails.style'
import { COLORS, SIZES } from '../constants';

const ProductDetails = ({navigation}) => {
  const [count,setCount]= useState(1)

  const increment = () => {
      setCount(count+1)
  }

  const decrement = () => {
    if(count>1){
      setCount(count-1)
    }
}

  
  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={()=>(navigation.goBack())}>
          <Ionicons name='chevron-back-circle' size={30}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{}}>
          <Ionicons name='heart' size={30} color={COLORS.primary}/>
        </TouchableOpacity>

      </View>

      <Image
       source={{uri:"https://img.freepik.com/free-photo/sofa-green-living-room-with-copy-space_43614-905.jpg?w=2000&t=st=1703659273~exp=1703659873~hmac=97e33427fb11198fab737cfbc3136e56cf6e14f9ebd07b2215cc5ca6d53891bc"}}
       style={styles.image}
       />
       <View style={styles.details}>
          <View style={styles.titleRow}>
              <Text style={styles.title}>Product</Text>
              <View style={styles.priceWrapper}>
              <Text style={styles.price}>$660.88</Text>
              </View>
          </View>

          <View style={styles.ratingRow}> 
              <View style={styles.rating}>
                  {[1,2,3,4,5].map((index)=>(
                    <Ionicons
                    key={index}
                    name='star'
                    size={24}
                    color="gold"/>
                  ))}
                  <Text style={styles.ratingText}> (4.9)</Text>
              </View>

              <View style={styles.rating}>
                    <TouchableOpacity onPress={()=>increment()}>
                        <SimpleLineIcons
                        name='plus' size={20}/>
                    </TouchableOpacity>
                  <Text style={styles.ratingText}> {count} </Text>

                  <TouchableOpacity onPress={()=>decrement()}>
                        <SimpleLineIcons
                        name='minus' size={20}/>
                    </TouchableOpacity>
              </View>
          </View>

          <View style={styles.descriptionWrapper}>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.descText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>

          <View style={{marginBottom:SIZES.small}}>
            <View style={styles.location}>
              <View style={{flexDirection:"row"}}>
                <Ionicons name='location-outline' size={20}/>
                <Text>  Dallas </Text>
              </View>

              <View style={styles.location}>
              <View style={{flexDirection:"row"}}>
                <MaterialCommunityIcons name='truck-delivery-outline' size={20}/>
                <Text>  Free Delivery </Text>
              </View>
            </View>
            </View>

            <View style={styles.cartRow}>
                <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
                    <Text style={styles.cartTitle}>BUY NOW</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
                    <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite}/>
                </TouchableOpacity>
            </View>
            
          </View>

       </View>
    </View>
  )
}

export default ProductDetails