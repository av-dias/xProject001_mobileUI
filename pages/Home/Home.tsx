import { View, FlatList } from "react-native";
import { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import UsableScreen from "../../components/usableScreen";
import FilterBar from "../../components/filterBar";
import AlertModal from "../../components/alertModal";

import { renderActivityItem } from "./handler";
import { ActivityType } from "../../models/models";
import { getFromStorage } from "../../storage/baseStorage";
import storage from "../../storage/storageKeys";
import React from "react";
import { useFocusEffect } from "@react-navigation/native";
import { hideNavBar } from "../../utility/hideNavBar";
import { checkUpdates } from "../../utility/devUpdate";
import {
  getAllUniqueFavorites,
  getFavoriteFolders,
} from "../../storage/favoriteStorage";
import FavoritesBottomSheet from "../../components/favoritesBottomSheet";
import { activeApi } from "../../service/serviceSelector";
import { AppContext } from "../../contexts/appContext";
import { activityListHandlerMock } from "../../mocks/data/activity/activityList";

type PropsWithChildren = {
  navigation: any;
};

const Home: React.FC<PropsWithChildren> = ({ navigation }) => {
  /* Dev Zone Start */
  const { serverConfig, isServerOnline } = useContext(AppContext);
  const [server] = serverConfig;
  /* Dev Zone End */
  const [showIconFilter, setShowIconFilter] = useState(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalFavoritesVisible, setModalFavoritesVisible] = useState(false);
  const [activityList, setActivityList] = useState<ActivityType[]>([]);
  const [offset, setOffset] = useState(0);
  const [newFolderVisible, setNewFolderVisible] = useState(false);
  const [favoriteList, setFavoriteList] = useState<string[]>([]);
  const [folderName, setFolderName] = useState<string>();
  const [selectedAtivity, setSelectedActivity] = useState<ActivityType | null>(
    null
  );

  /**
   * TODO: Remove this useEffect
   * This is a temporary solution to fetch the activity list.
   * For dev test only purpose
   */
  useFocusEffect(
    React.useCallback(() => {
      async function fetchData() {
        const activityList = await activeApi(
          isServerOnline,
          server
        ).activityService.list();

        setActivityList(activityListHandlerMock);

        if (isServerOnline) {
          console.log("Fetching activity list from server...");
          console.log(`Result is: ${activityList}`);
        }
      }
      fetchData();
    }, [server])
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
          //console.log("Updating favorite list...");
        }
      }
      async function checkDevUpdates() {
        checkUpdates();
      }
      checkDevUpdates();
      checkUser();
      loadFavorites();
      //console.log("Favorites loaded...");
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsableScreen>
        {modalVisible && (
          <AlertModal
            navigation={navigation}
            title="Sign In to continue using the app"
            setModalVisible={setModalVisible}
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
          setNewFolderVisible={setNewFolderVisible}
        ></FavoritesBottomSheet>
      )}
    </SafeAreaView>
  );
};

export default Home;
