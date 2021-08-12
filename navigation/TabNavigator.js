import React from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";

import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab = createMaterialBottomTabNavigator()

const BottomTab = () => {
    return(
       <Tab.Navigator
        labeled={false}
        barStyle={styles.bottomTabStyle}
        screenOptions={({route})=>({
            tabBarIcon:({focused, color, size})=>{
              var iconName;
              if(route.name === "Feed"){
                iconName = focused ? "book" : "book-outline"
              }
              else if(route.name === "CreatePost"){
                iconName = focused ? "create" : "create-outline"
              }
              return <Ionicons name={iconName} size={20} color={color}  />
            }
          })}
          inactiveColor={"gray"}
          activeColor={"#ee8249"}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CreatePost" component={CreatePost} />
      
        </Tab.Navigator>
    )
}

export default BottomTab;

const styles = StyleSheet.create({
    bottomTabStyle:{
      backgroundColor:"#6eaceb",
      height:"8%",
      borderTopLeftRadius:30,
      borderTopRightRadius:30,
      position:"absolute",
      overflow:'hidden'
    },
  })