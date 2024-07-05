import {FlatList, Text, ScrollView, View, Image,StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter } from 'react-router-dom';

const App = () => (

  

<View>
  <View style={styles.topbar_outer}>
    <View>
      <Image
        style={{width : 120, height: 70}}source={require("./assets/yt-logo.png")}/>
      </View>
    <View style={styles.cast_bell_srch}>
      <Feather name="cast" style={styles.cast_bell_srch_icon} /> 
      <Feather name="bell" style={styles.cast_bell_srch_icon} /> 
      <Feather name="search" style={styles.cast_bell_srch_icon} /> 
    </View>
  </View>

  <View>
    


    <ScrollView horizontal style={styles.scroll_list_outer}>
      <Text style={styles.scroll_list}>Angular</Text>
      <Text style={styles.scroll_list}>Funny Videos</Text>
      <Text style={styles.scroll_list}>Java Script</Text>
      <Text style={styles.scroll_list}>React Native</Text>
      <Text style={styles.scroll_list}>Flutter</Text>
      <Text style={styles.scroll_list}>WordPress</Text>
      <Text style={styles.scroll_list}>Python</Text>
    </ScrollView>
  </View>

      
  <ScrollView vertical style={styles.courses_outer} showsVerticalScrollIndicator={true}>

    <View style={styles.courses_list}>
        <Image style={styles.courses_list_thumb} source={require("./assets/react-native.jpg")} />
        <Text style={styles.courses_list_title}>Introduction to React Native course | Complete Guide</Text>
    </View>

    <View style={styles.courses_list}>
      <Image style={styles.courses_list_thumb} source={require("./assets/angular.jpeg")} />
      <Text style={styles.courses_list_title}>Introduction to React Native course | Complete Guide</Text>
    </View>

    <View style={styles.courses_list}>
      <Image style={styles.courses_list_thumb} source={require("./assets/flutter.jpg")} />
      <Text style={styles.courses_list_title}>Introduction to React Native course | Complete Guide</Text>
    </View>

    <View style={styles.courses_list}>
      <Image style={styles.courses_list_thumb} source={require("./assets/html.jpg")} />
      <Text style={styles.courses_list_title}>Introduction to React Native course | Complete Guide</Text>
    </View>

    <View style={styles.courses_list}>
      <Image style={styles.courses_list_thumb} source={require("./assets/react-native.jpg")} />
      <Text style={styles.courses_list_title}>Introduction to React Native course | Complete Guide</Text>
    </View>

    <View style={styles.courses_list} id="angular">
      <Image style={styles.courses_list_thumb} source={require("./assets/angular.jpeg")} />
      <Text style={styles.courses_list_title}>Introduction to React Native course | Complete Guide</Text>
    </View>

  </ScrollView>
  
</View>

);

export default App;


const styles = StyleSheet.create({
  topbar_outer:{
    justifyContent:"space-between",
    flexDirection: "row",
    marginTop:30,
    marginHorizontal:10,
  },

  cast_bell_srch:{
    flexDirection: "row",
    gap:20,
    marginTop: 20
  },

  cast_bell_srch_icon:{
    color:"black",
    fontSize:24,
  },
  //===topbar close
  //scroll list start
  courses_outer:{
    //marginBottom:180,
    flex:1,
    
  },

  scroll_list_outer:{
    padding:10,
    backgroundColor:"#fff",
    borderBottomColor:"#ccc",
    borderBottomWidth:2,
    
  },
  scroll_list: {
    backgroundColor: "gray",
    paddingHorizontal:14,
    paddingVertical:8,
    marginHorizontal:4,
    borderRadius:6,
    color:"#fff",
  },

  courses_list:{
    marginTop:20,
    marginHorizontal:20,
    //backgroundColor:"#ddd",
    borderRadius:8,
    overflow:"hidden",
    borderWidth:1,
    borderColor:"#000",
    padding:10,
    flex: 1
  },
  courses_list_thumb:{
    width:"100%",
    justifyContent:"center",
    height:150,
    borderRadius:8,
    marginBottom:10
  },
  courses_list_title:{
    fontSize:15,
    fontWeight:"600",
    lineHeight:20
  },


});{/*end of style*/}