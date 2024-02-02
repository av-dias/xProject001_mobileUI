import { View, ScrollView, FlatList, Modal, Alert, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import UsableScreen from "../../components/usableScreen";
import BackButton from "../../components/backButton";

import { FavoriteType, ActivityType } from "../../constants/models";
import { renderFavoriteItem, favoriteListHandler } from "./handler";
import { getFromStorage } from "../../functions/localStorage";
import storage from "../../constants/storage";
import { useFocusEffect } from "@react-navigation/native";

type PropsWithChildren = {
  navigation: any;
  route: { params: ActivityType[] } & any;
};

const FavoritesDetails: React.FC<PropsWithChildren> = (props) => {
  const [favoriteList, setFavoriteList] = useState<ActivityType[] | null>(null);

  useFocusEffect(
    React.useCallback(() => {
      async function getFavorites() {
        let tmpFavorites = await getFromStorage(storage.favorite);
        if (tmpFavorites && tmpFavorites != "") {
          let favorites = JSON.parse(tmpFavorites);
          favorites = favorites.filter((f: { favorite: boolean }) => f.favorite == true);
          setFavoriteList(favorites);
        }
      }
      getFavorites();
      console.log("Loading favorites details...");
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <UsableScreen>
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: -20, marginLeft: -15 }}>
          <BackButton navigation={props.navigation} toPage="Favorites" isAbsolute={false} />
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>Favorites</Text>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <FlatList
            style={{
              flex: 1,
            }}
            numColumns={2}
            columnWrapperStyle={{ gap: 5, alignSelf: "center" }}
            contentContainerStyle={{ alignItems: "flex-start", justifyContent: "space-between", gap: 5 }}
            data={favoriteList}
            renderItem={(activity) => renderFavoriteItem(activity, props.navigation, setFavoriteList)}
          />
        </View>
      </UsableScreen>
    </SafeAreaView>
  );
};

export default FavoritesDetails;
