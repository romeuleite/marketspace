import { styles } from "./style";
import Logo from '../../assets/logo.svg'
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Cadastro() {
    return (
        <View style={styles.container}>
            <View style={styles.loginAccess}>
                <View style={styles.logoContainer}>
                    <Logo style={styles.logo} />
                    <Text style={styles.textLogo}>Boas vindas!</Text>
                    <Text style={{ textAlign: 'center' }}>Crie sua conta e use o espaço para comprar itens variados e vender seus produtos</Text>
                </View>

                <View style={styles.forms}>
                    <TextInput style={styles.input}
                        placeholder="Nome"
                        placeholderTextColor="#808080"
                    />
                    <TextInput style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="#808080"
                    />

                    <TextInput style={styles.input}
                        placeholder="Telefone"
                        placeholderTextColor="#808080"
                    />
                    <TextInput style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="#808080"
                    />

                    <TextInput style={styles.input}
                        placeholder="Confirmar senha"
                        placeholderTextColor="#808080"
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Criar</Text>
                    </TouchableOpacity>
                </View>





                <Text>Já tem uma conta?</Text>
                <TouchableOpacity style={styles.createButton}>
                    <Text style={styles.createButtonText}>Ir para o login</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}