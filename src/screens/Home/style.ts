import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDECEE',
        alignItems: 'center',
    },

    perfilHeader: {
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 46,
        marginBottom: 16,
    },

    perfilInfo: {
        flex: 0.6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    avatar: {
        width: 45,
        height: 45,
        marginLeft: 24,
        marginRight: 8,
    },

    criarAnuncioButon: {
        height: 42,
        flex: 0.4,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1A181B',
        marginLeft: 8,
        marginRight: 24,
    },

    buttonText: {
        fontSize: 14,
        color: '#F7F7F8',
    },


    activeProduts: {
        flex: 0.3,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },

    myAdsHolder: {
        flexDirection: 'row',
        width: 327,
        height: 66,
        borderRadius: 6,
        backgroundColor: 'rgba(100, 122, 199, 0.1)',
        //backgroundColor: '#647AC7'
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 8,
    },

    link: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    adsLink: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#364D9D',
    },

    input: {
        width: 327,
        height: 45,
        paddingHorizontal: 16,
        fontSize: 16,
        borderRadius: 6,
        backgroundColor: '#F7F7F8',
        marginVertical: 8,
    },

    itemsContainer: {
        flex: 0.5,
        flexDirection: 'column',
        flexWrap: 'wrap',
    },

    itemBox: {
        flexDirection: 'column',
    },
})