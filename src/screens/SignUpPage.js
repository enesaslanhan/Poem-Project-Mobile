import { SafeAreaView, StyleSheet, Text, View,Image, } from 'react-native'
import React ,{useEffect,useState}from 'react'
import BaseTextInput from '../components/BaseTextInput'
import BaseButton from '../components/BaseButton'
import { useNavigation } from '@react-navigation/native'
import axios from "axios";

const SignUpPage = () => {
  const navigation=useNavigation()
  const UserModel={
    id:0,
    fakeName:null,
    email:null,
    password:null
  }
  const [email,setEmail]=useState();
  const [fakeName,setFakeName]=useState();
  const [password,setPassword]=useState();
  SignUpUser=async()=>{
    UserModel.email=email;
    UserModel.fakeName=fakeName;
    UserModel.password=password
    const response = await axios.post('http://192.168.1.61:81/api/users/add',UserModel)
    console.log(response.data)
    if (response.data.succes) {
      alert(response.data.message)
      navigation.navigate("Login")
    }
    else{
      alert(response.data.message)
    }

  }
  return (
    <SafeAreaView style={styles.Container}>
      
      <View style={styles.header}>
        <Text style={{fontSize:20,color:"tomato",fontWeight:"bold"}}>Üye Ol</Text>
        <View style={styles.İmages}>
          <Image source={require("../../assets/images/userMan.png")} style={{width:120,height:120}} />
          <Image source={require("../../assets/images/userWomen.png")} style={{width:120,height:120}} />
        </View>
      </View>
      <View style={styles.InputTextContainer}>
        <BaseTextInput 
          title="Email"
          handlePlaceHolder="Lütfen Email adresinizi giriniz"
          handleOnChangeText={setEmail}
        />
        <BaseTextInput 
          title="Şifre"
          handlePlaceHolder="Şifreniz 5 karakterden fazla olsun"
          isSecureTextEntry={true}
          handleOnChangeText={setPassword}
        />
        <BaseTextInput
          title="Anonim İsim"
          handlePlaceHolder="Anonim isminizi giriniz"
          handleOnChangeText={setFakeName}
        />
      </View>
      <View style={styles.Footer}>
        <BaseButton
          title="Kayıt"
          buttonColor="deepskyblue"
          setWidht="80%"
          buttonColorPressed="gray"
          handleOnPress={()=>SignUpUser()}
        />
        <BaseButton
          title="Hesabın Var mı? o zaman GİRİŞ yap"
          setWidht="80%"
          textColor="black"
          handleOnPress={()=>navigation.navigate("Login")}
        />
      </View>
    </SafeAreaView>
  )
}

export default SignUpPage

const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  header:{
    flex:2,
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  İmages:{
    width:"70%",
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row",
    marginTop:20
  },
  InputTextContainer:{
    flex:2,
    width:"100%",
    justifyContent:"center",
    alignItems:"center"
  },
  Footer:{
    flex:2,
    width:"100%",
    alignItems:"center",
    justifyContent:"center"
  }
})