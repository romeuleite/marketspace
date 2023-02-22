import { styles } from "./style";
import Logo from '../../assets/logo.svg'
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Login() {
    return (
        <View style={styles.container}>
            <View style={styles.loginAccess}>
                <View style={styles.logoContainer}>
                    <Logo style={styles.logo} />
                    <Text style={styles.textLogo}>marketspace</Text>
                    <Text>seu espaço de compra e venda</Text>
                </View>

                <View style={styles.forms}>
                    <Text>Acesse sua conta</Text>
                    <TextInput style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="#808080"
                    />
                    <TextInput style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="#808080"
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                </View>



            </View>
            <View style={styles.notRegistered}>
                <Text>Ainda não tem acesso?</Text>
                <TouchableOpacity style={styles.createButton}>
                        <Text style={styles.createButtonText}>Criar uma conta</Text>
                    </TouchableOpacity>
            </View>

        </View>
    )

}