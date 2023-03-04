import { styles } from "./style";
import Avatar from '../../assets/Avatar.svg'
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { ArrowRight } from "react-native-feather";

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.perfilHeader}>
                <View style={styles.perfilInfo}>
                    <Avatar style={styles.avatar} />
                    <Text> Boas Vindas!</Text>
                </View>
                <TouchableOpacity style={styles.criarAnuncioButon}>
                    <Text style={styles.buttonText}> +  Criar anúncio</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.activeProduts}>
                <Text> Seus produtos anunciados para venda</Text>
                <View style={styles.myAdsHolder}>
                    <Text style={styles.adsLink}>4 anúncios ativos</Text>
                    <TouchableOpacity style={styles.link}>
                        <Text style={styles.adsLink}>Meus anúncios</Text>
                        <ArrowRight stroke="#364D9D" />
                    </TouchableOpacity>
                        
                    

                </View>
                <Text> Compre produtos variados</Text>
                <TextInput style={styles.input}
                    placeholder="Buscar anúncio"
                    placeholderTextColor="#808080"
                />
            </View>

            <View style={styles.itemsContainer} >
                <View style={styles.itemBox} >
                    <Text>Imagem</Text>
                    <Text>Nome</Text>
                    <Text>Preço</Text>
                </View>
            </View>

        </View>
    )

}