import React from 'react';
import {Text, View} from 'react-native';

type Props = {
  text: string;
  classes?: string;
};

const Button: React.FC<Props> = ({text, classes}) => (
  <View className={`${classes} w-32 text-white my-2 rounded`}>
    <Text className="font-bold mx-auto my-2 font-[rainyhearts] text-xl">{text}</Text>
  </View>
);

export default Button;
