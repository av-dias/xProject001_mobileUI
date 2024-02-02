import { View } from "react-native";
import { ReactNode } from "react";

type PropsWithChildren = {
  children: ReactNode;
};

const UsableScreen: React.FC<PropsWithChildren> = (props) => {
  return <View style={{ flex: 1, padding: 10, paddingBottom: 0, gap: 20, backgroundColor: "transparent" }}>{props.children}</View>;
};

export default UsableScreen;
