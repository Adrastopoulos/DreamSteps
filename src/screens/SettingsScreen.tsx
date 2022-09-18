import FaIcons from "@expo/vector-icons/FontAwesome";
import { NativeStackHeaderProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import React, { FC, useState } from "react";
import {
  ScrollView,
  Switch,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

import Button from "../components/Button";

type SettingProps = {
  setting: string;
  children: JSX.Element;
};

const Setting: FC<SettingProps> = ({ setting, children }) => {
  return (
    <View className="w-full flex flex-row items-center justify-between bg-teal-300 border-b-4 border-r-4 mx-auto my-2 rounded-lg px-3">
      <View>
        <Text className="font-bold text-4xl font-[rainyhearts]">{setting}</Text>
      </View>
      {children}
    </View>
  );
};

const SettingsScreen: FC<NativeStackHeaderProps> = ({ navigation }) => {
  const [sound, setSound] = useState(true);

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
        <Text className="mx-auto font-[thicc] text-4xl">Settings</Text>
      </View>
      <ScrollView className="w-full h-full bg-teal-200 rounded-xl p-4">
        <Text className="font-bold text-xl m-3 font-[thicc]">Account</Text>
        <Setting setting="Log out">
          <Button
            text="Logout"
            classes="bg-red-500"
          />
        </Setting>
        <Setting setting="Login with Facebook">
          <Button
            text="Login"
            classes="bg-blue-500"
          />
        </Setting>
        <Setting setting="Terms and Conditions">
          <Button
            text="View"
            classes="bg-green-500"
          />
        </Setting>
        <Setting setting="Privacy Policy">
          <Button
            text="View"
            classes="bg-green-500"
          />
        </Setting>
        <Setting setting="Tutorial">
          <Button
            text="View"
            classes="bg-green-500"
          />
        </Setting>
        <Text className="font-bold text-xl m-3 font-[thicc]">Game Options</Text>
        <Setting setting="Language">
          <Button
            text="Change"
            classes="bg-green-500"
          />
        </Setting>
        <Setting setting="Sound">
          <Switch
            trackColor={{ false: "#81b0ff", true: "#81b0ff" }}
            thumbColor={sound ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setSound(!sound)}
            value={sound}
          />
        </Setting>
        <Text className="font-bold text-xl m-3 font-[thicc]">Info</Text>
        <Setting setting="Studio Information">
          <Button
            text="View"
            classes="bg-orange-500"
          />
        </Setting>
        <Setting setting="Credits">
          <Button
            text="View"
            classes="bg-orange-500"
          />
        </Setting>
        <Setting setting="Version">
          <Text className="font-bold text-lg">0.0.1</Text>
        </Setting>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
