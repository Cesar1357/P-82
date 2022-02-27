import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import { Drawer } from 'react-native-paper';


export default function App()  {

  return(
       <NavigationContainer>
         <DrawerNavigator/>
       </NavigationContainer>
     );
  
  
}
//

