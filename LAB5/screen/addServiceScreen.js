import { useState, useContext } from "react";
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { IconButton, TextInput } from 'react-native-paper';
import { AuthContext } from "../context/AuthencationContext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddService = ({navigation}) => {
    const [newName, setNewName] = useState('');
    const [newPrice, setNewPice] = useState('0');
    const {userInfo} = useContext(AuthContext);


    const funcAdd = async (newName, newPrice) => {
        const token = (await AsyncStorage.getItem('loginToken'))?.replace(/"/g, '');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };
        axios.post(
            "https://kami-backend-5rs0.onrender.com/services",
            { name: newName, price: newPrice }, // Payload (request body)
            config // Configuration (headers)
        )
        .then(res => {
            Alert.alert("Add successful","", [
                {
                    text: "OK",
                    onPress: () => navigation.goBack()
                }
            ])
        }).catch(e => {   
            console.error("fetch error:" ,e);
        })
    }

    return (
        <SafeAreaView style={styles.layout}>
            <View style={styles.head}>
                <IconButton icon="arrow-left" iconColor="black" size={24} />
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
                    onPress={() => funcAdd(newName, newPrice)}
                >
                    <Text style={styles.buttonTitle}>Add</Text>
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
        marginRight:  100,
    },

    detail: {
       fontWeight: 500,
        fontSize: 15,

    },

    body: {
        justifyContent: 'center',
        
    },

    inputForm:{
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 10,
    },

    row: {
        alignContent: 'center',
        flexDirection:'row',
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
export default AddService;