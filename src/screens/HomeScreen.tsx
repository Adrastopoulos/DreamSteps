import FaIcons from "@expo/vector-icons/FontAwesome";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React, { FC } from "react";
import { Image, Text, TouchableHighlight, View } from "react-native";

import Clouds from "../components/Clouds";

const HomeScreen: FC<NativeStackHeaderProps> = ({ navigation }) => {
  return (
    <View className="bg-teal-100">
      <Clouds />
      <View className="flex flex-col w-full h-full justify-center items-center">
        <View className="w-full flex flex-col items-center justify-center">
          <View className="flex flex-row justify-center items-center">
            <Image
              source={require("../../assets/logo/individuals/D.png")}
              className="w-10 h-20"
            />
            <Image
              source={require("../../assets/logo/individuals/R.png")}
              className="w-10 h-20"
            />
            <Image
              source={require("../../assets/logo/individuals/E.png")}
              className="w-10 h-20"
            />
            <Image
              source={require("../../assets/logo/individuals/A.png")}
              className="w-10 h-20"
            />
            <Image
              source={require("../../assets/logo/individuals/M.png")}
              className="w-10 h-20"
            />
            <Image
              source={require("../../assets/logo/individuals/S.png")}
              className="w-10 h-20"
            />
            <Image
              source={require("../../assets/logo/individuals/T.png")}
              className="w-10 h-20"
            />
            <Image
              source={require("../../assets/logo/individuals/E.png")}
              className="w-10 h-20"
            />
            <Image
              source={require("../../assets/logo/individuals/P.png")}
              className="w-10 h-20"
            />
            <Image
              source={require("../../assets/logo/individuals/S.png")}
              className="w-10 h-20"
            />
          </View>
          <Text className="text-black text-2xl pl-[100px] mt-1 mb-5 font-[rainyhearts]">
            Sleep. Dream. Exercise. Repeat.
          </Text>
        </View>
        <View className="flex flex-row items-center">
          <TouchableHighlight
            className=" bg-teal-50 w-48 h-16 m-2 flex items-center justify-center rounded-xl border-r-4 border-b-4"
            onPress={() => navigation.navigate("Play")}
          >
            <Text className="font-[thicc] font-bold text-4xl text-black">
              Play!
            </Text>
          </TouchableHighlight>
          <View className="m-2 flex flex-col">
            <TouchableHighlight
              className="m-2 bg-orange-500 h-16 w-16 flex items-center justify-center rounded-lg border-r-4 border-b-4"
              onPress={() => navigation.navigate("Leaderboard")}
            >
              <FaIcons
                name="trophy"
                size={32}
                color="gold"
              />
            </TouchableHighlight>
            <TouchableHighlight
              className="m-2 bg-gray-500 h-16 w-16 flex items-center justify-center rounded-lg border-r-4 border-b-4"
              onPress={() => navigation.navigate("Settings")}
            >
              <FaIcons
                name="gear"
                size={48}
                color="white"
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
