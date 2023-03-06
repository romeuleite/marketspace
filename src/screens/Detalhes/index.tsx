import { styles } from "./style";
import ProductImage from '../../assets/ProductImage.svg'
import Avatar from '../../assets/Avatar.svg'
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { ArrowLeft, FileText, Home, CreditCard, DollarSign, Layout, MessageCircle } from "react-native-feather";

export default function Detalhes() {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <TouchableOpacity style={styles.goBackIcon}><ArrowLeft stroke="#364D9D" /></TouchableOpacity>
                <ProductImage/>

                <View style={styles.productInfoHolder}>
                    <View style={styles.sellerHolder}>
                        <Avatar width={24} height={24} style={styles.sellerPhoto} />
                        <Text style={styles.sellerName}> Makenna Baptista</Text>
                    </View>

                    <View style={styles.productStatus}><Text style={styles.productStatusText}>NOVO</Text></View>

                    <View style={styles.productHeader}>
                        <Text style={styles.produtcName}>Bicicleta</Text>
                        <Text style={styles.productPrice}>R$ 120,00</Text>
                    </View>
                    <Text style={styles.productText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                    <Text style={styles.boldText}>Aceita troca? Sim</Text>
                    <Text style={styles.boldText}>Meios de pagamento</Text>
                    <View style={styles.paymentHolder}><FileText stroke="#3E3A40" /><Text> Boleto</Text></View>
                    <View style={styles.paymentHolder}><Layout stroke="#3E3A40" /><Text> Pix</Text></View>
                    <View style={styles.paymentHolder}><DollarSign stroke="#3E3A40" /><Text> Dinheiro</Text></View>
                    <View style={styles.paymentHolder}><CreditCard stroke="#3E3A40" /><Text> Cartão de Crédito</Text></View>
                    <View style={styles.paymentHolder}><Home stroke="#3E3A40" /><Text> Depósito Bancário</Text></View>


                </View>
            </View>
            <View style={styles.bottomMenu}>
                <Text style={styles.productPrice}>R$ 120,00</Text>
                <TouchableOpacity style={styles.contactButton}><MessageCircle stroke="#F7F7F8"/><Text style={{color: '#F7F7F8'}}> Entrar em contato</Text></TouchableOpacity>
            </View>
        </View>
    )

}