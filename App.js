import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native-web';

// export const Button = ({title}) => {
   
//   return(
//     <Pressable 
//       style={{backgroundColor: 'blue', padding: 10, alignItems: 'center', marginBottom: 20 }}
//       onPress={() =>{
//       alert("Pressed")
//       }}>

//       <Text style={{color: 'white'}}>{title}</Text>
//   </Pressable>
//   );
// }


export default function App() {
  return (   

    <SafeAreaView style={{flex: 1}}>

      {/* <ScrollView>
      <View style={{height: '50px', backgroundColor: 'red'}}>
          <Text>This is a Text.</Text>
      </View>
      <View style={{height: '50px', backgroundColor: 'green'}}>
          <Text>This is a Text.</Text>
      </View>

      <View style={{marginTop: 50, marginLeft: 20}}>
        <Image 
          style={{height: 200}}
          source={require("./images/bird.jpg")}
          resizeMode="contain"        
        />
      </View>

      <View style={{marginTop: 50, marginLeft: 20}}>
        <Image 
          style={{height: 200}}
          source={{uri: "https://picsum.photos/100"}}
          resizeMode="contain"        
        />

      </View>


      <View>
        <Text>
          Where does it come from?
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          Where can I get some?
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </Text>
      </View>
      </ScrollView>

      <Button title="Press" /> */}


      <View style={{
        flex: 1, 
        flexDirection: "column",
        alignItems: "center"
        
        }}>
        <View style={styles.view1} />
        <View style={styles.view2} />
        <View style={styles.view3} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view1: {
    height: 150,
    width: 150,
    backgroundColor: 'red'
  },
  view2: {
    height: 150,
    width: 150,
    backgroundColor: 'green',
    alignSelf: "flex-end"
  },
  view3: {
    height: 150,
    width: 150,
    backgroundColor: 'blue'
  },

});
