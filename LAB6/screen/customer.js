import { SafeAreaView, Text, TextInput, Image, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContex } from "../context/AuthencationContext";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const CustomerScreen = ({ navigation }) => {

    const [customers, setCustomer] = useState([]);


    const loadCustomer = async () => {
        try {
            const getCus = await axios.get("https://kami-backend-5rs0.onrender.com/customers")
            const cus = getCus.data;
            setCustomer(cus);
            await AsyncStorage.setItem('Customers', JSON.stringify(cus));
        } catch (error) {
            console.log("Customer load error:", error);
        }
    }

    const nav = useNavigation();

    useEffect(() => {
        const focused = nav.addListener('focus', () => {
            loadCustomer()
        });
        return focused;
    }, [customers])

    return (
        <SafeAreaView style={styles.layout}>
            <View style={styles.header}>
                <Text style={styles.title}>Customer</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.service}>
                    <FlatList style={styles.layout}
                        data={customers}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                style={styles.services}
                            // onPress={() => navigation.navigate('Service detail', { service: item })}
                            >
                                <View>
                                    <View style={styles.row}>
                                        <Text style={styles.titleList}>Name: </Text>
                                        <Text style={styles.detail}>{item.name}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.titleList}>Phone: </Text>
                                        <Text style={styles.detail}>{item.phone}</Text>
                                    </View>
                                    <View style={styles.row}>
                                        <Text style={styles.titleList}>totalSpent: </Text>
                                        <Text style={styles.detail}>{item.totalSpent}</Text>
                                    </View>
                                    <View style={styles.role}>
                                        <Icon name="star" color="#E64E6A" size={30}></Icon>
                                        <Text style={styles.roleText}>{item.loyalty}</Text>
                                    </View>
                                </View>



                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
            <View style={styles.fabContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Add customer')}>
                    <Icon name="plus-circle" color="#E64E6A" size={40} />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    layout: {
        backgroundColor: '#fff',
        flex: 1,
        marginTop: "5%",
        marginLeft: "5%",
        marginHorizontal: 5,
        marginVertical: 10,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '30%',
        width: '90%'
    },

    header: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: "space-between",
        backgroundColor: "#f8d9f7",
        height: 60,
        padding: 15,
    },

    body: {
        flex: 1,
        marginHorizontal: 15,
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#f86ef4',
    },

    logoContainer: {
        alignItems: 'center',
        marginVertical: 10,

    },

    logoImage: {
        width: 60,
        height: 60,
    },

    bodyTitle: {

    },

    services: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderBlockColor: '#e1d9e1',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginBottom: 10,

    },

    service: {
        flex: 1,
    },

    titleList: {
        fontWeight: "700",
        fontSize: 18,
        color: "black",
    },

    wrap: {
        marginBottom: 20,
    },

    rowItem: {
        flexDirection: "row",
        justifyContent: 'space-between',
    },

    price: {
        fontWeight: "400",
        fontSize: 18,
        color: "black",
    },

    button: {
        backgroundColor: '#fff',
        borderRadius: 50,
        width: '30',
        height: '30',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },

    row: {
        // alignContent: 'center',
        flexDirection: 'row',
    },

    detail: {
        fontWeight: 500,
        fontSize: 15,

    },

    role: {
        alignItems: "center",
        justifyContent: "center",
        marginRight: 0,
        marginLeft: 200,
        marginTop: -55,
    },
    fabContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        zIndex: 100, // ensures it's on top of other content
    }
});
export default CustomerScreen;

