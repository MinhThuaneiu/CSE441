import React, { useContext, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../screen/login";
import Service from "../screen/home";
import { AuthContext } from "../context/AuthencationContext";
import MainNavigation from "./MainNavigation";


const Stack = createNativeStackNavigator();

const Navigation = () => {
    const {userInfo} = useContext(AuthContext);
   
    return (
        <NavigationContainer>
             <Stack.Navigator
                screenOptions={({route})=>({
                    headerStyle:{
                        backgroundColor: "#E64E6A",
                    },
                    headerTintColor: "white",
                    
                })}
             >
                {userInfo.token ? 
                    <>
                        <Stack.Screen name="MainNavigation" component={MainNavigation} options={{headerShown: false}}/>
                    </>
                :
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
                    </>
                }       
             </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation