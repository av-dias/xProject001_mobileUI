import { View, ScrollView, FlatList, Modal, Alert, Text } from "react-native";
import React, { useState } from "react";
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
  const [favoriteList, setFavoriteList] = useState<FavoriteType[]>([]);
  const [favoriteActivityList, setActivityFavoriteList] = useState<ActivityType[] | null>(null);

  useFocusEffect(
    React.useCallback(() => {
      async function getFavorites() {
        setFavoriteList(favoriteListHandler);
        let favoriteList = await getFromStorage(storage.favorite);

        if (favoriteList && favoriteList != "") {
          setActivityFavoriteList(JSON.parse(favoriteList));
        } else {
          setActivityFavoriteList(null);
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
            data={favoriteList}
            renderItem={(activity) => renderFavoriteItem(activity, navigation, favoriteActivityList)}
          />
        </View>
      </UsableScreen>
    </SafeAreaView>
  );
};

export default Favorites;
