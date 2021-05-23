import React from 'react'
import { connect } from  'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text , View , ScrollView, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import {
  Icon,
  Container,
  Input,
  Item,
  Button
} from "native-base";
import { material } from 'react-native-typography'
import { Col, Row, Grid } from 'react-native-easy-grid'
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import CarouselScreen from './carouselScreen'
import Itemlist from './Itemlist'
import Kategorilist from './kategorilist'
import Cardlist from './Cardlist'
import CardlistSatu from './CardlistSatu'
import CardlistDua from './CardlistDua'
class HomeScreen extends React.Component {
  render() {
    return (
      <Container style={{paddingTop: Constants.statusBarHeight}}>
        <Grid>
          <Row size={1}>
            <Col>
              <View style={{ flex: 1, justifyContent: "center",alignItems:"center",backgroundColor:"#f5f5f5" }}>
                <Row>
                  <Col size={9}>
                    <View style={{ flex: 1, justifyContent: "center",alignItems:"center",padding:10}}>
                      <Item style={{backgroundColor:"#ffffff",paddingLeft:10,paddingRight:10,width:"100%",height:"100%"}} onPress={() => this.props.navigation.push("search", { search: "" })}>
                        <Icon name="ios-search" />
                        <Text style={{color:"#019cde",fontSize:15,textAlign:"center",fontWeight:"bold"}}>Search</Text>
                      </Item>
                    </View>
                  </Col>
                  <Col size={1}>
                    <View style={{ flex: 1, justifyContent: "center",alignItems:"center"}}>
                      <Button transparent onPress={() => this.props.navigation.push("mail", { name: "Mail " })}>
                        <Ionicons name={"md-mail"} size={25} color={"#019cde"} />
                      </Button>
                    </View>
                  </Col>
                </Row>
              </View>
            </Col>
          </Row>
          <Row size={9}>
            <Col>
              <ScrollView>
                <Row>
                  <Col>
                    <CarouselScreen />
                  </Col>
                </Row>
                <Row style={{padding:5}}>
                  <Col>
                    <Row>
                      <Col size={7} style={{paddingLeft:10,paddingTop:1,paddingBottom:5,paddingRight:10}}>
                        <View style={{ flex: 1, justifyContent: "center",alignItems:"flex-start"}}>
                          <Text style={{color:"#000000",fontSize:20,fontWeight:"bold"}}>Kategori</Text>
                        </View>
                      </Col>
                      <Col size={3} style={{paddingLeft:10,paddingTop:1,paddingBottom:5,paddingRight:10}}>
                        <View style={{ flex: 1, justifyContent: "center",alignItems:"center"}}>
                          <Button transparent onPress={() => alert("it's work")}>
                            <Text style={{color:"#019cde",fontSize:15}}>Lihat semua</Text>
                          </Button>
                        </View>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row style={{padding:5}}>
                  <Col>
                    <Itemlist navigation={this.props.navigation} />
                  </Col>
                </Row>
                <Row style={{padding:5}}>
                  <Col>
                    <Row>
                      <Col size={7} style={{paddingLeft:10,paddingTop:1,paddingBottom:5,paddingRight:10}}>
                        <View style={{ flex: 1, justifyContent: "center",alignItems:"flex-start"}}>
                          <Text style={{color:"#000000",fontSize:20,fontWeight:"bold"}}>Flashsale</Text>
                        </View>
                      </Col>
                      <Col size={3} style={{paddingLeft:10,paddingTop:1,paddingBottom:5,paddingRight:10}}>
                        <View style={{ flex: 1, justifyContent: "center",alignItems:"center"}}>
                          <Button transparent onPress={() => alert("it's work")}>
                            <Text style={{color:"#019cde",fontSize:15}}>Lihat semua</Text>
                          </Button>
                        </View>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row style={{padding:5}}>
                  <Col>
                    <CardlistSatu navigation={this.props.navigation} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <CarouselScreen />
                  </Col>
                </Row>
                <Row style={{padding:5}}>
                  <Col>
                    <Row>
                      <Col size={7} style={{paddingLeft:10,paddingTop:1,paddingBottom:5,paddingRight:10}}>
                        <View style={{ flex: 1, justifyContent: "center",alignItems:"flex-start"}}>
                          <Text style={{color:"#000000",fontSize:20,fontWeight:"bold"}}>Produk terlaris</Text>
                        </View>
                      </Col>
                      <Col size={3} style={{paddingLeft:10,paddingTop:1,paddingBottom:5,paddingRight:10}}>
                        <View style={{ flex: 1, justifyContent: "center",alignItems:"center"}}>
                          <Button transparent onPress={() => alert("it's work")}>
                            <Text style={{color:"#019cde",fontSize:15}}>Lihat semua</Text>
                          </Button>
                        </View>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row style={{padding:5}}>
                  <Col>
                    <CardlistDua navigation={this.props.navigation} />
                  </Col>
                </Row>
              </ScrollView>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
}

export default HomeScreen;