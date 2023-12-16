import { View, Text, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView, initialWindowMetrics } from "react-native-safe-area-context";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";

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
          <Marker
            key={1}
            icon={Image1}
            coordinate={{ latitude: 38.753418, longitude: -9.188391 }}
            title={"Bowling City Colombo"}
            description={"Bowling"}
          ></Marker>
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default MapPage;
