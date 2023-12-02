import { View } from "react-native";
import { ReactNode } from "react";

import IconContainer from "../iconContainer";

type PropsWithChildren = { icon: any };

const InputBox: React.FC<PropsWithChildren> = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "lightgray", borderRadius: 15 }}>
      <IconContainer>{props.icon}</IconContainer>
      <View></View>
    </View>
  );
};

export default InputBox;
