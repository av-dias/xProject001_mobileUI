import { favoriteListHandlerMock } from "../../constants/mockData";
import { ListRenderItemInfo } from "react-native";
import { ActivityType, FavoriteType } from "../../constants/models";
import ContentBox from "../../components/contentBox";
import { removeFromStorage } from "../../functions/localStorage";
import storage from "../../constants/storage";

const renderFavoriteItem = (render: ListRenderItemInfo<ActivityType>, navigation: any, setFavoriteList: any) => (
  <ContentBox
    imageSrc={render.item.imageSrc}
    title={render.item.title}
    location={render.item.location}
    price={render.item.price}
    timetable={render.item.timetable}
    rate={render.item.rate}
    navigation={() => navigation.navigate("ActivityDetails", render.item)}
    onUnFavorite={async () => {
      //await addToStorage(storage.favorite, { ...render.item, favorite: true });
      await removeFromStorage(storage.favorite, render.item.id);
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
);

const favoriteListHandler = favoriteListHandlerMock;

export { favoriteListHandler, renderFavoriteItem };
