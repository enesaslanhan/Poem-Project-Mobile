import { SafeAreaView, StyleSheet, Text, View,TextInput, ScrollView,Image } from "react-native";
import React, { useEffect, useState } from "react";
import BaseTextInput from "../components/BaseTextInput";
import BaseButton from "../components/BaseButton";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const WritePoem = ({route}) => {
  const PoemModel={
    id:0,
    userId:null,
    poemName:null,
    poemText:null
  }
  const navigation = useNavigation();

  const {userId}=route.params
  const [poemName,SetPoemName]=useState()
  const [poemText,SetPoemText]=useState()

  const AddPoem=async()=>{
    PoemModel.userId=userId
    PoemModel.poemName=poemName
    PoemModel.poemText=poemText
    const response=await axios.post("http://192.168.137.1:81/api/poems/add",PoemModel);
    console.log(response.data)
    if (response.data) {
      alert(response.data.message)
    }
    else{
      alert(response.data.message)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={{width:"100%"}}>
      <View style={styles.TextBox}>
        <BaseTextInput
          title="Şiirin Adı"
          handlePlaceHolder="Şiirin adını giriniz"
          handleOnChangeText={SetPoemName}
        />
      </View>
      <View style={styles.textAreaContainer}>
        <Text style={{fontSize:18,paddingVertical:20}}>Şiirinizi Giriniz</Text>
        <TextInput
          style={styles.textArea}
          underlineColorAndroid="transparent"
          placeholder="Type something"
          placeholderTextColor="grey"
          numberOfLines={20}
          multiline={true}
          onChangeText={SetPoemText}
          
        />
      </View>
      <View style={{width:"100%",alignItems:"center"}}>
        <BaseButton
            setWidht="80%"
            buttonColor="red"
            title="Gönder"
            buttonColorPressed="gray"
            handleOnPress={()=>AddPoem()}
        />
        <BaseButton
            setWidht="80%"
            buttonColor="blue"
            title="Haftanın En İyi Şiiri"
            buttonColorPressed="gray"
            handleOnPress={()=>navigation.navigate("BestPoem")}
        />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default WritePoem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09A547",
    justifyContent: "center",
    alignItems:"center"
  },
  TextBox: {
    backgroundColor: "white",
    width: "90%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    marginTop:50,
    marginLeft:"5%"
    
    
  },
  textArea: {
    height: 350,
    justifyContent: "flex-start",
    
   
  },
  textAreaContainer: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
    width:"90%",
    alignItems:"center",
    backgroundColor:"white",
    borderRadius:20,
    marginTop:50,
    marginLeft:"5%",
    marginBottom:20
  },
});
