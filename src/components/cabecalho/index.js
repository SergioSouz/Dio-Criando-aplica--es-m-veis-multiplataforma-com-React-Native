import React from 'react';
import {
  Alert,
  Image, 
  StyleSheet, 
  Text,
  TouchableOpacity, 
  View
} from 'react-native';

import ImgProfire from '../../assets/images/userProfire.png';
import Icon from 'react-native-vector-icons/Feather';

export default function Cabecalho() {

  function handleRedeSocial(rede_social){
    switch (rede_social) {
      case 'github':
        Alert.alert('Meu Github','https://github.com/SergioSouz')
        break
      case 'linkedin':
        Alert.alert('Meu Linkedin','https://www.linkedin.com/in/sergio-de-souza-silva-b85a06225')
        break
      case 'instagram':
        Alert.alert('Meu Instagram','https://www.instagram.com/sergio_13m')
        break
    }

  }

  return (
    <View style={style.container}>
      
      <Image style={style.foto}  source={ImgProfire} />
      
      <Text style={style.nome}>SERGIO SOUZA</Text>
      <Text style={style.funcao}>Desenvolvedor mobile</Text>
      <View style={style.redeSocial}>
        <TouchableOpacity onPress={()=>handleRedeSocial('github')}>
          <Icon name="github" size={30} color="#171515" />
        </TouchableOpacity >

        <TouchableOpacity onPress={()=>handleRedeSocial('linkedin')}>
          <Icon name="linkedin" size={30} color="#007bb5" />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>handleRedeSocial('instagram')}>
          <Icon name="instagram" size={30} color="#C13584" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 60,
  },

  foto: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth:2,
    borderColor:'#007bb5'
    
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#F2F2F2',
  },
  funcao: {
    color: '#D9D9D9',
    marginBottom: 20,
  },
  redeSocial: {
    justifyContent:'space-evenly',
    flexDirection: 'row',
    width:'70%',

  },
});
