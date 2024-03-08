import { View, Text, ScrollView, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useState, useEffect } from "react";

import UsableScreen from "../../components/usableScreen";
import ImageContainer from "../../components/imageContainer";
import TextBox from "../../components/textBox";
import IconContainer from "../../components/iconContainer";
import PreviewComponent from "../../components/reviewComponent";
import ReviewBox from "../../components/reviewBox";
import BackButton from "../../components/backButton";

import { heartIcon } from "../../constants/icons";
import { reviewListHandler, availableListHandler } from "./handler";
import { ReviewType, AvailableType } from "../../constants/models";
import { hideNavBar } from "../../functions/hideNavBar";

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
  const [offset, setOffset] = useState(0);
  const [reviewList, setReviewList] = useState<ReviewType[]>([]);
  const [availableList, setAvailableList] = useState<AvailableType[]>([]);
  const [timetable, setTimetable] = useState<any>({
    Fri: { end: "00:00", start: "00:00" },
    Mon: { end: "00:00", start: "00:00" },
    Sat: { end: "00:00", start: "00:00" },
    Sun: { end: "00:00", start: "00:00" },
    Thu: { end: "00:00", start: "00:00" },
    Tue: { end: "00:00", start: "00:00" },
    Wed: { end: "00:00", start: "00:00" },
  });

  useEffect(() => {
    setReviewList(reviewListHandler);
    setAvailableList(availableListHandler);
    setTimetable(JSON.parse(props.route.params.timetable));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsableScreen>
        <BackButton navigation={props.navigation} toPage="Home" />
        <View style={{ flex: 1, backgroundColor: "transparent", borderRadius: 20, gap: 10, overflow: "hidden" }}>
          <View style={{ flex: 1 }}>
            <ImageContainer imageSrc={props.route.params.imageSrc} />
          </View>
          <View style={{ flex: 1, gap: 10, paddingHorizontal: 10 }}>
            <ScrollView showsVerticalScrollIndicator={false} onScroll={(e) => hideNavBar(e, setOffset, offset, props.navigation)}>
              <View style={{ flex: 1, gap: 5 }}>
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
                      <IconContainer>{heartIcon(30)}</IconContainer>
                      <View style={{ position: "absolute" }}>
                        <Text style={{ fontSize: 12 }}>{props.route.params.rate}</Text>
                      </View>
                    </View>
                  </View>
                </View>

                <View style={{ justifyContent: "center", alignContent: "center", gap: 0, paddingBottom: 5, paddingHorizontal: 10 }}>
                  <TextBox
                    viewSize={18}
                    fontSize={12}
                    icon={<FontAwesome5 name="icons" size={8} color="black" />}
                    text={props.route.params.address}
                  ></TextBox>
                  <TextBox
                    viewSize={18}
                    fontSize={12}
                    icon={<FontAwesome5 name="icons" size={8} color="black" />}
                    text={"Average cost: " + props.route.params.price + "€"}
                  ></TextBox>
                </View>

                <View
                  style={{
                    height: 70,
                    borderRadius: 10,
                    paddingVertical: 5,
                    marginBottom: 5,
                    flexDirection: "row",
                    backgroundColor: "lightgray",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <View style={{ alignItems: "center", gap: 2 }}>
                    <TextBox text={"Mon"} fontSize={12} />
                    <View>
                      <TextBox text={timetable.Mon.start} />
                      <TextBox text={timetable.Mon.end} />
                    </View>
                  </View>
                  <View style={{ alignItems: "center", gap: 2 }}>
                    <TextBox text={"Tue"} fontSize={12} />
                    <View>
                      <TextBox text={timetable.Tue.start} />
                      <TextBox text={timetable.Tue.end} />
                    </View>
                  </View>
                  <View style={{ alignItems: "center", gap: 2 }}>
                    <TextBox text={"Wed"} fontSize={12} />
                    <View>
                      <TextBox text={timetable.Wed.start} />
                      <TextBox text={timetable.Wed.end} />
                    </View>
                  </View>
                  <View style={{ alignItems: "center", gap: 2 }}>
                    <TextBox text={"Thu"} fontSize={12} />
                    <View>
                      <TextBox text={timetable.Thu.start} />
                      <TextBox text={timetable.Thu.end} />
                    </View>
                  </View>
                  <View style={{ alignItems: "center", gap: 2 }}>
                    <TextBox text={"Fri"} fontSize={12} />
                    <View>
                      <TextBox text={timetable.Fri.start} />
                      <TextBox text={timetable.Fri.end} />
                    </View>
                  </View>
                  <View style={{ alignItems: "center", gap: 2 }}>
                    <TextBox text={"Sat"} fontSize={12} />
                    <View>
                      <TextBox text={timetable.Sat.start} />
                      <TextBox text={timetable.Sat.end} />
                    </View>
                  </View>
                  <View style={{ alignItems: "center", gap: 2 }}>
                    <TextBox text={"Sun"} fontSize={12} />
                    <View>
                      <TextBox text={timetable.Sun.start} />
                      <TextBox text={timetable.Sun.end} />
                    </View>
                  </View>
                </View>
                <View style={{ height: 70, backgroundColor: "lightgray", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                  <TextBox icon={<FontAwesome5 name="icons" size={12} color="black" />} text={"Earn 100 Points on reservation"} />
                </View>

                <PreviewComponent title={"Available"} onPress={() => alert("Not Implemented Yet")}>
                  {/* Needs to be a flatList */}
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 10 }}>
                    {availableList.map((available) => {
                      return (
                        <View
                          key={available.id}
                          style={{ width: 60, height: 60, borderRadius: 10, backgroundColor: "gray", alignItems: "center", justifyContent: "center" }}
                        >
                          <Text>{available.title}</Text>
                        </View>
                      );
                    })}
                  </ScrollView>
                </PreviewComponent>

                <PreviewComponent title={"Review"} onPress={() => alert("Not Implemented Yet")}>
                  {/* Needs to be like top 5 */}
                  <View style={{ gap: 20 }}>
                    {reviewList.map((review) => {
                      return <ReviewBox key={review.id} title={review.title} text={review.text} rate={review.rate} />;
                    })}
                  </View>
                </PreviewComponent>
              </View>
            </ScrollView>
          </View>
        </View>
      </UsableScreen>
    </SafeAreaView>
  );
};

export default ActivityDetails;
