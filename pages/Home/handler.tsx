import { ListRenderItemInfo } from "react-native";
import { ActivityType } from "../../constants/models";
import ContentBox from "../../components/contentBox";
import { activityListHandlerMock } from "../../constants/mockData";
import { addToStorage, removeFromStorage } from "../../functions/localStorage";
import storage from "../../constants/storage";

const renderActivityItem = (render: ListRenderItemInfo<ActivityType>, navigation: any, setActivityList: any) => (
  <ContentBox
    imageSrc={render.item.imageSrc}
    title={render.item.title}
    location={render.item.location}
    price={render.item.price}
    timetable={render.item.timetable}
    rate={render.item.rate}
    navigation={() => navigation.navigate("ActivityDetails", render.item)}
    onFavorite={async () => {
      await addToStorage(storage.favorite, { ...render.item, favorite: true });
      let itemIndex = Number(render.item.id.replace(/^\D+/g, ""));
      render.item.favorite = true;
      setActivityList((lastState: any[]) => {
        {
          let prev = [...lastState];
          prev.splice(itemIndex - 1, 1, render.item);
          return prev;
        }
      });
    }}
    onUnFavorite={async () => {
      //await addToStorage(storage.favorite, { ...render.item, favorite: true });
      await removeFromStorage(storage.favorite, render.item.id);
      let itemIndex = Number(render.item.id.replace(/^\D+/g, ""));
      render.item.favorite = false;
      setActivityList((lastState: any[]) => {
        {
          let prev = [...lastState];
          prev.splice(itemIndex - 1, 1, render.item);
          return prev;
        }
      });
    }}
    favorite={render.item.favorite}
  />
);

const activityListHandler = activityListHandlerMock;

export { activityListHandler, renderActivityItem };
