import { View, Text, Image, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

import { markerHandler } from "./handler";
import BottomSheet from "../../components/bottomSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

type PropsWithChildren = {
  navigation: any;
};

const MapPage: React.FC<PropsWithChildren> = ({ navigation }) => {
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
        >
          {markerHandler.map((markerItem) => {
            return (
              <Marker key={markerItem.id} coordinate={markerItem.coordinates} title={markerItem.title} description={markerItem.type}>
                <View style={{ width: 50, height: 50, borderRadius: 100, overflow: "hidden" }}>
                  <Image style={{ flex: 1, width: "auto", height: "auto" }} source={markerItem.imageSrc}></Image>
                </View>
              </Marker>
            );
          })}
        </MapView>
        <BottomSheet />
      </View>
    </SafeAreaView>
  );
};

export default MapPage;
