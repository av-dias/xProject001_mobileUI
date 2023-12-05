import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";

import UsableScreen from "../../components/usableScreen";
import ImageContainer from "../../components/imageContainer";
import TextBox from "../../components/textBox";
import IconContainer from "../../components/iconContainer";

import color from "../../constants/color";

type ActivityItemData = {
  imageSrc: any;
  title: string;
  location: string;
  price: number;
  timetable: string;
  rate: number;
  address: string;
};

type PropsWithChildren = {
  navigation: any;
  route: { params: ActivityItemData } & any;
};

const ActivityDetails: React.FC<PropsWithChildren> = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsableScreen>
        <View style={{ flex: 1, backgroundColor: "gray", borderRadius: 20, gap: 10, overflow: "hidden" }}>
          <View style={{ flex: 1 }}>
            <ImageContainer imageSrc={props.route.params.imageSrc} />
          </View>
          <View style={{ flex: 1, gap: 10, paddingHorizontal: 10 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ flex: 1, gap: 10, paddingHorizontal: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <View style={{ justifyContent: "center" }}>
                    <TextBox
                      icon={<FontAwesome5 name="icons" size={15} color="black" />}
                      text={props.route.params.title}
                      fontWeight={"bold"}
                      fontSize={20}
                    ></TextBox>
                  </View>
                  <View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                      <IconContainer>
                        <AntDesign name="hearto" size={30} color={color.light.red} />
                      </IconContainer>
                      <View style={{ position: "absolute" }}>
                        <Text style={{ fontSize: 12 }}>{props.route.params.rate}</Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{ gap: 1 }}>
                  <TextBox icon={<FontAwesome5 name="icons" size={12} color="black" />} text={props.route.params.address}></TextBox>
                  <TextBox
                    icon={<FontAwesome5 name="icons" size={12} color="black" />}
                    text={"Average cost: " + props.route.params.price + "€"}
                  ></TextBox>
                  <TextBox icon={<FontAwesome5 name="icons" size={12} color="black" />} text={props.route.params.timetable}></TextBox>
                </View>

                <View style={{ height: 60, backgroundColor: "lightgray", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                  <TextBox icon={<FontAwesome5 name="icons" size={12} color="black" />} text={"Earn 100 Points on reservation"} />
                </View>

                <View style={{ backgroundColor: "lightgray", borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10, gap: 10 }}>
                  <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                    <Text>Available</Text>
                    <Text>More {">"} </Text>
                  </View>
                  {/* Needs to be a flatList */}
                  <ScrollView horizontal contentContainerStyle={{ gap: 20 }}>
                    <View
                      style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: "gray", alignItems: "center", justifyContent: "center" }}
                    >
                      <Text>X</Text>
                    </View>
                    <View
                      style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: "gray", alignItems: "center", justifyContent: "center" }}
                    >
                      <Text>X</Text>
                    </View>
                    <View
                      style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: "gray", alignItems: "center", justifyContent: "center" }}
                    >
                      <Text>X</Text>
                    </View>
                    <View
                      style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: "gray", alignItems: "center", justifyContent: "center" }}
                    >
                      <Text>X</Text>
                    </View>
                    <View
                      style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: "gray", alignItems: "center", justifyContent: "center" }}
                    >
                      <Text>X</Text>
                    </View>
                  </ScrollView>
                </View>

                <View style={{ backgroundColor: "lightgray", borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10, gap: 10 }}>
                  <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                    <Text>Reviews</Text>
                  </View>
                  {/* Needs to be a flatList */}
                  <ScrollView contentContainerStyle={{ gap: 20 }}>
                    <View
                      style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: "gray", alignItems: "center", justifyContent: "center" }}
                    >
                      <Text>X</Text>
                    </View>
                    <View
                      style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: "gray", alignItems: "center", justifyContent: "center" }}
                    >
                      <Text>X</Text>
                    </View>
                    <View
                      style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: "gray", alignItems: "center", justifyContent: "center" }}
                    >
                      <Text>X</Text>
                    </View>
                    <View
                      style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: "gray", alignItems: "center", justifyContent: "center" }}
                    >
                      <Text>X</Text>
                    </View>
                    <View
                      style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: "gray", alignItems: "center", justifyContent: "center" }}
                    >
                      <Text>X</Text>
                    </View>
                  </ScrollView>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </UsableScreen>
    </SafeAreaView>
  );
};

export default ActivityDetails;
