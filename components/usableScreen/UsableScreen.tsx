import { View } from "react-native";
import { ReactNode } from "react";
import color from "../../constants/color";

type PropsWithChildren = {
  children: ReactNode;
};

const UsableScreen: React.FC<PropsWithChildren> = (props) => {
  return <View style={{ flex: 1, padding: 10, paddingBottom: 0, gap: 10, backgroundColor: color.light.background }}>{props.children}</View>;
};

export default UsableScreen;
