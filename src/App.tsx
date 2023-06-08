import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import Counter from "./screens/Counter";
import List from "./screens/FlatList";
//import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";

const Tab = createBottomTabNavigator();
//const Stack = createStackNavigator();

function App() : JSX.Element {
  //const [isSignedIn, setSignedIn] = useState(false);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login}/>
        <Tab.Screen name="Counter" component={Counter}/>
        <Tab.Screen name="List" component={List}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;