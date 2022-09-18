import { FC } from "react";
import { Animated, Image } from "react-native";

const CloudsMoving: FC<{
  offsetX: number;
  offsetY: number;
  delay: number;
  translation: number;
  scale: number;
}> = ({ offsetX, offsetY, delay, translation, scale }) => {
  const state = {
    height: new Animated.Value(offsetY),
    horizontal: new Animated.Value(offsetX),
    scale: new Animated.Value(scale),
  };

  const _start = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(state.height, {
          toValue: translation,
          duration: 5000,
          delay,
          useNativeDriver: true,
        }),
        Animated.timing(state.height, {
          toValue: 0,
          duration: 5000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  _start();

  return (
    <Animated.View
      style={{
        transform: [
          { translateY: state.height },
          { translateX: state.horizontal },
          { scale: state.scale },
        ],
      }}
    >
      <Image
        source={require("../../assets/clouds.png")}
        className={`absolute`}
      />
    </Animated.View>
  );
};

const Clouds: FC = () => {
  return (
    <>
      <CloudsMoving
        offsetX={300}
        offsetY={200}
        delay={500}
        translation={50}
        scale={1.5}
      />
      <CloudsMoving
        offsetX={0}
        offsetY={200}
        delay={200}
        translation={-30}
        scale={1}
      />
      <CloudsMoving
        offsetX={500}
        offsetY={-200}
        delay={1000}
        translation={10}
        scale={0.8}
      />
    </>
  );
};

export default Clouds;
