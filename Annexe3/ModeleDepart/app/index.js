import { Text, View, Button, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, {useState} from "react";


function texteAffiche(clic){
  if (clic){
    return 'j\'aime';
  }else{
    return 'j\'aime pas du tout';
  }
}

export default function Index() {
  const nomButton = 'clic';
  // const [clic, setValeur] = useState(1); // variable d'etat, hook, conserve la valeur
  const [clic, setClic] = useState(false);
  const gestion = () => {setClic(!clic)};
  const affichage = clic ? style.img : style.no;
  
  const imageHeart = require("../assets/images/heart.png");
  const gererButton = () =>{
    setValeur( valeur+1)
  }

 

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={gestion}>
      <Image style={[style.img, clic && style.no]} source={imageHeart}></Image>      
        {/* <Button title={nomButton} onPress={gererButton}></Button> */}
      </TouchableOpacity>

      <Text style={style.text}> {texteAffiche(clic)} </Text>

    </View>
  );
}

const style = StyleSheet.create({
  img:{
    tintColor: "#ff0000"
  },
  no:{
    tintColor:"#f1f1f1"
  },
  text:{
    justifyContent: "center",
    alignItems: "center",
  }

});