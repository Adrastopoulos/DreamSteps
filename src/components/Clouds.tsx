import { FC, useEffect } from "react";
import { Animated, Image } from "react-native";

const CloudsMoving: FC<{
  offsetX: number;
  offsetY: number;
  delay: number;
  translation: number;
  scale: number;
}> = ({ offsetX, offsetY, delay, translation, scale }) => {
  const state = {
    xy: new Animated.ValueXY({ x: offsetX, y: offsetY }),
    scale: new Animated.Value(scale),
  };

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(state.xy.y, {
          useNativeDriver: true,
          toValue: translation,
          duration: 3000,
          delay,
        }),
        Animated.timing(state.xy.y, {
          useNativeDriver: true,
          toValue: 0,
          duration: 3000,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        transform: [
          { translateX: state.xy.x },
          { translateY: state.xy.y },
          { scale: state.scale },
        ],
      }}
    >
      <Image
        source={require("../../assets/clouds.png")}
        className="absolute"
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
