import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import BaseButton from "../components/BaseButton";
import BaseTextInput from "../components/BaseTextInput";
import axios from "axios";

const PoemsPage = () => {
  const [poems, setPoems] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const getAllPoems = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.61:81/api/poems/getall"
        );
        setPoems(response.data.data);
        console.log(poems[0]); // setState işlemi tamamlandıktan sonra loglama yapılacak
      } catch (error) {
        console.error("Error fetching poems:", error);
      }
    };

    getAllPoems();
  }, []);

  const next = () => {
    if (index + 1 >= poems.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const previous = () => {
    if (index - 1 < 0) {
      setIndex(poems.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <SafeAreaView style={styles.Container}>
      <Text style={{ fontSize: 22, color: "white" }}>Şiirler</Text>
      
        <View style={styles.Poem}>
          <Text style={{ fontSize: 20, color: "black" }}>
            {poems.length > 0 ? poems[index].poemName : ""}
          </Text>
          <ScrollView style={styles.scrollView}>
          <Text style={{ fontSize: 18, color: "black" }}>
            {
              poems.length > 0 ? poems[index].poemText : "" // Veri geldiğinde ekrana basılıyor
            }
          </Text>
          </ScrollView>
        </View>
     

      <View
        style={{
          width: "80%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        <BaseButton
          buttonColor="yellow"
          setWidht="45%"
          title="Önceki"
          textColor="black"
          buttonColorPressed="white"
          handleOnPress={() => previous()}
        />
        <BaseButton
          buttonColor="yellow"
          buttonColorPressed="white"
          setWidht="45%"
          title="Sonraki"
          textColor="black"
          handleOnPress={() => next()}
        />
      </View>
      <View
        style={{
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
          backgroundColor: "white",
          padding: 10,
          borderRadius: 20,
        }}
      >
        <BaseTextInput
          title="Puan"
          handlePlaceHolder="0-10 arasında puan veriniz."
          handleKeyboardType="numeric"
        />
        <BaseButton
          title="Göder"
          setWidht="100%"
          buttonColor="red"
          buttonColorPressed="black"         
        />
      </View>
    </SafeAreaView>
  );
};

export default PoemsPage;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "dodgerblue",
  },
  Poem: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 50,
    height:350,
    width:"90%"
  },
  scrollView: {
    marginTop:20,
    marginBottom:20,
    marginHorizontal: 20,
  },
});