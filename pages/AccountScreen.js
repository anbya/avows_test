import React, { Component } from 'react';
import { connect } from "react-redux";
import { StyleSheet,View,ScrollView, TouchableOpacity} from 'react-native'
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Badge,
  Segment,
  Tab,
  Tabs,
  List,
  Radio,
  ListItem,
  Switch
} from "native-base";
import { material } from "react-native-typography";
import { Col, Row, Grid } from "react-native-easy-grid";
import dataDummy from "./dummyData";
import Constants from 'expo-constants'
import { FontAwesome5 } from '@expo/vector-icons';
import {_retrieveData, _storeData,_clearData} from '../App/localStorage'


class AccountScreen extends Component {
  constructor(props) {
      super(props);
      this.state = {
        userInfo:JSON.parse(this.props.userinfo),
        dataDummy: dataDummy
      };
  }
  _signOutAsync = () => {
    _clearData().then( async()=>{
      await this.props.dispatch({ type: "HOME_STATE", payload: true });
    });
  };
  render() {
    return (
      <Container style={{paddingTop: Constants.statusBarHeight}}>
        <Grid>
          <Row size={1}>
            <Col>
              <View style={{backgroundColor:"#f5f5f5",flex: 1,justifyContent:'center', alignItems:'flex-start',padding:10}}>
                <Text style={{color:"#000000",fontSize:20,fontWeight:"bold"}}>{this.state.userInfo.nama_user}</Text>
              </View>
            </Col>
          </Row>
          <Row size={9}>
            <Col>
              <ScrollView>
                <ListItem icon onPress={() => this._signOutAsync()}>
                    <Body>
                        <Grid>
                            <Row>
                                <Col size={1}>
                                    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                                        <Icon type="Ionicons" ios='ios-log-out' android="md-log-out" style={{fontSize: 30, color: '#019cde'}}/>
                                    </View>
                                </Col>
                                <Col size={9} style={{display:"flex",justifyContent:"center",alignItems:"flex-start"}}>
                                    <Text style={{color:"#2f3542",fontSize:17,fontWeight:"bold",marginLeft:10}}>Sign Out</Text>
                                </Col>
                            </Row>
                        </Grid>
                    </Body>
                </ListItem>
              </ScrollView>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}
const listStyle = StyleSheet.create({
  box:{
    backgroundColor:'#ffffff'
  },
  pad5:{
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  borderBottom:{
    borderBottomWidth:1,
    borderBottomColor:"#e6eaed"
  },
  borderAll:{
    borderWidth:1,
    borderColor:"#e6eaed"
  },
  containerButton: {
    backgroundColor: "transparent",
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})

const mapStateToProps = state => {
  return {
    userinfo: state.reducer.userinfo
  };
};

export default connect(mapStateToProps)(AccountScreen);