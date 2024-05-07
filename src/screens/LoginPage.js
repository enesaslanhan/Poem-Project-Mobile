import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import BaseTextInput from "../components/BaseTextInput";
import BaseButton from "../components/BaseButton";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const LoginPage = () => {
  const navigation = useNavigation();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();

  useEffect(() => {
    
  }, [])
  
  AuhtControl=async()=>{
    const response=await axios.get(`http://192.168.137.1:81/api/users/getbyemail?email=${email}`)
    console.log(response.data)
    if (response.data.data) {
      if (response.data.data.password==password) {
        navigation.navigate("Poems",{BaseuserId:response.data.data.id})
      }
      else
        alert("Şifre yanlış tekrar deneyiniz.")
    }
    else
      alert("Bu emaile ait kullanıcı bulunumadı")
  }



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <View style={{ flexDirection: "row", marginTop: 40 }}>
          {/* <Image source={require("../../assets/images/userMan.png")} style={{width:100,height:100, marginRight:60}} />
                <Image source={require("../../assets/images/userWomen.png")} style={{width:100,height:100}} /> */}
          <Image
            source={require("../../assets/images/Loginİmage.jpg")}
            style={{ width: 300, height: 300, borderRadius: 500 }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 2,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <BaseTextInput
          title="Email"
          handlePlaceHolder="Lütfen Email Adresinizi Giriniz"
          isSecureTextEntry={false}
          handleValue={email}
          handleOnChangeText={setEmail}
        />

        <BaseTextInput
          title="Şifre"
          handlePlaceHolder="Lütfen Şifrenizi Giriniz"
          isSecureTextEntry={true}
          handleValue={password}
          handleOnChangeText={setPassword}
        />
      </View>

      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flex: 2,
        }}
      >
        <BaseButton
          title="Giriş"
          buttonColor="lightblue"
          setWidht="80%"
          buttonColorPressed="gray"
          handleOnPress={()=>AuhtControl()}
        />
        <BaseButton
          title="Kayıt Ol"
          buttonColor="orange"
          setWidht="80%"
          buttonColorPressed="gray"
          handleOnPress={() => navigation.navigate("Signup")}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
  Header: {
    flex: 3,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
