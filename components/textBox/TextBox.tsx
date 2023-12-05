import { View, Text } from "react-native";
import { ReactNode } from "react";

import IconContainer from "../iconContainer";

type PropsWithChildren = {
  icon: ReactNode;
  text: string | number;
  fontWeight?: "normal" | "bold";
  fontSize?: number | 10;
};

const TextBox: React.FC<PropsWithChildren> = (props) => {
  return (
    <View style={{ flexDirection: "row", borderRadius: 15, gap: 5 }}>
      <IconContainer>{props.icon}</IconContainer>
      <View style={{ justifyContent: "center" }}>
        <Text style={{ fontWeight: props.fontWeight, fontSize: props.fontSize }}>{props.text}</Text>
      </View>
    </View>
  );
};

export default TextBox;
