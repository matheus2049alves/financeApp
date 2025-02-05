import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../screens/Dashboard';
import Calendar from '../../assets/Calendar.svg';
import Wallet from '../../assets/Wallet.svg';
import User from '../../assets/User.svg';
import Home from '../../assets/Home.svg';

import { ButtonAdd } from '../components/ButtonAdd';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        borderTopColor: 'transparent',
        tabBarActiveTintColor : '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          paddingTop: 10, 
          borderTopLeftRadius: 20 
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Home width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Calendar width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <ButtonAdd  fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Wallet width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <User width={size} height={size} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
