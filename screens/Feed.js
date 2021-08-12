import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Platform, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import PostCard from './PostCard';

var story = require("./temp_posts.json");

export default class FeedScreen extends React.Component {

  keyExtractor=(item,index)=> index.toString()

  renderItem=({item: story})=>{
      return <PostCard story = {story} />
  }

  render(){
        return (
        <View style={styles.container}>

            <SafeAreaView style={styles.safeAreaView} />

            <View style={styles.appTitle}>
            
              <View style={styles.appIcon}>
            
                <Image
                source={require("../assets/logo.png")}
                style={styles.iconImage}
                />
            
              </View>
            
              <View style={styles.appTitleTextContainer}>
                <Text style={styles.appTitleText} > Spectagram </Text>
              </View>
            
            </View>
            <View style={styles.cardConatiner}>

              <FlatList
              keyExtractor = {this.keyExtractor}
              data = {story}
              renderItem = {this.renderItem}
              />
            </View>
        
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  safeAreaView:{
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle:{
    flex:0.07,
    flexDirection:"row"
  },
  appIcon:{
    flex:0.6,
    justifyContent:'center',
    alignItems:'center',
  },
  iconImage:{
    width:RFValue(50),
    height:RFValue(50),
    resizeMode:'contain',
  },
  appTitleTextContainer:{
    justifyContent:'center',
  },
  appTitleText:{
    color:'white',
    fontSize:RFValue(30),
    fontWeight:'bold',
    marginLeft:30
  },
  cardConatiner:{
    flex:0.85
  }
});
