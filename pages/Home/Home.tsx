import { View, ScrollView, FlatList, Modal, Alert, Text } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";
import color from "../../constants/color";

import UsableScreen from "../../components/usableScreen";
import FilterBar from "../../components/filterBar";
import InputBox from "../../components/InputBox";
import ExpansionBar from "../../components/expansionBar";
import CustomPressable from "../../components/customPressable";

import { activityListHandler } from "./handler";
import { renderActivityItem } from "./handler";
import { ActivityType } from "../../constants/models";
import { iconsfilter } from "../../constants/icons";

type PropsWithChildren = {
  navigation: any;
};

const Home: React.FC<PropsWithChildren> = ({ navigation }) => {
  const [showIconFilter, setShowIconFilter] = useState(false);
  const [activityList, setActivityList] = useState<ActivityType[]>([]);

  useEffect(() => {
    setActivityList(activityListHandler);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsableScreen>
        <Modal
          transparent={true}
          style={{ alignItems: "center", justifyContent: "center" }}
          animationType="slide"
          visible={true}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center", backgroundColor: color.light.grayBlur }}>
            <View style={{ height: 200, width: "80%", backgroundColor: "gray", borderRadius: 20 }}>
              <View style={{ width: "100%", justifyContent: "center", alignItems: "center", padding: 20, gap: 20 }}>
                <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center" }}>Sign In to continue using the app.</Text>
                <View style={{ width: "50%" }}>
                  <CustomPressable
                    color={color.light.primary}
                    text="Start"
                    onPress={() => {
                      navigation.navigate("Login");
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>
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
                    {iconsfilter.map((filter) => {
                      return (
                        <ExpansionBar key={filter.name} onPress={() => {}}>
                          {filter.icon}
                        </ExpansionBar>
                      );
                    })}
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
        <FlatList
          ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
          data={activityList}
          renderItem={(activity) => renderActivityItem(activity, navigation)}
        />
      </UsableScreen>
    </SafeAreaView>
  );
};

export default Home;
