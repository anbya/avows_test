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
class AccountDetail extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center",alignItems:"center" }}>
        <Text style={material.subheading,{color:"#000000",fontWeight:"bold",margin:5}}>Account detail page</Text>
        <Button block bordered dark onPress={() => this.props.navigation.navigate('Account')}>
            <Text style={material.subheading,{color:"#000000",fontWeight:"bold",margin:5}}>Back to Account page</Text>
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

AccountDetail.navigationOptions = {
    title: "Back",
    headerStyle: { backgroundColor: "#019cde" },
    headerTitleStyle: { color: "white" }
};
const mapStateToProps = state => {
  return {
    userinfo: state.reducer.userinfo
  };
};

export default connect(mapStateToProps)(AccountDetail);