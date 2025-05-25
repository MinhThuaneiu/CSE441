import { SafeAreaView, Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthencationContext";


const LoginScreen = ({ navigation }) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [phone, setPhone] = useState('');
    const {login} = useContext(AuthContext);

    return (
       <SafeAreaView style={styles.layout}>
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.inputForm}
                placeholder="Phone number"
                placeholderTextColor="#777"
                keyboardAppearance="number-pad"
                keyboardType="numeric"
                onChangeText={(text) => setPhone(text)}
                value={phone}
            />

            <TextInput
                style={styles.inputForm}
                placeholder="Password"
                placeholderTextColor="#777"
                secureTextEntry
                keyboardAppearance="number-pad"
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
        <TouchableOpacity style={styles.button} onPress={() => {login(phone, password)}}>
            <Text style={styles.buttonTitle}>Login</Text>
        </TouchableOpacity>
        
        </View>
       </SafeAreaView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    layout: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        padding: 48, 
    },

    container: {
       flex: 1,
       alignItems: 'center',
       paddingTop: '30%',
       width: '90%'
    },

    inputForm: {
        borderBlockColor: 'grey',
        backgroundColor: '#efebea',
        borderWidth: 1,
        width: '100%',
        marginTop: 12,
        borderRadius: 10,
        paddingLeft: 12,
    },

    title: {
       fontSize: 48,
       fontWeight: 'bold',
       color: '#f86ef4',
       marginBottom: 24,
       marginTop: 50,
    },

    button: {
        backgroundColor:  '#f86ef4',
        borderRadius: 10,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 14,
        marginTop: 20,
    },

    buttonTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#fff', 
    }
});