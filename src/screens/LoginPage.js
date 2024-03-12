import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import BaseTextInput from "../components/BaseTextInput";
import BaseButton from "../components/BaseButton";
import { useNavigation } from "@react-navigation/native";

const LoginPage = () => {
  const navigation = useNavigation();
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
        />

        <BaseTextInput
          title="Şifre"
          handlePlaceHolder="Lütfen Şifrenizi Giriniz"
          isSecureTextEntry={true}
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
