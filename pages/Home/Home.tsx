import { View, Text, ScrollView } from "react-native";
import { ReactNode } from "react";
import { SafeAreaProvider, SafeAreaView, initialWindowMetrics } from "react-native-safe-area-context";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";

import UsableScreen from "../../components/usableScreen";
import FilterBar from "../../components/filterBar";
import InputBox from "../../components/InputBox";
import ContentBox from "../../components/contentBox";
import ExpansionBar from "../../components/expansionBar";

let Image1 = require("../../assets/images/image1.jpg");
let Image2 = require("../../assets/images/image2.jpg");
let Image3 = require("../../assets/images/image3.jpg");

type PropsWithChildren = {
  navigation: any;
};

const Home: React.FC<PropsWithChildren> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsableScreen>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ flex: 1 }}>
            <FilterBar>
              <InputBox placeholder="Search..." icon={<AntDesign name="search1" size={24} color="black" />} />
              <InputBox placeholder="Where..." icon={<Feather name="map-pin" size={24} color="black" />} />
            </FilterBar>
          </View>
          <ExpansionBar>
            <Entypo name="sound-mix" size={24} color="black" />
          </ExpansionBar>
        </View>

        <ScrollView style={{ backgroundColor: "transparent", gap: 20 }} contentContainerStyle={{ gap: 20 }}>
          <ContentBox imageSrc={Image1} title={"Lisbon"} location={"1.3 km"} price={10} timetable={"10:00 - 20:00"} rate={8.6} />
          <ContentBox imageSrc={Image2} title={"Lisbon"} location={"1.8 km"} price={10} timetable={"10:00 - 20:00"} rate={8.1} />
          <ContentBox imageSrc={Image3} title={"Lisbon"} location={"2.1 km"} price={10} timetable={"10:00 - 20:00"} rate={8.6} />
          <ContentBox imageSrc={Image1} title={"Lisbon"} location={"2.3 km"} price={10} timetable={"10:00 - 20:00"} rate={10} />
          <ContentBox imageSrc={Image2} title={"Lisbon"} location={"4.4 km"} price={10} timetable={"10:00 - 20:00"} rate={7.2} />
          <ContentBox imageSrc={Image3} title={"Lisbon"} location={"5.1 km"} price={10} timetable={"10:00 - 20:00"} rate={5.4} />
        </ScrollView>
      </UsableScreen>
    </SafeAreaView>
  );
};

export default Home;
