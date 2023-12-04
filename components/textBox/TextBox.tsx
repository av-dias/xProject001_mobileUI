import { View, Text } from "react-native";
import { ReactNode } from "react";

import IconContainer from "../iconContainer";

type PropsWithChildren = {
  icon: ReactNode;
  text: string | number;
  fontWeight: "normal" | "bold";
};

const TextBox: React.FC<PropsWithChildren> = (props) => {
  return (
    <View style={{ flexDirection: "row", borderRadius: 15 }}>
      <IconContainer>{props.icon}</IconContainer>
      <Text style={{ fontWeight: props.fontWeight }}>{props.text}</Text>
    </View>
  );
};

export default TextBox;
