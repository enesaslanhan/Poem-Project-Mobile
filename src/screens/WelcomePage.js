import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import BaseButton from "../components/BaseButton";
import { useNavigation } from "@react-navigation/native";
const WelcomePage = () => {
  const navigation=useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.Title}>Anonim Yazar</Text>
      {/* <View style={{width:"100%",alignItems:"center",justifyContent:"center"}}>
          <Image source={require("../../assets/images/poem.jpg")} style={{width:250,height:250}}/>
        </View> */}
      <Text style={{ fontSize: 25, fontWeight: "bold", marginTop: 20,color:"white" }}>
        HOŞGELDİNİZ
      </Text>
      <View style={{ width: "100%", marginTop: 20 }}>
        <Image
          source={require("../../assets/images/welcome2.jpg")}
          style={{ width: "100%", height: 400 }}
        />
      </View>
      <View style={{width:"100%",flexDirection:"row"}}>
        <View style={{width:"60%",alignItems:"center",justifyContent:"flex-end"}}>
          <Text style={{color:"black",fontSize:18,fontWeight:"bold"}}>Şiir Yazmak İstemisin?{"\n"}Anonim bir isim belirle{"\n"}Kaydol ve şiirlerini paylaş</Text>
        </View>
        <View
          style={{
            width: "40%",
            alignItems: "flex-end",
            height: 120,
            justifyContent: "flex-end",
          }}
        >
          <BaseButton
            title="Başla"
            setWidht="100%"
            buttonColor="orange"
            textColor="white"
            buttonColorPressed="gray"
            handleOnPress={()=>navigation.navigate("Login")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"powderblue"
  },
  Title: {
    padding: 15,
    borderWidth: 2,
    borderColor: "black",
    fontSize: 25,
    color: "orange",
    fontWeight: "bold",
    borderRadius:10
  },
});
