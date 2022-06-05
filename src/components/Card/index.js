import React from "react";

import { View,Text,StyleSheet} from 'react-native';


export default function Card({ title, children }){
   return(
      <View style={style.card}>
         <View style={style.header}>
            <Text style={style.textHeader}>{title} </Text>
         </View>
         <View style={style.content}>
           {children}
         </View>
      </View>
   );
}


const style = StyleSheet.create({
   card:{
      width:'90%',
      borderRadius:5,
      borderWidth:1,
      borderColor:'#939393',
      justifyContent:'center',
      marginTop:20,
      padding:10,
      backgroundColor:'#D9D9D9',
   },
   header:{


   },
   textHeader:{
      color:'#000',
      fontSize:18,
      fontWeight:'700',


   },

   
   content:{
      marginTop:10,
   },
 
})