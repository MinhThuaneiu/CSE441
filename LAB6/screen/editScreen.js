import { useState } from "react";
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { IconButton, TextInput } from 'react-native-paper';
import { AuthContext } from "../context/AuthContext";
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import Navigation from "../component/Navigation";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";




const EditService = ({ route, navigation }) => {
    const { service, onUpdate } = route.params;
    const [newName, setNewName] = useState(service.name);
    const [newPrice, setNewPice] = useState(String(service.price));

    const edit = async (id, newName, newPrice) => {
        const token = (await AsyncStorage.getItem('loginToken'))?.replace(/"/g, '');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };

        axios.put(
            "https://kami-backend-5rs0.onrender.com/services/" + id,
            { id: id, name: newName, price: newPrice },
            config
        )
            .then(res => {
                Alert.alert("Updated Service successful", "", [
                    {
                        text: "OK",
                        onPress: () => {
                            if (typeof onUpdate === 'function') {
                                onUpdate({
                                    ...service,
                                    name: newName,
                                    price: newPrice,
        
                                });
                            }
                            navigation.goBack();
                        }
                    }
                ])
            }).catch(e => {
                console.error("fetch error:", e);
            })
    }

    return (
        <SafeAreaView style={styles.layout}>
            <View style={styles.head}>
                <IconButton icon="arrow-left" iconColor="black" size={24} onPress={() => navigation.goBack()} />
                <Text style={styles.titleTop}>Service</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.title}>Name*</Text>
                <TextInput
                    style={styles.inputForm}
                    placeholder="Enter Service's Name"
                    value={newName}
                    onChangeText={setNewName}
                />
                <Text style={styles.title}>Price*</Text>
                <TextInput
                    style={styles.inputForm}
                    placeholder="Enter Service's Price"
                    value={newPrice}
                    onChangeText={setNewPice}
                    keyboardType="numeric"
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => edit(service._id, newName, newPrice)}
                >
                    <Text style={styles.buttonTitle}>Update</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 10,
    },

    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f8a3f6',
        height: 60,
        paddingTop: 5,
    },

    titleTop: {
        color: 'black',
        fontWeight: 500,
        fontSize: 20,
        marginTop: 10,
        marginRight: 200,
    },

    title: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 5,
        marginRight: 7,
        marginRight: 100,
    },

    detail: {
        fontWeight: 500,
        fontSize: 15,

    },

    body: {
        justifyContent: 'center',

    },

    inputForm: {
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 10,
    },

    row: {
        alignContent: 'center',
        flexDirection: 'row',
    },

    button: {
        backgroundColor: '#f8a3f6',
        borderRadius: 10,
        width: '90%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    buttonTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },

    optionsWrapper: {

    },

    menuOption: {

    },

    optionText: {


    }
})
export default EditService;