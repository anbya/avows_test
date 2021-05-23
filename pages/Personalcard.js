//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text , View , ScrollView , StyleSheet , Image , Dimensions } from 'react-native'
import { material } from 'react-native-typography'
import {
    Card,
    CardItem,
    Icon,
    Input,
    Item
  } from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid'
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

//import all the basic component we have used
class Personalcard extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      artikelData: ["Item ke 1","Item ke 2","Item ke 3","Item ke 4","Item ke 5","Item ke 6","Item ke 7","Item ke 8","Item ke 9","Item ke 10"]
      };
  } 
  render() {
    return (
        <View style={{ flex: 1,justifyContent: "center",alignItems:"center",padding:10}}>
            <Card style={{width:"100%"}}>
              <CardItem cardBody>
                <Grid>
                  <Row>
                    <Col size={5} style={{padding:15}}>
                      <View style={{ flex: 1,flexDirection:"row",alignItems:"center"}}>
                        <FontAwesome5 name={"wallet"} size={15} color={"#019cde"} />
                        <Text style={{color:"#000000",fontSize:15,fontWeight:"bold",marginLeft:5}}>Rp xxx.xxx.xxx</Text>
                      </View>
                      <View style={{ flex: 1,flexDirection:"row",alignItems:"center"}}>
                        <Text style={{color:"#5b5b5b",fontSize:15}}>Saldo ewallet anda</Text>
                      </View>
                    </Col>
                    <Col size={5} style={{padding:15}}>
                      <View style={{ flex: 1,flexDirection:"row",alignItems:"center"}}>
                        <FontAwesome5 name={"coins"} size={15} color={"#019cde"} />
                        <Text style={{color:"#000000",fontSize:15,fontWeight:"bold",marginLeft:5}}>xxx</Text>
                      </View>
                      <View style={{ flex: 1,flexDirection:"row",alignItems:"center"}}>
                        <Text style={{color:"#5b5b5b",fontSize:15}}>koin anda</Text>
                      </View>
                    </Col>
                  </Row>
                </Grid>
              </CardItem>
            </Card>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#FFFFFF',
      borderRadius: 0,
      flexDirection: 'column',
      padding:1,
      margin:0
    },
    padBottom:{
      paddingBottom:10
    }
})
export default (Personalcard);