import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/home";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddService from "../screen/addServiceScreen";
import ServiceDetail from "../screen/serviceDetail";
import EditService from "../screen/editScreen";
import LoginScreen from "../screen/login";
import CustomerScreen from "../screen/customer";
import AddCustomer from "../screen/addCustomer";
import Transaction from "../screen/transaction";
import TransactionDetail from "../screen/TransactionDetail";


const Stack = createNativeStackNavigator();
const ServiceNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={({ route }) => ({
            headerStyle: {
                backgroundColor: "#E64E6A",
            },
            headerTintColor: "white",

        })}>
            <Stack.Screen name="Services" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Add" component={AddService} />
            <Stack.Screen name="Service detail" component={ServiceDetail} options={{ headerShown: false }} />
            <Stack.Screen name="Edit" component={EditService} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}


const TransNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={({ route }) => ({
            headerStyle: {
                backgroundColor: "#E64E6A",
            },

            headerTitleStyle: {
                color: "white",
                fontWeight: "bold",
            },

            headerTintColor: "white",
        })}>
            <Stack.Screen name="Transaction" component={Transaction} options={{ headerShown: false }} />
            <Stack.Screen name="Transaction detail" component={TransactionDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
const CustomerNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator screenOptions={({ route }) => ({
            headerStyle: {
                backgroundColor: "#E64E6A",
            },

            headerTitleStyle: {
                color: "white",
                fontWeight: "bold",
            },

            headerTintColor: "white",
        })}>
            <Stack.Screen name="Customer" component={CustomerScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Add customer" component={AddCustomer} options={{ headerShown: false }} />
            {/* <Stack.Screen name='Customer Detail' component={CustomerDetail} options={{headerShown: false}}/>
            <Stack.Screen name='Edit customer' component={EditCustomer}/> */}
        </Stack.Navigator>
    )
}


const MainNavigation = ({ navigation }) => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = "home"
                    } else if (route.name === "Transaction") {
                        iconName = "money"
                    } else if (route.name === "Customer") {
                        iconName = "users"
                    } else {
                        iconName = "cog"
                    }

                    return <Icon name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: "#E64E6A",
                tabBarInactiveTintColor: "grey",
                tabBarLabelStyle: {
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
            <Tab.Screen name="Home" component={ServiceNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Transaction" component={TransNavigator} />
            <Tab.Screen name="Customer" component={CustomerNavigator} options={{ headerShown: false }} />
            <Tab.Screen name="Settings" component={ServiceNavigator} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default MainNavigation;