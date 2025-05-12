import { StyleSheet } from "react-native";
export default styles = StyleSheet.create({
    container_defalut: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#edf5f0',
        padding: 8,
       
    },

    container: {
        marginTop: 100,
        flex: 1,
        alignItems: 'center',
    },  

    row: {
        flexDirection: 'row',
        justifyContent : 'center',
    },

    number: {
        width: 60, 
        height: 50,
        backgroundColor: '#f5f4dc',
        justifyContent: "center",
        alignItems: 'center',
        fontSize:  20, 
        borderRadius: 50,
        margin: 2,  
    },

    number_0: {
        width: 140,
        height: 50,
        backgroundColor: '#d8e9ed',
        justifyContent: 'center',
        fontSize: 20,
        borderRadius: 50,
        margin: 2,
        alignItems: 'center'
    },

    calculus: {
        width: 60,
        height: 50,
        backgroundColor: '#e3f2dc',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        borderRadius: 50,
        margin: 2,
    },

    result: {
        width: 40,
        height: 50,
        backgroundColor: '#e3f2dc',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        borderRadius: 50,
        margin: 2,
    },

    clear: {
        width: 248,
        height: 50,
        backgroundColor: '#e3f545',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        borderRadius: 50,
        margin: 2, 
        color: '#ff8000',
    },

    input: {
        height: 30,
        fontSize: 20,
        textAlign: 'center',
    },

    display: {
        fontSize: 30,
        marginTop: 20,
        marginBottom: 20,
        textAlign:  'center',
        width: 248,
        color: 'black',
        borderRadius: 10
    },

    texCal: {
        color: '#0084ff',
        fontSize: 20,
    },

    num: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
    },
});