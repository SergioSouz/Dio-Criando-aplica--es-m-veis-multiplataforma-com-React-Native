import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet,ScrollView, Text,Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// =========COMPONENTES=========
import Cabecalho from './components/cabecalho';
import Card from './components/Card';

const App = () => {
  return (
    <LinearGradient colors={['#0D0D0D', '#595959', '#0D0D0D']} style={style.linearGradient}>
      <ScrollView>
        <SafeAreaView style={style.page}>
          <StatusBar translucent backgroundColor="transparent"  barStyle='light-content'/>

          <Cabecalho />

          <Card title="Formação">
            <Text style={style.textContent}>Sistema de Informação/ FATEPI, Teresina-PI</Text>
            <Text style={style.textContent}>Técnico em Eletromecânica/ IFPI - Floriano-PI</Text>
          </Card>

          <Card title="Certificado">
            <Text style={style.textContent}>Redes Neurais Artificiais em Python {"\n"}8.5 horas</Text>
            <Text style={style.textContent}>Práticas avançadas em projetos com ReactJS {"\n"}4 horas</Text>
            <Text style={style.textContent}>Conceitos de responsividade e experiência do usuário {"\n"}1 horas</Text>
            <Text style={style.textContent}>Map, Filter e Reduce {"\n"}2 horas</Text>
            <Text style={style.textContent}>Orientação a objetos {"\n"}1 hora</Text>
            <Text style={style.textContent}>Primeiros passos para desenvolvimento web {"\n"}6 horas</Text>
            <Text style={style.textContent}>Desenvolvimento de aplicações para internet com ReactJS {"\n"}4 horas</Text>
            <Text style={style.textContent}>Trabalhando com Componentes em React {"\n"}2 horas</Text>
          </Card>


          <Card title="Competências">
            <View style={style.contentFoto}>

              <View style={style.cardFoto}>
                <Image style={style.foto} source={require('./assets/images/javascript.png')}/>
                <Text>Basico</Text>
              </View>

              <View style={style.cardFoto}>
                <Image style={style.foto} source={require('./assets/images/typescript.png')}/>
                <Text>Basico</Text>
              </View>
              
              <View style={style.cardFoto}>
                <Image style={style.foto} source={require('./assets/images/python.png')}/>
                <Text>Basico</Text>
              </View>
              
              <View style={style.cardFoto}>
                <Image style={style.foto} source={require('./assets/images/react.png')}/>
                <Text>Basico</Text>
              </View>

              <View style={style.cardFoto}>
                <Image style={style.foto} source={require('./assets/images/reactNative.png')}/>
                <Text>Basico</Text>
              </View>
            </View>

          </Card>
        
        
        </SafeAreaView>

      </ScrollView>
    </LinearGradient>
  );
};

export default App;

const style = StyleSheet.create({
  page: {
    flex: 1,
    alignItems:'center',
    paddingBottom:30,
  },
  linearGradient: {
    flex: 1,
   
  },
  textContent:{
    color:'#2C3E50',
    marginBottom:10,
 },
 contentFoto:{
  marginTop:10,
  flexDirection:'row',
  justifyContent:'space-around'
 },
 cardFoto:{
   justifyContent:'center',
   alignItems:'center'
 },
 foto:{
  width:50,
  height:50,

}
});
