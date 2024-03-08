import { View, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";

import { activityListHandler, markerHandler, renderActivityItem } from "./handler";
import BottomSheet from "../../components/bottomSheet";
import { useEffect, useState } from "react";
import { ActivityType } from "../../constants/models";
import { hideNavBar } from "../../functions/hideNavBar";

type PropsWithChildren = {
  navigation: any;
};

const MapPage: React.FC<PropsWithChildren> = ({ navigation }) => {
  const [activityList, setActivityList] = useState<ActivityType[]>([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setActivityList(activityListHandler);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 38.749854,
            longitude: -9.183497,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          provider={PROVIDER_GOOGLE}
        >
          {markerHandler.map((markerItem) => {
            return (
              <Marker
                key={markerItem.id}
                coordinate={markerItem.coordinates}
                title={markerItem.title}
                description={markerItem.type}
                onPress={() => navigation.navigate("ActivityDetails", markerItem)}
              >
                <View style={{ width: 50, height: 50, borderRadius: 100, overflow: "hidden" }}>
                  <Image style={{ flex: 1, width: "auto", height: "auto" }} source={markerItem.imageSrc}></Image>
                </View>
              </Marker>
            );
          })}
        </MapView>
        <BottomSheet>
          <View style={{ flex: 1, padding: 10, paddingTop: 40 }}>
            <FlatList
              ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              data={activityList}
              renderItem={(activity) => renderActivityItem(activity, navigation)}
              contentContainerStyle={{}}
              onScroll={(e) => hideNavBar(e, setOffset, offset, navigation)}
            />
          </View>
        </BottomSheet>
      </View>
    </SafeAreaView>
  );
};

export default MapPage;
