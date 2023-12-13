import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useState, useEffect } from "react";

import UsableScreen from "../../components/usableScreen";
import ImageContainer from "../../components/imageContainer";
import TextBox from "../../components/textBox";
import IconContainer from "../../components/iconContainer";
import PreviewComponent from "../../components/reviewComponent";
import ReviewBox from "../../components/reviewBox";

import { heartIcon } from "../../constants/icons";
import { reviewListHandler, ReviewType, availableListHandler, AvailableType } from "./handler";

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
  const [reviewList, setReviewList] = useState<ReviewType[]>([]);
  const [availableList, setAvailableList] = useState<AvailableType[]>([]);

  useEffect(() => {
    setReviewList(reviewListHandler);
    setAvailableList(availableListHandler);
  }, []);

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
                      <IconContainer>{heartIcon(30)}</IconContainer>
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

                <PreviewComponent title={"Available"} onPress={() => alert("Not Implemented Yet")}>
                  {/* Needs to be a flatList */}
                  <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 20 }}>
                    {availableList.map((available) => {
                      return (
                        <View
                          key={available.id}
                          style={{ width: 50, height: 50, borderRadius: 10, backgroundColor: "gray", alignItems: "center", justifyContent: "center" }}
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
