import { View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import color from "../../constants/color";

type Props = {
  navigation: any;
  toPage: string;
  isAbsolute?: boolean;
};

const BackButton: React.FC<Props> = (props) => {
  return (
    <Pressable
      style={{ position: props.isAbsolute == false ? "relative" : "absolute", zIndex: 1, padding: 15, borderRadius: 20 }}
      onPress={() => {
        props.navigation.navigate(props.toPage);
      }}
    >
      <View style={{ backgroundColor: color.light.grayBlur, zIndex: 1, borderRadius: 20, padding: 0 }}>
        <AntDesign name="leftcircleo" size={30} color="black" />
      </View>
    </Pressable>
  );
};

export default BackButton;
