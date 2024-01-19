import { favoriteListHandlerMock } from "../../constants/mockData";
import { ListRenderItemInfo } from "react-native";
import { ActivityType, FavoriteType } from "../../constants/models";
import { View, Text, Pressable } from "react-native";
import ImageContainer from "../../components/imageContainer";
import color from "../../constants/color";

const renderFavoriteItem = (render: ListRenderItemInfo<FavoriteType>, navigation: any, favoriteActivityList: ActivityType[] | null) => (
  <View
    style={{ flex: 1 / 2, backgroundColor: color.light.grayBlur, aspectRatio: 1, justifyContent: "center", alignItems: "center", borderRadius: 20 }}
  >
    <Pressable
      style={{ width: "100%", aspectRatio: 1 }}
      onPress={() => {
        navigation.navigate("FavoritesDetails", favoriteActivityList);
      }}
    >
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          top: "45%",
          borderRadius: 10,
          backgroundColor: color.light.grayBlur,
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text>{render.item.name}</Text>
      </View>
      <View key={render.index} style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start" }}>
        {favoriteActivityList &&
          favoriteActivityList.map((favoriteActivity) => {
            return (
              <View key={favoriteActivity.id} style={{ width: favoriteActivityList.length == 1 ? "100%" : "50%", aspectRatio: 1 }}>
                <ImageContainer key={favoriteActivity.id} imageSrc={favoriteActivity.imageSrc} />
              </View>
            );
          })}
      </View>
    </Pressable>
  </View>
);

const favoriteListHandler = favoriteListHandlerMock;

export { favoriteListHandler, renderFavoriteItem };
