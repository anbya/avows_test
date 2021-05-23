import React, { Component } from 'react';
import { connect } from  'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStackScreen } from "./homeStack";
import { AuthStackScreen } from "./authStack";
import {_retrieveData, _storeData,_clearData} from './localStorage'
import Splash from "./splash";

class home extends Component {
    componentDidMount = ()=> {
      _retrieveData('userToken').then( async (user)=>{
        this.props.dispatch({ type: "USER_INFO", payload: user });
        this.props.dispatch({ type: "HOME_STATE", payload: false });
      });
    }
    componentDidUpdate = ()=> {
      _retrieveData('userToken').then( async (user)=>{
        this.props.dispatch({ type: "USER_INFO", payload: user });
        this.props.dispatch({ type: "HOME_STATE", payload: false });
      });
    }
    render() {
      const RootStack = createStackNavigator();
      if (this.props.homeLoadingState === true) {
        return (
          <Splash />
        );
      }
      return (
        <NavigationContainer>
            <RootStack.Navigator headerMode="none">
              {this.props.userinfo=== null || this.props.userinfo === undefined || this.props.userinfo === "" ? (
                <RootStack.Screen
                  name="Auth"
                  component={AuthStackScreen}
                  options={{
                    animationEnabled: false
                  }}
                />
              ) : (
                <RootStack.Screen
                  name="App"
                  component={HomeStackScreen}
                  options={{
                    animationEnabled: false
                  }}
                />
              )}
            </RootStack.Navigator>
        </NavigationContainer>
      );
    }
}

const mapStateToProps = state => {
  return {
    userinfo: state.reducer.userinfo,
    homeLoadingState: state.reducer.homeLoadingState
  };
};

export default connect(mapStateToProps)(home);