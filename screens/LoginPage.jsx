import { Text,ScrollView, View, TouchableOpacity ,Image,TextInput} from "react-native";
import React, {useState} from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./login.style";
import { Button,BackBtn } from '../components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { COLORS } from "../constants";

const validationSchema= Yup.object().shape({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    email: Yup.string()
        .email("Provide a valid email adress")
        .required("Required"),
  });

const LoginPage=({navigation})=>{
    const [loader,setLoader]=useState(false);
    const [responseData,setResponseData]= useState(null);
    const [obsecureText,setObsecureText]=useState(false);
   
    return(
        <View>
            <ScrollView>
                <SafeAreaView style={{marginHorizontal:20}}>
                    <View>
                        <BackBtn onPress={()=>navigation.goBack()}/>
                        <Image
                            source={require('../assets/images/bk.png')}
                            style={styles.cover}
                        />
                        <Text style={styles.title}>Unlimited Luxurious Furniture</Text>
                        <Formik
                            initialValues={{email:"",password:""}}
                            validationSchema={validationSchema}
                            onSubmit={(values) => console.log(values)}
                        >

                            {({ handleChange, handleBlur,touched, handleSubmit,values,errors,isValid, setFieldTouched }) => (
                                <View>
                                    <View style={styles.wrapper}>
                                        <Text style={styles.label}>Email</Text>
                                        <View style={styles.inputWrapper(touched.email ? COLORS.secondary: COLORS.offwhite)}>
                                            <MaterialCommunityIcons
                                                name='email-outline'
                                                size={20}
                                                color={COLORS.gray}
                                                style={styles.iconStyle}     
                                            />
                                            <TextInput
                                                placeholder="Enter email"
                                                onFocus={()=>{setFieldTouched('email')}}
                                                onBlur={()=>{setFieldTouched('email','')}}
                                                value={values.email}
                                                onChangeText={handleChange('email')}
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                style={{flex:1}}

                                            />
                                        </View>
                                        {touched.email && errors.email &&(
                                            <Text style={styles.errorMessage}>{errors.email}</Text>
                                        )}
                                    </View>

                                    <View style={styles.wrapper}>
                                        <Text style={styles.label}>Password</Text>
                                        <View style={styles.inputWrapper(touched.password ? COLORS.secondary: COLORS.offwhite)}>
                                            <MaterialCommunityIcons
                                                name='lock-outline'
                                                size={20}
                                                color={COLORS.gray}
                                                style={styles.iconStyle}     
                                            />
                                            <TextInput
                                                secureTextEntry={obsecureText}
                                                placeholder="Password"
                                                onFocus={()=>{setFieldTouched('password')}}
                                                onBlur={()=>{setFieldTouched('password','')}}
                                                value={values.password}
                                                onChangeText={handleChange('password')}
                                                autoCapitalize="none"
                                                autoCorrect={false}
                                                style={{flex:1}}
                                            />
                                            <TouchableOpacity  onPress={()=>{setObsecureText(!obsecureText)}}>
                                                <MaterialCommunityIcons
                                                    name={obsecureText ? "eye-outline" : "eye-off-outline"}
                                                    size={18}
                                                />
                                            </TouchableOpacity> 
                                        </View>
                                        {touched.email && errors.email &&(
                                            <Text style={styles.errorMessage}>{errors.email}</Text>
                                        )}
                                    </View>        


                                    <Button title={"L O G I N"} onPress={isValid ?handleSubmit:()=>{}} isValid={isValid}/>
                               </View>
                            )}


                        </Formik>
                        
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

export default LoginPage;