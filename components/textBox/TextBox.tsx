import { View, Text } from "react-native";
import { ReactNode } from "react";

import IconContainer from "../iconContainer";

type PropsWithChildren = { icon: ReactNode; text: string | number };

const TextBox: React.FC<PropsWithChildren> = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "transparent", borderRadius: 15, flexDirection: "row", alignContent: "flex-start" }}>
      <IconContainer>{props.icon}</IconContainer>
      <Text style={{ flex: 3 }}>{props.text}</Text>
    </View>
  );
};

export default TextBox;
