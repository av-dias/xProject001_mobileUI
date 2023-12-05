import { View, Text } from "react-native";
import { ReactNode } from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

import IconContainer from "../iconContainer";

import color from "../../constants/color";

type PropsWithChildren = {
  title: string;
  text: string;
  rate: number;
};

const ReviewBox: React.FC<PropsWithChildren> = (props) => {
  return (
    <View style={{ borderRadius: 10, backgroundColor: "gray", padding: 5 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <View style={{ alignItems: "center", flexDirection: "row", gap: 10 }}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 10,
              backgroundColor: "lightgray",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 15 }}>X</Text>
          </View>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>{props.title}</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <IconContainer>
            <AntDesign name="hearto" size={30} color={color.light.red} />
          </IconContainer>
          <View style={{ position: "absolute" }}>
            <Text style={{ fontSize: 12 }}>{props.rate}</Text>
          </View>
        </View>
      </View>

      <Text>{props.text}</Text>
    </View>
  );
};

export default ReviewBox;
