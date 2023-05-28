import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MenuItems from './MenuItems';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <LittleLemonHeader />
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ size }) => {
                let iconName;
                if (route.name === 'Welcome') {
                  iconName = 'ios-home';
                } else if (route.name === 'Login') {
                  iconName = 'ios-enter';
                }
                else if(route.name ==='Menu')
                {
                  iconName ='ios-menu';
                }
                return <Ionicons name={iconName} size={size} />;
              },
            })}
            initialRouteName="Login">
            <Tab.Screen name="Welcome" component={WelcomeScreen} />
            <Tab.Screen name="Login" component={LoginScreen} />
            <Tab.Screen name="Menu" component={MenuItems} />
          </Tab.Navigator>
        </View>
        <View style={styles.footerContainer}>
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});