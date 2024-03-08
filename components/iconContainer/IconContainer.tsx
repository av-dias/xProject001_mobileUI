import { View } from "react-native";
import { ReactNode } from "react";

type PropsWithChildren = {
  children: ReactNode;
};

const IconContainer: React.FC<PropsWithChildren> = (props) => {
  return <View style={{ paddingTop: 1, justifyContent: "center", alignItems: "center" }}>{props.children}</View>;
};

export default IconContainer;
