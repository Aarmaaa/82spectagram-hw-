import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import ProfileScreen from '../screens/Profile';

const Drawer = createDrawerNavigator()

// side Menu 

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="ProflieScreen" component={ProfileScreen} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;