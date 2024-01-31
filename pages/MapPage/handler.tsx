import { View } from "react-native";
import { activityListHandlerMock } from "../../constants/mockData";
import { ListRenderItemInfo } from "react-native";
import { ActivityType } from "../../constants/models";
import ContentBox from "../../components/contentBox";

const markerHandler = activityListHandlerMock;

const renderActivityItem = (render: ListRenderItemInfo<ActivityType>, navigation: any) => (
  <View style={{ width: "100%", height: 205 }}>
    <ContentBox
      imageSrc={render.item.imageSrc}
      title={render.item.title}
      location={render.item.location}
      price={render.item.price}
      timetable={render.item.timetable}
      rate={render.item.rate}
      navigation={() => navigation.navigate("ActivityDetails", render.item)}
      favorite={render.item.favorite}
    />
  </View>
);

const activityListHandler = activityListHandlerMock;

export { activityListHandler, markerHandler, renderActivityItem };
