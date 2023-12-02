import { View, Text, Pressable } from "react-native";
import { ReactNode } from "react";

type Props = { children: ReactNode };

const FilterBar: React.FC<Props> = (props) => {
  return (
    <View style={{ width: "100%", height: 60, backgroundColor: "gray", borderRadius: 20, flexDirection: "row", padding: 10, gap: 10 }}>
      {props.children}
    </View>
  );
};

export default FilterBar;
