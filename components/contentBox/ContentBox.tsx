import { View, Image, Text, Pressable } from "react-native";
import { ReactNode } from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

import ImageContainer from "../imageContainer";
import IconContainer from "../iconContainer";
import TextBox from "../textBox";

import { heartIcon } from "../../constants/icons";

type ImageSourcePropType = React.ComponentProps<typeof Image>["source"];

type Props = {
  title: string;
  location: string;
  price: number;
  timetable: string;
  rate: number;
  imageSrc: ImageSourcePropType;
  navigation: any;
};

const ContentBox: React.FC<Props> = (props) => {
  return (
    <View style={{ width: "100%", height: 205, backgroundColor: "gray", borderRadius: 20 }}>
      <View style={{ flex: 4 }}>
        <Pressable onPress={props.navigation}>
          <ImageContainer imageSrc={props.imageSrc} />
        </Pressable>
      </View>
      <View style={{ flex: 1, flexDirection: "row", padding: 5 }}>
        <View style={{ flex: 7 }}>
          <TextBox icon={<FontAwesome5 name="icons" size={12} color="black" />} text={props.title} fontWeight="bold" />
          <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", paddingRight: 5 }}>
            <TextBox icon={<FontAwesome5 name="icons" size={12} color="black" />} text={props.location} />
            <TextBox icon={<FontAwesome5 name="icons" size={12} color="black" />} text={props.price + "€"} />
            <TextBox icon={<FontAwesome5 name="icons" size={12} color="black" />} text={props.timetable} />
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <IconContainer>{heartIcon(25)}</IconContainer>
          <View style={{ position: "absolute" }}>
            <Text style={{ fontSize: 12 }}>{props.rate}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ContentBox;
