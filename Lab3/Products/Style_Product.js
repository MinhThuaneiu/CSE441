import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export default styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        marginLeft: 10,
        marginRight: 5,
    },

    title: {
        color: 'black',
        fontSize: 30,
        marginBottom: 25,
    },

    card: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#eef7ed',
        marginVertical:  5,
        marginHorizontal: 20,
        padding: 5,
    },

    img: {
        width: 100,
        height: 100,
    },

    left: {
        width:  '25%'
    },

    right: {    
        width: '75%',
        marginLeft:  5,
    },

    titleProduct: {
        fontSize: 25,
        fontWeight: 'bold'
    },

    discount: {
        color: 'green'
    },

    button: {

    },

     groupButton: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },


    titleAdd: {
        color: 'purple',
        fontSize: 15,
        fontWeight: 'bold',
    },

    label: {
        color: 'black',
    },


    titleSearch: {
        fontWeight: 'bold',
    }

});