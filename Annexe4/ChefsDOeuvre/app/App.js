/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */



import {

  Text,
  Button,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import React, {useState} from "react";

import { liste } from '../donnees/donnees.js'; // les données sous forme de tableau, je les recupere

function Galerie() {
  

  const [index, setIndex] = useState(0); 
  const [affichage, setAffichage] = useState(false); 

  let oeuvre = liste[index];
  const image = { uri: oeuvre.url };

  // let visisible = affichage ? styles.afficheDesc : styles.cacheDesc;



  
  // function clic() {
  //   index = index + 1;
  // }
  
  const gererButton = () =>{
    if(index < 3){
      setIndex(index+1);
    }else{
      setIndex(0);
    }
  }

  const recule = () =>{
    if(index > 0){
      setIndex(index- 1);
    }else{
      setIndex(3);
    }
  }

  function affiche() {
      setAffichage(!affichage)
  }

  return (

    <View style={styles.main}>
      <View style={styles.buttonContenant}>
        <TouchableHighlight style={styles.button} onPress={recule} title="avant" >
          <Text>precedent</Text>  
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={gererButton} title="suivant">
          <Text>suivant</Text>  
        </TouchableHighlight>
      </View>
      <Text>
        {oeuvre.name + " de " + oeuvre.artist}
      </Text>
      <Text>
        ({index + 1} of {liste.length})
      </Text>
      <Image style={styles.image} source={image}/>

    </View>
  );
}


const styles = StyleSheet.create(
  {
    image: {
      width: 160,
      height: 160,
    },

    main: {
      alignItems: 'center'
    },

    button: {
        padding:10,
        backgroundColor:"#467651",
        margin:5
    },
    
    buttonContenant:{
      flex: 1,
      flexDirection:'row',
      justifyContent: "center",
      alignItems:'center',
    }
  }

  
)
export default Galerie;
