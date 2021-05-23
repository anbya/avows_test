import React from 'react'
import { connect } from  'react-redux'
import { Text , View , AsyncStorage } from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {
  Button
} from "native-base";
import { material } from 'react-native-typography'

//import all the basic component we have used
class HomeScreen extends React.Component {
  
  refreshPage = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    const tokenParsing = JSON.parse(userToken);
    this.props.dispatch({ type: "USER_INFO", payload: tokenParsing });
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center",alignItems:"center" }}>
        <NavigationEvents onDidFocus={() => this.refreshPage()} />
        <Text style={material.subheading,{color:"#000000",fontWeight:"bold",margin:5}}>Wellcome {this.props.userinfo.EMAIL}</Text>
        <Button block bordered dark onPress={() => this.props.navigation.navigate('HomeDetail')}>
          <Text style={material.subheading,{color:"#000000",fontWeight:"bold",margin:5}}>Go to home detail page</Text>
        </Button>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return {
    userinfo: state.reducer.userinfo
  };
};

export default connect(mapStateToProps)(HomeScreen);