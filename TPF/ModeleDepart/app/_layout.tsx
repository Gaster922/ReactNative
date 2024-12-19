import { Stack } from "expo-router";
import { TableauProvider } from "../assets/TableauContext";

export default function RootLayout() {
  return (
  <TableauProvider>
    <Stack> 
      <Stack.Screen
          name="index"
          options={{
            title: "Accueil",
            headerStyle: { backgroundColor: "#f8f9fa" },
            headerTintColor: "#333",
          }}
        />
        <Stack.Screen
          name="envoyerCadeaux"
          options={{
            title: "Envoyer",
            headerStyle: { backgroundColor: "#f8f9fa" },
            headerTintColor: "#333",
          }}
        />
        <Stack.Screen
          name="recevoirCadeaux"
          options={{
            title: "Recus",
            headerStyle: { backgroundColor: "#f8f9fa" },
            headerTintColor: "#333",
          }}
        />
    </Stack>
  </TableauProvider>
  );
}
