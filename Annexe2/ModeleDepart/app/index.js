import { Text, View, Image, StyleSheet } from "react-native";

const imageVideo = require("../assets/images/video.jpg");
const imagePlay = require("../assets/images/play.png");
const imageSon = require("../assets/images/sound.png");
const imageFullScreen = require("../assets/images/full-screen.png");
const imageHd = require("../assets/images/hd-sign.png");



export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={imageVideo}></Image>
      
      <View style={styles.conteneur}>
        <View style={styles.row}>
          <Image source={imagePlay}></Image>
          <Image source={imageSon}></Image>
          <View style={styles.progressBar}></View>
          <Image source={imageHd}></Image>
          <Image source={imageFullScreen}></Image>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  conteneur:{
    width:'100%',
    backgroundColor:'#000000',
  },

  row:{
    display:'flex',
    flexDirection:'row',
    justifyContent: "center",
    alignItems:'center'
  },

  progressBar:{
    height:'5',
    width:'250',
    backgroundColor:"#065634",
  },

  padding:{
    padding:'10',
  },

  
});
