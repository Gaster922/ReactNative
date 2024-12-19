import React, { useContext, useState } from "react";
import { Text, View, Button, TextInput, StyleSheet, FlatList  } from "react-native";
import Slider from "@react-native-community/slider";
import { TableauContext } from "../assets/TableauContext";

export default function RecevoirCadeaux() {
  const { tableau } = useContext(TableauContext);

  return (
    <View style={styles.container}>
      <Text>cadeau Enregistrer :</Text>
      <FlatList
      data={tableau} 
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text> Cadeau :  {item.cadeau} </Text>
          <Text> Destinataire :  {item.personne} </Text>
          <Text> Prix :  {item.prix} </Text>
          <Text> Désirabilité : {item.desirabilite} </Text>
        </View>

      )}/>

    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    fontSize:24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input:{
    borderWidth:1, 
    borderRadius: 5,
    padding:10,
    marginBottom:5
  },
  sousTitre:{
    fontSize: 16,
    marginVertical: 10,

  },
  slider:{
    width: "100%",
    height: 40,
    marginVertical: 10,
  },
  listItem: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },

};
