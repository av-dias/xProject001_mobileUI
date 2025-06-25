import { View } from "react-native";
import { ListRenderItemInfo } from "react-native";
import { ActivityType } from "../../models/models";
import ContentBox from "../../components/contentBox";
import { getDayOfWeek } from "../../constants/calendar";
import { activeApi } from "../../service/serviceSelector";
import { DEFAULT_FAVORITE_FOLDER } from "../../constants/enums";

const getTimeFromTimeTable = (time: string) => {
  let timetableJSON = JSON.parse(time);
  let date = new Date();
  let todayDay = date.getDay();
  let todayHour = date.getHours();
  const timeTable = timetableJSON[getDayOfWeek(todayDay)];

  if (timeTable.start == "Closed") {
    return timeTable.start;
  }

  const startHour = Number(timeTable.start.split(":")[0]);
  const endHour = Number(timeTable.end.split(":")[0]);

  if (todayHour < startHour)
    return `Opens in less than ${startHour - todayHour}`;
  else if (todayHour > endHour) return "Closed";
  else if (endHour - todayHour <= 2)
    return `Closing in ${endHour - todayHour}h`;
  else return null;
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
