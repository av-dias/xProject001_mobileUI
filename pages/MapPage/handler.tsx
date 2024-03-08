import { View } from "react-native";
import { activityListHandlerMock } from "../../constants/mockData";
import { ListRenderItemInfo } from "react-native";
import { ActivityType } from "../../constants/models";
import ContentBox from "../../components/contentBox";
import { getDayOfWeek } from "../../constants/calendar";

const markerHandler = activityListHandlerMock;

const getTimeFromTimeTable = (time: string) => {
  let timetableJSON = JSON.parse(time);
  let todayDay = new Date().getDay();
  if (timetableJSON[getDayOfWeek(todayDay)].start == "Closed") return timetableJSON[getDayOfWeek(todayDay)].start;
  else return timetableJSON[getDayOfWeek(todayDay)].start + " - " + timetableJSON[getDayOfWeek(todayDay)].end;
};

const renderActivityItem = (render: ListRenderItemInfo<ActivityType>, navigation: any) => (
  <View style={{ width: "100%", height: 205 }}>
    <ContentBox
      imageSrc={render.item.imageSrc}
      title={render.item.title}
      location={render.item.location}
      price={render.item.price}
      timetable={getTimeFromTimeTable(render.item.timetable)}
      rate={render.item.rate}
      navigation={() => navigation.navigate("ActivityDetails", render.item)}
      favorite={render.item.favorite}
    />
  </View>
);

const activityListHandler = activityListHandlerMock;

export { activityListHandler, markerHandler, renderActivityItem };
