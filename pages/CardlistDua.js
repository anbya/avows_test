import React from 'react';
import axios from 'axios';
import { Text , View , ScrollView , StyleSheet, TouchableOpacity , Image , Dimensions } from 'react-native'
import { material } from 'react-native-typography'
import { FontAwesome } from '@expo/vector-icons';
import dummyDataCart from "./dummyDataCart";
import {
    Card,
    CardItem
} from "native-base";
  
class Cardlistdua extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      items: []
      };
  }
  componentDidMount = ()=> {
      axios.get(`https://avowstest.armyali.com/avowstest/items`)
      .then(res => {
          this.setState({ 
              ...this.state,
              items:res.data.result
          })
      })
  }
  formatNumber = (num) =>  {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  render() {
      console.log(this.props);
      const lebar = Dimensions.get("window").width / 3
      const testLebar = 50
    return (
        <ScrollView style={{flex:1, flexDirection:'row'}} horizontal={true} showsHorizontalScrollIndicator={false}>
            {this.state.items.length > 0 && this.state.items.map((item,index) =>
                <View style={{padding:2}} key={index}>
                <TouchableOpacity onPress={() => this.props.navigation.push("detailCard", { name: item.nama_item,data:item })}>
                    <Card style={{width:lebar}} key={index}>
                    <CardItem cardBody>
                        <Image source={{uri: `http://anbyafile.jaygeegroupapp.com/assets/img/detailbg.jpg`}} style={{height: lebar, width: null, flex: 1}}/>
                        <View style={{position:"absolute",top:2,left:2,flex:1,flexDirection:"row",alignItems:"center"}}>
                            <View style={{ flex: 1,flexDirection:"row",alignItems:"center"}}>
                                <FontAwesome name={"star"} size={15} color={"#019cde"} />
                                <Text style={{color:"#000000",fontSize:15,fontWeight:"bold",marginLeft:5}}>x</Text>
                            </View>
                        </View>
                    </CardItem>
                    <CardItem cardBody style={{backgroundColor:"#f5f5f5"}}>
                        <View style={{flex: 1,justifyContent: "center",alignItems:"flex-start",padding:2}}>
                            <Text numberOfLines={1} style={{color:"#000000",fontSize:15,fontWeight:"bold"}}>{item.nama_item}</Text>
                            <Text style={{color:"#019cde",fontSize:15,fontWeight:"bold"}}>Rp. {this.formatNumber(item.harga_item)}</Text>
                            <Text style={{color:"#000000",fontSize:13}}>xxx Terjual</Text>
                        </View>
                    </CardItem>
                    </Card>
                </TouchableOpacity>
                </View>
            )}
        </ScrollView>
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
export default Cardlistdua;