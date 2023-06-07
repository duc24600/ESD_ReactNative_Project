import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Counter from "./screens/Counter";
import Hooks from "./screens/Hooks";
import List from "./screens/FlatList";

const Tab = createBottomTabNavigator();

function App() : JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Counter" component={Counter}/>
        <Tab.Screen name="Hooks" component={Hooks}/>
        <Tab.Screen name="List" component={List}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;