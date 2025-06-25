import { View, TextInput } from "react-native";
import { ReactNode } from "react";

import IconContainer from "../iconContainer";
import color from "../../constants/color";

type PropsWithChildren = {
  icon: ReactNode;
  placeholder: string;
  onSubmitEditing?: any;
};

const InputBox: React.FC<PropsWithChildren> = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.light.glass,
        borderRadius: 10,
        flexDirection: "row",
      }}
    >
      <View style={{ paddingHorizontal: 20, justifyContent: "center" }}>
        <IconContainer>{props.icon}</IconContainer>
      </View>
      <TextInput
        style={{ flex: 3 }}
        placeholder={props.placeholder}
        onSubmitEditing={props.onSubmitEditing}
      ></TextInput>
    </View>
  );
};

export default InputBox;
