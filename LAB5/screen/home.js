import { SafeAreaView, Text, TextInput, Image, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import { AuthContex } from "../context/AuthencationContext";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";



const HomeScreen = ({ navigation }) => {

    const [services, setServices] = useState([]);
    const [userInfo, setUserInfo] = useState({});

    const getUserInfo = async () => {
        try {
            const storedData = await AsyncStorage.getItem('userInfo');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                setUserInfo(parsedData);
                return parsedData;
            } else {
                console.log("parsedData is null");
            }
        } catch (error) {
            console.log("Error when load userinfo: ", error);
        }
    }

    const loadService = async () => {
        try {
            const serRes = await axios.get('https://kami-backend-5rs0.onrender.com/services')
            const ser = serRes.data;
            await AsyncStorage.setItem('services', JSON.stringify(ser));
        } catch (error) {
            console.log("Load service failed")
        }
    }

    const getService = async () => {
        await loadService();
        try {
            const storedData = await AsyncStorage.getItem('services');
            if (storedData) {
                const parsedData = JSON.parse(storedData);
                setServices(parsedData);
                return parsedData;
            } else {
                console.log("parsedData is null");
            }
        } catch (error) {
            console.log("Error when load services: ", error);
        }
    }

    const nav = useNavigation();
    useEffect(() => {
        const focused = nav.addListener('focus', () => {
            getService();
            getUserInfo();
        });
        return focused;
    }, [navigation]);


    return (
        <SafeAreaView style={styles.layout}>
            <View style={styles.header}>
                <Text style={styles.title}>{userInfo.name}</Text>
                <TouchableOpacity style={styles.button}
                    // onPress={ () => navigation.navigate('Add')}
                >
                    <Icon name="user" color="#E64E6A" size={15} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('./assets/images/logo.png')}
                        style={styles.logoImage}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.wrap}>
                    <View style={styles.rowItem}>
                        <Text style={styles.titleList}>Danh Sách Dịch Vụ</Text>
                        <TouchableOpacity onPress={ () => navigation.navigate('Add')}>
                            <Icon name="plus-circle" color="#E64E6A" size={25} />
                        </TouchableOpacity>
                    </View>
                </View>


                <View style={styles.service}>
                    <FlatList
                        data={services}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                style={styles.services}
                                onPress={() => navigation.navigate('Service detail', { service: item })}
                            >
                                <Text style={styles.titleList}>{item.name}</Text>
                                <Text style={styles.price}>{item.price}</Text>

                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.id}
                    />
                </View>
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
        width: 200,
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
    }
});
export default HomeScreen;

