import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../screens/Dashboard';
import { MyExpenses } from '../screens/MyExpenses';
import { Transaction } from '../screens/Transaction';
import { Wallets } from '../screens/Wallets';
import { Login } from '../screens/Login';
import {SignUp} from '../screens/SignUp';
import { CalendarScreen } from '../screens/CalendarScreen';
import { ActivityIndicator, View } from 'react-native';
import Calendar from '../../assets/Calendar.svg';
import Wallet from '../../assets/Wallet.svg';
import User from '../../assets/User.svg';
import Home from '../../assets/Home.svg';
import { Entypo } from '@expo/vector-icons';
import { HeaderBackButton } from '@react-navigation/elements';
import { useAuth } from '../hooks/auth';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        borderTopColor: 'transparent',
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
          paddingTop: 10,
          borderTopLeftRadius: 20,
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
        component={CalendarScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Calendar width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Dashboard} // Temporariamente definido como Dashboard
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <View
              style={{
                backgroundColor: '#4E61B6',
                width: 60,
                height: 60,
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 3,
                zIndex: 1,
              }}
            >
              <Entypo name="plus" color="white" size={24} />
            </View>
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate('Transaction');
          },
        })}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallets}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Wallet width={size} height={size} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Login}
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

function AuthenticatedRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen
        name="Transaction"
        component={Transaction}
        options={({ navigation }) => ({
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => navigation.goBack()}
              tintColor="#fff"
            />
          ),
        })}
      />
      <Stack.Screen name="MyExpenses" component={MyExpenses} />
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
    </Stack.Navigator>
  );
}


function UnauthenticatedRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}


export default function Routes() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#4E61B6" />
      </View>
    );
  }

  // Renderiza as rotas com base no estado de autenticação
  return user ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />;
}
