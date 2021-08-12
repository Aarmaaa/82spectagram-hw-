import React from 'react';
import { StyleSheet, Text, View, Image  } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from "react-native-vector-icons/Ionicons";

export default class PostCard extends React.Component {
  render(){
        return (
        <View style={styles.container}>
            <View style={styles.cardContainer} >
                <View style={styles.authorContainer}>
                    <View style={styles.authorNameContainer} >
                        <Text style={styles.authorName}> {this.props.story.author} </Text>
                    </View>
                </View >
                <Image source={require("../assets/post.jpeg")} style={styles.postImage} />
                <View style={styles.captionContainer}>
                    <Text style={styles.captionText} >
                        {this.props.story.caption}
                    </Text>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.likeButton}>
                        <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                        <Text style={styles.likeText} >15.9k</Text>
                    </View>
                </View>
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
      },
      cardContainer:{
        margin: RFValue(15),
        backgroundColor: "#cccecf",
        borderRadius: RFValue(20)
      },
      postImage: {
        width:RFValue(250),
        height:RFValue(250),
        margin:RFValue(30)
    },      
      actionContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: RFValue(10)
    },
    likeButton: {
        width: RFValue(160),
        height: RFValue(40),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        borderRadius: RFValue(30),
        backgroundColor: "#eb3948"
        
    },
    likeText: {
      color: "white",
      fontSize: RFValue(25),
      marginLeft: RFValue(5),
      
    },
      authorName:{
          fontSize:RFValue(18),
          fontWeight:"300",
          color:"white",
          marginLeft:RFValue(25),
          marginTop:RFValue(15)
      },
      captionText:{
        fontSize:RFValue(25),
        fontWeight:"600",
        color:"white",
        marginLeft:RFValue(25),
      }
});
