import { View, Pressable } from "react-native";
import { ReactNode, useState } from "react";

import IconContainer from "../iconContainer";

type Props = {
  children: ReactNode;
  onPress: () => void;
};

const ExpansionBar: React.FC<Props> = (props) => {
  return (
    <Pressable onPress={props.onPress} style={{ width: 50, backgroundColor: "lightgray", borderRadius: 20, justifyContent: "center" }}>
      <IconContainer>{props.children}</IconContainer>
    </Pressable>
  );
};

export default ExpansionBar;
