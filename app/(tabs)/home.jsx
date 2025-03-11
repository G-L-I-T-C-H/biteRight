import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Svg, Circle } from "react-native-svg";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function HomeScreen() {
  const [selectedMeal, setSelectedMeal] = useState('Breakfast'); 

  const currentDate = new Date();
  const day = currentDate.toLocaleString('en-US', { weekday: 'long' });
  const date = currentDate.getDate();
  const month = currentDate.toLocaleString('en-US', { month: 'long' });
  const formattedDate = `${date} ${month}`

  const handleMealPress = (meal) => {
    setSelectedMeal(meal);
  };
  const kcal = 1566;
  const progress = (kcal / 2000) * 100; 

  const mealFoods = {
    Breakfast: [
      {
        name: "Oatmeal with Fruits",
        kcal: 350,
        protein: 10,
        fat: 5,
        carbs: 70,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsxx_LqAIi5auONfOlhS1NhjwPTg4ZwJqug&s",
      },
      {
        name: "Scrambled Eggs",
        kcal: 200,
        protein: 15,
        fat: 12,
        carbs: 2,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhNhkxgKJJ738Ycv_iEyfM5OwqSupIE66DIg&s",
      },
    ],
    Lunch: [
      {
        name: "Chicken Salad",
        kcal: 400,
        protein: 30,
        fat: 20,
        carbs: 20,
        image: "https://img.freepik.com/premium-vector/delicious-salad-with-chicken-cheese-hand-drawn-sketch_1322560-14198.jpg?semt=ais_hybrid",
      },
      {
        name: "Lentil Soup",
        kcal: 300,
        protein: 18,
        fat: 8,
        carbs: 45,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwkDcrmUtS6olSeffrxj0lgoftZQp55RyNWA&s",
      },
    ],
    Dinner: [
      {
        name: "Grilled Salmon",
        kcal: 450,
        protein: 40,
        fat: 25,
        carbs: 5,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMHuIpHestkfdDz8477wBynoaHaJU6EPLAWw&s",
      },
      {
        name: "Vegetable Stir-fry",
        kcal: 380,
        protein: 15,
        fat: 18,
        carbs: 50,
        image: "https://us.123rf.com/450wm/duckahouse/duckahouse2203/duckahouse220300027/183889476-stir-fried-crispy-pork-belly-with-chinese-kale-recipe-menu-on-white-background-kana-moo-krob-thai.jpg?ver=6",
      },
    ],
    Snacks: [
      {
        name: "Apple Slices",
        kcal: 100,
        protein: 1,
        fat: 0,
        carbs: 25,
        image: "https://i.pinimg.com/564x/92/77/9e/92779efcfa5e31c2a6654bac48a37c8c.jpg",
      },
      {
        name: "Yogurt",
        kcal: 150,
        protein: 10,
        fat: 3,
        carbs: 20,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5-5LZcdOyJiChZVm6qSCk753m7fnaOV_nVw&s",
      },
    ],
  };

  const getFoodList = () => {
    return mealFoods[selectedMeal] || mealFoods.Breakfast; // Default to Breakfast
  };

  return (
    <View className="flex-1 bg-white px-4 pt-12">
      {/* Header Section */}
      <View className="flex-row justify-between items-center">
        <View className="rounded-3xl border-gray-400 border-2 p-3 flex-row bg-[#f0f4f4]">
          <View className="mt-3 me-3">
            <MaterialCommunityIcons name="calendar" size={28} color="#15803d" className="mr-2" />
          </View>
        
          <View>
            <Text className="text-lg ">{day}</Text>
            <Text className="text-lg font-bold">{formattedDate}</Text>
          </View>

          <View className="mt-3 ml-2">
            <Entypo name="chevron-right" size={28} color="#15803d" className="ml-2" />
          </View> 
        </View>
        
        <Image
          source={{ uri: "https://i.imgur.com/K3KJ3w4.png" }}
          className="w-10 h-10 rounded-full"/>
      </View>

      {/* Nutrition Summary */}
      <View className="mt-4 bg-pink-200 p-4 rounded-3xl flex-row items-center justify-between">
  {/* Nutrition Values */}
  <View className="flex-1 flex-row justify-around">
    <View className="items-center">
      <Text className="text-2xl font-bold">87</Text>
      <Text className="text-gray-600 text-lg">Protein</Text>
    </View>
    <View className="items-center">
      <Text className="text-2xl font-bold">103</Text>
      <Text className="text-gray-600 text-lg">Fat</Text>
    </View>
    <View className="items-center">
      <Text className="text-2xl font-bold">167</Text>
      <Text className="text-gray-600 text-lg">Carbs</Text>
    </View>
  </View>

  {/* Calorie Progress Circle */}
  <View className="relative w-20 h-20">
    <Svg height="80" width="80" viewBox="0 0 100 100">
      <Circle cx="50" cy="50" r="45" stroke="#ddd" strokeWidth="10" fill="none" />
      <Circle
        cx="50"
        cy="50"
        r="45"
        stroke="green"
        strokeWidth="10"
        fill="none"
        strokeDasharray={`${progress * 2.8}, 280`}
        strokeLinecap="round"
        transform="rotate(-90 50 50)"
      />
    </Svg>
    <View className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
    <View className="items-center"> {/* Wrap in a View */}
        <Text className="text-lg font-bold">{kcal}</Text>
        <Text className="text-sm text-gray-600">kcal</Text>
      </View>

    </View>
  </View>
</View>


      {/* Meal Sections */}
      <View className="flex-row justify-between mt-4">
        <TouchableOpacity
          className={`px-4 py-2 rounded-lg ${selectedMeal === 'Breakfast' ? 'bg-green-700' : ''}`}
          onPress={() => handleMealPress('Breakfast')}
        >
          <Text className={`font-bold ${selectedMeal === 'Breakfast' ? 'text-white' : 'text-gray-500'}`}>Breakfast</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`px-4 py-2 rounded-lg ${selectedMeal === 'Lunch' ? 'bg-green-700' : ''}`}
          onPress={() => handleMealPress('Lunch')}
        >
          <Text className={`font-bold ${selectedMeal === 'Lunch' ? 'text-white' : 'text-gray-500'}`}>Lunch</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`px-4 py-2 rounded-lg ${selectedMeal === 'Dinner' ? 'bg-green-700' : ''}`}
          onPress={() => handleMealPress('Dinner')}
        >
          <Text className={`font-bold ${selectedMeal === 'Dinner' ? 'text-white' : 'text-gray-500'}`}>Dinner</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className={`px-4 py-2 rounded-lg ${selectedMeal === 'Snacks' ? 'bg-green-700' : ''}`}
          onPress={() => handleMealPress('Snacks')}
        >
          <Text className={`font-bold ${selectedMeal === 'Snacks' ? 'text-white' : 'text-gray-500'}`}>Snacks</Text>
        </TouchableOpacity>
      </View>

      {/* Food List */}
      <ScrollView className="mt-4">
        {getFoodList().map((item, index) => (
          <View key={index} className="p-4 flex-col rounded-3xl my-2 items-center border-2 border-[#FFA001]">
            <View className="flex-row mb-2">
              <Image source={{ uri: item.image }} className="w-16 h-16 rounded-full" />
              <View className="ml-4 flex-1">
                <View className="flex-row justify-between">
                  <View className="flex-col">
                    <Text className="text-xl font-bold mb-1">{item.name}</Text>
                    <Text className="text-gray-500 text-lg">🔥 {`${item.kcal} kcal • 100g`}</Text>
                  </View>
                  <MaterialCommunityIcons name="dots-horizontal" size={24} color="gray" />
                </View>
              </View>
            </View>
            <View className="flex-row justify-around mt-1 flex-1">
              <View className="flex-col items-center mr-6">
                <Text className="text-green-600 font-bold mr-1">{item.protein}g</Text>
                <Text className="text-xs text-gray-500">Protein</Text>
              </View>
              <View className="flex-col items-center mr-6 ml-6">
                <Text className="text-yellow-500 font-bold mr-1">{item.fat}g</Text>
                <Text className="text-xs text-gray-500">Fat</Text>
              </View>
              <View className="flex-col items-center ml-6">
                <Text className="text-orange-500 font-bold mr-1">{item.carbs}g</Text>
                <Text className="text-xs text-gray-500">Carbs</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
</View>
          );
        }
