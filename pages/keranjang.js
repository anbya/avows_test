import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import moment from 'moment'
import Constants from 'expo-constants'
import { StyleSheet,View,ScrollView, TouchableOpacity, Dimensions, Image} from 'react-native'
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
import dataDummy from "./dummyData";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";


class keranjang extends Component {
  constructor(props) {
    super(props);
    this.state = {
    dataDummy: dataDummy,
    selectedIndex:0,
    whislsitParameter:false
    };
  } 
  setSelectedIndex = event => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);
    this.setState({
      ...this.state,
      selectedIndex:selectedIndex
    })
  }
  render() {
    const lebar = Dimensions.get("window").width / 2 - 20
    const { selectedIndex } = this.state
    return (
      <Container style={{paddingTop: Constants.statusBarHeight}}>
        <Grid>
          <Row size={1}>
            <Col>
              <View style={{ flex: 1, justifyContent: "center",alignItems:"center",backgroundColor:"#f5f5f5" }}>
                <Row>
                  <Col size={1}>
                    <View style={{ flex: 1, justifyContent: "center",alignItems:"center"}}>
                      <View>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                          <MaterialCommunityIcons name={"arrow-left"} size={25} color={"#000000"} />
                        </Button>
                      </View>
                    </View>
                  </Col>
                  <Col size={7}>
                    <View style={{ flex: 1, justifyContent: "center",alignItems:"flex-start"}}>
                      <Text numberOfLines={1} style={{color:"#000000",fontSize:20,fontWeight:"bold"}}>{this.props.route.params.name}</Text>
                    </View>
                  </Col>
                  <Col size={2}>
                    <View style={{ flex: 1, justifyContent: "center",alignItems:"center"}}>
                      <View>
                        <Button transparent onPress={() => alert("it's work")}>
                          <FontAwesome5 name={"shopping-cart"} size={25} color={"#019cde"} />
                        </Button>
                      </View>
                    </View>
                  </Col>
                </Row>
              </View>
            </Col>
          </Row>
          <Row size={8}>
            <Col>
              <ScrollView style={{paddingLeft:0,backgroundColor:"#f5f5f5"}}>
                <View>
                    <ScrollView
                      horizontal
                      pagingEnabled
                      onMomentumScrollEnd={this.setSelectedIndex}
                      ref={this.scrollRef}
                      showsVerticalScrollIndicator ={false}
                      showsHorizontalScrollIndicator={false}
                    >
                        <View key={0} style={{height:"100%",width:Dimensions.get("window").width}}>
                            <Content>
                                <Image
                                    source={{
                                    uri: `https://via.placeholder.com/300`
                                    }}
                                    style={{ height: 300, width: null, flex: 1 }}
                                />
                            </Content>
                        </View>
                        <View key={1} style={{height:"100%",width:Dimensions.get("window").width}}>
                            <Content>
                                <Image
                                    source={{
                                    uri: `https://via.placeholder.com/300`
                                    }}
                                    style={{ height: 300, width: null, flex: 1 }}
                                />
                            </Content>
                        </View>
                        <View key={2} style={{height:"100%",width:Dimensions.get("window").width}}>
                            <Content>
                                <Image
                                    source={{
                                    uri: `https://via.placeholder.com/300`
                                    }}
                                    style={{ height: 300, width: null, flex: 1 }}
                                />
                            </Content>
                        </View>
                    </ScrollView>
                    <View style={listStyle.carouselTag1}>
                      <Text style={{color:"#000000",fontSize:15}}>{selectedIndex+1}/3</Text>
                    </View>
                </View>
                <View>
                  <Grid>
                    <Row>
                      <Col>
                        <View style={listStyle.content1}>
                          <Row style={{paddingTop:5,paddingBottom:5}}>
                            <Col size={8}>
                              <Text style={{color:"#000000",fontSize:20,fontWeight:"bold"}}>Rp. xxx.xxx.xxx</Text>
                            </Col>
                            <Col size={2}>
                              <View style={{ flex: 1, justifyContent: "center",alignItems:"center",backgroundColor:"#ffffff"}}>
                                <TouchableOpacity onPress={() => this.setState({ ...this.state,whislsitParameter:!this.state.whislsitParameter})}>
                                  <View style={{ flex: 1, justifyContent: "center",alignItems:"center",flexDirection:"row"}}>
                                    <FontAwesome
                                      name={this.state.whislsitParameter==false?"heart-o":"heart"}
                                      size={25}
                                      color={"#019cde"}
                                    />
                                  </View>
                                </TouchableOpacity>
                              </View>
                            </Col>
                          </Row>
                          <Row style={{paddingTop:5,paddingBottom:5}}>
                            <Col>
                              <Text style={{color:"#000000",fontSize:15}}>{this.props.route.params.name}</Text>
                            </Col>
                          </Row>
                          <Row style={{paddingTop:5,paddingBottom:5}}>
                            <Col>
                              <View style={{ flex: 1,flexDirection:"row",alignItems:"center"}}>
                                <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                                  <FontAwesome name={"star"} size={15} color={"#019cde"} />
                                  <Text style={{color:"#000000",fontSize:15,fontWeight:"bold",marginLeft:5}}>x.x</Text>
                                  <Text style={{color:"#5e5e5e",fontSize:15,marginLeft:5}}>(xxx)</Text>
                                </View>
                                <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                                  <Text style={{color:"#5e5e5e",fontSize:15,marginLeft:10,marginRight:10}}>|</Text>
                                </View>
                                <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                                  <Text style={{color:"#000000",fontSize:15,fontWeight:"bold",marginLeft:5}}>Diskusi</Text>
                                  <Text style={{color:"#5e5e5e",fontSize:15,marginLeft:5}}>(xxx)</Text>
                                </View>
                                <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                                  <Text style={{color:"#5e5e5e",fontSize:15,marginLeft:10,marginRight:10}}>|</Text>
                                </View>
                                <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                                  <Text style={{color:"#000000",fontSize:15,fontWeight:"bold",marginLeft:5}}>Terjual</Text>
                                  <Text style={{color:"#5e5e5e",fontSize:15,marginLeft:5}}>(xxx)</Text>
                                </View>
                              </View>
                            </Col>
                          </Row>
                          <Row style={{paddingTop:5,paddingBottom:5}}>
                            <Col>
                              <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                                <Text style={{color:"#000000",fontSize:15}}>Dijual oleh</Text>
                                <Text style={{color:"#000000",fontSize:15,fontWeight:"bold",marginLeft:5}}>xxxxxxxxxx</Text>
                              </View>
                            </Col>
                          </Row>
                        </View>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <View style={listStyle.content2}>
                          <Row>
                            <Col>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"flex-start",marginTop:5,marginBottom:5}}>
                                <Text style={{color:"#000000",fontSize:15,fontWeight:"bold"}}>Informasi Produk</Text>
                              </View>
                            </Col>
                          </Row>
                          <Row>
                            <Col size={4}>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"flex-start",marginTop:5,marginBottom:5}}>
                                <Text style={{color:"#5e5e5e",fontSize:15}}>Berat</Text>
                              </View>
                            </Col>
                            <Col size={6}>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"flex-end",marginTop:5,marginBottom:5}}>
                                <Text style={{color:"#5e5e5e",fontSize:15}}>xxx xxx</Text>
                              </View>
                            </Col>
                          </Row>
                          <Row>
                            <Col size={4}>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"flex-start",marginTop:5,marginBottom:5}}>
                                <Text style={{color:"#5e5e5e",fontSize:15}}>Kondisi</Text>
                              </View>
                            </Col>
                            <Col size={6}>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"flex-end",marginTop:5,marginBottom:5}}>
                                <Text style={{color:"#5e5e5e",fontSize:15}}>xxxxxx</Text>
                              </View>
                            </Col>
                          </Row>
                          <Row>
                            <Col size={4}>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"flex-start",marginTop:5,marginBottom:5}}>
                                <Text style={{color:"#5e5e5e",fontSize:15}}>Pesanan Min</Text>
                              </View>
                            </Col>
                            <Col size={6}>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"flex-end",marginTop:5,marginBottom:5}}>
                                <Text style={{color:"#5e5e5e",fontSize:15}}>xxxxxx</Text>
                              </View>
                            </Col>
                          </Row>
                          <Row>
                            <Col size={4}>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"flex-start",marginTop:5,marginBottom:5}}>
                                <Text style={{color:"#5e5e5e",fontSize:15}}>Kategori</Text>
                              </View>
                            </Col>
                            <Col size={6}>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"flex-end",marginTop:5,marginBottom:5}}>
                                <Text style={{color:"#5e5e5e",fontSize:15}}>xxxxxx</Text>
                              </View>
                            </Col>
                          </Row>
                          <Row>
                            <Col size={4}>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"flex-start",marginTop:5,marginBottom:5}}>
                                <Text style={{color:"#5e5e5e",fontSize:15}}>Etalase</Text>
                              </View>
                            </Col>
                            <Col size={6}>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"flex-end",marginTop:5,marginBottom:5}}>
                                <Text style={{color:"#5e5e5e",fontSize:15}}>xxxxxx</Text>
                              </View>
                            </Col>
                          </Row>
                        </View>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <View style={listStyle.content2}>
                          <Row>
                            <Col>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"flex-start",marginTop:5,marginBottom:5}}>
                                <Text style={{color:"#000000",fontSize:15,fontWeight:"bold"}}>Deskripsi Produk</Text>
                              </View>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"flex-start",marginTop:5,marginBottom:5}}>
                                <Text numberOfLines={5} style={{color:"#5e5e5e",fontSize:15}}>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                              </View>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"flex-start",marginTop:5,marginBottom:5}}>
                                <TouchableOpacity onPress={() => alert("it's work")}>
                                  <Text numberOfLines={1} style={{color:"#019cde",fontSize:15,fontWeight:"bold"}}>Baca Selengkapnya</Text>
                                </TouchableOpacity>
                              </View>
                            </Col>
                          </Row>
                        </View>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <View style={listStyle.content2}>
                          <Row>
                            <Col>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"flex-start",marginTop:5,marginBottom:5}}>
                                <Text style={{color:"#000000",fontSize:15,fontWeight:"bold"}}>Deskripsi Produk</Text>
                              </View>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"flex-start",marginTop:5,marginBottom:5}}>
                                <Text numberOfLines={5} style={{color:"#5e5e5e",fontSize:15}}>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                              </View>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <View style={{display:"flex",justifyContent:"center",alignItems:"flex-start",marginTop:5,marginBottom:5}}>
                                <TouchableOpacity onPress={() => alert("it's work")}>
                                  <Text numberOfLines={1} style={{color:"#019cde",fontSize:15,fontWeight:"bold"}}>Baca Selengkapnya</Text>
                                </TouchableOpacity>
                              </View>
                            </Col>
                          </Row>
                        </View>
                      </Col>
                    </Row>
                  </Grid>
                </View>
              </ScrollView>
            </Col>
          </Row>
          <Row size={1}>
            <Col>
              <View style={{ flex: 1, justifyContent: "center",alignItems:"center",backgroundColor:"#f5f5f5"}}>
                <TouchableOpacity style={listStyle.addCart} onPress={() => alert("it's work")}>
                  <View style={{ flex: 1, justifyContent: "center",alignItems:"center",flexDirection:"row"}}>
                    <FontAwesome5 name={"cart-plus"} size={25} color={"#ffffff"} />
                    <Text numberOfLines={1} style={{color:"#ffffff",fontSize:25,fontWeight:"bold"}}> Keranjang</Text>
                  </View>
                </TouchableOpacity>
              </View>
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
  pad5:{
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5
  },
  circleDiv:{
    position:"absolute",
    bottom: 15,
    height: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  whiteCircle:{
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 5,
    backgroundColor: "#000000"
  },
  carouselTag1:{
    position:"absolute",
    bottom:5,
    left:5,
    padding:5,
    backgroundColor:"rgba(255, 255, 255, 0.8)"
  },
  content1:{
    backgroundColor:"#ffffff",
    flex:1,
    justifyContent:"center",
    alignItems:"flex-start",
    paddingLeft:10,
    paddingTop:5,
    paddingRight:10,
    paddingBottom:5,
    marginBottom:5
  },
  content2:{
    backgroundColor:"#ffffff",
    flex:1,
    justifyContent:"center",
    alignItems:"flex-start",
    paddingLeft:10,
    paddingTop:5,
    paddingRight:10,
    paddingBottom:5,
    marginTop:5,
    marginBottom:5
  },
  addCart:{
    backgroundColor:"#019cde",
    width:"80%",
    height:"60%",
    borderRadius:15
  }
})

export default keranjang;