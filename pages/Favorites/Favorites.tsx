import { View, ScrollView, FlatList, Modal, Alert, Text } from "react-native";
import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import UsableScreen from "../../components/usableScreen";

import { FavoriteType, ActivityType } from "../../constants/models";
import { renderFavoriteItem, favoriteListHandler } from "./handler";
import { getFromStorage } from "../../functions/localStorage";
import storage from "../../constants/storage";
import { useFocusEffect } from "@react-navigation/native";

type PropsWithChildren = {
  navigation: any;
};

const Favorites: React.FC<PropsWithChildren> = ({ navigation }) => {
  const [favoriteFolders, setFavoriteFolders] = useState<FavoriteType[]>([]);
  const [favoriteList, setFavoriteList] = useState<ActivityType[] | null>(null);

  useFocusEffect(
    React.useCallback(() => {
      async function getFavorites() {
        setFavoriteFolders(favoriteListHandler);
        let favoriteList = await getFromStorage(storage.favorite);
        console.log("list from favorite get from storage");
        //console.log(favoriteList);
        if (favoriteList && favoriteList != "") {
          setFavoriteList(JSON.parse(favoriteList));
        } else {
          setFavoriteList(null);
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
            justifyContent: "center",
            alignContent: "center",
            flex: 1,
          }}
        >
          <FlatList
            numColumns={2}
            style={{
              backgroundColor: "transparent",
              flex: 1,
            }}
            ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
            data={favoriteFolders}
            renderItem={(activity) => renderFavoriteItem(activity, navigation, favoriteList)}
          />
        </View>
      </UsableScreen>
    </SafeAreaView>
  );
};

export default Favorites;
