import { View, FlatList, Text } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import UsableScreen from "../../components/usableScreen";
import BackButton from "../../components/backButton";

import { ActivityType } from "../../models/models";
import { renderFavoriteItem } from "./handler";
import { useFocusEffect } from "@react-navigation/native";

type PropsWithChildren = {
  navigation: any;
  route: { params: ActivityType[] } & any;
};

const FavoritesDetails: React.FC<PropsWithChildren> = (props) => {
  const [favoriteList, setFavoriteList] = useState<ActivityType[] | null>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [folderName, setFolderName] = useState<string>();

  useFocusEffect(
    React.useCallback(() => {
      async function getFavorites() {
        setFavoriteList(props.route.params.list);
        setFolderName(props.route.params.folder);
        setIsLoading(false);
      }
      setIsLoading(true);
      setFavoriteList([]);
      setFolderName("");
      getFavorites();
      console.log("Loading favorites details...");
    }, [props.route.params])
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
            navigation={props.navigation}
            toPage="Favorites"
            isAbsolute={false}
          />
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>{folderName}</Text>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          {!isLoading && (
            <FlatList
              style={{
                flex: 1,
              }}
              numColumns={2}
              columnWrapperStyle={{ gap: 5, alignSelf: "center" }}
              contentContainerStyle={{
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 5,
              }}
              data={favoriteList}
              renderItem={(activity) =>
                renderFavoriteItem(activity, props.navigation, setFavoriteList)
              }
            />
          )}
        </View>
      </UsableScreen>
    </SafeAreaView>
  );
};

export default FavoritesDetails;
