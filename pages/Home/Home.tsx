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

import UsableScreen from "../../components/usableScreen";
import FilterBar from "../../components/filterBar";
import InputBox from "../../components/InputBox";
import ExpansionBar from "../../components/expansionBar";
import AlertModal from "../../components/alertModal";

import { renderActivityItem, activityListHandler } from "./handler";
import { ActivityType } from "../../models/models";
import { iconsfilter } from "../../constants/icons";
import { getFromStorage } from "../../storage/baseStorage";
import storage from "../../storage/storageKeys";
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
import FavoritesBottomSheet from "../../components/favoritesBottomSheet";

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
          <AlertModal
            navigation={navigation}
            title="Sign In to continue using the app"
          ></AlertModal>
        )}
        <View style={{ flexDirection: "row", gap: 10 }}>
          <View style={{ flex: 1 }}>
            <FilterBar
              setShowIconFilter={setShowIconFilter}
              showIconFilter={showIconFilter}
            ></FilterBar>
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
        <FavoritesBottomSheet
          newFolderVisible={newFolderVisible}
          favoriteList={favoriteList}
          selectedAtivity={selectedAtivity}
          folderName={folderName}
          setModalFavoritesVisible={setModalFavoritesVisible}
          setFolderName={setFolderName}
          setFavoriteList={setFavoriteList}
        ></FavoritesBottomSheet>
      )}
    </SafeAreaView>
  );
};

export default Home;
