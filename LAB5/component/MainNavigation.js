import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/home";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddService from "../screen/addServiceScreen";
import ServiceDetail from "../screen/serviceDetail";
import EditService from "../screen/editScreen";
import LoginScreen from "../screen/login";


const Stack = createNativeStackNavigator();
const ServiceNavigator = ({navigation}) => {
    return(
        <Stack.Navigator screenOptions={({route})=>({
            headerStyle:{
                backgroundColor: "#E64E6A",
            },
            headerTintColor: "white",
            
        })}>
            <Stack.Screen name="Services" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Add" component={AddService}/>
            <Stack.Screen name="Service detail" component={ServiceDetail} options={{headerShown: false}}/>
            <Stack.Screen name="Edit" component={EditService} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}


const MainNavigation = ({navigation}) =>{
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator
           screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size}) =>{
                let iconName;
                if(route.name ==="Home"){
                    iconName ="home"
                } else if (route.name ==="Transaction"){
                    iconName ="money"
                } else if (route.name ==="Customer"){
                    iconName ="users"
                } else {
                    iconName ="cog"
                }

                return <Icon name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: "#E64E6A",
            tabBarInactiveTintColor: "grey",
            tabBarLabelStyle:{
                fontSize: 12,
            },
            tabBarStyle: {
                height: 55,
            },

            headerStyle: {
                backgroundColor: "#E64E6A",
            },

            headerTitleStyle: {
                color: "white",
                fontWeight: "bold",
            },

           })} >
                <Tab.Screen name="Home" component={ServiceNavigator} options={{headerShown: false}}/>
                <Tab.Screen name="Transaction" component={ServiceNavigator} options={{headerShown: false}}/>
                <Tab.Screen name="Customer" component={ServiceNavigator} options={{headerShown: false}}/>
                <Tab.Screen name="Settings" component={ServiceNavigator} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}

export default MainNavigation;