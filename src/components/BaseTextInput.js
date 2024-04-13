import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const BaseTextInput = ({title,isSecureTextEntry,handlePlaceHolder,handleValue,handleOnChangeText,handleKeyboardType}) => {
  return (
    <View style={{width:"80%"}}>
      <Text style={{fontWeight:"bold"}}>{title}</Text>
      <TextInput 
        placeholder={handlePlaceHolder}
        secureTextEntry={isSecureTextEntry}
        onChangeText={handleOnChangeText}
        value={handleValue}
        style={{borderBottomWidth:1,borderColor:"black",width:"100%",height:50,borderRadius:10,textAlign:"center",marginVertical:10}}
        keyboardType={handleKeyboardType ? handleKeyboardType : 'default'}
      />
    </View>
  )
}

export default BaseTextInput

const styles = StyleSheet.create({})