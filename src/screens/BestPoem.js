import { SafeAreaView, StyleSheet, Text,ScrollView,View} from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from "axios";

const BestPoem = () => {
    const [poemId, setPoemId] = useState();
    const [poem, setPoem] = useState();
    const [user,setUser]= useState();
    const [score,setScore]= useState();


    useEffect(() => {
        const getBestPoemId = async () => {
          try {
            const response = await axios.get(
              "http://192.168.137.1:81/api/poemgetscores/bestpoemget"
            );
            setPoemId(response.data.data.poemId);
            //console.log(poemId)
            console.log(response.data.data)
            getPoem(response.data.data.poemId)
            setScore(response.data.data.score)
          } catch (error) {
            console.error("Error fetching poems:", error);
          }
          
        };
        const getPoem=async(poemId)=>{
            try{
                const response=await axios.get("http://192.168.137.1:81/api/poems/getbypoemid?poemid="+poemId)
                setPoem(response.data.data)
                getUser(response.data.data.userId)
                console.log(response.data)
            }catch(error){
                console.error("Error fetching poems:", error);
                
            }
        }
        const getUser=async(userId)=>{
          try{
            const response=await axios.get("http://192.168.137.1:81/api/users/getbyid?id="+userId)
            setUser(response.data.data)
            console.log(response.data)
          }catch(error){
            console.error("Error fetching poems:", error);
          }
        }
        async function runFunctions() {
          await getBestPoemId();
          getPoem(poemId);
          console.log(poemId)
        }
        //getBestPoemId().then(getPoem(poemId)); 
        getBestPoemId()
      }, []);
  return (
    <SafeAreaView style={styles.Container}>
      <View style={{marginTop:100}}><Text style={{color:"white",fontSize:30}}>Haftanın En İyi Şiiri</Text></View>
      <View style={styles.Poem}>
          <Text style={{ fontSize: 20, color: "black" }}>
            {poem ==null ? "" :poem.poemName  }
          </Text>
          <ScrollView style={styles.scrollView}>
          <Text style={{ fontSize: 18, color: "black" }}>
          {poem ==null ? "" :poem.poemText  }
          </Text>
          </ScrollView>
      </View>
      <View style={{marginTop:50,backgroundColor:"black",padding:10,borderRadius:10, width:300,alignItems:"center"}}>
        <Text style={{color:"white",fontSize:20,backgroundColor:"purple",padding:10,borderRadius:10}}>Yazar : {user ==null ? "" :user.fakeName  }</Text>
        <Text style={{color:"white",fontSize:20,backgroundColor:"purple",padding:10,borderRadius:10}}>Puan : {score ==null ? "" :score  }</Text>
      </View>

    </SafeAreaView>
  )
}

export default BestPoem

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        //justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "orange",
      },
      Poem: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        backgroundColor: "white",
        padding: 15,
        borderRadius: 50,
        height:450,
        width:"90%"
      },
      scrollView: {
        marginTop:20,
        marginBottom:20,
        marginHorizontal: 20,
      },
})