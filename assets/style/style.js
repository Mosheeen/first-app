import { StyleSheet } from "react-native";

const App = StyleSheet.create({

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
        marginBottom:180,
        
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



})
export default styles;