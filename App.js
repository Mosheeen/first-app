import {Text, ScrollView, View, Image,StyleSheet,Pressable,Alert } from "react-native";
import Feather from '@expo/vector-icons/Feather';

import {Card} from 'react-native-shadow-cards';

const categories = [
  {
    id : 0,
    name : "Food",
    link : ""
  },
  {
    id : 1,
    name : "Pets",
  },
  {
    id : 2,
    name : "Shoes",
  },
  {
    id : 3,
    name : "New Things",
  },
  {
    id : 4,
    name : "Songs",
  },
  {
    id : 5,
    name : "Shopping",
  },
  {
    id : 5,
    name : "Vacation",
  },
];

const feeds = [
  {
    id: 0,
    thumbnail:
      "https://res.cloudinary.com/duivztddr/image/upload/v1699726464/cld-sample-4.jpg",
    caption: "Spicy Foods",
  },
  {
    id: 1,
    thumbnail:
      "https://res.cloudinary.com/duivztddr/image/upload/v1699726462/cld-sample.jpg",
    caption: "Pet Lovers All Around The World",
  },
  {
    id: 2,
    thumbnail:
      "https://res.cloudinary.com/duivztddr/image/upload/v1699726464/cld-sample-5.jpg",
    caption: "New Nike Shoes on sale!",
  },
  {
    id: 3,
    thumbnail:
      "https://res.cloudinary.com/duivztddr/image/upload/v1699726456/samples/smile.jpg",
    caption: "Let's Start New things",
  },

  {
    id: 4,
    thumbnail:
      "https://res.cloudinary.com/dckvkerif/image/upload/v1718201819/samples/two-ladies.jpg",
    caption: "New Song Coming Soon",
  },

  {
    id: 5,
    thumbnail:
      "https://res.cloudinary.com/dckvkerif/image/upload/v1718201803/samples/ecommerce/leather-bag-gray.jpg",
    caption: "Peter England Launch New Leather Bags",
  },

  {
    id: 6,
    thumbnail:
      "https://res.cloudinary.com/dckvkerif/image/upload/v1718201802/samples/landscapes/beach-boat.jpg",
    caption: "Vacation In Bali",
  },
];

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
    <ScrollView style={styles.scroll_list_outer} horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category, index) => (
        <Pressable
          onPress={() => Alert.alert("You Clicked", category.name)}
          style={styles.category}
        >
          <Text Link to="" style={styles.scroll_list}>{category.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  </View>


  <View>
    <ScrollView style={styles.courses_outer} vertical showsHorizontalScrollIndicator={false}>
      
        {feeds.map((feed, index) => (
          <View style={styles.courses_list}>
            <Card style={styles.courses_card}>
              <Image style={styles.courses_list_thumb} source={{uri: feed.thumbnail}}/>
              <Text>{feed.caption}</Text>
            </Card>
            
          </View>
      ))}
  
    </ScrollView>
  </View> 
  
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
    marginBottom:340,
    marginTop:20,
  },

  scroll_list_outer:{
    padding:10,
    backgroundColor:"#fff",
    borderBottomColor:"#ccc",
    //borderBottomWidth:2,
    
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
    marginTop:10,
    marginBottom:10,
    marginHorizontal:20,
  },

  courses_card:{
    padding:15,
    elevation:4,
    borderRadius:8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  }, 

  courses_list_thumb:{
    width:"100%",
    justifyContent:"center",
    height:150,
    borderRadius:8,
    marginBottom:20
  },
  courses_list_title:{
    fontSize:16,
    fontWeight:"700",
    lineHeight:20,
    marginBottom:10
  },


});{/*end of style*/}