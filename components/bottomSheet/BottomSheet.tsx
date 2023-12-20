import { useEffect } from "react";
import { View, Text, Pressable, Dimensions, StyleSheet } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;
const MIN_TRANSLATE_Y = -100;
type Props = { children: React.ReactNode };

const BottomSheet: React.FC<Props> = (props) => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
      translateY.value = Math.min(translateY.value, MIN_TRANSLATE_Y);
    })
    .onEnd(() => {
      if (translateY.value < -SCREEN_HEIGHT / 2) {
        translateY.value = withTiming(MAX_TRANSLATE_Y);
      } else if (translateY.value > -SCREEN_HEIGHT / 3) {
        translateY.value = withTiming(MIN_TRANSLATE_Y);
      }
    });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return { transform: [{ translateY: translateY.value }] };
  });

  useEffect(() => {
    translateY.value = withTiming(-SCREEN_HEIGHT / 4);
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[style.bottomSheetContainer, rBottomSheetStyle]}>
        <View style={style.line} />
        {props.children}
      </Animated.View>
    </GestureDetector>
  );
};

const style = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
  line: {
    position: "absolute",
    width: 100,
    height: 5,
    marginVertical: 10,
    backgroundColor: "gray",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
});

export default BottomSheet;
