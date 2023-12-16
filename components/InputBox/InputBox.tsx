import { View, TextInput } from "react-native";
import { ReactNode } from "react";

import IconContainer from "../iconContainer";

type PropsWithChildren = {
  icon: ReactNode;
  placeholder: string;
  onSubmitEditing?: any;
};

const InputBox: React.FC<PropsWithChildren> = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "lightgray", borderRadius: 15, flexDirection: "row" }}>
      <IconContainer>{props.icon}</IconContainer>
      <TextInput style={{ flex: 3 }} placeholder={props.placeholder} onSubmitEditing={props.onSubmitEditing}></TextInput>
    </View>
  );
};

export default InputBox;
