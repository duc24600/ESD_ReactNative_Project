// import { NavigationContainer } from "@react-navigation/native";
import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
// import BottomNavigator from "./navigators/BottomNavigator";
import { SafeAreaView } from "react-native-safe-area-context";

//const Stack = createStackNavigator();

function App() : JSX.Element {
  return (
    
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={Login}/>
    //     <Stack.Screen name="Home" component={BottomNavigator} />
    //   </Stack.Navigator>      
    // </NavigationContainer>
    <SafeAreaView>
      <Login/>
    </SafeAreaView>
  );
}

export default App;