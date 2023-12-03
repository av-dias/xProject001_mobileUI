import { View } from "react-native";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContentBox: React.FC<Props> = (props) => {
  return (
    <View style={{ width: "100%", height: 205, backgroundColor: "gray", borderRadius: 20 }}>
      <View></View>
      <View></View>
    </View>
  );
};

export default ContentBox;
