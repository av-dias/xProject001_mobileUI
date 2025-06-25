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
import FavoritesBottomSheet from "../../components/favoritesBottomSheet";
import { activeApi } from "../../service/serviceSelector";
import { AppContext } from "../../contexts/appContext";
import { DEFAULT_FAVORITE_FOLDER } from "../../constants/enums";

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
  const [selectedAtivity, setSelectedActivity] = useState<string>();

  /**
   * TODO: Remove this useEffect
   * This is a temporary solution to fetch the activity list.
   * For dev test only purpose
   * Use tanStack Query or React Query
   */
  useFocusEffect(
    React.useCallback(() => {
      async function loadLocalActivityFavorites(activityList: ActivityType[]) {
        let favorites = await activeApi(
          isServerOnline,
          server
        ).favoriteService.favorites();

        if (favorites) {
          return activityList.map((activity) => {
            if (favorites.includes(activity.id)) {
              return { ...activity, favorite: true };
            }
            return activity;
          });
        }

        return activityList;
      }
      async function fetchFavorities() {
        let favoriteFolders = await activeApi(
          isServerOnline,
          server
        ).favoriteService.favoriteFolders();

        setFavoriteList(
          favoriteFolders.filter((folder) => folder !== DEFAULT_FAVORITE_FOLDER)
        );
      }

      async function fetchActivities() {
        let activityList = await activeApi(
          isServerOnline,
          server
        ).activityService.activities();

        // Local Dev use only
        if (!isServerOnline)
          activityList = await loadLocalActivityFavorites(activityList);

        setActivityList(activityList);

        if (isServerOnline) {
          console.log("Fetching activity list from server...");
          console.log(`Result is: ${activityList}`);
        }
      }
      fetchActivities();
      fetchFavorities();
    }, [server])
  );

  useFocusEffect(
    React.useCallback(() => {
      async function checkUser() {
        let email = await getFromStorage(storage.email);
        if (email == "") setModalVisible(true);
        else setModalVisible(false);
      }
      async function checkDevUpdates() {
        checkUpdates();
      }
      checkDevUpdates();
      checkUser();
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
            <FilterBar />
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
              setSelectedActivity,
              isServerOnline,
              server
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
          isServerOnline={isServerOnline}
          server={server}
        ></FavoritesBottomSheet>
      )}
    </SafeAreaView>
  );
};

export default Home;
