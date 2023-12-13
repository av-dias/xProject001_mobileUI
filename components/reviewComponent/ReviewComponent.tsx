import { View, Text, Pressable } from "react-native";
import { ReactNode } from "react";

type Props = {
  title: string;
  onPress: () => void;
  children: ReactNode;
};

const PreviewComponent: React.FC<Props> = (props) => {
  return (
    <View style={{ backgroundColor: "lightgray", borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10, gap: 10 }}>
      <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
        <Text>{props.title}</Text>
        <View>
          <Pressable onPress={props.onPress}>
            <Text>More {">"}</Text>
          </Pressable>
        </View>
      </View>
      {props.children}
    </View>
  );
};

export default PreviewComponent;
