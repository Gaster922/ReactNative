import React from "react";
import { Text, View, Button, Image, StyleSheet  } from "react-native";
import { router } from "expo-router";


const image = require("../assets/images/noel.png");


export default function Index() {
  return (
    <View style={styles.container}>

      <Image source={image}></Image>


      <View style={styles.ButtonContainer}>
          <Button title="Ajouter un cadeau"
          onPress={() => router.push("/envoyerCadeaux")}
          ></Button>


        <Button title="Cadeau envoyer"
          onPress={() => router.push("/recevoirCadeaux")}
        ></Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  ButtonContainer:{
    flexDirection: "row",
    gap: 10 ,
  },

});
