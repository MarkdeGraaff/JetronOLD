import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import firestore from '@react-native-firebase/firestore'

// const textDocument = await firestore().collection("test-data-set")
// .doc("wKj4Zxz1DDhkJzm2VgMa").get()

const BLUEDARK = "#699cd3";
const BLUELIGHT = "#a5bfe4";
const WHITE = "#FFFFFF";

export default function HomeScreen({ navigation }) {
  state = {
    testset: {
      text: ""
    }
  }
  constructor(props) {
    super(props);
    this.getText();
    this.comp = firebase().collection('testset')
    .doc("wKj4Zxz1DDhkJzm2VgMa").onSnapshot(doc => {
      this.setState({
        testset : {
          text: doc.data().text
        }})
    })
  }
  getText = async () => {
    const textDocument = await firestore().collection("testset")
    .doc("wKj4Zxz1DDhkJzm2VgMa").get()
    console.log(textDocument);
  }
    return (
        <View style={styles.container}>
            <Text>Data: {this.state.testset.text}</Text>
            <View style={styles.circle}><Text style={styles.emoticontxt}><FontAwesomeIcon icon={faMessage} size={25} color={WHITE} /></Text></View>
            <View style={styles.card_template}>
                <Image
                style={styles.text_container}
                source={{uri: 'https://i.pinimg.com/474x/06/9b/52/069b5288b5d0734e35ce0c58e2ebef8b.jpg'}}
                />
                <View style={styles.text_container}>
                    <Text style={styles.card_title}>Messages</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop:"115%",
    },
    card_template:{
      width: 500,
      height: 120,
      boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
    },
    card_image: {
      width: 500,
      height: 120,
      borderRadius : 10
    },
    text_container:{
      position: "absolute",
      width: 500,
      height: 120,
      bottom:0,
      padding: 5,
      backgroundColor: "rgba(0,0,0, 0.3)",
      borderBottomLeftRadius : 10,
      borderBottomRightRadius: 10,
    },
    card_title: {
        alignSelf: "center",
        alignItems: "center",
        fontSize: 20,
       color: "white",
  
    },
    circle : {
      position: 'absolute',
      zIndex: 2,
      marginLeft: 350,
      width: 50,
      height: 50,
      borderRadius: 100/2,
      backgroundColor: BLUEDARK,
    },
    emoticontxt : {
      marginLeft: 13,
      marginTop: 13,
    }
  });