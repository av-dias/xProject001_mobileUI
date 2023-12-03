import { View, Text, ScrollView } from "react-native";
import { ReactNode } from "react";
import { SafeAreaProvider, SafeAreaView, initialWindowMetrics } from "react-native-safe-area-context";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";

import UsableScreen from "../../components/usableScreen";
import FilterBar from "../../components/filterBar";
import InputBox from "../../components/InputBox";
import ContentBox from "../../components/contentBox";
import ExpansionBar from "../../components/expansionBar";

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
          <ContentBox>Hi</ContentBox>
          <ContentBox>Hi</ContentBox>
          <ContentBox>Hi</ContentBox>
          <ContentBox>Hi</ContentBox>
          <ContentBox>Hi</ContentBox>
          <ContentBox>Hi</ContentBox>
        </ScrollView>
      </UsableScreen>
    </SafeAreaView>
  );
};

export default Home;
