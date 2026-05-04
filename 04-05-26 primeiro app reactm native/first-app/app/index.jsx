import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import Foto from '../assets/images/cisne.jpg';

export default function Index() {
  return (
    <ScrollView style={estilos.corpo}>
      <Text style={estilos.titulo}>My First App</Text>

      <Image source={Foto} style={estilos.imagem} />

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>Sobre o app</Text>
        <Text style={estilos.texto}>
          Primeiro aplicativo feito com React Native desenvolvido pelo Senai the best!
        </Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>O que aprenderei</Text>
        <Text style={estilos.item}>• Push Notification</Text>
        <Text style={estilos.item}>• Acesso aos recursos nativos</Text>
        <Text style={estilos.item}>• Acesso a APIs externas</Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>O que vou precisar</Text>
        <Text style={estilos.item}>• Node.js</Text>
        <Text style={estilos.item}>• VS Code</Text>
        <Text style={estilos.item}>• Emulador ou celular</Text>
        <Text style={estilos.item}>• Ser um(a) bom(boa) aluno(a)</Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  corpo: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eef2f7',
  },

  titulo: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#2c3e50'
  },

  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 20
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3
  },

  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#34495e'
  },

  texto: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22
  },

  item: {
    fontSize: 15,
    color: '#555',
    marginBottom: 5
  }
});