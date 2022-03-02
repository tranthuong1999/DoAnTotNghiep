import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen"
import HomeScreen from "./screens/HomeScreen"
import Notification from './screens/NotificationScreen';
import Setting from './screens/SettingScreen';
import BottomScreen from "./screens/TabView"


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Bottom">
    <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />  
    <Stack.Screen name="Register" options={{headerShown: false}} component={RegisterScreen} />  
    <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />  
    <Stack.Screen name="Notification" options={{headerShown: false}} component={Notification} />  
    <Stack.Screen name="Setting" options={{headerShown: false}} component={Setting} />  
    <Stack.Screen name="Bottom" options={{headerShown: false}} component={BottomScreen} />  
  </Stack.Navigator>
  </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
