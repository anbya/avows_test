import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import moment from 'moment'
import { StyleSheet,View,ScrollView} from 'react-native'
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
  ListItem,
  Radio
} from "native-base";
import { material } from "react-native-typography";
import { Col, Row, Grid } from "react-native-easy-grid";
import Constants from 'expo-constants'
import {
  BarIndicator,
} from 'react-native-indicators';


class offerTab extends Component {
  constructor(props) {
      super(props);
      this.state = {
      orders: []
      };
  }
  componentDidMount = ()=> {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
        const dataToSend = {
            USER:this.props.userinfo,
        };
        axios.post(`https://avowstest.armyali.com/avowstest/getOrder`, dataToSend, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(res => {
            this.setState({
              ...this.state,
              orders:res.data.order
            })
        })
        .catch(error => {
          console.log(error);
        });
    });
    this.refreshScreen()
  }
  componentWillUnmount = ()=> {
    this._unsubscribe();
  }
  refreshScreen = ()=> {
    const dataToSend = {
        USER:this.props.userinfo,
    };
    axios.post(`https://avowstest.armyali.com/avowstest/getOrder`, dataToSend, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(res => {
        this.setState({
          ...this.state,
          orders:res.data.order
        })
    })
    .catch(error => {
      console.log(error);
    });
  }
  render() {
    return (
      <Container style={{paddingTop: Constants.statusBarHeight}}>
        <Grid>
          <Row size={1}>
            <Col>
              <View style={{backgroundColor:"#f5f5f5",flex: 1,justifyContent:'center', alignItems:'flex-start',padding:10,borderRadius:20}}>
                <Text style={{color:"#000000",fontSize:20,fontWeight:"bold"}}>Offer For You</Text>
              </View>
            </Col>
          </Row>
          <Row size={9}>
            <Col>
            {
                this.state.orders.length > 0?
                <ScrollView>
                  {this.state.orders.length > 0 && this.state.orders.map((order,index) =>
                    <View style={{backgroundColor:"#FFFFFF"}} key={index}>
                      <Grid>
                        <Row style={listStyle.borderBottom}>
                          <Col size={2}>
                            <View style={{flex: 1,justifyContent:'center', alignItems:'center',padding:10,borderRadius:20}}>
                              <Thumbnail square source={{ uri: `http://anbyafile.jaygeegroupapp.com/assets/img/detailbg.jpg` }} />
                            </View>
                          </Col>
                          <Col size={8}>
                            <View style={{flex: 1,justifyContent:'center', alignItems:'flex-start',padding:10,borderRadius:20}}>
                              <Text style={material.body2}>{order.detailOrder.namaItem}</Text>
                              <Text note>{order.detailOrder.qty} PCS</Text>
                              <Text style={material.body2}>Order Date : <Text note>{order.tanggal_order}</Text></Text>
                              <Text style={material.body2}>Order Status : <Text note>{order.status_order}</Text></Text>
                            </View>
                          </Col>
                        </Row>
                      </Grid>
                    </View>
                  )}
                </ScrollView>:<BarIndicator color='#000' />
            }
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
  }
})

const mapStateToProps = state => {
    return {
      userinfo: state.reducer.userinfo
    };
};
  
export default connect(mapStateToProps)(offerTab);