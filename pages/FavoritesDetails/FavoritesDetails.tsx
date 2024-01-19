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
  route: { params: ActivityType[] } & any;
};

const FavoritesDetails: React.FC<PropsWithChildren> = (props) => {
  const [favoriteList, setFavoriteList] = useState<ActivityType[] | null>(null);

  useFocusEffect(
    React.useCallback(() => {
      async function getFavorites() {
        setFavoriteList(props.route.params);
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
            style={{
              backgroundColor: "transparent",
              flex: 1,
            }}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            data={favoriteList}
            renderItem={(activity) => renderFavoriteItem(activity, props.navigation, setFavoriteList)}
          />
        </View>
      </UsableScreen>
    </SafeAreaView>
  );
};

export default FavoritesDetails;
