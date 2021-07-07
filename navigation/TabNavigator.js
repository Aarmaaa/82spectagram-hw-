import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-ionicons";

import Feed from '../screens/Feed';
import CreatePost from '../screens/CreatePost';

const Tab = createBottomTabNavigator()

const BottomTab = () => {
    return(
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                var iconName;
                if(route.name === 'Feed'){
                    iconName = focused ? 'book' : 'book-outline';
                }
                else if(route.name === "CreatePost"){
                    iconName = focused ? 'create' : 'create-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />
            }
        })}
        tabBarOptions={{
            activeTintColor:"tomato",
            inactiveTintColor:"gray",
        }}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="CreatePost" component={CreatePost} />
      
        </Tab.Navigator>
    )
}

export default BottomTab;