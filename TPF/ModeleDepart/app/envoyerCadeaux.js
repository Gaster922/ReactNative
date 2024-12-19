import React, { useContext, useState } from "react";
import { Text, View, Button, TextInput, StyleSheet, FlatList  } from "react-native";
import Slider from "@react-native-community/slider";
import { TableauContext } from "../assets/TableauContext";



export default function EnvoyerCadeaux() {

  const [personne, setPersonne] = useState("");
  const [cadeau, setCadeau] = useState("");
  const [prix, setPrix] = useState(1);
  const [desirabilite, setDesirabilite] = useState(1);

  const {tableau, setTableau} = useContext(TableauContext);



  const EnregisterCadeau = () => {
    if(personne && cadeau) {
      const newCadeau = {
        id: tableau.length + 1,
        personne,
        cadeau,
        prix,
        desirabilite,
      };

      setTableau([...tableau, newCadeau]);
      setPersonne("");
      setCadeau("");
      setPrix(1);
      setDesirabilite(1);
    } else {
      alert("remplir tout les champs");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Envoyer un Cadeaux</Text>


      <Text style={styles.sousTitre}>A qui envoyer le Cadeau</Text>
      <TextInput 
        style={styles.input}
        placeholder="Nom de la personne"
        value={personne}
        onChangeText={setPersonne}
      ></TextInput>

      <Text style={styles.sousTitre}>Quel cadeau envoyer ?</Text>
      <TextInput 
        style={styles.input}
        placeholder="Nom du cadeau"
        value={cadeau}
        onChangeText={setCadeau}
      ></TextInput>
      
      <Text style={styles.sousTitre}>combien coute le cadeau ?</Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={5}
        step={1}
        value={prix}
        onValueChange={setPrix}
      ></Slider>
      <Text>Prix: {prix}</Text>

      <Text style={styles.sousTitre}>desirabilite du cadeau</Text>
      <Slider
        style={styles.slider}
        minimumValue={1}
        maximumValue={5}
        step={1}
        value={desirabilite}
        onValueChange={setDesirabilite}
      ></Slider>
      <Text>Prix: {desirabilite}</Text>


      <Button title="Enregistrer le Cadeau" onPress={EnregisterCadeau}> </Button>

      {/* <Text>cadeau Enregistrer :</Text>
      <FlatList
      data={listeCadeau} 
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.listItem}>
          <Text> Cadeau :  {item.cadeau} </Text>
          <Text> Destinataire :  {item.personne} </Text>
          <Text> Prix :  {item.prix} </Text>
          <Text> Désirabilité : {item.desirabilite} </Text>
        </View>

      )}/> */}


    </View>
  );
}

const styles = StyleSheet.create ({
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


});