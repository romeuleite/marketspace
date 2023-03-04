import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDECEE',
    },

    productInfoHolder:{
        flex:0.5,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 24,
        justifyContent: 'flex-start',
        marginVertical: 24,
    },

    sellerHolder:{
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    sellerPhoto:{
        marginRight: 8
    },

    sellerName:{
        fontSize: 14,
    },

    productStatus:{
        width: 43,
        heifht: 17,
        backgroundColor: '#D9D8DA',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 24,
        fontSize: 10,
    },

    productHeader:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    produtcName:{
        fontWeight: 'bold',
        fontSize: 20
    },

    productPrice:{
        fontWeight: 'bold',
        fontSize: 20
    },

    productText:{

    },

})