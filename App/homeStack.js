import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native';
import HometestScreen from '../pages/HometestScreen';
import AccountScreen from '../pages/AccountScreen';
import Whislist from '../pages/whislist';
import Mail from '../pages/mail';
import Notification from '../pages/notification';
import SearchList from '../pages/searchList';
import OfferTab from '../pages/offerTab';
import CartTab from '../pages/cartTab';
import DetailCard from '../pages/detailCard';
const HomeStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#019cde',
    }}
  >
    <Tabs.Screen
      name="Home"
      component={HometestScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tabs.Screen
      name="Transaksi"
      component={OfferTab}
      options={{
        tabBarLabel: 'Transaksi',
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="receipt" color={color} size={size} />
        ),
      }}
    />
    <Tabs.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tabs.Navigator>
);
export const HomeStackScreen = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={TabsScreen}
        options={{ 
          headerShown: false
        }}
      />
      <HomeStack.Screen
        name="search"
        component={SearchList}
        options={{ 
          headerShown: false
        }}
      />
      <HomeStack.Screen
        name="mail"
        component={Mail}
        options={({ route }) => ({
          title: route.params.name,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          )
        })}
      />
      <HomeStack.Screen
        name="detailCard"
        component={DetailCard}
        options={({ route }) => ({
          headerShown: false
        })}
      />
      <HomeStack.Screen
        name="cart"
        component={CartTab}
        options={{ 
          headerShown: false
        }}
      />
    </HomeStack.Navigator>
);