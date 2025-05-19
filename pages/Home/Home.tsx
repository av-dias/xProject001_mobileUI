import {
  View,
  ScrollView,
  FlatList,
  Modal,
  Alert,
  Text,
  Pressable,
} from "react-native";
import { useState, useEffect, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign, Feather, Entypo, Ionicons } from "@expo/vector-icons";
import color from "../../constants/color";

import UsableScreen from "../../components/usableScreen";
import FilterBar from "../../components/filterBar";
import InputBox from "../../components/InputBox";
import ExpansionBar from "../../components/expansionBar";
import CustomPressable from "../../components/customPressable";

import { renderActivityItem, activityListHandler } from "./handler";
import { ActivityType } from "../../models/models";
import { iconsfilter } from "../../constants/icons";
import { getFromStorage } from "../../storage/baseStorage";
import storage from "../../constants/storage";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { hideNavBar } from "../../utility/hideNavBar";
import BottomSheet from "../../components/bottomSheet";
import { checkUpdates } from "../../utility/devUpdate";
import {
  addFavoriteFolder,
  addItemToFavoriteFolder,
  getAllUniqueFavorites,
  getFavoriteFolders,
} from "../../storage/favoriteStorage";
import { TextInput } from "react-native-gesture-handler";

type PropsWithChildren = {
  navigation: any;
};

const Home: React.FC<PropsWithChildren> = ({ navigation }) => {
  const [showIconFilter, setShowIconFilter] = useState(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalFavoritesVisible, setModalFavoritesVisible] = useState(false);
  const [activityList, setActivityList] = useState<ActivityType[]>([
    ...activityListHandler,
  ]);
  const [offset, setOffset] = useState(0);
  const [newFolderVisible, setNewFolderVisible] = useState(false);
  const [favoriteList, setFavoriteList] = useState<string[]>([]);
  const [folderName, setFolderName] = useState<string>();
  const [selectedAtivity, setSelectedActivity] = useState<ActivityType | null>(
    null
  );

  useFocusEffect(
    React.useCallback(() => {
      async function checkUser() {
        let email = await getFromStorage(storage.email);
        if (email == "") setModalVisible(true);
        else setModalVisible(false);
      }
      async function loadFavorites() {
        let favorites = await getAllUniqueFavorites(storage.favorite);
        let resFavoritesList = await getFavoriteFolders(storage.favorite);

        setFavoriteList(resFavoritesList);

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
            <View
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: color.light.grayBlur,
              }}
            >
              <View
                style={{
                  height: 200,
                  width: "80%",
                  backgroundColor: "gray",
                  borderRadius: 20,
                }}
              >
                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 20,
                    gap: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Sign In to continue using the app.
                  </Text>
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
                  <InputBox
                    placeholder="Search..."
                    icon={<AntDesign name="search1" size={24} color="black" />}
                  />
                  <InputBox
                    placeholder="Where..."
                    icon={<Feather name="map-pin" size={24} color="black" />}
                  />
                </>
              ) : (
                <View style={{ flex: 1, borderRadius: 20, overflow: "hidden" }}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ borderRadius: 20, overflow: "hidden" }}
                    contentContainerStyle={{
                      gap: 20,
                      borderRadius: 20,
                      overflow: "hidden",
                    }}
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
          renderItem={(activity) =>
            renderActivityItem(
              activity,
              navigation,
              setActivityList,
              setModalFavoritesVisible,
              setSelectedActivity
            )
          }
          onScroll={(e) => hideNavBar(e, setOffset, offset, navigation)}
        />
      </UsableScreen>
      {modalFavoritesVisible && (
        <BottomSheet color={"lightgray"}>
          <View style={{ paddingHorizontal: 5, alignItems: "flex-end" }}>
            <Pressable
              style={{ padding: 10, backgroundColor: "transparent" }}
              onPress={() => {
                setModalFavoritesVisible(false);
              }}
            >
              <AntDesign name="closecircleo" size={20} color="black" />
            </Pressable>
          </View>
          <View style={{ flex: 1, padding: 10, paddingTop: 5, gap: 10 }}>
            {favoriteList &&
              favoriteList.map((folder) => (
                <Pressable
                  key={"Fav" + folder}
                  onPress={async () => {
                    setModalFavoritesVisible(false);
                    await addItemToFavoriteFolder(
                      storage.favorite,
                      selectedAtivity,
                      folder
                    );
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
                    <View
                      style={{
                        height: "auto",
                        width: 80,
                        backgroundColor: "lightgray",
                        borderRadius: 5,
                      }}
                    ></View>
                    <View
                      style={{
                        flex: 1,
                        backgroundColor: "lightgray",
                        borderRadius: 5,
                      }}
                    >
                      <View style={{ padding: 5 }}>
                        <Text style={{ fontWeight: "bold" }}>
                          {folder.toUpperCase()}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              ))}
            <View>
              <Pressable
                onPress={() => {
                  setNewFolderVisible(true);
                }}
              >
                <View
                  style={{
                    width: "auto",
                    padding: 10,
                    paddingLeft: 20,
                    backgroundColor: "transparent",
                    alignSelf: "flex-end",
                    alignItems: "flex-end",
                  }}
                >
                  <Text style={{ color: "blue" }}>New Folder</Text>
                </View>
              </Pressable>
            </View>
            {newFolderVisible && (
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
                  <View
                    style={{
                      height: "auto",
                      width: 80,
                      backgroundColor: "lightgray",
                      borderRadius: 5,
                    }}
                  ></View>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: "lightgray",
                      borderRadius: 5,
                    }}
                  >
                    <View style={{ padding: 5, paddingBottom: 0 }}>
                      <TextInput
                        onChangeText={(text) => {
                          setFolderName(text);
                        }}
                        placeholder="Folder Name"
                      ></TextInput>
                    </View>
                    <View
                      style={{
                        gap: 10,
                        marginTop: -5,
                        paddingRight: 5,
                        backgroundColor: "transparent",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        alignItems: "center",
                      }}
                    >
                      <Pressable
                        style={{ padding: 5, backgroundColor: "transparent" }}
                        onPress={async () => {
                          if (folderName) {
                            setFavoriteList((prev) => [...prev, folderName]);
                            addFavoriteFolder(storage.favorite, folderName);
                          } else {
                            alert("Please insert a folder name.");
                          }
                        }}
                      >
                        <AntDesign
                          name="checkcircleo"
                          size={22}
                          color="black"
                        />
                      </Pressable>
                      <Pressable
                        style={{ padding: 5, backgroundColor: "transparent" }}
                        onPress={() => {
                          alert("Cancel");
                        }}
                      >
                        <Ionicons
                          name="trash-bin-outline"
                          size={24}
                          color="black"
                        />
                      </Pressable>
                    </View>
                  </View>
                </View>
              </Pressable>
            )}
          </View>
        </BottomSheet>
      )}
    </SafeAreaView>
  );
};

export default Home;
