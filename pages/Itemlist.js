//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text , View , ScrollView , StyleSheet , TouchableOpacity , Dimensions } from 'react-native'
import { material } from 'react-native-typography'
import { Card, Icon, Button } from 'react-native-elements'
import { FontAwesome5 } from '@expo/vector-icons';

//import all the basic component we have used
class Itemlist extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      artikelData: ["Item ke 1","Item ke 2","Item ke 3","Item ke 4","Item ke 5","Item ke 6","Item ke 7","Item ke 8","Item ke 9","Item ke 10"]
      };
  } 
  render() {
    return (
        <ScrollView style={{flex:1,flexDirection:'row'}} horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <View style={{padding:10}}>
              <TouchableOpacity style={[styles.containerButton]} onPress={() => this.props.navigation.push("search", { search: "Item ke 1" })}>
                <FontAwesome5 name={"archive"} size={30} color={"#019cde"} />
                <Text style={{color:"#019cde",fontSize:15,textAlign:"center",fontWeight:"bold"}}>Item ke 1</Text>
              </TouchableOpacity>
            </View>
            <View style={{padding:10}}>
              <TouchableOpacity style={[styles.containerButton]} onPress={() => this.props.navigation.push("search", { search: "Item ke 7" })}>
                <FontAwesome5 name={"archive"} size={30} color={"#019cde"} />
                <Text style={{color:"#019cde",fontSize:15,textAlign:"center",fontWeight:"bold"}}>Item ke 7</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{padding:10}}>
              <TouchableOpacity style={[styles.containerButton]} onPress={() => this.props.navigation.push("search", { search: "Item ke 2" })}>
                <FontAwesome5 name={"archive"} size={30} color={"#019cde"} />
                <Text style={{color:"#019cde",fontSize:15,textAlign:"center",fontWeight:"bold"}}>Item ke 2</Text>
              </TouchableOpacity>
            </View>
            <View style={{padding:10}}>
              <TouchableOpacity style={[styles.containerButton]} onPress={() => this.props.navigation.push("search", { search: "Item ke 8" })}>
                <FontAwesome5 name={"archive"} size={30} color={"#019cde"} />
                <Text style={{color:"#019cde",fontSize:15,textAlign:"center",fontWeight:"bold"}}>Item ke 8</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{padding:10}}>
              <TouchableOpacity style={[styles.containerButton]} onPress={() => this.props.navigation.push("search", { search: "Item ke 3" })}>
                <FontAwesome5 name={"archive"} size={30} color={"#019cde"} />
                <Text style={{color:"#019cde",fontSize:15,textAlign:"center",fontWeight:"bold"}}>Item ke 3</Text>
              </TouchableOpacity>
            </View>
            <View style={{padding:10}}>
              <TouchableOpacity style={[styles.containerButton]} onPress={() => this.props.navigation.push("search", { search: "Item ke 9" })}>
                <FontAwesome5 name={"archive"} size={30} color={"#019cde"} />
                <Text style={{color:"#019cde",fontSize:15,textAlign:"center",fontWeight:"bold"}}>Item ke 9</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{padding:10}}>
              <TouchableOpacity style={[styles.containerButton]} onPress={() => this.props.navigation.push("search", { search: "Item ke 4" })}>
                <FontAwesome5 name={"archive"} size={30} color={"#019cde"} />
                <Text style={{color:"#019cde",fontSize:15,textAlign:"center",fontWeight:"bold"}}>Item ke 4</Text>
              </TouchableOpacity>
            </View>
            <View style={{padding:10}}>
              <TouchableOpacity style={[styles.containerButton]} onPress={() => this.props.navigation.push("search", { search: "Item ke 10" })}>
                <FontAwesome5 name={"archive"} size={30} color={"#019cde"} />
                <Text style={{color:"#019cde",fontSize:15,textAlign:"center",fontWeight:"bold"}}>Item ke 10</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{padding:10}}>
              <TouchableOpacity style={[styles.containerButton]} onPress={() => this.props.navigation.push("search", { search: "Item ke 5" })}>
                <FontAwesome5 name={"archive"} size={30} color={"#019cde"} />
                <Text style={{color:"#019cde",fontSize:15,textAlign:"center",fontWeight:"bold"}}>Item ke 5</Text>
              </TouchableOpacity>
            </View>
            <View style={{padding:10}}>
              <TouchableOpacity style={[styles.containerButton]} onPress={() => this.props.navigation.push("search", { search: "Item ke 11" })}>
                <FontAwesome5 name={"archive"} size={30} color={"#019cde"} />
                <Text style={{color:"#019cde",fontSize:15,textAlign:"center",fontWeight:"bold"}}>Item ke 11</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{padding:10}}>
              <TouchableOpacity style={[styles.containerButton]} onPress={() => this.props.navigation.push("search", { search: "Item ke 6" })}>
                <FontAwesome5 name={"archive"} size={30} color={"#019cde"} />
                <Text style={{color:"#019cde",fontSize:15,textAlign:"center",fontWeight:"bold"}}>Item ke 6</Text>
              </TouchableOpacity>
            </View>
            <View style={{padding:10}}>
              <TouchableOpacity style={[styles.containerButton]} onPress={() => this.props.navigation.push("search", { search: "Item ke 12" })}>
                <FontAwesome5 name={"archive"} size={30} color={"#019cde"} />
                <Text style={{color:"#019cde",fontSize:15,textAlign:"center",fontWeight:"bold"}}>Item ke 12</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
    );
  }
}

const lebar = Dimensions.get("window").width / 4
const styles = StyleSheet.create({
    button: {
      backgroundColor: '#FFFFFF',
      borderRadius: 0,
      flexDirection: 'column',
      padding:1,
      margin:0
    },
    containerButton: {
      backgroundColor: "transparent",
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    }
})
export default (Itemlist);