import { View, ScrollView, FlatList, Modal, Alert, Text } from "react-native";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import UsableScreen from "../../components/usableScreen";

import { FavoriteType } from "../../constants/models";
import { renderFavoriteItem, favoriteListHandler } from "./handler";

type PropsWithChildren = {
  navigation: any;
};

const Home: React.FC<PropsWithChildren> = ({ navigation }) => {
  const [favoriteList, setFavoriteList] = useState<FavoriteType[]>([]);

  useEffect(() => {
    setFavoriteList(favoriteListHandler);
  }, []);

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
            renderItem={(activity) => renderFavoriteItem(activity, navigation)}
          />
        </View>
      </UsableScreen>
    </SafeAreaView>
  );
};

export default Home;
