import { View } from "react-native";
import { ReactNode } from "react";

type PropsWithChildren = {
  children: ReactNode;
};

const IconContainer: React.FC<PropsWithChildren> = (props) => {
  return <View style={{ padding: 10, justifyContent: "center", alignItems: "center" }}>{props.children}</View>;
};

export default IconContainer;
