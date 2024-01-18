import { ListRenderItemInfo } from "react-native";
import { ActivityType } from "../../constants/models";
import ContentBox from "../../components/contentBox";
import { activityListHandlerMock } from "../../constants/mockData";
import { addToStorage } from "../../functions/localStorage";
import storage from "../../constants/storage";

const renderActivityItem = (render: ListRenderItemInfo<ActivityType>, navigation: any) => (
  <ContentBox
    imageSrc={render.item.imageSrc}
    title={render.item.title}
    location={render.item.location}
    price={render.item.price}
    timetable={render.item.timetable}
    rate={render.item.rate}
    navigation={() => navigation.navigate("ActivityDetails", render.item)}
    onFavorite={async () => {
      await addToStorage(storage.favorite, render.item);
      console.log("Added to Favorite");
    }}
  />
);

const activityListHandler = activityListHandlerMock;

export { activityListHandler, renderActivityItem };
