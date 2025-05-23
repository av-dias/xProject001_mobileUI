import { View } from "react-native";
import { ListRenderItemInfo } from "react-native";
import { ActivityType } from "../../models/models";
import ContentBox from "../../components/contentBox";
import { activityListHandlerMock } from "../../mocks/mockData";
import storage from "../../storage/storageKeys";
import { getDayOfWeek } from "../../constants/calendar";
import {
  addItemToFavoriteFolder,
  removeFavoriteToFolder,
} from "../../storage/favoriteStorage";

const getTimeFromTimeTable = (time: string) => {
  let timetableJSON = JSON.parse(time);
  let todayDay = new Date().getDay();
  if (timetableJSON[getDayOfWeek(todayDay)].start == "Closed")
    return timetableJSON[getDayOfWeek(todayDay)].start;
  else
    return (
      timetableJSON[getDayOfWeek(todayDay)].start +
      " - " +
      timetableJSON[getDayOfWeek(todayDay)].end
    );
};

const renderActivityItem = (
  render: ListRenderItemInfo<ActivityType>,
  navigation: any,
  setActivityList: any,
  setModalFavoritesVisible: any,
  setSelectedActivity: any
) => (
  <View style={{ width: "100%", height: 205 }}>
    <ContentBox
      imageSrc={render.item.imageSrc}
      title={render.item.title}
      location={render.item.location}
      price={render.item.price}
      timetable={getTimeFromTimeTable(render.item.timetable)}
      rate={render.item.rate}
      navigation={() => navigation.navigate("ActivityDetails", render.item)}
      onFavorite={async () => {
        setModalFavoritesVisible(true);
        await addItemToFavoriteFolder(
          storage.favorite,
          { ...render.item, favorite: true },
          "favorites"
        );
        setSelectedActivity(render.item);
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
        await removeFavoriteToFolder(storage.favorite, render.item.id);
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
  </View>
);

const activityListHandler = activityListHandlerMock;

export { activityListHandler, renderActivityItem };
