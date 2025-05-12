import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import styles from "./Style";

const LoginScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput style={styles.input}
                placeholder="Phone"></TextInput>
                <TextInput 
                style={styles.input}
                placeholder="PassWorl"
                secureTextEntry
                ></TextInput>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};
export default LoginScreen;