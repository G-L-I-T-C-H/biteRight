import { View, Text,Image } from 'react-native' ;
import {Tabs, Redirect } from 'expo-router';
import {icons} from "../../constants";
import Entypo from '@expo/vector-icons/Entypo';
//contains the bottom tabs and the corresponding screens to get routed to

//every thing is based on file structure and whereever name is required file is the one that needs to be passed 

const TabIcon = ({icon,name,color,focused}) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image source={icon}
          resizeMode = "contain"
          tintColor = {color}
          className = 'h-6 w-6'
      /> 
      <Text className={`${focused ? "font-semibold" : "font-normal"} text-xs text-[${color}]`}>
        {name}
      </Text>
    </View>

  )
}

const TabsLayout = () => {
  return (
     //empty react fragment within which we'll wrap everythin
    <> 
    <Tabs
    screenOptions={{tabBarShowLabel : false,
    tabBarActiveTintColor:"#FFA001",
    tabBarInactiveTintColor:"#CDCDE0",
    tabBarStyle:{}
    }}>
      <Tabs.Screen 
      name='home'
      options={{
        title:'Home',
        headerShown : false,
        tabBarIcon: ({color,focused}) => (
            <TabIcon
            icon = {icons.home}
            color = {color}
            name = "Home"
            focused={focused}
             />
        )
      }}
      />

      <Tabs.Screen 
      name='stock'
      options={{
        title:'Stock',
        headerShown : false,
        tabBarIcon: ({color,focused}) => (
            <TabIcon
            icon = {icons.plus}
            color = {color}
            name = "Stock"
            focused={focused}
             />
        )
      }}
      />

        <Tabs.Screen 
      name='meal-prep'
      options={{
        title:'Meal-Prep',
        headerShown : false,
        tabBarIcon: ({color,focused}) => (
            <TabIcon
            icon = {icons.plus}
            color = {color}
            name = "Prep"
            focused={focused}
             />
        )
      }}
      />
      <Tabs.Screen 
      name='tracker'
      options={{
        title:'Tracker',
        headerShown : false,
        tabBarIcon: ({color,focused}) => (
            <TabIcon
            icon = {icons.home}
            color = {color}
            name = "Track"
            focused={focused}
             />
        )
      }}
      />
    </Tabs>

    </>
  )
}

export default TabsLayout

