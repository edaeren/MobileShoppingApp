import {View,Text,Image,StyleSheet, Alert,TouchableOpacity} from 'react-native';
import React, {useState,useEffect} from 'react';
import styles from './profile.style';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from "../constants";
import {AntDesign, MaterialCommunityIcons,SimpleLineIcons} from "@expo/vector-icons";


const Profile =({navigation})=>{
    
    const[userData,setUserData]=useState(null)

    //burayi true yaparsak kullanici adi ve maili gozukecek
    const[userLogin,setUserLogin]=useState(false) 
   
    const logout=()=>{
        Alert.alert(
            "Logout",
            "Are you sure you want to logout?",
            [
                {
                    text:"Cancel", onPress:()=>console.log("cancel pressed")
                },
                {
                    text:"Continue", onPress:()=>console.log("logout pressed")
                },
                {defaultIndex: 1}

            ]
        )
    }

    const clearCache=()=>{
        Alert.alert(
            "Clear Cache",
            "Are you sure you want to delete all saved data on your device?",
            [
                {
                    text:"Cancel", onPress:()=>console.log("cancel clear cache")
                },
                {
                    text:"Continue", onPress:()=>console.log("clear cache pressed")
                },
                {defaultIndex: 1}

            ]
        )
    }

    const deleteAccount=()=>{
        Alert.alert(
            "Delete Account",
            "Are you sure you want to delete your account?",
            [
            
                {
                    text:"Cancel", onPress:()=>console.log("cancel pressed")
                },
                {
                    text:"Continue", onPress:()=>console.log("delete account pressed")
                },
                {defaultIndex: 1}

            ]
        )
    }
 
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <StatusBar backgroundColor={COLORS.gray}/>
                <View style={{width:'100%'}}>
                    <Image 
                        source={require('../assets/images/space.jpg')}
                        style={styles.cover}
                    />
                </View>
                <View style={styles.profileContainer}>
                     <Image 
                        source={require('../assets/images/man.jpg')}
                        style={styles.profile}
                    />
                     <Text style={styles.name}> 
                    
                      {userLogin === true ? "Andre" : "Please login into your account"} 
                    </Text>  

                    {userLogin === false ? (  
                            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                                <View style={styles.loginBtn}>
                                <Text style={styles.menuText}>L O G I N    </Text>
                                </View>
                            </TouchableOpacity>
                        ):(      
                        <View style={styles.loginBtn}>
                            <Text style={styles.menuText}> user@outlook.com   </Text>
                        </View>
                        )  

                    }   


                    {userLogin=== false ? ( 
                      <View></View>
                    ):(      

                            <View style={styles.menuWrapper}>
                                    <TouchableOpacity onPress={()=>navigation.navigate('Favorites')}>
                                        <View style={styles.menuItem(0.2)}>
                                            <MaterialCommunityIcons
                                                name="heart-outline"
                                                color={COLORS.primary}
                                                size={24}   
                                            
                                            />
                                            <Text style={styles.menuText}>Favorites</Text>
                                        
                                        </View>
                                    </TouchableOpacity>


                                    <TouchableOpacity onPress={()=>navigation.navigate('Orders')}>
                                        <View style={styles.menuItem(0.2)}>
                                            <MaterialCommunityIcons
                                                name="truck-delivery-outline"
                                                color={COLORS.primary}
                                                size={24}   
                                            
                                            />
                                            <Text style={styles.menuText}>Orders</Text>
                                        
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>navigation.navigate('Cart')}>
                                        <View style={styles.menuItem(0.2)}>
                                            <SimpleLineIcons
                                                name="bag"
                                                color={COLORS.primary}
                                                size={24}   
                                            
                                            />
                                            <Text style={styles.menuText}>Cart</Text>
                                        
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>clearCache()}>
                                        <View style={styles.menuItem(0.2)}>
                                            <MaterialCommunityIcons
                                                name="cached"
                                                color={COLORS.primary}
                                                size={24}   
                                            
                                            />
                                            <Text style={styles.menuText}>Clear cache</Text>
                                        
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>deleteAccount()}>
                                        <View style={styles.menuItem(0.2)}>
                                            <AntDesign
                                                name="deleteuser"
                                                color={COLORS.primary}
                                                size={24}   
                                            
                                            />
                                            <Text style={styles.menuText}>Delete Account</Text>
                                        
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>logout()}>
                                        <View style={styles.menuItem(0.2)}>
                                            <AntDesign
                                                name="logout"
                                                color={COLORS.primary}
                                                size={24}   
                                            
                                            />
                                            <Text style={styles.menuText}>Logout</Text>
                                        
                                        </View>
                                    </TouchableOpacity>
                            </View>
                        
                        )     

                    }  
                </View>
            </View>
        </View>
    )
}
export default Profile
