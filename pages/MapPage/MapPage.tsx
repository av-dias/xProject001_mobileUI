import { View, Text, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView, initialWindowMetrics } from "react-native-safe-area-context";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

import { markerHandler } from "./handler";

type PropsWithChildren = {
  navigation: any;
};

let Image1 = require("../../assets/images/image1-small.jpg");

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
              <Marker
                key={markerItem.id}
                icon={markerItem.marker}
                coordinate={markerItem.coordinates}
                title={markerItem.title}
                description={markerItem.type}
              />
            );
          })}
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default MapPage;
