import { View, Image, Text, Pressable } from "react-native";
import { ReactNode } from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

import ImageContainer from "../imageContainer";
import TextBox from "../textBox";

import color from "../../constants/color";
import { heartIcon, fullHeartIcon } from "../../constants/icons";
import IconContainer from "../iconContainer";

type ImageSourcePropType = React.ComponentProps<typeof Image>["source"];

type Props = {
  title: string;
  location?: string;
  price?: number;
  timetable?: string;
  rate: number;
  imageSrc: ImageSourcePropType;
  navigation: any;
  onFavorite?: any;
  favorite: boolean;
  onUnFavorite?: any;
};

const ContentBox: React.FC<Props> = (props) => {
  return (
    <View style={{ flex: 1, width: "100%", backgroundColor: "gray", borderRadius: 20 }}>
      <View style={{ flex: 1 }}>
        <Pressable onPress={props.navigation}>
          <ImageContainer imageSrc={props.imageSrc} />
          <View style={{ position: "absolute", padding: 10, width: "100%", height: "100%", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
              <View style={{ backgroundColor: color.light.grayBlur, borderRadius: 20, paddingVertical: 5, paddingHorizontal: 10 }}>
                <TextBox text={props.title}></TextBox>
              </View>
              {props.timetable && (
                <View style={{ backgroundColor: color.light.grayBlur, borderRadius: 20, paddingVertical: 5, paddingHorizontal: 10 }}>
                  <TextBox text={props.timetable}></TextBox>
                </View>
              )}
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ flexDirection: "row", gap: 10 }}>
                {props.location && (
                  <View style={{ backgroundColor: color.light.grayBlur, borderRadius: 20, paddingVertical: 5, paddingHorizontal: 10 }}>
                    <TextBox text={props.location}></TextBox>
                  </View>
                )}
                <View style={{ backgroundColor: color.light.grayBlur, borderRadius: 20, paddingVertical: 5, paddingHorizontal: 10 }}>
                  <TextBox text={props.price + "€"}></TextBox>
                </View>
              </View>
            </View>
          </View>
          {!props.favorite ? (
            <Pressable
              style={{
                position: "absolute",
                width: 60,
                height: 60,
                bottom: 0,
                right: 0,
                justifyContent: "flex-end",
                alignContent: "center",
                alignItems: "center",
                zIndex: 10,
              }}
              onPress={props.onFavorite}
            >
              <View style={{ position: "absolute", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                <IconContainer>{heartIcon(30)}</IconContainer>
                <View style={{ position: "absolute" }}>
                  <Text style={{ fontSize: 12, color: "pink" }}>{props.rate}</Text>
                </View>
              </View>
            </Pressable>
          ) : (
            <Pressable
              style={{
                position: "absolute",
                width: 60,
                height: 60,
                bottom: 0,
                right: 0,
                justifyContent: "flex-end",
                alignContent: "center",
                alignItems: "center",
                zIndex: 10,
              }}
              onPress={props.onUnFavorite}
            >
              <View style={{ position: "absolute", alignContent: "center", alignItems: "center", justifyContent: "center" }}>
                <IconContainer>{fullHeartIcon(30)}</IconContainer>
                <View style={{ position: "absolute" }}>
                  <Text style={{ fontSize: 12, color: "black" }}>{props.rate}</Text>
                </View>
              </View>
            </Pressable>
          )}
        </Pressable>
      </View>
    </View>
  );
};

export default ContentBox;
