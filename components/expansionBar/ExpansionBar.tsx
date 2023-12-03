import { View, Pressable } from "react-native";
import { ReactNode } from "react";

import IconContainer from "../iconContainer";

type Props = {
  children: ReactNode;
};

const ExpansionBar: React.FC<Props> = (props) => {
  return (
    <Pressable style={{ width: 60, backgroundColor: "gray", borderRadius: 50, justifyContent: "center" }}>
      <IconContainer>{props.children}</IconContainer>
    </Pressable>
  );
};

export default ExpansionBar;
