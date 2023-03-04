import { styles } from "./style";
import ProductImage from '../../assets/ProductImage.svg'
import Avatar from '../../assets/Avatar.svg'
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { ArrowLeft } from "react-native-feather";

export default function Detalhes() {
    return (
        <View style={styles.container}>
            <ArrowLeft stroke="#364D9D" />
            <ProductImage />

            <View style={styles.productInfoHolder}>
                <View style={styles.sellerHolder}>
                    <Avatar style={styles.sellerPhoto} />
                    <Text style={styles.sellerName}> Makenna Baptista</Text>
                </View>

                <Text style={styles.productStatus}>NOVO</Text>

                <View style={styles.productHeader}>
                    <Text style={styles.produtcName}>Bicicleta</Text>
                    <Text style={styles.productPrice}>R$ 120,00</Text>
                </View>
            </View>
        </View>
    )

}