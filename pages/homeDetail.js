//This is an example code for Bottom Navigation//
import React from 'react'
import { connect } from  'react-redux'
//import react in our code.
import { Text, View, StyleSheet } from 'react-native'
import { material } from 'react-native-typography'
import {
    Button
  } from "native-base";
//import all the basic component we have used
class HomeDetail extends React.Component {
  render() {
    return (
        <View style={{ flex: 1, justifyContent: "center",alignItems:"center" }}>
            <Text style={material.subheading,{color:"#000000",fontWeight:"bold",margin:5}}>Home detail page</Text>
            <Button block bordered dark onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={material.subheading,{color:"#000000",fontWeight:"bold",margin:5}}>Back to home page</Text>
            </Button>
        </View>
    );
  }
}
const styles = StyleSheet.create({
    teksTengah: {
      textAlign:'center',
    },
  });

HomeDetail.navigationOptions = {
    title: "Back",
    headerStyle: { backgroundColor: "#019cde" },
    headerTitleStyle: { color: "white" }
};
const mapStateToProps = state => {
  return {
    userinfo: state.reducer.userinfo
  };
};

export default connect(mapStateToProps)(HomeDetail);