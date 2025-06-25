import { Pressable } from "react-native";
import { ReactNode } from "react";

import IconContainer from "../iconContainer";
import color from "../../constants/color";

type Props = {
  children: ReactNode;
  onPress: () => void;
};

const ExpansionBar: React.FC<Props> = (props) => {
  return (
    <Pressable
      onPress={props.onPress}
      style={{
        height: 25,
        backgroundColor: color.light.glass,
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent: "center",
      }}
    >
      <IconContainer>{props.children}</IconContainer>
    </Pressable>
  );
};

export default ExpansionBar;
