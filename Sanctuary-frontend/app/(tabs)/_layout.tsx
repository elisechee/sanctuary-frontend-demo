import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs as ExpoTabs, Tabs } from "expo-router";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Map from './map';
import ReportForm from './report-form';
import SafeWalk from './safe-walk';
import Profile from './profile';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator id={undefined}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'map') {
            iconName = 'map';
          } else if (route.name === 'report-form') {
            iconName = 'report';
          } else if (route.name === 'safe-walk') {
            iconName = 'directions-walk';
          } else if (route.name === 'profile') {
            iconName = 'person';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2f95dc',
        tabBarInactiveTintColor: '#2C6868',
        tabBarStyle: {
          backgroundColor: '#184040',
          borderTopWidth: 0,
          elevation: 5,
        },
      })}
    >
      <Tab.Screen name="map" component={Map} options={{ title: "Incident Map" }} />
      <Tab.Screen name="report-form" component={ReportForm} options={{ title: "Report Form" }} />
      <Tab.Screen name="safe-walk" component={SafeWalk} options={{ title: "Safe Walk" }} />
      <Tab.Screen name="profile" component={Profile} options={{ title: "Profile" }} />
    </Tab.Navigator>
  );
}