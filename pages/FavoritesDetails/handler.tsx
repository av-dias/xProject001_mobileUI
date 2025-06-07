import { View } from "react-native";

import { favoriteListHandlerMock } from "../../mocks/data/favorites/favoriteList";
import { ListRenderItemInfo } from "react-native";
import { ActivityType } from "../../models/models";
import ContentBox from "../../components/contentBox";
import storage from "../../storage/storageKeys";
import { removeFavoriteToFolder } from "../../storage/favoriteStorage";

const renderFavoriteItem = (
  render: ListRenderItemInfo<ActivityType>,
  navigation: any,
  setFavoriteList: any
) => (
  <View style={{ width: "49%", aspectRatio: 1 }}>
    <ContentBox
      imageSrc={render.item.imageSrc}
      title={render.item.title}
      price={render.item.price}
      rate={render.item.rate}
      navigation={() => navigation.navigate("ActivityDetails", render.item)}
      onUnFavorite={async () => {
        //await addToStorage(storage.favorite, { ...render.item, favorite: true });
        await removeFavoriteToFolder(storage.favorite, render.item.id);
        render.item.favorite = false;
        setFavoriteList((lastState: any[]) => {
          {
            let prev = [...lastState];
            prev = prev.filter((item) => item.id != render.item.id);
            return prev;
          }
        });
      }}
      favorite={render.item.favorite}
    />
  </View>
);

const favoriteListHandler = favoriteListHandlerMock;

export { favoriteListHandler, renderFavoriteItem };
