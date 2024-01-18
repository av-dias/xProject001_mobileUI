import { favoriteListHandlerMock } from "../../constants/mockData";
import { ListRenderItemInfo } from "react-native";
import { FavoriteType } from "../../constants/models";
import { View, Text } from "react-native";

const renderFavoriteItem = (render: ListRenderItemInfo<FavoriteType>, navigation: any) => (
  <View
    style={{ flex: 1 / 2, backgroundColor: "lightblue", width: "45%", aspectRatio: 1, margin: 5, justifyContent: "center", alignItems: "center" }}
  >
    <Text>{render.item.name}</Text>
  </View>
);
const favoriteListHandler = favoriteListHandlerMock;

export { favoriteListHandler, renderFavoriteItem };
