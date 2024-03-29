import { NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import { StyleSheet} from 'react-native';
import {useFonts} from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import BottomTabNavigation from './nav/BottomTabNavigation';
import { Cart ,ProductDetails,NewRivals, LoginPage,Orders,Favorites,SignUp,ProductAddPage} from './screens';




//for managing the navigation
const Stack= createNativeStackNavigator();

export default function App() {
  //fontlari kullanabilmek icin burada tanimladik
  const [fontsLoaded]=useFonts({
    
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    extraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
  })

  //fontlar yuklendi mi yuklenmedi mi kontrol eder.
  const onLayoutRootView= useCallback(async()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded] );
  //fontlar yuklenmediyse null dondur
  if(!fontsLoaded){
    return null;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Bottom Navigation'
          component={BottomTabNavigation}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name='Cart'
          component={Cart}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='ProductList'
          component={NewRivals}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Login'
          component={LoginPage}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name='Orders'
          component={Orders}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name='Favorites'
          component={Favorites}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{headerShown:false}}
        />
         <Stack.Screen
          name='ProductAddPage'
          component={ProductAddPage}
          options={{headerShown:false}}
        />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontFamily: 'extraBold',
    fontSize: 20,

  }
});*/
