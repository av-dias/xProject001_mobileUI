import { View, ScrollView, FlatList, ListRenderItemInfo } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, Entypo, MaterialIcons, Ionicons } from "@expo/vector-icons";

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
  const [showIconFilter, setShowIconFilter] = useState(false);

  type ActivityItemData = {
    imageSrc: any;
    title: string;
    location: string;
    price: number;
    timetable: string;
    rate: number;
    address: string;
  };

  const activityData: ActivityItemData[] = [
    {
      imageSrc: Image1,
      title: "Bowling City Colombo",
      location: "1.3 km",
      price: 10,
      timetable: "10:00 - 20:00",
      rate: 8.6,
      address: "Rua dos Colombos",
    },
    { imageSrc: Image2, title: "Escape Lisbon", location: "1.8 km", price: 12, timetable: "09:00 - 21:00", rate: 8.1, address: "Rua dos Lisboas" },
    { imageSrc: Image3, title: "Golf", location: "2.1 km", price: 20, timetable: "09:00 - 22:00", rate: 8.6, address: "Rua dos Golfs" },
    {
      imageSrc: Image1,
      title: "Bowling City Belem",
      location: "2.3 km",
      price: 10,
      timetable: "11:00 - 21:00",
      rate: 10,
      address: "Rua do Belem",
    },
    { imageSrc: Image2, title: "Escape Belem", location: "4.4 km", price: 4, timetable: "12:00 - 16:00", rate: 7.2, address: "Rua dos Escapes" },
    { imageSrc: Image3, title: "Golf in Belem", location: "5.1 km", price: 16, timetable: "10:00 - 20:00", rate: 5.4, address: "Rua dos Golfs" },
  ];

  const renderActivityItem = (render: ListRenderItemInfo<ActivityItemData>) => (
    <ContentBox
      imageSrc={render.item.imageSrc}
      title={render.item.title}
      location={render.item.location}
      price={render.item.price}
      timetable={render.item.timetable}
      rate={render.item.rate}
      navigation={() => navigation.navigate("ActivityDetails", render.item)}
    />
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsableScreen>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ flex: 1 }}>
            <FilterBar>
              {!showIconFilter ? (
                <>
                  <InputBox placeholder="Search..." icon={<AntDesign name="search1" size={24} color="black" />} />
                  <InputBox placeholder="Where..." icon={<Feather name="map-pin" size={24} color="black" />} />
                </>
              ) : (
                <View style={{ flex: 1, borderRadius: 20, overflow: "hidden" }}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ borderRadius: 20, overflow: "hidden" }}
                    contentContainerStyle={{ gap: 20, borderRadius: 20, overflow: "hidden" }}
                  >
                    <ExpansionBar onPress={() => {}}>
                      <MaterialIcons name="sports-soccer" size={24} color="black" />
                    </ExpansionBar>
                    <ExpansionBar onPress={() => {}}>
                      <MaterialIcons name="sports-esports" size={24} color="black" />
                    </ExpansionBar>
                    <ExpansionBar onPress={() => {}}>
                      <MaterialIcons name="photo-camera" size={24} color="black" />
                    </ExpansionBar>
                    <ExpansionBar onPress={() => {}}>
                      <Ionicons name="trail-sign-outline" size={24} color="black" />
                    </ExpansionBar>
                    <ExpansionBar onPress={() => {}}>
                      <MaterialIcons name="sports-soccer" size={24} color="black" />
                    </ExpansionBar>
                    <ExpansionBar onPress={() => {}}>
                      <MaterialIcons name="sports-esports" size={24} color="black" />
                    </ExpansionBar>
                    <ExpansionBar onPress={() => {}}>
                      <MaterialIcons name="photo-camera" size={24} color="black" />
                    </ExpansionBar>
                    <ExpansionBar onPress={() => {}}>
                      <Ionicons name="trail-sign-outline" size={24} color="black" />
                    </ExpansionBar>
                  </ScrollView>
                </View>
              )}
              <ExpansionBar
                onPress={() => {
                  setShowIconFilter(!showIconFilter);
                }}
              >
                <Entypo name="sound-mix" size={24} color="black" />
              </ExpansionBar>
            </FilterBar>
          </View>
        </View>
        <FlatList ItemSeparatorComponent={() => <View style={{ height: 20 }} />} data={activityData} renderItem={renderActivityItem} />
      </UsableScreen>
    </SafeAreaView>
  );
};

export default Home;
