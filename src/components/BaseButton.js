import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BaseButton = ({title,setWidht,buttonColor,buttonColorPressed,handleOnPress,textColor}) => {
  return (
    <Pressable 
        onPress={handleOnPress}
        style={({pressed})=>[{
            backgroundColor:pressed? buttonColorPressed:buttonColor,
            width:setWidht
            
          },styles.button]}
    >
        <Text style={{color:textColor?textColor:"white"}}>{title}</Text>
    </Pressable>
  )
}

export default BaseButton

const styles = StyleSheet.create({
    button:{
        borderRadius:10,
        height:50,
        marginTop:20,
        alignItems:"center",
        justifyContent:"center",
        
    },
})