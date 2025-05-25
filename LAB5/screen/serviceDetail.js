import { Alert, Text, SafeAreaView, View, StyleSheet } from "react-native";
import { IconButton } from 'react-native-paper';
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import { AuthContext } from "../context/AuthencationContext";
import { useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";



const ServiceDetail = ({ route, navigation }) => {
    // const { service } = route.params;
    const [service, setService] = useState(route.params.service);

    const funcDelete = async (serviceid) => {
        const token = (await AsyncStorage.getItem('loginToken'))?.replace(/"/g, '');
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        axios.delete(
            `https://kami-backend-5rs0.onrender.com/services/${serviceid}`,
            config
        )
            .then(res => {
                Alert.alert("Delete done", "", [
                    {
                        text: "OK",
                        onPress: () => navigation.goBack()
                    }
                ]);
            }).catch(e => {
                console.error("fetch error:", e);
            })
    }

    return (
        <SafeAreaView style={styles.layout}>
            <View style={styles.head}>
                <IconButton icon="arrow-left" iconColor="black" size={24} onPress={() => navigation.goBack()} />
                <Text style={styles.titleTop}>Service detail</Text>
                <Menu>
                    <MenuTrigger>
                        <IconButton icon="dots-vertical" iconColor="black" size={24} />
                    </MenuTrigger>
                    <MenuOptions customStyles={{ optionsContainer: styles.optionsWrapper }} >
                        <MenuOption customStyles={
                            {
                                optionWrapper: styles.menuOption,
                                optionText: styles.optionText
                            }}
                            text="Delete"
                            onSelect={() => {
                                Alert.alert('Warning', 'Are you sure ?', [
                                    {
                                        text: 'No',
                                        onPress: () => Alert.alert("Cancel successful"),
                                    },
                                    {
                                        text: 'Yes',
                                        onPress: () => {
                                            funcDelete(service._id)
                                        }
                                    }
                                ])
                            }}
                        ></MenuOption>
                        <MenuOption customStyles={
                            {
                                optionWrapper: styles.menuOption,
                                optionText: styles.optionText
                            }}
                            text="Edit"
                            onSelect={() => navigation.navigate('Edit', {
                                service,
                                onUpdate: (updatedService) => {
                                    // Update your local state or context
                                    setService(updatedService); // If using useState
                                }
                            })}
                        ></MenuOption>
                    </MenuOptions>
                </Menu>
            </View>
            <View style={styles.row}>
                <Text style={styles.title}>Name:</Text>
                <Text style={styles.detail}>{service.name}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.title}>Price:</Text>
                <Text style={styles.detail}>{service.price} đ</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.title}>Creator:</Text>
                <Text style={styles.detail}>{service.createdBy}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.title}>Time:</Text>
                <Text style={styles.detail}>{service.createdAt}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.title}>Final Update:</Text>
                <Text style={styles.detail}>{service.updatedAt}</Text>
            </View>

        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: "white",
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
    },

    title: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 5,
        marginRight: 7,
    },

    detail: {
        fontWeight: 500,
        fontSize: 15,

    },

    row: {
        alignContent: 'center',
        flexDirection: 'row',
    },

    button: {

    },

    buttonTitle: {

    },

    optionsWrapper: {

    },

    menuOption: {

    },

    optionText: {


    }
})
export default ServiceDetail;