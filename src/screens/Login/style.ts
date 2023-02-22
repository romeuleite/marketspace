import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F8',
        alignItems: 'center',
    },

    loginAccess: {
        flex: 0.7,
        width: '100%',
        backgroundColor: '#EDECEE',
        alignItems: 'center',
        padding: 24,
        borderRadius: 24,
    },

    logoContainer: {
        marginTop: 46,
        alignItems: 'center',
        marginBottom: 77,
    },

    logo: {
        flex: 1,
        alignItems: 'center',
    },

    textLogo:{
        fontWeight:'bold',
        fontSize: 32,
    },

    forms: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    input: {
        width: 279,
        height: 45,
        paddingHorizontal: 16,
        fontSize: 16,
        borderRadius: 6,
        backgroundColor: '#F7F7F8',
        marginVertical: 8,
    },

    button: {
        width: 279,
        height: 45,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginVertical: 24,
        backgroundColor: '#647AC7',

    },

    buttonText:{
        fontSize: 16,
        color: '#F7F7F8',
    },

    notRegistered: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
    },

    createButton: {
        width: 279,
        height: 45,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginVertical: 16,
        backgroundColor: '#D9D8DA',

    },

    createButtonText:{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#3E3A40',
    },
})