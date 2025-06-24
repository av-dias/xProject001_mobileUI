import { View, FlatList, Text } from "react-native";
import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import UsableScreen from "../../components/usableScreen";

import { renderFavoriteItem } from "./handler";
import { useFocusEffect } from "@react-navigation/native";
import { AppContext } from "../../contexts/appContext";
import { activeApi } from "../../service/serviceSelector";

// LOCAL DEV ONLY
import { activityListHandlerMock } from "../../mocks/data/activity/activityList";
import BackButton from "../../components/backButton";

type PropsWithChildren = {
  navigation: any;
};

const Favorites: React.FC<PropsWithChildren> = ({ navigation }) => {
  /* Dev Zone Start */
  const { serverConfig, isServerOnline } = useContext(AppContext);
  const [server] = serverConfig;
  /* Dev Zone End */

  const [favoriteFolders, setFavoriteFolders] = useState<any>([]);

  useFocusEffect(
    React.useCallback(() => {
      async function getFavorites() {
        let folderWithFavorites = await activeApi(
          isServerOnline,
          server
        ).favoriteService.folderedFavorites();

        // Local Dev Only
        if (!isServerOnline) {
          const localFolderFav = folderWithFavorites.map((folder) => ({
            ...folder,
            activityList: folder.activityList.map((activityId: string) => {
              let found = activityListHandlerMock.find(
                (a) => a.id === activityId
              );
              if (found) return { ...found, favorite: true };
            }),
          }));
          setFavoriteFolders(localFolderFav);
        } else {
          setFavoriteFolders(folderWithFavorites);
        }
      }
      getFavorites();
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsableScreen>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: -15,
          }}
        >
          <BackButton
            navigation={navigation}
            toPage="Home"
            isAbsolute={false}
          />
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Favorites</Text>
        </View>
        <FlatList
          numColumns={2}
          style={{
            backgroundColor: "transparent",
            flex: 1,
          }}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          contentContainerStyle={{ gap: 10 }}
          columnWrapperStyle={{ gap: 10 }}
          data={favoriteFolders}
          renderItem={(activity) => renderFavoriteItem(activity, navigation)}
        />
      </UsableScreen>
    </SafeAreaView>
  );
};

export default Favorites;
