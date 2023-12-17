import { ListRenderItemInfo } from "react-native";
import { ActivityType } from "../../constants/models";
import ContentBox from "../../components/contentBox";
import { activityListHandlerMock } from "../../constants/mockData";

const renderActivityItem = (render: ListRenderItemInfo<ActivityType>, navigation: any) => (
  <ContentBox
    imageSrc={render.item.imageSrc}
    title={render.item.title}
    location={render.item.location}
    price={render.item.price}
    timetable={render.item.timetable}
    rate={render.item.rate}
    navigation={() => navigation.navigate("ActivityDetails", render.item)}
  />
);

const activityListHandler = activityListHandlerMock;

export { activityListHandler, renderActivityItem };
