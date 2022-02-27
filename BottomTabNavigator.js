import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "./Feed";
import CreatePost from "./CreatePost";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
return(
    <Tab.Navigator
        screenOptions={({ route }) => ({
           tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if(route.name === "Feed"){
                    iconName = "Focused"
                    ? 'book'
                    :'book-outline';
                } else if (route.name === 'CreatePost') {
                    iconName = focused ? 'create' : 'create-outline';
                }
                
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}

        tabBarOptions={{
            activeTintColor:'tomato',
            inactiveTintColor:'gray',
        }}
    >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreatePost" component={CreatePost} />

    </Tab.Navigator>
     );
}


export default BottomTabNavigator
