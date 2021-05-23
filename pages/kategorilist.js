//This is an example code for Bottom Navigation//
import React from 'react';
//import react in our code.
import { Text , View , ScrollView , StyleSheet , TouchableOpacity , Dimensions } from 'react-native'
import { material } from 'react-native-typography'
import { Card, Icon, Button } from 'react-native-elements'
import { FontAwesome5 } from '@expo/vector-icons';

//import all the basic component we have used
class kategoriList extends React.Component {
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
                <TouchableOpacity style={[styles.containerButton]} onPress={() => alert("it's work")}>
                    <FontAwesome5 name={"box"} size={30} color={"#019cde"} />
                    <Text style={{color:"#5b5b5b",fontSize:15,textAlign:"center"}}>Kategori satu</Text>
                </TouchableOpacity>
            </View>
            <View style={{padding:10}}>
                <TouchableOpacity style={[styles.containerButton]} onPress={() => alert("it's work")}>
                    <FontAwesome5 name={"box"} size={30} color={"#019cde"} />
                    <Text style={{color:"#5b5b5b",fontSize:15,textAlign:"center"}}>Kategori dua</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{padding:10}}>
                <TouchableOpacity style={[styles.containerButton]} onPress={() => alert("it's work")}>
                    <FontAwesome5 name={"box"} size={30} color={"#019cde"} />
                    <Text style={{color:"#5b5b5b",fontSize:15,textAlign:"center"}}>Kategori tiga</Text>
                </TouchableOpacity>
            </View>
            <View style={{padding:10}}>
                <TouchableOpacity style={[styles.containerButton]} onPress={() => alert("it's work")}>
                    <FontAwesome5 name={"box"} size={30} color={"#019cde"} />
                    <Text style={{color:"#5b5b5b",fontSize:15,textAlign:"center"}}>Kategori empat</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{padding:10}}>
                <TouchableOpacity style={[styles.containerButton]} onPress={() => alert("it's work")}>
                    <FontAwesome5 name={"box"} size={30} color={"#019cde"} />
                    <Text style={{color:"#5b5b5b",fontSize:15,textAlign:"center"}}>Kategori lima</Text>
                </TouchableOpacity>
            </View>
            <View style={{padding:10}}>
                <TouchableOpacity style={[styles.containerButton]} onPress={() => alert("it's work")}>
                    <FontAwesome5 name={"box"} size={30} color={"#019cde"} />
                    <Text style={{color:"#5b5b5b",fontSize:15,textAlign:"center"}}>Kategori enam</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{padding:10}}>
                <TouchableOpacity style={[styles.containerButton]} onPress={() => alert("it's work")}>
                    <FontAwesome5 name={"box"} size={30} color={"#019cde"} />
                    <Text style={{color:"#5b5b5b",fontSize:15,textAlign:"center"}}>Kategori tujuh</Text>
                </TouchableOpacity>
            </View>
            <View style={{padding:10}}>
                <TouchableOpacity style={[styles.containerButton]} onPress={() => alert("it's work")}>
                    <FontAwesome5 name={"box"} size={30} color={"#019cde"} />
                    <Text style={{color:"#5b5b5b",fontSize:15,textAlign:"center"}}>Kategori delapan</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{padding:10}}>
                <TouchableOpacity style={[styles.containerButton]} onPress={() => alert("it's work")}>
                    <FontAwesome5 name={"box"} size={30} color={"#019cde"} />
                    <Text style={{color:"#5b5b5b",fontSize:15,textAlign:"center"}}>Kategori sembilan</Text>
                </TouchableOpacity>
            </View>
            <View style={{padding:10}}>
                <TouchableOpacity style={[styles.containerButton]} onPress={() => alert("it's work")}>
                    <FontAwesome5 name={"box"} size={30} color={"#019cde"} />
                    <Text style={{color:"#5b5b5b",fontSize:15,textAlign:"center"}}>Kategori sepuluh</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{padding:10}}>
                <TouchableOpacity style={[styles.containerButton]} onPress={() => alert("it's work")}>
                    <FontAwesome5 name={"box"} size={30} color={"#019cde"} />
                    <Text style={{color:"#5b5b5b",fontSize:15,textAlign:"center"}}>Kategori sebelas</Text>
                </TouchableOpacity>
            </View>
            <View style={{padding:10}}>
                <TouchableOpacity style={[styles.containerButton]} onPress={() => alert("it's work")}>
                    <FontAwesome5 name={"box"} size={30} color={"#019cde"} />
                    <Text style={{color:"#5b5b5b",fontSize:15,textAlign:"center"}}>Kategori dua belas</Text>
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
        alignItems:'center',
        width:lebar,
        height:lebar
      }
})
export default (kategoriList);