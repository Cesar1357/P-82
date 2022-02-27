import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import { Drawer } from 'react-native-paper';


export default function App()  {

  return(
       <NavigationContainer>
         <DrawerNavigator/>
       </NavigationContainer>
     );
  
  
}
//

