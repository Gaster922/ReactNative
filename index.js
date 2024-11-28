import { Text, View, StyleSheet } from "react-native";
import React from "react"; 

// composant fonctionnel parce qu'il vient d'une fonction
 function Chanson() {
  const nom = "Dude"
  return (
    <View style={styles.conteneur}>
      <Text style={styles.texte}>{nom}</Text>
    </View>
  );
} 

// sans boucle
function Playlist() {
  return (
    <View>
      <View  style={styles.flexBro}>
        <Chanson style={{flex:1}}></Chanson>
        <Chanson style={{flex:1}}></Chanson>  
      </View>
      <View  style={styles.flexBro}>
        <Chanson style={{flex:1}}></Chanson>
        <Chanson style={{flex:1}}></Chanson>
      </View>
    </View>

  )
} 

function creerTab() {
  let chanson = []

/*   for(let i = 0; i < 5; i++) {
    chanson.push(<Chanson key={i}/>) // Il faut mettre une key dans pour les identifier lorsqu'on les composantes se trouvent dans des tableaux
  } */

  chanson = Array.from( {length:5}, (_, index) => <Chanson key={index}/>)
  return chanson
}

// avec une boucle
/* function Playlist() {
  return (
    <View>
      {creerTab()}
    </View>

  )
}  */
// composant function avec une arrow function

/* const Chanson = () => {
  const nom = "Les étoiles filantes"
  return (
    <View>
      <Text>{nom}</Text>
    </View>
  );
} */

/* class Chanson extends React.Component {
    render() {
      const nom = 'je suis ugly af'
      return (
        <Text>{nom}</Text>
      )
    }
}
 */
const styles = StyleSheet.create({
    conteneur: {
      backgroundColor: '#44EE22',
      margin: 10,
      padding: 10,
      borderRadius: 7,
    }, 

    texte: {
      fontSize: 23,
      fontStyle: 'italic',
    },

    flexBro: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
})

export default Playlist