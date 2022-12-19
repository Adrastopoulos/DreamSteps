import FaIcons from "@expo/vector-icons/FontAwesome";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React, { FC } from "react";
import { ScrollView, Text, TouchableHighlight, View } from "react-native";

type ItemProps = {
  rank: string;
  name: string;
  sleep: string;
  steps: string;
};

const Item: FC<ItemProps> = ({ rank, name, sleep, steps }) => (
  <View className="w-full flex flex-row items-center justify-evenly  bg-teal-300 border-b-4 border-r-4 mx-auto my-2 rounded-lg">
    <Text className="font-bold text-3xl font-[rainyhearts]">{rank}</Text>
    <Text className="font-bold text-4xl font-[rainyhearts]">{name}</Text>
    <Text className="font-bold text-3xl font-[rainyhearts]">{sleep}</Text>
    <Text className="font-bold text-3xl font-[rainyhearts]">{steps}</Text>
  </View>
);

const LeaderboardScreen: FC<NativeStackHeaderProps> = ({ navigation }) => {
  return (
    <View className="bg-teal-100 flex flex-col w-full h-full items-center p-5 pr-10">
      <View className="flex flex-row items-center w-full">
        <TouchableHighlight
          className="m-2 bg-red-500 h-12 w-12 flex items-center justify-center rounded-lg border-r-4 border-b-4"
          onPress={() => navigation.navigate("Home")}
        >
          <FaIcons
            name="close"
            size={32}
            color="white"
          />
        </TouchableHighlight>
        <Text className="mx-auto font-[thicc] text-4xl">Leaderboard</Text>
      </View>
      <View className="w-full p-3 bg-teal-500 border-b-4 border-r-4 mx-auto my-2 rounded-lg items-center flex flex-row justify-evenly">
        <Text className="font-[thicc]">Rank</Text>
        <Text className="font-[thicc]">Name</Text>
        <Text className="font-[thicc]">Sleep</Text>
        <Text className="font-[thicc]">Steps</Text>
      </View>
      <ScrollView className="w-full h-full bg-teal-200 rounded-xl p-4">
        <Item
          rank="#1"
          name="Kenechukwu"
          sleep="12h"
          steps="26k"
        />
        <Item
          rank="#2"
          name="Aprille"
          sleep="10h"
          steps="17k"
        />
        <Item
          rank="#3"
          name="Jack"
          sleep="7h"
          steps="15k"
        />
        <Item
          rank="#4"
          name="Gabriel"
          sleep="2h"
          steps="30k"
        />
        <Item
          rank="#5"
          name="Owen"
          sleep="5h"
          steps="500"
        />
        <Item
          rank="#6"
          name="Olivia"
          sleep="8h"
          steps="0"
        />
      </ScrollView>
    </View>
  );
};

export default LeaderboardScreen;
