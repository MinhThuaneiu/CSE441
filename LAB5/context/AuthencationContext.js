import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfor] = useState({});
    const [service, setService] = useState([]);

    const login = async (phone, password) => {
        try {
            const authRes = await axios.post('https://kami-backend-5rs0.onrender.com/auth', { phone, password })
            const userInfo = authRes.data;
            setUserInfor(userInfo);
            await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            await AsyncStorage.setItem('loginToken', JSON.stringify(userInfo.token))

        } catch (error) {
            Alert.alert("Login Failed", "Wrong Account Information");
        }
    };

    useEffect(() => {

    }, [userInfo]);

    return (
        <AuthContext.Provider value={{
            userInfo,
            login,
            service
        }}
        >
            {children}
        </AuthContext.Provider>
    );

};