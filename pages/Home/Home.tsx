import { View, ScrollView, FlatList, Modal, Alert, Text, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, Entypo } from "@expo/vector-icons";
import color from "../../constants/color";

import UsableScreen from "../../components/usableScreen";
import FilterBar from "../../components/filterBar";
import InputBox from "../../components/InputBox";
import ExpansionBar from "../../components/expansionBar";
import CustomPressable from "../../components/customPressable";

import { renderActivityItem, activityListHandler } from "./handler";
import { ActivityType } from "../../constants/models";
import { iconsfilter } from "../../constants/icons";
import { getFromStorage } from "../../functions/localStorage";
import storage from "../../constants/storage";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { hideNavBar } from "../../functions/hideNavBar";
import BottomSheet from "../../components/bottomSheet";
import { checkUpdates } from "../../functions/devUpdate";
import { getAllUniqueFavorites } from "../../functions/favorite";

type PropsWithChildren = {
  navigation: any;
};

const Home: React.FC<PropsWithChildren> = ({ navigation }) => {
  const [showIconFilter, setShowIconFilter] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalFavoritesVisible, setModalFavoritesVisible] = useState(false);
  const [activityList, setActivityList] = useState<ActivityType[]>([...activityListHandler]);
  const [offset, setOffset] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      async function checkUser() {
        let email = await getFromStorage(storage.email);
        if (email == "") setModalVisible(true);
      }
      async function loadFavorites() {
        let favorites = await getAllUniqueFavorites(storage.favorite);

        if (favorites) {
          setActivityList((lastValue) => {
            {
              let prev = [...lastValue];
              let listIndex: string[] = [];

              favorites.forEach((fav: ActivityType) => {
                listIndex.push(fav.id);
              });

              prev = prev.map((item) => {
                if (listIndex.includes(item.id)) {
                  return { ...item, favorite: true };
                } else {
                  return { ...item, favorite: false };
                }
              });

              return prev;
            }
          });
          console.log("Updating favorite list...");
        }
      }
      async function checkDevUpdates() {
        checkUpdates();
      }
      checkDevUpdates();
      checkUser();
      loadFavorites();
      console.log("Favorites loaded...");
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsableScreen>
        {modalVisible && (
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
        )}
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
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          data={activityList}
          renderItem={(activity) => renderActivityItem(activity, navigation, setActivityList, setModalFavoritesVisible)}
          onScroll={(e) => hideNavBar(e, setOffset, offset, navigation)}
        />
      </UsableScreen>
      {modalFavoritesVisible && (
        <BottomSheet color={"lightgray"}>
          <View style={{ flex: 1, padding: 10, paddingTop: 30 }}>
            <Pressable
              onPress={() => {
                setModalFavoritesVisible(false);
              }}
            >
              <View
                style={{
                  height: 80,
                  backgroundColor: "gray",
                  borderRadius: 10,
                  justifyContent: "center",
                  padding: 10,
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                <View style={{ height: "auto", width: 80, backgroundColor: "lightgray", borderRadius: 5 }}></View>
                <View style={{ flex: 1, backgroundColor: "lightgray", borderRadius: 5 }}>
                  <View style={{ padding: 5 }}>
                    <Text style={{ fontWeight: "bold" }}>Favorites</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          </View>
        </BottomSheet>
      )}
    </SafeAreaView>
  );
};

export default Home;
