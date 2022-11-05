import {Text, View, StyleSheet} from 'react-native';

export default function Locais(){
    <View style={estilo.body}>
        <Text>Tem uma Unidade perto de vc.</Text>

        <Text>Guarulhos - Centro</Text>
        <Text>Rua da Esperança, 1025</Text>
        <Text>WhatsApp: 11-98752-3658</Text>
        
        <Text>Guarulhos - Bonsucesso</Text>
        <Text>Rua Almeida Cantara, 98</Text>
        <Text>WhatsApp: 11-1234-5678</Text>
        
        <Text>Guarulhos - Pimentas</Text>
        <Text>Rua Marechal Tito, 12589</Text>
        <Text>WhatsApp: 11-9875-4569</Text>
        
        <Text>Guarulhos - Maia</Text>
        <Text>Rua Tiradentes, 12</Text>
        <Text>WhatsApp: 11-93258-6898</Text>
        
        <Text>Guarulhos - Cecap</Text>
        <Text>Rua Suplicy, 568</Text>
        <Text>WhatsApp: 11-91548-7595</Text>
    </View>
} 

const estilo = StyleSheet.create({
    body:{
    flex: 1,
    justifyContent: 'center',
    alignItens:'center',
    backgroundColor: '#ecf8f9'
    }
})
