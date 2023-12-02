import { View } from "react-native";
import { ReactNode } from "react";

type PropsWithChildren = {
  children: ReactNode;
};

const IconContainer: React.FC<PropsWithChildren> = (props) => {
  return <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 5 }}>{props.children}</View>;
};

export default IconContainer;
