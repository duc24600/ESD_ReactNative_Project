import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Counter from "../screens/Counter";
import List from "../screens/FlatList";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomNavigator() : JSX.Element {
  return (  
      <Tab.Navigator>
        <Tab.Screen name="Counter" component={Counter}/>
        <Tab.Screen name="List" component={List}/>
      </Tab.Navigator>
  );
}

export default BottomNavigator;