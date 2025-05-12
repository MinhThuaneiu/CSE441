import { DefaultTheme }  from "@react-navigation/native";
import { Button, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const AppTheme = {
    ...DefaultTheme, Colors: {
        ...DefaultTheme.colors,
        primary: '#EF506B'
    },
};
export default styles  = StyleSheet.create({
    container: {
        flex: 1,
        justifycontent: 'center',
        alignItems: 'center',
        padding: 48,
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color:AppTheme.colors.primary,
        marginBottom: 24,
        marginTop: 72,  
    },
    input: {
        borderColor: AppTheme.colors.border,
        borderWidth: 1,
        width: '100%',
        marginTop: 12,
        borderRadius: 10,
        paddingLeft: 12,
    },
    button: {
        backgroundColor: AppTheme.colors.primary,
        borderRadius: 10,
        width: '100%', 
        justifycontent: 'center',
        alignItems: 'center',
        padding: 12,
        marginTop: 16,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
});