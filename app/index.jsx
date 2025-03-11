import { Button, Text, View } from "react-native";
import { styled } from "nativewind";
import { useRouter } from "expo-router";
import { Link } from "expo-router";

export default function Index() {
  const router = useRouter(); //using this we're going to push the page onto the
  
  return (
    <View >
      <Text>BiteRight</Text>
    
      <Text className="text-4xl">Healthy Eating</Text>
      <Text className="text-6xl font-bold">Simplified .</Text>

      <View>

        <Button title="go to next page" onPress={()=>{router.push("/(welcome)/screen1")}}></Button>
      </View>
      
    </View>
  );
}