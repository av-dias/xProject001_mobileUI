import { View } from "react-native";
import { ListRenderItemInfo } from "react-native";
import { ActivityType } from "../../models/models";
import ContentBox from "../../components/contentBox";
import storage from "../../storage/storageKeys";
import { getDayOfWeek } from "../../constants/calendar";
import {
  addItemToFavoriteFolder,
  removeFavoriteToFolder,
} from "../../storage/favoriteStorage";
import { activeApi } from "../../service/serviceSelector";
import { useContext } from "react";
import { AppContext } from "../../contexts/appContext";
import { DEFAULT_FAVORITE_FOLDER } from "../../constants/enums";

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
  setSelectedActivity: any,
  isServerOnline: boolean,
  server: string
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
        // Make request to server
        await activeApi(isServerOnline, server).favoriteService.addFavorite(
          render.item.id,
          DEFAULT_FAVORITE_FOLDER
        );
        // Update UI using setState for responsiveness
        setActivityList((prev: ActivityType[]) =>
          prev.map((activity) =>
            activity.id === render.item.id
              ? { ...activity, favorite: true }
              : activity
          )
        );
        // Show Favorite Modal
        setModalFavoritesVisible(true);
        // Set Select Favorite to Save on Folder
        setSelectedActivity(render.item.id);
      }}
      onUnFavorite={async () => {
        await activeApi(isServerOnline, server).favoriteService.removeFavorite(
          render.item.id
        );
        setActivityList((prev: ActivityType[]) =>
          prev.map((activity) =>
            activity.id === render.item.id
              ? { ...activity, favorite: false }
              : activity
          )
        );
      }}
      favorite={render.item.favorite}
    />
  </View>
);

export { renderActivityItem };
