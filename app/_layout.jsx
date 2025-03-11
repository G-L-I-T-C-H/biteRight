import { Stack } from "expo-router";
import "../global.css";

//app is the routing folder kind if a  stack so the top page is gonna be rendered which is the layout
//one page functionality na use "slot"

export default function RootLayout() {
  return <Stack 
    screenOptions={{
      headerStyle:{
        backgroundColor:"ff8c00"},
        headerTintColor:"fff"
        
        }}
  />
}
