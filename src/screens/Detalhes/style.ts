import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDECEE',
    },

    contentContainer:{
        flex: 1,
    },

    goBackIcon: {
        marginTop: 40,
        marginLeft: 24,
        marginBottom: 8,
        justifyContent: 'center',
    },

    productInfoHolder: {
        flex: 0.5,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 24,
        justifyContent: 'flex-start',
        marginVertical: 24,
    },

    sellerHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },

    sellerPhoto: {
        marginRight: 8
    },

    sellerName: {
        fontSize: 14,
    },

    productStatus: {
        width: 43,
        height: 17,
        backgroundColor: '#D9D8DA',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24,
    },

    productStatusText: {
        fontSize: 10,
    },

    productHeader: {
        width: 327,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    produtcName: {
        fontWeight: 'bold',
        fontSize: 20
    },

    productPrice: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#647AC7'
    },

    productText: {
        marginTop: 8,
        fontSize: 14,
    },

    boldText: {
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 16
    },

    paymentHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    bottomMenu: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F7F7F8',
    },

    contactButton:{
        width: 169,
        height: 42,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#364D9D',
        borderRadius: 6,
    },
})